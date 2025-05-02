
/**
 * Précharge une image en mémoire
 * @param src URL de l'image à précharger
 * @returns Une promesse qui se résout quand l'image est chargée
 */
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
    // Forcer le cache des images pour éviter les problèmes de CORS
    img.crossOrigin = "anonymous";
  });
};

/**
 * Précharge un ensemble d'images en parallèle
 * @param srcs Tableau d'URLs d'images à précharger
 * @returns Une promesse qui se résout quand toutes les images sont chargées
 */
export const preloadImages = async (srcs: string[]): Promise<HTMLImageElement[]> => {
  try {
    console.log('Préchargement des images:', srcs);
    return await Promise.all(srcs.map(src => preloadImage(src)));
  } catch (error) {
    console.error('Erreur lors de la précharge des images:', error);
    return [];
  }
};

/**
 * Vérifie si une image existe et peut être chargée
 * @param src URL de l'image à vérifier
 * @returns Une promesse qui se résout avec un booléen indiquant si l'image existe
 */
export const imageExists = async (src: string): Promise<boolean> => {
  try {
    await preloadImage(src);
    return true;
  } catch {
    console.error(`Image non trouvée: ${src}`);
    return false;
  }
};

/**
 * Optimise le chemin d'une image en ajoutant des paramètres pour le redimensionnement
 * @param src URL de l'image
 * @param width Largeur souhaitée
 * @param height Hauteur souhaitée
 * @returns URL optimisée
 */
export const optimizeImagePath = (src: string, width?: number, height?: number): string => {
  // Ne rien faire sur les data URLs
  if (src.startsWith('data:')) return src;
  
  // Ne plus ajouter de cacheBuster pour éviter des problèmes de cache
  // Retourner directement le chemin de l'image
  return src;
};

/**
 * Retourne une petite version base64 d'un pixel transparent
 * @returns Base64 string d'un pixel transparent
 */
export const getTransparentPixel = (): string => {
  return 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
};

/**
 * Génère un placeholder coloré pour une image
 * @param width Largeur du placeholder
 * @param height Hauteur du placeholder
 * @param color Couleur hexadécimale du placeholder
 * @returns Data URL du placeholder
 */
export const generateColorPlaceholder = (width: number, height: number, color: string = '#e5e7eb'): string => {
  // Cette fonction pourrait être utilisée pour générer des placeholders SVG colorés
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${color}"/></svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};
