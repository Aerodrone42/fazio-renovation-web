import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import InterventionMap from '@/components/maps/InterventionMap';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { toast } from 'sonner';
import { PhoneIcon } from 'lucide-react';

const Index = () => {
  console.log("Rendering Index page");
  
  // État pour suivre les images qui n'ont pas pu être chargées
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  
  // Image de secours par défaut
  const fallbackImage = "/placeholder.svg";
  
  // Liste des services avec les chemins d'images
  const services = [
    {
      src: "/lovable-uploads/0999599b-9349-4441-a449-6d59f5098978.png",
      alt: "Pose de carrelage",
      title: "Pose de carrelage",
      description: "Carrelage intérieur et extérieur, tous formats et tous types de pose.",
      link: "/services/carrelage"
    },
    {
      src: "/lovable-uploads/4954140c-c991-4456-a506-a299159f1555.png",
      alt: "Pose de mosaïque",
      title: "Pose de mosaïque",
      description: "Mosaïque décorative pour personnaliser vos espaces.",
      link: "/services/mosaique"
    },
    {
      src: "/lovable-uploads/96199561-9921-4591-a943-c90192124c59.png",
      alt: "Pose de pierre naturelle et marbre",
      title: "Pierre naturelle et marbre",
      description: "Pose de pierre naturelle et marbre pour un rendu élégant et authentique.",
      link: "/services/pierre-marbre"
    },
    {
      src: "/lovable-uploads/5bd69944-5989-491f-a991-59949616654b.png",
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
    },
    {
      src: "/lovable-uploads/4532987a-4591-4533-a19c-9a1a294a0a21.png",
      alt: "Travaux de plomberie",
      title: "Plomberie",
      description: "Travaux de plomberie générale, installation et remplacement de sanitaires.",
      link: "/services/plomberie"
    }
  ];

  // Fonction pour gérer les erreurs de chargement d'image
  const handleImageError = (src: string) => {
    console.error(`Erreur de chargement de l'image: ${src}`);
    setFailedImages(prev => ({ ...prev, [src]: true }));
  };
  
  // Image héro avec fallback
  const heroImagePath = "/lovable-uploads/f994964c-4c18-449c-8949-469454262849.png";
  const heroImageSrc = failedImages[heroImagePath] ? fallbackImage : heroImagePath;

  return (
    <div className="relative min-h-screen">
      {/* Hero Section avec image de fond */}
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

      {/* Nous n'incluons pas les autres sections ici car elles ne sont pas visibles sur l'image de référence */}
      
      {/* Les sections suivantes (Services, Zone d'intervention, CTA) seront accessibles en scrollant */}
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
