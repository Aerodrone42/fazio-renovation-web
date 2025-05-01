(function() {
  console.log("Script d'initialisation chargé");
  const loadApp = () => {
    const paths = [
      './assets/index.js',
      './assets/main.js'
    ];
    
    // Recherche de tous les fichiers .js dans le dossier assets
    fetch('./assets/')
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const links = Array.from(doc.querySelectorAll('a'));
        const jsFiles = links
          .map(link => link.href)
          .filter(href => href.endsWith('.js'))
          .map(href => href.split('/').pop());
        
        if (jsFiles.length > 0) {
          jsFiles.forEach(file => {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = `./assets/${file}`;
            document.body.appendChild(script);
          });
        } else {
          throw new Error("Aucun fichier JS trouvé");
        }
      })
      .catch(error => {
        console.error("Erreur de chargement automatique:", error);
        
        // Essayer les chemins prédéfinis
        paths.forEach(path => {
          const script = document.createElement('script');
          script.type = 'module';
          script.src = path;
          document.body.appendChild(script);
        });
      });
  };
  
  if (document.readyState === "loading") {
    document.addEventListener('DOMContentLoaded', loadApp);
  } else {
    loadApp();
  }
})();
