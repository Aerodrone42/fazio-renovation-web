import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  { name: "Coordination tous corps d'état", href: '/services/coordination' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Check if current path is a service page
  const isServicePage = location.pathname.startsWith('/services/');
  const currentServicePath = isServicePage ? location.pathname : '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine background and text colors based on page and scroll state
  const navbarBg = isScrolled || !isHomePage
    ? "bg-white/95 backdrop-blur-sm shadow-md"
    : "bg-transparent";
  
  const textColor = isScrolled || !isHomePage
    ? "text-foreground"
    : "text-white";

  const textHoverColor = isScrolled || !isHomePage
    ? "hover:text-fazio-red"
    : "hover:text-fazio-cream";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        navbarBg,
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/46061452-2c41-486c-947a-2a029a3ffa18.png" 
            alt="Logo FAZIO Lorenzo" 
            className="h-12 w-auto"
          />
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={cn(
              "transition-colors",
              textColor,
              textHoverColor,
              location.pathname === '/' && "font-medium text-fazio-red"
            )}
          >
            Accueil
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent hover:bg-transparent",
                  textColor,
                  textHoverColor,
                  isServicePage && "font-medium text-fazio-red"
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
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-fazio-cream hover:text-fazio-red focus:bg-accent focus:text-accent-foreground",
                              service.href === currentServicePath && "bg-fazio-cream text-fazio-red font-medium"
                            )}
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
              textColor,
              textHoverColor,
              location.pathname === '/about' && "font-medium text-fazio-red"
            )}
          >
            À propos
          </Link>

          {/* Removed the separate "Contact" link and kept only the "Demander un devis" button that links to the contact page */}
          <Button asChild variant="default" className="bg-fazio-red hover:bg-fazio-light-red">
            <Link to="/contact" className={cn(
              "whitespace-nowrap",
              location.pathname === '/contact' && "font-medium"
            )}>
              Demander un devis
            </Link>
          </Button>
        </nav>

        {/* Bouton menu mobile */}
        <button
          type="button"
          className={cn(
            "md:hidden",
            textColor
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
              className={cn(
                "py-2 text-foreground hover:text-fazio-red transition-colors",
                location.pathname === '/' && "font-medium text-fazio-red"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            
            <div className="py-2">
              <p className={cn(
                "font-medium mb-2",
                isServicePage && "text-fazio-red"
              )}>
                Nos services :
              </p>
              <div className="pl-4 flex flex-col space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className={cn(
                      "text-foreground hover:text-fazio-red transition-colors",
                      service.href === currentServicePath && "font-medium text-fazio-red"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className={cn(
                "py-2 text-foreground hover:text-fazio-red transition-colors",
                location.pathname === '/about' && "font-medium text-fazio-red"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>

            {/* Removed the separate "Contact" link in mobile menu as well */}
            <Button asChild variant="default" className={cn(
              "bg-fazio-red hover:bg-fazio-light-red w-full",
              location.pathname === '/contact' && "font-bold"
            )}>
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
