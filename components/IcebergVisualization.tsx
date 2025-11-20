'use client';

import React, { useState, useEffect, useRef } from 'react';

interface IcebergItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tooltip: string;
  section: 'above' | 'below';
}

const aboveWaterItems: IcebergItem[] = [
  {
    id: 'social-media',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Social Media',
    description: 'Posts e conteúdo',
    tooltip: 'Gestão completa de redes sociais com estratégia de conteúdo e engajamento',
    section: 'above'
  },
  {
    id: 'paid-traffic',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Tráfego Pago',
    description: 'Anúncios e campanhas',
    tooltip: 'Gestão de campanhas pagas no Google, Meta e outras plataformas com otimização contínua',
    section: 'above'
  }
];

const belowWaterItems: IcebergItem[] = [
  {
    id: 'logistics',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Logística',
    description: 'Otimização de processos',
    tooltip: 'Otimização completa de processos logísticos e operacionais para redução de custos',
    section: 'below'
  },
  {
    id: 'pos',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: 'PDV',
    description: 'Ponto de venda estratégico',
    tooltip: 'Estratégia de posicionamento de ponto de venda e experiência do cliente',
    section: 'below'
  },
  {
    id: 'training',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Treinamento Comercial',
    description: 'Capacitação de equipes',
    tooltip: 'Programas de treinamento e capacitação para equipes de vendas e atendimento',
    section: 'below'
  },
  {
    id: 'cashflow',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fluxo de Caixa',
    description: 'Gestão financeira',
    tooltip: 'Análise e otimização do fluxo de caixa e gestão financeira estratégica',
    section: 'below'
  },
  {
    id: 'analytics',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Análise de Dados',
    description: 'Insights estratégicos',
    tooltip: 'Análise profunda de dados e métricas para insights estratégicos e tomada de decisão',
    section: 'below'
  },
  {
    id: 'consulting',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Consultoria',
    description: 'Parceria estratégica',
    tooltip: 'Consultoria estratégica personalizada para crescimento sustentável do negócio',
    section: 'below'
  }
];

const IcebergCard: React.FC<{ item: IcebergItem; index: number; section: 'above' | 'below' }> = ({ 
  item, 
  index,
  section 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const isAbove = section === 'above';

  return (
    <div
      ref={cardRef}
      className="relative group"
      onMouseEnter={() => {
        setIsHovered(true);
        setShowTooltip(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowTooltip(false);
      }}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={`
          relative ${isAbove ? 'bg-gray-light/50' : 'bg-gray-light/30'} 
          ${isAbove ? 'p-6' : 'p-4'} 
          rounded-lg border-2 
          ${isAbove ? 'border-primary-purple/20' : 'border-primary-pink/20'} 
          transition-all duration-300 
          cursor-pointer
          h-full
          flex flex-col
          animate-fade-in-up
          ${
            isHovered 
              ? `${isAbove ? 'border-primary-purple scale-105 shadow-lg' : 'border-primary-pink scale-105 shadow-lg'} bg-gradient-to-br ${isAbove ? 'from-primary-purple/20 to-primary-purple/5' : 'from-primary-pink/20 to-primary-pink/5'}` 
              : ''
          }
        `}
      >
        {/* Icon */}
        <div
          className={`
            mb-3 
            ${isAbove ? 'text-primary-purple' : 'text-primary-pink'} 
            transition-all duration-300
            ${isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}
          `}
        >
          {item.icon}
        </div>

        {/* Content */}
        <h4 className={`${isAbove ? 'text-lg' : 'text-md'} font-semibold ${isAbove ? 'text-primary-purple' : 'text-white'} mb-1 transition-colors duration-300`}>
          {item.title}
        </h4>
        <p className={`${isAbove ? 'text-gray-300 text-sm' : 'text-gray-400 text-xs'}`}>
          {item.description}
        </p>

        {/* Hover Glow Effect */}
        <div
          className={`
            absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
            ${isAbove ? 'bg-primary-purple/10' : 'bg-primary-pink/10'}
          `}
        ></div>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div
          ref={tooltipRef}
          className={`
            absolute z-50 ${isAbove ? 'bottom-full mb-2' : 'top-full mt-2'} left-1/2 transform -translate-x-1/2
            bg-gray-dark border-2 ${isAbove ? 'border-primary-purple' : 'border-primary-pink'}
            rounded-lg p-3 shadow-xl
            w-48
            animate-fade-in-up
            pointer-events-none
          `}
          style={{ animationDuration: '0.2s' }}
        >
          <p className="text-white text-sm leading-relaxed text-center">
            {item.tooltip}
          </p>
          {/* Tooltip Arrow */}
          <div
            className={`
              absolute ${isAbove ? 'top-full left-1/2 transform -translate-x-1/2' : 'bottom-full left-1/2 transform -translate-x-1/2'} 
              ${isAbove ? 'border-t-primary-purple' : 'border-b-primary-pink'}
              ${isAbove ? 'border-t-8' : 'border-b-8'}
              border-l-8 border-l-transparent border-r-8 border-r-transparent
            `}
          ></div>
        </div>
      )}
    </div>
  );
};

const IcebergVisualization = () => {
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
    <div
      ref={sectionRef}
      className={`relative w-full max-w-4xl mx-auto my-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Water line with enhanced animation */}
      <div
        className="absolute left-0 right-0 z-20 h-1.5 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400"
        style={{ top: '35%' }}
      >
        <div className="absolute inset-0 animate-pulse opacity-70 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
      </div>

      {/* Above water section */}
      <div className="relative z-10 pb-8">
        <div className="bg-gradient-to-b from-gray-dark to-gray-medium rounded-t-3xl p-8 border-2 border-primary-pink/30 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary-pink">
            O Que Você Vê
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {aboveWaterItems.map((item, index) => (
              <IcebergCard
                key={item.id}
                item={item}
                index={index}
                section="above"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Below water section */}
      <div className="relative z-10 pt-8">
        <div className="bg-gradient-to-b from-gray-medium to-gray-dark rounded-b-3xl p-8 border-2 border-primary-pink/30 border-t-0 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary-pink">
            O Que Realmente Impulsiona Vendas
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {belowWaterItems.slice(0, 4).map((item, index) => (
              <IcebergCard
                key={item.id}
                item={item}
                index={index + 2}
                section="below"
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {belowWaterItems.slice(4).map((item, index) => (
              <IcebergCard
                key={item.id}
                item={item}
                index={index + 6}
                section="below"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Water effect overlay */}
      <div
        className="absolute left-0 right-0 z-5 h-32 bg-gradient-to-b from-transparent via-blue-500/15 to-transparent pointer-events-none"
        style={{ top: '30%' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
};

export default IcebergVisualization;