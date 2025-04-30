
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PierreMarbre = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-fazio-cream py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-fazio-dark-green mb-4">Pierre & Marbre</h1>
            <p className="text-lg text-gray-700">
              Sublimez votre intérieur avec des revêtements en pierre naturelle ou marbre posés avec excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Description du service */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-fazio-dark-green mb-6">L'élégance intemporelle de la pierre</h2>
              <p className="text-gray-700 mb-4">
                La pierre naturelle et le marbre sont des matériaux nobles qui apportent une dimension unique et prestigieuse à votre intérieur. Leur beauté intemporelle et leur durabilité exceptionnelle en font un investissement pour la vie.
              </p>
              <p className="text-gray-700 mb-4">
                Notre expertise nous permet de travailler aussi bien avec des marbres précieux qu'avec des pierres naturelles comme le travertin, la pierre calcaire ou le granit, pour créer des espaces d'une élégance rare.
              </p>
              <p className="text-gray-700 mb-6">
                Nous vous accompagnons dans le choix des matériaux qui correspondront parfaitement à votre projet et assurons une pose irréprochable pour un résultat à la hauteur de vos attentes.
              </p>
              <Button asChild className="bg-fazio-red hover:bg-fazio-light-red">
                <Link to="/contact">
                  Demander un devis gratuit
                </Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl mx-auto md:mx-0 max-w-md">
              <img 
                src="/lovable-uploads/3a0cf80e-32b3-4264-b89d-b5b87fc56e5e.png" 
                alt="Élégante entrée avec revêtement de sol en pierre et marbre à motifs géométriques" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos prestations */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Nos prestations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/9999590f-4999-4949-a099-e999e999e999.png" 
                  alt="Pose de marbre dans une salle de bain luxueuse" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Pose de marbre</h3>
                <p className="text-gray-700">
                  Nous réalisons la pose de marbre avec une précision inégalée, pour un rendu luxueux et durable.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/11111111-1111-1111-1111-111111111111.png" 
                  alt="Installation de crédence en pierre naturelle dans une cuisine moderne" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Pose de crédence en pierre</h3>
                <p className="text-gray-700">
                  Nous installons des crédences en pierre naturelle qui allient esthétique et fonctionnalité dans votre cuisine.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/22222222-2222-2222-2222-222222222222.png" 
                  alt="Création de terrasse en pierre naturelle avec différentes textures" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Terrasse en pierre naturelle</h3>
                <p className="text-gray-700">
                  Nous aménageons des terrasses en pierre naturelle qui invitent à la détente et à la convivialité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Nos applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-fazio-dark-green mb-6">Salles de bain</h3>
              <p className="text-gray-700 mb-4">
                Transformez votre salle de bain en un espace de détente luxueux avec nos revêtements en marbre et pierre naturelle.
              </p>
              <img 
                src="/lovable-uploads/33333333-3333-3333-3333-333333333333.png" 
                alt="Salle de bain avec douche en marbre et vasque en pierre naturelle" 
                className="w-full rounded-lg shadow-md mb-6"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-fazio-dark-green mb-6">Cuisines</h3>
              <p className="text-gray-700 mb-4">
                Apportez une touche d'élégance à votre cuisine avec nos plans de travail et crédences en pierre naturelle.
              </p>
              <img 
                src="/lovable-uploads/44444444-4444-4444-4444-444444444444.png" 
                alt="Cuisine moderne avec plan de travail en granit noir et crédence en pierre claire" 
                className="w-full rounded-lg shadow-md mb-6"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-fazio-dark-green mb-6">Espaces de vie</h3>
              <p className="text-gray-700 mb-4">
                Créez des espaces de vie chaleureux et raffinés avec nos revêtements de sol et murs en pierre naturelle.
              </p>
              <img 
                src="/lovable-uploads/55555555-5555-5555-5555-555555555555.png" 
                alt="Salon avec cheminée en pierre naturelle et sol en travertin" 
                className="w-full rounded-lg shadow-md mb-6"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-fazio-dark-green mb-6">Extérieurs</h3>
              <p className="text-gray-700 mb-4">
                Aménagez vos espaces extérieurs avec nos terrasses et allées en pierre naturelle, résistantes aux intempéries et esthétiques.
              </p>
              <img 
                src="/lovable-uploads/66666666-6666-6666-6666-666666666666.png" 
                alt="Terrasse en pierre naturelle avec mobilier de jardin" 
                className="w-full rounded-lg shadow-md mb-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Les avantages de la pierre naturelle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-24 h-24 rounded-full bg-fazio-beige flex items-center justify-center mb-4">
                <img src="/lovable-uploads/77777777-7777-7777-7777-777777777777.png" alt="Durabilité" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Durabilité</h3>
              <p className="text-gray-700">
                La pierre naturelle est un matériau extrêmement durable qui résiste aux chocs, aux rayures et aux intempéries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-24 h-24 rounded-full bg-fazio-beige flex items-center justify-center mb-4">
                <img src="/lovable-uploads/88888888-8888-8888-8888-888888888888.png" alt="Esthétique" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Esthétique</h3>
              <p className="text-gray-700">
                La pierre naturelle offre une esthétique unique et chaleureuse qui s'adapte à tous les styles d'intérieur et d'extérieur.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-24 h-24 rounded-full bg-fazio-beige flex items-center justify-center mb-4">
                <img src="/lovable-uploads/99999999-9999-9999-9999-999999999999.png" alt="Facilité d'entretien" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Facilité d'entretien</h3>
              <p className="text-gray-700">
                La pierre naturelle est facile à entretenir et ne nécessite pas de traitements spécifiques pour conserver sa beauté.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fazio-red text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Envie d'un intérieur en pierre naturelle ou marbre ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une étude personnalisée de votre projet et un devis gratuit.
          </p>
          <Button asChild size="lg" className="bg-white text-fazio-red hover:bg-fazio-cream">
            <Link to="/contact">
              Demander un devis gratuit
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PierreMarbre;
