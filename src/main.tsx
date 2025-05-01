
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Gestion de redirection SPA simplifiée
const redirectPath = localStorage.getItem('spa_path');
if (redirectPath) {
  console.log("Tentative de redirection vers:", redirectPath);
  localStorage.removeItem('spa_path');
  
  try {
    // Utilisation de replaceState pour éviter des problèmes d'historique
    window.history.replaceState(null, '', redirectPath);
    console.log("Redirection effectuée avec succès vers:", redirectPath);
  } catch (error) {
    console.error("Erreur lors de la redirection:", error);
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
