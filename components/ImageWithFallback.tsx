import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className }) => {
  const [currentSrc, setCurrentSrc] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Determinar el nombre del archivo
  const fileName = src.includes('://') ? src.split('/').pop() || '' : src;

  // Lista de URLs para probar en orden
  const urlsToTry = [
    `https://raw.githubusercontent.com/andresmgrisales/SABER-PRO/main/public/images/${fileName}`,
    `https://andresmgrisales.github.io/SABER-PRO/images/${fileName}`,
    `/SABER-PRO/images/${fileName}`,
    `./images/${fileName}`,
    src // URL original como último recurso
  ];

  useEffect(() => {
    let isMounted = true;
    
    const tryNextUrl = async (index: number = 0) => {
      if (index >= urlsToTry.length) {
        if (isMounted) {
          setHasError(true);
          setIsLoading(false);
        }
        return;
      }

      const url = urlsToTry[index];
      console.log(`Trying image URL ${index + 1}/${urlsToTry.length}:`, url);

      try {
        const img = new Image();
        
        img.onload = () => {
          if (isMounted) {
            console.log('✅ Image loaded successfully:', url);
            setCurrentSrc(url);
            setHasError(false);
            setIsLoading(false);
          }
        };

        img.onerror = () => {
          console.log('❌ Failed to load:', url);
          tryNextUrl(index + 1);
        };

        img.src = url;
      } catch (error) {
        console.log('❌ Error trying:', url, error);
        tryNextUrl(index + 1);
      }
    };

    tryNextUrl();

    return () => {
      isMounted = false;
    };
  }, [fileName]);

  if (isLoading) {
    return (
      <div className={`${className} bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-500`}>
        <span>Cargando imagen...</span>
      </div>
    );
  }

  if (hasError || !currentSrc) {
    return (
      <div className={`${className} bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500`}>
        <span>Imagen no disponible</span>
      </div>
    );
  }

  return (
    <img 
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        console.log('❌ Final image error:', currentSrc);
        setHasError(true);
      }}
    />
  );
};
