'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    id: 'strategy',
    num: '01',
    title: 'Brand Strategy',
    desc: 'Positioning, messaging architecture, and go-to-market strategy built for B2B growth.',
    tags: ['Positioning', 'GTM', 'Messaging'],
    icon: 'ChartBarIcon',
    large: true,
  },
  {
    id: 'design',
    num: '02',
    title: 'Design & UX',
    desc: 'End-to-end visual identity and product design that converts.',
    tags: ['Identity', 'UI/UX'],
    icon: 'SwatchIcon',
    large: false,
  },
  {
    id: 'development',
    num: '03',
    title: 'Development',
    desc: 'Web apps, marketing sites, and platforms built for scale.',
    tags: ['Web', 'Apps'],
    icon: 'CodeBracketIcon',
    large: false,
  },
  {
    id: 'marketing',
    num: '04',
    title: 'Marketing',
    desc: 'Demand generation, content, and paid media that fills pipeline.',
    tags: ['Demand Gen', 'Paid'],
    icon: 'MegaphoneIcon',
    large: false,
  },
  {
    id: 'analytics',
    num: '05',
    title: 'Analytics',
    desc: 'Data infrastructure and reporting that drives decisions.',
    tags: ['Data', 'Reporting'],
    icon: 'PresentationChartLineIcon',
    large: false,
  },
  {
    id: 'content',
    num: '06',
    title: 'Content & SEO',
    desc: 'Editorial strategy and organic growth that compounds over time.',
    tags: ['Editorial', 'SEO', 'Growth'],
    icon: 'DocumentTextIcon',
    large: false,
  },
];

export default function ServicesBentoSection() {
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
    const items = sectionRef.current?.querySelectorAll('.reveal-item');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 px-6 lg:px-10 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="reveal-item flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-14">
          <div>
            <span className="section-label mb-3 block">What We Do</span>
            <h2 className="font-sans font-extrabold text-hero-2xl tracking-tighter leading-none text-foreground">
              FULL-STACK<br />
              <span className="opacity-20 font-light italic">CAPABILITIES.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
            Six integrated disciplines. One accountable team. Outcomes that matter to your business.
          </p>
        </div>

        {/* Bento Grid
            Row 1: [col-1–2: Strategy cs-2 rs-1] [col-3: Design cs-1 rs-1] [col-4: Development cs-1 rs-1]
            Row 2: [col-1: Marketing cs-1 rs-1] [col-2: Analytics cs-1 rs-1] [col-3–4: Content cs-2 rs-1]
            Placed 6/6 cards ✓
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
          {/* col-1–2 Strategy */}
          <div className="reveal-item bento-card lg:col-span-2 p-8 flex flex-col justify-between bg-gradient-to-br from-muted/60 to-background group">
            <div className="flex justify-between items-start">
              <span className="text-5xl font-extrabold tracking-tighter text-foreground/10 font-sans">{services[0].num}</span>
              <span className="service-tag">{services[0].tags[0]}</span>
            </div>
            <div>
              <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-foreground mb-5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                <Icon name={services[0].icon as Parameters<typeof Icon>[0]['name']} size={18} />
              </div>
              <h3 className="text-2xl font-extrabold tracking-tighter text-foreground mb-3">{services[0].title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-5">{services[0].desc}</p>
              <div className="flex gap-2 flex-wrap">
                {services[0].tags.map((t) => (
                  <span key={t} className="service-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* col-3 Design */}
          <div className="reveal-item bento-card p-7 flex flex-col justify-between group">
            <span className="text-4xl font-extrabold tracking-tighter text-foreground/10">{services[1].num}</span>
            <div>
              <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-foreground mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                <Icon name={services[1].icon as Parameters<typeof Icon>[0]['name']} size={18} />
              </div>
              <h3 className="text-xl font-extrabold tracking-tighter text-foreground mb-2">{services[1].title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">{services[1].desc}</p>
              <div className="flex gap-2 flex-wrap">
                {services[1].tags.map((t) => (
                  <span key={t} className="service-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* col-4 Development */}
          <div className="reveal-item bento-card p-7 flex flex-col justify-between group card-dark">
            <span className="text-4xl font-extrabold tracking-tighter text-primary-foreground/10">{services[2].num}</span>
            <div>
              <div className="w-10 h-10 rounded-xl border border-primary-foreground/20 flex items-center justify-center text-primary-foreground mb-4 group-hover:border-primary-foreground/60 transition-all duration-300">
                <Icon name={services[2].icon as Parameters<typeof Icon>[0]['name']} size={18} />
              </div>
              <h3 className="text-xl font-extrabold tracking-tighter text-primary-foreground mb-2">{services[2].title}</h3>
              <p className="text-primary-foreground/50 text-xs leading-relaxed mb-4">{services[2].desc}</p>
              <div className="flex gap-2 flex-wrap">
                {services[2].tags.map((t) => (
                  <span key={t} className="inline-flex items-center px-3 py-1 border border-primary-foreground/20 rounded-full text-[0.65rem] font-semibold tracking-[0.08em] uppercase text-primary-foreground/50">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* col-1 Marketing */}
          <div className="reveal-item bento-card p-7 flex flex-col justify-between group">
            <span className="text-4xl font-extrabold tracking-tighter text-foreground/10">{services[3].num}</span>
            <div>
              <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-foreground mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                <Icon name={services[3].icon as Parameters<typeof Icon>[0]['name']} size={18} />
              </div>
              <h3 className="text-xl font-extrabold tracking-tighter text-foreground mb-2">{services[3].title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{services[3].desc}</p>
            </div>
          </div>

          {/* col-2 Analytics */}
          <div className="reveal-item bento-card p-7 flex flex-col justify-between group">
            <span className="text-4xl font-extrabold tracking-tighter text-foreground/10">{services[4].num}</span>
            <div>
              <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-foreground mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                <Icon name={services[4].icon as Parameters<typeof Icon>[0]['name']} size={18} />
              </div>
              <h3 className="text-xl font-extrabold tracking-tighter text-foreground mb-2">{services[4].title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{services[4].desc}</p>
            </div>
          </div>

          {/* col-3–4 Content */}
          <div className="reveal-item bento-card lg:col-span-2 p-8 flex flex-col justify-between bg-muted/40 group">
            <div className="flex justify-between items-start">
              <span className="text-4xl font-extrabold tracking-tighter text-foreground/10">{services[5].num}</span>
              <Link href="/services" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                View All
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-end justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-foreground mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                  <Icon name={services[5].icon as Parameters<typeof Icon>[0]['name']} size={18} />
                </div>
                <h3 className="text-xl font-extrabold tracking-tighter text-foreground mb-2">{services[5].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{services[5].desc}</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {services[5].tags.map((t) => (
                  <span key={t} className="service-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}