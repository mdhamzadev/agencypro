'use client';

import React, { useEffect, useRef, useState } from 'react';

const timeSlots = [
  'Mon 9:00 AM', 'Mon 11:00 AM', 'Tue 10:00 AM',
  'Tue 2:00 PM', 'Wed 9:00 AM', 'Wed 3:00 PM',
  'Thu 11:00 AM', 'Thu 4:00 PM', 'Fri 9:00 AM',
];

export default function BookingCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

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

  const handleBook = () => {
    if (selected) setBooked(true);
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 px-6 lg:px-10 bg-background border-t border-border">
      <div className="max-w-[1000px] mx-auto">
        <div className="reveal-item text-center mb-14">
          <span className="section-label mb-3 block">Book a Call</span>
          <h2 className="font-sans font-extrabold text-hero-2xl tracking-tighter leading-none text-foreground mb-5">
            30 MINUTES.<br />
            <span className="opacity-20 font-light italic">ZERO PRESSURE.</span>
          </h2>
          <p className="text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed">
            Pick a time below for a discovery call. We&apos;ll review your current situation and tell you honestly if we&apos;re a fit.
          </p>
        </div>

        {!booked ? (
          <div className="reveal-item bg-card border border-border rounded-[2rem] p-8 lg:p-12">
            {/* Availability indicator */}
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Slots Available This Week</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {timeSlots?.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelected(slot)}
                  className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                    selected === slot
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-border text-foreground hover:border-foreground'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={handleBook}
                disabled={!selected}
                className={`magnetic-btn btn-primary ${!selected ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                Confirm Booking
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              {selected && (
                <span className="text-sm text-muted-foreground">
                  Selected: <span className="font-semibold text-foreground">{selected}</span> — 30 min Discovery Call
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="reveal-item text-center bg-primary rounded-[2rem] p-12 text-primary-foreground">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold tracking-tighter mb-2">You&apos;re booked for {selected}</h3>
            <p className="text-primary-foreground/50 text-sm">Calendar invite sent. We look forward to speaking with you.</p>
          </div>
        )}
      </div>
    </section>
  );
}