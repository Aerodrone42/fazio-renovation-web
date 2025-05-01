
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
  
  // Créer un index.js minimal directement dans docs/assets
  const minimalIndexJs = `import { createRoot } from 'react-dom/client';
import App from './App.js';
createRoot(document.getElementById('root')).render(App());`;
  fs.writeFileSync('docs/assets/index.js', minimalIndexJs);
  
  return {
    base: './', // Utiliser des chemins relatifs au lieu de chemins absolus (crucial pour GitHub Pages)
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
      emptyOutDir: false, // Ne pas vider le dossier docs pour conserver les fichiers importants
      assetsDir: 'assets', // Garantir que les assets sont dans le dossier assets
      manifest: true, // Générer un fichier manifeste
      rollupOptions: {
        output: {
          // Forcer l'utilisation de noms de fichiers spécifiques pour les fichiers principaux
          entryFileNames: 'assets/index.js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            if (assetInfo && assetInfo.name) {
              const info = assetInfo.name.split('.');
              const extType = info[info.length - 1];
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                return `assets/images/[name][extname]`;
              }
              return `assets/[name][extname]`;
            }
            return `assets/[name][extname]`;
          },
        },
      },
      sourcemap: true,
    },
  };
});
