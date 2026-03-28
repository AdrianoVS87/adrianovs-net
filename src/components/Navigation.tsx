'use client';

import { useState, useEffect, useRef } from 'react';
import { useI18n } from '@/lib/i18n';

const navLinks = [
  { label: '01. About', href: '#about' },
  { label: '02. Experience', href: '#experience' },
  { label: '03. Projects', href: '#projects' },
  { label: '04. Contact', href: '#contact' },
] as const;

const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact', 'blog'] as const;

export default function Navigation() {
  const { locale, setLocale } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setVisible(false);
        setMobileOpen(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section via Intersection Observer
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const isActive = (href: string) => {
    const id = href.replace('#', '');
    return activeSection === id;
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,255,65,0.05)',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-sm font-bold tracking-wider transition-all duration-200 hover:opacity-80"
            style={{ color: '#00ff41', fontFamily: 'var(--font-jetbrains-mono)' }}
          >
            adrianovs
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`nav-link text-xs font-medium transition-colors duration-200 pb-1 ${
                  isActive(href) ? 'active text-[#00ff41]' : 'text-zinc-400 hover:text-zinc-100'
                }`}
                style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
              >
                {label}
              </a>
            ))}

            {/* Resume button */}
            <a
              href="/cv.pdf"
              className="text-xs px-4 py-1.5 rounded border transition-all duration-200 hover:bg-[#00ff41]/10"
              style={{
                color: '#00ff41',
                borderColor: '#00ff41',
                fontFamily: 'var(--font-jetbrains-mono)',
              }}
            >
              Resume
            </a>

            {/* Language toggle */}
            <button
              onClick={() => setLocale(locale === 'en' ? 'pt' : 'en')}
              className="text-xs font-mono text-zinc-500 hover:text-[#00ff41] transition-colors duration-200 border border-zinc-800 rounded px-2.5 py-1"
              style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
            >
              {locale === 'en' ? 'PT' : 'EN'}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setLocale(locale === 'en' ? 'pt' : 'en')}
              className="text-xs font-mono text-zinc-500 hover:text-[#00ff41] transition-colors border border-zinc-800 rounded px-2 py-1"
            >
              {locale === 'en' ? 'PT' : 'EN'}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-zinc-400 hover:text-[#00ff41] transition-colors"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center"
          style={{
            background: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex flex-col items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium text-zinc-300 hover:text-[#00ff41] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
              >
                {label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              onClick={() => setMobileOpen(false)}
              className="text-lg px-8 py-3 rounded border transition-all duration-200 hover:bg-[#00ff41]/10"
              style={{
                color: '#00ff41',
                borderColor: '#00ff41',
                fontFamily: 'var(--font-jetbrains-mono)',
              }}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}
