'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '$4,800',
    period: '/month',
    tagline: 'For companies ready to professionalize their brand.',
    features: [
      'Brand strategy & positioning',
      'Visual identity system',
      'Marketing website (up to 8 pages)',
      'Monthly strategy call',
      'Email support',
    ],
    notIncluded: ['Paid media management', 'Custom development', 'Analytics infrastructure'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$12,500',
    period: '/month',
    tagline: 'For B2B companies ready to scale pipeline.',
    features: [
      'Everything in Starter',
      'Demand generation & paid media',
      'Content & SEO program',
      'Analytics & reporting dashboard',
      'Bi-weekly strategy sessions',
      'Dedicated account manager',
    ],
    notIncluded: ['Custom platform development'],
    cta: 'Most Popular',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    tagline: 'For organizations that need the full stack.',
    features: [
      'Everything in Growth',
      'Custom platform development',
      'ABM & sales enablement',
      'Weekly executive reporting',
      'Embedded team member',
      'SLA-backed delivery',
    ],
    notIncluded: [],
    cta: 'Talk to Sales',
    featured: false,
  },
];

export default function PricingSection() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 px-6 lg:px-10 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dots opacity-40" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="reveal-item text-center mb-16">
          <span className="section-label mb-3 block">Transparent Pricing</span>
          <h2 className="font-sans font-extrabold text-hero-2xl tracking-tighter leading-none text-foreground mb-5">
            SIMPLE.<br />
            <span className="opacity-20 font-light italic">PREDICTABLE.</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
            No retainer lock-ins. No hidden setup fees. Cancel with 30 days notice.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans?.map((plan, i) => (
            <div
              key={plan?.name}
              className={`reveal-item pricing-card flex flex-col h-full ${plan?.featured ? 'featured md:-mt-4 md:mb-4' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {plan?.featured && (
                <div className="mb-6 inline-flex self-start">
                  <span className="text-[9px] font-bold uppercase tracking-widest bg-primary-foreground/15 text-primary-foreground px-3 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${plan?.featured ? 'text-primary-foreground/50' : 'text-muted-foreground'}`}>
                  {plan?.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold tracking-tighter ${plan?.featured ? 'text-primary-foreground' : 'text-foreground'}`}>
                    {plan?.price}
                  </span>
                  {plan?.period && (
                    <span className={`text-sm font-medium ${plan?.featured ? 'text-primary-foreground/50' : 'text-muted-foreground'}`}>
                      {plan?.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm mt-2 leading-snug ${plan?.featured ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                  {plan?.tagline}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan?.features?.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan?.featured ? 'text-primary-foreground' : 'text-foreground'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan?.featured ? 'text-primary-foreground/80' : 'text-foreground/80'}>{f}</span>
                  </li>
                ))}
                {plan?.notIncluded?.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm opacity-40">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className={plan?.featured ? 'text-primary-foreground/60' : 'text-muted-foreground'}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full text-center py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${
                  plan?.featured
                    ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                    : 'border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary'
                }`}
              >
                {plan?.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="reveal-item text-center text-xs text-muted-foreground mt-10">
          All plans include onboarding, strategy kickoff, and dedicated Slack channel. Minimum 3-month engagement.
        </p>
      </div>
    </section>
  );
}