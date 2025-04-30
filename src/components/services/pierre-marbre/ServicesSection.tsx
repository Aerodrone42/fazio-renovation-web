
import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      imageSrc: "/lovable-uploads/9999590f-4999-4949-a099-e999e999e999.png",
      imageAlt: "Pose de marbre dans une salle de bain luxueuse réalisée à Lyon",
      title: "Pose de marbre",
      description: "Nous réalisons la pose de marbre avec une précision inégalée, pour un rendu luxueux et durable dans toute la région lyonnaise. Idéal pour sols, murs et plans de travail haut de gamme."
    },
    {
      imageSrc: "/lovable-uploads/11111111-1111-1111-1111-111111111111.png",
      imageAlt: "Installation de crédence en pierre naturelle dans une cuisine moderne à Villeurbanne",
      title: "Pose de crédence en pierre",
      description: "Nos artisans installent des crédences en pierre naturelle qui allient esthétique et fonctionnalité dans votre cuisine. Intervention dans le Rhône et l'Ain pour des réalisations uniques."
    },
    {
      imageSrc: "/lovable-uploads/22222222-2222-2222-2222-222222222222.png",
      imageAlt: "Création de terrasse en pierre naturelle avec différentes textures à Bourg-en-Bresse",
      title: "Terrasse en pierre naturelle",
      description: "Nous aménageons des terrasses en pierre naturelle qui invitent à la détente et à la convivialité, avec des matériaux résistants aux intempéries adaptés au climat de la région Rhône-Alpes."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="services-pierre-marbre">
      <div className="container">
        <h2 className="text-3xl font-bold text-fazio-dark-green mb-6 text-center">
          Nos prestations <span className="text-fazio-red">pierre et marbre</span> à <span className="underline decoration-fazio-cream decoration-4 underline-offset-2">Lyon</span> et dans l'<span className="underline decoration-fazio-cream decoration-4 underline-offset-2">Ain</span>
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Découvrez notre gamme complète de services professionnels pour la pose et l'entretien de la pierre naturelle et du marbre. Nos artisans interviennent dans les villes de <strong>Lyon</strong>, <strong>Villeurbanne</strong>, <strong>Villefranche-sur-Saône</strong>, <strong>Bourg-en-Bresse</strong>, <strong>Oyonnax</strong>, <strong>Ambérieu-en-Bugey</strong> et <strong>Le Lavandou</strong> pour transformer votre habitat avec des matériaux nobles et durables.
        </p>
        
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-fazio-dark-green mb-4">Services complémentaires pierre et marbre</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Restauration</strong> de marbre et pierre naturelle ancienne à <strong>Lyon</strong> et dans le <strong>Rhône</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Polissage</strong> et <strong>cristallisation</strong> de marbre dans l'<strong>Ain</strong> et le <strong>Rhône</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Création d'éléments sur mesure</strong> en pierre et marbre à <strong>Villeurbanne</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Traitement hydrofuge</strong> et <strong>anti-taches</strong> pour pierre naturelle à <strong>Bourg-en-Bresse</strong></span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-fazio-dark-green mb-4">Notre expertise en matériaux nobles</h3>
            <ul className="grid grid-cols-2 gap-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Marbre de Carrare</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Granit</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Travertin</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Pierre calcaire</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Onyx</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Ardoise</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Pierre de Bourgogne</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-fazio-red mr-2 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Quartz</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
