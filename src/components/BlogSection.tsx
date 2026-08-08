import React, { useState } from 'react';
import { BlogPost } from '../types';
import { ArrowRight, BookOpen, Clock, X } from 'lucide-react';

interface BlogSectionProps {
  posts: BlogPost[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] text-[#1A3837]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-nikkei text-xs uppercase tracking-[0.25em] text-[#C89B51] mb-2 font-medium">
            Lecturas & Curaduría Urbana
          </p>
          <h2 className="font-louize text-3xl sm:text-4xl lg:text-5xl text-[#B84A39] mb-4">
            Blog Inmobiliario
          </h2>
          <p className="font-goudy text-lg text-[#1A3837]/80 max-w-2xl mx-auto">
            Reflexiones sobre patrimonio arquitectónico, tendencias de diseño interior y dinámicas del mercado en Buenos Aires.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#1A3837]/10 hover:border-[#C89B51] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#102423]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#C89B51] uppercase font-nikkei font-semibold">
                    <span>{post.category}</span>
                    <span className="flex items-center gap-1 text-[#1A3837]/60 font-normal">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-louize text-2xl text-[#1A3837] group-hover:text-[#B84A39] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="font-nikkei text-sm text-[#1A3837]/75 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="border-t border-[#1A3837]/10 pt-4 flex items-center justify-between">
                  <span className="text-xs text-[#1A3837]/60 font-goudy italic">Por {post.author}</span>
                  <span className="text-xs text-[#B84A39] uppercase tracking-wider font-semibold group-hover:underline flex items-center gap-1">
                    Leer Artículo <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#FAF8F5] text-[#1A3837] rounded-2xl max-w-3xl w-full p-6 sm:p-8 border border-[#C89B51]/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/10 hover:bg-[#B84A39] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C89B51] font-semibold">
                  {selectedPost.category} · {selectedPost.date}
                </span>
                <h3 className="font-louize text-3xl sm:text-4xl text-[#1A3837] mt-1">
                  {selectedPost.title}
                </h3>
                <p className="font-goudy text-sm text-[#1A3837]/60 italic mt-1">
                  Escrito por {selectedPost.author} · {selectedPost.readTime}
                </p>
              </div>

              <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#1A3837]/10">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 font-nikkei text-base text-[#1A3837]/90 leading-relaxed">
                <p className="font-semibold text-lg text-[#1A3837]">{selectedPost.excerpt}</p>
                <p>{selectedPost.content}</p>
                <p>
                  En cada rincón de nuestra ciudad, el patrimonio arquitectónico convive con los nuevos estilos de vida. Desde la elegancia clásica de los petit hôtels de Recoleta hasta la libertad espacial de los lofts en Palermo, la clave reside en saber leer el potencial de cada superficie.
                </p>
              </div>

              <div className="pt-6 border-t border-[#1A3837]/10 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 rounded-full bg-[#1A3837] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#102423]"
                >
                  Cerrar Artículo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
