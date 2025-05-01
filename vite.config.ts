
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

export default defineConfig(({ mode }) => {
  // Créer le dossier docs/assets avant même la construction
  if (!fs.existsSync('docs')) {
    fs.mkdirSync('docs', { recursive: true });
  }
  if (!fs.existsSync('docs/assets')) {
    fs.mkdirSync('docs/assets', { recursive: true });
  }

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
      emptyOutDir: false, // Ne pas vider le dossier docs pour conserver le dossier assets
      assetsDir: 'assets', // Garantir que les assets sont dans le dossier assets
      manifest: true, // Générer un fichier manifeste
      rollupOptions: {
        output: {
          entryFileNames: 'assets/index.js', // Nom de fichier simple pour l'entrée principale
          chunkFileNames: 'assets/[name].[hash].js', // Forcer les chunks dans assets/
          assetFileNames: 'assets/[name].[hash].[ext]', // Forcer les autres fichiers dans assets/
        },
      },
    },
  };
});
