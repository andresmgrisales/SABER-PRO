import React from 'react';

interface Props {
  percentage: number;
  label: string;
  color?: string;
}

export const ProgressBar: React.FC<Props> = ({ 
  percentage, 
  label, 
  color = 'bg-green-500' 
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`${color} h-2.5 rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
