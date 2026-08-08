import React from 'react';
import { Sparkles, HeartHandshake, ShieldCheck, Compass, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Visual Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#C89B51]/40 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                alt="Jimena Amaya - Relaciones Inmobiliarias"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102423]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-xl bg-[#102423]/80 backdrop-blur-md border border-[#C89B51]/30">
                <p className="font-louize text-xl text-[#FAF8F5]">Jimena Amaya</p>
                <p className="font-nikkei text-xs uppercase tracking-widest text-[#C89B51]">Directora & Fundadora</p>
              </div>
            </div>

            {/* Decorative Gold Badge Accent */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#1A3837] text-[#FAF8F5] p-6 rounded-2xl border border-[#C89B51]/40 shadow-xl max-w-xs">
              <Sparkles className="w-6 h-6 text-[#C89B51] mb-2" />
              <p className="font-goudy text-sm italic text-[#FAF8F5]">
                "Entendemos que cada propiedad guarda la memoria de un proyecto de vida."
              </p>
            </div>
          </div>

          {/* Right Column: Brand Philosophy & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="font-nikkei text-xs uppercase tracking-[0.25em] text-[#C89B51] mb-2 font-medium">
                Sello de Autora · Experiencia Humana
              </p>
              <h2 className="font-louize text-3xl sm:text-4xl lg:text-5xl text-[#1A3837] leading-tight">
                Más que transacciones, <br />
                <span className="italic font-light text-[#B84A39]">construimos vínculos de confianza</span>
              </h2>
            </div>

            <p className="font-nikkei text-base text-[#1A3837]/85 leading-relaxed">
              En <strong className="font-semibold text-[#1A3837]">Jimena Amaya | Relaciones Inmobiliarias</strong> elegimos distanciarnos del modelo tradicional de volumen masivo. Somos una firma boutique enfocada en brindar atención a medida para propietarios y compradores exigentes en Buenos Aires.
            </p>

            <p className="font-goudy text-lg text-[#1A3837]/90 leading-relaxed italic border-l-2 border-[#C89B51] pl-4 py-1">
              "Detrás de cada operación hay una decisión patrimonial crucial. Nuestro trabajo es acompañar con empatía, solvencia técnica y la máxima discreción profesional."
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#1A3837]/5 border border-[#1A3837]/10 flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#B84A39] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-louize text-base text-[#1A3837] font-bold">Atención Directa</h4>
                  <p className="text-xs text-[#1A3837]/70 font-nikkei mt-1">Trato directo con Jimena en cada hito del proceso.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1A3837]/5 border border-[#1A3837]/10 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#B84A39] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-louize text-base text-[#1A3837] font-bold">Curaduría Rigurosa</h4>
                  <p className="text-xs text-[#1A3837]/70 font-nikkei mt-1">Selección minuciosa de propiedades e inquilinos calificados.</p>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-4">
              <button
                onClick={onContactClick}
                className="search-btn bg-[#1A3837] hover:bg-[#102423] text-[#FAF8F5] px-7 py-3.5 rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
              >
                <span>Conversar con Jimena</span>
                <div className="search-icon bg-[#C89B51]">
                  <ArrowRight className="w-3.5 h-3.5 text-[#102423]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
