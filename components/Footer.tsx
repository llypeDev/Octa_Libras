import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#004d2e] text-white pt-20 pb-10 rounded-t-[3rem] mt-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
             <div className="flex items-center gap-3">
              <div className="bg-white p-2.5 rounded-full shadow-lg">
                <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#00995D]" fill="currentColor">
                  <path d="M50 20C35 20 25 30 25 45C25 60 35 70 45 70C48 70 50 68 50 65C50 68 52 70 55 70C65 70 75 60 75 45C75 30 65 20 50 20ZM45 60C38 60 35 55 35 45C35 38 38 30 45 30C48 30 50 32 50 35C50 32 52 30 55 30C62 30 65 38 65 45C65 55 62 60 55 60C52 60 50 58 50 55C50 58 48 60 45 60Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-2xl leading-none text-white tracking-tight">OCTA</span>
                <span className="font-montserrat font-medium text-[0.6rem] uppercase tracking-[0.2em] text-[#B6E2CF]">LIBRAS</span>
              </div>
            </div>
            <p className="text-[#B6E2CF] text-sm leading-relaxed max-w-xs font-light">
              Conectando pessoas e empresas através da Língua Brasileira de Sinais. 
              Compromisso com a inclusão, ética e profissionalismo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-[#00995D] after:rounded-full">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-[#B6E2CF] hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 duration-300">Início</Link></li>
              <li><Link to="/sobre" className="text-[#B6E2CF] hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 duration-300">Sobre Mim</Link></li>
              <li><Link to="/servicos" className="text-[#B6E2CF] hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 duration-300">Serviços</Link></li>
              <li><Link to="/portfolio" className="text-[#B6E2CF] hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 duration-300">Portfólio</Link></li>
              <li><Link to="/contato" className="text-[#B6E2CF] hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 duration-300">Contato</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-[#00995D] after:rounded-full">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-[#B6E2CF] text-sm group">
                <div className="bg-[#ffffff10] p-2 rounded-lg group-hover:bg-[#00995D] transition-colors">
                  <Mail size={16} />
                </div>
                <span className="mt-1">contato@octalibras.com.br</span>
              </li>
              <li className="flex items-start gap-4 text-[#B6E2CF] text-sm group">
                <div className="bg-[#ffffff10] p-2 rounded-lg group-hover:bg-[#00995D] transition-colors">
                  <Phone size={16} />
                </div>
                <span className="mt-1">(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-4 text-[#B6E2CF] text-sm group">
                <div className="bg-[#ffffff10] p-2 rounded-lg group-hover:bg-[#00995D] transition-colors">
                  <MapPin size={16} />
                </div>
                <span className="mt-1">São Paulo - SP<br/>(Atendimento Nacional)</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-[#00995D] after:rounded-full">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-[#ffffff15] hover:bg-[#00995D] p-3 rounded-xl transition-all duration-300 hover:scale-110">
                <Instagram size={22} className="text-white" />
              </a>
              <a href="#" className="bg-[#ffffff15] hover:bg-[#00995D] p-3 rounded-xl transition-all duration-300 hover:scale-110">
                <Linkedin size={22} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#ffffff20] pt-8 flex flex-col md:flex-row justify-between items-center text-[#B6E2CF] text-xs font-light">
          <p className="text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Octa Libras. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido com foco em Acessibilidade Digital.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;