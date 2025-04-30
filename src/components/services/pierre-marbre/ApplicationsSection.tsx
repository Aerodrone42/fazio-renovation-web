
import React from 'react';
import ApplicationItem from './ApplicationItem';

const ApplicationsSection: React.FC = () => {
  const applications = [
    {
      title: "Salles de bain",
      description: "Transformez votre salle de bain en un espace de détente luxueux avec nos revêtements en marbre et pierre naturelle.",
      imageSrc: "/lovable-uploads/33333333-3333-3333-3333-333333333333.png",
      imageAlt: "Salle de bain avec douche en marbre et vasque en pierre naturelle"
    },
    {
      title: "Cuisines",
      description: "Apportez une touche d'élégance à votre cuisine avec nos plans de travail et crédences en pierre naturelle.",
      imageSrc: "/lovable-uploads/44444444-4444-4444-4444-444444444444.png",
      imageAlt: "Cuisine moderne avec plan de travail en granit noir et crédence en pierre claire"
    },
    {
      title: "Espaces de vie",
      description: "Créez des espaces de vie chaleureux et raffinés avec nos revêtements de sol et murs en pierre naturelle.",
      imageSrc: "/lovable-uploads/55555555-5555-5555-5555-555555555555.png",
      imageAlt: "Salon avec cheminée en pierre naturelle et sol en travertin"
    },
    {
      title: "Extérieurs",
      description: "Aménagez vos espaces extérieurs avec nos terrasses et allées en pierre naturelle, résistantes aux intempéries et esthétiques.",
      imageSrc: "/lovable-uploads/66666666-6666-6666-6666-666666666666.png",
      imageAlt: "Terrasse en pierre naturelle avec mobilier de jardin"
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Nos applications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {applications.map((application, index) => (
            <ApplicationItem
              key={index}
              title={application.title}
              description={application.description}
              imageSrc={application.imageSrc}
              imageAlt={application.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
