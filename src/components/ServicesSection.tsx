import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { ArrowRight, CheckCircle2, X, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectServiceForValuation?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectServiceForValuation
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#102423] text-[#FAF8F5] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C89B51]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-nikkei text-xs uppercase tracking-[0.25em] text-[#C89B51] mb-2 font-medium">
            Propuesta de Valor Boutique
          </p>
          <h2 className="font-louize text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] mb-4">
            Servicios Inmobiliarios
          </h2>
          <p className="font-goudy text-lg text-[#EFECE6]/80 max-w-2xl mx-auto">
            Acompañamiento personalizado y rigurosidad técnica para optimizar el valor patrimonial de tu inmueble.
          </p>
        </div>

        {/* Services Grid (Metaprompt Section 4.3 with 1-line short descriptions) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative rounded-2xl overflow-hidden bg-[#1A3837] border border-[#C89B51]/20 hover:border-[#C89B51]/60 transition-all duration-500 flex flex-col justify-between cursor-pointer min-h-[420px] shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Background Image Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-35 group-hover:opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102423] via-[#102423]/80 to-transparent" />
              </div>

              {/* Service Card Top Header */}
              <div className="relative z-10 p-6 sm:p-7">
                <span className="inline-block text-[10px] font-nikkei uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#C89B51]/20 text-[#C89B51] border border-[#C89B51]/30 mb-4">
                  {service.subtitle}
                </span>
                <h3 className="font-louize text-2xl text-[#FAF8F5] group-hover:text-[#C89B51] transition-colors leading-snug">
                  {service.title}
                </h3>
              </div>

              {/* Service Card Bottom Content (Crucial 1-line Description from Section 4.3) */}
              <div className="relative z-10 p-6 sm:p-7 space-y-4 border-t border-[#FAF8F5]/10 bg-[#102423]/70 backdrop-blur-sm">
                <p className="font-nikkei text-sm text-[#FAF8F5] font-medium leading-relaxed">
                  {service.shortDesc}
                </p>

                <button
                  type="button"
                  className="search-btn text-[#C89B51] group-hover:text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider flex items-center justify-between w-full pt-1"
                >
                  <span>MÁS INFORMACIÓN</span>
                  <div className="search-icon bg-[#C89B51]/20 border border-[#C89B51]/50 group-hover:bg-[#C89B51] group-hover:text-[#102423]">
                    <ArrowRight className="w-3.5 h-3.5 text-[#C89B51] group-hover:text-[#102423]" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1A3837] text-[#FAF8F5] rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-[#C89B51]/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-[#B84A39] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C89B51] font-semibold">
                  {selectedService.subtitle}
                </span>
                <h3 className="font-louize text-3xl text-[#FAF8F5] mt-1">
                  {selectedService.title}
                </h3>
                <p className="font-goudy text-lg text-[#C89B51] italic mt-2">
                  "{selectedService.shortDesc}"
                </p>
              </div>

              <div className="aspect-video rounded-xl overflow-hidden border border-[#C89B51]/30">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-nikkei text-sm sm:text-base text-[#FAF8F5]/90 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              {/* Service Bullets */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider text-[#C89B51] font-semibold">
                  ¿Qué incluye el servicio?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#FAF8F5]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#C89B51] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Action CTA */}
              <div className="pt-4 border-t border-[#FAF8F5]/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/5491140000000?text=Hola%20Jimena,%20quisiera%20saber%20más%20sobre%20el%20servicio%20de%20${encodeURIComponent(selectedService.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="search-btn bg-[#B84A39] hover:bg-[#973A2B] text-white px-6 py-3.5 rounded-xl justify-center text-xs tracking-wider font-semibold flex-1"
                >
                  <span>{selectedService.ctaText}</span>
                  <div className="search-icon bg-white/20">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </a>

                {selectedService.id === 'tasacion' && onSelectServiceForValuation && (
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      onSelectServiceForValuation();
                    }}
                    className="px-6 py-3.5 rounded-xl border border-[#C89B51] text-[#C89B51] hover:bg-[#C89B51] hover:text-[#102423] transition-colors text-xs uppercase tracking-wider font-semibold"
                  >
                    Ir al Formulario de Tasación
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
