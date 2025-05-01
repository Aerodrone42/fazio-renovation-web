
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

export default defineConfig(({ mode }) => {
  // Gestion des fichiers nécessaires pour GitHub Pages
  if (mode === 'production') {
    const outDir = 'dist';
    try {
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }
      
      // Création du fichier .nojekyll
      fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
      console.log("Fichier .nojekyll créé avec succès");
      
      // Copie du fichier CNAME
      const cnamePath = path.join(__dirname, 'CNAME');
      if (fs.existsSync(cnamePath)) {
        fs.copyFileSync(cnamePath, path.join(outDir, 'CNAME'));
        console.log("Fichier CNAME copié avec succès");
      } else {
        console.warn("Fichier CNAME non trouvé à la racine du projet");
      }
      
      // Copie explicite du fichier 404.html
      const notFoundPath = path.join(__dirname, 'public', '404.html');
      if (fs.existsSync(notFoundPath)) {
        fs.copyFileSync(notFoundPath, path.join(outDir, '404.html'));
        console.log("Fichier 404.html copié avec succès");
      } else {
        console.warn("Fichier 404.html non trouvé dans public/");
      }
    } catch (err) {
      console.error('Erreur lors de la création des fichiers:', err);
    }
  }

  return {
    base: '/', // Base URL pour tous les assets
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    }
  };
});
