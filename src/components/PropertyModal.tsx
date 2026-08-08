import React, { useState } from 'react';
import { Property } from '../types';
import { X, ChevronLeft, ChevronRight, MapPin, BedDouble, Bath, Maximize2, Calendar, ShieldCheck, MessageCircle, Share2 } from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!property) return null;

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % property.photos.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + property.photos.length) % property.photos.length);
  };

  const formatPrice = (priceUSD: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(priceUSD);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/5491140000000?text=${encodeURIComponent(
    `Hola Jimena, me interesa consultar por la propiedad "${property.title}" (${property.location}, Ref: ${property.id}).`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#FAF8F5] text-[#1A3837] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-[#C89B51]/30 shadow-2xl relative flex flex-col">
        {/* Top Sticky Bar */}
        <div className="sticky top-0 z-20 bg-[#1A3837] text-[#FAF8F5] px-6 py-4 flex items-center justify-between border-b border-[#C89B51]/30">
          <div>
            <span className="text-[10px] font-nikkei uppercase tracking-[0.2em] text-[#C89B51]">
              Ref: {property.id} · {property.location}
            </span>
            <h3 className="font-louize text-lg sm:text-xl text-[#FAF8F5] line-clamp-1">
              {property.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white/10 text-[#C89B51] hover:bg-white/20 transition-colors"
              title="Copiar Enlace"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-[#B84A39] transition-colors"
              aria-label="Cerrar Ficha"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="relative aspect-[16/9] bg-[#102423] overflow-hidden">
          <img
            src={property.photos[photoIndex]}
            alt={`${property.title} - Imagen ${photoIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {property.photos.length > 1 && (
            <>
              <button
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Gallery Thumbnails Overlay */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-black/50 backdrop-blur-md rounded-lg">
              {property.photos.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setPhotoIndex(idx)}
                  className={`w-10 h-8 rounded overflow-hidden border transition-all ${
                    photoIndex === idx ? 'border-[#C89B51] scale-105' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={p} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <span className="bg-black/70 text-white font-mono text-xs px-2.5 py-1 rounded-full">
              {photoIndex + 1} / {property.photos.length}
            </span>
          </div>
        </div>

        {/* Details Content Body */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          {/* Main Price & Address Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1A3837]/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#C89B51] text-[#102423] text-xs font-semibold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  {property.status}
                </span>
                <span className="bg-[#1A3837] text-white text-xs font-semibold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  {property.operation}
                </span>
                <span className="text-xs text-[#1A3837]/70 uppercase tracking-widest font-nikkei">
                  {property.propertyType}
                </span>
              </div>
              <p className="font-nikkei text-sm text-[#B84A39] flex items-center gap-1 font-medium mt-1">
                <MapPin className="w-4 h-4" />
                {property.address}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="font-nikkei text-3xl sm:text-4xl font-bold text-[#1A3837]">
                {formatPrice(property.priceUSD)}
              </span>
              {property.expensesARS && (
                <p className="text-xs text-[#1A3837]/60 font-mono mt-0.5">
                  Expensas: ${property.expensesARS.toLocaleString('es-AR')} ARS
                </p>
              )}
            </div>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#1A3837]/5 p-4 rounded-xl border border-[#1A3837]/10">
            <div className="text-center p-2">
              <BedDouble className="w-5 h-5 mx-auto text-[#C89B51] mb-1" />
              <span className="block text-xs text-[#1A3837]/60 font-nikkei uppercase">Dormitorios</span>
              <span className="font-bold text-sm text-[#1A3837]">{property.bedrooms} ({property.ambientes} amb)</span>
            </div>
            <div className="text-center p-2">
              <Bath className="w-5 h-5 mx-auto text-[#C89B51] mb-1" />
              <span className="block text-xs text-[#1A3837]/60 font-nikkei uppercase">Baños</span>
              <span className="font-bold text-sm text-[#1A3837]">{property.bathrooms}</span>
            </div>
            <div className="text-center p-2">
              <Maximize2 className="w-5 h-5 mx-auto text-[#C89B51] mb-1" />
              <span className="block text-xs text-[#1A3837]/60 font-nikkei uppercase">Superficie Total</span>
              <span className="font-bold text-sm text-[#1A3837]">{property.surfaceM2} m²</span>
            </div>
            <div className="text-center p-2">
              <Calendar className="w-5 h-5 mx-auto text-[#C89B51] mb-1" />
              <span className="block text-xs text-[#1A3837]/60 font-nikkei uppercase">Año Construcción</span>
              <span className="font-bold text-sm text-[#1A3837]">{property.yearBuilt || 'Clásico'}</span>
            </div>
          </div>

          {/* Curator Note Box */}
          <div className="bg-[#102423] text-[#FAF8F5] p-6 rounded-xl border border-[#C89B51]/40 shadow-inner">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C89B51] font-semibold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Curaduría Jimena Amaya</span>
            </div>
            <p className="font-goudy text-base italic text-[#FAF8F5]/90 leading-relaxed">
              "{property.curatorNote}"
            </p>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-louize text-2xl text-[#1A3837] mb-3">Descripción de la Propiedad</h4>
            <p className="font-nikkei text-sm sm:text-base text-[#1A3837]/80 leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* Amenities & Features */}
          <div>
            <h4 className="font-louize text-xl text-[#1A3837] mb-3">Comodidades y Detalles</h4>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-[#1A3837]/10 text-[#1A3837] px-3 py-1.5 rounded-full font-medium"
                >
                  ✓ {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="pt-6 border-t border-[#1A3837]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#1A3837]/70 font-nikkei">
              ¿Te interesa agendar una visita privada o recibir el dossier de arquitectura?
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="search-btn bg-[#B84A39] hover:bg-[#973A2B] text-white px-8 py-3.5 rounded-xl shadow-lg transition-all text-xs font-semibold uppercase tracking-wider w-full sm:w-auto justify-center"
            >
              <span>Consultar por WhatsApp</span>
              <div className="search-icon bg-white/20">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
