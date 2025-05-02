
import React from 'react';
import OptimizedImage from '@/components/common/OptimizedImage';

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  description,
  onClick
}) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      <div className="h-64 relative">
        <OptimizedImage 
          src={imageSrc}
          alt={imageAlt} 
          className="w-full h-full object-cover"
          placeholderColor="#f3f4f6"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">{title}</h3>
        <p className="text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
