
import React, { useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { preloadImages } from '@/utils/imageUtils';

const ServicesSection = () => {
  const services = [
    {
      image: "/lovable-uploads/233c6240-522f-406b-b216-7e2dfc7197b0.png",
      title: "Création de douche à l'italienne",
      description: "Installation de douches à l'italienne élégantes et accessibles pour un confort d'utilisation optimal.",
      imageAlt: "Douche avec carrelage moderne"
    },
    {
      image: "/lovable-uploads/a710474f-3d48-4f86-9471-7f3cb371435d.png",
      title: "Rénovation complète",
      description: "Prise en charge de tous les aspects de la rénovation, de la démolition aux finitions.",
      imageAlt: "Préparation des installations de plomberie"
    },
    {
      image: "/lovable-uploads/94579f05-2e9d-4f94-98dc-9513524b38b6.png",
      title: "Plomberie et sanitaires",
      description: "Installation et raccordement de tous les éléments sanitaires et de la robinetterie.",
      imageAlt: "Pose de carrelage mural moderne"
    }
  ];

  // Précharger les images immédiatement au montage du composant
  useEffect(() => {
    const imagePaths = services.map(service => service.image);
    // Préchargement synchrone
    preloadImages(imagePaths)
      .then(() => console.log('Images préchargées avec succès'))
      .catch(err => console.error('Erreur préchargement:', err));
      
    // Précharger directement avec des éléments link
    imagePaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = path;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Nos prestations en rénovation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
