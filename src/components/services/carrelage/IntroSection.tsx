
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const IntroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-fazio-dark-green mb-6">Notre expertise en pose de carrelage</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                La SARL FAZIO Lorenzo met à votre service son expertise et son savoir-faire artisanal pour la pose de carrelage dans tous vos espaces. Que ce soit pour votre salle de bain, votre cuisine, votre salon ou vos espaces extérieurs, nous garantissons un travail soigné et durable.
              </p>
              <p>
                Notre équipe maîtrise parfaitement toutes les techniques de pose (droite, diagonale, en chevron, etc.) et s'adapte à tous types de carreaux : grès cérame, faïence, mosaïque, grands formats et même carreaux de ciment.
              </p>
              <p>
                Nous intervenons dans toute la région ouest lyonnaise et dans le département de l'Ain, notamment à Dagneux, Bourg-en-Bresse et Villefranche-sur-Saône.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild className="bg-fazio-red hover:bg-fazio-light-red">
                <Link to="/contact">
                  Demander un devis gratuit
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <AspectRatio ratio={16/9}>
              <img 
                src="/lovable-uploads/1b3b9e35-ec04-42c4-b14a-4fdfe2d6b954.png" 
                alt="Pose de carrelage cuisine moderne" 
                className="w-full h-full object-cover"
                onLoad={() => setImageError(false)}
                onError={() => setImageError(true)}
              />
              {imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <p className="text-gray-500">Image non disponible</p>
                </div>
              )}
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
