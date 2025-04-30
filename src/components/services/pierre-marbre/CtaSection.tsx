
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
  return (
    <section className="bg-fazio-red text-white py-12">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-6">Envie d'un intérieur en pierre naturelle ou marbre ?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contactez-nous pour une étude personnalisée de votre projet et un devis gratuit.
        </p>
        <Button asChild size="lg" className="bg-white text-fazio-red hover:bg-fazio-cream">
          <Link to="/contact">
            Demander un devis gratuit
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
