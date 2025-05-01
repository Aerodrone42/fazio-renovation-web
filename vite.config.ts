
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  return {
    base: '/',
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
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: mode === 'development',
      minify: 'esbuild',
      // Suppression de la configuration personnalisée des noms de fichiers pour permettre à Vite de les gérer automatiquement
    },
  };
});
