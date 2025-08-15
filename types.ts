
export enum Competency {
  Interpretation = 'Interpretación',
  Formulation = 'Formulación',
  Argumentation = 'Argumentación',
}

export interface QuestionOption {
  key: string;
  text: string;
}

export interface Question {
  id: string;
  competency: Competency;
  statement: string;
  image?: string;
  options: QuestionOption[];
  correctAnswer: string;
  explanation: string;
}

export interface AttemptResult {
  questionId: string;
  competency: Competency;
  isCorrect: boolean;
  timestamp: number;
}

export interface Statistics {
  totalQuestions: number;
  correctAnswers: number;
  byCompetency: {
    [key in Competency]: {
      total: number;
      correct: number;
    };
  };
  history: AttemptResult[];
}

export interface IncorrectQuestion extends Question {
    userAnswer: string;
}

export interface CompetencyAnalysis {
    correct: number;
    total: number;
}

export interface Attempt {
    id: string;
    date: string;
    score: number;
    analysis: {
        [key in Competency]: CompetencyAnalysis;
    };
    incorrectQuestions: IncorrectQuestion[];
}

export type GameState = 'home' | 'quiz' | 'results' | 'stats';
