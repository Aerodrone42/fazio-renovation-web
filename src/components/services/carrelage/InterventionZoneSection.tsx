
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import InterventionMap from '@/components/maps/InterventionMap';

const InterventionZoneSection: React.FC = () => {
  const locations = [
    "Dagneux",
    "Bourg-en-Bresse",
    "Villefranche-sur-Saône",
    "Lyon Ouest",
    "Montluel",
    "Meximieux",
    "Miribel",
    "Trévoux",
    "Ambérieu-en-Bugey",
    "Beynost",
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Notre zone d'intervention</h2>
          <p className="text-lg text-gray-700">
            Nous intervenons pour la pose de carrelage dans toute la région ouest lyonnaise et dans le département de l'Ain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-semibold mb-6 text-fazio-dark-green">Nos principales zones d'intervention :</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
              {locations.map((location, index) => (
                <li key={index} className="flex items-center animate-fade-in hover:text-fazio-red transition-colors" style={{ animationDelay: `${(index + 4) * 100}ms` }}>
                  <Check className="h-5 w-5 text-fazio-red mr-2 shrink-0" />
                  <span>{location}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700 animate-fade-in" style={{ animationDelay: "1400ms" }}>
              Et dans tout le département de l'Ain (01) et l'ouest lyonnais. N'hésitez pas à nous contacter pour vérifier notre disponibilité dans votre secteur.
            </p>
            <div className="mt-8 animate-fade-in" style={{ animationDelay: "1600ms" }}>
              <Button asChild className="bg-fazio-red hover:bg-fazio-light-red transition-all duration-300 hover:scale-105">
                <Link to="/contact">
                  Vérifier notre disponibilité
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl animate-fade-in" style={{ animationDelay: "400ms" }}>
            <InterventionMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterventionZoneSection;
