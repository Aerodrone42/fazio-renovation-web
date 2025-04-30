
import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-fazio-red text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">{number}</div>
      <div>
        <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">{title}</h3>
        <p className="text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessStep;
