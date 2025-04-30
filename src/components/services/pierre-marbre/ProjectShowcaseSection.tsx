
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectShowcaseSection: React.FC = () => {
  return (
    <section className="py-16 bg-fazio-cream animate-on-scroll">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Nos réalisations en pierre et marbre</h2>
          <p className="text-lg text-gray-700">
            Découvrez quelques-uns de nos projets récents utilisant la pierre naturelle et le marbre.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 fade-in-section">
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

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 fade-in-section">
            <img 
              src="/lovable-uploads/ad4258c5-00b0-4740-8bb5-c6df5a6d0d4e.png" 
              alt="Sol en travertin" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold">Sol en travertin</h3>
              <p className="text-sm text-gray-600">Cannes (06)</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 fade-in-section">
            <img 
              src="/lovable-uploads/a9dedbe2-d559-4176-b2d2-c55ab9d231f8.png" 
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
          <Button asChild variant="outline" className="border-fazio-dark-green text-fazio-dark-green hover:bg-fazio-dark-green hover:text-white transition-colors duration-300">
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
