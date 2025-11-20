'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Case {
  id: number;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: {
    before: string;
    after: string;
    improvement: string;
    icon: React.ReactNode;
  }[];
  image: string;
  color: 'pink' | 'purple';
}

const cases: Case[] = [
  {
    id: 1,
    client: 'Softwarefy',
    industry: 'Fábrica de Software',
    challenge: 'Baixa visibilidade online e dificuldade em gerar leads qualificados para produtos SaaS.',
    solution: 'Implementamos estratégia completa de marketing digital focada em inbound marketing, SEO técnico e campanhas segmentadas no LinkedIn e Google Ads.',
    metrics: [
      {
        before: '50 leads/mês',
        after: '450 leads/mês',
        improvement: '+800%',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        before: '2% conversão',
        after: '12% conversão',
        improvement: '+500%',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        )
      },
      {
        before: 'R$ 80k faturamento',
        after: 'R$ 320k faturamento',
        improvement: '+300%',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      }
    ],
    image: '/softwarefy.png',
    color: 'pink'
  },
  {
    id: 2,
    client: 'Torqon',
    industry: 'Loja de Autopeças',
    challenge: 'Baixa presença digital e concorrência forte no mercado físico e online.',
    solution: 'Desenvolvemos presença digital completa com e-commerce otimizado, estratégia de conteúdo especializada e campanhas segmentadas por audiência automotiva.',
    metrics: [
      {
        before: 'R$ 120k vendas/mês',
        after: 'R$ 420k vendas/mês',
        improvement: '+250%',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        before: '200 visitantes/mês',
        after: '3.500 visitantes/mês',
        improvement: '+1.650%',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        )
      },
      {
        before: '15 clientes novos/mês',
        after: '180 clientes novos/mês',
        improvement: '+1.100%',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      }
    ],
    image: '/torqon.png',
    color: 'purple'
  },
  {
    id: 3,
    client: 'Meownie',
    industry: 'Browneria',
    challenge: 'Falta de posicionamento de marca e necessidade de aumentar ticket médio e fidelização de clientes.',
    solution: 'Criamos identidade visual forte, estratégia de conteúdo para Instagram e TikTok, e programa de fidelidade integrado ao PDV para aumentar recorrência.',
    metrics: [
      {
        before: 'R$ 45 ticket médio',
        after: 'R$ 120 ticket médio',
        improvement: '+167%',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        before: '1.500 seguidores',
        after: '28.000 seguidores',
        improvement: '+1.767%',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        before: '35% taxa retorno',
        after: '78% taxa retorno',
        improvement: '+123%',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        )
      }
    ],
    image: '/meownie.png',
    color: 'pink'
  },
  {
    id: 4,
    client: 'Ichibanprintshop',
    industry: 'Gráfica',
    challenge: 'Operação manual ineficiente e dificuldade em competir com grandes gráficas online.',
    solution: 'Automatizamos processo de orçamentos, desenvolvemos portal de pedidos online e otimizamos logística interna, reduzindo tempo de entrega em 60%.',
    metrics: [
      {
        before: '7 dias entrega',
        after: '2,5 dias entrega',
        improvement: '-64%',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        before: 'R$ 250k faturamento',
        after: 'R$ 680k faturamento',
        improvement: '+172%',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        before: '120 pedidos/mês',
        after: '450 pedidos/mês',
        improvement: '+275%',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        )
      }
    ],
    image: '/ichiban.jpg',
    color: 'purple'
  }
];

