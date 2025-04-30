
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DoucheItalienne = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-fazio-cream py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-fazio-dark-green mb-4">Création de douches à l'italienne</h1>
            <p className="text-lg text-gray-700">
              L'élégance et le confort d'une douche à l'italienne pour une salle de bain moderne et accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Description du service */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-fazio-dark-green mb-6">L'art de la douche à l'italienne</h2>
              <p className="text-gray-700 mb-4">
                La douche à l'italienne représente l'alliance parfaite entre esthétique contemporaine et praticité au quotidien. Son accès de plain-pied et son espace ouvert apportent une sensation d'espace et de liberté à votre salle de bain.
              </p>
              <p className="text-gray-700 mb-4">
                Notre équipe maîtrise toutes les étapes techniques indispensables à une réalisation parfaite : étanchéité garantie, pente adaptée pour l'écoulement, choix des matériaux appropriés et finitions soignées.
              </p>
              <p className="text-gray-700 mb-6">
                Nous vous proposons une solution clé en main, de la conception au choix des matériaux (carrelage, mosaïque, pierre naturelle) jusqu'à l'installation complète avec receveur encastré ou à carreler.
              </p>
              <Button asChild className="bg-fazio-red hover:bg-fazio-light-red">
                <Link to="/contact">
                  Demander un devis gratuit
                </Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/233c6240-522f-406b-b216-7e2dfc7197b0.png" 
                alt="Douche à l'italienne avec carrelage moderne" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Étapes de réalisation */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Les étapes de réalisation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <div className="w-12 h-12 bg-fazio-red text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Préparation et étanchéité</h3>
                <p className="text-gray-700">
                  Création d'une chape avec pente adaptée et pose méticuleuse d'un système d'étanchéité (SPEC) pour prévenir toute infiltration.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <div className="w-12 h-12 bg-fazio-red text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Installation et plomberie</h3>
                <p className="text-gray-700">
                  Mise en place du système d'évacuation, caniveau ou bonde, et raccordement à la plomberie existante conformément aux normes.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <div className="w-12 h-12 bg-fazio-red text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Revêtement et finitions</h3>
                <p className="text-gray-700">
                  Pose du carrelage, de la mosaïque ou de la pierre naturelle avec une attention particulière aux joints et aux raccords pour un résultat impeccable.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/a710474f-3d48-4f86-9471-7f3cb371435d.png" 
                  alt="Préparation d'une douche à l'italienne" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Préparation technique</h3>
                <p className="text-gray-700">
                  Une préparation rigoureuse garantit la pérennité de l'ouvrage et son étanchéité parfaite.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/94579f05-2e9d-4f94-98dc-9513524b38b6.png" 
                  alt="Douche à l'italienne finalisée" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Résultat final</h3>
                <p className="text-gray-700">
                  Une douche à l'italienne élégante qui valorise votre salle de bain et apporte confort d'utilisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Les avantages de la douche à l'italienne</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-fazio-cream p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Accessibilité</h3>
              <p className="text-gray-700">Accès facile pour tous, idéal pour les personnes à mobilité réduite et les seniors.</p>
            </div>
            
            <div className="bg-fazio-cream p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Esthétique</h3>
              <p className="text-gray-700">Design épuré et moderne qui agrandit visuellement l'espace de votre salle de bain.</p>
            </div>
            
            <div className="bg-fazio-cream p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Entretien</h3>
              <p className="text-gray-700">Nettoyage facilité par l'absence de bac ou de rebords qui accumulent le calcaire.</p>
            </div>
            
            <div className="bg-fazio-cream p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Personnalisation</h3>
              <p className="text-gray-700">Multiples options de personnalisation : dimensions, matériaux, couleurs, accessoires.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fazio-red text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Envie d'une douche à l'italienne sur mesure ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour étudier votre projet et obtenir un devis détaillé pour votre future douche à l'italienne.
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

export default DoucheItalienne;

