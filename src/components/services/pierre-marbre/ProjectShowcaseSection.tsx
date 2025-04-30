
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectShowcaseSection: React.FC = () => {
  return (
    <section className="py-16 bg-fazio-cream">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Nos réalisations en pierre et marbre</h2>
          <p className="text-lg text-gray-700">
            Découvrez quelques-uns de nos projets récents utilisant la pierre naturelle et le marbre.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/3a0cf80e-32b3-4264-b89d-b5b87fc56e5e.png" 
              alt="Plan de travail en marbre" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold">Plan de travail en marbre</h3>
              <p className="text-sm text-gray-600">Nice (06)</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/7f28fbe4-32da-4c15-99c0-c17c0be06e74.png" 
              alt="Sol en travertin" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold">Sol en travertin</h3>
              <p className="text-sm text-gray-600">Cannes (06)</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/bfd5c952-83cc-456d-b3b1-fe9d20898976.png" 
              alt="Habillage mural en pierre naturelle" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold">Habillage mural en pierre</h3>
              <p className="text-sm text-gray-600">Toulon (83)</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" className="border-fazio-dark-green text-fazio-dark-green hover:bg-fazio-dark-green hover:text-white">
            <Link to="/realisations" className="flex items-center">
              Voir toutes nos réalisations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcaseSection;
