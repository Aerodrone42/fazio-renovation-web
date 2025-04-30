
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

const RenovationSalleDeBain = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-fazio-cream py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-fazio-dark-green mb-4">Rénovation complète de salle de bain</h1>
            <p className="text-lg text-gray-700">
              Transformez votre salle de bain en un espace de bien-être fonctionnel et esthétique avec notre service clé en main.
            </p>
          </div>
        </div>
      </section>

      {/* Description du service */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-fazio-dark-green mb-6">Une rénovation complète clé en main</h2>
              <p className="text-gray-700 mb-4">
                La rénovation d'une salle de bain implique de nombreux corps de métier et nécessite une coordination parfaite pour un résultat harmonieux. Notre entreprise vous propose un service complet, de la conception à la réalisation.
              </p>
              <p className="text-gray-700 mb-4">
                Nous gérons tous les aspects de votre projet : démolition, plomberie, électricité, étanchéité, pose de carrelage, installation des sanitaires et de la robinetterie, menuiserie et finitions.
              </p>
              <p className="text-gray-700 mb-6">
                Notre équipe vous accompagne dans le choix des matériaux et des équipements pour créer un espace qui correspond parfaitement à vos besoins et à votre style.
              </p>
              <Button asChild className="bg-fazio-red hover:bg-fazio-light-red">
                <Link to="/contact">
                  Demander un devis gratuit
                </Link>
              </Button>
            </div>
            <div className="md:max-w-sm mx-auto">
              <Card className="overflow-hidden shadow-lg border-none">
                <CardContent className="p-0">
                  <div className="relative w-full">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src="/lovable-uploads/ad4258c5-00b0-4740-8bb5-c6df5a6d0d4e.png" 
                        alt="Salle de bain rénovée avec carrelage beige" 
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </AspectRatio>
                  </div>
                  <div className="bg-white p-3 text-center text-sm text-gray-600">
                    Exemple de salle de bain rénovée par notre équipe
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nos prestations */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Nos prestations en rénovation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/233c6240-522f-406b-b216-7e2dfc7197b0.png" 
                  alt="Douche avec carrelage moderne" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Création de douche à l'italienne</h3>
                <p className="text-gray-700">
                  Installation de douches à l'italienne élégantes et accessibles pour un confort d'utilisation optimal.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/a710474f-3d48-4f86-9471-7f3cb371435d.png" 
                  alt="Préparation des installations de plomberie" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Rénovation complète</h3>
                <p className="text-gray-700">
                  Prise en charge de tous les aspects de la rénovation, de la démolition aux finitions.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/94579f05-2e9d-4f94-98dc-9513524b38b6.png" 
                  alt="Pose de carrelage mural moderne" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Plomberie et sanitaires</h3>
                <p className="text-gray-700">
                  Installation et raccordement de tous les éléments sanitaires et de la robinetterie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus de rénovation */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Notre processus de rénovation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-fazio-red text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Étude et conception</h3>
                <p className="text-gray-700">
                  Analyse de vos besoins, prise de mesures précises et proposition d'aménagements adaptés à votre espace et à vos attentes.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-fazio-red text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Démolition et préparation</h3>
                <p className="text-gray-700">
                  Dépose des anciens équipements, démolition si nécessaire et préparation des supports pour les nouvelles installations.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-fazio-red text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Plomberie et électricité</h3>
                <p className="text-gray-700">
                  Mise aux normes des réseaux, installation des nouvelles arrivées d'eau, évacuations et circuits électriques.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-fazio-red text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Étanchéité et revêtements</h3>
                <p className="text-gray-700">
                  Application des systèmes d'étanchéité et pose des revêtements muraux et de sol (carrelage, faïence, mosaïque).
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-fazio-red text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Installation sanitaire</h3>
                <p className="text-gray-700">
                  Pose des équipements sanitaires : douche, baignoire, vasque, WC, robinetterie et accessoires.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-fazio-red text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">6</div>
              <div>
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Finitions et livraison</h3>
                <p className="text-gray-700">
                  Réalisation des finitions, nettoyage complet et livraison d'une salle de bain prête à l'emploi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exemples avant/après */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Du projet à la réalisation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/7d9587ec-d151-4dfd-aec1-f03ee2666d01.png" 
                  alt="Préparation et pose de carrelage dans une salle de bain" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Préparation technique</h3>
                <p className="text-gray-700">
                  Installation des réseaux de plomberie et préparation des murs pour une finition parfaite.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/33102d95-12df-4e3e-9959-1778c94dd58c.png" 
                  alt="Salle de bain terminée avec carrelage gris clair" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Résultat final</h3>
                <p className="text-gray-700">
                  Une salle de bain entièrement rénovée, alliant esthétique et fonctionnalité pour votre bien-être quotidien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fazio-red text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre salle de bain ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une étude personnalisée de votre projet de rénovation et un devis détaillé.
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

export default RenovationSalleDeBain;
