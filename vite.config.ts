
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Import du plugin componentTagger de façon conditionnelle
export default defineConfig(({ mode }) => ({
  base: '/', // Base path for assets
  plugins: [
    react(),
    // Utilisation conditionnelle de componentTagger seulement en développement
    mode === 'development' && (() => {
      try {
        const { componentTagger } = require("lovable-tagger");
        return componentTagger();
      } catch (e) {
        console.warn("componentTagger not available, skipping");
        return null;
      }
    })()
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
    outDir: 'docs', // Generate build files in the docs folder
    emptyOutDir: true, // Empty the folder before each build
    assetsDir: 'assets', // Name of the folder for assets
    // Ensure we don't mangle asset paths
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: (assetInfo) => {
          // Safely check if assetInfo and assetInfo.name exist
          if (!assetInfo || !assetInfo.name) {
            return 'assets/[name]-[hash][extname]';
          }
          
          // Check for image file extensions
          const nameParts = assetInfo.name.split('.');
          const extType = nameParts.length > 1 ? nameParts[1] : '';
          
          if (extType && /png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
}));
