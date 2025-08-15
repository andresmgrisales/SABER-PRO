import React from 'react';
import { Statistics, Competency } from '../types';

interface Props {
  statistics?: Statistics;
}

const defaultStats: Statistics = {
  totalQuestions: 0,
  correctAnswers: 0,
  byCompetency: {
    [Competency.Interpretation]: { total: 0, correct: 0 },
    [Competency.Formulation]: { total: 0, correct: 0 },
    [Competency.Argumentation]: { total: 0, correct: 0 },
  },
  history: [],
};

export const StatisticsScreen: React.FC<Props> = ({ statistics = defaultStats }) => {
  const getCompetencyPercentage = (competency: Competency): number => {
    const stats = statistics.byCompetency[competency];
    if (!stats || stats.total === 0) return 0;
    return Math.round((stats.correct / stats.total) * 100);
  };

  const overallPercentage = statistics.totalQuestions === 0 
    ? 0 
    : Math.round((statistics.correctAnswers / statistics.totalQuestions) * 100);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Estadísticas Generales</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#10b981"
                strokeWidth="8"
                strokeDasharray={`${overallPercentage} 100`}
                strokeDashoffset="25"
                transform="rotate(-90 60 60)"
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                className="font-bold"
                fill="#374151"
                style={{ fontSize: '2rem' }}
              >
                {overallPercentage}%
              </text>
            </svg>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">Total de preguntas: {statistics.totalQuestions}</p>
            <p className="text-gray-600">Respuestas correctas: {statistics.correctAnswers}</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Desempeño por Competencia</h3>
        {Object.values(Competency).map((competency) => {
          const percentage = getCompetencyPercentage(competency);
          return (
            <div key={competency} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-700">{competency}</span>
                <span className="text-sm font-semibold bg-green-100 text-green-800 px-2 py-1 rounded">
                  {percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: percentage + '%' }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>Correctas: {statistics.byCompetency[competency]?.correct || 0}</span>
                <span>Total: {statistics.byCompetency[competency]?.total || 0}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
