
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Gestion de redirection SPA pour GitHub Pages
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM chargé, initialisation de l\'application...');
  
  // Récupère le chemin stocké dans sessionStorage
  const redirectPath = sessionStorage.getItem('redirect_path');
  console.log('Chemin récupéré depuis sessionStorage:', redirectPath);
  
  if (redirectPath) {
    // Supprime le chemin stocké pour éviter des redirections en boucle
    sessionStorage.removeItem('redirect_path');
    
    try {
      // Utilise pushState pour définir l'URL correcte sans recharger la page
      window.history.pushState(null, '', redirectPath);
      console.log('Redirection effectuée avec succès vers:', redirectPath);
    } catch (error) {
      console.error('Erreur lors de la redirection:', error);
    }
  } else {
    console.log('Aucune redirection nécessaire');
  }
  
  // Montage de l'application React avec gestion d'erreur
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Élément root introuvable dans le DOM");
  } else {
    console.log("Montage de l'application React...");
    try {
      createRoot(rootElement).render(<App />);
      console.log("Application React montée avec succès");
    } catch (error) {
      console.error("Erreur lors du montage de l'application React:", error);
      // Affichage d'un message d'erreur visible pour l'utilisateur
      rootElement.innerHTML = `
        <div style="padding: 20px; text-align: center;">
          <h2>Une erreur s'est produite lors du chargement de l'application</h2>
          <p>Veuillez rafraîchir la page ou réessayer ultérieurement.</p>
        </div>
      `;
    }
  }
});
