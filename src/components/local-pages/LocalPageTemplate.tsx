
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LocalPageData } from '@/data/localPagesData';
import LocalPortfolioCarousel from './LocalPortfolioCarousel';

interface LocalPageTemplateProps {
  pageData: LocalPageData;
}

const LocalPageTemplate: React.FC<LocalPageTemplateProps> = ({ pageData }) => {
  const { ville, region, departement, titre_accroche, specificites } = pageData;
  
  // Formatage des communes voisines pour le SEO et le texte naturel
  const communesText = () => {
    const communes = [...ville.communes_voisines];
    const lastCommune = communes.pop();
    return communes.join(', ') + ' ou ' + lastCommune;
  };

  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Carrelage et Rénovation à {ville.nom} | SARL FAZIO Lorenzo</title>
        <meta 
          name="description" 
          content={`Carreleur professionnel à ${ville.nom} et alentours (${ville.communes_voisines.join(', ')}). Pose de carrelage, rénovation salle de bain, douche à l'italienne, mosaïque. Devis gratuit.`} 
        />
        <meta 
          name="keywords" 
          content={`carreleur ${ville.nom}, carrelage ${ville.nom}, rénovation salle de bain ${ville.nom}, douche italienne ${ville.nom}, pose carrelage ${departement}, carreleur ${region}`} 
        />
        <link rel="canonical" href={`https://www.carrelage-fazio.fr/regions/${ville.nom.toLowerCase().replace(/\s+/g, '-')}`} />
      </Helmet>

      {/* Hero section */}
      <section className="bg-fazio-cream py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-fazio-dark-green mb-4">
              {ville.nom} : {titre_accroche}
            </h1>
            <p className="text-lg text-gray-700">
              SARL FAZIO Lorenzo, votre spécialiste du carrelage et de la rénovation dans l'Ain et l'ouest lyonnais.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction avec mentions des communes */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Vous êtes à <strong>{ville.nom}</strong> ou dans une commune voisine comme {communesText()} ? La SARL FAZIO Lorenzo vous accompagne dans tous vos projets de carrelage, rénovation de salle de bain, pose de marbre ou de mosaïque, avec un accompagnement complet clé en main.
            </p>

            {specificites && (
              <p className="mb-6">{specificites}</p>
            )}

            <p className="mb-6">
              Notre entreprise familiale, basée à Dagneux, intervient dans tout le département du {departement} pour vous offrir des prestations de qualité, réalisées dans les règles de l'art par des artisans qualifiés et passionnés.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio de réalisations - Nouveau composant ajouté ici */}
      <LocalPortfolioCarousel cityName={ville.nom} />

      {/* Services proposés */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-8 text-center">
            Nos services à {ville.nom} et ses environs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Pose de carrelage</h3>
              <p>Carrelage intérieur et extérieur, tous formats et tous types de pose. Sols et murs, nous maîtrisons toutes les techniques pour un résultat impeccable.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Pose de mosaïque</h3>
              <p>Ajoutez une touche décorative unique à votre intérieur avec nos créations en mosaïque, pour des espaces personnalisés et élégants.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Pierre naturelle et marbre</h3>
              <p>Le charme authentique de la pierre naturelle et l'élégance du marbre sublimeront votre intérieur. Notre expertise garantit une pose parfaite de ces matériaux nobles.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Douche à l'italienne</h3>
              <p>Créez une salle de bain moderne et accessible avec une douche à l'italienne sur mesure, parfaitement étanchéifiée et carrelée selon vos goûts.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Rénovation salle de bain</h3>
              <p>De la conception à la réalisation, nous prenons en charge la rénovation complète de votre salle de bain pour un espace fonctionnel et esthétique.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fazio-dark-green mb-3">Coordination tous corps d'état</h3>
              <p>Un seul interlocuteur pour coordonner tous les aspects de votre projet : plomberie, électricité, plâtrerie... Nous gérons tout pour vous simplifier la vie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fazio-red text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Un projet à {ville.nom} ou dans les environs ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour discuter de vos besoins et obtenir un devis gratuit et personnalisé.
          </p>
          <Button asChild size="lg" className="bg-white text-fazio-red hover:bg-fazio-cream transform transition-transform duration-300 hover:scale-105">
            <Link to="/contact">
              Demander un devis gratuit
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LocalPageTemplate;
