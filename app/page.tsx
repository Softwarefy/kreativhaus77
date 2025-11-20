import IcebergVisualization from '@/components/IcebergVisualization';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MetricsSection from '@/components/MetricsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CasesSection from '@/components/CasesSection';
import ValueProposition from '@/components/ValueProposition';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <FloatingWhatsAppButton />
      <main className="min-h-screen p-4 md:p-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Metrics Section */}
        <MetricsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Cases Section */}
        <CasesSection />

      {/* Iceberg Visualization */}
      <section id="sobre" className="max-w-6xl mx-auto">
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
      <ValueProposition />

      {/* Process Section */}
      <ProcessSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
