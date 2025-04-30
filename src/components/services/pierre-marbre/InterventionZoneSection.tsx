
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import InterventionMap from '@/components/maps/InterventionMap';

const InterventionZoneSection: React.FC = () => {
  const locations = [
    "Bourg-en-Bresse",
    "Lyon",
    "Nice",
    "Toulon",
    "Antibes",
    "Cannes",
    "Cagnes-sur-Mer",
    "Saint-Raphaël",
    "Fréjus",
    "Draguignan",
  ];

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Nos zones d'intervention</h2>
          <p className="text-lg text-gray-700">
            Nous intervenons pour la pose de pierre naturelle et marbre dans toute la région Rhône-Alpes et sur la Côte d'Azur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl h-[400px] md:h-[500px] overflow-hidden">
            <InterventionMap />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold mb-6 text-fazio-dark-green">Principales villes où nous intervenons :</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
              {locations.map((location, index) => (
                <li key={index} className="flex items-center hover:text-fazio-red transition-colors">
                  <Check className="h-5 w-5 text-fazio-red mr-2 shrink-0" />
                  <span>{location}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700">
              Et dans toute la région Rhône-Alpes et la Côte d'Azur. N'hésitez pas à nous contacter pour vérifier notre disponibilité dans votre secteur.
            </p>
            <div className="mt-8">
              <Button asChild className="bg-fazio-red hover:bg-fazio-light-red transition-all duration-300 hover:scale-105">
                <Link to="/contact">
                  Demander un devis
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterventionZoneSection;
