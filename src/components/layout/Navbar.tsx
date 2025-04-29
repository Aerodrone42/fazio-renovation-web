
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { MenuIcon, XIcon } from 'lucide-react';

const services = [
  { name: 'Pose de carrelage', href: '/services/carrelage' },
  { name: 'Pose de mosaïque', href: '/services/mosaique' },
  { name: 'Pose de pierre naturelle & marbre', href: '/services/pierre-marbre' },
  { name: "Création de douche à l'italienne", href: '/services/douche-italienne' },
  { name: 'Rénovation complète de salle de bain', href: '/services/renovation-salle-de-bain' },
  { name: 'Travaux de plomberie', href: '/services/plomberie' },
  { name: "Coordination tous corps d'état", href: '/services/coordination' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className={cn(
            "text-xl font-serif font-bold",
            isScrolled ? "text-fazio-red" : "text-white"
          )}>
            SARL FAZIO Lorenzo
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={cn(
              "transition-colors",
              isScrolled ? "text-foreground hover:text-fazio-red" : "text-white hover:text-fazio-cream"
            )}
          >
            Accueil
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent hover:bg-transparent",
                  isScrolled ? "hover:text-fazio-red" : "text-white hover:text-fazio-cream"
                )}>
                  Nos services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-1 md:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-fazio-cream hover:text-fazio-red focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.name}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/about"
            className={cn(
              "transition-colors",
              isScrolled ? "text-foreground hover:text-fazio-red" : "text-white hover:text-fazio-cream"
            )}
          >
            À propos
          </Link>

          <Link
            to="/contact"
            className={cn(
              "transition-colors",
              isScrolled ? "text-foreground hover:text-fazio-red" : "text-white hover:text-fazio-cream"
            )}
          >
            Contact
          </Link>

          <Button asChild variant="default" className="bg-fazio-red hover:bg-fazio-light-red">
            <Link to="/contact" className="whitespace-nowrap">
              Demander un devis
            </Link>
          </Button>
        </nav>

        {/* Bouton menu mobile */}
        <button
          type="button"
          className={cn(
            "md:hidden",
            isScrolled ? "text-foreground" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-3">
          <div className="container flex flex-col space-y-3">
            <Link
              to="/"
              className="py-2 text-foreground hover:text-fazio-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            
            <div className="py-2">
              <p className="font-medium mb-2">Nos services :</p>
              <div className="pl-4 flex flex-col space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="text-foreground hover:text-fazio-red transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className="py-2 text-foreground hover:text-fazio-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>

            <Link
              to="/contact"
              className="py-2 text-foreground hover:text-fazio-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <Button asChild variant="default" className="bg-fazio-red hover:bg-fazio-light-red w-full">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Demander un devis
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
