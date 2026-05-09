import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesBentoSection from '@/app/components/ServicesBentoSection';
import ProcessSection from '@/app/components/ProcessSection';
import PortfolioSection from '@/app/components/PortfolioSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import CtaSection from '@/app/components/CtaSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <div className="grain-overlay" />
      <Header />
      <HeroSection />
      <ServicesBentoSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}