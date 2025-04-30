
import React from 'react';
import AdvantageItem from './AdvantageItem';

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      iconSrc: "/lovable-uploads/bfd5c952-83cc-456d-b3b1-fe9d20898976.png",
      iconAlt: "Durabilité",
      title: "Durabilité exceptionnelle",
      description: "La pierre naturelle est un matériau extrêmement durable qui résiste aux chocs, aux rayures et aux intempéries, parfaitement adapté au climat de Lyon et de la région Rhône-Alpes. Un investissement pour plusieurs générations."
    },
    {
      iconSrc: "/lovable-uploads/bfd5c952-83cc-456d-b3b1-fe9d20898976.png",
      iconAlt: "Esthétique",
      title: "Esthétique intemporelle",
      description: "La pierre naturelle offre une esthétique unique et chaleureuse qui s'adapte à tous les styles d'intérieur et d'extérieur. Dans les demeures historiques de Lyon comme dans les villas modernes de Bourg-en-Bresse, elle apporte une élégance rare."
    },
    {
      iconSrc: "/lovable-uploads/bfd5c952-83cc-456d-b3b1-fe9d20898976.png",
      iconAlt: "Facilité d'entretien",
      title: "Facilité d'entretien",
      description: "Contrairement aux idées reçues, la pierre naturelle est facile à entretenir et ne nécessite pas de traitements spécifiques pour conserver sa beauté. Nos clients de Villeurbanne à Ambérieu-en-Bugey apprécient cette qualité au quotidien."
    }
  ];

  const extendedAdvantages = [
    {
      title: "Valorisation immobilière",
      description: "Les revêtements en pierre naturelle et marbre augmentent significativement la valeur de votre bien immobilier à Lyon, Villeurbanne et dans toute la région Rhône-Alpes."
    },
    {
      title: "Isolation thermique naturelle",
      description: "La pierre naturelle offre d'excellentes propriétés d'isolation thermique, contribuant aux économies d'énergie dans les foyers de Bourg-en-Bresse et de l'Ain."
    },
    {
      title: "Matériau écologique",
      description: "Ressource naturelle et recyclable, la pierre s'inscrit dans une démarche éco-responsable appréciée par nos clients de Villefranche-sur-Saône et des environs."
    },
    {
      title: "Résistance aux variations de température",
      description: "Particulièrement adaptée au climat continental de la région Rhône-Alpes, la pierre naturelle résiste parfaitement aux amplitudes thermiques importantes."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="avantages-pierre-marbre">
      <div className="container">
        <h2 className="text-3xl font-bold text-fazio-dark-green mb-6 text-center">
          Les avantages de la <span className="text-fazio-red">pierre naturelle</span> pour votre habitat
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Découvrez pourquoi la pierre naturelle est le choix privilégié des propriétaires exigeants à <strong>Lyon</strong>, <strong>Villeurbanne</strong>, <strong>Villefranche-sur-Saône</strong>, <strong>Bourg-en-Bresse</strong>, <strong>Oyonnax</strong> et <strong>Ambérieu-en-Bugey</strong> pour des aménagements intérieurs et extérieurs de qualité supérieure.
        </p>
        
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {extendedAdvantages.map((advantage, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">{advantage.title}</h3>
              <p className="text-gray-700">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md border-l-4 border-fazio-red">
          <h3 className="text-xl font-semibold text-fazio-dark-green mb-4">Notre expertise régionale en pierre naturelle</h3>
          <p className="text-gray-700 mb-4">
            Chez FAZIO Lorenzo, nous sommes spécialisés dans la sélection et la pose de pierres naturelles parfaitement adaptées au climat et à l'architecture de la région Rhône-Alpes. Notre connaissance approfondie des matériaux et des techniques de pose nous permet de vous proposer des solutions durables et esthétiques pour votre habitat.
          </p>
          <p className="text-gray-700">
            Que vous habitiez dans le centre historique de <strong>Lyon</strong>, dans les quartiers résidentiels de <strong>Villeurbanne</strong>, dans le vignoble de <strong>Villefranche-sur-Saône</strong>, au cœur de <strong>Bourg-en-Bresse</strong>, dans la zone industrielle d'<strong>Oyonnax</strong> ou aux portes du Bugey à <strong>Ambérieu-en-Bugey</strong>, notre équipe d'artisans qualifiés saura mettre en valeur votre intérieur avec des revêtements en pierre naturelle et en marbre de la plus haute qualité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
