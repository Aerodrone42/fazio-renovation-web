
import React from 'react';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';
import { localPagesDataVar } from '@/data/localPagesData';

const SaintRaphaelPage = () => {
  const pageData = localPagesDataVar.find(data => data.ville.nom === "Saint-Raphaël");
  
  if (!pageData) {
    return <div>Données non disponibles</div>;
  }
  
  return <LocalPageTemplate pageData={pageData} />;
};

export default SaintRaphaelPage;
