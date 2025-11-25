import React from 'react';
import { Link } from 'react-router-dom';
import { Mic2, FileText, Monitor, Video, Users, CheckCircle, ArrowRight, Layers, Cpu } from 'lucide-react';
import { ServiceItem } from '../types';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'simultanea',
      title: 'Interpretação Simultânea',
      description: 'Tradução em tempo real para congressos, palestras e conferências. Ideal para manter o fluxo natural do evento sem pausas longas.',
      icon: Mic2
    },
    {
      id: 'consecutiva',
      title: 'Interpretação Consecutiva',
      description: 'O orador fala e faz pausas para que o intérprete traduza. Perfeito para reuniões menores, consultas médicas e audiências.',
      icon: Users
    },
    {
      id: 'traducao',
      title: 'Tradução Escrita/Libras',
      description: 'Tradução técnica de documentos para vídeo em Libras (provas, editais, manuais) ou de vídeos para Português escrito.',
      icon: FileText
    },
    {
      id: 'online',
      title: 'Interpretação Remota',
      description: 'Atendimento via Zoom, Meet ou Teams com estúdio profissional. Solução ágil para webinars e reuniões globais.',
      icon: Monitor
    },
    {
      id: 'janela',
      title: 'Janela de Libras',
      description: 'Pós-produção audiovisual com inserção de intérprete em fundo chroma key ou integrado à identidade visual do vídeo.',
      icon: Video
    },
    {
      id: 'consultoria',
      title: 'Consultoria Acessível',
      description: 'Análise de conformidade (LBI) e implementação de projetos de acessibilidade comunicacional para empresas.',
      icon: CheckCircle
    }
  ];

  return (
    <div className="w-full bg-gray-50">
      <SEO 
        title="Nossos Serviços - Interpretação e Tradução"
        description="Soluções completas em Libras: Interpretação simultânea, consecutiva, tradução de documentos, janela de Libras para vídeos e eventos online."
        keywords="serviços libras, interpretação simultânea libras, tradução documentos, janela de libras, acessibilidade digital, consultoria libras"
      />

      {/* Tech Hero */}
      <section className="relative bg-[#00995D] pt-32 pb-32 md:pb-48 text-center text-white rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#00A650] to-transparent rounded-full blur-[90px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
            <Layers size={14} className="text-[#00ff9d]" />
            <span className="text-white font-semibold text-xs uppercase tracking-widest">Portfólio de Soluções</span>
          </div>
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 tracking-tight">Serviços Especializados</h1>
          <p className="text-[#E0F2EB] text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Elimine barreiras de comunicação com tecnologia de ponta e expertise humana.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 -mt-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-[2rem] p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#00995D]/10 hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#00995D]/30 flex flex-col h-full group overflow-hidden relative">
                
                {/* Decorative gradient blob */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#00995D]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

                <div className="w-16 h-16 bg-[#F4F4F4] rounded-2xl flex items-center justify-center text-[#00995D] mb-6 group-hover:bg-[#00995D] group-hover:text-white transition-colors duration-300 relative z-10 shadow-inner">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="font-montserrat font-bold text-xl text-[#333333] mb-4 group-hover:text-[#00995D] transition-colors relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed text-sm flex-grow mb-8 relative z-10">
                  {service.description}
                </p>
                
                <Link 
                  to={`/contato?servico=${service.title}`} 
                  className="relative z-10 flex items-center justify-between w-full py-3 px-6 rounded-xl bg-gray-50 text-[#333333] font-bold text-sm group-hover:bg-[#00995D] group-hover:text-white transition-all duration-300 group-hover:shadow-lg hover:!scale-[1.02]"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
             <h2 className="text-[#00995D] font-montserrat font-semibold text-xs uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-2">
               <Cpu size={16} /> Workflow
             </h2>
             <h3 className="text-[#333333] font-montserrat font-bold text-3xl md:text-4xl">Processo de Contratação</h3>
          </div>
          
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-gray-100 via-[#00995D]/30 to-gray-100 z-0 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Solicitação", desc: "Envie detalhes do evento ou material para análise inicial." },
                { step: "02", title: "Análise", desc: "Curadoria técnica para definir a melhor solução e equipe." },
                { step: "03", title: "Proposta", desc: "Envio de orçamento detalhado e cronograma de execução." },
                { step: "04", title: "Execução", desc: "Entrega do serviço com garantia de qualidade e suporte." }
              ].map((item, idx) => (
                <div key={item.step} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#00995D] transition-colors duration-300 text-center group hover:shadow-xl">
                  <div className="w-24 h-24 mx-auto bg-white border-4 border-[#F4F4F4] group-hover:border-[#00995D] rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-sm transition-all duration-300 relative">
                    <span className="text-[#00995D]">{item.step}</span>
                  </div>
                  <h4 className="font-montserrat font-bold text-lg mb-3 text-[#333333]">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;