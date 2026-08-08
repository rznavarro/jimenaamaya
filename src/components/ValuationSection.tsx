import React, { useState } from 'react';
import { ValuationFormData } from '../types';
import { Send, CheckCircle2, ShieldCheck, Building, MapPin, Calculator } from 'lucide-react';

export const ValuationSection: React.FC = () => {
  const [formData, setFormData] = useState<ValuationFormData>({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Departamento',
    location: 'Recoleta',
    address: '',
    rooms: '3 Ambientes',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="tasaciones" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1A3837] text-[#FAF8F5] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C89B51]/20 border border-[#C89B51]/30 text-[#C89B51] text-xs font-nikkei uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Valuación de Mercado</span>
          </div>
          <h2 className="font-louize text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] mb-4">
            Solicitar Tasación Profesional
          </h2>
          <p className="font-goudy text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto">
            Conocé el valor real de mercado de tu propiedad. Confeccionamos informes técnicos detallados respaldados por análisis de oferta y demanda activa.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#102423] border border-[#C89B51]/40 rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-4 shadow-2xl animate-fadeIn">
            <div className="w-16 h-16 bg-[#C89B51]/20 rounded-full flex items-center justify-center mx-auto text-[#C89B51]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-louize text-3xl text-[#FAF8F5]">Solicitud Recibida</h3>
            <p className="font-nikkei text-sm text-[#FAF8F5]/80 leading-relaxed">
              Gracias, <strong className="text-[#C89B51]">{formData.name}</strong>. Hemos recibido los datos de tu propiedad en <strong className="text-[#FAF8F5]">{formData.location}</strong>. Nos pondremos en contacto a la brevedad para coordinar la visita técnica.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    propertyType: 'Departamento',
                    location: 'Recoleta',
                    address: '',
                    rooms: '3 Ambientes',
                    comments: ''
                  });
                }}
                className="px-6 py-2.5 rounded-full border border-[#C89B51] text-[#C89B51] hover:bg-[#C89B51] hover:text-[#102423] text-xs uppercase tracking-wider transition-colors"
              >
                Solicitar Otra Tasación
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-[#102423] border border-[#C89B51]/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C89B51] mb-2 font-medium">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. María Elena González"
                    className="w-full border-bottom-hueso py-2.5 text-sm focus:outline-none placeholder:text-[#FAF8F5]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C89B51] mb-2 font-medium">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tuemail@ejemplo.com"
                    className="w-full border-bottom-hueso py-2.5 text-sm focus:outline-none placeholder:text-[#FAF8F5]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C89B51] mb-2 font-medium">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+54 9 11 1234-5678"
                    className="w-full border-bottom-hueso py-2.5 text-sm focus:outline-none placeholder:text-[#FAF8F5]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C89B51] mb-2 font-medium">
                    Tipo de Propiedad
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full border-bottom-hueso py-2.5 text-sm focus:outline-none cursor-pointer text-[#FAF8F5]"
                  >
                    <option value="Departamento" className="bg-[#102423]">Departamento / Piso</option>
                    <option value="Casa" className="bg-[#102423]">Casa / Petit Hôtel</option>
                    <option value="PH" className="bg-[#102423]">PH / Loft</option>
                    <option value="Oficina" className="bg-[#102423]">Oficina / Comercial</option>
                    <option value="Lote / Terreno" className="bg-[#102423]">Lote / Terreno</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C89B51] mb-2 font-medium">
                    Barrio / Zona
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full border-bottom-hueso py-2.5 text-sm focus:outline-none cursor-pointer text-[#FAF8F5]"
                  >
                    <option value="Recoleta" className="bg-[#102423]">Recoleta</option>
                    <option value="Palermo Chico" className="bg-[#102423]">Palermo Chico / Parque</option>
                    <option value="Palermo Soho" className="bg-[#102423]">Palermo Soho / Hollywood</option>
                    <option value="Barrio Norte" className="bg-[#102423]">Barrio Norte</option>
                    <option value="Belgrano R" className="bg-[#102423]">Belgrano / Belgrano R</option>
                    <option value="San Isidro" className="bg-[#102423]">San Isidro / Zona Norte</option>
                    <option value="Otra Zona" className="bg-[#102423]">Otra Ubicación en CABA/GBA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C89B51] mb-2 font-medium">
                    Dirección Aproximada
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Ej. Av. Alvear y Ayacucho"
                    className="w-full border-bottom-hueso py-2.5 text-sm focus:outline-none placeholder:text-[#FAF8F5]/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#C89B51] mb-2 font-medium">
                  Comentarios o Detalles del Inmueble
                </label>
                <textarea
                  rows={3}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  placeholder="Mencione superficie aprox., estado de conservación, balcón, cochera o particularidades..."
                  className="w-full border-bottom-hueso py-2.5 text-sm focus:outline-none placeholder:text-[#FAF8F5]/30 resize-none"
                />
              </div>

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="search-btn bg-[#B84A39] hover:bg-[#973A2B] text-white px-10 py-4 rounded-full shadow-xl transition-all text-xs font-semibold tracking-widest inline-flex"
                >
                  <span>Enviar Datos para Tasación</span>
                  <div className="search-icon bg-white/20">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
