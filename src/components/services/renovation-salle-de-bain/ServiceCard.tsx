
import React from 'react';
import OptimizedImage from '@/components/common/OptimizedImage';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  imageAlt: string;
}

const ServiceCard = ({ image, title, description, imageAlt }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
      <div className="h-64">
        <OptimizedImage 
          src={image}
          alt={imageAlt} 
          className="w-full h-full object-cover"
          placeholderColor="#f3f4f6"
          priority={true}
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
