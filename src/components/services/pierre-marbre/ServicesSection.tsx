
import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      imageSrc: "/lovable-uploads/9999590f-4999-4949-a099-e999e999e999.png",
      imageAlt: "Pose de marbre dans une salle de bain luxueuse",
      title: "Pose de marbre",
      description: "Nous réalisons la pose de marbre avec une précision inégalée, pour un rendu luxueux et durable."
    },
    {
      imageSrc: "/lovable-uploads/11111111-1111-1111-1111-111111111111.png",
      imageAlt: "Installation de crédence en pierre naturelle dans une cuisine moderne",
      title: "Pose de crédence en pierre",
      description: "Nous installons des crédences en pierre naturelle qui allient esthétique et fonctionnalité dans votre cuisine."
    },
    {
      imageSrc: "/lovable-uploads/22222222-2222-2222-2222-222222222222.png",
      imageAlt: "Création de terrasse en pierre naturelle avec différentes textures",
      title: "Terrasse en pierre naturelle",
      description: "Nous aménageons des terrasses en pierre naturelle qui invitent à la détente et à la convivialité."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Nos prestations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
