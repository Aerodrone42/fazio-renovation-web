
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
  return (
    <section className="bg-fazio-red text-white py-12 mt-0" id="contact-pierre-marbre">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-6">Envie de sublimer votre intérieur avec de la pierre naturelle ou du marbre ?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contactez notre équipe d'experts pour obtenir un devis personnalisé et gratuit pour votre projet dans le <strong>Rhône</strong>, l'<strong>Ain</strong>, le <strong>Var (Le Lavandou)</strong> et toute la région <strong>Rhône-Alpes</strong>.
        </p>
        <div className="mb-8 text-sm">
          <p className="font-semibold mb-2">Nous intervenons dans les principales villes :</p>
          <p><strong>Rhône (69)</strong> : Lyon, Villeurbanne, Villefranche-sur-Saône</p>
          <p><strong>Ain (01)</strong> : Bourg-en-Bresse, Oyonnax, Ambérieu-en-Bugey</p>
          <p><strong>Var (83)</strong> : Le Lavandou, Toulon, Saint-Tropez</p>
        </div>
        <Button asChild size="lg" className="bg-white text-fazio-red hover:bg-fazio-cream">
          <Link to="/contact">
            Demander un devis gratuit
          </Link>
        </Button>
        <div className="mt-6 flex justify-center space-x-4">
          <Button asChild variant="link" className="text-white hover:text-fazio-cream">
            <Link to="/realisations">
              Voir nos réalisations
            </Link>
          </Button>
          <Button asChild variant="link" className="text-white hover:text-fazio-cream">
            <Link to="/contact#devis">
              Téléphone et contact
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
