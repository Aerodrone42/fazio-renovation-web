
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AdvantageItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({
  icon: Icon,
  title,
  description
}) => {
  return (
    <div className="text-center">
      <div className="mx-auto w-24 h-24 rounded-full bg-fazio-beige flex items-center justify-center mb-4 overflow-hidden">
        <Icon className="w-12 h-12 text-fazio-dark-green" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">{title}</h3>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default AdvantageItem;
