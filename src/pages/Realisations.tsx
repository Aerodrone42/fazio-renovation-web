
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Types pour notre galerie
type ProjectImage = {
  id: number;
  src: string;
  alt: string;
  location?: string;
  type: string;
  description?: string;
};

const Realisations = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 9;
  
  // Données des projets - réorganisées par type avec descriptions corrigées et nouvelles images
  const projectImages: ProjectImage[] = [
    // INTÉRIEUR
    {
      id: 1,
      src: "/lovable-uploads/5d3243b6-cbe4-4f2a-b3be-3da901e6813c.png",
      alt: "Pose de carrelage intérieur - Espace salon avec sol en carrelage clair",
      location: "Dagneux (01)",
      type: "interieur",
      description: "Rénovation complète avec pose de carrelage grand format"
    },
    {
      id: 2, 
      src: "/lovable-uploads/7b377b42-0b9b-478e-8a0e-0dac3a2b5beb.png", 
      alt: "Carrelage intérieur salon avec grandes baies vitrées", 
      location: "Villefranche-sur-Saône (69)", 
      type: "interieur",
      description: "Espace lumineux avec carrelage clair et vue panoramique"
    },
    {
      id: 3, 
      src: "/lovable-uploads/b7c224de-f6f8-462b-b5a8-19f32c6252dc.png", 
      alt: "Vue séjour avec grandes baies vitrées et carrelage", 
      location: "Lyon Ouest (69)", 
      type: "interieur",
      description: "Séjour avec pose de carrelage grand format et plafond tendu"
    },
    {
      id: 4, 
      src: "/lovable-uploads/7b19e07c-56c5-45b6-a265-60f82f594124.png", 
      alt: "Espace séjour avec carrelage rénové", 
      location: "Bourg-en-Bresse (01)", 
      type: "interieur",
      description: "Rénovation d'un séjour avec nouveau carrelage imitation pierre"
    },
    {
      id: 5, 
      src: "/lovable-uploads/00245de6-d0c9-4d3e-82a2-a698ba5a972e.png", 
      alt: "Escalier avec carrelage clair", 
      location: "Montluel (01)", 
      type: "interieur",
      description: "Escalier avec carrelage assorti au sol du séjour"
    },
    {
      id: 18, 
      src: "/lovable-uploads/997be8cb-5d81-4360-a6c5-0a3e89e21e34.png", 
      alt: "Séjour avec carrelage gris moderne en cours de finition", 
      location: "Meximieux (01)", 
      type: "interieur",
      description: "Séjour contemporain avec carrelage grand format gris"
    },
    
    // PRÉPARATION
    {
      id: 6, 
      src: "/lovable-uploads/e60a9143-3c88-43f6-a154-06352a434418.png", 
      alt: "Rénovation sol avec ancien carrelage et chape", 
      location: "Miribel (01)", 
      type: "preparation",
      description: "Dépose d'ancien carrelage avant pose de nouvelle chape"
    },
    {
      id: 8, 
      src: "/lovable-uploads/9e86a2e7-034b-4072-a42f-0d941c742d6c.png", 
      alt: "Chape liquide avant pose de carrelage", 
      location: "Trévoux (01)", 
      type: "preparation",
      description: "Coulage de chape liquide autolissante pour sol parfaitement plan"
    },
    {
      id: 19, 
      src: "/lovable-uploads/a9dedbe2-d559-4176-b2d2-c55ab9d231f8.png", 
      alt: "Pose de carrelage en cours dans un couloir", 
      location: "Trévoux (01)", 
      type: "preparation",
      description: "Travaux en cours avec pose progressive de carrelage"
    },
    
    // SALLE DE BAIN
    {
      id: 9, 
      src: "/lovable-uploads/192adf6c-67df-4e17-9ed5-dadfcf27e6c4.png", 
      alt: "Salle de bain avec carrelage effet bois et baignoire moderne", 
      location: "Beynost (01)", 
      type: "salleDeBain",
      description: "Salle de bain avec carrelage effet travertin et vasque élégante"
    },
    
    // EXTÉRIEUR
    {
      id: 10, 
      src: "/lovable-uploads/7ec42741-e0d0-45ae-9f50-24c2ed8d66c7.png", 
      alt: "Terrasse extérieure avec carrelage beige", 
      location: "Lyon (69)", 
      type: "exterieur",
      description: "Terrasse avec carrelage extérieur anti-dérapant résistant au gel"
    },
    {
      id: 11, 
      src: "/lovable-uploads/30820870-d453-4c67-a900-ba4f32cfa46c.png", 
      alt: "Ancienne terrasse avec dallage à rénover", 
      location: "Ambérieu-en-Bugey (01)", 
      type: "exterieur",
      description: "Terrasse extérieure avant rénovation avec espace barbecue"
    },
    {
      id: 12, 
      src: "/lovable-uploads/4c4393c3-b291-40e2-bc09-ceb7cde532fb.png", 
      alt: "Terrasse extérieure rénovée", 
      location: "Dagneux (01)", 
      type: "exterieur",
      description: "Terrasse extérieure avec nouveau carrelage aspect pierre naturelle"
    },
    
    // PISCINE
    {
      id: 13, 
      src: "/lovable-uploads/ade1f5bb-0fc9-4dff-b9a4-a06121bfae54.png", 
      alt: "Piscine avec carrelage bleu-vert", 
      location: "Bourg-en-Bresse (01)", 
      type: "piscine",
      description: "Revêtement de piscine en grès cérame aspect pierre naturelle"
    },
    {
      id: 14, 
      src: "/lovable-uploads/db60e51d-8d3a-4140-aced-8ce2b2d86c3a.png", 
      alt: "Construction de piscine avec carrelage", 
      location: "Villefranche-sur-Saône (69)", 
      type: "piscine",
      description: "Construction de piscine avec pose de carrelage spécial piscine"
    },
    {
      id: 15, 
      src: "/lovable-uploads/cdfc9eb7-b9b7-4c7f-b8a5-143288a35b85.png", 
      alt: "Escalier de piscine carrelé", 
      location: "Lyon Ouest (69)", 
      type: "piscine",
      description: "Escalier de piscine avec carrelage antidérapant pour sécurité"
    },
    {
      id: 16, 
      src: "/lovable-uploads/948490c9-85f1-426b-b2e0-702964500e36.png", 
      alt: "Construction de piscine avant carrelage", 
      location: "Montluel (01)", 
      type: "piscine",
      description: "Préparation et étanchéité avant pose de carrelage de piscine"
    },
    
    // CUISINE
    {
      id: 7, 
      src: "/lovable-uploads/c7105d05-b6ca-4f7e-974c-aacb4a70074b.png", 
      alt: "Pose de carrelage imitation béton ciré", 
      location: "Meximieux (01)", 
      type: "cuisine",
      description: "Cuisine moderne avec carrelage aspect béton ciré"
    },
    {
      id: 17, 
      src: "/lovable-uploads/e1cb8c60-48e3-4bcf-a6b1-99fa8a2eceab.png", 
      alt: "Cuisine ouverte moderne avec îlot central et carrelage clair", 
      location: "Miribel (01)", 
      type: "cuisine",
      description: "Cuisine contemporaine avec îlot central et carrelage grand format"
    }
  ];
  
  // Filtrer les projets selon l'onglet actif
  const filteredProjects = activeTab === 'all' 
    ? projectImages 
    : projectImages.filter(project => project.type === activeTab);
  
  // Paginer les projets
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  
  // Changer d'onglet
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(1);
  };
  
  // Projets mis en avant pour le diaporama avec des descriptions corrigées
  const [selectedProjects, setSelectedProjects] = useState<ProjectImage[]>([
    {
      id: 13,
      src: "/lovable-uploads/ade1f5bb-0fc9-4dff-b9a4-a06121bfae54.png", 
      alt: "Piscine avec carrelage bleu-vert", 
      location: "Bourg-en-Bresse (01)", 
      type: "piscine",
      description: "Revêtement de piscine en grès cérame aspect pierre naturelle"
    },
    {
      id: 10, 
      src: "/lovable-uploads/7ec42741-e0d0-45ae-9f50-24c2ed8d66c7.png", 
      alt: "Terrasse extérieure avec carrelage beige", 
      location: "Lyon (69)", 
      type: "exterieur",
      description: "Terrasse avec carrelage extérieur anti-dérapant résistant au gel"
    },
    {
      id: 1,
      src: "/lovable-uploads/5d3243b6-cbe4-4f2a-b3be-3da901e6813c.png",
      alt: "Pose de carrelage intérieur - Espace salon avec sol en carrelage clair",
      location: "Dagneux (01)",
      type: "interieur",
      description: "Rénovation complète avec pose de carrelage grand format"
    }
  ]);

  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-fazio-cream py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-fazio-dark-green mb-4">Nos Réalisations</h1>
            <p className="text-lg text-gray-700">
              Découvrez notre savoir-faire à travers nos chantiers de carrelage réalisés dans l'Ouest Lyonnais et l'Ain.
            </p>
          </div>
        </div>
      </section>

      {/* Projets mis en avant */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-8 text-center">Réalisations en avant</h2>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {selectedProjects.map((project) => (
                <CarouselItem key={project.id}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="p-0">
                        <div className="relative">
                          <div className="aspect-ratio-16/9">
                            <img 
                              src={project.src} 
                              alt={project.alt}
                              className="w-full h-[400px] object-cover rounded-t-lg"
                            />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                            <h3 className="text-xl font-semibold">{project.description}</h3>
                            <p>{project.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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

      {/* Portfolio section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-fazio-dark-green mb-4">Notre Portfolio</h2>
            <p className="text-gray-700">
              Parcourez nos différentes réalisations par type de projet.
            </p>
          </div>

          {/* Filtres de catégories */}
          <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="w-full max-w-4xl mx-auto mb-10">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-3 md:grid-cols-7 gap-2">
                <TabsTrigger value="all">Tout</TabsTrigger>
                <TabsTrigger value="interieur">Intérieur</TabsTrigger>
                <TabsTrigger value="cuisine">Cuisine</TabsTrigger>
                <TabsTrigger value="salleDeBain">Salle de bain</TabsTrigger>
                <TabsTrigger value="exterieur">Extérieur</TabsTrigger>
                <TabsTrigger value="piscine">Piscine</TabsTrigger>
                <TabsTrigger value="preparation">Préparation</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>

          {/* Galerie des projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9 relative h-64">
                  <img 
                    src={project.src} 
                    alt={project.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{project.description}</h3>
                  <p className="text-sm text-gray-600">{project.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink 
                        onClick={() => setCurrentPage(i + 1)}
                        isActive={currentPage === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fazio-red text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre espace ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Vous avez un projet de carrelage en tête ? Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
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

export default Realisations;
