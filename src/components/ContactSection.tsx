import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Consulta General',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] text-[#1A3837]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-nikkei text-xs uppercase tracking-[0.25em] text-[#C89B51] mb-2 font-medium">
            Atención Personalizada
          </p>
          <h2 className="font-louize text-3xl sm:text-4xl lg:text-5xl text-[#B84A39] mb-4">
            Contacto & Citas Privadas
          </h2>
          <p className="font-goudy text-lg text-[#1A3837]/80 max-w-2xl mx-auto">
            Coordiná una reunión en nuestras oficinas de Recoleta o consultá de forma directa sobre nuestro catálogo de propiedades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards & Direct Office Details (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#102423] text-[#FAF8F5] p-8 rounded-2xl border border-[#C89B51]/30 shadow-xl space-y-6">
              <h3 className="font-louize text-2xl text-[#FAF8F5] pb-2 border-b border-white/10">
                Oficinas de Atención
              </h3>

              <div className="space-y-4 font-nikkei text-sm text-[#FAF8F5]/90">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C89B51] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Dirección Principal</strong>
                    <span>Av. Alvear 1850, Piso 3° · Recoleta, Buenos Aires, Argentina</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C89B51] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Teléfono & WhatsApp</strong>
                    <span>+54 9 11 4000-0000</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C89B51] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Correo Electrónico</strong>
                    <span>contacto@jimeamaya.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C89B51] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Horarios de Atención</strong>
                    <span>Lunes a Viernes: 09:30 - 18:30 hs<br />Sábados: Con cita previa</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://wa.me/5491140000000?text=Hola%20Jimena,%20quisiera%20coordinar%20una%20reunión%20privada."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="search-btn bg-[#B84A39] hover:bg-[#973A2B] text-white px-6 py-3.5 rounded-xl shadow-lg transition-all text-xs uppercase tracking-wider font-semibold w-full justify-center"
                >
                  <span>Hablar con Jimena en WhatsApp</span>
                  <div className="search-icon bg-white/20">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                </a>
              </div>
            </div>

            {/* Recoleta Area Coverage Map Reference */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#1A3837]/10 space-y-3">
              <h4 className="font-louize text-lg text-[#1A3837]">Zona de Cobertura Principal</h4>
              <p className="font-nikkei text-xs text-[#1A3837]/75">
                Especialistas en el corredor norte porteño: Recoleta, Palermo Chico, Barrio Norte, Belgrano y propiedades seleccionadas en Zona Norte (San Isidro y Vicente López).
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-10 rounded-2xl border border-[#1A3837]/10 shadow-lg">
            {sent ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-16 h-16 text-[#C89B51] mx-auto" />
                <h3 className="font-louize text-3xl text-[#1A3837]">Mensaje Enviado con Éxito</h3>
                <p className="font-nikkei text-sm text-[#1A3837]/80 max-w-md mx-auto">
                  Muchas gracias por tu mensaje, <strong className="text-[#B84A39]">{formData.name}</strong>. Nos comunicaremos con vos a la brevedad.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2 rounded-full border border-[#1A3837] text-[#1A3837] text-xs uppercase tracking-wider font-semibold mt-4"
                >
                  Enviar Otro Mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-louize text-2xl text-[#1A3837] pb-2 border-b border-[#1A3837]/10">
                  Envianos tu Consulta
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1A3837] font-semibold mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre completo"
                      className="w-full border-bottom-petroleo py-2 text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1A3837] font-semibold mb-2">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+54 9 11 ..."
                      className="w-full border-bottom-petroleo py-2 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1A3837] font-semibold mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@ejemplo.com"
                      className="w-full border-bottom-petroleo py-2 text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1A3837] font-semibold mb-2">
                      Asunto
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full border-bottom-petroleo py-2 text-sm focus:outline-none bg-transparent cursor-pointer"
                    >
                      <option value="Consulta General">Consulta General</option>
                      <option value="Comprar Propiedad">Comprar Propiedad</option>
                      <option value="Alquilar Propiedad">Alquilar Propiedad</option>
                      <option value="Vender / Tasar Inmueble">Vender / Tasar mi Inmueble</option>
                      <option value="Curaduría / Home Staging">Curaduría / Home Staging</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A3837] font-semibold mb-2">
                    Mensaje o Consulta *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escribí aquí los detalles de tu consulta..."
                    className="w-full border-bottom-petroleo py-2 text-sm focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="search-btn bg-[#1A3837] hover:bg-[#102423] text-white px-8 py-3.5 rounded-full shadow-lg transition-all text-xs font-semibold tracking-wider"
                  >
                    <span>Enviar Mensaje</span>
                    <div className="search-icon bg-[#C89B51]">
                      <Send className="w-3.5 h-3.5 text-[#102423]" />
                    </div>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
