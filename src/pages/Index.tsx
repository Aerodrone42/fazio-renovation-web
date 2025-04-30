import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import InterventionMap from '@/components/maps/InterventionMap';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Index = () => {
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
                className="rounded-lg shadow-lg"
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
            {/* Carrelage */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src="/lovable-uploads/0999599b-9349-4441-a449-6d59f5098978.png"
                  alt="Pose de carrelage"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">Pose de carrelage</h3>
                <p className="text-sm text-gray-600">Carrelage intérieur et extérieur, tous formats et tous types de pose.</p>
                <Button asChild variant="link" className="mt-2">
                  <Link to="/services/carrelage">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Mosaïque */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src="/lovable-uploads/4954140c-c991-4456-a506-a299159f1555.png"
                  alt="Pose de mosaïque"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">Pose de mosaïque</h3>
                <p className="text-sm text-gray-600">Mosaïque décorative pour personnaliser vos espaces.</p>
                <Button asChild variant="link" className="mt-2">
                  <Link to="/services/mosaique">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pierre naturelle et marbre */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src="/lovable-uploads/96199561-9921-4591-a943-c90192124c59.png"
                  alt="Pose de pierre naturelle et marbre"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">Pierre naturelle et marbre</h3>
                <p className="text-sm text-gray-600">Pose de pierre naturelle et marbre pour un rendu élégant et authentique.</p>
                <Button asChild variant="link" className="mt-2">
                  <Link to="/services/pierre-marbre">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Douche à l'italienne */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src="/lovable-uploads/5bd69944-5989-491f-a991-59949616654b.png"
                  alt="Création de douche à l'italienne"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">Douche à l'italienne</h3>
                <p className="text-sm text-gray-600">Conception et réalisation de douches à l'italienne sur mesure.</p>
                <Button asChild variant="link" className="mt-2">
                  <Link to="/services/douche-italienne">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Rénovation de salle de bain */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src="/lovable-uploads/0222cdbc-73ea-4cf7-83fb-af4d24eaf2a3.png"
                  alt="Rénovation de salle de bain"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">Rénovation de salle de bain</h3>
                <p className="text-sm text-gray-600">Rénovation complète de salle de bain, de la conception à la réalisation.</p>
                <Button asChild variant="link" className="mt-2">
                  <Link to="/services/renovation-salle-de-bain">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Plomberie */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src="/lovable-uploads/4532987a-4591-4533-a19c-9a1a294a0a21.png"
                  alt="Travaux de plomberie"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">Plomberie</h3>
                <p className="text-sm text-gray-600">Travaux de plomberie générale, installation et remplacement de sanitaires.</p>
                <Button asChild variant="link" className="mt-2">
                  <Link to="/services/plomberie">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
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
