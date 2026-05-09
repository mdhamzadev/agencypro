'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const serviceDetails = [
{
  id: 'strategy',
  num: '01',
  title: 'Brand Strategy',
  tagline: 'Define your position. Own your market.',
  desc: 'We build the strategic foundation that every other discipline depends on. Positioning, messaging architecture, competitive differentiation — all mapped to your revenue model.',
  deliverables: [
  'Market & competitor analysis',
  'Brand positioning statement',
  'Messaging architecture (all personas)',
  'Go-to-market playbook',
  'Quarterly strategy reviews'],

  caseStudy: 'Meridian Capital Group saw a 3× increase in qualified pipeline within 90 days of repositioning.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1629a310c-1772201394175.png",
  alt: 'Business professional reviewing strategy documents at a clean white desk with natural light',
  icon: 'ChartBarIcon'
},
{
  id: 'design',
  num: '02',
  title: 'Design & UX',
  tagline: 'Visual identity that converts.',
  desc: 'From brand identity systems to product UI, we design every touchpoint with conversion in mind. Beautiful and functional are not opposites — they are requirements.',
  deliverables: [
  'Full visual identity system',
  'Component library & design tokens',
  'Website & landing page design',
  'Product UI/UX (Figma)',
  'Brand guidelines document'],

  caseStudy: 'Clearfield Software increased demo conversion by 38% after a full UX redesign of their onboarding flow.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1ca96e216-1775714895623.png",
  alt: 'Designer working on brand identity materials spread across a bright studio workspace',
  icon: 'SwatchIcon'
},
{
  id: 'development',
  num: '03',
  title: 'Development',
  tagline: 'Built for scale. Shipped on time.',
  desc: 'Our engineering team delivers marketing sites, web apps, and custom platforms. We work in two-week sprints with daily standups — no black boxes, no surprises.',
  deliverables: [
  'Marketing website (Next.js)',
  'Web application development',
  'CMS integration (Contentful / Sanity)',
  'API integrations',
  'Performance & accessibility audits'],

  caseStudy: 'Helix Biotech went from design to live production in 6 weeks — including CRM integration and A/B testing setup.',
  img: "https://images.unsplash.com/photo-1662638600476-d563fffbb072",
  alt: 'Lines of code on a dark monitor screen, developer workstation with dual displays',
  icon: 'CodeBracketIcon'
},
{
  id: 'marketing',
  num: '04',
  title: 'Marketing',
  tagline: 'Pipeline that fills itself.',
  desc: 'Demand generation, paid media, and ABM programs built around your ICP. We run the campaigns, manage the budget, and report weekly on pipeline impact.',
  deliverables: [
  'Paid media strategy & management',
  'Account-based marketing (ABM)',
  'Email & nurture sequences',
  'LinkedIn outbound programs',
  'Weekly pipeline reporting'],

  caseStudy: 'Vantage Logistics reduced CAC by 62% in 4 months by switching from broad paid to targeted ABM.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_154e12a3a-1772151855387.png",
  alt: 'Marketing analytics dashboard on laptop screen showing upward trending graphs and metrics',
  icon: 'MegaphoneIcon'
}];


export default function ServicesDetailSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState<string | null>(null);

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
      { threshold: 0.06 }
    );
    const items = sectionRef.current?.querySelectorAll('.reveal-item');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 px-6 lg:px-10 bg-background">
      <div className="max-w-[1400px] mx-auto space-y-24">
        {serviceDetails.map((s, i) =>
        <div
          key={s.id}
          className={`reveal-item grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
          
            {/* Image */}
            <div className={`relative ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <div className="rounded-[2rem] overflow-hidden border border-border aspect-[4/3] relative group">
                <AppImage
                src={s.img}
                alt={s.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
              </div>
              {/* Case study callout */}
              <div className="absolute -bottom-5 left-6 right-6 bg-card border border-border rounded-2xl p-5 shadow-xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Case Study</p>
                <p className="text-sm font-medium text-foreground leading-snug">{s.caseStudy}</p>
              </div>
            </div>

            {/* Content */}
            <div className={`pt-0 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} pb-10`}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl font-extrabold tracking-tighter text-foreground/10">{s.num}</span>
                <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground">
                  <Icon name={s.icon as Parameters<typeof Icon>[0]['name']} size={16} />
                </div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tighter text-foreground mb-2">{s.title}</h2>
              <p className="text-base font-medium text-muted-foreground italic mb-5">{s.tagline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">{s.desc}</p>

              {/* Deliverables */}
              <div>
                <button
                onClick={() => setActiveService(activeService === s.id ? null : s.id)}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground mb-4 hover:opacity-60 transition-opacity">
                
                  <span>{activeService === s.id ? 'Hide' : 'View'} Deliverables</span>
                  <svg className={`w-3 h-3 transition-transform ${activeService === s.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeService === s.id &&
              <ul className="space-y-2">
                    {s.deliverables.map((d) =>
                <li key={d} className="flex items-center gap-3 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                        {d}
                      </li>
                )}
                  </ul>
              }
              </div>
            </div>
          </div>
        )}
      </div>
    </section>);

}