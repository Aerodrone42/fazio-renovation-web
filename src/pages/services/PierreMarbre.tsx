
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
            <h1 className="text-fazio-dark-green mb-4">Pierre naturelle & marbre</h1>
            <p className="text-lg text-gray-700">
              La noblesse et l'élégance de la pierre naturelle et du marbre pour sublimer votre intérieur et extérieur.
            </p>
          </div>
        </div>
      </section>

      {/* Description du service */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-fazio-dark-green mb-6">L'authenticité de la pierre naturelle</h2>
              <p className="text-gray-700 mb-4">
                La pierre naturelle et le marbre apportent une touche intemporelle et prestigieuse à votre habitat. Ces matériaux nobles nécessitent une pose experte pour sublimer leurs caractéristiques uniques.
              </p>
              <p className="text-gray-700 mb-4">
                Notre équipe maîtrise parfaitement les techniques spécifiques à la pose de pierre naturelle et de marbre, que ce soit en intérieur ou en extérieur : travertin, marbre, granit, ardoise, pierre calcaire...
              </p>
              <p className="text-gray-700 mb-6">
                Nous vous accompagnons dans le choix du matériau le plus adapté à votre projet et à vos contraintes, en tenant compte de l'usage, de l'entretien et de la durabilité.
              </p>
              <Button asChild className="bg-fazio-red hover:bg-fazio-light-red">
                <Link to="/contact">
                  Demander un devis gratuit
                </Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/879fa60d-8741-4997-b183-71d531651735.png" 
                alt="Escaliers en pierre naturelle dans une piscine" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos prestations */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Nos prestations en pierre naturelle & marbre</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/b901621b-834f-405f-af1f-64d68558e04d.png" 
                  alt="Travertin pour salle de bain" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Travertin en salle de bain</h3>
                <p className="text-gray-700">
                  Le charme intemporel du travertin pour une salle de bain à l'ambiance naturelle et chaleureuse.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/2596c83f-ce72-4245-a854-dc052f56d89c.png" 
                  alt="Pierre naturelle en terrasse" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Pierre naturelle en extérieur</h3>
                <p className="text-gray-700">
                  Des terrasses et plages de piscine en pierre naturelle pour une esthétique authentique qui traverse les âges.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/4c4393c3-b291-40e2-bc09-ceb7cde532fb.png" 
                  alt="Marbre pour intérieur" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Marbre en intérieur</h3>
                <p className="text-gray-700">
                  Le prestige du marbre pour vos sols, plans de travail ou escaliers intérieurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Les avantages de la pierre naturelle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-fazio-cream p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Durabilité</h3>
              <p className="text-gray-700">Une pierre naturelle bien posée et entretenue peut durer plusieurs générations.</p>
            </div>
            
            <div className="bg-fazio-cream p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Unicité</h3>
              <p className="text-gray-700">Chaque pierre est unique avec ses veines, nuances et caractéristiques propres.</p>
            </div>
            
            <div className="bg-fazio-cream p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Résistance</h3>
              <p className="text-gray-700">Excellente résistance à l'usure, aux chocs et aux variations de température.</p>
            </div>
            
            <div className="bg-fazio-cream p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Valorisation</h3>
              <p className="text-gray-700">La pierre naturelle apporte une plus-value significative à votre bien immobilier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fazio-red text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Un projet en pierre naturelle ou marbre ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour bénéficier de notre expertise et obtenir un devis détaillé pour votre projet.
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
