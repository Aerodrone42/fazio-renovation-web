
import React from 'react';
import HeroSection from '@/components/services/pierre-marbre/HeroSection';
import IntroSection from '@/components/services/pierre-marbre/IntroSection';
import ServicesSection from '@/components/services/pierre-marbre/ServicesSection';
import ApplicationsSection from '@/components/services/pierre-marbre/ApplicationsSection';
import AdvantagesSection from '@/components/services/pierre-marbre/AdvantagesSection';
import CtaSection from '@/components/services/pierre-marbre/CtaSection';

const PierreMarbre: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ApplicationsSection />
      <AdvantagesSection />
      <CtaSection />
    </div>
  );
};

export default PierreMarbre;
