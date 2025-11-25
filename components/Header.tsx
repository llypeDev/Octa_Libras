import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  // Detect scroll for header styling changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen 
          ? 'bg-white/95 backdrop-blur-md shadow-sm h-20' 
          : 'bg-white h-24 shadow-none'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
          {/* 
            NOTE: To use your image file, uncomment the line below and remove the SVG block.
            <img src="/assets/octa-logo-insta.png" alt="Octa Libras" className="h-12 w-auto" />
          */}
          
          {/* Modern SVG Logo Construction */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#00995D] opacity-10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
            <svg viewBox="0 0 100 100" className="w-10 h-10 text-[#00995D]" fill="currentColor">
              {/* Abstract Hand/Infinity Shape */}
              <path d="M50 20C35 20 25 30 25 45C25 60 35 70 45 70C48 70 50 68 50 65C50 68 52 70 55 70C65 70 75 60 75 45C75 30 65 20 50 20ZM45 60C38 60 35 55 35 45C35 38 38 30 45 30C48 30 50 32 50 35C50 32 52 30 55 30C62 30 65 38 65 45C65 55 62 60 55 60C52 60 50 58 50 55C50 58 48 60 45 60Z" />
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4" fill="none" className="opacity-30" />
            </svg>
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="font-montserrat font-bold text-2xl leading-none text-[#00995D] tracking-tight">
              OCTA
            </span>
            <span className="font-montserrat font-medium text-[0.65rem] uppercase tracking-[0.2em] text-[#333333]">
              Libras
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-4 py-2 font-montserrat text-sm font-semibold transition-colors duration-300 group ${
                isActive(link.path) ? 'text-[#00995D]' : 'text-[#333333] hover:text-[#00995D]'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00995D] transform origin-left transition-transform duration-300 ${
                isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
          ))}
          <Link
            to="/contato"
            className="ml-6 bg-[#00995D] hover:bg-[#00A650] text-white font-montserrat font-bold text-sm px-7 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#00995D]/20 hover:shadow-[#00995D]/40 transform hover:-translate-y-0.5"
          >
            Solicitar Orçamento
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#333333] hover:text-[#00995D] transition-colors p-2"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-montserrat text-lg font-medium py-2 border-b border-gray-50 last:border-0 ${
                isActive(link.path) ? 'text-[#00995D]' : 'text-[#333333]'
              }`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contato"
            className="bg-[#00995D] text-white text-center font-bold py-4 rounded-xl shadow-md mt-4 active:scale-95 transition-transform"
            onClick={closeMenu}
          >
            Solicitar Orçamento
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;