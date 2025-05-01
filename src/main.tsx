
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Gestion de redirection SPA pour GitHub Pages
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM chargé, initialisation de l\'application...');
  
  // Script pour gérer la redirection SPA sur GitHub Pages
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location));
  
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
