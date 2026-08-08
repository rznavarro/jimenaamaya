import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, BedDouble, Bath, Maximize2, Tag, ArrowRight } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhotoIndex((prev) => (prev + 1) % property.photos.length);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhotoIndex((prev) => (prev - 1 + property.photos.length) % property.photos.length);
  };

  const formatPrice = (priceUSD: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(priceUSD);
  };

  return (
    <div
      onClick={() => onSelect(property)}
      className="group bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#1A3837]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Photo Carousel Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#102423]">
        <img
          src={property.photos[currentPhotoIndex]}
          alt={`${property.title} - foto ${currentPhotoIndex + 1}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Status Badge (bg-oro) & Operation Tag */}
        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
          <span
            className={`text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${
              property.status === 'Disponible'
                ? 'bg-[#C89B51] text-[#102423]'
                : property.status === 'Reservada'
                ? 'bg-[#B84A39] text-white'
                : 'bg-gray-800 text-white'
            }`}
          >
            {property.status}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1A3837]/80 backdrop-blur-md text-[#FAF8F5]">
            {property.operation}
          </span>
        </div>

        {/* Image Slider Controls */}
        {property.photos.length > 1 && (
          <>
            <button
              onClick={prevPhoto}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Foto siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            {/* Dots Counter Indicator */}
            <div className="absolute bottom-3 right-4 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full font-mono">
              {currentPhotoIndex + 1} / {property.photos.length}
            </div>
          </>
        )}
      </div>

      {/* Property Information Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Location & Type */}
          <div className="flex items-center justify-between text-xs text-[#1A3837]/70 font-nikkei tracking-wider uppercase mb-1.5">
            <span className="flex items-center gap-1 text-[#B84A39] font-medium">
              <MapPin className="w-3.5 h-3.5" />
              {property.location}
            </span>
            <span>{property.propertyType}</span>
          </div>

          {/* Title */}
          <h3 className="font-louize text-xl text-[#1A3837] group-hover:text-[#B84A39] transition-colors line-clamp-2 leading-snug">
            {property.title}
          </h3>

          {/* Price */}
          <div className="mt-3">
            <span className="font-nikkei text-2xl font-bold text-[#1A3837]">
              {formatPrice(property.priceUSD)}
            </span>
            {property.operation === 'Alquiler Temporal' && (
              <span className="text-xs text-[#1A3837]/60 ml-1">/ mes</span>
            )}
          </div>
        </div>

        {/* Curator Note Snippet */}
        <p className="font-goudy text-xs text-[#1A3837]/80 italic line-clamp-2 border-l-2 border-[#C89B51] pl-3 py-0.5">
          "{property.curatorNote}"
        </p>

        {/* Specs Grid */}
        <div className="pt-3 border-t border-[#1A3837]/10 flex items-center justify-between text-xs text-[#1A3837]/80">
          <div className="flex items-center gap-1.5" title="Ambientes / Dormitorios">
            <BedDouble className="w-4 h-4 text-[#C89B51]" />
            <span>{property.bedrooms} dorms ({property.ambientes} amb)</span>
          </div>
          <div className="flex items-center gap-1.5" title="Baños">
            <Bath className="w-4 h-4 text-[#C89B51]" />
            <span>{property.bathrooms} baños</span>
          </div>
          <div className="flex items-center gap-1.5" title="Superficie total">
            <Maximize2 className="w-4 h-4 text-[#C89B51]" />
            <span>{property.surfaceM2} m²</span>
          </div>
        </div>

        {/* CTA Button using search-btn style */}
        <div className="pt-2">
          <button
            onClick={() => onSelect(property)}
            className="search-btn text-[#B84A39] hover:text-[#973A2B] text-xs font-semibold uppercase tracking-wider flex items-center justify-between w-full"
          >
            <span>Ver Ficha Completa</span>
            <div className="search-icon bg-[#B84A39]/10 border border-[#B84A39]/30">
              <ArrowRight className="w-3.5 h-3.5 text-[#B84A39]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
