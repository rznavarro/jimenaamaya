import React, { useState, useEffect } from 'react';
import { Phone, Music, Menu, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSpotify: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenSpotify }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'propiedades', label: 'Propiedades' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'tasaciones', label: 'Tasaciones' },
    { id: 'blog', label: 'Blog' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1A3837]/95 backdrop-blur-md text-[#FAF8F5] py-3.5 shadow-xl border-b border-[#FAF8F5]/10'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent text-[#FAF8F5] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group focus:outline-none"
        >
          <div className="font-louize text-xl sm:text-2xl lg:text-3xl tracking-wide text-[#FAF8F5] group-hover:text-[#C89B51] transition-colors">
            Jimena Amaya
          </div>
          <div className="font-nikkei text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C89B51] -mt-1 font-light">
            Relaciones Inmobiliarias
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-xs uppercase tracking-[0.18em] transition-all relative py-1 font-medium ${
                activeTab === link.id
                  ? 'text-[#C89B51]'
                  : 'text-[#FAF8F5]/90 hover:text-[#C89B51]'
              }`}
            >
              {link.label}
              {activeTab === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C89B51] rounded-full animate-fadeIn" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons: Spotify Playlist & WhatsApp */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={onOpenSpotify}
            className="flex items-center gap-2 text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#C89B51]/50 text-[#FAF8F5] hover:bg-[#C89B51] hover:text-[#1A3837] transition-all duration-300"
            title="Playlist MÚSICA & ESPACIOS por Jimena Amaya"
          >
            <Music className="w-3.5 h-3.5 text-[#C89B51] group-hover:text-inherit" />
            <span>Música & Espacios</span>
          </button>

          <a
            href="https://wa.me/5491140000000?text=Hola%20Jimena,%20quisiera%20consultar%20por%20sus%20servicios%20inmobiliarios."
            target="_blank"
            rel="noopener noreferrer"
            className="search-btn bg-[#B84A39] text-[#FAF8F5] hover:bg-[#973A2B] px-4 py-2 rounded-full text-xs transition-all shadow-md"
          >
            <span>Contacto</span>
            <div className="search-icon bg-white/20 border border-white/40">
              <MessageCircle className="w-3.5 h-3.5 text-white" />
            </div>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenSpotify}
            className="p-2 text-[#C89B51] hover:text-white transition-colors"
            title="Playlist MÚSICA & ESPACIOS"
          >
            <Music className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#FAF8F5] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A3837] border-b border-[#C89B51]/30 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-sm uppercase tracking-widest py-2 border-b border-[#FAF8F5]/10 ${
                  activeTab === link.id
                    ? 'text-[#C89B51] font-bold'
                    : 'text-[#FAF8F5]/80 hover:text-[#C89B51]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  onOpenSpotify();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md border border-[#C89B51] text-[#C89B51] text-xs uppercase tracking-wider"
              >
                <Music className="w-4 h-4" />
                <span>Playlist Música & Espacios</span>
              </button>
              <a
                href="https://wa.me/5491140000000?text=Hola%20Jimena,%20me%20gustaría%20realizar%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-[#B84A39] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
