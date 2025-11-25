import React from 'react';
import { PortfolioItem } from '../types';
import SEO from '../components/SEO';

// Placeholder Logo Components to simulate a "Tech" environment
const LogoPlaceholder: React.FC<{ name: string, color?: string }> = ({ name, color = "#666" }) => (
  <div className="flex items-center gap-2 px-8 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
    <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
      <div className="w-6 h-6 rounded border-2 border-current" style={{ color }}></div>
    </div>
    <span className="font-montserrat font-bold text-xl text-gray-400">{name}</span>
  </div>
);

const Portfolio: React.FC = () => {
  const items: PortfolioItem[] = [
    { id: '1', title: 'Congresso Nacional de EdTech', category: 'Interpretação Simultânea', image: 'https://picsum.photos/seed/edu/800/600' },
    { id: '2', title: 'Vídeo Institucional Fintech', category: 'Janela de Libras', image: 'https://picsum.photos/seed/corp/800/600' },
    { id: '3', title: 'Live Cultural: Música e Arte', category: 'Live Streaming', image: 'https://picsum.photos/seed/art/800/600' },
    { id: '4', title: 'Treinamento Corporativo RH', category: 'Interpretação Empresarial', image: 'https://picsum.photos/seed/meeting/800/600' },
    { id: '5', title: 'Tradução de Edital Público', category: 'Tradução de Documentos', image: 'https://picsum.photos/seed/docs/800/600' },
    { id: '6', title: 'Workshop de Tecnologia', category: 'Interpretação Técnica', image: 'https://picsum.photos/seed/tech/800/600' },
  ];

  return (
    <div className="w-full bg-gray-50">
      <SEO 
        title="Portfólio - Nossos Trabalhos"
        description="Confira o portfólio da Octa Libras: Eventos corporativos, lives, congressos e vídeos acessíveis. Experiência comprovada em acessibilidade."
        keywords="portfólio libras, cases de sucesso, eventos acessíveis, vídeo com intérprete, experiência tradução libras, clientes octa libras"
      />

      <div className="bg-[#00995D] pt-20 pb-24 md:pt-24 md:pb-32 text-center text-white relative overflow-hidden rounded-b-[3rem]">
        {/* Tech Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A650] blur-3xl rounded-full opacity-30 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">
            Cases de Sucesso
          </span>
          <h1 className="font-montserrat font-bold text-3xl md:text-5xl mb-4 tracking-tight">Nosso Portfólio</h1>
          <p className="text-[#E0F2EB] text-lg max-w-2xl mx-auto font-light">
            Conectando inovação e acessibilidade em projetos de alto impacto.
          </p>
        </div>
      </div>

      <section className="py-20 -mt-16 relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="mb-8 p-4 bg-white/80 backdrop-blur border-l-4 border-[#00995D] rounded-r-xl shadow-lg flex items-center gap-3 text-sm text-gray-600 max-w-3xl mx-auto">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00995D] text-white font-bold text-xs">i</span>
            <p><strong>Nota de Confidencialidade:</strong> Alguns projetos estratégicos não são listados para preservar o sigilo contratual (NDA).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item.id} className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#00995D]/10 transition-all duration-500 border border-gray-100 hover:border-[#00995D]/30">
                <div className="relative overflow-hidden h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                     <span className="px-3 py-1 bg-white/90 backdrop-blur text-[#00995D] text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 relative">
                  <h3 className="font-montserrat font-bold text-lg text-[#333333] mb-2 group-hover:text-[#00995D] transition-colors">
                    {item.title}
                  </h3>
                  <div className="w-8 h-1 bg-gray-200 rounded-full group-hover:w-full group-hover:bg-[#00995D] transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Client Logos Marquee */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-[#00995D] font-montserrat font-bold uppercase tracking-[0.2em] text-sm">Parceiros</h3>
            <h4 className="text-[#333333] font-montserrat font-bold text-3xl mt-2">Empresas que confiam na Octa</h4>
          </div>

          {/* Infinite Scroll Container */}
          <div className="relative w-full overflow-hidden mask-gradient-x">
             {/* Gradient Masks for fade effect on edges */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="flex w-max animate-scroll gap-16 py-8">
              {/* First Set of Logos */}
              <LogoPlaceholder name="SICREDI" color="#00995D" />
              <LogoPlaceholder name="SEBRAE" color="#005CA9" />
              <LogoPlaceholder name="UNIMED" color="#00995D" />
              <LogoPlaceholder name="GOOGLE" color="#4285F4" />
              <LogoPlaceholder name="SAMSUNG" color="#1428A0" />
              <LogoPlaceholder name="SENAC" color="#F7941D" />
              <LogoPlaceholder name="SESC" color="#006CB5" />
              
              {/* Duplicate Set for Seamless Loop */}
              <LogoPlaceholder name="SICREDI" color="#00995D" />
              <LogoPlaceholder name="SEBRAE" color="#005CA9" />
              <LogoPlaceholder name="UNIMED" color="#00995D" />
              <LogoPlaceholder name="GOOGLE" color="#4285F4" />
              <LogoPlaceholder name="SAMSUNG" color="#1428A0" />
              <LogoPlaceholder name="SENAC" color="#F7941D" />
              <LogoPlaceholder name="SESC" color="#006CB5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;