'use client';

import React, { useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

const projects = [
{
  title: 'Meridian Capital Group',
  category: 'Brand Strategy + Web',
  result: '3× pipeline growth in 90 days',
  img: "https://images.unsplash.com/photo-1717426053861-d89201ecc899",
  alt: 'Glass skyscraper facade reflecting blue sky, sharp geometric lines, corporate architectural photography',
  year: '2025'
},
{
  title: 'Vantage Logistics',
  category: 'Marketing + Analytics',
  result: '62% reduction in CAC',
  img: "https://images.unsplash.com/photo-1725100609268-c7f383e6b4e0",
  alt: 'Aerial view of shipping containers in organized rows at a port, cool blue and grey tones, industrial',
  year: '2025'
},
{
  title: 'Clearfield Software',
  category: 'Design + Development',
  result: 'Product launched in 6 weeks',
  img: "https://images.unsplash.com/photo-1653022053712-9bbe4c1de4be",
  alt: 'Smartphone screen showing clean minimal app interface on dark background, soft studio lighting',
  year: '2024'
},
{
  title: 'Helix Biotech',
  category: 'Content + SEO',
  result: '4× organic traffic in 6 months',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_19b9aae1b-1775049093041.png",
  alt: 'Laboratory equipment on white surface with soft blue lighting, clean scientific environment',
  year: '2024'
}];


export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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
    const items = sectionRef.current?.querySelectorAll('.reveal-item');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'right' ? 360 : -360, behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-background overflow-hidden">
      {/* Header */}
      <div className="px-6 lg:px-10 max-w-[1400px] mx-auto mb-12">
        <div className="reveal-item flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="section-label mb-3 block">Selected Work</span>
            <h2 className="font-sans font-extrabold text-hero-2xl tracking-tighter leading-none text-foreground">
              PROOF IN<br />
              <span className="opacity-20 font-light italic">PRACTICE.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
              aria-label="Scroll left">
              
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
              aria-label="Scroll right">
              
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="reveal-item flex gap-5 overflow-x-auto scrollbar-hide px-6 lg:px-10 pb-4 snap-x snap-mandatory"
        style={{ scrollPaddingLeft: '2.5rem' }}>
        
        {projects.map((p, i) =>
        <div key={p.title} className="portfolio-card snap-start" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="portfolio-img">
              <AppImage src={p.img} alt={p.alt} fill className="object-cover" />
              {/* Category tag */}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
                <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{p.category}</span>
              </div>
              {/* Year */}
              <div className="absolute top-4 right-4">
                <span className="text-[9px] font-bold uppercase tracking-widest text-background/70">{p.year}</span>
              </div>
            </div>
            <div className="mt-4 pl-1">
              <h3 className="text-base font-bold tracking-tight text-foreground mb-1">{p.title}</h3>
              <p className="text-xs text-muted-foreground font-medium">{p.result}</p>
            </div>
          </div>
        )}

        {/* End card CTA */}
        <div className="portfolio-card snap-start flex-shrink-0 w-[280px] flex items-center justify-center">
          <div className="w-full aspect-[4/3] rounded-[1.25rem] border border-dashed border-border flex flex-col items-center justify-center gap-4 bg-muted/40 hover:bg-muted/80 transition-colors">
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">View All Work</span>
          </div>
        </div>
      </div>
    </section>);

}