
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Ensure .nojekyll file exists for GitHub Pages
  if (mode === 'production') {
    // Create .nojekyll file in the outDir during build
    const outDir = 'dist';
    try {
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }
      fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
      
      // Copy CNAME file to outDir
      const cnamePath = path.join(__dirname, 'CNAME');
      if (fs.existsSync(cnamePath)) {
        fs.copyFileSync(cnamePath, path.join(outDir, 'CNAME'));
      }
    } catch (err) {
      console.error('Error creating .nojekyll or copying CNAME file:', err);
    }
  }

  return {
    base: '/',  // Base path for GitHub Pages with custom domain
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
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
      // Generate a .nojekyll file
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    }
  };
});
