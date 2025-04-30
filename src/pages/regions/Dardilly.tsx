
import React from 'react';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';
import { localPagesDataOuestLyonnais } from '@/data/localPagesData';

const DardillyPage = () => {
  const pageData = localPagesDataOuestLyonnais.find(data => data.ville.nom === "Dardilly");
  
  if (!pageData) {
    return <div>Données non disponibles</div>;
  }
  
  return <LocalPageTemplate pageData={pageData} />;
};

export default DardillyPage;
