
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    // Get correct base URL without trailing slash for consistency
    const baseUrl = import.meta.env.BASE_URL || '/';
    console.log("Base URL for assets:", baseUrl);
    
    // Fix image paths - improved path handling logic
    document.querySelectorAll('img').forEach(img => {
      const src = img.getAttribute('src');
      if (src) {
        // Handle lovable-uploads specially
        if (src.includes('lovable-uploads') && !src.startsWith('http')) {
          // For paths like "/lovable-uploads/..." or "lovable-uploads/..."
          const normalizedSrc = src.startsWith('/') ? src.substring(1) : src;
          img.setAttribute('src', `${normalizedSrc}`);
          console.log("Fixed image path:", normalizedSrc);
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
