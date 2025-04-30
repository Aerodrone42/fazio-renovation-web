
import React from 'react';

interface AdvantageItemProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({
  iconSrc,
  iconAlt,
  title,
  description
}) => {
  return (
    <div className="text-center">
      <div className="mx-auto w-24 h-24 rounded-full bg-fazio-beige flex items-center justify-center mb-4">
        <img src={iconSrc} alt={iconAlt} className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">{title}</h3>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default AdvantageItem;
