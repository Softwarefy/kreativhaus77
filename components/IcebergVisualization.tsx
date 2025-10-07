'use client';

import React from 'react';

const IcebergVisualization = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto my-20">
      {/* Water line */}
      <div className="absolute left-0 right-0 z-20 h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400" 
           style={{ top: '35%' }}>
        <div className="absolute inset-0 animate-pulse opacity-50"></div>
      </div>

      {/* Above water section */}
      <div className="relative z-10 pb-8">
        <div className="bg-gradient-to-b from-gray-dark to-gray-medium rounded-t-3xl p-8 border-2 border-primary-pink/30">
          <h3 className="text-2xl font-bold text-center mb-6 text-primary-pink">
            O Que Você Vê
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-light/50 p-6 rounded-lg border border-primary-purple/20 hover:border-primary-purple transition-all">
              <div className="text-4xl mb-2">📱</div>
              <h4 className="text-lg font-semibold text-primary-purple mb-2">Social Media</h4>
              <p className="text-gray-300 text-sm">Posts e conteúdo</p>
            </div>
            <div className="bg-gray-light/50 p-6 rounded-lg border border-primary-purple/20 hover:border-primary-purple transition-all">
              <div className="text-4xl mb-2">🎯</div>
              <h4 className="text-lg font-semibold text-primary-purple mb-2">Tráfego Pago</h4>
              <p className="text-gray-300 text-sm">Anúncios e campanhas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Below water section */}
      <div className="relative z-10 pt-8">
        <div className="bg-gradient-to-b from-gray-medium to-gray-dark rounded-b-3xl p-8 border-2 border-primary-pink/30 border-t-0">
          <h3 className="text-2xl font-bold text-center mb-6 text-primary-pink">
            O Que Realmente Impulsiona Vendas
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-light/30 p-4 rounded-lg border border-primary-pink/20 hover:border-primary-pink transition-all">
              <div className="text-3xl mb-2">📦</div>
              <h4 className="text-md font-semibold text-white mb-1">Logística</h4>
              <p className="text-gray-400 text-xs">Otimização de processos</p>
            </div>
            <div className="bg-gray-light/30 p-4 rounded-lg border border-primary-pink/20 hover:border-primary-pink transition-all">
              <div className="text-3xl mb-2">🏪</div>
              <h4 className="text-md font-semibold text-white mb-1">PDV</h4>
              <p className="text-gray-400 text-xs">Ponto de venda estratégico</p>
            </div>
            <div className="bg-gray-light/30 p-4 rounded-lg border border-primary-pink/20 hover:border-primary-pink transition-all">
              <div className="text-3xl mb-2">🎓</div>
              <h4 className="text-md font-semibold text-white mb-1">Treinamento Comercial</h4>
              <p className="text-gray-400 text-xs">Capacitação de equipes</p>
            </div>
            <div className="bg-gray-light/30 p-4 rounded-lg border border-primary-pink/20 hover:border-primary-pink transition-all">
              <div className="text-3xl mb-2">💰</div>
              <h4 className="text-md font-semibold text-white mb-1">Fluxo de Caixa</h4>
              <p className="text-gray-400 text-xs">Gestão financeira</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-light/30 p-4 rounded-lg border border-primary-pink/20 hover:border-primary-pink transition-all">
              <div className="text-3xl mb-2">📊</div>
              <h4 className="text-md font-semibold text-white mb-1">Análise de Dados</h4>
              <p className="text-gray-400 text-xs">Insights estratégicos</p>
            </div>
            <div className="bg-gray-light/30 p-4 rounded-lg border border-primary-pink/20 hover:border-primary-pink transition-all">
              <div className="text-3xl mb-2">🤝</div>
              <h4 className="text-md font-semibold text-white mb-1">Consultoria</h4>
              <p className="text-gray-400 text-xs">Parceria estratégica</p>
            </div>
          </div>
        </div>
      </div>

      {/* Water effect overlay */}
      <div className="absolute left-0 right-0 z-5 h-32 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none"
           style={{ top: '30%' }}>
      </div>
    </div>
  );
};

export default IcebergVisualization;
