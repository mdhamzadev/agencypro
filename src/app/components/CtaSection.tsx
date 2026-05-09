'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
    const items = sectionRef.current?.querySelectorAll('.reveal-item');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 px-6 lg:px-10 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full border border-primary-foreground/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full border border-primary-foreground/5 translate-x-1/3 translate-y-1/3" />
      <div className="absolute inset-0 grid-bg-dots opacity-5" />

      <div className="max-w-[900px] mx-auto text-center relative z-10">
        <div className="reveal-item mb-3">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] uppercase text-primary-foreground/40">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/40 animate-pulse" />
            Ready to Start
          </span>
        </div>

        <h2 className="reveal-item font-sans font-extrabold text-hero-xl tracking-tighter leading-[0.9] text-primary-foreground mb-8">
          LET&apos;S BUILD<br />
          <span className="opacity-25 font-light italic">SOMETHING GREAT.</span>
        </h2>

        <p className="reveal-item text-lg text-primary-foreground/50 font-light leading-relaxed max-w-lg mx-auto mb-12">
          Tell us your email and we&apos;ll send you our agency deck. Or jump straight to a 30-minute discovery call.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="reveal-item flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@company.com"
              required
              className="flex-1 px-6 py-4 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 text-sm font-medium outline-none focus:border-primary-foreground/40 transition-all"
            />
            <button
              type="submit"
              className="magnetic-btn px-8 py-4 rounded-full bg-primary-foreground text-primary font-bold text-sm uppercase tracking-widest hover:bg-primary-foreground/90 transition-all flex-shrink-0"
            >
              Get the Deck
            </button>
          </form>
        ) : (
          <div className="reveal-item inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
            <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-bold text-primary-foreground">Deck on its way — check your inbox.</span>
          </div>
        )}

        <p className="reveal-item mt-6 text-[10px] text-primary-foreground/25 font-bold uppercase tracking-[0.3em]">
          No spam · No commitment · Responds within 24 hours
        </p>
      </div>
    </section>
  );
}