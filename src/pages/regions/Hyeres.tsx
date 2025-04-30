
import React from 'react';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';
import { localPagesDataVar } from '@/data/localPagesData';

const HyeresPage = () => {
  const pageData = localPagesDataVar.find(data => data.ville.nom === "Hyères");
  
  if (!pageData) {
    return <div>Données non disponibles</div>;
  }
  
  return <LocalPageTemplate pageData={pageData} />;
};

export default HyeresPage;
