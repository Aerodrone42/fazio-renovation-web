// Script de redirection pour GitHub Pages
(function() {
  console.log("Script de redirection GitHub Pages chargé");
  // Vérifier si nous sommes sur GitHub Pages
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  if (isGitHubPages) {
    // S'assurer que tous les chemins sont relatifs
    const base = document.createElement('base');
    base.href = window.location.pathname.replace(/\/[^\/]*$/, '/');
    document.head.prepend(base);
  }
})();
