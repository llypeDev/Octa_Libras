import React from 'react';
import { Quote, MessageSquare, Star } from 'lucide-react';
import { TestimonialItem } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: '1',
      name: 'Mariana Silva',
      role: 'Coordenadora de RH',
      content: 'A equipe da Octa Libras transformou nosso evento anual. Pela primeira vez, tivemos total engajamento dos colaboradores surdos. Profissionalismo e técnica impecáveis.',
    },
    {
      id: '2',
      name: 'Carlos Eduardo',
      role: 'Diretor Pedagógico',
      content: 'A tradução dos materiais didáticos foi entregue com extrema qualidade e dentro do prazo. A consultoria deles nos ajudou a entender melhor a inclusão na prática.',
    },
    {
      id: '3',
      name: 'Fernanda Oliveira',
      role: 'Organizadora de Eventos',
      content: 'Contratei para um congresso internacional online. A interpretação remota funcionou perfeitamente, sem falhas técnicas e com intérpretes muito qualificados.',
    },
     {
      id: '4',
      name: 'Ricardo Santos',
      role: 'CEO TechStart',
      content: 'Impressionante a agilidade da equipe. A janela de libras nos vídeos institucionais ficou muito profissional e se integrou perfeitamente à nossa identidade visual.',
    },
    {
      id: '5',
      name: 'Patricia Lima',
      role: 'Produtora Cultural',
      content: 'Já trabalhamos em diversos projetos culturais e a Octa sempre entrega excelência. A comunidade surda sempre elogia a clareza dos intérpretes.',
    },
    {
      id: '6',
      name: 'Lucas Mendes',
      role: 'Gerente de Marketing',
      content: 'O atendimento é diferenciado desde o primeiro contato. Entendem a necessidade do cliente e propõem a melhor solução técnica. Recomendo muito!',
    }
  ];

  return (
    <div className="w-full bg-gray-50">
      
       {/* Tech Hero */}
       <section className="relative bg-[#00995D] pt-32 pb-32 md:pb-48 text-center text-white rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00A650] rounded-full blur-[120px] opacity-20 translate-y-1/2 translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
            <MessageSquare size={14} className="text-[#00ff9d]" />
            <span className="text-white font-semibold text-xs uppercase tracking-widest">Feedback</span>
          </div>
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 tracking-tight">O que dizem nossos clientes</h1>
          <p className="text-[#E0F2EB] text-lg max-w-2xl mx-auto font-light">
            Histórias reais de conexões bem-sucedidas.
          </p>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-[2rem] relative border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#00995D]/10 hover:-translate-y-2 transition-all duration-300 group">
                
                {/* Quote Icon */}
                <div className="absolute -top-6 right-8 bg-[#00995D] text-white p-3 rounded-2xl shadow-lg shadow-[#00995D]/30 group-hover:scale-110 transition-transform duration-300">
                  <Quote size={20} fill="currentColor" />
                </div>
                
                <div className="mt-4">
                  <div className="flex gap-1 text-yellow-400 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                  
                  <p className="text-gray-600 italic leading-relaxed mb-8 font-light text-lg">"{t.content}"</p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-[#00995D]">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-[#333333] text-sm">{t.name}</h4>
                      <span className="text-xs text-[#00995D] font-semibold tracking-wide uppercase">{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;