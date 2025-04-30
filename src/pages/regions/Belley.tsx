
import React from 'react';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';
import { localPagesDataAin } from '@/data/localPagesData';

const BelleyPage = () => {
  const pageData = localPagesDataAin.find(data => data.ville.nom === "Belley");
  
  if (!pageData) {
    return <div>Données non disponibles</div>;
  }
  
  return <LocalPageTemplate pageData={pageData} />;
};

export default BelleyPage;
