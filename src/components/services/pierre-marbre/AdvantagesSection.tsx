
import React from 'react';
import AdvantageItem from './AdvantageItem';

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      iconSrc: "/lovable-uploads/77777777-7777-7777-7777-777777777777.png",
      iconAlt: "Durabilité",
      title: "Durabilité",
      description: "La pierre naturelle est un matériau extrêmement durable qui résiste aux chocs, aux rayures et aux intempéries."
    },
    {
      iconSrc: "/lovable-uploads/88888888-8888-8888-8888-888888888888.png",
      iconAlt: "Esthétique",
      title: "Esthétique",
      description: "La pierre naturelle offre une esthétique unique et chaleureuse qui s'adapte à tous les styles d'intérieur et d'extérieur."
    },
    {
      iconSrc: "/lovable-uploads/99999999-9999-9999-9999-999999999999.png",
      iconAlt: "Facilité d'entretien",
      title: "Facilité d'entretien",
      description: "La pierre naturelle est facile à entretenir et ne nécessite pas de traitements spécifiques pour conserver sa beauté."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Les avantages de la pierre naturelle</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageItem
              key={index}
              iconSrc={advantage.iconSrc}
              iconAlt={advantage.iconAlt}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
