
import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
  onLoad?: () => void;
  onError?: () => void;
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  placeholderColor = '#e5e7eb',
  onLoad,
  onError,
  width,
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  const [imgRef, setImgRef] = useState<HTMLImageElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Setup intersection observer for lazy loading
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
        setShouldLoad(true);
        obs.disconnect();
      }
    }, { 
      rootMargin: '200px', // Start loading when within 200px of viewport
      threshold: 0.01 
    });
    
    setObserver(obs);
    
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  // Observe image element when ref is set
  useEffect(() => {
    if (imgRef && observer) {
      observer.observe(imgRef);
    }
    
    return () => {
      if (imgRef && observer) {
        observer.unobserve(imgRef);
      }
    };
  }, [imgRef, observer]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setError(true);
    if (onError) onError();
  };

  return (
    <div 
      className="relative overflow-hidden"
      style={{ 
        backgroundColor: placeholderColor,
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
      }}
    >
      {/* Placeholder */}
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse"
          style={{ backgroundColor: placeholderColor }}
        >
          <span className="sr-only">Chargement...</span>
        </div>
      )}
      
      {/* Image */}
      <img
        ref={setImgRef}
        src={shouldLoad ? src : ''}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        width={width}
        height={height}
        loading="lazy"
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
