
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

export default defineConfig({
  base: '/', // Utilisation de la racine du domaine
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    process.env.NODE_ENV !== 'production' && componentTagger(),
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
    // Génération automatique des fichiers nécessaires pour GitHub Pages
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 1600,
  },
});
