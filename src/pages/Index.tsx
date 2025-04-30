
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import InterventionMap from '@/components/maps/InterventionMap';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Index = () => {
  console.log("Rendering Index page");
  
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
  
  // Afficher les chemins des images dans la console pour vérification
  console.log("Images paths:", services.map(s => s.src));
  console.log("Hero image path:", "/lovable-uploads/f994964c-4c18-449c-8949-469454262849.png");

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-fazio-cream py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-5xl font-bold text-fazio-dark-green mb-6 font-serif">
                Votre expert carreleur à Lyon et dans l'Ain
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Spécialistes de la pose de carrelage, faïence, mosaïque, pierre naturelle et chape liquide, nous intervenons sur tous types de projets, en neuf comme en rénovation.
              </p>
              <Button asChild size="lg" className="bg-fazio-red hover:bg-fazio-light-red">
                <Link to="/contact">
                  Demander un devis gratuit
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/lovable-uploads/f994964c-4c18-449c-8949-469454262849.png"
                alt="Pose de carrelage grand format dans une salle de bain moderne"
                className="rounded-lg shadow-lg w-full h-auto"
                onLoad={() => console.log("Hero image loaded successfully")}
                onError={() => console.error("Error loading hero image")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-8 text-center">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <AspectRatio ratio={16/9}>
                  <img
                    src={service.src}
                    alt={service.alt}
                    className="w-full h-full object-cover"
                    onLoad={() => console.log(`Service image ${index} loaded successfully`)}
                    onError={() => console.error(`Error loading service image ${index}: ${service.src}`)}
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
