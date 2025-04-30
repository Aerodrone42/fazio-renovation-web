
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PhoneIcon } from 'lucide-react';
import InterventionMap from '@/components/maps/InterventionMap';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Index = () => {
  console.log("Rendering Index page");
  
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const fallbackImage = "/placeholder.svg";

  // Fonction pour gérer les erreurs de chargement d'image
  const handleImageError = (src: string) => {
    console.error(`Erreur de chargement de l'image: ${src}`);
    setFailedImages(prev => ({ ...prev, [src]: true }));
  };

  const services = [
    {
      src: "/lovable-uploads/8bfe4682-ae69-48cc-8f91-a4bdaf3d9e5e.png",
      alt: "Pose de carrelage",
      title: "Pose de carrelage",
      description: "Carrelage intérieur et extérieur, tous formats et tous types de pose.",
      link: "/services/carrelage"
    },
    {
      src: "/lovable-uploads/3844515b-3e9f-4f4b-8748-cb0661a01d14.png",
      alt: "Pose de mosaïque",
      title: "Pose de mosaïque",
      description: "Mosaïque décorative pour personnaliser vos espaces.",
      link: "/services/mosaique"
    },
    {
      src: "/lovable-uploads/5c59aae7-1cbc-4919-96be-8466e388c35b.png",
      alt: "Pose de pierre naturelle et marbre",
      title: "Pierre naturelle et marbre",
      description: "Pose de pierre naturelle et marbre pour un rendu élégant et authentique.",
      link: "/services/pierre-marbre"
    },
    {
      src: "/lovable-uploads/bda2aeec-32ad-4860-a658-0f0015ceb618.png",
      alt: "Création de douche à l'italienne",
      title: "Douche à l'italienne",
      description: "Conception et réalisation de douches à l'italienne sur mesure.",
      link: "/services/douche-italienne"
    },
    {
      src: "/lovable-uploads/0222cdbc-73ea-4cf7-83fb-af4d24eaf2a3.png",
      alt: "Rénovation de salle de bain",
      title: "Rénovation de salle de bain",
      description: "Rénovation complète de salle de bain, de la conception à la réalisation.",
      link: "/services/renovation-salle-de-bain"
    }
  ];
  
  // Image héro avec fallback
  const heroImagePath = "/lovable-uploads/f994964c-4c18-449c-8949-469454262849.png";
  const heroImageSrc = failedImages[heroImagePath] ? fallbackImage : heroImagePath;

  return (
    <div className="relative min-h-screen">
      {/* Hero Section avec image de fond spécifique */}
      <div 
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/587e0239-3060-4eb1-a34c-eec8b8f49042.png')", 
          backgroundColor: "#1E2A3A" // Couleur de secours si l'image ne charge pas
        }}
      >
        {/* Overlay foncé pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Contenu principal */}
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              Carrelage & rénovation<br />
              clé en main
            </h1>
            <p className="text-xl mb-8">
              Dans l'Ouest Lyonnais et l'Ain, nous transformons vos 
              espaces avec expertise et passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-fazio-red hover:bg-fazio-light-red">
                <Link to="/contact">
                  Demander un devis gratuit
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <a href="tel:+33123456789" className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" />
                  Nous appeler
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-8 text-center">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <AspectRatio ratio={16/9}>
                  <img
                    src={failedImages[service.src] ? fallbackImage : service.src}
                    alt={service.alt}
                    className="w-full h-full object-cover"
                    onLoad={() => console.log(`Service image ${index} loaded successfully`)}
                    onError={() => handleImageError(service.src)}
                  />
                </AspectRatio>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                  <Button asChild variant="link" className="mt-2">
                    <Link to={service.link}>En savoir plus</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Intervention Zone Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-8 text-center">
            Notre zone d'intervention
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Nous intervenons principalement dans l'Ouest Lyonnais et l'Ain pour tous vos projets de carrelage.
          </p>
          <InterventionMap />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fazio-red text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à donner vie à votre projet ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <Button asChild size="lg" className="bg-white text-fazio-red hover:bg-fazio-cream">
            <Link to="/contact">
              Demander un devis gratuit
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
