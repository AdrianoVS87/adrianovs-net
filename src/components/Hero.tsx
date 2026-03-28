'use client';

import Image from 'next/image';
import { useI18n } from '@/lib/i18n';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ROLES = [
  'Senior Java Engineer',
  'Agentic Full Stack Developer',
  'AI Agent Architect',
  'Government Systems Engineer',
];

function TypingAnimation() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length - 1)), 30);
    } else {
      timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 50);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className="h-8 flex items-center">
      <span
        className="text-lg md:text-xl font-bold"
        style={{ color: '#00ff41', fontFamily: 'var(--font-jetbrains-mono)' }}
      >
        {displayText}
        <span style={{ opacity: showCursor ? 1 : 0, color: '#00ff41' }}>_</span>
      </span>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
    >
      <div className="max-w-[1100px] mx-auto px-6 py-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">

          {/* Left: Text content (60%) */}
          <motion.div
            className="flex-1 space-y-5 max-w-[600px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* "Hi, my name is" */}
            <motion.p
              variants={itemVariants}
              className="text-sm font-medium tracking-widest"
              style={{ color: '#00ff41', fontFamily: 'var(--font-jetbrains-mono)' }}
            >
              Hi, my name is
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
            >
              Adriano Viera<br />
              dos Santos<span style={{ color: '#00ff41' }}>.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium leading-snug"
              style={{ color: '#a1a1aa' }}
            >
              I build systems where failure is not an option.
            </motion.p>

            {/* Typing animation */}
            <motion.div variants={itemVariants}>
              <TypingAnimation />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed max-w-[520px]"
              style={{ color: '#a1a1aa' }}
            >
              {t('hero.current')}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-2.5 text-sm font-semibold rounded border-2 transition-all duration-200 hover:bg-[#00ff41]/10 hover:-translate-y-0.5"
                style={{
                  color: '#00ff41',
                  borderColor: '#00ff41',
                  fontFamily: 'var(--font-jetbrains-mono)',
                }}
              >
                {t('hero.viewProjects')}
              </a>
              <a
                href="#contact"
                className="text-sm font-medium transition-all duration-200 hover:text-[#00ff41] flex items-center gap-1"
                style={{ color: '#a1a1aa' }}
              >
                {t('hero.contactMe')} →
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Photo (40%) */}
          <motion.div
            className="flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            {/* Double-ring photo */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: '1px solid rgba(0,255,65,0.2)',
                  transform: 'scale(1.08)',
                }}
              />
              {/* Inner ring */}
              <div
                className="absolute inset-0 rounded-full transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(0,255,65,0.3)]"
                style={{
                  border: '2px solid #00ff41',
                }}
              />
              {/* Photo */}
              <div
                className="w-full h-full rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,65,0.25)] cursor-pointer"
                style={{ border: '2px solid #00ff41' }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Adriano Viera dos Santos"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll-down indicator */}
      <a
        href="#about"
        className="animate-bounce-scroll absolute bottom-8 left-1/2 text-zinc-600 hover:text-[#00ff41] transition-colors"
        aria-label="Scroll down"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
