
import React from 'react';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';
import { localPagesDataAlpesMaritimes } from '@/data/localPagesData';

const CagnesSurMerPage = () => {
  const pageData = localPagesDataAlpesMaritimes.find(data => data.ville.nom === "Cagnes-sur-Mer");
  
  if (!pageData) {
    return <div>Données non disponibles</div>;
  }
  
  return <LocalPageTemplate pageData={pageData} />;
};

export default CagnesSurMerPage;
