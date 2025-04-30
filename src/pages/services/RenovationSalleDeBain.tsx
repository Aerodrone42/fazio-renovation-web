
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicePageHeader from '@/components/services/ServicePageHeader';
import IntroSection from '@/components/services/renovation-salle-de-bain/IntroSection';
import ServicesSection from '@/components/services/renovation-salle-de-bain/ServicesSection';
import ProcessSection from '@/components/services/renovation-salle-de-bain/ProcessSection';
import ProjectShowcaseSection from '@/components/services/renovation-salle-de-bain/ProjectShowcaseSection';
import FaqSection from '@/components/services/renovation-salle-de-bain/FaqSection';
import CtaSection from '@/components/services/renovation-salle-de-bain/CtaSection';

const RenovationSalleDeBain = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Rénovation de Salle de Bain | Transformation clé en main | SARL FAZIO Lorenzo</title>
        <meta 
          name="description" 
          content="Rénovation complète de salle de bain par SARL FAZIO Lorenzo. Service clé en main, coordination tous corps d'état. Expertise dans l'Ain, l'Ouest Lyonnais et la Côte d'Azur." 
        />
        <meta 
          name="keywords" 
          content="rénovation salle de bain, salle de bain clé en main, transformation salle de bain, carrelage salle de bain, douche à l'italienne, meuble salle de bain, Ain, Côte d'Azur" 
        />
        <link rel="canonical" href="https://www.carrelage-fazio.fr/services/renovation-salle-de-bain" />
      </Helmet>
      
      {/* En-tête avec image */}
      <ServicePageHeader 
        title="Rénovation de salle de bain"
        description="Transformation complète de votre salle de bain, de la conception à la réalisation."
        imagePath="/lovable-uploads/8bfe4682-ae69-48cc-8f91-a4bdaf3d9e5e.png"
      />
      
      <IntroSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectShowcaseSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default RenovationSalleDeBain;
