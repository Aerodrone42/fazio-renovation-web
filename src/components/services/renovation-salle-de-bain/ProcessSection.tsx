
import React from 'react';
import ProcessStep from './ProcessStep';

const ProcessSection = () => {
  const processSteps = [
    {
      number: 1,
      title: "Étude et conception",
      description: "Analyse de vos besoins, prise de mesures précises et proposition d'aménagements adaptés à votre espace et à vos attentes."
    },
    {
      number: 2,
      title: "Démolition et préparation",
      description: "Dépose des anciens équipements, démolition si nécessaire et préparation des supports pour les nouvelles installations."
    },
    {
      number: 3,
      title: "Plomberie et électricité",
      description: "Mise aux normes des réseaux, installation des nouvelles arrivées d'eau, évacuations et circuits électriques."
    },
    {
      number: 4,
      title: "Étanchéité et revêtements",
      description: "Application des systèmes d'étanchéité et pose des revêtements muraux et de sol (carrelage, faïence, mosaïque)."
    },
    {
      number: 5,
      title: "Installation sanitaire",
      description: "Pose des équipements sanitaires : douche, baignoire, vasque, WC, robinetterie et accessoires."
    },
    {
      number: 6,
      title: "Finitions et livraison",
      description: "Réalisation des finitions, nettoyage complet et livraison d'une salle de bain prête à l'emploi."
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Notre processus de rénovation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {processSteps.map((step) => (
            <ProcessStep 
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
