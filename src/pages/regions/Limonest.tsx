
import React from 'react';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';
import { localPagesDataOuestLyonnais } from '@/data/localPagesData';

const LimonestPage = () => {
  const pageData = localPagesDataOuestLyonnais.find(data => data.ville.nom === "Limonest");
  
  if (!pageData) {
    return <div>Données non disponibles</div>;
  }
  
  return <LocalPageTemplate pageData={pageData} />;
};

export default LimonestPage;
