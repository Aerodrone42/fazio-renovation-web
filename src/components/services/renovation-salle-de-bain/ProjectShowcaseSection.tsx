
import React from 'react';
import ServiceCard from './ServiceCard';

const ProjectShowcaseSection = () => {
  const showcaseItems = [
    {
      image: "/lovable-uploads/7d9587ec-d151-4dfd-aec1-f03ee2666d01.png",
      title: "Préparation technique",
      description: "Installation des réseaux de plomberie et préparation des murs pour une finition parfaite.",
      imageAlt: "Préparation et pose de carrelage dans une salle de bain"
    },
    {
      image: "/lovable-uploads/33102d95-12df-4e3e-9959-1778c94dd58c.png",
      title: "Résultat final",
      description: "Une salle de bain entièrement rénovée, alliant esthétique et fonctionnalité pour votre bien-être quotidien.",
      imageAlt: "Salle de bain terminée avec carrelage gris clair"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Du projet à la réalisation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {showcaseItems.map((item, index) => (
            <ServiceCard 
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcaseSection;
