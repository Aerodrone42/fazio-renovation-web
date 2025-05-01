
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Fonction pour initialiser l'application React
const initializeApp = () => {
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
  }
};

// S'assurer que le document est prêt avant de monter React
if (document.readyState === "loading") {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // Si le document est déjà chargé, initialiser directement
  initializeApp();
}
