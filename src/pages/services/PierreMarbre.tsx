
import React from 'react';
import HeroSection from '@/components/services/pierre-marbre/HeroSection';
import IntroSection from '@/components/services/pierre-marbre/IntroSection';
import ServicesSection from '@/components/services/pierre-marbre/ServicesSection';
import ApplicationsSection from '@/components/services/pierre-marbre/ApplicationsSection';
import AdvantagesSection from '@/components/services/pierre-marbre/AdvantagesSection';
import CtaSection from '@/components/services/pierre-marbre/CtaSection';

const PierreMarbre: React.FC = () => {
  // Mettre à jour le titre de la page de façon sécurisée
  React.useEffect(() => {
    const originalTitle = document.title;
    document.title = "Pierre & Marbre | Expert en pose à Lyon, Bourg-en-Bresse et toute la région Rhône-Alpes";
    
    // Restaurer le titre original lorsque le composant est démonté
    return () => {
      document.title = originalTitle;
    };
  }, []);

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
