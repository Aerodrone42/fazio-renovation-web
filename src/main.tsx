
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    // Obtenir l'URL de base correcte
    const baseUrl = import.meta.env.BASE_URL || '/';
    console.log("URL de base pour les assets:", baseUrl);
    
    // Corriger les chemins d'images - logique améliorée
    document.querySelectorAll('img').forEach(img => {
      const src = img.getAttribute('src');
      if (src) {
        // Traiter spécialement les lovable-uploads
        if (src.includes('lovable-uploads')) {
          // Pour les chemins comme "/lovable-uploads/..." ou "lovable-uploads/..."
          const normalizedSrc = src.startsWith('/') ? src.substring(1) : src;
          img.setAttribute('src', normalizedSrc);
          console.log("Chemin d'image corrigé:", normalizedSrc);
        }
      }
    });
    
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
