
import React from 'react';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';
import { localPagesDataAin } from '@/data/localPagesData';

const MeximieuxPage = () => {
  const pageData = localPagesDataAin.find(data => data.ville.nom === "Meximieux");
  
  if (!pageData) {
    return <div>Données non disponibles</div>;
  }
  
  return <LocalPageTemplate pageData={pageData} />;
};

export default MeximieuxPage;
