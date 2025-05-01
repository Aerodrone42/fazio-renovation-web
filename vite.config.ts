
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
            // Sécuriser contre les valeurs undefined
            if (assetInfo && assetInfo.name) {
              const info = assetInfo.name.split('.');
              const extType = info[info.length - 1];
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                return `assets/images/[name][extname]`;
              }
            }
            return `assets/[name][extname]`;
          },
        },
      },
      // Activer la génération des sources maps pour le débogage
      sourcemap: true,
      // Ajouter un hook après la construction
      // Cette fonction sera exécutée après la fin de la construction
      afterBuild: () => {
        console.log("Vérification des fichiers de construction...");
        
        // Vérifier si index.js a été généré
        const indexJsPath = path.join(__dirname, 'docs', 'assets', 'index.js');
        if (!fs.existsSync(indexJsPath)) {
          console.error("ERREUR: index.js n'a pas été généré dans docs/assets!");
          
          // Tenter de le copier depuis dist/assets s'il existe
          const distIndexJsPath = path.join(__dirname, 'dist', 'assets', 'index.js');
          if (fs.existsSync(distIndexJsPath)) {
            console.log("Copie de index.js depuis dist/assets vers docs/assets...");
            fs.copyFileSync(distIndexJsPath, indexJsPath);
          } else {
            console.error("ERREUR: index.js introuvable dans dist/assets également!");
          }
        } else {
          console.log("✓ index.js correctement généré dans docs/assets");
        }
      }
    },
  };
});
