
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-fazio-dark-green mb-6">L'élégance intemporelle de la <span className="text-fazio-red">pierre naturelle et du marbre</span></h2>
            <p className="text-gray-700 mb-4">
              La <strong>pierre naturelle</strong> et le <strong>marbre</strong> sont des matériaux nobles qui apportent une dimension unique et prestigieuse à votre intérieur. Leur beauté intemporelle et leur durabilité exceptionnelle en font un investissement pour la vie, parfaitement adapté aux exigences des habitants de <strong>Lyon</strong>, <strong>Villeurbanne</strong>, <strong>Bourg-en-Bresse</strong> et toute la région <strong>Rhône-Alpes</strong>.
            </p>
            <p className="text-gray-700 mb-4">
              Notre expertise de plus de 15 ans nous permet de travailler aussi bien avec des <mark className="bg-fazio-cream px-1">marbres précieux</mark> qu'avec des <mark className="bg-fazio-cream px-1">pierres naturelles</mark> comme le travertin, la pierre calcaire ou le granit, pour créer des espaces d'une élégance rare qui valorisent durablement votre patrimoine immobilier dans les grandes villes comme <strong>Lyon</strong>, <strong>Villefranche-sur-Saône</strong>, ou les communes de l'<strong>Ain</strong>.
            </p>
            <p className="text-gray-700 mb-6">
              Nous vous accompagnons dans le choix des matériaux qui correspondront parfaitement à votre projet et assurons une <strong>pose irréprochable</strong> pour un résultat à la hauteur de vos attentes. Notre équipe d'artisans qualifiés intervient dans toutes les grandes villes du <strong>Rhône</strong> (<strong>Lyon</strong>, <strong>Villeurbanne</strong>, <strong>Villefranche-sur-Saône</strong>) et de l'<strong>Ain</strong> (<strong>Bourg-en-Bresse</strong>, <strong>Oyonnax</strong>, <strong>Ambérieu-en-Bugey</strong>) pour vous offrir un service de proximité de qualité.
            </p>
            <div className="space-y-3">
              <p className="text-fazio-dark-green font-semibold">Nos garanties exclusives :</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Matériaux sélectionnés auprès des meilleurs fournisseurs européens</li>
                <li>Artisans certifiés avec plus de 15 ans d'expérience</li>
                <li>Garantie décennale sur tous nos travaux de pose</li>
                <li>Service après-vente réactif dans toute la région Rhône-Alpes</li>
              </ul>
            </div>
            <div className="mt-8">
              <Button asChild className="bg-fazio-red hover:bg-fazio-light-red">
                <Link to="/contact">
                  Demander un devis gratuit
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl mx-auto md:mx-0 max-w-md">
            <img 
              src="/lovable-uploads/3a0cf80e-32b3-4264-b89d-b5b87fc56e5e.png" 
              alt="Élégante entrée avec revêtement de sol en pierre et marbre à motifs géométriques à Lyon" 
              className="w-full h-auto object-cover"
            />
            <div className="bg-white p-3 text-center text-sm text-gray-600">
              Revêtement en marbre et pierre naturelle réalisé à Lyon (69)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
