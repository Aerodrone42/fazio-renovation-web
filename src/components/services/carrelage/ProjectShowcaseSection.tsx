
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectShowcaseSection: React.FC = () => {
  return (
    <section className="py-16 bg-fazio-cream">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Nos réalisations</h2>
          <p className="text-lg text-gray-700">
            Découvrez quelques-unes de nos réalisations récentes en pose de carrelage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1603825491103-bd638b1873b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
              alt="Salle de bain carrelée" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold">Salle de bain contemporaine</h3>
              <p className="text-sm text-gray-600">Dagneux (01)</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/24ac4e62-971b-4385-8b2b-759d2c2501ad.png" 
              alt="Cuisine moderne avec carrelage métro blanc" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold">Cuisine moderne</h3>
              <p className="text-sm text-gray-600">Bourg-en-Bresse (01)</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/5195b6f4-5b5d-4610-b957-1b37a61f7fa0.png" 
              alt="Terrasse carrelée" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold">Terrasse extérieure</h3>
              <p className="text-sm text-gray-600">Villefranche-sur-Saône (69)</p>
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
