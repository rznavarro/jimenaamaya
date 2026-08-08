import { BlogPost } from '../types';

export const mockBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'El Arte de Habitar Recoleta: Arquitectura Francesa y Confort Moderno',
    date: '12 de Julio, 2026',
    readTime: '5 min de lectura',
    category: 'Arquitectura & Estilo',
    author: 'Jimena Amaya',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Analizamos las claves para poner en valor un piso de época en Recoleta sin perder los detalles artesanales de principios del siglo XX.',
    content: 'Habitar Recoleta es dialogar constantemente con la historia urbana de Buenos Aires. Los petit hôtels y edificios de renta construidos entre 1890 y 1940 poseen una nobleza constructiva difícil de igualar en la actualidad...'
  },
  {
    id: 'blog-2',
    title: 'Home Staging: Cómo Acelerar la Venta de tu Propiedad un 40%',
    date: '28 de Junio, 2026',
    readTime: '4 min de lectura',
    category: 'Curaduría',
    author: 'Santiago del Campo',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Un inmueble no se vende solo por metros cuadrados; se vende por la emoción de proyectarse en él. Descubrí el impacto de la curaduría de interiores.',
    content: 'El Home Staging no es decoración de interiores tradicional, sino una estrategia de marketing inmobiliario enfocada en la percepción espacial...'
  },
  {
    id: 'blog-3',
    title: 'Tendencias del Mercado Inmobiliario en Buenos Aires 2026',
    date: '15 de Mayo, 2026',
    readTime: '6 min de lectura',
    category: 'Mercado',
    author: 'Jimena Amaya',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'El resurgimiento del crédito hipotecario y el renovado interés de inversores por enclaves de patrimonio arquitectónico.',
    content: 'El mercado inmobiliario porteño muestra señales de consolidación en el segmento boutique. Analizamos qué buscan hoy los compradores exigentes...'
  }
];
