
import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from '../common/CookieBanner';
import { ScrollToTop } from './ScrollToTop';
import { useLocation } from 'react-router-dom';
import ServicePageHeader from '@/components/services/ServicePageHeader';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';
  
  // Add animation reset when route changes
  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
    
    // Add animation class to main content
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.classList.remove('animate-fade-in');
      void mainContent.offsetWidth; // Trigger reflow to restart animation
      mainContent.classList.add('animate-fade-in');
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      {isHomePage && (
        <ServicePageHeader 
          title="SARL FAZIO Lorenzo"
          description="Votre expert en carrelage et rénovation dans l'Ain et la Côte d'Azur"
          imagePath="/lovable-uploads/345deac2-67fc-4bb0-9da4-3f6ab1e0363c.png"
          priority={true}
        />
      )}
      <main id="main-content" className={`flex-1 animate-fade-in flex flex-col ${isHomePage ? '' : 'pt-16'}`}>
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};
