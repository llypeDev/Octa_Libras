import React from 'react';
import { Link } from 'react-router-dom';
import { HandMetal, Users, CheckCircle, Video, FileText, Globe, ArrowRight, Activity, Cpu, Layers } from 'lucide-react';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <SEO 
        title="Tradução e Interpretação Profissional"
        description="Serviços profissionais de tradução e interpretação de Libras para empresas, escolas e eventos. Acessibilidade comunicacional com ética e qualidade."
        keywords="intérprete de libras, tradução libras, acessibilidade, inclusão, libras são paulo, consultoria em acessibilidade, interpretação simultânea"
      />

      {/* Hero Section - Tech & Modern */}
      <section className="relative bg-[#00995D] text-white pt-32 pb-32 md:pb-48 rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden">
        {/* Tech Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        {/* Abstract Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#00A650] to-[#B6E2CF] rounded-full blur-[100px] opacity-30 translate-x-1/3 -translate-y-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFFFFF] rounded-full blur-[80px] opacity-10 -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center md:text-left md:mx-0">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B6E2CF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff9d]"></span>
              </span>
              <span className="text-[#ffffff] font-semibold text-xs uppercase tracking-widest">Tecnologia em Acessibilidade</span>
            </div>
            
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight tracking-tight">
              Conexão humana,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B6E2CF] to-white">precisão digital.</span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-light border-l-4 border-[#B6E2CF] pl-6">
              Interpretação e Tradução em Libras para o mundo moderno. 
              Eventos híbridos, plataformas digitais e conteúdo corporativo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/contato"
                className="relative overflow-hidden group bg-white text-[#00995D] font-montserrat font-bold py-4 px-10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <span className="relative z-10">Solicitar Orçamento</span>
                <div className="absolute inset-0 bg-[#E0F2EB] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
              <Link
                to="/servicos"
                className="group flex items-center justify-center gap-2 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-montserrat font-semibold py-4 px-10 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Nossas Soluções
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Libras? - Tech Cards */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[#00995D] font-montserrat font-semibold text-xs uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2">
              <Activity size={16} /> Performance & Impacto
            </h2>
            <h3 className="text-[#333333] font-montserrat font-bold text-3xl md:text-4xl">Por que modernizar sua comunicação?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "Inclusão 4.0",
                description: "Integração total da comunidade surda em plataformas digitais e presenciais.",
              },
              {
                icon: CheckCircle,
                title: "Compliance",
                description: "Atendimento rigoroso às normas da LBI com documentação técnica completa.",
              },
              {
                icon: Globe,
                title: "Conexão Global",
                description: "Atendimento remoto de alta fidelidade para qualquer lugar do mundo.",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-lg shadow-gray-100 hover:shadow-2xl hover:shadow-[#00995D]/10 transition-all duration-500 group border border-gray-100 hover:border-[#00995D]/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00995D] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="bg-gray-50 p-5 rounded-2xl mb-6 text-[#00995D] group-hover:bg-[#00995D] group-hover:text-white transition-all duration-500">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="font-montserrat font-bold text-xl text-[#333333] mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed font-open-sans text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Overview - Glassmorphism */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b border-gray-100 pb-8">
            <div>
              <h2 className="text-[#00995D] font-montserrat font-semibold text-xs uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <Layers size={16} /> Ecossistema de Serviços
              </h2>
              <h3 className="text-[#333333] font-montserrat font-bold text-3xl md:text-4xl">Soluções Integradas</h3>
            </div>
            <Link to="/servicos" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-[#00995D] font-bold hover:bg-[#00995D] hover:text-white hover:border-[#00995D] transition-all group">
              Explorar Serviços
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              icon={Users} 
              title="Interpretação Simultânea" 
              desc="Agilidade e precisão em tempo real para eventos de grande porte." 
            />
            <ServiceCard 
              icon={FileText} 
              title="Tradução de Documentos" 
              desc="Conversão técnica de textos para o formato de vídeo acessível." 
            />
            <ServiceCard 
              icon={Video} 
              title="Janela de Libras" 
              desc="Inserção audiovisual profissional para conteúdo digital." 
            />
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/servicos" className="inline-flex items-center gap-2 text-[#00995D] font-bold">Ver todos os serviços <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      {/* CTA Strip - Tech Gradient */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-r from-[#004d2e] to-[#00995D] rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-[#00995D]/20 group">
             {/* Animated Background Elements */}
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
             <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#00ff9d] rounded-full mix-blend-overlay filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-montserrat font-bold text-3xl md:text-5xl mb-6 leading-tight">Inove com responsabilidade.</h2>
              <p className="text-xl text-[#E0F2EB] mb-10 font-light">
                Tecnologia e humanização trabalhando juntas pela acessibilidade.
              </p>
              <Link to="/contato" className="inline-block bg-white text-[#004d2e] font-montserrat font-bold py-4 px-12 rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white">
                Iniciar Projeto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
  <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#00995D]/5 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon size={64} className="text-[#00995D]" />
    </div>
    
    <div className="flex items-center space-x-4 mb-6 relative z-10">
      <div className="p-3 bg-gray-50 rounded-xl text-[#00995D] group-hover:bg-[#00995D] group-hover:text-white transition-colors duration-300 shadow-inner">
        <Icon size={24} />
      </div>
    </div>
    
    <h4 className="font-montserrat font-bold text-lg text-[#333333] leading-tight mb-3 relative z-10">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">{desc}</p>
    
    <Link to="/servicos" className="flex items-center gap-2 text-[#00995D] font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all relative z-10">
      Saiba mais <ArrowRight size={14}/>
    </Link>
  </div>
);

export default Home;