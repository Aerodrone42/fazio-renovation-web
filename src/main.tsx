
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Fonction pour initialiser l'application React
const initializeApp = () => {
  try {
    // Vérifier que l'élément root existe
    const rootElement = document.getElementById("root");
    if (rootElement) {
      createRoot(rootElement).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log("React application successfully mounted");
    } else {
      console.error("Root element not found in the DOM");
      // Tentative de créer l'élément root s'il n'existe pas
      const newRoot = document.createElement('div');
      newRoot.id = 'root';
      document.body.appendChild(newRoot);
      console.log("Created new root element, attempting to mount");
      createRoot(newRoot).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    }
  } catch (error) {
    console.error("Failed to initialize React application:", error);
    // Afficher une erreur visible à l'utilisateur
    const errorDiv = document.createElement('div');
    errorDiv.style.padding = '20px';
    errorDiv.style.margin = '20px';
    errorDiv.style.backgroundColor = '#ffeeee';
    errorDiv.style.border = '1px solid #ff0000';
    errorDiv.innerHTML = '<h2>Erreur lors du chargement de l\'application</h2><p>Veuillez rafraîchir la page ou contacter l\'administrateur.</p>';
    document.body.appendChild(errorDiv);
  }
};

// S'assurer que le document est prêt avant de monter React
if (document.readyState === "loading") {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // Si le document est déjà chargé, initialiser directement
  initializeApp();
}

// Ajouter un gestionnaire pour les erreurs non interceptées
window.addEventListener('error', (event) => {
  console.error('Uncaught error:', event.error);
});
