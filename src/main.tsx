
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    // Configure base URL for assets
    const baseUrl = import.meta.env.BASE_URL || '/';
    console.log("Base URL for assets:", baseUrl);
    
    // Fix image paths if needed
    if (baseUrl !== '/') {
      document.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src');
        if (src && src.startsWith('/lovable-uploads')) {
          img.setAttribute('src', `${baseUrl}${src.substring(1)}`);
        } else if (src && !src.startsWith('http') && !src.startsWith(baseUrl) && !src.startsWith('./') && !src.startsWith('../')) {
          img.setAttribute('src', `${baseUrl}${src}`);
        }
      });
    }
    
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
