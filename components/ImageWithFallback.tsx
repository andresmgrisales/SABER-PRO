import React, { useState } from 'react';

// Importar las imágenes directamente
import aves from '../src/assets/images/aves.png';
import distrubucionEdades from '../src/assets/images/distrubucion_edades.png';
import trasnporte from '../src/assets/images/trasnporte.png';
import aviones from '../src/assets/images/aviones.png';
import jabon from '../src/assets/images/jabon.png';
import sismos from '../src/assets/images/sismos.png';
import herencia from '../src/assets/images/herencia.png';
import seguridadVial from '../src/assets/images/seguridad_vial.png';
import fuenteChocolate from '../src/assets/images/fuente_chocolate.png';
import aspirantes from '../src/assets/images/aspirantes.png';
import aspirantes2 from '../src/assets/images/aspirantes2.png';
import aspirantes3 from '../src/assets/images/aspirantes3.png';
import pilates from '../src/assets/images/pilates.png';
import jabon2 from '../src/assets/images/jabon2.png';
import torneos from '../src/assets/images/torneos.png';

// Mapeo de nombres de archivo a imágenes importadas
const imageMap: Record<string, string> = {
  'aves.png': aves,
  'distrubucion_edades.png': distrubucionEdades,
  'trasnporte.png': trasnporte,
  'aviones.png': aviones,
  'jabon.png': jabon,
  'sismos.png': sismos,
  'herencia.png': herencia,
  'seguridad_vial.png': seguridadVial,
  'fuente_chocolate.png': fuenteChocolate,
  'aspirantes.png': aspirantes,
  'aspirantes2.png': aspirantes2,
  'aspirantes3.png': aspirantes3,
  'pilates.png': pilates,
  'jabon2.png': jabon2,
  'torneos.png': torneos,
};

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Si es solo un nombre de archivo, usar la imagen importada
  const fileName = src.includes('://') ? src.split('/').pop() || '' : src;
  
  let imageUrl: string;
  
  if (src.includes('://')) {
    // Si ya es una URL completa, usarla tal como está
    imageUrl = src;
    console.log('🌐 Using provided URL:', imageUrl);
  } else {
    // Buscar la imagen en el mapeo
    const importedImage = imageMap[fileName];
    if (importedImage) {
      imageUrl = importedImage;
      console.log('✅ Using Vite imported image for:', fileName, '→', imageUrl);
    } else {
      // Fallback a GitHub Raw URL si no se encuentra la imagen importada
      imageUrl = `https://raw.githubusercontent.com/andresmgrisales/SABER-PRO/main/public/images/${fileName}`;
      console.log('⚠️ Using fallback URL for:', fileName, '→', imageUrl);
    }
  }

  // Si hubo error, mostrar mensaje
  if (imageError) {
    return (
      <div className={`${className} bg-yellow-50 border-2 border-yellow-200 rounded-lg p-8 flex flex-col items-center justify-center text-yellow-800 min-h-[200px]`}>
        <div className="text-4xl mb-2">⚠️</div>
        <div className="text-center">
          <div className="font-semibold mb-1">Imagen requerida para esta pregunta</div>
          <div className="text-sm">La imagen es necesaria para responder correctamente</div>
        </div>
      </div>
    );
  }

  return (
    <>
      {!imageLoaded && (
        <div className={`${className} bg-blue-50 border border-blue-200 rounded-lg p-8 flex items-center justify-center text-blue-600 min-h-[200px]`}>
          <div className="text-center">
            <div className="animate-spin text-2xl mb-2">⏳</div>
            <div>Cargando imagen...</div>
          </div>
        </div>
      )}
      <img 
        src={imageUrl}
        alt={alt}
        className={`${className} ${!imageLoaded ? 'hidden' : ''}`}
        onLoad={() => {
          console.log('✅ Image loaded successfully:', imageUrl);
          setImageLoaded(true);
        }}
        onError={(e) => {
          console.log('❌ Image failed to load:', imageUrl);
          setImageError(true);
        }}
      />
    </>
  );
};
