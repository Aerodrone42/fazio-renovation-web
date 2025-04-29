
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Plomberie = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-fazio-cream py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-fazio-dark-green mb-4">Travaux de plomberie</h1>
            <p className="text-lg text-gray-700">
              Des installations aux normes pour votre sécurité et votre confort, réalisées par nos plombiers qualifiés.
            </p>
          </div>
        </div>
      </section>

      {/* Description du service */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-fazio-dark-green mb-6">Des installations de qualité</h2>
              <p className="text-gray-700 mb-4">
                La plomberie est un élément essentiel de toute rénovation ou construction. Notre équipe de plombiers qualifiés assure des installations conformes aux normes en vigueur pour votre tranquillité.
              </p>
              <p className="text-gray-700 mb-4">
                Dans le cadre de nos projets de rénovation, nous prenons en charge tous les aspects de la plomberie : création ou modification de réseaux, raccordements, installation d'équipements sanitaires et de robinetterie.
              </p>
              <p className="text-gray-700 mb-6">
                Nous veillons particulièrement à la qualité des matériaux utilisés et à la précision des raccordements pour garantir des installations durables et sans fuite.
              </p>
              <Button asChild className="bg-fazio-red hover:bg-fazio-light-red">
                <Link to="/contact">
                  Demander un devis gratuit
                </Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/774bee80-c9ce-43c6-a2f7-10d29e6b382e.png" 
                alt="Installation de plomberie sanitaire" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos prestations de plomberie */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Nos prestations en plomberie</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Installation sanitaire</h3>
                <p className="text-gray-700">
                  Pose et raccordement de tous types d'équipements sanitaires : vasques, douches, baignoires, WC, robinetterie.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Création de réseaux</h3>
                <p className="text-gray-700">
                  Mise en place de réseaux d'alimentation en eau chaude et froide, évacuations et ventilations conformes aux normes.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Modification et réparation</h3>
                <p className="text-gray-700">
                  Adaptation des réseaux existants lors de rénovations et réparations de fuites ou dysfonctionnements.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/b901621b-834f-405f-af1f-64d68558e04d.png" 
                  alt="Installation sanitaire de salle de bain" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Équipements de salle de bain</h3>
                <p className="text-gray-700">
                  Installation complète de tous les éléments sanitaires de votre salle de bain.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/c7105d05-b6ca-4f7e-974c-aacb4a70074b.png" 
                  alt="Installation sanitaire de cuisine" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Équipements de cuisine</h3>
                <p className="text-gray-700">
                  Raccordement d'éviers, robinetterie et électroménager dans le cadre de rénovations de cuisine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Pourquoi choisir notre service de plomberie</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-fazio-cream p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Équipe qualifiée</h3>
              <p className="text-gray-700">Des plombiers certifiés maîtrisant les techniques et normes actuelles.</p>
            </div>
            
            <div className="bg-fazio-cream p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Matériaux de qualité</h3>
              <p className="text-gray-700">Utilisation exclusive de composants et équipements fiables et durables.</p>
            </div>
            
            <div className="bg-fazio-cream p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Coordination optimale</h3>
              <p className="text-gray-700">Intégration parfaite avec les autres corps de métier pour des chantiers fluides.</p>
            </div>
            
            <div className="bg-fazio-cream p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Garantie travaux</h3>
              <p className="text-gray-700">Tous nos travaux de plomberie sont garantis pour votre tranquillité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fazio-red text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'un plombier professionnel ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour tous vos travaux de plomberie dans le cadre de votre projet de rénovation.
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

export default Plomberie;
