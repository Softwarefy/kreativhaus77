import IcebergVisualization from '@/components/IcebergVisualization';

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Kreativ</span>{' '}
          <span className="bg-gradient-to-r from-primary-pink to-primary-purple bg-clip-text text-transparent">
            Haus 77
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Não entregamos postzinho bonito.
        </p>
        <p className="text-2xl md:text-3xl font-bold mb-8">
          <span className="text-primary-pink">Entregamos aumento de faturamento</span>{' '}
          <span className="text-white">e</span>{' '}
          <span className="text-primary-purple">mais vendas</span>.
        </p>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Somos um <span className="text-primary-pink font-semibold">parceiro de negócios</span>, 
          não apenas uma agência de marketing.
        </p>
      </section>

      {/* Iceberg Visualization */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Marketing é Mais do Que</span>{' '}
            <span className="text-primary-purple">Você Vê</span>
          </h2>
          <p className="text-lg text-gray-400">
            Assim como um iceberg, o verdadeiro impacto está abaixo da superfície
          </p>
        </div>
        <IcebergVisualization />
      </section>

      {/* Value Proposition */}
      <section className="max-w-6xl mx-auto py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-medium/50 p-8 rounded-xl border border-primary-pink/20 hover:border-primary-pink transition-all">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-2xl font-bold mb-4 text-primary-pink">Resultados Reais</h3>
            <p className="text-gray-300">
              Foco em métricas que impactam seu faturamento, não apenas em curtidas e seguidores.
            </p>
          </div>
          <div className="bg-gray-medium/50 p-8 rounded-xl border border-primary-purple/20 hover:border-primary-purple transition-all">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4 text-primary-purple">Estratégia 360°</h3>
            <p className="text-gray-300">
              Atuamos em todas as frentes: do online ao offline, do marketing à operação.
            </p>
          </div>
          <div className="bg-gray-medium/50 p-8 rounded-xl border border-primary-pink/20 hover:border-primary-pink transition-all">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold mb-4 text-primary-pink">Parceria Real</h3>
            <p className="text-gray-300">
              Seu sucesso é nosso sucesso. Trabalhamos como parte do seu time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center py-20">
        <div className="bg-gradient-to-r from-primary-pink/20 to-primary-purple/20 p-12 rounded-2xl border border-primary-pink/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para <span className="text-primary-pink">Crescer de Verdade</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Vamos conversar sobre como podemos aumentar seu faturamento
          </p>
          <button className="bg-gradient-to-r from-primary-pink to-primary-purple text-white font-bold text-lg px-10 py-4 rounded-full hover:scale-105 transition-transform">
            Entre em Contato
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto py-12 text-center border-t border-gray-light/30">
        <p className="text-gray-400">
          © 2024 Kreativ Haus 77. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
