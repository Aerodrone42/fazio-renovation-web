
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Log pour débogage
    console.log("Current location:", window.location.href);

    // Si l'URL contient un potentiel chemin direct (sans hash)
    // Rediriger vers la version avec hash pour SPA
    if (location.pathname !== '/' && !location.pathname.includes('404')) {
      const cleanPath = location.pathname.replace(/^\/+/, '');
      if (cleanPath) {
        console.log(`Redirecting from direct path ${location.pathname} to SPA route #/${cleanPath}`);
        navigate(`/#/${cleanPath}`);
      }
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Page non trouvée | SARL FAZIO Lorenzo</title>
        <meta name="description" content="La page que vous cherchez n'existe pas." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-6 text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oups ! Cette page n'existe pas</p>
        <Button asChild className="bg-blue-500 hover:bg-blue-700 text-white font-bold">
          <Link to="/">
            Retour à l'accueil
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
