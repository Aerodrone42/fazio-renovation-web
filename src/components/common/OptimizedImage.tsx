
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

  // Set up initial source and preload high priority images
  useEffect(() => {
    if (priority) {
      // Priority images load immediately
      setImgSrc(optimizeImagePath(src, width, height));
      
      // Preload image in browser cache
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = src;
      preloadLink.id = `preload-${id.current}`;
      document.head.appendChild(preloadLink);
      
      return () => {
        // Clean up preload link when component unmounts
        const linkEl = document.getElementById(`preload-${id.current}`);
        if (linkEl) document.head.removeChild(linkEl);
      };
    }
  }, [src, priority, width, height]);

  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip for priority images
    
    // Only create a new observer if we don't have one yet
    if (!observerRef.current && imgRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const firstEntry = entries[0];
          if (firstEntry.isIntersecting) {
            // Wait a tiny bit to not block other resources
            setTimeout(() => {
              setImgSrc(optimizeImagePath(src, width, height));
            }, 10);
            // Disconnect once we've triggered the load
            observerRef.current?.disconnect();
          }
        }, 
        { 
          rootMargin: '200px', // Load images when within 200px of viewport
          threshold: 0.01 
        }
      );
      
      // Start observing
      observerRef.current.observe(imgRef.current);
    }
    
    return () => {
      // Clean up observer when component unmounts
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, width, height, priority]);

  // Handle successful image load
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  // Handle image load error
  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
    setIsLoaded(true); // Consider it "loaded" so we hide the placeholder
    if (onError) onError();
  };

  // Tiny transparent 1x1 pixel placeholder
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
