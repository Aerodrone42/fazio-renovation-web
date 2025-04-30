
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

const IntroSection = () => {
  return (
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
                      src="/lovable-uploads/0222cdbc-73ea-4cf7-83fb-af4d24eaf2a3.png" 
                      alt="Salle de bain rénovée avec baignoire blanche et carrelage bois" 
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
  );
};

export default IntroSection;
