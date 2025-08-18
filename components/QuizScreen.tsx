import React, { useState, useEffect } from 'react';
import { Question, AttemptResult, Statistics, Competency } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface QuizScreenProps {
  questions: Question[];
  onFinish: (answers: Record<string, string>) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ questions, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [, , updateStatistics] = useLocalStorage<Statistics>('quizStatistics', {
    totalQuestions: 0,
    correctAnswers: 0,
    byCompetency: {
      [Competency.Interpretation]: { total: 0, correct: 0 },
      [Competency.Formulation]: { total: 0, correct: 0 },
      [Competency.Argumentation]: { total: 0, correct: 0 },
    },
    history: [],
  });
  
  const question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleOptionChange = (optionKey: string) => {
    setAnswers(prev => ({ ...prev, [question.id]: optionKey }));
    
    const attemptResult: AttemptResult = {
      questionId: question.id,
      competency: question.competency,
      isCorrect: optionKey === question.correctAnswer,
      timestamp: Date.now(),
    };
    
    updateStatistics(attemptResult);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    onFinish(answers);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full animate-fade-in">
      <header className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-slate-700">Pregunta {currentQuestionIndex + 1} de {questions.length}</h2>
          <span className="text-sm font-semibold text-blue-600">{question.competency}</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
      </header>

      <div className="mb-8">
        <p className="text-lg text-slate-800 leading-relaxed mb-4">{question.statement}</p>
        {question.image && (
          <div className="my-4 flex justify-center bg-slate-50 p-2 rounded-lg border border-slate-200">
            <img 
              src={`https://raw.githubusercontent.com/andresmgrisales/SABER-PRO/main/public/images/${question.image.replace('/images/', '').replace('./images/', '')}`}
              alt="Referencia para la pregunta" 
              className="max-w-full md:max-w-lg h-auto object-contain rounded-md"
              onError={(e) => {
                console.log('Error loading image:', question.image);
                (e.target as HTMLImageElement).style.display = 'none';
                const errorDiv = document.createElement('div');
                errorDiv.className = 'bg-red-50 border border-red-200 rounded p-4 text-red-700 text-center';
                errorDiv.innerHTML = `⚠️ Imagen requerida: ${question.image}`;
                (e.target as HTMLImageElement).parentNode?.appendChild(errorDiv);
              }}
            />
          </div>
        )}
        <div className="space-y-3">
          {question.options.map(option => (
            <label 
              key={option.key} 
              className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${answers[question.id] === option.key ? 'bg-blue-100 border-blue-500' : 'bg-slate-50 border-slate-200 hover:border-blue-300'}`}
            >
              <input 
                type="radio" 
                name={question.id} 
                value={option.key} 
                checked={answers[question.id] === option.key}
                onChange={() => handleOptionChange(option.key)}
                className="w-5 h-5 mr-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="flex-1 text-slate-700">{option.text}</span>
            </label>
          ))}
        </div>
      </div>

      <footer className="flex justify-between items-center">
        <button 
          onClick={handlePrev} 
          disabled={currentQuestionIndex === 0}
          className="bg-slate-200 text-slate-700 font-bold py-2 px-6 rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Anterior
        </button>
        {currentQuestionIndex === questions.length - 1 ? (
          <button 
            onClick={handleSubmit}
            className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition"
          >
            Finalizar Prueba
          </button>
        ) : (
          <button 
            onClick={handleNext}
            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Siguiente
          </button>
        )}
      </footer>
    </div>
  );
};