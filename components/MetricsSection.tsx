'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Metric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  icon: React.ReactNode;
  color: 'pink' | 'purple';
}

const metrics: Metric[] = [
  {
    value: 150,
    suffix: '%',
    label: 'Aumento Médio de Faturamento',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'pink'
  },
  {
    value: 200,
    suffix: '+',
    label: 'Clientes Satisfeitos',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'purple'
  },
  {
    value: 500,
    suffix: '+',
    label: 'Projetos Entregues',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'pink'
  },
  {
    value: 98,
    suffix: '%',
    label: 'Taxa de Satisfação',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'purple'
  },
];

const CountUpAnimation: React.FC<{ metric: Metric; isVisible: boolean }> = ({ metric, isVisible }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // 2 segundos
  const steps = 60;
  const increment = metric.value / steps;
  const stepDuration = duration / steps;

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newCount = Math.min(Math.floor(increment * currentStep), metric.value);
      setCount(newCount);

      if (currentStep >= steps || newCount >= metric.value) {
        setCount(metric.value);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, metric.value, increment, stepDuration, steps]);

  const colorClasses = {
    pink: 'text-primary-pink border-primary-pink/30 bg-primary-pink/5',
    purple: 'text-primary-purple border-primary-purple/30 bg-primary-purple/5'
  };

  const isPink = metric.color === 'pink';
  
  return (
    <div className={`relative bg-gray-medium/50 p-8 rounded-2xl border-2 ${colorClasses[metric.color]} hover:border-opacity-100 transition-all duration-300 group hover:scale-105 ${isPink ? 'hover:shadow-xl hover:shadow-primary-pink/20' : 'hover:shadow-xl hover:shadow-primary-purple/20'}`}>
      {/* Icon */}
      <div className={`mb-6 ${isPink ? 'text-primary-pink' : 'text-primary-purple'} transition-transform duration-300 group-hover:scale-110`}>
        {metric.icon}
      </div>

      {/* Number */}
      <div className="mb-4">
        <span className={`text-5xl md:text-6xl font-bold ${isPink ? 'text-primary-pink' : 'text-primary-purple'}`}>
          {metric.prefix}{count.toLocaleString('pt-BR')}{metric.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-gray-300 text-lg font-medium">
        {metric.label}
      </p>

      {/* Animated underline */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${metric.color === 'pink' ? 'from-primary-pink' : 'from-primary-purple'} ${metric.color === 'pink' ? 'to-primary-purple' : 'to-primary-pink'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
    </div>
  );
};

const MetricsSection = () => {
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
    <section ref={sectionRef} className="max-w-7xl mx-auto py-20 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-white">Números que</span>{' '}
          <span className="bg-gradient-to-r from-primary-pink to-primary-purple bg-clip-text text-transparent">
            Falam por Nós
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Resultados reais de clientes que confiaram na nossa metodologia
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CountUpAnimation metric={metric} isVisible={isVisible} />
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="relative mt-16 text-center">
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-medium/50 rounded-full border border-primary-pink/20">
          <svg className="w-5 h-5 text-primary-pink animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-300 text-sm md:text-base">
            Métricas baseadas em projetos reais dos últimos 12 meses
          </span>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
