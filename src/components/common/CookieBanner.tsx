
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700 max-w-3xl">
          En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies pour vous proposer une meilleure expérience utilisateur.{' '}
          <Link to="/politique-confidentialite" className="text-fazio-red hover:underline">
            En savoir plus
          </Link>
        </div>
        <Button
          variant="default"
          className="bg-fazio-red hover:bg-fazio-light-red whitespace-nowrap"
          onClick={acceptCookies}
        >
          Accepter
        </Button>
      </div>
    </div>
  );
};
