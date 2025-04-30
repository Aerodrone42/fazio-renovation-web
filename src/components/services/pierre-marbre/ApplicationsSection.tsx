
import React from 'react';
import ApplicationItem from './ApplicationItem';

const ApplicationsSection: React.FC = () => {
  const applications = [
    {
      title: "Salles de bain luxueuses",
      description: "Transformez votre salle de bain en un véritable spa à domicile avec nos revêtements en marbre et pierre naturelle. Nos artisans interviennent à Lyon, Villeurbanne et dans tout le département du Rhône pour créer des espaces élégants et durables.",
      imageSrc: "/lovable-uploads/ed2f0833-05bc-4f19-a04b-a331c54f8608.png",
      imageAlt: "Salle de bain avec baignoire moderne et murs en pierre naturelle réalisée à Lyon"
    },
    {
      title: "Cuisines haut de gamme",
      description: "Apportez une touche d'élégance intemporelle à votre cuisine avec nos plans de travail et crédences en pierre naturelle. Nos réalisations à Bourg-en-Bresse et dans l'Ain allient esthétique raffinée et résistance exceptionnelle pour votre usage quotidien.",
      imageSrc: "/lovable-uploads/917b4545-3a1e-4b01-8e35-cadb3a7cd954.png",
      imageAlt: "Cuisine moderne avec sol en pierre et électroménagers haut de gamme à Bourg-en-Bresse"
    },
    {
      title: "Espaces de vie exceptionnels",
      description: "Créez des espaces de vie chaleureux et raffinés avec nos revêtements de sol et murs en pierre naturelle. À Villefranche-sur-Saône et ses environs, nous réalisons des intérieurs qui traversent les époques avec une beauté toujours renouvelée.",
      imageSrc: "/lovable-uploads/1d2cf699-5cb4-4d0f-849d-f6985b7e58ab.png",
      imageAlt: "Salon lumineux avec sol en pierre naturelle et grandes baies vitrées réalisé à Villefranche-sur-Saône"
    },
    {
      title: "Extérieurs durables",
      description: "Aménagez vos espaces extérieurs avec nos terrasses et allées en pierre naturelle, spécialement sélectionnées pour résister au climat rhônalpin. De Oyonnax à Ambérieu-en-Bugey, nos réalisations extérieures allient beauté naturelle et résistance aux intempéries.",
      imageSrc: "/lovable-uploads/e9e3f733-8485-4ead-bf2f-72c059d8bb7a.png",
      imageAlt: "Piscine extérieure avec finition en pierre naturelle et terrasse aménagée réalisée au Lavandou"
    }
  ];

  return (
    <section className="py-16" id="applications-pierre-marbre">
      <div className="container">
        <h2 className="text-3xl font-bold text-fazio-dark-green mb-6 text-center">
          Applications de la <span className="text-fazio-red">pierre et du marbre</span>
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Découvrez les multiples applications de la pierre naturelle et du marbre pour sublimer chaque espace de votre habitat à <strong>Lyon</strong>, <strong>Villeurbanne</strong>, <strong>Villefranche-sur-Saône</strong>, <strong>Bourg-en-Bresse</strong>, <strong>Oyonnax</strong> et <strong>Ambérieu-en-Bugey</strong>. Des matériaux nobles qui s'adaptent à tous les styles et toutes les pièces.
        </p>
        
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

        <div className="mt-12 bg-fazio-cream rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-fazio-dark-green mb-4 text-center">Notre expertise pierre et marbre près de chez vous</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold text-fazio-red mb-2">Département du Rhône (69)</h4>
              <ul className="space-y-1 text-sm">
                <li><strong>Lyon</strong> - Capitale des Gaules</li>
                <li><strong>Villeurbanne</strong> - Deuxième ville du département</li>
                <li><strong>Villefranche-sur-Saône</strong> - Capitale du Beaujolais</li>
                <li>Et toutes les communes environnantes</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold text-fazio-red mb-2">Département de l'Ain (01)</h4>
              <ul className="space-y-1 text-sm">
                <li><strong>Bourg-en-Bresse</strong> - Préfecture de l'Ain</li>
                <li><strong>Oyonnax</strong> - Centre industriel</li>
                <li><strong>Ambérieu-en-Bugey</strong> - Porte du Bugey</li>
                <li>Et toutes les communes environnantes</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold text-fazio-red mb-2">Services complémentaires</h4>
              <ul className="space-y-1 text-sm">
                <li>Conseil en choix des matériaux</li>
                <li>Devis détaillé et transparent</li>
                <li>Livraison des matériaux sur chantier</li>
                <li>Service après-vente réactif</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
