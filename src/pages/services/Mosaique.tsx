import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import ServicePageHeader from '@/components/services/ServicePageHeader';

const Mosaique = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Pose de Carreaux Ciment | Expert artisan dans l'Ain et la Côte d'Azur | SARL FAZIO Lorenzo</title>
        <meta 
          name="description" 
          content="Pose de carreaux ciment décoratifs par SARL FAZIO Lorenzo. Sols, murs et crédences de cuisine. Expertise artisanale dans l'Ain, l'Ouest Lyonnais et la Côte d'Azur." 
        />
        <meta 
          name="keywords" 
          content="pose carreaux ciment, carreaux ciment décoratifs, motifs géométriques, sols carreaux ciment, murs carreaux ciment, crédence carreaux ciment, Ain, Côte d'Azur" 
        />
        <link rel="canonical" href="https://www.carrelage-fazio.fr/services/mosaique" />
      </Helmet>
      
      {/* En-tête avec image */}
      <ServicePageHeader 
        title="Pose de carreaux ciment"
        description="Les carreaux ciment apportent caractère et authenticité à vos espaces. Découvrez notre expertise pour sublimer votre intérieur."
        imagePath="/lovable-uploads/1f93f581-6aee-4ef0-9e21-4cfcc2ff55f0.png"
      />
      
      {/* Description du service */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-fazio-dark-green mb-6">Une touche d'authenticité avec les carreaux ciment</h2>
              <p className="text-gray-700 mb-4">
                La pose de carreaux ciment est un art traditionnel qui demande précision et savoir-faire. Chez FAZIO Lorenzo, nous maîtrisons les techniques spécifiques à ce revêtement pour des finitions impeccables.
              </p>
              <p className="text-gray-700 mb-4">
                Que ce soit pour un sol de salon, un mur décoratif ou une crédence de cuisine, les carreaux ciment apportent une touche d'authenticité et de caractère à votre intérieur.
              </p>
              <p className="text-gray-700 mb-6">
                Nous travaillons avec différents modèles de carreaux ciment : motifs géométriques, floraux, colorés ou sobres, et nous vous accompagnons dans le choix des designs qui correspondent à votre style.
              </p>
              <Button asChild className="bg-fazio-red hover:bg-fazio-light-red">
                <Link to="/contact">
                  Demander un devis gratuit
                </Link>
              </Button>
            </div>
            <Card className="overflow-hidden shadow-xl h-full">
              <AspectRatio ratio={4/5} className="bg-muted">
                <img 
                  src="/lovable-uploads/1f93f581-6aee-4ef0-9e21-4cfcc2ff55f0.png" 
                  alt="Pose de carreaux ciment dans un couloir - Carrelage à motifs géométriques" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </Card>
          </div>
        </div>
      </section>

      {/* Nos prestations de carreaux ciment */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-12 text-center">Nos prestations de carreaux ciment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/ade1f5bb-0fc9-4dff-b9a4-a06121bfae54.png" 
                  alt="Carreaux ciment pour sol" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Carreaux ciment pour sol</h3>
                <p className="text-gray-700">
                  Embellissez votre sol avec des carreaux ciment de qualité résistants et durables pour une ambiance authentique.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/12444f2a-8cb8-4ed8-8e57-a2073415add5.png" 
                  alt="Carreaux ciment pour murs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Carreaux ciment pour murs</h3>
                <p className="text-gray-700">
                  Créez un espace unique avec des carreaux ciment élégants qui transformeront vos murs et apporteront du caractère.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64">
                <img 
                  src="/lovable-uploads/cdfc9eb7-b9b7-4c7f-b8a5-143288a35b85.png" 
                  alt="Décoration en carreaux ciment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-fazio-dark-green mb-2">Carreaux ciment décoratifs</h3>
                <p className="text-gray-700">
                  Apportez une touche artistique à votre intérieur avec des compositions en carreaux ciment personnalisés aux motifs variés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fazio-red text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à embellir votre espace avec des carreaux ciment ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet de carreaux ciment et obtenir un devis personnalisé.
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

export default Mosaique;
