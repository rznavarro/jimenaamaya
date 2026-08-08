import React from 'react';
import { MapPin, Phone, Mail, Music, ArrowUpRight, MessageCircle, Heart } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: string) => void;
  onOpenSpotify: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenSpotify }) => {
  return (
    <footer className="bg-[#102423] text-[#FAF8F5] pt-20 pb-10 border-t border-[#C89B51]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#FAF8F5]/10">
          {/* Column 1: Brand Info & Identity (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h3 className="font-louize text-2xl sm:text-3xl text-[#FAF8F5]">
                Jimena Amaya
              </h3>
              <p className="font-nikkei text-xs uppercase tracking-[0.25em] text-[#C89B51] font-medium -mt-0.5">
                Relaciones Inmobiliarias
              </p>
            </div>

            <p className="font-goudy text-base text-[#FAF8F5]/80 leading-relaxed italic">
              "Acompañamiento boutique en operaciones inmobiliarias de alto valor en Buenos Aires. Curaduría, confidencialidad y trato directo."
            </p>

            {/* Spotify Personal Brand Highlight (Section 1 & 4.4 from Metaprompt) */}
            <div className="pt-2">
              <button
                onClick={onOpenSpotify}
                className="group flex items-center gap-3 p-3 rounded-xl bg-[#1A3837] border border-[#C89B51]/30 hover:border-[#1DB954] transition-all w-full sm:w-auto"
              >
                <div className="w-9 h-9 rounded-full bg-[#1DB954] text-[#102423] flex items-center justify-center font-bold shrink-0">
                  <Music className="w-5 h-5 text-[#102423]" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-widest text-[#C89B51] block font-nikkei font-semibold">
                    Música & Espacios
                  </span>
                  <span className="text-xs text-[#FAF8F5] font-medium group-hover:text-[#1DB954] transition-colors">
                    Playlist Curada por Jimena Amaya
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Column 2: Consolidated Links (lg:col-span-3) - Metaprompt Section 4.4 */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-nikkei text-xs uppercase tracking-[0.2em] text-[#C89B51] font-semibold border-b border-[#C89B51]/30 pb-2 inline-block">
              Navegación Unificada
            </h4>
            <ul className="space-y-2.5 text-sm font-nikkei">
              {[
                { id: 'home', label: 'Inicio' },
                { id: 'propiedades', label: 'Propiedades Destacadas' },
                { id: 'servicios', label: 'Servicios Inmobiliarios' },
                { id: 'tasaciones', label: 'Tasación Profesional' },
                { id: 'blog', label: 'Blog & Lecturas' },
                { id: 'contacto', label: 'Contacto & Consultas' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavClick(link.id)}
                    className="text-[#FAF8F5]/80 hover:text-[#C89B51] transition-colors flex items-center gap-1.5 group text-xs uppercase tracking-wider"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C89B51] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Coverage Zones & Neighborhoods (lg:col-span-2) - Metaprompt Section 4.4 */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-nikkei text-xs uppercase tracking-[0.2em] text-[#C89B51] font-semibold border-b border-[#C89B51]/30 pb-2 inline-block">
              Zonas Exclusivas
            </h4>
            <ul className="space-y-2 text-xs font-nikkei text-[#FAF8F5]/75">
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C89B51]" /> Recoleta
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C89B51]" /> Palermo Chico & Parque
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C89B51]" /> Barrio Norte
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C89B51]" /> Belgrano R
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C89B51]" /> San Isidro & Zona Norte
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact & Office (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-nikkei text-xs uppercase tracking-[0.2em] text-[#C89B51] font-semibold border-b border-[#C89B51]/30 pb-2 inline-block">
              Contacto Directo
            </h4>
            <div className="space-y-3 text-xs font-nikkei text-[#FAF8F5]/85">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C89B51] shrink-0 mt-0.5" />
                <span>Av. Alvear 1850, Recoleta, Buenos Aires</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C89B51] shrink-0" />
                <span>+54 9 11 4000-0000</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C89B51] shrink-0" />
                <span>contacto@jimeamaya.com</span>
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/5491140000000?text=Hola%20Jimena,%20quisiera%20realizar%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="search-btn bg-[#B84A39] hover:bg-[#973A2B] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex"
              >
                <span>WhatsApp Directo</span>
                <div className="search-icon bg-white/20">
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF8F5]/60 font-nikkei gap-4">
          <p>© 2026 Jimena Amaya | Relaciones Inmobiliarias. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseño & Curaduría Boutique <Heart className="w-3 h-3 text-[#B84A39] fill-[#B84A39]" /> jimeamaya.com
          </p>
        </div>
      </div>
    </footer>
  );
};
