'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
{
  quote: "AgencyPro didn\'t just deliver a rebrand — they rebuilt our entire go-to-market motion. Revenue is up 40% year-over-year.",
  name: 'Sarah Chen',
  title: 'CMO, Meridian Capital Group',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1bb5d2cb2-1763294526193.png",
  alt: 'Professional headshot of a woman with dark hair in a business setting'
},
{
  quote: "Having strategy, design, and engineering under one roof cut our time-to-market in half. I'll never go back to managing multiple vendors.",
  name: 'Marcus Williams',
  title: 'VP Product, Clearfield Software',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1ba34aa03-1763294059493.png",
  alt: 'Professional headshot of a man smiling in a bright office environment'
},
{
  quote: "Their analytics team found $2M in wasted ad spend in the first month. The ROI on this engagement is unlike anything I\'ve seen.",
  name: 'Priya Nair',
  title: 'CEO, Vantage Logistics',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1052e982c-1763296696010.png",
  alt: 'Professional headshot of a woman with a confident smile in corporate attire'
}];


const stats = [
{ num: '$2.4B', label: 'Client Revenue Influenced' },
{ num: '120+', label: 'Projects Delivered' },
{ num: '94%', label: 'Client Retention Rate' },
{ num: '18', label: 'Avg. Days to Launch' }];


export default function TestimonialsSection() {
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
      { threshold: 0.08 }
    );
    const items = sectionRef?.current?.querySelectorAll('.reveal-item');
    items?.forEach((item) => observer?.observe(item));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 px-6 lg:px-10 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-lines opacity-50" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Stats row */}
        <div className="reveal-item grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 pb-16 border-b border-border">
          {stats?.map((s) =>
          <div key={s?.label} className="text-center lg:text-left">
              <span className="stat-number block">{s?.num}</span>
              <span className="section-label mt-2 block">{s?.label}</span>
            </div>
          )}
        </div>

        {/* Header */}
        <div className="reveal-item mb-12">
          <span className="section-label mb-3 block">Client Stories</span>
          <h2 className="font-sans font-extrabold text-hero-2xl tracking-tighter leading-none text-foreground">
            RESULTS THAT<br />
            <span className="opacity-20 font-light italic">SPEAK.</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials?.map((t, i) =>
          <div
            key={t?.name}
            className="reveal-item testimonial-card flex flex-col justify-between"
            style={{ transitionDelay: `${i * 80}ms` }}>
            
              {/* Quote mark */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-foreground/15 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm text-foreground leading-relaxed font-medium">{t?.quote}</p>
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-border flex-shrink-0">
                  <AppImage src={t?.img} alt={t?.alt} width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground tracking-tight">{t?.name}</p>
                  <p className="text-xs text-muted-foreground">{t?.title}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}