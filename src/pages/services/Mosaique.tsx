
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Mosaique = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-fazio-cream py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-fazio-dark-green mb-4">Pose de mosaïque</h1>
            <p className="text-lg text-gray-700">
              La mosaïque apporte élégance et originalité à vos espaces. Découvrez notre expertise en pose de mosaïque pour sublimer votre intérieur.
            </p>
          </div>
        </div>
      </section>

      {/* Description du service */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-fazio-dark-green mb-6">Une touche d'élégance avec la mosaïque</h2>
              <p className="text-gray-700 mb-4">
                La pose de mosaïque est un art exigeant qui demande précision et savoir-faire. Chez FAZIO Lorenzo, nous maîtrisons les techniques spécifiques à ce revêtement pour des finitions impeccables.
              </p>
              <p className="text-gray-700 mb-4">
                Que ce soit pour une crédence de cuisine, une douche à l'italienne, un mur décoratif ou même une piscine, la mosaïque apporte une touche d'élégance et de personnalité à votre intérieur ou extérieur.
              </p>
              <p className="text-gray-700 mb-6">
                Nous travaillons avec différents types de mosaïques : verre, pierre naturelle, céramique, émaux de Briare, et nous vous accompagnons dans le choix des matériaux et des motifs.
              </p>
              <Button asChild className="bg-fazio-red hover:bg-fazio-light-red">
                <Link to="/contact">
                  Demander un devis gratuit
                </Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/1d97a0be-2c5e-464b-b251-9aa1dcea7ef1.png" 
                alt="Pose de mosaïque dans une piscine - Carrelage bleu-vert en piscine" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos prestations de mosaïque */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Nos prestations de mosaïque</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/ade1f5bb-0fc9-4dff-b9a4-a06121bfae54.png" 
                  alt="Mosaïque pour piscine" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Mosaïque pour piscine</h3>
                <p className="text-gray-700">
                  Embellissez votre piscine avec des mosaïques de qualité résistantes au chlore et aux variations de température.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/12444f2a-8cb8-4ed8-8e57-a2073415add5.png" 
                  alt="Mosaïque pour salle de bain" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Mosaïque en salle de bain</h3>
                <p className="text-gray-700">
                  Créez un espace bien-être unique avec des mosaïques élégantes qui transformeront votre salle de bain.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/cdfc9eb7-b9b7-4c7f-b8a5-143288a35b85.png" 
                  alt="Mosaïque décorative" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Décoration murale en mosaïque</h3>
                <p className="text-gray-700">
                  Apportez une touche artistique à votre intérieur avec des compositions murales en mosaïque personnalisées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fazio-red text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à embellir votre espace avec de la mosaïque ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet de mosaïque et obtenir un devis personnalisé.
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

export default Mosaique;
