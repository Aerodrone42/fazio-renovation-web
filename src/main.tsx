
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Récupération du chemin stocké pour le routage SPA sur GitHub Pages
const path = localStorage.getItem('spa_path');
if (path) {
  localStorage.removeItem('spa_path');
  window.history.replaceState(null, '', path);
}

createRoot(document.getElementById("root")!).render(<App />);
