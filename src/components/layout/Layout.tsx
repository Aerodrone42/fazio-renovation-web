
import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from '../common/CookieBanner';
import { ScrollToTop } from './ScrollToTop';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
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
      <main id="main-content" className="flex-1 animate-fade-in">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};