const CaseCard: React.FC<{ caseData: Case; index: number; isExpanded: boolean; onToggle: () => void }> = ({
  caseData,
  index,
  isExpanded,
  onToggle
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      gradient: 'from-primary-pink to-primary-purple'
    },
    purple: {
      border: 'border-primary-purple/30 hover:border-primary-purple',
      bg: 'bg-primary-purple/5',
      text: 'text-primary-purple',
      gradient: 'from-primary-purple to-primary-pink'
    }
  };

  const colors = colorClasses[caseData.color];

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-500 ${
        isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div
        className={`bg-gray-medium/70 backdrop-blur-sm rounded-2xl border-2 ${colors.border} transition-all duration-300 overflow-hidden cursor-pointer group ${
          isExpanded ? 'shadow-xl shadow-primary-pink/20' : 'hover:shadow-lg'
        }`}
        onClick={onToggle}
      >
        {/* Header */}
        <div className={`p-6 ${colors.bg} border-b-2 ${colors.border}`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`relative w-16 h-16 ${colors.text} transform group-hover:scale-110 transition-transform duration-300 ${caseData.image === '/meownie.png' ? 'bg-transparent' : 'bg-white/10'} rounded-xl ${caseData.image === '/meownie.png' ? 'p-0' : 'p-2'} overflow-hidden`}>
                <Image
                  src={caseData.image}
                  alt={`Logo ${caseData.client}`}
                  fill
                  className={caseData.image === '/meownie.png' ? 'object-cover' : 'object-contain'}
                  sizes="64px"
                />
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${colors.text} mb-1`}>{caseData.client}</h3>
                <p className="text-gray-400 text-sm">{caseData.industry}</p>
              </div>
            </div>
            <button
              className={`${colors.text} hover:scale-110 transition-transform duration-300`}
              aria-label={isExpanded ? 'Recolher' : 'Expandir'}
            >
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className={`p-6 transition-all duration-500 ${isExpanded ? 'max-h-[2000px]' : 'max-h-0'} overflow-hidden`}>
          {/* Challenge & Solution */}
          <div className="mb-6 space-y-4">
            <div>
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className={`${colors.text}`}>🔴</span> Desafio
              </h4>
              <p className="text-gray-300 leading-relaxed">{caseData.challenge}</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className={`${colors.text}`}>✅</span> Solução
              </h4>
              <p className="text-gray-300 leading-relaxed">{caseData.solution}</p>
            </div>
          </div>

          {/* Metrics - Before/After */}
          <div className="grid md:grid-cols-3 gap-4">
            {caseData.metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`bg-gray-dark/50 p-4 rounded-xl border ${colors.border} hover:scale-105 transition-transform duration-300`}
              >
                <div className={`${colors.text} mb-3 flex items-center gap-2`}>
                  {metric.icon}
                  <span className="font-semibold text-sm">Métrica {idx + 1}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">Antes:</span>
                    <span className="text-red-400 text-xs font-medium line-through">{metric.before}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">Depois:</span>
                    <span className={`${colors.text} text-sm font-bold`}>{metric.after}</span>
                  </div>
                  <div className={`mt-3 pt-3 border-t ${colors.border}`}>
                    <div className={`text-lg font-bold ${colors.text}`}>{metric.improvement}</div>
                    <div className="text-gray-400 text-xs">Melhoria</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CasesSection = () => {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const toggleCase = (caseId: number) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-white">Cases de</span>{' '}
          <span className="bg-gradient-to-r from-primary-pink to-primary-purple bg-clip-text text-transparent">
            Sucesso Real
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Resultados comprovados de clientes que transformaram seus negócios com nossa metodologia
        </p>
      </div>

      {/* Cases Grid */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {cases.map((caseData, index) => (
          <CaseCard
            key={caseData.id}
            caseData={caseData}
            index={index}
            isExpanded={expandedCase === caseData.id}
            onToggle={() => toggleCase(caseData.id)}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">Quer resultados como estes para o seu negócio?</p>
        <button
          onClick={() => {
            const element = document.getElementById('contato');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="bg-gradient-to-r from-primary-pink to-primary-purple text-white font-bold px-8 py-3 rounded-full hover:scale-105 hover:shadow-xl hover:shadow-primary-pink/50 transition-all duration-300"
        >
          Fale com um Especialista
        </button>
      </div>
    </section>
  );
};

export default CasesSection;

