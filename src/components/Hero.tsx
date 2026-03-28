'use client';

import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function UpworkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
      style={{
        background: `
          radial-gradient(ellipse at 80% 50%, rgba(99,102,241,0.08) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(99,102,241,0.04) 0%, transparent 50%)
        `,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text content */}
          <div className="flex-1 space-y-6">
            <h1
              className="animate-fade-in-up delay-100 text-4xl md:text-5xl font-bold text-text tracking-tight"
            >
              {t('hero.title')}
            </h1>

            <p className="animate-fade-in-up delay-200 text-lg text-accent font-medium">
              {t('hero.subtitle')}
            </p>

            <p
              className="animate-fade-in-up delay-300 text-2xl md:text-3xl font-medium leading-snug"
              style={{ color: '#f0f0f0', maxWidth: '550px' }}
            >
              {t('hero.tagline')}
            </p>

            <p
              className="animate-fade-in-up delay-400 text-base leading-relaxed"
              style={{ color: '#b0b0b0' }}
            >
              {t('hero.current')}
            </p>

            {/* CTA buttons — hierarchy: primary / secondary / ghost */}
            <div className="animate-fade-in-up delay-500 flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 font-medium rounded-lg transition-all"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #4ade80)',
                  color: '#0a0a0a',
                  boxShadow: '0 4px 15px rgba(96,165,250,0.3)',
                }}
              >
                {t('hero.viewProjects')}
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors font-medium"
              >
                {t('hero.contactMe')}
              </a>
              <a
                href="/cv.pdf"
                className="px-5 py-2.5 text-text-muted hover:text-accent transition-colors font-medium flex items-center gap-1"
              >
                {t('hero.downloadCV')} →
              </a>
            </div>

            {/* Social links */}
            <div className="animate-fade-in-up delay-600 flex items-center gap-5 pt-2">
              <a href="https://github.com/AdrianoVS87" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/adrianovs87/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors" aria-label="Upwork">
                <UpworkIcon />
              </a>
              <a href="mailto:info@adrianovs.net" className="text-text-muted hover:text-accent transition-colors" aria-label="Email">
                <EmailIcon />
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="animate-fade-in-up delay-700 flex-shrink-0">
            <div
              className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden ring-2 bg-bg-card"
              style={{
                boxShadow: '0 0 60px rgba(74,158,255,0.15)',
                borderWidth: '2px',
                borderColor: 'rgba(96,165,250,0.3)',
                borderStyle: 'solid',
              }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Adriano Viera dos Santos"
                width={288}
                height={288}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <a
        href="#about"
        className="animate-bounce-scroll absolute bottom-8 left-1/2 text-text-muted hover:text-accent transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDownIcon />
      </a>
    </section>
  );
}
