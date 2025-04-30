
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-fazio-cream py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-fazio-dark-green mb-4">
            <span className="font-bold">Pierre & Marbre</span> | Expert en revêtements nobles à <span className="font-semibold text-fazio-red">Lyon</span> et dans l'<span className="font-semibold text-fazio-red">Ain</span>
          </h1>
          <p className="text-lg text-gray-700">
            Sublimez votre intérieur avec des <strong>revêtements en pierre naturelle</strong> ou <strong>marbre</strong> posés avec excellence par nos artisans experts à <strong>Lyon</strong>, <strong>Villeurbanne</strong>, <strong>Bourg-en-Bresse</strong> et dans toute la région.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <p>
              Intervention dans les villes de <span className="font-medium">Lyon</span>, <span className="font-medium">Villeurbanne</span>, <span className="font-medium">Villefranche-sur-Saône</span>, <span className="font-medium">Bourg-en-Bresse</span>, <span className="font-medium">Oyonnax</span>, <span className="font-medium">Ambérieu-en-Bugey</span> et alentours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
