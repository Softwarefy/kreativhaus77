'use client';

import React, { useState, useEffect, useRef } from 'react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aqui você pode integrar com um serviço de email ou API
    // Por enquanto, vamos redirecionar para WhatsApp com os dados
    const message = `Olá! Meu nome é ${formData.name}. ${formData.message || 'Gostaria de saber mais sobre os serviços da Kreativ Haus 77.'} Email: ${formData.email} Telefone: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 500);
  };

  const openWhatsApp = () => {
    const message = 'Olá! Gostaria de saber mais sobre os serviços da Kreativ Haus 77.';
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="contato"
      className={`max-w-5xl mx-auto py-20 px-4 md:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="bg-gradient-to-r from-primary-pink/20 via-primary-purple/20 to-primary-pink/20 p-8 md:p-12 rounded-3xl border-2 border-primary-pink/30 shadow-2xl relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Urgency Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full animate-pulse">
            <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span className="text-red-400 font-semibold text-sm">Oportunidades Limitadas Este Mês</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pronto para <span className="bg-gradient-to-r from-primary-pink to-primary-purple bg-clip-text text-transparent">Crescer de Verdade</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Vamos conversar sobre como podemos aumentar seu faturamento
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            Preencha o formulário ou fale conosco diretamente pelo WhatsApp
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {/* Contact Form */}
          <div className="bg-gray-medium/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-primary-pink/20">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome"
                  required
                  className="w-full px-4 py-3 bg-gray-dark/50 border border-gray-light/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Seu e-mail"
                  required
                  className="w-full px-4 py-3 bg-gray-dark/50 border border-gray-light/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Seu telefone"
                  required
                  className="w-full px-4 py-3 bg-gray-dark/50 border border-gray-light/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Como podemos ajudar?"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-dark/50 border border-gray-light/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-pink to-primary-purple text-white font-bold py-3 px-6 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-primary-pink/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Quick Contact Options */}
          <div className="space-y-6">
            {/* WhatsApp Button */}
            <button
              onClick={openWhatsApp}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Falar no WhatsApp Agora
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => {
                const element = document.getElementById('servicos');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="w-full border-2 border-primary-purple/50 text-primary-purple font-bold py-4 px-6 rounded-xl hover:bg-primary-purple/10 hover:border-primary-purple hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Conhecer Nossos Serviços
            </button>

            {/* Trust Indicators */}
            <div className="bg-gray-medium/50 p-6 rounded-xl border border-primary-pink/20">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-pink" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Por Que Escolher a Kreativ Haus?
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-pink" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Resposta em até 24 horas
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-pink" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Consultoria gratuita inicial
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-pink" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Sem compromisso na primeira conversa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

