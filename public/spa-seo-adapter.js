
// Script pour aider à l'indexation des routes SPA par les moteurs de recherche
(function() {
  // Vérifie si l'utilisateur est un bot de recherche
  function isSearchBot() {
    return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
  }
  
  // Si c'est un bot et qu'il y a un hash dans l'URL, le rediriger vers une version sans hash
  if (isSearchBot() && window.location.hash) {
    const path = window.location.hash.substring(2); // Enlever le '#/'
    window.location.replace('/' + path);
  }
})();
