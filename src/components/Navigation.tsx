'use client';

import { useState, useEffect, useRef } from 'react';
import { useI18n } from '@/lib/i18n';

const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'] as const;

export default function Navigation() {
  const { locale, setLocale, t } = useI18n();
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

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        background: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* AV monogram */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wider transition-all duration-200 hover:scale-105"
          style={{ color: '#10b981', fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          AV
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <a
              key={section}
              href={section === 'blog' ? '/blog' : `#${section}`}
              className={`nav-link text-sm font-medium transition-colors duration-200 ${
                activeSection === section ? 'active text-emerald-400' : 'text-gray-400 hover:text-gray-100'
              }`}
            >
              {t(`nav.${section}`)}
            </a>
          ))}
          <a
            href="/blog"
            className="nav-link text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors duration-200"
          >
            {t('nav.blog')}
          </a>
          <button
            onClick={() => setLocale(locale === 'en' ? 'pt' : 'en')}
            className="text-xs font-mono text-gray-500 hover:text-emerald-400 transition-colors duration-200 border border-white/10 rounded-md px-2.5 py-1"
          >
            {locale === 'en' ? 'PT' : 'EN'}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setLocale(locale === 'en' ? 'pt' : 'en')}
            className="text-xs font-mono text-gray-500 hover:text-emerald-400 transition-colors border border-white/10 rounded px-2 py-1"
          >
            {locale === 'en' ? 'PT' : 'EN'}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-400 hover:text-emerald-400 transition-colors"
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

      {/* Mobile slide-in panel */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? '400px' : '0',
          background: 'rgba(10,10,10,0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: mobileOpen ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}
      >
        <div className="px-6 py-4 space-y-1">
          {sections.map((section) => (
            <a
              key={section}
              href={section === 'blog' ? '/blog' : `#${section}`}
              onClick={() => setMobileOpen(false)}
              className={`block py-2.5 text-sm font-medium transition-colors duration-200 ${
                activeSection === section ? 'text-emerald-400' : 'text-gray-400 hover:text-gray-100'
              }`}
            >
              {t(`nav.${section}`)}
            </a>
          ))}
          <a
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors duration-200"
          >
            {t('nav.blog')}
          </a>
        </div>
      </div>
    </nav>
  );
}
