'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const serviceOptions = [
  'Brand Strategy',
  'Design & UX',
  'Development',
  'Marketing & Demand Gen',
  'Analytics & Reporting',
  'Content & SEO',
  'Full-Service Engagement',
];

const budgetOptions = [
  '$5,000 – $15,000/mo',
  '$15,000 – $30,000/mo',
  '$30,000 – $60,000/mo',
  '$60,000+/mo',
  'Project-based (one-time)',
];

interface FormState {
  name: string;
  company: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormState>({
    name: '', company: '', email: '', service: '', budget: '', message: '',
  });
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
      { threshold: 0.06 }
    );
    const items = sectionRef.current?.querySelectorAll('.reveal-item');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit handler — connect to backend/CRM here
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 px-6 lg:px-10 bg-muted/20 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dots opacity-30" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left: Contact info */}
          <div className="lg:col-span-4 reveal-item">
            <span className="section-label mb-3 block">Get in Touch</span>
            <h2 className="font-sans font-extrabold text-display tracking-tighter leading-none text-foreground mb-6">
              LET&apos;S TALK<br />
              <span className="opacity-20 font-light italic">BUSINESS.</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              We respond to all inquiries within one business day. For urgent matters, call us directly.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              {[
                { icon: 'EnvelopeIcon', label: 'Email', value: 'hello@agencypro.co' },
                { icon: 'PhoneIcon', label: 'Phone', value: '+1 (212) 555-0192' },
                { icon: 'MapPinIcon', label: 'HQ', value: '180 Varick St, New York, NY 10014' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground flex-shrink-0">
                    <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Offices */}
            <div className="border-t border-border pt-8">
              <p className="section-label mb-4">Offices</p>
              <div className="space-y-3">
                {[
                  { city: 'New York', detail: 'HQ · Americas' },
                  { city: 'London', detail: 'EMEA' },
                  { city: 'Singapore', detail: 'APAC' },
                ].map((o) => (
                  <div key={o.city} className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-foreground">{o.city}</span>
                    <span className="text-muted-foreground text-xs">{o.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="border-t border-border pt-8 mt-8">
              <p className="section-label mb-4">Follow</p>
              <div className="flex gap-3">
                {['LinkedIn', 'Twitter', 'Instagram'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="px-4 py-2 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8 reveal-item">
            {!submitted ? (
              <div className="bg-card border border-border rounded-[2rem] p-8 lg:p-12">
                <h3 className="text-xl font-extrabold tracking-tighter text-foreground mb-2">Start a Project Inquiry</h3>
                <p className="text-sm text-muted-foreground mb-8">Tell us about your business and what you&apos;re looking to achieve.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="James Holloway"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Company *</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        required
                        placeholder="Acme Corp"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="form-input"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Service Interest</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select a service…</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Monthly Budget</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select a range…</option>
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Tell Us About Your Project</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your current situation, goals, and timeline…"
                      className="form-input resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <button type="submit" className="magnetic-btn btn-primary">
                      Send Inquiry
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    <p className="text-xs text-muted-foreground">We respond within 1 business day.</p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-primary rounded-[2rem] p-12 text-center text-primary-foreground flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold tracking-tighter mb-3">Inquiry Received</h3>
                <p className="text-primary-foreground/50 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. A member of our team will review your inquiry and respond within one business day.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}