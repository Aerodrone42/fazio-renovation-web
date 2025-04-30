
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  localPagesDataAin, 
  localPagesDataOuestLyonnais,
  localPagesDataAlpesMaritimes,
  localPagesDataVar 
} from '@/data/localPagesData';

const RegionsIndex = () => {
  const formatUrl = (nom: string) => {
    return `/regions/${nom.replace(/['\s-]/g, '').toLowerCase()}`;
  };

  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Carreleur dans l'Ain, l'Ouest Lyonnais et la Côte d'Azur | SARL FAZIO Lorenzo</title>
        <meta 
          name="description" 
          content="SARL FAZIO Lorenzo, entreprise de carrelage et rénovation intervenant dans l'Ain, l'Ouest Lyonnais, les Alpes-Maritimes et le Var. Pose de carrelage, mosaïque, marbre, rénovation salle de bain." 
        />
        <link rel="canonical" href="https://www.carrelage-fazio.fr/regions" />
      </Helmet>

      <section className="bg-fazio-cream py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-fazio-dark-green mb-4">
              Carreleur professionnel dans l'Ain, l'Ouest Lyonnais et la Côte d'Azur
            </h1>
            <p className="text-lg text-gray-700">
              SARL FAZIO Lorenzo intervient dans de nombreuses communes pour tous vos projets de carrelage et rénovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-fazio-dark-green mb-6">
                Nos interventions dans l'Ain
              </h2>
              <p className="mb-6">
                Basée à Dagneux, notre entreprise intervient dans tout le département de l'Ain pour vos travaux de carrelage, 
                mosaïque, pierre naturelle et rénovation de salle de bain.
              </p>
              
              <ul className="space-y-4">
                {localPagesDataAin.map((data, index) => (
                  <li key={index} className="hover:bg-gray-50 rounded transition-colors p-2">
                    <Link 
                      to={formatUrl(data.ville.nom)}
                      className="flex items-center justify-between text-fazio-green hover:text-fazio-red transition-colors"
                    >
                      <span className="font-medium">{data.ville.nom}</span>
                      <span className="text-sm text-gray-600">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-fazio-dark-green mb-6">
                Nos interventions dans l'Ouest Lyonnais
              </h2>
              <p className="mb-6">
                Notre équipe se déplace également dans l'Ouest Lyonnais et les Monts d'Or pour réaliser vos projets 
                de carrelage et rénovation intérieure avec le même professionnalisme.
              </p>
              
              <ul className="space-y-4">
                {localPagesDataOuestLyonnais.map((data, index) => (
                  <li key={index} className="hover:bg-gray-50 rounded transition-colors p-2">
                    <Link 
                      to={formatUrl(data.ville.nom)}
                      className="flex items-center justify-between text-fazio-green hover:text-fazio-red transition-colors"
                    >
                      <span className="font-medium">{data.ville.nom}</span>
                      <span className="text-sm text-gray-600">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-fazio-dark-green mb-6">
                Nos interventions dans les Alpes-Maritimes
              </h2>
              <p className="mb-6">
                Notre entreprise met son expertise au service des habitants de la Côte d'Azur pour tous travaux 
                de carrelage, pierre naturelle et rénovation d'intérieur.
              </p>
              
              <ul className="space-y-4">
                {localPagesDataAlpesMaritimes.map((data, index) => (
                  <li key={index} className="hover:bg-gray-50 rounded transition-colors p-2">
                    <Link 
                      to={formatUrl(data.ville.nom)}
                      className="flex items-center justify-between text-fazio-green hover:text-fazio-red transition-colors"
                    >
                      <span className="font-medium">{data.ville.nom}</span>
                      <span className="text-sm text-gray-600">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-fazio-dark-green mb-6">
                Nos interventions dans le Var
              </h2>
              <p className="mb-6">
                De Toulon à Saint-Raphaël, notre équipe qualifiée réalise tous vos projets de carrelage et 
                de rénovation avec qualité et professionnalisme.
              </p>
              
              <ul className="space-y-4">
                {localPagesDataVar.map((data, index) => (
                  <li key={index} className="hover:bg-gray-50 rounded transition-colors p-2">
                    <Link 
                      to={formatUrl(data.ville.nom)}
                      className="flex items-center justify-between text-fazio-green hover:text-fazio-red transition-colors"
                    >
                      <span className="font-medium">{data.ville.nom}</span>
                      <span className="text-sm text-gray-600">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegionsIndex;
