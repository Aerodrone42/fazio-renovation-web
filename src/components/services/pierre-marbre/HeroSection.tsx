
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-fazio-cream py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-fazio-dark-green mb-4 text-3xl md:text-4xl">
            <span className="font-bold">Pierre & Marbre</span> | Expert en revêtements nobles à <span className="font-semibold text-fazio-red">Lyon</span> et dans l'<span className="font-semibold text-fazio-red">Ain</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Sublimez votre intérieur avec des <strong>revêtements en pierre naturelle</strong> ou <strong>marbre</strong> posés avec excellence par nos artisans experts à <strong>Lyon</strong>, <strong>Villeurbanne</strong>, <strong>Bourg-en-Bresse</strong> et dans toute la région <strong>Rhône-Alpes</strong>.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-sm max-w-3xl mx-auto">
            <p className="text-fazio-dark-green font-medium mb-2">
              Notre expertise s'étend également sur la <span className="text-fazio-red font-semibold">Côte d'Azur</span>, avec des interventions dans les départements du <strong>Var (83)</strong> et des <strong>Alpes-Maritimes (06)</strong>.
            </p>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            <p className="mb-2 font-medium">Intervention dans les principales villes :</p>
            <p>
              <span className="font-medium">Rhône (69):</span> <span className="underline decoration-fazio-red decoration-2 underline-offset-2">Lyon</span>, <span className="underline decoration-fazio-red decoration-2 underline-offset-2">Villeurbanne</span>, <span className="underline decoration-fazio-red decoration-2 underline-offset-2">Villefranche-sur-Saône</span>
            </p>
            <p>
              <span className="font-medium">Ain (01):</span> <span className="underline decoration-fazio-red decoration-2 underline-offset-2">Bourg-en-Bresse</span>, <span className="underline decoration-fazio-red decoration-2 underline-offset-2">Oyonnax</span>, <span className="underline decoration-fazio-red decoration-2 underline-offset-2">Ambérieu-en-Bugey</span>
            </p>
            <p>
              <span className="font-medium">Côte d'Azur:</span> <span className="underline decoration-fazio-red decoration-2 underline-offset-2">Nice (06)</span>, <span className="underline decoration-fazio-red decoration-2 underline-offset-2">Cannes (06)</span>, <span className="underline decoration-fazio-red decoration-2 underline-offset-2">Toulon (83)</span>, <span className="underline decoration-fazio-red decoration-2 underline-offset-2">Saint-Tropez (83)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
