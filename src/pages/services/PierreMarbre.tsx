
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicePageHeader from '@/components/services/ServicePageHeader';
import IntroSection from '@/components/services/pierre-marbre/IntroSection';
import ServicesSection from '@/components/services/pierre-marbre/ServicesSection';
import ApplicationsSection from '@/components/services/pierre-marbre/ApplicationsSection';
import AdvantagesSection from '@/components/services/pierre-marbre/AdvantagesSection';
import ProjectShowcaseSection from '@/components/services/pierre-marbre/ProjectShowcaseSection';
import TestimonialsSection from '@/components/services/pierre-marbre/TestimonialsSection';
import CtaSection from '@/components/services/pierre-marbre/CtaSection';

const PierreMarbre: React.FC = () => {
  return (
    <div className="pt-16">
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
      
      <ServicePageHeader 
        title="Pierre naturelle et marbre"
        description="L'élégance intemporelle des matériaux nobles pour sublimer votre intérieur."
        imagePath="/lovable-uploads/bda2aeec-32ad-4860-a658-0f0015ceb618.png"
      />
      
      <div className="bg-white">
        <IntroSection />
        <ServicesSection />
        <ApplicationsSection />
        <AdvantagesSection />
      </div>
      
      <ProjectShowcaseSection />
      <TestimonialsSection />
      
      <div className="bg-white">
        <CtaSection />
      </div>
    </div>
  );
};

export default PierreMarbre;
