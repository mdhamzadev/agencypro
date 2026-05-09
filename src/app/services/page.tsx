import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/app/services/components/ServicesHero';
import ServicesDetailSection from '@/app/services/components/ServicesDetailSection';
import PricingSection from '@/app/services/components/PricingSection';
import BookingCta from '@/app/services/components/BookingCta';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <div className="grain-overlay" />
      <Header />
      <ServicesHero />
      <ServicesDetailSection />
      <PricingSection />
      <BookingCta />
      <Footer />
    </main>
  );
}