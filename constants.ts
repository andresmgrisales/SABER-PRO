import { Question, Competency } from './types';
import { images } from './src/assets';

export const TOTAL_QUESTIONS_PER_QUIZ = 20;

export const getImageUrl = (imageName: string | undefined): string | undefined => {
  if (!imageName) return undefined;
  return images[imageName as keyof typeof images];
};

export const QUESTIONS: Question[] = [
  {
    id: 'q001',
    competency: Competency.Interpretation,
    statement: 'En cierto país, una persona es considerada joven si su edad es menor o igual a 30 años. El siguiente diagrama muestra la distribución de las edades para ese país.',
    image: 'distrubucion_edades.png',
    options: [
      { key: 'A', text: 'Sí, porque las personas de 30 años pertenecen a la porción más grande.' },
      { key: 'B', text: 'No, porque se desconoce la proporción de personas entre 31 y 35 años.' },
      { key: 'C', text: 'Sí, porque las personas jóvenes corresponden al 65% de la población.' },
      { key: 'D', text: 'No, porque todas las porciones del diagrama son menores al 50%.' }
    ],
    correctAnswer: 'B',
    explanation: 'No se puede afirmar con certeza ya que la porción de personas entre 21-35 años incluye tanto jóvenes (hasta 30) como no jóvenes (31-35), y no se conoce la distribución específica en ese rango.'
  },
  {
    id: 'q002',
    competency: Competency.Interpretation,
    statement: 'Un sistema de transporte urbano en una ciudad de Colombia utiliza dos tipos de buses. La tabla muestra la información del número de pasajeros que puede transportar cada tipo de bus.',
    image: './images/trasnporte.png',
    options: [
      { key: 'A', text: 'Se requieren más buses tipo I que tipo II para transportar el mismo número de pasajeros.' },
      { key: 'B', text: 'La capacidad total de pasajeros sentados es mayor en los buses tipo II.' },
      { key: 'C', text: 'Los buses tipo I pueden transportar más pasajeros de pie que los tipo II.' },
      { key: 'D', text: 'La capacidad total es la misma en ambos tipos de buses.' }
    ],
    correctAnswer: 'B',
    explanation: 'Los buses tipo II tienen mayor capacidad de pasajeros sentados (48) que los buses tipo I (36).'
  },
  {
    id: 'q003',
    competency: Competency.Formulation,
    statement: 'El capitán de una embarcación debe dirigir su barco desde el puerto O hasta el puerto Q, pasando por el puerto P. En el trayecto de O a P mantuvo una velocidad constante de 27 nudos; sin embargo, al momento de zarpar del puerto P con rumbo al puerto Q, su velocímetro se averió y tuvo que usar un repuesto extranjero que marcó durante todo el trayecto una velocidad de 50 km/h.',
    image: './images/nudos.png',
    options: [
      { key: 'A', text: 'Convertir nudos a km/h para todo el trayecto' },
      { key: 'B', text: 'Calcular el tiempo para cada tramo por separado' },
      { key: 'C', text: 'Usar la velocidad promedio de ambos tramos' },
      { key: 'D', text: 'Convertir km/h a nudos para el segundo tramo' }
    ],
    correctAnswer: 'B',
    explanation: 'Se deben calcular los tiempos por separado ya que las velocidades están en unidades diferentes y no pueden promediarse directamente sin hacer la conversión adecuada.'
  },
  {
    id: 'q004',
    competency: Competency.Interpretation,
    statement: 'En el 2013, el presupuesto de inversión en el sector salud del país fue de 3,65 billones de pesos. La gráfica muestra el porcentaje de ejecución hasta mayo del 2013, el porcentaje máximo ejecutado y el porcentaje promedio acumulado de ejecución de cada mes, en los años 2002 a 2012.',
    image: '/images/acumulados_salud.png',
    options: [
      { key: 'A', text: 'El presupuesto ejecutado superó el promedio histórico.' },
      { key: 'B', text: 'La ejecución fue más eficiente que en años anteriores.' },
      { key: 'C', text: 'El porcentaje de ejecución fue constante mes a mes.' },
      { key: 'D', text: 'La ejecución acumulada aumentó progresivamente.' }
    ],
    correctAnswer: 'D',
    explanation: 'La gráfica muestra que el porcentaje de ejecución acumulado en 2013 aumentó progresivamente mes a mes, sin disminuciones.'
  },
  {
    id: 'q005',
    competency: Competency.Formulation,
    statement: 'Si se espera que en octubre de 2013 el porcentaje de ejecución sea del 70%, la cantidad de dinero invertida en el sector salud hasta ese mes sería aproximadamente de:',
    image: '/images/acumulados_salud.png',
    options: [
      { key: 'A', text: '2,55 billones' },
      { key: 'B', text: '2,10 billones' },
      { key: 'C', text: '1,82 billones' },
      { key: 'D', text: '1,66 billones' }
    ],
    correctAnswer: 'A',
    explanation: 'El 70% de 3,65 billones es 3,65 × 0,70 = 2,55 billones de pesos.'
  },
  {
    id: 'q006',
    competency: Competency.Interpretation,
    statement: 'Un instructor de pilates tiene un estudio con los equipos necesarios para entrenamiento personalizado. La tabla muestra, en gris, los momentos del día que ya tiene clase con alguna persona, cada semana. ¿Cuál de las siguientes afirmaciones es incorrecta?',
    image: '/images/pilates.png',
    options: [
      { key: 'A', text: 'Hay más horas disponibles de 8 a.m. a 1 p.m. que de 1 p.m. a 7 p.m.' },
      { key: 'B', text: 'Todos los días hay 5 horas disponibles.' },
      { key: 'C', text: 'Hay más horas disponibles de jueves a sábado que de lunes a miércoles.' },
      { key: 'D', text: 'El sábado de 12 m. a 7 p.m. no hay clases asignadas.' }
    ],
    correctAnswer: 'B',
    explanation: 'No todos los días tienen 5 horas disponibles. Al contar las horas no sombreadas (disponibles) en cada día, se puede ver que la cantidad varía.'
  },
  {
    id: 'q007',
    competency: Competency.Interpretation,
    statement: 'En la gráfica se muestran los resultados de cinco jugadores de tenis. En Australia y Estados Unidos se juega en cancha dura, el Roland Garros en arcilla y el Wimbledon en césped. Considerando solamente los torneos jugados en cancha dura, ¿cuál es el promedio de torneos ganados por los cinco jugadores?',
    image: '/images/torneos.png',
    options: [
      { key: 'A', text: '1,2 torneos' },
      { key: 'B', text: '2,0 torneos' },
      { key: 'C', text: '2,6 torneos' },
      { key: 'D', text: '4,4 torneos' }
    ],
    correctAnswer: 'D',
    explanation: 'Para cancha dura (Australia y EE.UU.), sumando los torneos ganados por cada jugador y dividiendo entre 5: (3+6+5+5+3)/5 = 4,4 torneos en promedio.'
  },
  {
    id: 'q008',
    competency: Competency.Interpretation,
    statement: 'El subsidio familiar de vivienda (SFV) es un aporte que entrega el Estado. Una familia con ingresos entre 0 y 1 SMMLV recibe un subsidio equivalente a:',
    image: '/images/subsidio.png',
    options: [
      { key: 'A', text: '1,4 veces el subsidio de una familia de ingresos entre 2 y 2,25 SMMLV.' },
      { key: 'B', text: '1,8 veces el subsidio de una familia de ingresos entre 2,5 y 2,75 SMMLV.' },
      { key: 'C', text: '3,5 veces el subsidio de una familia de ingresos entre 3 y 3,5 SMMLV.' },
      { key: 'D', text: '5,5 veces el subsidio de una familia de ingresos entre 3,5 y 4 SMMLV.' }
    ],
    correctAnswer: 'D',
    explanation: 'Una familia con ingresos entre 0-1 SMMLV recibe 22 SMMLV de subsidio, mientras que una familia con ingresos entre 3,5-4 SMMLV recibe 4 SMMLV. La relación es 22/4 = 5,5 veces.'
  },
  {
    id: 'q009',
    competency: Competency.Interpretation,
    statement: 'El presupuesto del país se repartió en 2008 de acuerdo con la cantidad de habitantes de cada región. La gráfica que representa correctamente la distribución del presupuesto debe mostrar que:',
    image: '/images/presupuesto.png',
    options: [
      { key: 'A', text: 'Las regiones M y N tienen sectores iguales.' },
      { key: 'B', text: 'La región O tiene el sector más pequeño.' },
      { key: 'C', text: 'Las regiones M y O tienen sectores similares y mayores que N y P.' },
      { key: 'D', text: 'Todas las regiones tienen sectores iguales.' }
    ],
    correctAnswer: 'C',
    explanation: 'La distribución correcta debe mostrar sectores similares para las regiones M y O, que son mayores que los sectores de N y P, los cuales también son similares entre sí.'
  },
  {
    id: 'q010',
    competency: Competency.Interpretation,
    statement: 'Un científico estudia el comportamiento de cinco aves durante cuatro sesiones de 30 minutos cada una. ¿Cuál de las aves presenta las siguientes características: Tarda el doble del tiempo o más en alimentarse que en descansar, y la defecación dura menos del 10% del tiempo total de las sesiones?',
    image: '/images/aves.png',
    options: [
      { key: 'A', text: 'Ave 1' },
      { key: 'B', text: 'Ave 2' },
      { key: 'C', text: 'Ave 3' },
      { key: 'D', text: 'Ave 5' }
    ],
    correctAnswer: 'B',
    explanation: 'El Ave 2 cumple ambas condiciones: su tiempo de alimentación (21) es más del doble que su tiempo de descanso (10), y su tiempo de defecación (7) es menor al 10% del tiempo total de sesiones (120 minutos).'
  },
  {
    id: 'q011',
    competency: Competency.Interpretation,
    statement: 'Las pistas de aterrizaje de los aeropuertos se marcan en sus extremos de acuerdo con su alineación con el norte magnético. Una pista marcada en un extremo con el número 24, en el extremo opuesto está marcada con el número:',
    image: '/images/aviones.png',
    options: [
      { key: 'A', text: '06' },
      { key: 'B', text: '18' },
      { key: 'C', text: '36' },
      { key: 'D', text: '42' }
    ],
    correctAnswer: 'A',
    explanation: 'La numeración de pistas se basa en la dirección magnética dividida por 10. El número 24 representa 240°. El extremo opuesto está a 180° de diferencia (60°), por lo que se marca como 06.'
  },
  {
    id: 'q012',
    competency: Competency.Formulation,
    statement: 'Una microempresa elabora jabón líquido en presentaciones de 300mL, 500mL y 700mL. Un tanque almacena la cantidad exacta para envasar 50 unidades de cada tipo. Si 1 Litro = 1.000 mL, ¿cuál es la capacidad del tanque?',
    image: '/images/jabon.png',
    options: [
      { key: 'A', text: '15 litros' },
      { key: 'B', text: '75 litros' },
      { key: 'C', text: '1.500 litros' },
      { key: 'D', text: '75.000 litros' }
    ],
    correctAnswer: 'B',
    explanation: 'Cálculo: 50*(300mL + 500mL + 700mL) = 50*(1500mL) = 75.000mL = 75 litros'
  },
  {
    id: 'q013',
    competency: Competency.Interpretation,
    statement: 'La tabla muestra el total de sismos registrados en el planeta durante la primera década del siglo XXI. Un sismólogo afirma que en cualquier año era más probable que hubiese sismos de baja que de alta magnitud. La relación que justifica esta opinión es:',
    image: '/images/sismos.png',
    options: [
      { key: 'A', text: 'A mayor magnitud, mayor cantidad de sismos.' },
      { key: 'B', text: 'A mayor magnitud, menor cantidad de sismos.' },
      { key: 'C', text: 'A mayor cantidad de sismos, menor magnitud de estos.' },
      { key: 'D', text: 'A mayor cantidad de sismos, mayor magnitud de estos.' }
    ],
    correctAnswer: 'B',
    explanation: 'Los datos muestran que a medida que aumenta la magnitud de los sismos, disminuye la cantidad de estos registrados en cada año.'
  },
  {
    id: 'q014',
    competency: Competency.Formulation,
    statement: 'En la primera década del siglo XXI, el total de sismos registrados (incluyendo <5.0) fue de 36.919. Los sismos de magnitud entre 8,0 y 8,9 fueron 12. ¿Cuál es la proporción aproximada?',
    image: '/images/sismos.png',
    options: [
      { key: 'A', text: '1 de cada 3.000 sismos.' },
      { key: 'B', text: '1 de cada 12 sismos.' },
      { key: 'C', text: '12 de cada 18.000 sismos.' },
      { key: 'D', text: '12 de cada 4.000 sismos.' }
    ],
    correctAnswer: 'A',
    explanation: 'Dividiendo el total de sismos entre los de magnitud 8.0-8.9: 36.919/12 ≈ 3.076, lo que aproximadamente equivale a 1 de cada 3.000 sismos.'
  },
  {
    id: 'q015',
    competency: Competency.Interpretation,
    statement: 'Antes de fallecer, la señora Antonia organizó su testamento heredando a sus sobrinos y a los hijos de estos. La señora Antonia tiene una casa que actualmente vale $240.000.000 y un porcentaje en un apartamento que actualmente vale $160.000.000. ¿Qué parte de la herencia le corresponde a Patricia?',
    image: '/images/herencia.png',
    options: [
      { key: 'A', text: 'La quinta parte.' },
      { key: 'B', text: 'La décima parte.' },
      { key: 'C', text: 'La octava parte.' },
      { key: 'D', text: 'La mitad de la quinta parte.' }
    ],
    correctAnswer: 'B',
    explanation: 'La herencia se divide en 5 partes iguales inicialmente. A Beatriz (madre de Patricia) le corresponde 1/5, que se divide entre sus dos hijos. Por lo tanto, Patricia recibe 1/2 de 1/5 = 1/10 de la herencia total.'
  },
  {
    id: 'q016',
    competency: Competency.Interpretation,
    statement: 'La gráfica muestra la inversión que hizo un país en temas de seguridad vial durante 7 años. Durante el período 1996 – 2002, los años en los que se hizo mayor inversión en seguridad vial fueron:',
    image: '/images/seguridad_vial.png',
    options: [
      { key: 'A', text: '1996 y 1997' },
      { key: 'B', text: '1998 y 1999' },
      { key: 'C', text: '2000 y 2001' },
      { key: 'D', text: '2001 y 2002' }
    ],
    correctAnswer: 'D',
    explanation: 'Observando la gráfica, los años con las barras más altas, que representan mayor inversión, son 2001 y 2002.'
  },
  {
    id: 'q017',
    competency: Competency.Formulation,
    statement: 'Para una fiesta infantil se tiene una fuente de chocolate con tres niveles, cuyos recipientes son cilíndricos. El organizador mide la altura y el radio del recipiente inferior para estimar la capacidad total de la fuente. ¿Es suficiente esta información?',
    image: '/images/fuente_chocolate.png',
    options: [
      { key: 'A', text: 'No son suficientes, pues falta conocer el peso del chocolate.' },
      { key: 'B', text: 'Son suficientes, pues el recipiente más bajo recibe el chocolate de los otros.' },
      { key: 'C', text: 'No son suficientes, pues no toman en cuenta la capacidad de los otros recipientes y el tubo de circulación.' },
      { key: 'D', text: 'Son suficientes, pues si se llenan los otros, el chocolate se saldrá de la fuente.' }
    ],
    correctAnswer: 'C',
    explanation: 'Para calcular la capacidad total, se necesita conocer las dimensiones de todos los recipientes y del tubo de circulación, no solo del recipiente inferior.'
  },
  {
    id: 'q018',
    competency: Competency.Formulation,
    statement: 'Un aspirante de 600 es admitido si supera la prueba I y está entre los mejores puntajes de la prueba II (máximo 16% de los aspirantes de su grupo). Si hay 4 grupos de 150 aspirantes cada uno, ¿ser admitido es suficiente con estar entre los mejores X puntajes de su grupo en la prueba II?',
    image: '/images/aspirantes.png',
    options: [
      { key: 'A', text: 'los mejores 16 puntajes' },
      { key: 'B', text: 'los mejores 24 puntajes' },
      { key: 'C', text: 'los mejores 64 puntajes' },
      { key: 'D', text: 'los mejores 96 puntajes' }
    ],
    correctAnswer: 'B',
    explanation: 'El 16% de 150 aspirantes es: 150 × 0.16 = 24 aspirantes. Por lo tanto, debe estar entre los 24 mejores puntajes de su grupo.'
  },
  {
    id: 'q019',
    competency: Competency.Interpretation,
    statement: 'La tabla muestra datos del proceso de admisión. La universidad publica una lista con los resultados de la prueba II de todos los aspirantes que la presentaron. Uno de ellos obtuvo el puesto 95 y superó el puntaje mínimo. La conclusión del aspirante sobre estar admitido no necesariamente es válida porque:',
    image: '/images/aspirantes2.png',
    options: [
      { key: 'A', text: 'Debe considerar su posición solo dentro de su grupo.' },
      { key: 'B', text: 'El puntaje mínimo varía según el grupo.' },
      { key: 'C', text: 'La posición general no determina la admisión.' },
      { key: 'D', text: 'Los grupos tienen diferentes cantidades de aspirantes.' }
    ],
    correctAnswer: 'A',
    explanation: 'La admisión depende de la posición del aspirante dentro de su propio grupo, no de su posición en la lista general de todos los aspirantes que presentaron la prueba II.'
  },
  {
    id: 'q020',
    competency: Competency.Argumentation,
    statement: 'La tabla muestra la distribución de los aspirantes clasificados en los grupos B y D. Un análisis de los datos muestra una inconsistencia en:',
    image: '/images/aspirantes3.png',
    options: [
      { key: 'A', text: 'el número de personas que aprobaron la prueba II en el grupo C.' },
      { key: 'B', text: 'el puntaje promedio del grupo A en la prueba I.' },
      { key: 'C', text: 'el número total de personas que aprobaron la prueba I.' },
      { key: 'D', text: 'el puntaje promedio del grupo B en la prueba II.' }
    ],
    correctAnswer: 'A',
    explanation: 'La inconsistencia está en que el número de personas que aprueban la prueba II no puede ser mayor que el número que aprobó la prueba I, ya que solo quienes aprueban la prueba I pueden presentar la prueba II.'
  },
  {
    id: 'q021',
    competency: Competency.Formulation,
    statement: 'Al piloto de un avión que está alineado para aterrizar en el extremo 24 se le pide que cambie su rumbo girando 30 grados a su derecha para que use una pista libre. El número que encuentra en la nueva pista es:',
    image: '/images/aviones.png',
    options: [
      { key: 'A', text: '06' },
      { key: 'B', text: '21' },
      { key: 'C', text: '27' },
      { key: 'D', text: '54' }
    ],
    correctAnswer: 'C',
    explanation: 'El número 24 representa una dirección de 240°. Al girar 30° a la derecha, la nueva dirección es 270°, que corresponde a la pista 27.'
  },
  {
    id: 'q022',
    competency: Competency.Interpretation,
    statement: 'Un instructor de pilates tiene la agenda mostrada en la tabla 2. ¿Cuál de las siguientes afirmaciones es incorrecta?',
    image: '/images/pilates.png',
    options: [
      { key: 'A', text: 'Hay más horas disponibles en la mañana que en la tarde.' },
      { key: 'B', text: 'Todos los días hay exactamente 5 horas disponibles.' },
      { key: 'C', text: 'Hay más disponibilidad de jueves a sábado.' },
      { key: 'D', text: 'El sábado en la tarde no hay clases asignadas.' }
    ],
    correctAnswer: 'B',
    explanation: 'La afirmación incorrecta es que todos los días hay 5 horas disponibles. Al contar las horas no sombreadas (disponibles) en cada día, se puede ver que la cantidad varía entre los diferentes días.'
  },
  {
    id: 'q023',
    competency: Competency.Formulation,
    statement: 'De acuerdo con la información de la tabla de jabones, si se conservara la relación entre el contenido y el precio por unidad, ¿cuál debería ser el precio de la presentación de jabón líquido con contenido de 1.800 mL?',
    image: '/images/jabon.png',
    options: [
      { key: 'A', text: '$12.000' },
      { key: 'B', text: '$15.000' },
      { key: 'C', text: '$18.000' },
      { key: 'D', text: '$21.000' }
    ],
    correctAnswer: 'C',
    explanation: 'Si se mantiene la relación entre contenido y precio, y conociendo los precios de las otras presentaciones, se puede calcular proporcionalmente el precio para 1.800 mL.'
  },
  {
    id: 'q024',
    competency: Competency.Argumentation,
    statement: 'Al analizar los resultados del estudio de las aves, el científico afirma que la relación entre cada tiempo de las actividades del ave 1 y del ave 5 es 3:2. Esta afirmación es:',
    image: '/images/aves.png',
    options: [
      { key: 'A', text: 'Correcta para todas las actividades.' },
      { key: 'B', text: 'Incorrecta para algunas actividades.' },
      { key: 'C', text: 'Correcta solo para el tiempo de alimentación.' },
      { key: 'D', text: 'Incorrecta para todas las actividades.' }
    ],
    correctAnswer: 'B',
    explanation: 'La relación 3:2 no se mantiene constante para todas las actividades. Al comparar los tiempos del ave 1 con el ave 5, se puede ver que la proporción varía según la actividad.'
  },
  {
    id: 'q025',
    competency: Competency.Formulation,
    statement: 'La etiqueta del jabón debe especificar tres aspectos: presentación, contenido y aroma. De acuerdo con la información proporcionada donde cada presentación y contenido está disponible en tres aromas (natural, coco y vainilla), ¿cuántas etiquetas diferentes debe utilizar la fábrica?',
    image: '/images/jabon.png',
    options: [
      { key: 'A', text: '9 etiquetas diferentes' },
      { key: 'B', text: '12 etiquetas diferentes' },
      { key: 'C', text: '18 etiquetas diferentes' },
      { key: 'D', text: '24 etiquetas diferentes' }
    ],
    correctAnswer: 'C',
    explanation: 'Para calcular el total de etiquetas diferentes: 2 presentaciones × 3 contenidos × 3 aromas = 18 etiquetas diferentes'
  },
  {
    id: 'q026',
    competency: Competency.Argumentation,
    statement: 'A partir de los datos de la tabla de sismos, una persona predice que en el 2011 se presentarán exactamente 173 sismos de magnitud igual o superior a 6,0 grados. Esta predicción es:',
    image: '/images/sismos.png',
    options: [
      { key: 'A', text: 'Válida, porque ese es el promedio de sismos de esa magnitud en la década.' },
      { key: 'B', text: 'Inválida, porque los sismos no siguen un patrón exacto año tras año.' },
      { key: 'C', text: 'Válida, porque la tendencia muestra ese número de sismos.' },
      { key: 'D', text: 'Inválida, porque solo considera sismos de una magnitud específica.' }
    ],
    correctAnswer: 'B',
    explanation: 'La predicción exacta de sismos no es válida porque los eventos sísmicos son fenómenos naturales que no siguen un patrón determinístico y su ocurrencia tiene un componente aleatorio.'
  },
  {
    id: 'q027',
    competency: Competency.Formulation,
    statement: 'La inversión en seguridad vial se realiza el 10 de enero de cada año. En enero 10 de 2002, un euro equivalía a 2.800 pesos colombianos aproximadamente. Si se quiere calcular el valor de la inversión en pesos colombianos para ese año, se debe:',
    image: '/images/seguridad_vial.png',
    options: [
      { key: 'A', text: 'Multiplicar el valor en euros por 2.800' },
      { key: 'B', text: 'Dividir el valor en euros entre 2.800' },
      { key: 'C', text: 'Sumar 2.800 al valor en euros' },
      { key: 'D', text: 'Restar 2.800 al valor en euros' }
    ],
    correctAnswer: 'A',
    explanation: 'Para convertir de euros a pesos colombianos, se debe multiplicar el valor en euros por la tasa de cambio (2.800 pesos/euro).'
  },
  {
    id: 'q028',
    competency: Competency.Interpretation,
    statement: 'Los resultados del estudio de las aves indican que el ave 5 tarda más alimentándose que desplazándose. El tiempo adicional que tarda en alimentación comparado con el desplazamiento es de:',
    image: '/images/aves.png',
    options: [
      { key: 'A', text: '15 minutos' },
      { key: 'B', text: '20 minutos' },
      { key: 'C', text: '25 minutos' },
      { key: 'D', text: '30 minutos' }
    ],
    correctAnswer: 'C',
    explanation: 'En la tabla se puede ver que el ave 5 tarda 45 minutos en alimentación y 20 minutos en desplazamiento. La diferencia es 45 - 20 = 25 minutos.'
  },
  {
    id: 'q029',
    competency: Competency.Formulation,
    statement: '¿Cuál de los siguientes cocientes permite estimar mejor la cantidad de sismos mensuales durante la década estudiada?',
    image: '/images/sismos.png',
    options: [
      { key: 'A', text: 'Total de sismos de cada año dividido entre 12' },
      { key: 'B', text: 'Suma de sismos de magnitud superior a 5.0 dividida entre 120' },
      { key: 'C', text: 'Promedio anual de sismos dividido entre 12' },
      { key: 'D', text: 'Total de sismos de la década dividido entre 120' }
    ],
    correctAnswer: 'D',
    explanation: 'Para obtener un promedio mensual más preciso de toda la década, se debe dividir el total de sismos entre el número total de meses (10 años × 12 meses = 120 meses).'
  },
  {
    id: 'q030',
    competency: Competency.Interpretation,
    statement: 'La gráfica que muestra el porcentaje de ejecución del presupuesto, correspondiente al promedio 2002-2012, en cada mes es:',
    image: '/images/porcentaje_ejecucion.png',
    options: [
      { key: 'A', text: 'Una línea recta ascendente' },
      { key: 'B', text: 'Una curva exponencial' },
      { key: 'C', text: 'Una línea quebrada con altibajos' },
      { key: 'D', text: 'Una curva ascendente suave' }
    ],
    correctAnswer: 'D',
    explanation: 'La gráfica muestra una curva ascendente suave que representa el promedio de ejecución presupuestal a lo largo de los meses, sin cambios bruscos ni descensos.'
  },
  {
    id: 'q031',
    competency: Competency.Formulation,
    statement: 'La microempresa de productos de aseo otorga incentivos a los vendedores cuyas ventas semanales sean superiores a $500.000. La tabla muestra los registros de ventas de tres vendedores durante una semana. ¿Cuántos vendedores recibirán el incentivo?',
    image: '/images/jabon2.png',
    options: [
      { key: 'A', text: 'Ningún vendedor' },
      { key: 'B', text: 'Solo un vendedor' },
      { key: 'C', text: 'Dos vendedores' },
      { key: 'D', text: 'Los tres vendedores' }
    ],
    correctAnswer: 'C',
    explanation: 'Al sumar las ventas semanales de cada vendedor, dos de ellos superan los $500.000 establecidos como meta para recibir el incentivo.'
  },
  {
    id: 'q032',
    competency: Competency.Formulation,
    statement: 'Con base en la tabla de subsidio familiar de vivienda (SFV), para estimar el valor del crédito que debe solicitarse al banco se debe calcular:',
    image: '/images/subsidio.png',
    options: [
      { key: 'A', text: 'Valor vivienda - (SFV + ahorro)' },
      { key: 'B', text: 'Valor vivienda + (SFV + ahorro)' },
      { key: 'C', text: 'Valor vivienda - (SFV - ahorro)' },
      { key: 'D', text: '(Valor vivienda + SFV) - ahorro' }
    ],
    correctAnswer: 'A',
    explanation: 'El crédito necesario es la diferencia entre el valor total de la vivienda y la suma del subsidio más el ahorro disponible.'
  },
  {
    id: 'q033',
    competency: Competency.Argumentation,
    statement: 'Según la tabla de torneos de tenis, se desea saber cuál de los jugadores que aparecen en la gráfica consiguió un mayor porcentaje de victorias en las finales del Grand Slam. La conclusión de que fue el jugador C es incorrecta porque:',
    image: '/images/torneos.png',
    options: [
      { key: 'A', text: 'No ganó Roland Garros antes de los 24 años' },
      { key: 'B', text: 'El jugador A tiene 100% de torneos ganados' },
      { key: 'C', text: 'El jugador D tiene 77,8% de efectividad' },
      { key: 'D', text: 'No supera los torneos ganados del jugador A' }
    ],
    correctAnswer: 'C',
    explanation: 'El jugador D tiene una efectividad del 77,8% (14 victorias en 18 finales), mientras que el jugador C tiene una efectividad menor con 16 victorias en 23 finales (69,6%).'
  },
  {
    id: 'q034',
    competency: Competency.Interpretation,
    statement: 'En la institución educativa con dos cursos de grado undécimo mostrados en la tabla, ¿cuál es la proporción de mujeres respecto al total de estudiantes?',
    image: '/images/cursos.png',
    options: [
      { key: 'A', text: '3/5 del total' },
      { key: 'B', text: '2/3 del total' },
      { key: 'C', text: '1/2 del total' },
      { key: 'D', text: '4/7 del total' }
    ],
    correctAnswer: 'A',
    explanation: 'Total de mujeres: 22 + 23 = 45. Total de estudiantes: 45 mujeres + 30 hombres = 75. La proporción es 45/75 = 3/5.'
  },
  {
    id: 'q035',
    competency: Competency.Interpretation,
    statement: 'Observando la tabla de ingresos y subsidios de vivienda, una persona que observa la información elabora una gráfica. La representación más adecuada debería mostrar que:',
    image: '/images/ingreso_subsidio.png',
    options: [
      { key: 'A', text: 'A mayor ingreso, mayor subsidio' },
      { key: 'B', text: 'A mayor ingreso, menor subsidio' },
      { key: 'C', text: 'El subsidio es constante' },
      { key: 'D', text: 'El subsidio aumenta y luego disminuye' }
    ],
    correctAnswer: 'B',
    explanation: 'La tabla muestra que a medida que aumenta el ingreso en SMMLV, el valor del subsidio disminuye progresivamente.'
  },
  {
    id: 'q036',
    competency: Competency.Formulation,
    statement: 'Según la tabla del proceso de admisión universitaria y el esquema mostrado, si hay 600 aspirantes y cada grupo tiene 150 aspirantes, para ser admitido es suficiente que un aspirante:',
    image: '/images/aspirantes.png',
    options: [
      { key: 'A', text: 'Apruebe la prueba I solamente' },
      { key: 'B', text: 'Esté entre los mejores 24 de su grupo en la prueba II' },
      { key: 'C', text: 'Apruebe ambas pruebas sin importar su posición' },
      { key: 'D', text: 'Esté entre los 96 mejores del total de aspirantes' }
    ],
    correctAnswer: 'B',
    explanation: 'Para ser admitido, debe aprobar la prueba I y estar entre el 16% mejor de su grupo en la prueba II. En grupos de 150 aspirantes, esto significa estar entre los mejores 24 (150 × 0.16 = 24) de su grupo.'
  },
  {
    id: 'q037',
    competency: Competency.Interpretation,
    statement: 'El porcentaje de aumento en la ejecución del presupuesto en mayo de 2013, en comparación con el mes anterior, fue del 7%. Para verificar esta afirmación, se debe:',
    image: '/images/acumulados_salud.png',
    options: [
      { key: 'A', text: 'Comparar directamente los porcentajes de abril y mayo' },
      { key: 'B', text: 'Calcular la diferencia entre los porcentajes acumulados' },
      { key: 'C', text: 'Comparar con el promedio histórico de mayo' },
      { key: 'D', text: 'Calcular el porcentaje del presupuesto total' }
    ],
    correctAnswer: 'B',
    explanation: 'Se debe calcular la diferencia entre el porcentaje acumulado de mayo y el de abril para determinar el aumento en la ejecución del presupuesto.'
  },
  {
    id: 'q038',
    competency: Competency.Formulation,
    statement: 'Considerando el diseño de la fuente de chocolate de tres niveles, para calcular el volumen total de chocolate que puede contener, se debe:',
    image: '/images/fuente_chocolate.png',
    options: [
      { key: 'A', text: 'Sumar los volúmenes de los tres recipientes cilíndricos y restar el volumen del tubo' },
      { key: 'B', text: 'Multiplicar el volumen del recipiente más grande por tres' },
      { key: 'C', text: 'Calcular solo el volumen del recipiente inferior' },
      { key: 'D', text: 'Sumar los radios de los tres recipientes y multiplicar por la altura total' }
    ],
    correctAnswer: 'A',
    explanation: 'El volumen total es la suma de los volúmenes de los tres recipientes cilíndricos menos el espacio ocupado por el tubo central que permite la circulación del chocolate.'
  },
  {
    id: 'q039',
    competency: Competency.Interpretation,
    statement: 'Camilo quiere inscribirse a las clases de pilates y escoger el total de sesiones mensual en la que el costo por sesión sea de menor precio. Si Camilo elige tomar 2 sesiones semanales, ¿logra su propósito de que el costo por sesión sea el de menor precio?',
    image: '/images/pilates.png',
    options: [
      { key: 'A', text: 'Sí, porque paga menos en total' },
      { key: 'B', text: 'No, porque el costo por sesión es mayor' },
      { key: 'C', text: 'Sí, porque tiene más flexibilidad de horarios' },
      { key: 'D', text: 'No, porque hay menos horarios disponibles' }
    ],
    correctAnswer: 'B',
    explanation: 'Al dividir el costo mensual entre el número de sesiones, el costo por sesión es menor cuando se toman más sesiones por semana. Con 2 sesiones semanales no obtiene el menor costo por sesión.'
  },
  {
    id: 'q040',
    competency: Competency.Argumentation,
    statement: 'De acuerdo con la tabla que muestra la ejecución del presupuesto, el porcentaje acumulado de ejecución en un mes del 2013 nunca es menor que el del mes inmediatamente anterior porque:',
    image: '/images/acumulados_salud.png',
    options: [
      { key: 'A', text: 'El porcentaje de cada mes es mayor que el promedio 2002-2012' },
      { key: 'B', text: 'El porcentaje de cada mes es mayor que el máximo registrado' },
      { key: 'C', text: 'Al porcentaje anterior se le suma lo ejecutado en el mes actual' },
      { key: 'D', text: 'La ejecución mensual siempre es mayor que el mes anterior' }
    ],
    correctAnswer: 'C',
    explanation: 'Al ser un porcentaje acumulado, cada mes incluye todo lo ejecutado en los meses anteriores más lo ejecutado en el mes actual, por lo que el valor nunca puede disminuir.'
  },
  {
    id: 'q041',
    competency: Competency.Interpretation,
    statement: 'Según los datos de la tabla de aspirantes, del grupo que presentó la prueba II, ¿qué porcentaje aproximado logró superarla?',
    image: '/images/aspirantes2.png',
    options: [
      { key: 'A', text: '85%' },
      { key: 'B', text: '75%' },
      { key: 'C', text: '65%' },
      { key: 'D', text: '55%' }
    ],
    correctAnswer: 'C',
    explanation: 'Para calcular este porcentaje, se debe dividir el número de personas que superaron la prueba II entre el total que la presentó y multiplicar por 100.'
  },
  {
    id: 'q042',
    competency: Competency.Formulation,
    statement: 'En la distribución del presupuesto por regiones, si el sector "Resto del país" representa el 40% del total, y las regiones M y O tienen sectores iguales que suman el 35%, ¿qué porcentaje representa cada una de las regiones N y P?',
    image: '/images/presupuesto.png',
    options: [
      { key: 'A', text: '12.5% cada una' },
      { key: 'B', text: '15% cada una' },
      { key: 'C', text: '17.5% cada una' },
      { key: 'D', text: '20% cada una' }
    ],
    correctAnswer: 'A',
    explanation: 'Si el resto del país es 40% y M y O suman 35% (17.5% cada una), el 25% restante se divide entre N y P, resultando en 12.5% para cada una.'
  },
  {
    id: 'q043',
    competency: Competency.Interpretation,
    statement: 'Un avión que despega en dirección al extremo 32 de la pista, va hacia el:',
    image: '/images/aviones.png',
    options: [
      { key: 'A', text: 'Noreste' },
      { key: 'B', text: 'Noroeste' },
      { key: 'C', text: 'Sureste' },
      { key: 'D', text: 'Suroeste' }
    ],
    correctAnswer: 'A',
    explanation: 'El número 32 en una pista indica una dirección de 320 grados, que apunta hacia el Noreste. La numeración de las pistas se basa en la dirección magnética dividida por 10.'
  },
  {
    id: 'q044',
    competency: Competency.Formulation,
    statement: 'El promedio anual de sismos en la primera década del siglo XXI fue 3.783. Los años con el número de sismos más cercano y más lejano al promedio son:',
    image: '/images/sismos.png',
    options: [
      { key: 'A', text: '2004 y 2007' },
      { key: 'B', text: '2003 y 2010' },
      { key: 'C', text: '2005 y 2008' },
      { key: 'D', text: '2002 y 2009' }
    ],
    correctAnswer: 'A',
    explanation: 'Comparando el número de sismos de cada año con el promedio de 3.783, se puede determinar cuál año tuvo una cantidad más cercana y cuál más lejana a este valor.'
  },
  {
    id: 'q045',
    competency: Competency.Argumentation,
    statement: 'Patricia afirma que, de la forma en que su tía repartió el dinero de sus bienes, ella obtendrá más dinero que si la herencia se dividiera en partes iguales entre los familiares vivos según el esquema. Esta afirmación es:',
    image: '/images/herencia.png',
    options: [
      { key: 'A', text: 'Correcta, porque recibe la parte de su madre' },
      { key: 'B', text: 'Incorrecta, porque solo recibe la mitad de una quinta parte' },
      { key: 'C', text: 'Correcta, porque es beneficiaria directa' },
      { key: 'D', text: 'Incorrecta, porque hay más herederos vivos' }
    ],
    correctAnswer: 'B',
    explanation: 'La afirmación es incorrecta porque al recibir la mitad de una quinta parte (1/10 del total), obtiene menos que si la herencia se dividiera entre todos los familiares vivos por igual.'
  },
  {
    id: 'q046',
    competency: Competency.Formulation,
    statement: 'Según la tabla 1 del instructor de pilates, si una persona toma 3 sesiones semanales, el costo por sesión es:',
    image: '/images/pilates.png',
    options: [
      { key: 'A', text: '$25.000' },
      { key: 'B', text: '$30.000' },
      { key: 'C', text: '$35.000' },
      { key: 'D', text: '$40.000' }
    ],
    correctAnswer: 'A',
    explanation: 'Con 3 sesiones semanales, son 12 sesiones al mes. El costo mensual dividido entre el número de sesiones (300.000/12) da $25.000 por sesión.'
  },
  {
    id: 'q047',
    competency: Competency.Interpretation,
    statement: 'Analizando los resultados en torneos de Grand Slam según la superficie de juego, ¿qué jugador mostró mejor desempeño en canchas duras (Australia y EE.UU.) en comparación con otras superficies?',
    image: '/images/torneos.png',
    options: [
      { key: 'A', text: 'Jugador A' },
      { key: 'B', text: 'Jugador B' },
      { key: 'C', text: 'Jugador C' },
      { key: 'D', text: 'Jugador D' }
    ],
    correctAnswer: 'B',
    explanation: 'El jugador B ganó más torneos en canchas duras (6 títulos entre Australia y EE.UU.) que en otras superficies, mostrando una clara preferencia y mejor rendimiento en esta superficie.'
  },
  {
    id: 'q048',
    competency: Competency.Formulation,
    statement: 'Con base en la tabla de pilates, si un nuevo cliente desea tomar el paquete de menor costo por sesión y tiene disponibilidad completa, ¿cuántas sesiones semanales debería tomar?',
    image: '/images/pilates.png',
    options: [
      { key: 'A', text: '2 sesiones' },
      { key: 'B', text: '3 sesiones' },
      { key: 'C', text: '4 sesiones' },
      { key: 'D', text: '5 sesiones' }
    ],
    correctAnswer: 'D',
    explanation: 'El costo por sesión se calcula dividiendo el costo mensual entre el número total de sesiones al mes. A mayor número de sesiones semanales, menor es el costo por sesión individual.'
  },
  {
    id: 'q049',
    competency: Competency.Formulation,
    statement: 'En 2005, aproximadamente el 60% de la población del país son hombres. Para calcular el número de mujeres en el país se proponen dos métodos: I) Restar el 60% de la población total. II) Multiplicar la población total por dos quintos (40%). ¿Cuál(es) método(s) es(son) correcto(s)?',
    image: '/images/poblacion.png',
    options: [
      { key: 'A', text: 'Solo I' },
      { key: 'B', text: 'Solo II' },
      { key: 'C', text: 'I y II' },
      { key: 'D', text: 'Ninguno' }
    ],
    correctAnswer: 'C',
    explanation: 'Ambos métodos son correctos: I) Al restar el 60% (hombres) queda el 40% (mujeres). II) Multiplicar por 40% directamente da el número de mujeres.'
  },
  {
    id: 'q050',
    competency: Competency.Interpretation,
    statement: 'Según la tabla que muestra la distribución de los aspirantes en los grupos B y D por calificación, se puede afirmar que:',
    image: '/images/aspirantes3.png',
    options: [
      { key: 'A', text: 'El grupo B tiene mejor promedio general' },
      { key: 'B', text: 'Hay más estudiantes en el grupo D' },
      { key: 'C', text: 'Las calificaciones son más uniformes en el grupo B' },
      { key: 'D', text: 'El grupo D tiene menos estudiantes con calificación baja' }
    ],
    correctAnswer: 'D',
    explanation: 'Analizando la distribución de calificaciones, el grupo D tiene una menor cantidad de estudiantes en los rangos de calificación más bajos.'
  },
  {
    id: 'q051',
    competency: Competency.Argumentation,
    statement: 'En el análisis de los aspirantes clasificados en los grupos B y D, al comparar las distribuciones de calificaciones, se puede concluir que:',
    image: '/images/aspirantes3.png',
    options: [
      { key: 'A', text: 'La distribución es igual en ambos grupos' },
      { key: 'B', text: 'El grupo B tiene mayor dispersión de calificaciones' },
      { key: 'C', text: 'Las calificaciones más altas son más frecuentes en el grupo D' },
      { key: 'D', text: 'No hay diferencias significativas entre grupos' }
    ],
    correctAnswer: 'C',
    explanation: 'El grupo D muestra una tendencia hacia calificaciones más altas, con mayor frecuencia de estudiantes en los rangos superiores de calificación.'
  },
  {
    id: 'q052',
    competency: Competency.Formulation,
    statement: 'Una compañía de transporte tiene 15 buses con capacidad para 40 pasajeros cada uno. Si en promedio cada bus realiza 8 viajes diarios y opera 25 días al mes, ¿cuál es la capacidad máxima de pasajeros que puede transportar la compañía en un mes?',
    options: [
      { key: 'A', text: '120.000 pasajeros' },
      { key: 'B', text: '150.000 pasajeros' },
      { key: 'C', text: '180.000 pasajeros' },
      { key: 'D', text: '200.000 pasajeros' }
    ],
    correctAnswer: 'A',
    explanation: 'Cálculo: 15 buses × 40 pasajeros × 8 viajes × 25 días = 120.000 pasajeros al mes.'
  },
  {
    id: 'q053',
    competency: Competency.Interpretation,
    statement: 'En una biblioteca, el 40% de los libros son de ciencia, el 35% de literatura y el resto de historia. Si hay 500 libros en total, ¿cuántos son de historia?',
    options: [
      { key: 'A', text: '75 libros' },
      { key: 'B', text: '125 libros' },
      { key: 'C', text: '175 libros' },
      { key: 'D', text: '200 libros' }
    ],
    correctAnswer: 'B',
    explanation: 'Si el 40% es ciencia y 35% literatura, entonces 25% es historia. 25% de 500 = 125 libros de historia.'
  },
  {
    id: 'q054',
    competency: Competency.Argumentation,
    statement: 'Un estudiante afirma que si el promedio de tres números es 15, entonces al menos uno de ellos debe ser mayor que 15. Esta afirmación es:',
    options: [
      { key: 'A', text: 'Correcta, porque la suma debe ser 45' },
      { key: 'B', text: 'Incorrecta, podrían ser todos 15' },
      { key: 'C', text: 'Correcta, porque alguno compensa los menores' },
      { key: 'D', text: 'Incorrecta, porque no se conocen los números' }
    ],
    correctAnswer: 'B',
    explanation: 'La afirmación es incorrecta porque los tres números podrían ser iguales a 15, dando un promedio de 15 sin que ninguno sea mayor.'
  },
  {
    id: 'q055',
    competency: Competency.Formulation,
    statement: 'En una fábrica, el costo de producir x unidades está dado por C(x) = 200x + 1500. Si el precio de venta por unidad es de $500, ¿cuántas unidades debe vender para obtener una ganancia de $3000?',
    options: [
      { key: 'A', text: '15 unidades' },
      { key: 'B', text: '20 unidades' },
      { key: 'C', text: '25 unidades' },
      { key: 'D', text: '30 unidades' }
    ],
    correctAnswer: 'D',
    explanation: 'Ganancia = Ingresos - Costos. 3000 = 500x - (200x + 1500). Resolviendo: 4500 = 300x. Por lo tanto, x = 30 unidades.'
  },
  {
    id: 'q056',
    competency: Competency.Interpretation,
    statement: 'En un conjunto de datos, la mediana es 15 y el promedio es 17. Esto significa que:',
    options: [
      { key: 'A', text: 'Hay más números mayores que menores que 15' },
      { key: 'B', text: 'Los datos están sesgados hacia valores altos' },
      { key: 'C', text: 'La mayoría de los datos son mayores que 17' },
      { key: 'D', text: 'No hay valores extremos en el conjunto' }
    ],
    correctAnswer: 'B',
    explanation: 'Cuando el promedio es mayor que la mediana, indica que hay valores altos que "jalan" el promedio hacia arriba, lo que sugiere un sesgo positivo en la distribución.'
  },
  {
    id: 'q057',
    competency: Competency.Formulation,
    statement: 'Un almacén ofrece un descuento del 20% sobre el precio marcado. Si un artículo tiene marcado $45.000, ¿cuánto debe pagar el cliente incluyendo un IVA del 19% sobre el precio con descuento?',
    options: [
      { key: 'A', text: '$42.840' },
      { key: 'B', text: '$45.220' },
      { key: 'C', text: '$47.430' },
      { key: 'D', text: '$49.980' }
    ],
    correctAnswer: 'A',
    explanation: 'Precio con descuento = 45.000 × 0.8 = 36.000. Precio final con IVA = 36.000 × 1.19 = 42.840.'
  },
  {
    id: 'q058',
    competency: Competency.Formulation,
    statement: 'Un terreno rectangular tiene un perímetro de 100 metros. Si el largo es el doble del ancho, ¿cuál es el área del terreno?',
    options: [
      { key: 'A', text: '250 metros cuadrados' },
      { key: 'B', text: '400 metros cuadrados' },
      { key: 'C', text: '500 metros cuadrados' },
      { key: 'D', text: '600 metros cuadrados' }
    ],
    correctAnswer: 'C',
    explanation: 'Si el perímetro es 100m y el largo es 2x, entonces: 2(2x + x) = 100. Por lo tanto, x = 16.67m (ancho) y largo = 33.33m. Área = 16.67 × 33.33 = 500 metros cuadrados.'
  },
  {
    id: 'q059',
    competency: Competency.Interpretation,
    statement: 'En una urna hay 3 bolas rojas, 4 azules y 5 verdes. Si se extrae una bola al azar, la probabilidad de que NO sea verde es:',
    options: [
      { key: 'A', text: '7/12' },
      { key: 'B', text: '5/12' },
      { key: 'C', text: '1/3' },
      { key: 'D', text: '3/5' }
    ],
    correctAnswer: 'A',
    explanation: 'Total de bolas = 12. Bolas no verdes = 7 (3 rojas + 4 azules). Probabilidad = 7/12.'
  },
  {
    id: 'q060',
    competency: Competency.Argumentation,
    statement: 'Una empresa afirma que el crecimiento de sus ventas es exponencial porque cada mes vende el doble que el mes anterior. Si en enero vendió 100 unidades, en abril habrá vendido:',
    options: [
      { key: 'A', text: '400 unidades' },
      { key: 'B', text: '600 unidades' },
      { key: 'C', text: '800 unidades' },
      { key: 'D', text: '800 unidades' }
    ],
    correctAnswer: 'C',
    explanation: 'En un crecimiento exponencial donde se duplica cada mes: Enero = 100, Febrero = 200, Marzo = 400, Abril = 800 unidades.'
  },
  {
    id: 'q061',
    competency: Competency.Formulation,
    statement: 'Un inversionista recibe una tasa de interés compuesto del 10% anual. Si invierte $1.000.000, ¿cuánto dinero tendrá después de 2 años?',
    options: [
      { key: 'A', text: '$1.200.000' },
      { key: 'B', text: '$1.210.000' },
      { key: 'C', text: '$1.210.100' },
      { key: 'D', text: '$1.100.000' }
    ],
    correctAnswer: 'B',
    explanation: 'Con interés compuesto: 1.000.000 × (1 + 0.10)² = 1.000.000 × 1.21 = 1.210.000. El primer año gana 100.000 y el segundo año gana 110.000.'
  },
  {
    id: 'q062',
    competency: Competency.Interpretation,
    statement: 'En una encuesta sobre preferencias deportivas, el 40% practica fútbol, el 30% baloncesto, y el 15% practica ambos deportes. El porcentaje que no practica ninguno de estos deportes es:',
    options: [
      { key: 'A', text: '30%' },
      { key: 'B', text: '45%' },
      { key: 'C', text: '55%' },
      { key: 'D', text: '70%' }
    ],
    correctAnswer: 'B',
    explanation: 'Usando la fórmula de inclusión-exclusión: Total = Fútbol + Baloncesto - Ambos = 40% + 30% - 15% = 55%. Por lo tanto, 100% - 55% = 45% no practica ninguno.'
  },
  {
    id: 'q063',
    competency: Competency.Formulation,
    statement: 'Una tubería puede llenar un tanque en 4 horas, mientras que otra lo puede llenar en 6 horas. Si ambas tuberías se abren simultáneamente, ¿en cuántas horas se llenará el tanque?',
    options: [
      { key: 'A', text: '2.0 horas' },
      { key: 'B', text: '2.4 horas' },
      { key: 'C', text: '3.0 horas' },
      { key: 'D', text: '5.0 horas' }
    ],
    correctAnswer: 'B',
    explanation: 'Primera tubería llena 1/4 del tanque por hora, segunda tubería 1/6 por hora. Juntas llenan (1/4 + 1/6 = 5/12) por hora. Para llenar el tanque: 1 ÷ (5/12) = 2.4 horas.'
  },
  {
    id: 'q064',
    competency: Competency.Interpretation,
    statement: 'En una empresa, el 60% de los empleados son mujeres. Si hay 200 empleados en total y el 30% de las mujeres ocupan cargos directivos, ¿cuántas mujeres NO ocupan cargos directivos?',
    options: [
      { key: 'A', text: '84 mujeres' },
      { key: 'B', text: '120 mujeres' },
      { key: 'C', text: '36 mujeres' },
      { key: 'D', text: '140 mujeres' }
    ],
    correctAnswer: 'A',
    explanation: 'Total de mujeres = 60% de 200 = 120 mujeres. Mujeres en cargos directivos = 30% de 120 = 36. Por lo tanto, mujeres que NO ocupan cargos directivos = 120 - 36 = 84 mujeres.'
  },
  {
    id: 'q065',
    competency: Competency.Formulation,
    statement: 'Una empresa produce artículos con un costo fijo mensual de $5.000.000 más un costo variable de $8.000 por unidad. Si cada artículo se vende a $20.000, ¿cuántas unidades debe vender para obtener una utilidad de $4.000.000?',
    options: [
      { key: 'A', text: '650 unidades' },
      { key: 'B', text: '750 unidades' },
      { key: 'C', text: '850 unidades' },
      { key: 'D', text: '950 unidades' }
    ],
    correctAnswer: 'B',
    explanation: 'Utilidad = Ingresos - Costos. 4.000.000 = 20.000x - (5.000.000 + 8.000x). Resolviendo: 4.000.000 = 12.000x - 5.000.000. Por lo tanto, x = 750 unidades.'
  },
  {
    id: 'q066',
    competency: Competency.Argumentation,
    statement: 'En un conjunto de datos, el promedio es significativamente mayor que la mediana. Un analista concluye que esto se debe a que hay valores muy bajos que afectan el promedio. Esta conclusión es:',
    options: [
      { key: 'A', text: 'Correcta, porque los valores bajos alejan el promedio de la mediana' },
      { key: 'B', text: 'Incorrecta, porque los valores bajos disminuirían el promedio' },
      { key: 'C', text: 'Correcta, porque la mediana no se ve afectada por valores extremos' },
      { key: 'D', text: 'Incorrecta, porque la mediana sería menor que el promedio' }
    ],
    correctAnswer: 'B',
    explanation: 'La conclusión es incorrecta porque cuando el promedio es mayor que la mediana, indica la presencia de valores altos (no bajos) que "jalan" el promedio hacia arriba. Los valores muy bajos tendrían el efecto contrario.'
  },
  {
    id: 'q067',
    competency: Competency.Interpretation,
    statement: 'En una tienda, el precio de un producto aumentó 20% en enero y luego disminuyó 20% en febrero. Respecto al precio inicial, el precio final:',
    options: [
      { key: 'A', text: 'No cambió' },
      { key: 'B', text: 'Disminuyó 4%' },
      { key: 'C', text: 'Aumentó 4%' },
      { key: 'D', text: 'Disminuyó 40%' }
    ],
    correctAnswer: 'B',
    explanation: 'Si el precio inicial es P, después del aumento es 1.2P. Luego de la disminución es 1.2P × 0.8 = 0.96P, es decir, 96% del precio inicial, lo que representa una disminución del 4%.'
  },
  {
    id: 'q068',
    competency: Competency.Formulation,
    statement: 'Un proveedor ofrece un descuento del 15% por compras superiores a $500.000. Si un cliente necesita 40 unidades de un producto que cuesta $13.500 cada una, ¿cuánto debe pagar?',
    options: [
      { key: 'A', text: '$459.000' },
      { key: 'B', text: '$540.000' },
      { key: 'C', text: '$459.900' },
      { key: 'D', text: '$458.000' }
    ],
    correctAnswer: 'A',
    explanation: 'Costo total sin descuento = 40 × $13.500 = $540.000. Como supera $500.000, aplica el descuento del 15%. Precio final = $540.000 × (1 - 0.15) = $459.000.'
  },
  {
    id: 'q069',
    competency: Competency.Interpretation,
    statement: 'En una empresa, el 25% de los empleados tiene entre 20 y 30 años, el 45% entre 31 y 40 años, y el resto tiene más de 40 años. Si hay 200 empleados, ¿cuántos tienen más de 40 años?',
    options: [
      { key: 'A', text: '50 empleados' },
      { key: 'B', text: '60 empleados' },
      { key: 'C', text: '70 empleados' },
      { key: 'D', text: '80 empleados' }
    ],
    correctAnswer: 'B',
    explanation: '25% + 45% = 70% tienen 40 años o menos, por lo tanto 30% tiene más de 40 años. 30% de 200 = 60 empleados.'
  },
  {
    id: 'q070',
    competency: Competency.Formulation,
    statement: 'Una empresa vende un producto a $12.000 la unidad. Los costos fijos mensuales son $3.000.000 y el costo variable por unidad es $7.000. ¿Cuántas unidades debe vender mensualmente para no tener pérdidas ni ganancias?',
    options: [
      { key: 'A', text: '500 unidades' },
      { key: 'B', text: '600 unidades' },
      { key: 'C', text: '700 unidades' },
      { key: 'D', text: '800 unidades' }
    ],
    correctAnswer: 'B',
    explanation: 'En el punto de equilibrio: Ingresos = Costos. 12.000x = 3.000.000 + 7.000x. 5.000x = 3.000.000. Por lo tanto, x = 600 unidades.'
  },
  {
    id: 'q071',
    competency: Competency.Interpretation,
    statement: 'En una encuesta a 400 personas sobre sus hábitos de lectura, el 40% lee periódicos, el 35% lee revistas y el 15% lee ambos. ¿Qué porcentaje de personas lee al menos uno de los dos?',
    options: [
      { key: 'A', text: '75%' },
      { key: 'B', text: '60%' },
      { key: 'C', text: '65%' },
      { key: 'D', text: '55%' }
    ],
    correctAnswer: 'B',
    explanation: 'Usando la fórmula de inclusión-exclusión: Total = Periódicos + Revistas - Ambos = 40% + 35% - 15% = 60%.'
  },
  {
    id: 'q072',
    competency: Competency.Argumentation,
    statement: 'Un analista afirma que si el promedio de ventas mensuales del último semestre fue de 1.000 unidades, entonces en cada mes se vendieron exactamente 1.000 unidades. Esta afirmación es:',
    options: [
      { key: 'A', text: 'Correcta, porque el promedio representa el valor típico' },
      { key: 'B', text: 'Incorrecta, porque las ventas pueden variar mes a mes' },
      { key: 'C', text: 'Correcta, porque la suma total es 6.000 unidades' },
      { key: 'D', text: 'Incorrecta, porque faltan datos de otros semestres' }
    ],
    correctAnswer: 'B',
    explanation: 'La afirmación es incorrecta porque el promedio es una medida de tendencia central que no implica que todos los valores sean iguales. Las ventas mensuales pueden variar por encima o por debajo de 1.000, manteniendo ese promedio.'
  },
  {
    id: 'q073',
    competency: Competency.Formulation,
    statement: 'Una empresa aumenta el salario de sus empleados según su antigüedad: 5% entre 1 y 2 años, 8% entre 3 y 4 años, y 12% para 5 o más años. Si un empleado con 4 años gana $2.500.000, ¿cuánto ganaba inicialmente?',
    options: [
      { key: 'A', text: '$2.314.815' },
      { key: 'B', text: '$2.250.000' },
      { key: 'C', text: '$2.300.000' },
      { key: 'D', text: '$2.275.000' }
    ],
    correctAnswer: 'A',
    explanation: 'Con 4 años de antigüedad, tuvo un aumento del 8%. Si X es el salario inicial: X × (1 + 0.08) = 2.500.000. Por lo tanto, X = 2.500.000/1.08 = 2.314.815.'
  },
  {
    id: 'q074',
    competency: Competency.Interpretation,
    statement: 'En un almacén, las ventas del primer trimestre fueron: enero $45 millones, febrero $50 millones y marzo $55 millones. El porcentaje de aumento mensual fue:',
    options: [
      { key: 'A', text: 'Constante del 10%' },
      { key: 'B', text: 'Variable, aproximadamente 11% y 10%' },
      { key: 'C', text: 'Constante del 5%' },
      { key: 'D', text: 'Variable, aproximadamente 9% y 12%' }
    ],
    correctAnswer: 'B',
    explanation: 'De enero a febrero: (50-45)/45 = 11.11%. De febrero a marzo: (55-50)/50 = 10%. Los aumentos fueron variables pero cercanos: 11.11% y 10%.'
  },
  {
    id: 'q075',
    competency: Competency.Formulation,
    statement: 'En una fábrica, la producción aumenta 20% cada hora durante las primeras 4 horas. Si en la primera hora se producen 100 unidades, ¿cuántas unidades se producen en la cuarta hora?',
    options: [
      { key: 'A', text: '160 unidades' },
      { key: 'B', text: '172.8 unidades' },
      { key: 'C', text: '144 unidades' },
      { key: 'D', text: '180 unidades' }
    ],
    correctAnswer: 'B',
    explanation: 'Primera hora: 100. Segunda: 120. Tercera: 144. Cuarta: 172.8 unidades. Cada hora aumenta 20% respecto a la anterior.'
  },
  {
    id: 'q076',
    competency: Competency.Argumentation,
    statement: 'Un gerente afirma que si las ventas del segundo semestre fueron 20% mayores que las del primero, entonces cada mes del segundo semestre superó a su correspondiente del primer semestre. Esta afirmación es:',
    options: [
      { key: 'A', text: 'Correcta, porque el total aumentó 20%' },
      { key: 'B', text: 'Incorrecta, porque el aumento pudo concentrarse en algunos meses' },
      { key: 'C', text: 'Correcta, porque la tendencia fue creciente' },
      { key: 'D', text: 'Incorrecta, porque falta información de otros años' }
    ],
    correctAnswer: 'B',
    explanation: 'La afirmación es incorrecta porque un aumento del 20% en el total semestral no garantiza que cada mes haya sido mayor. El aumento pudo concentrarse en algunos meses mientras otros pudieron ser menores.'
  },
  {
    id: 'q077',
    competency: Competency.Interpretation,
    statement: 'En una empresa, los gastos mensuales se distribuyen así: 40% en personal, 25% en materias primas, 20% en servicios y el resto en otros gastos. Si los gastos totales son $50 millones, ¿cuánto se gasta en otros rubros?',
    options: [
      { key: 'A', text: '$7.5 millones' },
      { key: 'B', text: '$8.5 millones' },
      { key: 'C', text: '$7 millones' },
      { key: 'D', text: '$6.5 millones' }
    ],
    correctAnswer: 'A',
    explanation: '40% + 25% + 20% = 85% en los tres rubros principales. Otros gastos = 15%. 15% de $50 millones = $7.5 millones.'
  },
  {
    id: 'q078',
    competency: Competency.Formulation,
    statement: 'Una inversión de $10 millones generó intereses de $200.000 en un mes. La tasa de interés mensual fue:',
    options: [
      { key: 'A', text: '2%' },
      { key: 'B', text: '2.5%' },
      { key: 'C', text: '1.5%' },
      { key: 'D', text: '3%' }
    ],
    correctAnswer: 'A',
    explanation: 'Tasa de interés = (Intereses/Capital) × 100. ($200.000/$10.000.000) × 100 = 0.02 × 100 = 2%'
  },
  {
    id: 'q079',
    competency: Competency.Interpretation,
    statement: 'En un grupo de 100 estudiantes, la nota promedio fue 3.8 y la mediana 3.6. Esto sugiere que:',
    options: [
      { key: 'A', text: 'La mayoría obtuvo notas superiores a 3.8' },
      { key: 'B', text: 'Hay algunas notas muy altas que elevan el promedio' },
      { key: 'C', text: 'La distribución de notas es simétrica' },
      { key: 'D', text: 'La mitad del grupo obtuvo menos de 3.8' }
    ],
    correctAnswer: 'B',
    explanation: 'Cuando el promedio (3.8) es mayor que la mediana (3.6), indica que hay valores altos que "jalan" el promedio hacia arriba, sugiriendo la presencia de algunas notas muy altas en la distribución.'
  },
  {
    id: 'q080',
    competency: Competency.Formulation,
    statement: 'Un comerciante compra productos a $8.000 la unidad. Si quiere obtener una utilidad del 25% sobre el precio de venta, ¿a qué precio debe vender cada unidad?',
    options: [
      { key: 'A', text: '$10.000' },
      { key: 'B', text: '$10.667' },
      { key: 'C', text: '$11.000' },
      { key: 'D', text: '$10.500' }
    ],
    correctAnswer: 'B',
    explanation: 'Si el precio de venta es P y queremos que 0.25P sea la utilidad: P - 8.000 = 0.25P. Resolviendo: 0.75P = 8.000. Por lo tanto, P = 8.000/0.75 = 10.667.'
  }
];
