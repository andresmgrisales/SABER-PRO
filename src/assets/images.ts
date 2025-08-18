// Importar todas las imágenes como assets de Vite
import acumuladosSalud from './images/acumulados_salud.png';
import aspirantes from './images/aspirantes.png';
import aspirantes2 from './images/aspirantes2.png';
import aspirantes3 from './images/aspirantes3.png';
import aves from './images/aves.png';
import aviones from './images/aviones.png';
import cursos from './images/cursos.png';
import distribucionEdades from './images/distrubucion_edades.png';
import fuenteChocolate from './images/fuente_chocolate.png';
import herencia from './images/herencia.png';
import ingresoSubsidio from './images/ingreso_subsidio.png';
import jabon from './images/jabon.png';
import jabon2 from './images/jabon2.png';
import nudos from './images/nudos.png';
import pilates from './images/pilates.png';
import poblacion from './images/poblacion.png';
import porcentajeEjecucion from './images/porcentaje_ejecucion.png';
import presupuesto from './images/presupuesto.png';
import seguridadVial from './images/seguridad_vial.png';
import sismos from './images/sismos.png';
import subsidio from './images/subsidio.png';
import table2 from './images/table2.png';
import torneos from './images/torneos.png';
import transporte from './images/trasnporte.png';

// Exportar todas las imágenes en un objeto
export const images = {
  acumulados_salud: acumuladosSalud,
  aspirantes: aspirantes,
  aspirantes2: aspirantes2,
  aspirantes3: aspirantes3,
  aves: aves,
  aviones: aviones,
  cursos: cursos,
  distrubucion_edades: distribucionEdades,
  fuente_chocolate: fuenteChocolate,
  herencia: herencia,
  ingreso_subsidio: ingresoSubsidio,
  jabon: jabon,
  jabon2: jabon2,
  nudos: nudos,
  pilates: pilates,
  poblacion: poblacion,
  porcentaje_ejecucion: porcentajeEjecucion,
  presupuesto: presupuesto,
  seguridad_vial: seguridadVial,
  sismos: sismos,
  subsidio: subsidio,
  table2: table2,
  torneos: torneos,
  trasnporte: transporte,
};

// Función helper para obtener una imagen por nombre de archivo
export const getImageByFilename = (filename: string): string => {
  // Quitar la extensión .png del filename
  const key = filename.replace('.png', '');
  return images[key as keyof typeof images] || '';
};

export default images;
