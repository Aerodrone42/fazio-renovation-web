
import React from 'react';
import HeroSection from '@/components/services/renovation-salle-de-bain/HeroSection';
import IntroSection from '@/components/services/renovation-salle-de-bain/IntroSection';
import ServicesSection from '@/components/services/renovation-salle-de-bain/ServicesSection';
import ProcessSection from '@/components/services/renovation-salle-de-bain/ProcessSection';
import ProjectShowcaseSection from '@/components/services/renovation-salle-de-bain/ProjectShowcaseSection';
import CtaSection from '@/components/services/renovation-salle-de-bain/CtaSection';

const RenovationSalleDeBain = () => {
  return (
    <div className="pt-24 pb-16">
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectShowcaseSection />
      <CtaSection />
    </div>
  );
};

export default RenovationSalleDeBain;
