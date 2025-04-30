
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Coordination = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Coordination Tous Corps d'État | Rénovation simplifiée | SARL FAZIO Lorenzo</title>
        <meta 
          name="description" 
          content="Coordination de chantier tous corps d'état par SARL FAZIO Lorenzo. Un seul interlocuteur pour tous vos travaux de rénovation dans l'Ain, l'Ouest Lyonnais et la Côte d'Azur." 
        />
        <meta 
          name="keywords" 
          content="coordination travaux, maître d'œuvre, tous corps d'état, rénovation clé en main, gestion de chantier, plomberie, électricité, plâtrerie, Ain, Côte d'Azur" 
        />
        <link rel="canonical" href="https://www.carrelage-fazio.fr/services/coordination" />
      </Helmet>
      
      {/* Hero section */}
      <section className="bg-fazio-cream py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-fazio-dark-green mb-4">Coordination tous corps d'état</h1>
            <p className="text-lg text-gray-700">
              Un interlocuteur unique pour gérer l'ensemble de votre projet de rénovation du début à la fin.
            </p>
          </div>
        </div>
      </section>

      {/* Description du service */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-fazio-dark-green mb-6">Une gestion de projet efficace</h2>
              <p className="text-gray-700 mb-4">
                La réussite d'un projet de rénovation repose sur une coordination précise des différents corps de métier. Notre service de coordination tous corps d'état vous libère des contraintes de gestion et garantit la qualité d'exécution.
              </p>
              <p className="text-gray-700 mb-4">
                Nous prenons en charge la planification, l'organisation et le suivi de toutes les étapes de votre projet, en coordonnant l'intervention des différents artisans : plombiers, électriciens, plaquistes, menuisiers, peintres...
              </p>
              <p className="text-gray-700 mb-6">
                Notre expertise vous assure un chantier fluide, des délais respectés et un résultat final à la hauteur de vos attentes, le tout avec un interlocuteur unique pour plus de simplicité.
              </p>
              <Button asChild className="bg-fazio-red hover:bg-fazio-light-red">
                <Link to="/contact">
                  Demander un devis gratuit
                </Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/c7105d05-b6ca-4f7e-974c-aacb4a70074b.png" 
                alt="Rénovation complète cuisine avec coordination" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Les corps de métier */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Les corps de métier que nous coordonnons</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Carreleur</h3>
              <p className="text-gray-700">
                Pose de carrelage, faïence, mosaïque et pierre naturelle pour sols et murs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Plombier</h3>
              <p className="text-gray-700">
                Installation de réseaux d'eau, équipements sanitaires et chauffage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Électricien</h3>
              <p className="text-gray-700">
                Mise aux normes électriques, installations et raccordements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Plaquiste</h3>
              <p className="text-gray-700">
                Création de cloisons, plafonds et aménagements en plaques de plâtre.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Menuisier</h3>
              <p className="text-gray-700">
                Installation de menuiseries, portes, fenêtres et aménagements sur mesure.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Peintre</h3>
              <p className="text-gray-700">
                Préparation des surfaces, application de peinture et revêtements muraux.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Maçon</h3>
              <p className="text-gray-700">
                Travaux de démolition, création d'ouvertures et réparation structurelle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Chauffagiste</h3>
              <p className="text-gray-700">
                Installation et mise en service de systèmes de chauffage adaptés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre processus */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Notre processus de coordination</h2>
          
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 border-l-4 border-fazio-red rounded-r-lg shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-fazio-red text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-semibold text-fazio-dark-green">Évaluation initiale</h3>
              </div>
              <p className="mt-3 text-gray-700 pl-14">
                Visite technique, analyse de vos besoins et contraintes, relevé précis des lieux pour établir un cahier des charges complet.
              </p>
            </div>
            
            <div className="bg-white p-6 border-l-4 border-fazio-red rounded-r-lg shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-fazio-red text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-semibold text-fazio-dark-green">Conception et devis</h3>
              </div>
              <p className="mt-3 text-gray-700 pl-14">
                Élaboration des plans, sélection des matériaux, consultation des artisans et établissement d'un devis détaillé.
              </p>
            </div>
            
            <div className="bg-white p-6 border-l-4 border-fazio-red rounded-r-lg shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-fazio-red text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-semibold text-fazio-dark-green">Planification</h3>
              </div>
              <p className="mt-3 text-gray-700 pl-14">
                Élaboration d'un planning détaillé des interventions, coordination des équipes et anticipation des contraintes techniques.
              </p>
            </div>
            
            <div className="bg-white p-6 border-l-4 border-fazio-red rounded-r-lg shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-fazio-red text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-semibold text-fazio-dark-green">Suivi de chantier</h3>
              </div>
              <p className="mt-3 text-gray-700 pl-14">
                Supervision quotidienne des travaux, contrôle qualité rigoureux et ajustements si nécessaire pour respecter les délais.
              </p>
            </div>
            
            <div className="bg-white p-6 border-l-4 border-fazio-red rounded-r-lg shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-fazio-red text-white rounded-full flex items-center justify-center font-bold">5</div>
                <h3 className="text-xl font-semibold text-fazio-dark-green">Réception et garanties</h3>
              </div>
              <p className="mt-3 text-gray-700 pl-14">
                Vérification finale des travaux, livraison d'un chantier propre et remise de toutes les garanties et documentations techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exemples de réalisations */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Nos réalisations coordonnées</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/5d3243b6-cbe4-4f2a-b3be-3da901e6813c.png" 
                  alt="Rénovation complète de salon" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Rénovation d'espace de vie</h3>
                <p className="text-gray-700">
                  Coordination complète pour la transformation d'un salon avec carrelage grand format et aménagements.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/33102d95-12df-4e3e-9959-1778c94dd58c.png" 
                  alt="Rénovation complète de salle de bain" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Rénovation de salle de bain</h3>
                <p className="text-gray-700">
                  Coordination de tous les corps de métier pour une transformation totale d'une salle de bain.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/c7105d05-b6ca-4f7e-974c-aacb4a70074b.png" 
                  alt="Rénovation complète de cuisine" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Rénovation de cuisine</h3>
                <p className="text-gray-700">
                  Gestion de projet pour une cuisine moderne avec carrelage, plomberie et électricité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fazio-red text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Un projet de rénovation complexe ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Confiez-nous la coordination de votre projet et bénéficiez d'un interlocuteur unique pour des travaux sans souci.
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

export default Coordination;
