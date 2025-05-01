
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Check that the root element exists before mounting the application
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
});
