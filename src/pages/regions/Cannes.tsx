
import React from 'react';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';
import { localPagesDataAlpesMaritimes } from '@/data/localPagesData';

const CannesPage = () => {
  const pageData = localPagesDataAlpesMaritimes.find(data => data.ville.nom === "Cannes");
  
  if (!pageData) {
    return <div>Données non disponibles</div>;
  }
  
  return <LocalPageTemplate pageData={pageData} />;
};

export default CannesPage;
