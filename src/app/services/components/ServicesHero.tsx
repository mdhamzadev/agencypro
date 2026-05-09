'use client';

import React, { useEffect, useRef } from 'react';

export default function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const items = sectionRef?.current?.querySelectorAll('.reveal-item');
    items?.forEach((item) => observer?.observe(item));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[60vh] flex items-end px-6 lg:px-10 pt-36 pb-16 bg-primary overflow-hidden"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg-dots opacity-5" />
      {/* Decorative circles */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary-foreground/5" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-primary-foreground/5 animate-spin-slow" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="beam-border-h" />
        <div className="reveal-item mb-4">
          <span className="section-label text-primary-foreground/40">Our Services</span>
        </div>
        <h1 className="reveal-item font-sans font-extrabold text-hero-xl tracking-tighter leading-[0.9] text-primary-foreground mb-6">
          EVERY CAPABILITY<br />
          <span className="opacity-20 font-light italic">YOU NEED.</span>
        </h1>
        <p className="reveal-item text-lg text-primary-foreground/50 font-light max-w-xl leading-relaxed">
          Six integrated disciplines delivered by one accountable team — from brand strategy to production-ready code.
        </p>
      </div>
    </section>
  );
}