import React from 'react';
import { Music, X, Play, ExternalLink, Disc, Sparkles } from 'lucide-react';

interface SpotifyPlayerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpotifyPlayerDrawer: React.FC<SpotifyPlayerDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-[#102423] text-[#FAF8F5] border border-[#C89B51]/50 rounded-2xl p-5 shadow-2xl animate-slideUp">
      <div className="flex items-center justify-between pb-3 border-b border-[#FAF8F5]/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#1DB954]/20 flex items-center justify-center text-[#1DB954]">
            <Music className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-nikkei tracking-widest text-[#C89B51] block">
              Curaduría Sonora
            </span>
            <h4 className="font-louize text-base text-[#FAF8F5]">Música & Espacios</h4>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-full hover:bg-white/10 text-[#FAF8F5]/70 hover:text-white transition-colors"
          aria-label="Cerrar reproductor"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="py-4 space-y-3">
        <p className="font-goudy text-xs italic text-[#FAF8F5]/80">
          "Playlist curada por Jimena Amaya para acompañar la experiencia de recorrer y diseñar hogares con calma."
        </p>

        {/* Embedded Spotify Iframe Player */}
        <div className="rounded-xl overflow-hidden border border-white/10 shadow-md bg-black">
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYA21A313C?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Playlist Música & Espacios por Jimena Amaya"
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="pt-2 flex items-center justify-between text-xs border-t border-[#FAF8F5]/10">
        <span className="text-[#FAF8F5]/60 font-nikkei text-[11px] flex items-center gap-1">
          <Disc className="w-3 h-3 text-[#C89B51] animate-spin" /> Jazz, Bossa & Ambient
        </span>
        <a
          href="https://open.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1DB954] hover:underline text-[11px] font-semibold flex items-center gap-1"
        >
          Abrir en Spotify <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
