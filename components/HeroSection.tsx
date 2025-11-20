'use client';

import React from 'react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative max-w-6xl mx-auto text-center py-32 md:py-40 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-pink/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-pink/10 via-primary-purple/10 to-primary-pink/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 20, 147, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content with animations */}
      <div className="relative z-10">
        {/* Main Title - Fade in from top */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="text-white inline-block animate-slide-in-left">Kreativ</span>{' '}
          <span className="bg-gradient-to-r from-primary-pink via-primary-purple to-primary-pink bg-clip-text text-transparent animate-gradient inline-block animate-slide-in-right">
            Haus 77
          </span>
        </h1>

        {/* First Subtitle - Fade in with delay */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Não entregamos <span className="line-through text-gray-500">postzinho bonito</span>.
        </p>

        {/* Main Value Proposition - Fade in with delay */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <span className="text-primary-pink inline-block hover:scale-110 transition-transform duration-300">
            Entregamos aumento de faturamento
          </span>{' '}
          <span className="text-white">e</span>{' '}
          <span className="text-primary-purple inline-block hover:scale-110 transition-transform duration-300">
            mais vendas
          </span>.
        </p>

        {/* Description - Fade in with delay */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Somos um <span className="text-primary-pink font-semibold relative">
            parceiro de negócios
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-pink to-primary-purple opacity-50"></span>
          </span>, 
          não apenas uma agência de marketing.
        </p>

        {/* CTA Buttons - Fade in with delay */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {/* Primary CTA */}
          <button
            onClick={scrollToContact}
            className="group relative bg-gradient-to-r from-primary-pink to-primary-purple text-white font-bold text-lg md:text-xl px-10 py-5 rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-primary-pink/50 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Começar Agora
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={scrollToContact}
            className="group border-2 border-primary-purple/50 text-primary-purple font-bold text-lg md:text-xl px-10 py-5 rounded-full hover:bg-primary-purple/10 hover:border-primary-purple hover:scale-105 transition-all duration-300"
          >
            Falar com Especialista
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm md:text-base animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-pink" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Resultados Comprovados</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-purple" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Metodologia Própria</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-pink" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Parceria Estratégica</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
