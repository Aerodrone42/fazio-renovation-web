
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
      
      // Copie du fichier CNAME
      const cnamePath = path.join(__dirname, 'CNAME');
      if (fs.existsSync(cnamePath)) {
        fs.copyFileSync(cnamePath, path.join(outDir, 'CNAME'));
      }
    } catch (err) {
      console.error('Erreur lors de la création des fichiers:', err);
    }
  }

  return {
    base: '/',
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
