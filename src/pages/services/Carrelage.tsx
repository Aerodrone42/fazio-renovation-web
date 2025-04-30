
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/services/carrelage/HeroSection';
import IntroSection from '@/components/services/carrelage/IntroSection';
import ServicesSection from '@/components/services/carrelage/ServicesSection';
import WhyChooseSection from '@/components/services/carrelage/WhyChooseSection';
import ProjectShowcaseSection from '@/components/services/carrelage/ProjectShowcaseSection';
import InterventionZoneSection from '@/components/services/carrelage/InterventionZoneSection';
import CtaSection from '@/components/services/carrelage/CtaSection';

const Carrelage = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Pose de Carrelage | Expert carreleur dans l'Ain et la Côte d'Azur | SARL FAZIO Lorenzo</title>
        <meta 
          name="description" 
          content="Pose de carrelage professionnelle par SARL FAZIO Lorenzo. Intérieur, extérieur, tous formats et tous types de pose. Expertise dans l'Ain, l'Ouest Lyonnais et la Côte d'Azur." 
        />
        <meta 
          name="keywords" 
          content="pose carrelage, carreleur professionnel, carrelage intérieur, carrelage extérieur, carrelage Ain, carrelage Côte d'Azur, grands formats, faïence, mosaïque" 
        />
        <link rel="canonical" href="https://www.carrelage-fazio.fr/services/carrelage" />
      </Helmet>
      
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProjectShowcaseSection />
      <InterventionZoneSection />
      <CtaSection />
    </div>
  );
};

export default Carrelage;
