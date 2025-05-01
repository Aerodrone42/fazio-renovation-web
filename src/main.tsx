
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Gestion améliorée de la redirection SPA pour GitHub Pages
const redirectPath = localStorage.getItem('spa_path');
if (redirectPath) {
  localStorage.removeItem('spa_path');
  // Utilisation de pushState au lieu de replaceState pour maintenir l'historique
  window.history.pushState(null, '', redirectPath);
  console.log("Redirection depuis 404.html vers:", redirectPath);
}

// Utilisation d'une méthode de montage plus fiable
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Élément root introuvable dans le DOM");
} else {
  createRoot(rootElement).render(<App />);
  console.log("Application React montée avec succès");
}
