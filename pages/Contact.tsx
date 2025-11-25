import React, { useState } from 'react';
import { Mail, Phone, Calendar, Send, MessageCircle, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', serviceType: '', date: '', message: '' });
  };

  return (
    <div className="w-full bg-gray-50">
      <SEO 
        title="Fale Conosco - Solicite Orçamento"
        description="Entre em contato com a Octa Libras para solicitar um orçamento. Atendimento ágil para empresas, escolas e eventos em todo o Brasil."
        keywords="contato intérprete libras, orçamento tradução libras, contratar intérprete, telefone libras, whatsapp libras, cotação libras"
      />

      {/* Tech Hero */}
      <section className="relative bg-[#00995D] pt-32 pb-32 md:pb-48 text-center text-white rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#00A650] rounded-full blur-[120px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
            <MessageCircle size={14} className="text-[#00ff9d]" />
            <span className="text-white font-semibold text-xs uppercase tracking-widest">Atendimento</span>
          </div>
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 tracking-tight">Solicite um Orçamento</h1>
          <p className="text-[#E0F2EB] text-lg max-w-2xl mx-auto font-light">
            Resposta rápida e soluções personalizadas para o seu projeto.
          </p>
        </div>
      </section>

      <section className="py-24 -mt-20 relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Contact Info Side */}
            <div className="w-full lg:w-1/3 space-y-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
                <h3 className="font-montserrat font-bold text-2xl text-[#333333] mb-6">Canais Diretos</h3>
                
                <div className="space-y-6">
                  <ContactItem 
                    icon={Phone} 
                    title="Telefone / WhatsApp" 
                    content="(11) 99999-9999" 
                    sub="Seg à Sex, das 9h às 18h" 
                  />
                  <ContactItem 
                    icon={Mail} 
                    title="E-mail" 
                    content="contato@octalibras.com.br" 
                    sub="Resposta em até 24h" 
                  />
                  <ContactItem 
                    icon={MapPin} 
                    title="Localização" 
                    content="São Paulo - SP" 
                    sub="Atendimento Nacional (Online/Presencial)" 
                  />
                </div>
              </div>

              <div className="bg-[#004d2e] p-8 rounded-[2rem] shadow-lg text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00995D] rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <h4 className="font-montserrat font-bold text-xl mb-4 relative z-10">Precisa de urgência?</h4>
                <p className="text-[#B6E2CF] text-sm mb-6 relative z-10">Para eventos de última hora, chame no WhatsApp para atendimento prioritário.</p>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 bg-[#25D366] hover:bg-[#128C7E] rounded-xl font-bold transition-colors relative z-10"
                >
                  <MessageCircle size={18} className="mr-2" /> Chamar no Whats
                </a>
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-gray-200 border border-gray-100 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00995D] to-[#B6E2CF]"></div>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                      <Send size={32} />
                    </div>
                    <h3 className="font-bold text-2xl mb-2">Mensagem Enviada!</h3>
                    <p>Recebemos sua solicitação e entraremos em contato em breve.</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="font-montserrat font-bold text-2xl text-[#333333]">Envie sua solicitação</h3>
                      <p className="text-gray-500 text-sm mt-1">Preencha os campos abaixo para receber um orçamento detalhado.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputGroup label="Nome Completo" id="name" type="text" value={formData.name} onChange={handleChange} placeholder="Seu nome" />
                        <InputGroup label="E-mail Corporativo" id="email" type="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputGroup label="Telefone" id="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(00) 00000-0000" />
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1" htmlFor="serviceType">Tipo de Serviço</label>
                          <div className="relative">
                            <select 
                              id="serviceType" 
                              name="serviceType" 
                              value={formData.serviceType}
                              onChange={handleChange}
                              className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00995D] focus:bg-white focus:ring-4 focus:ring-[#00995D]/10 outline-none transition-all appearance-none cursor-pointer text-gray-700 font-medium"
                            >
                              <option value="">Selecione a necessidade...</option>
                              <option value="Simultanea">Interpretação Simultânea (Eventos)</option>
                              <option value="Consecutiva">Interpretação Consecutiva (Reuniões)</option>
                              <option value="Traducao">Tradução de Documentos/Vídeos</option>
                              <option value="Online">Interpretação Remota/Online</option>
                              <option value="Janela">Janela de Libras (Audiovisual)</option>
                              <option value="Outro">Outro</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1" htmlFor="date">Data do Evento (Opcional)</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <Calendar size={18} />
                            </div>
                            <input 
                            type="date" 
                            id="date" 
                            name="date" 
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full pl-10 px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00995D] focus:bg-white focus:ring-4 focus:ring-[#00995D]/10 outline-none transition-all text-gray-700 font-medium"
                            />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1" htmlFor="message">Detalhes do Projeto</label>
                        <textarea 
                          required
                          id="message" 
                          name="message" 
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00995D] focus:bg-white focus:ring-4 focus:ring-[#00995D]/10 outline-none transition-all resize-none text-gray-700 font-medium"
                          placeholder="Descreva o contexto, público-alvo, plataforma e duração estimada..."
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        className="w-full bg-[#00995D] hover:bg-[#008250] text-white font-montserrat font-bold py-5 rounded-xl shadow-lg shadow-[#00995D]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 group"
                      >
                        <span className="text-lg">Enviar Solicitação</span>
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const ContactItem: React.FC<{ icon: any, title: string, content: string, sub?: string }> = ({ icon: Icon, title, content, sub }) => (
  <div className="flex items-start space-x-4 group p-2 rounded-xl hover:bg-gray-50 transition-colors">
    <div className="bg-[#E0F2EB] p-3 rounded-full text-[#00995D] group-hover:bg-[#00995D] group-hover:text-white transition-colors duration-300">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="font-bold text-[#333333] text-sm mb-0.5">{title}</h4>
      <p className="text-[#00995D] font-bold text-base">{content}</p>
      {sub && <p className="text-gray-400 text-xs mt-1">{sub}</p>}
    </div>
  </div>
);

const InputGroup: React.FC<{ label: string, id: string, type: string, value: string, onChange: any, placeholder?: string }> = ({ label, id, type, value, onChange, placeholder }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1" htmlFor={id}>{label}</label>
    <input 
      required
      type={type} 
      id={id} 
      name={id} 
      value={value}
      onChange={onChange}
      className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00995D] focus:bg-white focus:ring-4 focus:ring-[#00995D]/10 outline-none transition-all text-gray-700 font-medium placeholder-gray-400"
      placeholder={placeholder}
    />
  </div>
);

export default Contact;