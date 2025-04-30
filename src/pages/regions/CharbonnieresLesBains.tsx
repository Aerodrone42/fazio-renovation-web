
import React from 'react';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';
import { localPagesDataOuestLyonnais } from '@/data/localPagesData';

const CharbonnieresLesBainsPage = () => {
  const pageData = localPagesDataOuestLyonnais.find(data => data.ville.nom === "Charbonnières-les-Bains");
  
  if (!pageData) {
    return <div>Données non disponibles</div>;
  }
  
  return <LocalPageTemplate pageData={pageData} />;
};

export default CharbonnieresLesBainsPage;
