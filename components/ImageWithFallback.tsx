import React from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className }) => {
  // Si es solo un nombre de archivo, usar directamente GitHub Raw URL
  const fileName = src.includes('://') ? src.split('/').pop() || '' : src;
  const imageUrl = src.includes('://') 
    ? src 
    : `https://raw.githubusercontent.com/andresmgrisales/SABER-PRO/main/public/images/${fileName}`;

  console.log('🖼️ Loading image:', imageUrl);

  return (
    <img 
      src={imageUrl}
      alt={alt}
      className={className}
      onLoad={() => console.log('✅ Image loaded successfully:', imageUrl)}
      onError={(e) => {
        console.log('❌ Image failed to load:', imageUrl);
        // Mostrar un placeholder si falla
        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300/cccccc/666666?text=Imagen+No+Disponible';
      }}
    />
  );
};
