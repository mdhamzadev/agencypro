'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const teamStats = [
{ num: '24', label: 'Team Members' },
{ num: '8yr', label: 'In Business' },
{ num: '3', label: 'Global Offices' },
{ num: '120+', label: 'Clients Served' }];


const team = [
{
  name: 'James Holloway',
  title: 'Founder & CEO',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1a79b8e72-1763295320816.png",
  alt: 'Professional headshot of a man in his 40s with grey hair in a dark blazer against a neutral background'
},
{
  name: 'Naomi Park',
  title: 'Chief Strategy Officer',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_13ce8d4ad-1763296462601.png",
  alt: 'Professional headshot of a Korean-American woman smiling confidently in business casual attire'
},
{
  name: 'Rafael Mendez',
  title: 'Head of Design',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1f383ff29-1763295330729.png",
  alt: 'Professional headshot of a Hispanic man with dark hair in a white shirt against a light background'
}];


export default function AboutSection() {
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
    <section ref={sectionRef} className="pt-36 pb-20 px-6 lg:px-10 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-lines opacity-40" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* About header */}
        <div className="reveal-item mb-16">
          <span className="section-label mb-3 block">About AgencyPro</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <h2 className="font-sans font-extrabold text-hero-2xl tracking-tighter leading-none text-foreground">
              WE ARE THE<br />
              AGENCY YOU<br />
              <span className="opacity-20 font-light italic">NEEDED SOONER.</span>
            </h2>
            <div>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Founded in 2018, AgencyPro was built on a single conviction: B2B companies deserve an agency that thinks like a business partner, not a vendor. We embed deeply, move fast, and hold ourselves accountable to your revenue — not just deliverables.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our team of 24 specialists spans strategy, design, engineering, and marketing. We operate from New York, London, and Singapore — serving clients across North America, Europe, and APAC.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal-item grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 p-8 rounded-[2rem] border border-border bg-muted/30">
          {teamStats?.map((s) =>
          <div key={s?.label} className="text-center">
              <span className="stat-number block">{s?.num}</span>
              <span className="section-label mt-1.5 block">{s?.label}</span>
            </div>
          )}
        </div>

        {/* Team */}
        <div className="reveal-item">
          <span className="section-label mb-8 block">Leadership Team</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {team?.map((member, i) =>
            <div
              key={member?.name}
              className="group"
              style={{ transitionDelay: `${i * 80}ms` }}>
              
                <div className="rounded-[1.5rem] overflow-hidden border border-border aspect-[3/4] relative mb-4 bg-muted">
                  <AppImage
                  src={member?.img}
                  alt={member?.alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                
                </div>
                <h3 className="text-base font-bold tracking-tight text-foreground">{member?.name}</h3>
                <p className="text-sm text-muted-foreground">{member?.title}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}