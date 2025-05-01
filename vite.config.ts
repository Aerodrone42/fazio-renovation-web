
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

export default defineConfig(({ mode }) => {
  // Créer les dossiers nécessaires
  if (!fs.existsSync('docs')) {
    fs.mkdirSync('docs', { recursive: true });
  }
  if (!fs.existsSync('docs/assets')) {
    fs.mkdirSync('docs/assets', { recursive: true });
  }
  
  // Créer un index.js minimal directement
  const minimalIndexJs = `
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '/src/App';

// Fonction d'initialisation
function init() {
  try {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      console.error('Element root non trouvé');
      return;
    }
    createRoot(rootElement).render(React.createElement(App));
    console.log('Application chargée avec succès');
  } catch (e) {
    console.error('Erreur de chargement:', e);
    document.getElementById('root').innerHTML = '<div style="padding:20px;"><h1>Erreur de chargement</h1><p>Impossible de charger l\\'application.</p></div>';
  }
}

// Exécuter l'initialisation
init();
`;
  fs.writeFileSync('docs/assets/index.js', minimalIndexJs);
  
  return {
    base: './', // Utiliser des chemins relatifs au lieu de chemins absolus
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 8080,
      host: "::"
    },
    build: {
      outDir: 'docs', // Construire dans le dossier docs
      emptyOutDir: false, // Ne pas vider le dossier docs
      assetsDir: 'assets',
      manifest: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
        output: {
          entryFileNames: 'assets/index.js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
  };
});
