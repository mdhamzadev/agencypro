import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/app/contact/components/AboutSection';
import ContactSection from '@/app/contact/components/ContactSection';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <div className="grain-overlay" />
      <Header />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}