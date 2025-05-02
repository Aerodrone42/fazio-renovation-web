
import React from 'react';
import OptimizedImage from '@/components/common/OptimizedImage';

interface ServicePageHeaderProps {
  title: string;
  description: string;
  imagePath: string;
}

const ServicePageHeader: React.FC<ServicePageHeaderProps> = ({ title, description, imagePath }) => {
  return (
    <section className="relative h-[350px] md:h-[400px] overflow-hidden">
      {/* Image de fond avec un overlay - fixed positioning to ensure proper centering */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={imagePath}
          alt={`Image d'en-tête pour ${title}`}
          className="w-full h-full object-cover object-center" 
          priority={true}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Contenu texte */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="container relative text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ServicePageHeader;
