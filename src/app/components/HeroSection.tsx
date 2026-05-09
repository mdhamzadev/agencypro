'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll('.magnetic-btn');
    const cleanups: (() => void)[] = [];

    btns.forEach((btn) => {
      const el = btn as HTMLElement;

      const onMove = (e: Event) => {
        const me = e as MouseEvent;
        const rect = el.getBoundingClientRect();
        const x = me.clientX - rect.left - rect.width / 2;
        const y = me.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      };
      const onLeave = () => {
        el.style.transform = 'translate(0px, 0px)';
        el.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
      };
      const onEnter = () => {
        el.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)';
      };

      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      el.addEventListener('mouseenter', onEnter);

      cleanups.push(() => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
        el.removeEventListener('mouseenter', onEnter);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

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

    const items = heroRef.current?.querySelectorAll('.reveal-item');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center px-6 lg:px-10 pt-28 pb-20 bg-background overflow-hidden">
      
      {/* Mouse glow */}
      <div
        ref={glowRef}
        className="mouse-glow fixed pointer-events-none w-[600px] h-[600px] rounded-full z-[-1] will-change-transform"
        style={{ top: 0, left: 0 }} />
      

      {/* Background grid */}
      <div className="absolute inset-0 grid-bg-lines opacity-60 z-0" />

      {/* Decorative ring */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] border border-border rounded-full opacity-20" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[400px] h-[400px] border border-border rounded-full opacity-20 animate-spin-slow" style={{ animationDuration: '60s' }} />

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
        {/* Left: Text content */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Label */}
          <div className="reveal-item inline-flex items-center gap-3 mb-8 self-start">
            <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
            <span className="section-label">Full-Service Agency · Est. 2018</span>
          </div>

          {/* Headline */}
          <h1 className="reveal-item font-sans font-extrabold text-hero-xl leading-[0.92] tracking-tighter text-foreground mb-8">
            BUILDING<br />
            <span className="relative">
              BRANDS.{' '}
              <span className="relative inline-block">
                <span className="relative z-10">DRIVING</span>
              </span>
            </span>
            <br />
            <span className="opacity-20 font-light italic">RESULTS.</span>
          </h1>

          {/* Sub */}
          <p className="reveal-item text-lg text-muted-foreground font-light leading-relaxed max-w-lg mb-10">
            We partner with ambitious B2B companies to deliver strategy, design, development, and marketing — under one roof, with zero coordination overhead.
          </p>

          {/* CTAs */}
          <div className="reveal-item flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/contact" className="magnetic-btn btn-primary">
              Start a Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/services" className="magnetic-btn btn-secondary">
              View Services
            </Link>
          </div>

          {/* Stats row */}
          <div className="reveal-item flex flex-wrap gap-8 mt-14 pt-10 border-t border-border">
            {[
            { num: '120+', label: 'Projects Delivered' },
            { num: '8yr', label: 'In Business' },
            { num: '94%', label: 'Client Retention' }].
            map((s) =>
            <div key={s.label}>
                <span className="block font-extrabold text-2xl tracking-tighter text-foreground">{s.num}</span>
                <span className="section-label mt-1 block">{s.label}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Visual panel */}
        <div className="lg:col-span-5 hidden lg:block relative h-[540px]">
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-border bg-muted group">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1a8315c7a-1777286375580.png"
              alt="Modern open-plan office with bright natural light, white walls, and minimal furniture"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              priority />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-2xl max-w-[200px] animate-float">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Latest Win</p>
            <p className="text-sm font-semibold leading-tight">"3× pipeline growth in 90 days"</p>
            <p className="text-[10px] opacity-40 mt-2">— Meridian Capital Group</p>
          </div>

          {/* Top tag */}
          <div className="absolute -top-4 -right-4 bg-background border border-border px-4 py-2 rounded-full shadow-lg">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">B2B Specialists</span>
          </div>
        </div>
      </div>
    </section>);

}