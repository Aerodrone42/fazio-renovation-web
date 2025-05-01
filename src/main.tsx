
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Gestion de redirection SPA pour GitHub Pages
document.addEventListener('DOMContentLoaded', () => {
  // Récupère le chemin stocké dans sessionStorage
  const redirectPath = sessionStorage.getItem('redirect_path');
  console.log('Chemin récupéré depuis sessionStorage:', redirectPath);
  
  if (redirectPath) {
    // Supprime le chemin stocké pour éviter des redirections en boucle
    sessionStorage.removeItem('redirect_path');
    
    try {
      // Utilise pushState pour définir l'URL correcte sans recharger la page
      const newPath = '/' + redirectPath; // Ajoute le slash initial
      console.log('Tentative de redirection vers:', newPath);
      window.history.pushState(null, '', newPath);
      console.log('Redirection effectuée avec succès');
    } catch (error) {
      console.error('Erreur lors de la redirection:', error);
    }
  }
  
  // Montage de l'application React
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Élément root introuvable dans le DOM");
  } else {
    createRoot(rootElement).render(<App />);
    console.log("Application React montée avec succès");
  }
});
