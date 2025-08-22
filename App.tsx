import React, { useState, useEffect, useCallback } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultsScreen } from './components/ResultsScreen';
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

export const App: React.FC = () => {
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
    
    const competencyAnalysis = currentQuestions.reduce((acc, q) => {
      const isCorrect = answers[q.id] === q.correctAnswer;
      acc[q.competency] = acc[q.competency] || { total: 0, correct: 0 };
      acc[q.competency].total++;
      if (isCorrect) acc[q.competency].correct++;
      return acc;
    }, {} as Record<Competency, { total: number; correct: number }>);

    const incorrectQuestions = currentQuestions
      .filter(q => answers[q.id] !== q.correctAnswer)
      .map(q => ({
        ...q,
        userAnswer: answers[q.id]
      }));

    const newAttempt: Attempt = {
      date: new Date().toISOString(),
      score,
      totalQuestions: currentQuestions.length,
      correctAnswers: totalCorrect,
      incorrectQuestions,
      analysis: competencyAnalysis
    };

    setLastAttempt(newAttempt);
    setAttempts(prev => [...prev, newAttempt]);
    setGameState('results');
  }, [currentQuestions, setAttempts]);

  const goHome = useCallback(() => {
    setGameState('home');
  }, []);

  const renderGameState = () => {
    switch (gameState) {
      case 'quiz':
        return <QuizScreen questions={currentQuestions} onFinish={finishQuiz} />;
      case 'results':
        return (
          <div>
            <ResultsScreen attempt={lastAttempt} onTryAgain={startQuiz} onGoHome={goHome} />
          </div>
        );
      case 'home':
      default:
        return (
          <div>
            <HomeScreen onStartQuiz={startQuiz} attempts={attempts} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-1 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {renderGameState()}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-6 px-4 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm leading-relaxed">
            Desarrollado por <span className="font-semibold text-slate-100">Andrés Mauricio Grisales A.</span>
          </p>
          <p className="text-xs mt-2 text-slate-400">
            En el marco del desarrollo de estrategias para preparación en Saber Pro
          </p>
          <p className="text-xs text-slate-400">
            Universidad Católica Luis Amigó, Manizales • 2025
          </p>
        </div>
      </footer>
    </div>
  );
};
