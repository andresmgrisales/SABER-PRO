import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className }) => {
  // Si src es solo un nombre de archivo, empezar con la primera URL de fallback
  const fileName = src.includes('://') ? src.split('/').pop() || '' : src;
  const initialSrc = src.includes('://') ? src : `https://raw.githubusercontent.com/andresmgrisales/SABER-PRO/main/public/images/${fileName}`;
  
  const [currentSrc, setCurrentSrc] = useState(initialSrc);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    console.log('Error loading image:', currentSrc);
    
    // Lista de URLs de fallback en orden de prioridad
    const fallbackUrls = [
      `https://raw.githubusercontent.com/andresmgrisales/SABER-PRO/main/public/images/${fileName}`,
      `https://andresmgrisales.github.io/SABER-PRO/images/${fileName}`,
      `./images/${fileName}`,
      `/SABER-PRO/images/${fileName}`,
      'https://via.placeholder.com/400x300/cccccc/666666?text=Imagen+No+Disponible'
    ];
    
    const currentIndex = fallbackUrls.indexOf(currentSrc);
    const nextIndex = currentIndex + 1;
    
    if (nextIndex < fallbackUrls.length) {
      console.log('Trying fallback:', fallbackUrls[nextIndex]);
      setCurrentSrc(fallbackUrls[nextIndex]);
      setHasError(false);
    } else {
      console.log('All fallbacks failed');
      setHasError(true);
    }
  };

  if (hasError) {
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
      onError={handleError}
      onLoad={() => console.log('Image loaded successfully:', currentSrc)}
    />
  );
};
