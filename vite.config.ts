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
    // Créer un fichier gitkeep pour s'assurer que le dossier est inclus dans git
    fs.writeFileSync('docs/assets/.gitkeep', '');
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
          entryFileNames: 'assets/[name].js', // Format du nom pour les fichiers d'entrée
          chunkFileNames: 'assets/[name].[hash].js', // Format pour les chunks
          assetFileNames: 'assets/[name].[hash].[ext]', // Format pour les autres assets
        },
      },
    },
  };
});
