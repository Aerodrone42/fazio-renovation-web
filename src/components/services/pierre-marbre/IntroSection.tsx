
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
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
  );
};

export default IntroSection;
