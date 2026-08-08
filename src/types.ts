export type OperationType = 'Venta' | 'Alquiler' | 'Alquiler Temporal';

export type PropertyType = 'Departamento' | 'Casa' | 'PH' | 'Oficina' | 'Lote / Terreno';

export type PropertyStatus = 'Disponible' | 'Reservada' | 'Vendida';

export interface Property {
  id: string;
  title: string;
  operation: OperationType;
  propertyType: PropertyType;
  location: string;
  address: string;
  priceUSD: number;
  priceARS?: number;
  bedrooms: number;
  bathrooms: number;
  ambientes: number;
  surfaceM2: number;
  status: PropertyStatus;
  featured: boolean;
  photos: string[];
  description: string;
  amenities: string[];
  curatorNote: string;
  yearBuilt?: number;
  expensesARS?: number;
}

export interface PropertyFilter {
  operation: string;
  propertyType: string;
  location: string;
  minPrice: number | '';
  maxPrice: number | '';
  rooms: string;
  searchKeyword: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  bullets: string[];
  ctaText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
}

export interface ValuationFormData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  location: string;
  address: string;
  rooms: string;
  comments: string;
}
