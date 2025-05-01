
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("React application successfully mounted");
  } catch (error) {
    console.error("Error while mounting React application:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h2>An error occurred while loading the application</h2>
        <p>Please refresh the page or try again later.</p>
      </div>
    `;
  }
} else {
  console.error("Root element not found in the DOM");
}
