
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Vérifier que l'élément racine existe avant de monter l'application
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
