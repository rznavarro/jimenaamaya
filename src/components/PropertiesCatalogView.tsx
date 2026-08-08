import React, { useState } from 'react';
import { Property, PropertyFilter } from '../types';
import { PropertyCard } from './PropertyCard';
import { Search, Filter, RefreshCw, Building, MapPin, DollarSign, SlidersHorizontal } from 'lucide-react';

interface PropertiesCatalogViewProps {
  properties: Property[];
  initialFilter?: Partial<PropertyFilter>;
  onSelectProperty: (property: Property) => void;
}

export const PropertiesCatalogView: React.FC<PropertiesCatalogViewProps> = ({
  properties,
  initialFilter,
  onSelectProperty
}) => {
  const [operation, setOperation] = useState(initialFilter?.operation || '');
  const [propertyType, setPropertyType] = useState(initialFilter?.propertyType || '');
  const [location, setLocation] = useState(initialFilter?.location || '');
  const [priceRange, setPriceRange] = useState('');
  const [keyword, setKeyword] = useState(initialFilter?.searchKeyword || '');

  const handleReset = () => {
    setOperation('');
    setPropertyType('');
    setLocation('');
    setPriceRange('');
    setKeyword('');
  };

  const filteredProperties = properties.filter((p) => {
    if (operation && p.operation !== operation) return false;
    if (propertyType && p.propertyType !== propertyType) return false;
    if (location && p.location !== location) return false;

    if (priceRange === 'under500k' && p.priceUSD > 500000) return false;
    if (priceRange === '500k-1m' && (p.priceUSD < 500000 || p.priceUSD > 1000000)) return false;
    if (priceRange === 'over1m' && p.priceUSD < 1000000) return false;

    if (keyword) {
      const q = keyword.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchLoc = p.location.toLowerCase().includes(q);
      const matchAddr = p.address.toLowerCase().includes(q);
      const matchNote = p.curatorNote.toLowerCase().includes(q);
      if (!matchTitle && !matchLoc && !matchAddr && !matchNote) return false;
    }

    return true;
  });

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <p className="font-nikkei text-xs uppercase tracking-[0.25em] text-[#C89B51] mb-2 font-medium">
          Colección Completa · Buenos Aires
        </p>
        <h1 className="font-louize text-3xl sm:text-5xl text-[#B84A39] mb-3">
          Catálogo de Propiedades
        </h1>
        <p className="font-nikkei text-base text-[#1A3837]/80 font-light">
          Explorá residencias exclusivas en Recoleta, Palermo Chico, Belgrano, Barrio Norte y San Isidro.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-[#1A3837] text-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#C89B51]/30 shadow-xl mb-12 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C89B51] font-medium">
            <Filter className="w-4 h-4" />
            <span>Filtros de Búsqueda Avanzada</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#FAF8F5]/70 font-mono">
              {filteredProperties.length} propiedades encontradas
            </span>
            <button
              onClick={handleReset}
              className="text-xs text-[#C89B51] hover:underline flex items-center gap-1 font-semibold uppercase tracking-wider"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Limpiar Filtros
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Keyword Search */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#C89B51] mb-1">Palabra Clave</label>
            <div className="relative">
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Ej. Balcón, Vista, Casa..."
                className="w-full border-bottom-hueso py-2 pl-7 text-xs text-[#FAF8F5] focus:outline-none placeholder:text-white/30"
              />
              <Search className="w-3.5 h-3.5 text-[#C89B51] absolute left-1 top-2.5" />
            </div>
          </div>

          {/* Operación */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#C89B51] mb-1">Operación</label>
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              className="w-full border-bottom-hueso py-2 text-xs text-[#FAF8F5] focus:outline-none cursor-pointer"
            >
              <option value="" className="bg-[#102423]">Todas las operaciones</option>
              <option value="Venta" className="bg-[#102423]">Venta</option>
              <option value="Alquiler" className="bg-[#102423]">Alquiler</option>
              <option value="Alquiler Temporal" className="bg-[#102423]">Alquiler Temporal</option>
            </select>
          </div>

          {/* Tipo de Propiedad */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#C89B51] mb-1">Tipo de Propiedad</label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full border-bottom-hueso py-2 text-xs text-[#FAF8F5] focus:outline-none cursor-pointer"
            >
              <option value="" className="bg-[#102423]">Todos los tipos</option>
              <option value="Departamento" className="bg-[#102423]">Departamento / Piso</option>
              <option value="Casa" className="bg-[#102423]">Casa / Petit Hôtel</option>
              <option value="PH" className="bg-[#102423]">PH estilo Loft</option>
              <option value="Oficina" className="bg-[#102423]">Oficina / Comercial</option>
            </select>
          </div>

          {/* Ubicación */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#C89B51] mb-1">Ubicación</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border-bottom-hueso py-2 text-xs text-[#FAF8F5] focus:outline-none cursor-pointer"
            >
              <option value="" className="bg-[#102423]">Todas las ubicaciones</option>
              <option value="Recoleta" className="bg-[#102423]">Recoleta</option>
              <option value="Palermo Chico" className="bg-[#102423]">Palermo Chico / Parque</option>
              <option value="Palermo Soho" className="bg-[#102423]">Palermo Soho</option>
              <option value="Barrio Norte" className="bg-[#102423]">Barrio Norte</option>
              <option value="Belgrano R" className="bg-[#102423]">Belgrano / Belgrano R</option>
              <option value="San Isidro" className="bg-[#102423]">San Isidro / Zona Norte</option>
            </select>
          </div>

          {/* Precio */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#C89B51] mb-1">Presupuesto USD</label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full border-bottom-hueso py-2 text-xs text-[#FAF8F5] focus:outline-none cursor-pointer"
            >
              <option value="" className="bg-[#102423]">Todos los precios</option>
              <option value="under500k" className="bg-[#102423]">Hasta USD 500.000</option>
              <option value="500k-1m" className="bg-[#102423]">USD 500k - USD 1M</option>
              <option value="over1m" className="bg-[#102423]">Más de USD 1.000.000</option>
            </select>
          </div>
        </div>
      </div>

      {/* Catalog Grid */}
      {filteredProperties.length === 0 ? (
        <div className="text-center py-20 bg-[#FAF8F5] rounded-2xl border border-[#1A3837]/10 p-8 space-y-4">
          <Building className="w-12 h-12 text-[#C89B51] mx-auto opacity-60" />
          <h3 className="font-louize text-2xl text-[#1A3837]">No se encontraron propiedades</h3>
          <p className="font-nikkei text-sm text-[#1A3837]/70 max-w-md mx-auto">
            No hay inmuebles que coincidan exactamente con el criterio seleccionado. Probá limpiando los filtros o consultando directamente por propiedades fuera de catálogo (Búsqueda Off-Market).
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-2.5 rounded-full bg-[#1A3837] text-white text-xs uppercase tracking-wider font-semibold"
          >
            Restablecer Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSelect={onSelectProperty}
            />
          ))}
        </div>
      )}
    </div>
  );
};
