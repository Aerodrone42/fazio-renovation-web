
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Système de redirection SPA pour GitHub Pages
const path = localStorage.getItem('spa_path');
if (path) {
  localStorage.removeItem('spa_path');
  window.history.replaceState(null, '', path);
}

// Utilisation d'une méthode de montage plus fiable
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Élément root introuvable dans le DOM");
} else {
  createRoot(rootElement).render(<App />);
}
