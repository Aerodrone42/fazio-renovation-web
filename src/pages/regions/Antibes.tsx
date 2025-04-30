
import React from 'react';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';
import { localPagesDataAlpesMaritimes } from '@/data/localPagesData';

const AntibesPage = () => {
  const pageData = localPagesDataAlpesMaritimes.find(data => data.ville.nom === "Antibes");
  
  if (!pageData) {
    return <div>Données non disponibles</div>;
  }
  
  return <LocalPageTemplate pageData={pageData} />;
};

export default AntibesPage;
