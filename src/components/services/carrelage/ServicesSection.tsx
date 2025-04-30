
import React from 'react';
import { Check } from 'lucide-react';

const ServiceCard: React.FC<{title: string; items: string[]}> = ({ title, items }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-fazio-dark-green">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const interiorServices = [
    'Pose de carrelage au sol (toutes pièces)',
    'Faïence murale (salle de bain, cuisine, etc.)',
    'Mosaïque décorative',
    'Plans de travail carrelés',
    'Crédences de cuisine',
    'Carrelage grands formats',
  ];

  const exteriorServices = [
    'Terrasses carrelées',
    'Plages de piscine',
    'Allées et chemins',
    'Carrelage antidérapant',
    'Carrelage imitation bois',
    'Margelles et bordures',
  ];

  const preparationServices = [
    'Ragréage et nivellement',
    'Chape traditionnelle ou liquide',
    'Étanchéité sous carrelage',
    "Dépose d'ancien carrelage",
  ];

  const layoutServices = [
    'Pose droite classique',
    'Pose en diagonale',
    'Pose en chevrons',
    'Pose à joints décalés',
    'Formats spéciaux et motifs',
  ];

  const finishingServices = [
    'Joints traditionnels',
    'Joints époxy',
    'Plinthes assorties',
    'Profilés de finition',
    'Seuils et transitions',
  ];

  return (
    <section className="py-16 bg-fazio-cream">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Nos prestations de carrelage</h2>
          <p className="text-lg text-gray-700">
            Des solutions adaptées à tous vos projets, pour l'intérieur comme pour l'extérieur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard title="Carrelage intérieur" items={interiorServices} />
          <ServiceCard title="Carrelage extérieur" items={exteriorServices} />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard title="Préparation des supports" items={preparationServices} />
          <ServiceCard title="Types de pose" items={layoutServices} />
          <ServiceCard title="Finitions" items={finishingServices} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
