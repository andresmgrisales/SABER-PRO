import React from 'react';
import { Attempt } from '../types';
import { CalculatorIcon, FunctionIcon, SigmaIcon } from './icons';

interface HomeScreenProps {
  onStartQuiz: () => void;
  attempts: Attempt[];
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onStartQuiz, attempts }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full animate-fade-in">
      <header className="text-center mb-8">
        <div className="relative mb-4 flex justify-center items-center h-24">
            <SigmaIcon className="w-16 h-16 text-indigo-400 opacity-80 transform -translate-x-16 rotate-[-15deg]" />
            <CalculatorIcon className="w-20 h-20 text-blue-500 z-10" />
            <FunctionIcon className="w-16 h-16 text-teal-400 opacity-80 transform translate-x-16 rotate-[15deg]" />
        </div>
        <h1 className="text-4xl font-bold text-slate-800">Saber Pro: Razonamiento Cuantitativo</h1>
        <p className="text-slate-600 mt-2">Prepárate para el éxito. ¡Mide y mejora tus habilidades!</p>
      </header>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4 text-slate-700">Instrucciones</h2>
          <p className="text-slate-600 mb-4">
            Esta prueba evalúa tu capacidad para entender, analizar y utilizar información cuantitativa en diversos contextos. Te enfrentarás a 20 preguntas aleatorias en cada intento.
          </p>
          <div className="space-y-3">
            <div className="flex items-start">
              <FunctionIcon className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Competencias Evaluadas</h3>
                <ul className="list-disc list-inside text-sm text-slate-500">
                  <li>Interpretación y representación de datos.</li>
                  <li>Formulación y ejecución de estrategias.</li>
                  <li>Argumentación y justificación de resultados.</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start">
              <CalculatorIcon className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" />
               <div>
                <h3 className="font-semibold">Consejos</h3>
                <ul className="list-disc list-inside text-sm text-slate-500">
                  <li>Lee cada pregunta con atención.</li>
                  <li>Analiza gráficos y tablas cuidadosamente.</li>
                  <li>Revisa tus respuestas al final.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4 text-slate-700">Historial de Intentos</h2>
          {attempts.length > 0 ? (
            <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
              {attempts.map(attempt => (
                <div key={attempt.id} className="flex justify-between items-center bg-white p-2 rounded-md border">
                  <span className="text-sm text-slate-500">{attempt.date}</span>
                  <span className={`font-bold text-sm ${attempt.score >= 70 ? 'text-green-600' : attempt.score >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {attempt.score}%
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-center py-10">Aún no has realizado ningún intento. ¡Es hora de empezar!</p>
          )}
        </div>
      </div>
      
      <div className="text-center">
        <button 
          onClick={onStartQuiz} 
          className="bg-blue-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-md text-lg"
        >
          Comenzar Prueba
        </button>
      </div>
    </div>
  );
};