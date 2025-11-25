import React from 'react';
import { Award, BookOpen, Heart, Shield, Users, Globe, Zap, Target } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <SEO 
        title="Sobre Nós - Quem Somos"
        description="Conheça a Octa Libras e nossa equipe de intérpretes qualificados. Ética, confidencialidade e respeito à comunidade surda."
        keywords="sobre octa libras, intérpretes certificados, ética profissional, prolibras, letras libras, história libras, acessibilidade cultural"
      />

      {/* Hero Section - Tech Style */}
      <section className="relative bg-[#00995D] pt-32 pb-32 md:pb-48 text-center text-white rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#00A650] to-[#B6E2CF] rounded-full blur-[100px] opacity-30 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFFFFF] rounded-full blur-[80px] opacity-10 -translate-x-1/4 translate-y-1/4"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
            <Users size={14} className="text-[#00ff9d]" />
            <span className="text-white font-semibold text-xs uppercase tracking-widest">Quem Somos</span>
          </div>
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 tracking-tight">
            Sobre a Octa
          </h1>
          <p className="text-[#E0F2EB] text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Mais do que tradução, construímos pontes tecnológicas entre culturas e pessoas.
          </p>
        </div>
      </section>

      {/* Main Content - Tech Grid Background */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image placeholder with Tech Border */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-[#00995D] rounded-[2rem] transform translate-x-4 translate-y-4 opacity-20 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 border-2 border-[#00995D]/30 rounded-[2rem] transform -translate-x-4 -translate-y-4 z-0"></div>
              <img 
                src="https://picsum.photos/seed/interpreter/600/800" 
                alt="Intérprete Profissional" 
                className="rounded-[2rem] shadow-2xl relative z-10 w-full object-cover h-[500px] grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 z-20 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="bg-[#00995D] p-2 rounded-full text-white">
                    <Target size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Precisão</p>
                    <p className="text-[#00995D] font-bold">Linguística</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-[#00995D] font-montserrat font-semibold text-sm uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                  <Globe size={16} /> Nossa História
                </h2>
                <h3 className="text-[#333333] font-montserrat font-bold text-3xl md:text-4xl leading-tight">
                  Experiência Humana,<br/>
                  <span className="text-[#00995D]">Excelência Digital.</span>
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed font-open-sans text-lg">
                <p>
                  A <strong>Octa Libras</strong> nasceu da necessidade de oferecer serviços de tradução e interpretação de alta performance, focados não apenas na técnica linguística, mas na integração com novas tecnologias de comunicação.
                </p>
                <p>
                  Com anos de experiência no mercado, nossa equipe é formada por profissionais certificados (ProLibras/Letras-Libras) prontos para atuar em conferências híbridas, ambientes educacionais 4.0 e conteúdo corporativo digital.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#00995D]/30 transition-all group">
                  <p className="font-bold text-[#00995D] text-4xl mb-1 group-hover:scale-110 transition-transform origin-left">+500</p>
                  <p className="text-sm text-gray-600 font-medium">Eventos Realizados</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#00995D]/30 transition-all group">
                  <p className="font-bold text-[#00995D] text-4xl mb-1 group-hover:scale-110 transition-transform origin-left">100%</p>
                  <p className="text-sm text-gray-600 font-medium">Compromisso Ético</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-[#333333] font-montserrat font-bold text-3xl md:text-4xl">Nossos Pilares</h3>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Fundamentos que guiam cada conexão que estabelecemos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard icon={Shield} title="Confidencialidade" desc="Sigilo absoluto garantido por NDA e criptografia de dados em transferências." />
            <ValueCard icon={Award} title="Qualidade Técnica" desc="Profissionais com formação acadêmica superior e fluência nativa." />
            <ValueCard icon={Heart} title="Empatia" desc="Atendimento humanizado que respeita as especificidades da cultura surda." />
            <ValueCard icon={Zap} title="Inovação" desc="Uso das melhores ferramentas para transmissão e gravação acessível." />
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard: React.FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
  <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#00995D]/10 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
    <div className="absolute top-0 w-full h-1 left-0 bg-gradient-to-r from-transparent via-[#00995D] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    
    <div className="inline-flex p-4 bg-gray-50 rounded-2xl text-[#00995D] mb-6 group-hover:bg-[#00995D] group-hover:text-white transition-colors duration-300 shadow-inner">
      <Icon size={28} />
    </div>
    <h4 className="font-montserrat font-bold text-xl text-[#333333] mb-3">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default About;