import React from 'react';
import { getImageByFilename } from '../src/assets/images';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className }) => {
  // Si es solo un nombre de archivo, usar la imagen importada
  const fileName = src.includes('://') ? src.split('/').pop() || '' : src;
  
  let imageUrl: string;
  
  if (src.includes('://')) {
    // Si ya es una URL completa, usarla tal como está
    imageUrl = src;
  } else {
    // Obtener la imagen importada por Vite
    const importedImage = getImageByFilename(fileName);
    if (importedImage) {
      imageUrl = importedImage;
      console.log('✅ Using Vite imported image for:', fileName, '→', imageUrl);
    } else {
      // Fallback a GitHub Raw URL si no se encuentra la imagen importada
      imageUrl = `https://raw.githubusercontent.com/andresmgrisales/SABER-PRO/main/public/images/${fileName}`;
      console.log('⚠️ Using fallback URL for:', fileName, '→', imageUrl);
    }
  }

  return (
    <img 
      src={imageUrl}
      alt={alt}
      className={className}
      onLoad={() => console.log('✅ Image loaded successfully:', imageUrl)}
      onError={(e) => {
        console.log('❌ Image failed to load:', imageUrl);
        // Último recurso: placeholder
        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300/e2e8f0/64748b?text=Imagen+Requerida+Para+La+Pregunta';
      }}
    />
  );
};
