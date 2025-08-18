// Importar todas las imágenes como assets de Vite
import acumuladosSalud from './acumulados_salud.png';
import aspirantes from './aspirantes.png';
import aspirantes2 from './aspirantes2.png';
import aspirantes3 from './aspirantes3.png';
import aves from './aves.png';
import aviones from './aviones.png';
import cursos from './cursos.png';
import distribucionEdades from './distrubucion_edades.png';
import fuenteChocolate from './fuente_chocolate.png';
import herencia from './herencia.png';
import ingresoSubsidio from './ingreso_subsidio.png';
import jabon from './jabon.png';
import jabon2 from './jabon2.png';
import nudos from './nudos.png';
import pilates from './pilates.png';
import poblacion from './poblacion.png';
import porcentajeEjecucion from './porcentaje_ejecucion.png';
import presupuesto from './presupuesto.png';
import seguridadVial from './seguridad_vial.png';
import sismos from './sismos.png';
import subsidio from './subsidio.png';
import table2 from './table2.png';
import torneos from './torneos.png';
import transporte from './trasnporte.png';

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
