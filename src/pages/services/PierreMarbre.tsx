
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/services/pierre-marbre/HeroSection';
import IntroSection from '@/components/services/pierre-marbre/IntroSection';
import ServicesSection from '@/components/services/pierre-marbre/ServicesSection';
import ApplicationsSection from '@/components/services/pierre-marbre/ApplicationsSection';
import AdvantagesSection from '@/components/services/pierre-marbre/AdvantagesSection';
import CtaSection from '@/components/services/pierre-marbre/CtaSection';

const PierreMarbre: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Pierre & Marbre | Expert en pose à Lyon, Bourg-en-Bresse et toute la région Rhône-Alpes</title>
        <meta name="description" content="Spécialiste en pose de pierre naturelle et marbre à Lyon, Villeurbanne, Villefranche-sur-Saône, Bourg-en-Bresse, Oyonnax et Ambérieu-en-Bugey. Revêtements nobles pour sols, murs et plans de travail. Devis gratuit." />
        <meta name="keywords" content="pierre naturelle, marbre, pose pierre Lyon, marbre Rhône-Alpes, artisan pierre Bourg-en-Bresse, revêtement marbre Villeurbanne, pierre naturelle Villefranche-sur-Saône, marbre Oyonnax, pierre Ambérieu-en-Bugey, plan de travail marbre, crédence pierre, salle de bain marbre" />
        <link rel="canonical" href="https://www.fazio-lorenzo.com/services/pierre-marbre" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FAZIO Lorenzo | Expert en Pierre & Marbre à Lyon et dans l'Ain" />
        <meta property="og:description" content="Sublimez votre intérieur avec des revêtements en pierre naturelle ou marbre posés avec excellence par nos artisans experts à Lyon, Villeurbanne, Bourg-en-Bresse et toute la région Rhône-Alpes." />
        <meta property="og:url" content="https://www.fazio-lorenzo.com/services/pierre-marbre" />
        <meta property="og:image" content="https://www.fazio-lorenzo.com/images/pierre-marbre-preview.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="FAZIO Lorenzo | Expert en Pierre & Marbre à Lyon et dans l'Ain" />
        <meta property="twitter:description" content="Sublimez votre intérieur avec des revêtements en pierre naturelle ou marbre posés avec excellence par nos artisans experts à Lyon, Villeurbanne, Bourg-en-Bresse et toute la région Rhône-Alpes." />
      </Helmet>

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
