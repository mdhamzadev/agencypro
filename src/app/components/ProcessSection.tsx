'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const steps = [
{
  num: '01',
  title: 'Discovery & Audit',
  desc: 'We map your market, competitors, and internal capabilities to identify the highest-leverage opportunities.'
},
{
  num: '02',
  title: 'Strategy & Roadmap',
  desc: 'A 90-day action plan with clear owners, milestones, and measurable KPIs aligned to your revenue goals.'
},
{
  num: '03',
  title: 'Build & Execute',
  desc: 'Our cross-functional team executes in two-week sprints — design, code, copy, and campaigns in parallel.'
},
{
  num: '04',
  title: 'Measure & Optimize',
  desc: 'Weekly reporting, monthly strategy reviews, and continuous optimization based on real performance data.'
}];


export default function ProcessSection() {
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
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    );
    const items = sectionRef?.current?.querySelectorAll('.reveal-item');
    items?.forEach((item) => observer?.observe(item));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 px-6 lg:px-10 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dots opacity-40" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left: Visual */}
          <div className="lg:col-span-5 reveal-item">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-[2.5rem] overflow-hidden border border-border bg-muted aspect-[4/5] relative group">
                <AppImage
                  src="https://images.unsplash.com/photo-1552581234-26160f608093"
                  alt="Team collaborating around a bright conference table with laptops and whiteboards"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>

              {/* Floating stat */}
              <div className="absolute -top-5 -right-5 bg-primary text-primary-foreground p-5 rounded-2xl shadow-xl">
                <span className="block text-3xl font-extrabold tracking-tighter">18</span>
                <span className="block text-[9px] font-bold uppercase tracking-widest opacity-50">Avg. Days to Launch</span>
              </div>

              {/* Isometric decoration */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 border-2 border-border rounded-2xl rotate-12 bg-background opacity-80" />
              <div className="absolute -bottom-2 -left-2 w-20 h-20 border border-border rounded-2xl rotate-6 bg-muted" />
            </div>
          </div>

          {/* Right: Steps */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="reveal-item mb-10">
              <span className="section-label mb-3 block">How We Work</span>
              <h2 className="font-sans font-extrabold text-hero-2xl tracking-tighter leading-none text-foreground">
                FROM BRIEF<br />
                <span className="opacity-20 font-light italic">TO RESULTS.</span>
              </h2>
            </div>

            <div className="space-y-0">
              {steps?.map((step, i) =>
              <div
                key={step?.num}
                className="reveal-item process-step"
                style={{ transitionDelay: `${i * 80}ms` }}>
                
                  <div className="step-num">{step?.num}</div>
                  <div className="pt-0.5 flex-1">
                    <h3 className="text-base font-bold text-foreground mb-1.5 tracking-tight">{step?.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step?.desc}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="reveal-item mt-10 p-6 rounded-2xl border border-border bg-card flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Guaranteed 30-day kickoff</p>
                <p className="text-xs text-muted-foreground mt-0.5">From signed contract to first deliverable in under 30 days — or we credit your first month.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}