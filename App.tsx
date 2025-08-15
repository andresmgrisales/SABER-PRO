
import React, { useState, useEffect, useCallback } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { StatisticsScreen } from './components/StatisticsScreen';
import { Question, Attempt, GameState, Competency } from './types';
import { QUESTIONS, TOTAL_QUESTIONS_PER_QUIZ } from './constants';
import { useLocalStorage } from './hooks/useLocalStorage';

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('home');
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [lastAttempt, setLastAttempt] = useState<Attempt | null>(null);
  const [attempts, setAttempts] = useLocalStorage('quizAttempts', []);
  const [statistics] = useLocalStorage('quizStatistics', {
    totalQuestions: 0,
    correctAnswers: 0,
    byCompetency: {
      [Competency.Interpretation]: { total: 0, correct: 0 },
      [Competency.Formulation]: { total: 0, correct: 0 },
      [Competency.Argumentation]: { total: 0, correct: 0 },
    },
    history: []
  });

  const startQuiz = useCallback(() => {
    const shuffledQuestions = shuffleArray(QUESTIONS);
    setCurrentQuestions(shuffledQuestions.slice(0, TOTAL_QUESTIONS_PER_QUIZ));
    setGameState('quiz');
  }, []);

  const finishQuiz = useCallback((answers: Record<string, string>) => {
    const totalCorrect = currentQuestions.reduce((count, q) => {
        return answers[q.id] === q.correctAnswer ? count + 1 : count;
    }, 0);

    const score = (totalCorrect / currentQuestions.length) * 100;

    const competencyAnalysis: Attempt['analysis'] = {
        [Competency.Interpretation]: { correct: 0, total: 0 },
        [Competency.Formulation]: { correct: 0, total: 0 },
        [Competency.Argumentation]: { correct: 0, total: 0 },
    };

    const incorrectQuestions: Attempt['incorrectQuestions'] = [];

    currentQuestions.forEach(q => {
        competencyAnalysis[q.competency].total++;
        if (answers[q.id] === q.correctAnswer) {
            competencyAnalysis[q.competency].correct++;
        } else {
            incorrectQuestions.push({
                ...q,
                userAnswer: answers[q.id] || 'No respondida',
            });
        }
    });

    const newAttempt: Attempt = {
        id: new Date().toISOString(),
        date: new Date().toLocaleString('es-CO'),
        score: parseFloat(score.toFixed(1)),
        analysis: competencyAnalysis,
        incorrectQuestions,
    };

    setLastAttempt(newAttempt);
    setAttempts(prev => [newAttempt, ...prev.slice(0, 9)]); // Keep last 10 attempts
    setGameState('results');
  }, [currentQuestions, setAttempts]);

  const goHome = useCallback(() => {
    setGameState('home');
    setLastAttempt(null);
  }, []);

  const renderGameState = () => {
    switch (gameState) {
      case 'quiz':
        return <QuizScreen questions={currentQuestions} onFinish={finishQuiz} />;
      case 'results':
        return lastAttempt && (
          <div>
            <ResultsScreen attempt={lastAttempt} onTryAgain={startQuiz} onGoHome={goHome} />
            <button
              onClick={() => setGameState('stats')}
              className="mt-4 w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors"
            >
              Ver Estadísticas
            </button>
          </div>
        );
      case 'stats':
        return (
          <div className="flex flex-col gap-4">
            <StatisticsScreen statistics={statistics} />
            <button
              onClick={goHome}
              className="mt-4 w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors"
            >
              Volver al Inicio
            </button>
          </div>
        );
      case 'home':
      default:
        return (
          <div>
            <HomeScreen onStartQuiz={startQuiz} attempts={attempts} />
            <button
              onClick={() => setGameState('stats')}
              className="mt-4 w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors"
            >
              Ver Estadísticas
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-4xl mx-auto">
        {renderGameState()}
      </main>
    </div>
  );
};

export default App;
