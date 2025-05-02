
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  return {
    base: './', // Utilisation de chemins relatifs pour GitHub Pages
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
      host: "::",
      // Optimiser le serveur de développement
      hmr: {
        overlay: false, // Désactiver l'overlay pour améliorer les performances
      },
      watch: {
        usePolling: false,
      },
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: false,
      minify: 'esbuild',
      target: 'es2015', // Cible les navigateurs modernes pour générer un code plus petit
      assetsDir: 'assets',
      assetsInlineLimit: 4096, // 4kb - les fichiers plus petits seront inlinés en base64
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            router: ['react-router-dom'],
            ui: [
              '@radix-ui/react-aspect-ratio',
              '@radix-ui/react-dialog',
              '@radix-ui/react-slot'
            ],
          },
          // Optimisation des noms de fichiers pour le cache
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        },
      },
      chunkSizeWarningLimit: 1000, // Augmente la limite d'avertissement de taille de chunk
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      // Précompilation pour un démarrage plus rapide
      esbuildOptions: {
        target: 'es2020',
      }
    },
    // Compression des assets
    experimental: {
      renderBuiltUrl(filename, { type }) {
        // Ajout d'un cache-buster aux fichiers d'assets
        return `./${filename}?v=${Date.now().toString(36).slice(-5)}`;
      },
    },
  };
});
