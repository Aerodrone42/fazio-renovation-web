
import React from 'react';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  imageAlt: string;
}

const ServiceCard = ({ image, title, description, imageAlt }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-64">
        <img 
          src={image} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/600x400?text=Image+non+disponible";
            target.alt = "Image temporairement indisponible";
          }}
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
