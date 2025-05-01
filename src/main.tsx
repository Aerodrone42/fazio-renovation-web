
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    createRoot(rootElement).render(<App />);
    console.log("Application React montée avec succès");
  } catch (error) {
    console.error("Erreur lors du montage de l'application React:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h2>Une erreur s'est produite lors du chargement de l'application</h2>
        <p>Veuillez rafraîchir la page ou réessayer ultérieurement.</p>
      </div>
    `;
  }
} else {
  console.error("Élément root introuvable dans le DOM");
}
