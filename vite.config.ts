
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: '/', // Chemin de base pour les assets
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
    port: 8080
  },
  build: {
    outDir: 'docs', // Génère les fichiers de build dans le dossier docs
    emptyOutDir: true, // Vide le dossier avant chaque build
    assetsDir: 'assets', // Nom du dossier pour les assets
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: (assetInfo) => {
          // Vérification que assetInfo.name existe
          if (!assetInfo.name) {
            return 'assets/[name]-[hash][extname]';
          }
          
          // Utilisation sécurisée avec vérification d'existence
          const nameParts = assetInfo.name.split('.');
          const extType = nameParts.length > 1 ? nameParts[1] : '';
          
          if (extType && /png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
}));
