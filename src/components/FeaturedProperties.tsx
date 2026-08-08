import React, { useState } from 'react';
import { Property } from '../types';
import { PropertyCard } from './PropertyCard';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedPropertiesProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onViewAll: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  onSelectProperty,
  onViewAll
}) => {
  const [activeTab, setActiveTab] = useState<'Todas' | 'Venta' | 'Alquiler'>('Todas');

  const featuredList = properties.filter((p) => p.featured);

  const filteredFeatured = featuredList.filter((p) => {
    if (activeTab === 'Todas') return true;
    if (activeTab === 'Venta') return p.operation === 'Venta';
    if (activeTab === 'Alquiler') return p.operation === 'Alquiler' || p.operation === 'Alquiler Temporal';
    return true;
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header Pattern (Metaprompt Section 4.2) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-nikkei uppercase tracking-[0.25em] text-[#C89B51] mb-2 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Inventario Curado · Buenos Aires</span>
          </div>
          <h2 className="font-louize text-3xl sm:text-4xl lg:text-5xl text-[#B84A39] mb-4">
            Propiedades Destacadas
          </h2>
          <p className="font-nikkei text-base sm:text-lg text-[#1A3837]/80 font-light max-w-2xl mx-auto">
            Una selección exclusiva de residencias con valor patrimonial, ubicaciones privilegiadas y diseño de excelencia.
          </p>

          {/* Tab Filter */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {(['Todas', 'Venta', 'Alquiler'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs uppercase tracking-wider px-5 py-2 rounded-full border transition-all ${
                  activeTab === tab
                    ? 'bg-[#1A3837] text-[#FAF8F5] border-[#1A3837] font-semibold shadow-sm'
                    : 'border-[#1A3837]/20 text-[#1A3837]/70 hover:border-[#1A3837] hover:text-[#1A3837]'
                }`}
              >
                {tab === 'Alquiler' ? 'Alquileres' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {filteredFeatured.slice(0, 3).map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSelect={onSelectProperty}
            />
          ))}
        </div>

        {/* Action Button: VER TODAS LAS PROPIEDADES (Metaprompt 4.2) */}
        <div className="text-center pt-4">
          <button
            onClick={onViewAll}
            className="search-btn inline-flex bg-[#1A3837] hover:bg-[#102423] text-[#FAF8F5] px-8 py-4 rounded-full shadow-lg transition-all text-xs font-semibold tracking-widest"
          >
            <span>VER TODAS LAS PROPIEDADES</span>
            <div className="search-icon bg-[#C89B51] text-[#102423]">
              <ArrowRight className="w-4 h-4 text-[#102423]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
