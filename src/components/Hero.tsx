import React, { useState } from 'react';
import { Search, ArrowRight, SlidersHorizontal, MapPin, Home, DollarSign, Building } from 'lucide-react';
import { PropertyFilter } from '../types';

interface HeroProps {
  onSearch: (filter: Partial<PropertyFilter>) => void;
  onExploreProperties: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onExploreProperties }) => {
  const [operation, setOperation] = useState('Todas');
  const [propertyType, setPropertyType] = useState('Todas');
  const [location, setLocation] = useState('Todas');
  const [priceRange, setPriceRange] = useState('Todas');
  const [rooms, setRooms] = useState('Todas');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let minPrice: number | '' = '';
    let maxPrice: number | '' = '';

    if (priceRange === 'under500k') {
      maxPrice = 500000;
    } else if (priceRange === '500k-1m') {
      minPrice = 500000;
      maxPrice = 1000000;
    } else if (priceRange === 'over1m') {
      minPrice = 1000000;
    }

    onSearch({
      operation: operation === 'Todas' ? '' : operation,
      propertyType: propertyType === 'Todas' ? '' : propertyType,
      location: location === 'Todas' ? '' : location,
      minPrice,
      maxPrice,
      rooms: rooms === 'Todas' ? '' : rooms
    });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#1A3837]">
      {/* Background Image with Dark Vignette Parallax Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Propiedad Exclusiva Buenos Aires"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102423] via-[#1A3837]/70 to-black/50" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-[#FAF8F5] pt-12">
        {/* Brand Headline & Subtitle */}
        <div className="mb-10 animate-fadeIn">
          <p className="font-nikkei text-xs sm:text-sm uppercase tracking-[0.3em] text-[#C89B51] mb-3">
            Inmobiliaria Boutique · Buenos Aires
          </p>
          <h1 className="font-louize text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#FAF8F5] mb-6 drop-shadow-md">
            Relaciones Inmobiliarias <br className="hidden sm:inline" />
            <span className="italic font-light text-[#EFECE6]">que trascienden el metro cuadrado</span>
          </h1>
          <p className="font-goudy text-lg sm:text-xl text-[#FAF8F5]/90 max-w-2xl mx-auto leading-relaxed">
            Curaduría de propiedades de alto patrimonio en Recoleta, Palermo Chico, Barrio Norte, Belgrano y Zona Norte.
          </p>
        </div>

        {/* Complete Search Form (Section 4.1 from Metaprompt) */}
        <div className="bg-[#102423]/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#C89B51]/30 shadow-2xl max-w-4xl mx-auto text-left">
          {/* Quick Operation Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-6 pb-4 border-b border-[#FAF8F5]/10">
            <span className="text-xs uppercase tracking-widest text-[#C89B51] font-medium mr-2 hidden sm:inline">
              Operación:
            </span>
            {['Todas', 'Venta', 'Alquiler', 'Alquiler Temporal'].map((op) => (
              <button
                key={op}
                type="button"
                onClick={() => setOperation(op)}
                className={`text-xs uppercase tracking-wider px-4 py-1.5 rounded-full transition-all ${
                  operation === op
                    ? 'bg-[#C89B51] text-[#102423] font-semibold shadow-sm'
                    : 'text-[#FAF8F5]/70 hover:text-[#FAF8F5] hover:bg-white/10'
                }`}
              >
                {op}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            {/* 1. Tipo de Propiedad */}
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-[#C89B51] font-medium flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                <span>Tipo de Propiedad</span>
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full border-bottom-hueso py-2.5 text-sm text-[#FAF8F5] focus:outline-none cursor-pointer"
              >
                <option value="Todas" className="bg-[#102423] text-white">Todas las propiedades</option>
                <option value="Departamento" className="bg-[#102423] text-white">Departamento / Piso</option>
                <option value="Casa" className="bg-[#102423] text-white">Casa / Petit Hôtel</option>
                <option value="PH" className="bg-[#102423] text-white">PH estilo Loft</option>
                <option value="Oficina" className="bg-[#102423] text-white">Oficina / Comercial</option>
                <option value="Lote / Terreno" className="bg-[#102423] text-white">Lote / Terreno</option>
              </select>
            </div>

            {/* 2. Ubicación */}
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-[#C89B51] font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Ubicación / Barrio</span>
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border-bottom-hueso py-2.5 text-sm text-[#FAF8F5] focus:outline-none cursor-pointer"
              >
                <option value="Todas" className="bg-[#102423] text-white">Todos los barrios</option>
                <option value="Recoleta" className="bg-[#102423] text-white">Recoleta</option>
                <option value="Palermo Chico" className="bg-[#102423] text-white">Palermo Chico / Barrio Parque</option>
                <option value="Palermo Soho" className="bg-[#102423] text-white">Palermo Soho / Hollywood</option>
                <option value="Barrio Norte" className="bg-[#102423] text-white">Barrio Norte</option>
                <option value="Belgrano R" className="bg-[#102423] text-white">Belgrano / Belgrano R</option>
                <option value="San Isidro" className="bg-[#102423] text-white">San Isidro / Zona Norte</option>
              </select>
            </div>

            {/* 3. Rango de Precio (Metaprompt 4.1 addition) */}
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-[#C89B51] font-medium flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5" />
                <span>Rango de Precio</span>
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full border-bottom-hueso py-2.5 text-sm text-[#FAF8F5] focus:outline-none cursor-pointer"
              >
                <option value="Todas" className="bg-[#102423] text-white">Cualquier presupuesto</option>
                <option value="under500k" className="bg-[#102423] text-white">Hasta USD 500.000</option>
                <option value="500k-1m" className="bg-[#102423] text-white">USD 500k - USD 1M</option>
                <option value="over1m" className="bg-[#102423] text-white">Más de USD 1.000.000</option>
              </select>
            </div>

            {/* Search Submit Button using search-btn Brand Pattern */}
            <div className="pt-2 sm:pt-0">
              <button
                type="submit"
                className="search-btn w-full justify-center bg-[#B84A39] hover:bg-[#973A2B] text-white py-3 px-6 rounded-xl shadow-lg transition-all"
              >
                <span>Buscar Propiedades</span>
                <div className="search-icon bg-white/20 border border-white/40">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>
          </form>
        </div>

        {/* Secondary Explorer Link */}
        <div className="mt-8">
          <button
            onClick={onExploreProperties}
            className="text-xs uppercase tracking-[0.2em] text-[#FAF8F5]/80 hover:text-[#C89B51] transition-colors underline underline-offset-8"
          >
            o explorá el catálogo completo de propiedades
          </button>
        </div>
      </div>
    </section>
  );
};
