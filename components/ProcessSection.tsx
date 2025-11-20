'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'pink' | 'purple';
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    number: '01',
    title: 'Diagnóstico Completo',
    description: 'Analisamos profundamente seu negócio, mercado, concorrência e oportunidades. Identificamos pontos de melhoria e potenciais de crescimento.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    color: 'pink'
  },
  {
    id: 2,
    number: '02',
    title: 'Estratégia Personalizada',
    description: 'Desenvolvemos um plano estratégico 360° exclusivo para seu negócio, alinhando marketing, operações, logística e gestão financeira.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'purple'
  },
  {
    id: 3,
    number: '03',
    title: 'Implementação',
    description: 'Colocamos a estratégia em prática com execução impecável. Trabalhamos lado a lado com sua equipe, garantindo que tudo seja implementado corretamente.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'pink'
  },
  {
    id: 4,
    number: '04',
    title: 'Monitoramento e Otimização',
    description: 'Acompanhamos resultados em tempo real, analisamos métricas e otimizamos continuamente. Ajustamos estratégias conforme necessário para maximizar resultados.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'purple'
  },
  {
    id: 5,
    number: '05',
    title: 'Crescimento Sustentável',
    description: 'Garantimos crescimento contínuo e sustentável do seu negócio. Não somos apenas uma agência, somos seu parceiro de longo prazo no sucesso.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'pink'
  }
];

const ProcessStepCard: React.FC<{ step: ProcessStep; index: number; isVisible: boolean }> = ({
  step,
  index,
  isVisible
}) => {
  const colorClasses = {
    pink: {
      bg: 'bg-primary-pink/10',
      border: 'border-primary-pink/30',
      text: 'text-primary-pink',
      numberBg: 'bg-primary-pink/20',
      hover: 'hover:border-primary-pink hover:bg-primary-pink/20'
    },
    purple: {
      bg: 'bg-primary-purple/10',
      border: 'border-primary-purple/30',
      text: 'text-primary-purple',
      numberBg: 'bg-primary-purple/20',
      hover: 'hover:border-primary-purple hover:bg-primary-purple/20'
    }
  };

  const colors = colorClasses[step.color];

  return (
    <div
      className={`
        relative transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Connecting Line (except last) */}
      {index < processSteps.length - 1 && (
        <div className="hidden lg:block absolute top-24 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-pink via-primary-purple to-primary-pink transform translate-x-1/2 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
        </div>
      )}

      <div
        className={`
          relative bg-gray-medium/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 ${colors.border} ${colors.hover}
          transition-all duration-300 group h-full
          hover:scale-105 hover:shadow-xl
        `}
      >
        {/* Step Number */}
        <div className={`absolute -top-6 -left-6 w-16 h-16 ${colors.numberBg} rounded-full border-4 border-gray-dark flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300`}>
          <span className={`${colors.text} font-bold text-xl`}>{step.number}</span>
        </div>

        {/* Icon */}
        <div className={`${colors.text} mb-6 mt-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          {step.icon}
        </div>

        {/* Content */}
        <h3 className={`text-xl md:text-2xl font-bold mb-4 ${colors.text}`}>
          {step.title}
        </h3>
        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
          {step.description}
        </p>

        {/* Decorative Element */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color === 'pink' ? 'from-primary-pink' : 'from-primary-purple'} ${step.color === 'pink' ? 'to-primary-purple' : 'to-primary-pink'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto py-20 px-4 md:px-8"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-white">Como</span>{' '}
          <span className="bg-gradient-to-r from-primary-pink to-primary-purple bg-clip-text text-transparent">
            Trabalhamos
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Nossa metodologia comprovada em 5 passos para transformar seu negócio
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 relative">
        {processSteps.map((step, index) => (
          <ProcessStepCard
            key={step.id}
            step={step}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-6 text-lg">
          Pronto para começar sua transformação?
        </p>
        <button
          onClick={() => {
            const element = document.getElementById('contato');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="bg-gradient-to-r from-primary-pink to-primary-purple text-white font-bold px-8 py-4 rounded-full hover:scale-105 hover:shadow-xl hover:shadow-primary-pink/50 transition-all duration-300 text-lg"
        >
          Iniciar Diagnóstico Gratuito
        </button>
      </div>
    </section>
  );
};

export default ProcessSection;

