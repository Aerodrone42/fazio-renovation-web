
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
      host: "::"
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: false,
      minify: 'esbuild',
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
        },
      },
      chunkSizeWarningLimit: 1000, // Augmente la limite d'avertissement de taille de chunk
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
  };
});
