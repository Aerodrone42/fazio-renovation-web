
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// S'assurer que le DOM est complètement chargé avant de monter l'application React
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM chargé, initialisation de l\'application...');
  
  // Gestion des redirections pour le support SPA sur GitHub Pages
  const redirectPath = sessionStorage.redirect;
  if (redirectPath && redirectPath !== window.location.href) {
    sessionStorage.removeItem('redirect');
    
    // Extraire le pathname de l'URL complète
    try {
      const url = new URL(redirectPath);
      const pathname = url.pathname;
      
      if (pathname && pathname !== '/') {
        console.log('Redirection vers:', pathname);
        window.history.replaceState(null, '', pathname);
      }
    } catch (e) {
      console.error('Erreur lors de la redirection:', e);
    }
  }
  
  // Montage de l'application React
  const rootElement = document.getElementById("root");
  if (rootElement) {
    try {
      createRoot(rootElement).render(<App />);
      console.log("Application React montée avec succès");
    } catch (error) {
      console.error("Erreur lors du montage de l'application React:", error);
      rootElement.innerHTML = `
        <div style="padding: 20px; text-align: center;">
          <h2>Une erreur s'est produite lors du chargement de l'application</h2>
          <p>Veuillez rafraîchir la page ou réessayer ultérieurement.</p>
        </div>
      `;
    }
  } else {
    console.error("Élément root introuvable dans le DOM");
  }
});
