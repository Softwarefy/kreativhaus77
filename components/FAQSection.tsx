'use client';

import React, { useState, useEffect, useRef } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Como vocês garantem resultados reais de faturamento?',
    answer: 'Focamos em métricas que realmente importam para o seu negócio. Trabalhamos com KPIs de conversão, ticket médio, taxa de retorno de clientes e ROI das campanhas. Não nos importamos com curtidas ou seguidores se isso não se traduzir em vendas reais para você.'
  },
  {
    id: 2,
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'Normalmente começamos a ver resultados mensuráveis em 30 a 60 dias, dependendo da complexidade do projeto. No entanto, otimizações estratégicas podem gerar melhorias imediatas em processos operacionais. Cada cliente tem um plano personalizado com marcos claros de acompanhamento.'
  },
  {
    id: 3,
    question: 'Vocês trabalham apenas com marketing digital?',
    answer: 'Não! Somos uma agência 360° que atua em todas as frentes do negócio. Além de marketing digital e tráfego pago, trabalhamos com logística, PDV, treinamento comercial, gestão financeira, análise de dados e consultoria estratégica. Somos parceiros completos do seu negócio.'
  },
  {
    id: 4,
    question: 'Qual é o investimento necessário?',
    answer: 'O investimento varia conforme as necessidades específicas do seu negócio e os objetivos que queremos alcançar. Trabalhamos com pacotes personalizados que podem incluir desde estratégias focadas em marketing até transformação completa de operações. Agende uma conversa para entendermos melhor seu caso.'
  },
  {
    id: 5,
    question: 'Como funciona o acompanhamento e relatórios?',
    answer: 'Fornecemos relatórios mensais detalhados com todas as métricas relevantes ao seu negócio, além de reuniões periódicas para análise estratégica. Você terá acesso a um dashboard personalizado onde pode acompanhar os resultados em tempo real, sempre com foco em métricas que impactam o faturamento.'
  },
  {
    id: 6,
    question: 'Trabalham com empresas de qualquer tamanho?',
    answer: 'Sim! Atendemos desde startups até empresas consolidadas. Nossa metodologia é escalável e adaptável. O importante é que você tenha vontade de crescer e esteja disposto a investir em estratégias de longo prazo. Cada cliente recebe atenção e dedicação total, independente do porte.'
  },
  {
    id: 7,
    question: 'E se eu já tenho uma equipe interna de marketing?',
    answer: 'Perfeito! Nossa abordagem é colaborativa. Trabalhamos em parceria com sua equipe, oferecendo expertise estratégica, metodologia comprovada e um olhar externo. Integramos nossos processos com os seus, criando sinergia e potencializando os resultados de todos.'
  },
  {
    id: 8,
    question: 'Quais são as garantias de resultado?',
    answer: 'Não prometemos milagres, mas garantimos trabalho sério, transparente e focado em resultados. Trabalhamos com metas claras definidas em conjunto, e se algo não estiver funcionando, pivotamos rapidamente. Nosso sucesso está atrelado ao seu sucesso - temos interesse genuíno em entregar resultados.'
  }
];

const FAQItem: React.FC<{ item: FAQItem; index: number; isOpen: boolean; onToggle: () => void }> = ({
  item,
  index,
  isOpen,
  onToggle
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setMaxHeight(contentRef.current.scrollHeight);
      } else {
        setMaxHeight(0);
      }
    }
  }, [isOpen]);

  return (
    <div
      className={`
        border-2 rounded-xl overflow-hidden transition-all duration-300
        ${isOpen 
          ? 'border-primary-pink/60 bg-gray-medium/70 shadow-lg shadow-primary-pink/20' 
          : 'border-primary-pink/20 bg-gray-medium/50 hover:border-primary-pink/40'
        }
        animate-fade-in-up
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Question Button */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between gap-4 group transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <h3 className={`text-lg md:text-xl font-bold ${isOpen ? 'text-primary-pink' : 'text-white'} transition-colors duration-200 group-hover:text-primary-pink pr-4`}>
          {item.question}
        </h3>
        <div
          className={`
            flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300
            ${isOpen 
              ? 'border-primary-pink bg-primary-pink/10 rotate-180' 
              : 'border-primary-pink/50 group-hover:border-primary-pink rotate-0'
            }
          `}
        >
          <svg
            className={`w-5 h-5 transition-colors duration-200 ${isOpen ? 'text-primary-pink' : 'text-primary-pink/70 group-hover:text-primary-pink'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Answer Content */}
      <div
        id={`faq-answer-${item.id}`}
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: `${maxHeight}px` }}
      >
        <div className="px-6 md:px-8 pb-5 md:pb-6 pt-0">
          <div className="pt-4 border-t border-primary-pink/20">
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
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

  const toggleItem = (id: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`max-w-4xl mx-auto py-20 px-4 md:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-white">Perguntas</span>{' '}
          <span className="bg-gradient-to-r from-primary-pink to-primary-purple bg-clip-text text-transparent">
            Frequentes
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Tire suas dúvidas sobre como trabalhamos e como podemos ajudar seu negócio a crescer
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4 md:space-y-6">
        {faqItems.map((item, index) => (
          <FAQItem
            key={item.id}
            item={item}
            index={index}
            isOpen={openItems.has(item.id)}
            onToggle={() => toggleItem(item.id)}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4 text-base md:text-lg">
          Ainda tem dúvidas? Entre em contato conosco!
        </p>
        <button
          onClick={() => {
            const element = document.getElementById('contato');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="bg-gradient-to-r from-primary-pink to-primary-purple text-white font-bold px-8 py-3 rounded-full hover:scale-105 hover:shadow-xl hover:shadow-primary-pink/50 transition-all duration-300 text-base md:text-lg"
        >
          Falar com um Especialista
        </button>
      </div>
    </section>
  );
};

export default FAQSection;

