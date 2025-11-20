'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  logo: string;
  rating: number;
  text: string;
  result?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'CEO',
    company: 'Softwarefy - Fábrica de Software',
    logo: '/softwarefy.png',
    rating: 5,
    text: 'A Kreativ Haus transformou completamente nosso marketing digital. Em apenas 6 meses, nosso faturamento aumentou 180%. Eles não são apenas uma agência, são verdadeiros parceiros de negócio.',
    result: '180% de aumento em 6 meses'
  },
  {
    id: 2,
    name: 'Mariana Santos',
    role: 'Diretora de Marketing',
    company: 'Torqon - Loja de Autopeças',
    logo: '/torqon.png',
    rating: 5,
    text: 'Finalmente encontramos uma agência que entende que marketing vai além de posts bonitos. A metodologia 360° deles mudou nossa operação completa. Resultados reais, métricas reais.',
    result: '250% ROI em campanhas'
  },
  {
    id: 3,
    name: 'Roberto Lima',
    role: 'Fundador',
    company: 'Meownie - Browneria',
    logo: '/meownie.png',
    rating: 5,
    text: 'A parceria com a Kreativ Haus foi o diferencial para nosso crescimento. Eles atuam em todas as frentes: logística, PDV, treinamento comercial. É uma consultoria completa.',
    result: '3x mais vendas em 1 ano'
  },
  {
    id: 4,
    name: 'Ana Paula Costa',
    role: 'Gerente Comercial',
    company: 'Ichibanprintshop - Gráfica',
    logo: '/ichiban.jpg',
    rating: 5,
    text: 'Impressionante como eles conseguem resultados tão rápidos. Em 3 meses já estávamos vendo aumento significativo nas vendas. A equipe é extremamente profissional e dedicada.',
    result: '120% aumento em 3 meses'
  },
  {
    id: 5,
    name: 'Fernando Oliveira',
    role: 'Diretor Executivo',
    company: 'Cromari - ERP para Gráficas',
    logo: '/cromari.png',
    rating: 5,
    text: 'Trabalhar com a Kreativ Haus é trabalhar com estratégia de verdade. Eles entendem o negócio, não apenas marketing. Recomendo sem hesitar para qualquer empresa séria.',
    result: '200% de crescimento'
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ 
  testimonial, 
  index 
}) => {
  return (
    <div className="w-full">
      <div className="bg-gray-medium/70 backdrop-blur-sm p-8 rounded-2xl border-2 border-primary-pink/20 hover:border-primary-pink/60 transition-all duration-300 h-full flex flex-col hover:shadow-xl hover:shadow-primary-pink/20 group">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>

        {/* Testimonial Text */}
        <div className="flex-grow mb-6">
          <p className="text-gray-200 text-lg leading-relaxed italic">
            &ldquo;{testimonial.text}&rdquo;
          </p>
        </div>

        {/* Result Badge */}
        {testimonial.result && (
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-pink/20 to-primary-purple/20 rounded-full border border-primary-pink/30">
              <svg className="w-4 h-4 text-primary-pink" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-primary-pink font-semibold text-sm">{testimonial.result}</span>
            </div>
          </div>
        )}

        {/* Author Info */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-light/30">
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary-pink to-primary-purple group-hover:scale-110 transition-transform duration-300 flex items-center justify-center overflow-hidden p-1">
            <div className={`relative w-full h-full rounded-full overflow-hidden ${testimonial.logo === '/meownie.png' ? 'bg-transparent' : 'bg-white/10'}`}>
              <Image
                src={testimonial.logo}
                alt={`Logo ${testimonial.company}`}
                fill
                className={testimonial.logo === '/meownie.png' ? 'object-cover' : 'object-contain'}
                sizes="56px"
              />
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
            <p className="text-gray-400 text-sm">{testimonial.role}</p>
            <p className="text-primary-pink text-sm font-medium">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(1);

  // Detect screen size for visible count
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3); // lg
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2); // md
      } else {
        setVisibleCount(1); // mobile
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const maxIndex = Math.max(0, testimonials.length - visibleCount);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, visibleCount]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, testimonials.length - visibleCount);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, testimonials.length - visibleCount);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-white">O Que Nossos</span>{' '}
          <span className="bg-gradient-to-r from-primary-pink to-primary-purple bg-clip-text text-transparent">
            Clientes Dizem
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Depoimentos reais de empresas que transformaram seus negócios com a nossa metodologia
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-medium/90 backdrop-blur-sm p-3 rounded-full border-2 border-primary-pink/30 hover:border-primary-pink hover:bg-primary-pink/10 transition-all duration-300 group -translate-x-4 md:-translate-x-8"
          aria-label="Depoimento anterior"
        >
          <svg
            className="w-6 h-6 text-primary-pink group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-medium/90 backdrop-blur-sm p-3 rounded-full border-2 border-primary-purple/30 hover:border-primary-purple hover:bg-primary-purple/10 transition-all duration-300 group translate-x-4 md:translate-x-8"
          aria-label="Próximo depoimento"
        >
          <svg
            className="w-6 h-6 text-primary-purple group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel */}
        <div className="overflow-hidden px-4 md:px-8 lg:px-12">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
            }}
          >
            {testimonials.map((testimonial, index) => {
              const cardWidth = visibleCount === 1 ? '100%' : visibleCount === 2 ? 'calc(50% - 0.75rem)' : 'calc(33.333% - 1rem)';
              return (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 px-1.5 md:px-3"
                  style={{ width: cardWidth }}
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-8 bg-gradient-to-r from-primary-pink to-primary-purple'
                  : 'w-2 bg-gray-light/50 hover:bg-gray-light'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Trust Badge */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-medium/50 rounded-full border border-primary-purple/20">
          <svg className="w-5 h-5 text-primary-purple" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-300 text-sm md:text-base">
            Depoimentos verificados de clientes reais
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
