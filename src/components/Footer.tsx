import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + links */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <div className="flex items-center gap-2">
            <AppLogo size={28} />
            <span className="font-sans font-extrabold text-sm tracking-tighter text-foreground">
              Agency<span className="opacity-40">Pro</span>
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link href="/services" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            <Link href="/contact" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <Link href="/contact" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/contact" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
          </nav>
        </div>

        {/* Social + copyright */}
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Twitter" className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all">
            <Icon name="GlobeAltIcon" size={15} />
          </a>
          <a href="#" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all">
            <Icon name="LinkIcon" size={15} />
          </a>
          <span className="text-[12px] font-medium text-muted-foreground ml-2">
            © 2026 AgencyPro
          </span>
        </div>
      </div>
    </footer>
  );
}