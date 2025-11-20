'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ValueCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'pink' | 'purple';
}

const valueCards: ValueCard[] = [
  {
    id: 1,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Resultados Reais',
    description: 'Foco em métricas que impactam seu faturamento, não apenas em curtidas e seguidores.',
    color: 'pink'
  },
  {
    id: 2,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Estratégia 360°',
    description: 'Atuamos em todas as frentes: do online ao offline, do marketing à operação.',
    color: 'purple'
  },
  {
    id: 3,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Parceria Real',
    description: 'Seu sucesso é nosso sucesso. Trabalhamos como parte do seu time.',
    color: 'pink'
  }
];

const ValueCard: React.FC<{ card: ValueCard; index: number }> = ({ card, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const colorClasses = {
    pink: {
      border: 'border-primary-pink/30 hover:border-primary-pink',
      bg: 'bg-primary-pink/5',
      text: 'text-primary-pink',
      shadow: 'hover:shadow-primary-pink/20',
      iconBg: 'bg-primary-pink/10'
    },
    purple: {
      border: 'border-primary-purple/30 hover:border-primary-purple',
      bg: 'bg-primary-purple/5',
      text: 'text-primary-purple',
      shadow: 'hover:shadow-primary-purple/20',
      iconBg: 'bg-primary-purple/10'
    }
  };

  const colors = colorClasses[card.color];

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-500 ${
        isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative bg-gray-medium/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl border-2 ${colors.border} transition-all duration-300 group h-full flex flex-col hover:scale-105 hover:shadow-xl hover:${colors.shadow}`}
      >
        {/* Icon Container */}
        <div
          className={`mb-6 ${colors.text} transition-all duration-300 ${colors.iconBg} rounded-2xl p-4 w-20 h-20 flex items-center justify-center ${
            isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
          }`}
        >
          {card.icon}
        </div>

        {/* Content */}
        <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${colors.text} transition-colors duration-300`}>
          {card.title}
        </h3>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed flex-grow">
          {card.description}
        </p>

        {/* Decorative Element */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color === 'pink' ? 'from-primary-pink' : 'from-primary-purple'} ${card.color === 'pink' ? 'to-primary-purple' : 'to-primary-pink'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>

        {/* Hover Glow Effect */}
        <div
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
            card.color === 'pink' ? 'bg-primary-pink/5' : 'bg-primary-purple/5'
          }`}
        ></div>
      </div>
    </div>
  );
};

const ValueProposition = () => {
  return (
    <section id="servicos" className="max-w-7xl mx-auto py-20 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-white">Por Que Escolher a</span>{' '}
          <span className="bg-gradient-to-r from-primary-pink to-primary-purple bg-clip-text text-transparent">
            Kreativ Haus?
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Não somos apenas mais uma agência. Somos seu parceiro estratégico de crescimento.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {valueCards.map((card, index) => (
          <ValueCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ValueProposition;

