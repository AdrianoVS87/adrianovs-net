'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';

const sections = ['home', 'about', 'experience', 'projects', 'blog', 'contact'] as const;

export default function Navigation() {
  const { locale, setLocale, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'rgba(10,10,10,0.7)',
        borderBottomColor: scrolled ? 'rgba(38,38,38,0.8)' : 'rgba(38,38,38,0.4)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold text-text hover:text-accent transition-colors">
          adrianovs.net
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <a
              key={section}
              href={section === 'blog' ? '/blog' : `#${section}`}
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {t(`nav.${section}`)}
            </a>
          ))}
          <button
            onClick={() => setLocale(locale === 'en' ? 'pt' : 'en')}
            className="text-sm text-text-muted hover:text-accent transition-colors border border-border rounded px-2 py-1"
          >
            {locale === 'en' ? 'PT' : 'EN'}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setLocale(locale === 'en' ? 'pt' : 'en')}
            className="text-sm text-text-muted hover:text-accent transition-colors border border-border rounded px-2 py-1"
          >
            {locale === 'en' ? 'PT' : 'EN'}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-text-secondary hover:text-accent"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-border px-6 py-4">
          {sections.map((section) => (
            <a
              key={section}
              href={section === 'blog' ? '/blog' : `#${section}`}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-text-secondary hover:text-accent transition-colors"
            >
              {t(`nav.${section}`)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
