
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
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
      outDir: 'dist', // Dossier standard de build Vite
      emptyOutDir: true, // Vider le dossier de sortie avant le build
      assetsDir: 'assets', // Dossier pour les assets compilés
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
        output: {
          entryFileNames: 'assets/[name].js', // Format des noms de fichiers d'entrée
          chunkFileNames: 'assets/[name].js', // Format des noms de chunks
          assetFileNames: 'assets/[name].[ext]', // Format des noms d'assets
        },
      },
    },
  };
});
