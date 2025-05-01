
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
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
    emptyOutDir: true,
    assetsDir: 'assets', // Garantir que les assets sont dans le dossier assets
    manifest: true, // Générer un fichier manifeste
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js', // Forcer les fichiers JS dans assets/
        chunkFileNames: 'assets/[name].[hash].js', // Forcer les chunks dans assets/
        assetFileNames: 'assets/[name].[hash].[ext]', // Forcer les autres fichiers dans assets/
      },
    },
  },
}));
