
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Définition des types pour les images du portfolio
export interface PortfolioImage {
  src: string;
  alt: string;
  description?: string;
  location?: string;
}

export const localPortfolioImages: PortfolioImage[] = [
  {
    src: "/lovable-uploads/06ef1a0f-98e7-4df8-ac26-b8b42b5a0201.png",
    alt: "Salle de bain moderne avec baignoire et carrelage effet bois",
    description: "Rénovation complète de salle de bain",
    location: "Réalisation à Miribel"
  },
  {
    src: "/lovable-uploads/94b05ccc-6ded-4dab-9c18-579db91ec1a8.png",
    alt: "Salon et cuisine ouverte avec carrelage beige",
    description: "Pose de carrelage grand format",
    location: "Appartement à Lyon"
  },
  {
    src: "/lovable-uploads/ed420627-bab9-47bf-81e6-34c770012caf.png",
    alt: "Cuisine moderne avec plan de travail en marbre noir et carrelage bois",
    description: "Aménagement cuisine et espace de vie",
    location: "Maison à Bourg-en-Bresse"
  },
  {
    src: "/lovable-uploads/4b96d95b-9fc6-4af8-a599-a20739101647.png",
    alt: "Piscine à débordement avec carrelage pierre naturelle",
    description: "Construction de piscine haut de gamme",
    location: "Villa dans le Var"
  },
  {
    src: "/lovable-uploads/f70a5561-4a85-4465-a2f6-f9eaf5b7f239.png",
    alt: "Terrasse extérieure avec carrelage beige",
    description: "Aménagement terrasse extérieure",
    location: "Résidence à Meximieux"
  },
  {
    src: "/lovable-uploads/d257e238-9d3b-4c73-ad09-d54768c4358c.png",
    alt: "Panneau mural en bois avec motifs géométriques",
    description: "Décoration murale en bois sur mesure",
    location: "Appartement à Nice"
  }
];

interface LocalPortfolioCarouselProps {
  cityName: string;
}

const LocalPortfolioCarousel: React.FC<LocalPortfolioCarouselProps> = ({ cityName }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">
            Nos réalisations à {cityName} et ses environs
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets de carrelage et rénovation réalisés récemment dans votre région.
            Chaque image témoigne de notre savoir-faire et de notre engagement envers la qualité.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {localPortfolioImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="overflow-hidden rounded-lg shadow-md bg-white">
                    <AspectRatio ratio={3/4} className="bg-gray-100">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                    <div className="p-4">
                      <h3 className="font-semibold text-fazio-dark-green">{image.description}</h3>
                      <p className="text-sm text-gray-600">{image.location}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="relative -left-0 -translate-y-0" />
            <CarouselNext className="relative -right-0 -translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default LocalPortfolioCarousel;
