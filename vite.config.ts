
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Déterminer la base URL en fonction de l'environnement
const base = process.env.NODE_ENV === 'production' ? '/sarlfaziolorenzo/' : '/';

export default defineConfig(({ mode }) => ({
  base: base,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 1600,
  },
}));
