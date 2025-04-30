
import React from 'react';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';
import { localPagesDataAin } from '@/data/localPagesData';

const BourgEnBressePage = () => {
  // On trouve les données correspondant à Bourg-en-Bresse
  const pageData = localPagesDataAin.find(data => data.ville.nom === "Bourg-en-Bresse");
  
  if (!pageData) {
    return <div>Données non disponibles</div>;
  }
  
  return <LocalPageTemplate pageData={pageData} />;
};

export default BourgEnBressePage;
