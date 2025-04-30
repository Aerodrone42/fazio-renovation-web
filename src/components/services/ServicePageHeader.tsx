
import React from 'react';

interface ServicePageHeaderProps {
  title: string;
  description: string;
  imagePath: string;
}

const ServicePageHeader: React.FC<ServicePageHeaderProps> = ({ title, description, imagePath }) => {
  return (
    <section className="relative h-[300px] md:h-[400px] overflow-hidden mb-0">
      {/* Image de fond avec un overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Contenu texte */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container relative text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ServicePageHeader;
