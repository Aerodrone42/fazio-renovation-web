
import React, { useState } from 'react';

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
  const [imgError, setImgError] = useState(false);
  
  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="h-64 relative">
        <img 
          src={imgError ? "https://via.placeholder.com/600x400?text=Image+non+disponible" : imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">{title}</h3>
        <p className="text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
