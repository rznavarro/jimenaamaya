import { ServiceItem } from '../types';

export const mockServices: ServiceItem[] = [
  {
    id: 'tasacion',
    title: 'TASACIÓN PROFESIONAL',
    subtitle: 'Valuación Estratégica de Mercado',
    shortDesc: 'Valuación de mercado con informe detallado',
    fullDesc: 'Determinamos el valor real y competitivo de tu propiedad basándonos en un riguroso análisis comparativo de mercado, métricas de demanda activa en Buenos Aires y proyección patrimonial.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Análisis técnico de superficie, ubicación y estado de conservación',
      'Estudio comparativo de transacciones reales ejecutadas en la zona',
      'Informe escrito detallado con sugerencias para optimizar valor',
      'Asesoramiento fiscal y legal integral en cada etapa'
    ],
    ctaText: 'Solicitar Tasación Sin Cargo'
  },
  {
    id: 'curaduria',
    title: 'CURADURÍA INMOBILIARIA',
    subtitle: 'Selección & Presentación Exclusiva',
    shortDesc: 'Selección y presentación estratégica de tu propiedad',
    fullDesc: 'Tratamos cada propiedad como una pieza de arquitectura única. Diseñamos un plan de comunicación personalizado para destacar su identidad visual, narrativa histórica y potencial habitacional.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Fotografía profesional de arquitectura y producción de video HDR',
      'Redacción de narrativa personalizada para la historia del inmueble',
      'Difusión segmentada para red de clientes calificados e inversores',
      'Open House privado y visitas personalizadas con Jimena Amaya'
    ],
    ctaText: 'Conocer Proceso de Curaduría'
  },
  {
    id: 'alquiler',
    title: 'ALQUILER TEMPORAL / PERMANENTE',
    subtitle: 'Gestión Integral de Locación',
    shortDesc: 'Gestión integral de locación, con o sin muebles',
    fullDesc: 'Ofrecemos soluciones de locación con garantías de máxima seguridad y liquidez, tanto para propietarios como para inquilinos corporativos o diplomáticos.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Verificación exhaustiva de antecedentes y garantías financieras',
      'Redacción de contratos actualizados bajo normativa legal vigente',
      'Servicio de administración mensual de cobro y mantenimiento',
      'Equipamiento llave en mano opcional para alquileres temporales'
    ],
    ctaText: 'Publicar o Buscar Alquiler'
  },
  {
    id: 'staging',
    title: 'HOME STAGING',
    subtitle: 'Intervención de Interiores',
    shortDesc: 'Puesta en valor con la curaduría de Santiago del Campo',
    fullDesc: 'Transformamos espacial y estéticamente el inmueble antes de salir al mercado. Con la curaduría de Santiago del Campo, optimizamos la luz, distribución de mobiliario y texturas para maximizar su atractivo y reducir el tiempo de venta.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Diagnóstico espacial preliminar con propuesta conceptual',
      'Despersonalización y optimización de iluminación natural',
      'Montaje temporal de obras de arte, objetos de diseño y mobiliario',
      'Aumento comprobado del valor percibido y aceleración de cierre'
    ],
    ctaText: 'Ver Casos de Antes y Después'
  }
];
