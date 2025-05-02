
import React, { useState, useEffect, useRef } from 'react';
import { optimizeImagePath } from '@/utils/imageUtils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
  onLoad?: () => void;
  onError?: () => void;
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  placeholderColor = '#e5e7eb',
  onLoad,
  onError,
  width,
  height,
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>('');
  const imgRef = useRef<HTMLImageElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Create a unique ID for this image instance
  const id = useRef(`opt-img-${Math.random().toString(36).substring(2, 15)}`);

  // Set up initial source immediately for priority images
  useEffect(() => {
    // Charger immédiatement toutes les images
    const imagePath = src;
    console.log(`Chargement de l'image: ${imagePath}`);
    setImgSrc(imagePath);
    
    if (priority) {
      // Précharger l'image dans le cache du navigateur
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = imagePath;
      preloadLink.id = `preload-${id.current}`;
      document.head.appendChild(preloadLink);
      
      return () => {
        // Nettoyer le lien de préchargement lorsque le composant se démonte
        const linkEl = document.getElementById(`preload-${id.current}`);
        if (linkEl) document.head.removeChild(linkEl);
      };
    }
  }, [src, priority]);

  // Handle successful image load
  const handleLoad = () => {
    console.log(`Image chargée avec succès: ${src}`);
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  // Handle image load error
  const handleError = () => {
    console.error(`Échec du chargement de l'image: ${src}`);
    setError(true);
    setIsLoaded(true); // Considérer comme "chargée" pour que nous cachions le placeholder
    if (onError) onError();
  };

  // Placeholder transparent 1x1 pixel
  const blankPlaceholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

  return (
    <div 
      className={`relative overflow-hidden bg-gray-100 ${isLoaded && !error ? 'bg-transparent' : ''}`}
      style={{ 
        backgroundColor: placeholderColor,
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
      }}
      data-loaded={isLoaded ? 'true' : 'false'}
      data-src={src}
    >
      {/* Low quality placeholder or loading animation */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse"
          style={{ backgroundColor: placeholderColor }}
        >
          <span className="sr-only">Chargement...</span>
        </div>
      )}
      
      {/* Actual image */}
      <img
        ref={imgRef}
        src={imgSrc || blankPlaceholder}
        alt={alt}
        className={`${className} ${isLoaded && !error ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ${error ? 'hidden' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
      />
      
      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-sm text-gray-500">Image non disponible</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
