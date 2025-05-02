
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
  });
};

/**
 * Précharge un ensemble d'images en parallèle
 * @param srcs Tableau d'URLs d'images à précharger
 * @returns Une promesse qui se résout quand toutes les images sont chargées
 */
export const preloadImages = async (srcs: string[]): Promise<HTMLImageElement[]> => {
  try {
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
  // Cette fonction peut être adaptée selon votre service d'images
  // Pour l'instant, elle renvoie simplement le chemin d'origine
  return src;
};
