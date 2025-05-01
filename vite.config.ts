
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

export default defineConfig(({ mode }) => {
  // Gestion des fichiers nécessaires pour GitHub Pages
  if (mode === 'production') {
    const outDir = 'dist';
    try {
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }
      
      // Création du fichier .nojekyll
      fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
      console.log("Fichier .nojekyll créé avec succès");
      
      // Copie du fichier CNAME si présent
      const cnamePath = path.join(__dirname, 'CNAME');
      if (fs.existsSync(cnamePath)) {
        fs.copyFileSync(cnamePath, path.join(outDir, 'CNAME'));
        console.log("Fichier CNAME copié avec succès");
      } else {
        console.warn("Fichier CNAME non trouvé à la racine du projet");
      }
      
      // Copie du fichier 404.html depuis public/
      const notFoundPath = path.join(__dirname, 'public', '404.html');
      if (fs.existsSync(notFoundPath)) {
        fs.copyFileSync(notFoundPath, path.join(outDir, '404.html'));
        console.log("Fichier 404.html copié avec succès");
      } else {
        console.warn("Fichier 404.html non trouvé dans public/");
      }
      
      // Copie du favicon.ico si présent
      const faviconPath = path.join(__dirname, 'public', 'favicon.ico');
      if (fs.existsSync(faviconPath)) {
        fs.copyFileSync(faviconPath, path.join(outDir, 'favicon.ico'));
        console.log("Favicon copié avec succès");
      }

      // Création d'un fichier test.html pour vérifier le déploiement
      const testHtmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Test de déploiement</title>
</head>
<body>
  <h1>Test de déploiement réussi</h1>
  <p>Si vous voyez cette page, le déploiement fonctionne correctement.</p>
  <p>Date de génération: ${new Date().toISOString()}</p>
  <p><a href="/">Retour à l'accueil</a></p>
</body>
</html>
`;
      fs.writeFileSync(path.join(outDir, 'test.html'), testHtmlContent);
      console.log("Fichier test.html créé avec succès");
      
      // Création d'un fichier direct-test.html supplémentaire pour vérification
      const directTestContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Test Direct</title>
</head>
<body>
  <h1>Test d'accès direct réussi</h1>
  <p>Si vous voyez cette page, l'accès direct aux fichiers fonctionne correctement.</p>
  <p>Date de génération: ${new Date().toISOString()}</p>
  <p><a href="/">Retour à l'accueil</a></p>
</body>
</html>
`;
      fs.writeFileSync(path.join(outDir, 'direct-test.html'), directTestContent);
      console.log("Fichier direct-test.html créé avec succès");
      
    } catch (err) {
      console.error('Erreur lors de la création des fichiers:', err);
    }
  }

  return {
    base: './', // Utilisation de chemins relatifs pour tous les assets
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
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    }
  };
});
