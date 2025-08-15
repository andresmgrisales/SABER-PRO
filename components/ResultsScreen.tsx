
import React from 'react';
import { Attempt, Competency } from '../types';
import { CheckCircleIcon, XCircleIcon } from './icons';

interface ResultsScreenProps {
  attempt: Attempt;
  onTryAgain: () => void;
  onGoHome: () => void;
}

const getFeedback = (score: number) => {
    if (score >= 75) return { text: "Excelente Desempeño", color: "text-green-600" };
    if (score >= 50) return { text: "Buen Desempeño", color: "text-yellow-600" };
    return { text: "Necesitas Mejorar", color: "text-red-600" };
};

const CompetencyFeedbackCard: React.FC<{ competency: Competency, analysis: Attempt['analysis'] }> = ({ competency, analysis }) => {
    const { correct, total } = analysis[competency];
    const percentage = total > 0 ? (correct / total) * 100 : 0;
    const feedback = getFeedback(percentage);

    return (
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-700">{competency}</h4>
            <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-slate-500">{correct} de {total} correctas</span>
                <span className={`font-bold ${feedback.color}`}>{percentage.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                <div className={`${feedback.color.replace('text', 'bg')}-500 h-1.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};


export const ResultsScreen: React.FC<ResultsScreenProps> = ({ attempt, onTryAgain, onGoHome }) => {
  const feedback = getFeedback(attempt.score);
  
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full animate-fade-in">
      <header className="text-center mb-8 border-b pb-6 border-slate-200">
        <h1 className="text-2xl font-bold text-slate-800">Resultados de la Prueba</h1>
        <div className={`text-7xl font-bold my-4 ${feedback.color}`}>{attempt.score}%</div>
        <p className={`text-xl font-semibold ${feedback.color}`}>{feedback.text}</p>
        <p className="text-slate-500 mt-1">Fecha: {attempt.date}</p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-slate-700">Análisis por Competencia</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <CompetencyFeedbackCard competency={Competency.Interpretation} analysis={attempt.analysis} />
          <CompetencyFeedbackCard competency={Competency.Formulation} analysis={attempt.analysis} />
          <CompetencyFeedbackCard competency={Competency.Argumentation} analysis={attempt.analysis} />
        </div>
      </section>

      {attempt.incorrectQuestions.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-slate-700">Revisión de Preguntas Incorrectas</h2>
          <div className="space-y-6 max-h-96 overflow-y-auto p-4 bg-slate-50 rounded-lg border">
            {attempt.incorrectQuestions.map((q, index) => (
              <div key={q.id} className="border-b border-slate-200 pb-4 last:border-b-0">
                <p className="font-semibold text-slate-800 mb-2">
                  <span className="text-blue-600">Pregunta {index + 1}:</span> {q.statement}
                </p>
                <div className="space-y-2 text-sm">
                    <div className="flex items-center text-red-600">
                        <XCircleIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>Tu respuesta ({q.userAnswer}): {q.options.find(opt => opt.key === q.userAnswer)?.text || 'No respondida'}</span>
                    </div>
                    <div className="flex items-center text-green-600">
                        <CheckCircleIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>Respuesta correcta ({q.correctAnswer}): {q.options.find(opt => opt.key === q.correctAnswer)?.text}</span>
                    </div>
                    <p className="text-slate-500 pt-2 pl-6 border-l-2 border-slate-200 ml-2">
                        <span className="font-semibold">Explicación:</span> {q.explanation}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="flex justify-center items-center space-x-4 pt-6 border-t border-slate-200">
        <button 
          onClick={onGoHome} 
          className="bg-slate-200 text-slate-700 font-bold py-3 px-8 rounded-lg hover:bg-slate-300 transition"
        >
          Ir al Inicio
        </button>
        <button 
          onClick={onTryAgain} 
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition"
        >
          Intentar de Nuevo
        </button>
      </footer>
    </div>
  );
};
