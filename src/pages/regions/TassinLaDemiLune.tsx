
import React from 'react';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';
import { localPagesDataOuestLyonnais } from '@/data/localPagesData';

const TassinLaDemiLunePage = () => {
  const pageData = localPagesDataOuestLyonnais.find(data => data.ville.nom === "Tassin-la-Demi-Lune");
  
  if (!pageData) {
    return <div>Données non disponibles</div>;
  }
  
  return <LocalPageTemplate pageData={pageData} />;
};

export default TassinLaDemiLunePage;
