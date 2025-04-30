
import React from 'react';
import HeroSection from '@/components/services/pierre-marbre/HeroSection';
import IntroSection from '@/components/services/pierre-marbre/IntroSection';
import ServicesSection from '@/components/services/pierre-marbre/ServicesSection';
import ApplicationsSection from '@/components/services/pierre-marbre/ApplicationsSection';
import AdvantagesSection from '@/components/services/pierre-marbre/AdvantagesSection';
import ProjectShowcaseSection from '@/components/services/pierre-marbre/ProjectShowcaseSection';
import CtaSection from '@/components/services/pierre-marbre/CtaSection';
import { Helmet } from 'react-helmet-async';

const PierreMarbre: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Pierre Naturelle et Marbre | Expert en matériaux nobles | SARL FAZIO Lorenzo</title>
        <meta 
          name="description" 
          content="Pose de pierre naturelle et marbre par SARL FAZIO Lorenzo. Travertin, marbre, granit, ardoise pour sols, murs et plans de travail. Expertise dans l'Ain et sur la Côte d'Azur." 
        />
        <meta 
          name="keywords" 
          content="pierre naturelle, marbre, travertin, granit, ardoise, pierre calcaire, plan de travail marbre, sol en pierre, mur en pierre, Ain, Côte d'Azur" 
        />
        <link rel="canonical" href="https://www.carrelage-fazio.fr/services/pierre-marbre" />
      </Helmet>
      
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ApplicationsSection />
      <AdvantagesSection />
      <ProjectShowcaseSection />
      <CtaSection />
    </div>
  );
};

export default PierreMarbre;
