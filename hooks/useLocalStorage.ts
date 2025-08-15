
import { useState, useEffect } from 'react';
import { Statistics, Competency, AttemptResult } from '../types';

const initialStatistics: Statistics = {
  totalQuestions: 0,
  correctAnswers: 0,
  byCompetency: {
    [Competency.Interpretation]: { total: 0, correct: 0 },
    [Competency.Formulation]: { total: 0, correct: 0 },
    [Competency.Argumentation]: { total: 0, correct: 0 },
  },
  history: [],
};

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const updateStatistics = (attemptResult: AttemptResult) => {
    if (key !== 'quizStatistics') return;
    
    setStoredValue((prevValue: any) => {
      const prevStats = prevValue || initialStatistics;
      const byCompetency = prevStats.byCompetency || initialStatistics.byCompetency;
      
      const newStats: Statistics = {
        totalQuestions: (prevStats.totalQuestions || 0) + 1,
        correctAnswers: (prevStats.correctAnswers || 0) + (attemptResult.isCorrect ? 1 : 0),
        byCompetency: {
          ...byCompetency,
          [attemptResult.competency]: {
            total: (byCompetency[attemptResult.competency]?.total || 0) + 1,
            correct: (byCompetency[attemptResult.competency]?.correct || 0) + 
              (attemptResult.isCorrect ? 1 : 0),
          },
        },
        history: [...(prevStats.history || []), attemptResult],
      };

      window.localStorage.setItem(key, JSON.stringify(newStats));
      return newStats as T;
    });
  };

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue, updateStatistics];
}
