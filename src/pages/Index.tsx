
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PhoneIcon, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import InterventionMap from '@/components/maps/InterventionMap';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Index = () => {
  console.log("Rendering Index page");
  
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const fallbackImage = "/placeholder.svg";
  const heroImagePath = "/lovable-uploads/b990c88c-c430-46de-a2ef-4ac0717a59fc.png";

  // Références pour l'animation au défilement
  const servicesRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const presentationRef = useRef<HTMLDivElement>(null);
  
  // Observer pour les animations au défilement
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const servicesElement = servicesRef.current;
    const mapElement = mapRef.current;
    const ctaElement = ctaRef.current;
    const presentationElement = presentationRef.current;
    
    if (servicesElement) observer.observe(servicesElement);
    if (mapElement) observer.observe(mapElement);
    if (ctaElement) observer.observe(ctaElement);
    if (presentationElement) observer.observe(presentationElement);
    
    return () => {
      if (servicesElement) observer.unobserve(servicesElement);
      if (mapElement) observer.unobserve(mapElement);
      if (ctaElement) observer.unobserve(ctaElement);
      if (presentationElement) observer.unobserve(presentationElement);
    };
  }, []);

  // Précharger l'image d'arrière-plan
  useEffect(() => {
    const img = new Image();
    img.src = heroImagePath;
    img.onload = () => {
      console.log("Background image loaded successfully");
      setBackgroundLoaded(true);
    };
    img.onerror = () => {
      console.error("Failed to load background image");
      setFailedImages(prev => ({ ...prev, [heroImagePath]: true }));
    };
  }, [heroImagePath]);

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
      alt: "Pierre naturelle et marbre",
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

  return (
    <div className="relative min-h-screen">
      <Helmet>
        <title>SARL FAZIO Lorenzo | Carrelage et rénovation clé en main dans l'Ain et la Côte d'Azur</title>
        <meta 
          name="description" 
          content="Entreprise de carrelage et rénovation dans l'Ain, l'Ouest Lyonnais, les Alpes-Maritimes et le Var. Pose de carrelage, douche à l'italienne, rénovation complète de salle de bain." 
        />
        <meta 
          name="keywords" 
          content="carreleur Ain, carreleur Côte d'Azur, pose carrelage, rénovation salle de bain, douche italienne, mosaïque, pierre naturelle, marbre, Dagneux, Nice, Cannes, Toulon" 
        />
        <link rel="canonical" href="https://www.carrelage-fazio.fr/" />
      </Helmet>
      
      {/* Hero Section avec animation de fade-in */}
      <div 
        className="relative min-h-screen bg-cover bg-center flex items-center transition-opacity duration-1000"
        style={{
          backgroundImage: backgroundLoaded ? `url('${heroImagePath}')` : 'none',
          backgroundColor: "#1E2A3A", // Couleur de secours si l'image ne charge pas
          opacity: backgroundLoaded ? 1 : 0.8,
        }}
      >
        {/* Indicateur de chargement */}
        {!backgroundLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-fazio-dark-green">
            <p className="text-white">Chargement de l'image...</p>
          </div>
        )}
        
        {/* Overlay foncé pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Contenu principal avec animation */}
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              Carrelage & rénovation<br />
              clé en main
            </h1>
            <p className="text-xl mb-8">
              Dans l'Ouest Lyonnais et l'Ain, nous transformons vos 
              espaces avec expertise et passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-fazio-red hover:bg-fazio-light-red transform transition-transform duration-300 hover:scale-105">
                <Link to="/contact">
                  Demander un devis gratuit
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent transform transition-transform duration-300 hover:scale-105">
                <a href="tel:+33123456789" className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" />
                  Nous appeler
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section de présentation SEO avec animation au défilement */}
      <section ref={presentationRef} className="py-16 bg-white animate-on-scroll">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-fazio-dark-green mb-6 text-center">
              SARL FAZIO Lorenzo - L'excellence du carrelage et de la rénovation
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="mb-4">
                <strong>SARL FAZIO Lorenzo</strong> est une <strong>entreprise artisanale spécialisée en pose de carrelage et rénovation</strong> 
                <strong> présente</strong> dans l'<strong>Ain</strong>, l'<strong>Ouest Lyonnais</strong>, les <strong>Alpes-Maritimes</strong> et le <strong>Var</strong>. 
                Depuis plus de 15 ans, notre équipe d'artisans qualifiés met son savoir-faire au service de votre satisfaction pour tous vos projets 
                de revêtement de sol et mur, tant pour les particuliers que pour les professionnels.
              </p>
              <p className="mb-4">
                Notre expertise s'étend sur un large éventail de prestations : <strong>pose de carrelage</strong> intérieur et extérieur, 
                <strong> mosaïque</strong>, <strong>pierre naturelle</strong>, <strong>marbre</strong>, <strong>création de douche à l'italienne</strong> et 
                <strong> rénovation complète de salle de bain</strong>. Nos artisans carreleurs interviennent dans toutes les principales villes de 
                l'<strong>Ain (01)</strong> dont <strong>Bourg-en-Bresse</strong>, <strong>Oyonnax</strong> et <strong>Ambérieu-en-Bugey</strong>, 
                ainsi que dans l'<strong>Ouest Lyonnais</strong> notamment à <strong>Tassin-la-Demi-Lune</strong> et <strong>Écully</strong>.
              </p>
              <p>
                Notre double implantation nous permet également d'apporter notre expertise en carrelage et rénovation dans les départements du 
                <strong> Var (83)</strong> et des <strong>Alpes-Maritimes (06)</strong>, en intervenant dans des villes comme <strong>Nice</strong>, 
                <strong> Cannes</strong>, <strong>Antibes</strong>, <strong>Toulon</strong> et <strong>Fréjus</strong>. Notre engagement pour la qualité, 
                le respect des délais et un service client irréprochable font de SARL FAZIO Lorenzo votre partenaire de confiance pour tous vos projets 
                de carrelage et rénovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section avec animation au défilement */}
      <section ref={servicesRef} className="py-16 bg-gray-50 animate-on-scroll">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-8 text-center">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-lg transition-shadow transform transition-transform duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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

      {/* Intervention Zone Section avec animation */}
      <section ref={mapRef} className="py-16 animate-on-scroll">
        <div className="container">
          <h2 className="text-3xl font-bold text-fazio-dark-green mb-8 text-center">
            Notre zone d'intervention
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Nous intervenons principalement dans l'Ouest Lyonnais et l'Ain pour tous vos projets de carrelage.
            Découvrez également nos services dans les Alpes-Maritimes et le Var.
          </p>
          <div className="transform transition-all duration-700 hover:scale-[1.02]">
            <InterventionMap />
          </div>

          {/* Sections pour les pages locales */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-fazio-dark-green mb-4">Dans l'Ain</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-fazio-light-red" />
                  <Link to="/regions/bourgenbresse" className="hover:text-fazio-red transition-colors">
                    Bourg-en-Bresse et alentours
                  </Link>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-fazio-light-red" />
                  <Link to="/regions/amberieuenbugey" className="hover:text-fazio-red transition-colors">
                    Ambérieu-en-Bugey et alentours
                  </Link>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-fazio-light-red" />
                  <Link to="/regions/miribel" className="hover:text-fazio-red transition-colors">
                    Miribel et alentours
                  </Link>
                </li>
                <li>
                  <Link to="/regions" className="text-sm text-fazio-red hover:underline ml-6 mt-2 inline-block">
                    Voir toutes nos zones d'intervention →
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-fazio-dark-green mb-4">Dans l'Ouest Lyonnais</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-fazio-light-red" />
                  <Link to="/regions/tassinlademilune" className="hover:text-fazio-red transition-colors">
                    Tassin-la-Demi-Lune et alentours
                  </Link>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-fazio-light-red" />
                  <Link to="/regions/ecully" className="hover:text-fazio-red transition-colors">
                    Écully et alentours
                  </Link>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-fazio-light-red" />
                  <Link to="/regions/dardilly" className="hover:text-fazio-red transition-colors">
                    Dardilly et alentours
                  </Link>
                </li>
                <li>
                  <Link to="/regions" className="text-sm text-fazio-red hover:underline ml-6 mt-2 inline-block">
                    Voir toutes nos zones d'intervention →
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-fazio-dark-green mb-4">Dans les Alpes-Maritimes</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-fazio-light-red" />
                  <Link to="/regions/nice" className="hover:text-fazio-red transition-colors">
                    Nice et alentours
                  </Link>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-fazio-light-red" />
                  <Link to="/regions/cannes" className="hover:text-fazio-red transition-colors">
                    Cannes et alentours
                  </Link>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-fazio-light-red" />
                  <Link to="/regions/antibes" className="hover:text-fazio-red transition-colors">
                    Antibes et alentours
                  </Link>
                </li>
                <li>
                  <Link to="/regions" className="text-sm text-fazio-red hover:underline ml-6 mt-2 inline-block">
                    Voir toutes nos zones d'intervention →
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-fazio-dark-green mb-4">Dans le Var</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-fazio-light-red" />
                  <Link to="/regions/toulon" className="hover:text-fazio-red transition-colors">
                    Toulon et alentours
                  </Link>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-fazio-light-red" />
                  <Link to="/regions/frejus" className="hover:text-fazio-red transition-colors">
                    Fréjus et alentours
                  </Link>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-fazio-light-red" />
                  <Link to="/regions/hyeres" className="hover:text-fazio-red transition-colors">
                    Hyères et alentours
                  </Link>
                </li>
                <li>
                  <Link to="/regions" className="text-sm text-fazio-red hover:underline ml-6 mt-2 inline-block">
                    Voir toutes nos zones d'intervention →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section avec animation */}
      <section ref={ctaRef} className="bg-fazio-red text-white py-12 animate-on-scroll">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à donner vie à votre projet ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <Button asChild size="lg" className="bg-white text-fazio-red hover:bg-fazio-cream transform transition-transform duration-300 hover:scale-110">
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
