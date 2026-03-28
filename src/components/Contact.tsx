'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function UpworkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const socials = [
  { icon: GitHubIcon, label: 'GitHub', href: 'https://github.com/AdrianoVS87', hoverColor: 'hover:text-gray-100' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/adrianovs87/', hoverColor: 'hover:text-blue-400' },
  { icon: UpworkIcon, label: 'Upwork', href: '#', hoverColor: 'hover:text-green-400' },
  { icon: EmailIcon, label: 'Email', href: 'mailto:info@adrianovs.net', hoverColor: 'hover:text-emerald-400' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-heading mb-12">
            <span className="text-gray-500 font-mono text-lg">06.</span> {t('contact.title')}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: message + socials */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  {t('contact.subtitle')}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Whether it&apos;s a contract opportunity, a collaboration, or just saying hello —
                  I&apos;d love to hear from you.
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-4 font-mono">
                  Reach me at
                </p>
                <a
                  href="mailto:info@adrianovs.net"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  info@adrianovs.net
                </a>
                <div className="flex gap-2 mt-2 text-xs text-gray-600">
                  <span>{t('contact.location')}</span>
                  <span>·</span>
                  <span>{t('contact.timezone')}</span>
                </div>
              </div>

              {/* Social links with labels */}
              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, href, hoverColor }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-gray-500 ${hoverColor} transition-colors duration-200 group`}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-200">
                      <Icon />
                    </span>
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div variants={itemVariants}>
              {sent ? (
                <div
                  className="glass-card p-8 text-center flex flex-col items-center gap-4 h-full justify-center"
                >
                  <span className="text-4xl">🎉</span>
                  <p className="text-gray-200 font-semibold">Message sent!</p>
                  <p className="text-gray-500 text-sm">I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="floating-group">
                    <input
                      type="text"
                      name="name"
                      placeholder={t('contact.namePlaceholder')}
                      required
                    />
                  </div>
                  <div className="floating-group">
                    <input
                      type="email"
                      name="email"
                      placeholder={t('contact.emailPlaceholder')}
                      required
                    />
                  </div>
                  <div className="floating-group">
                    <textarea
                      name="message"
                      rows={6}
                      placeholder={t('contact.messagePlaceholder')}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background: loading ? 'rgba(16,185,129,0.5)' : '#10b981',
                      color: '#0a0a0a',
                      boxShadow: loading ? 'none' : '0 4px 20px rgba(16,185,129,0.3)',
                    }}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : t('contact.send')}
                  </button>
                  <p className="text-center text-gray-600 text-xs">
                    or email me directly at{' '}
                    <a href="mailto:info@adrianovs.net" className="text-emerald-400 hover:underline">
                      info@adrianovs.net
                    </a>
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
