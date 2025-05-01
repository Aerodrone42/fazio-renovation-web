
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    // Get correct base URL
    const baseUrl = import.meta.env.BASE_URL || '/';
    console.log("Base URL for assets:", baseUrl);
    
    // Set a proper way to handle image paths
    window.addEventListener('load', () => {
      // Fix image paths after the DOM is fully loaded
      document.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
          // Special handling for lovable-uploads
          if (src.includes('lovable-uploads')) {
            // For paths like "/lovable-uploads/..." or "lovable-uploads/..."
            const normalizedSrc = src.startsWith('/') ? src.substring(1) : src;
            img.setAttribute('src', normalizedSrc);
            console.log("Image path corrected:", normalizedSrc);
          }
        }
      });
    });
    
    createRoot(rootElement).render(<App />);
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
