
import React from 'react';
import HeroSection from '@/components/services/renovation-salle-de-bain/HeroSection';
import IntroSection from '@/components/services/renovation-salle-de-bain/IntroSection';
import ServicesSection from '@/components/services/renovation-salle-de-bain/ServicesSection';
import ProcessSection from '@/components/services/renovation-salle-de-bain/ProcessSection';
import ProjectShowcaseSection from '@/components/services/renovation-salle-de-bain/ProjectShowcaseSection';
import FaqSection from '@/components/services/renovation-salle-de-bain/FaqSection';
import CtaSection from '@/components/services/renovation-salle-de-bain/CtaSection';
import { Helmet } from 'react-helmet-async';

const RenovationSalleDeBain = () => {
  return (
    <div className="pt-24 pb-16">
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
      
      <HeroSection />
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
