'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-6 left-0 w-full z-[100] px-4 sm:px-6 pointer-events-none transition-all duration-500`}
      >
        <div
          className={`max-w-[860px] mx-auto nav-glass rounded-full px-6 py-3 flex justify-between items-center pointer-events-auto transition-all duration-500 ${scrolled ? 'shadow-lg' : ''}`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <AppLogo size={32} />
            <span className="font-sans font-extrabold text-sm tracking-tighter text-foreground hidden sm:block">
              Agency<span className="opacity-40">Pro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40 hover:text-foreground transition-colors duration-200"
              >
                {link?.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="magnetic-btn btn-primary text-[9px] px-5 py-2.5 hidden sm:inline-flex"
            >
              Start a Project
            </Link>
            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[99] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          onClick={() => setMenuOpen(false)}
        >
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold tracking-tighter text-foreground hover:opacity-50 transition-opacity"
            >
              {link?.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-4"
          >
            Start a Project
          </Link>
        </div>
      )}
    </>
  );
}