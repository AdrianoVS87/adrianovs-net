'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

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

  return (
    <section id="contact" className="py-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col items-center text-center"
        >
          {/* Number */}
          <motion.p
            variants={itemVariants}
            className="text-sm mb-4"
            style={{ color: '#00ff41', fontFamily: 'var(--font-jetbrains-mono)' }}
          >
            05. What&apos;s Next?
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Get In Touch
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base leading-relaxed max-w-md mb-10"
            style={{ color: '#a1a1aa' }}
          >
            {t('contact.subtitle')} I&apos;m always open to discussing new projects, remote contracts,
            or just saying hello — my inbox is open.
          </motion.p>

          {/* CTA button */}
          <motion.div variants={itemVariants}>
            <a
              href="mailto:info@adrianovs.net"
              className="inline-block px-8 py-3 text-sm font-semibold rounded border-2 transition-all duration-200 hover:bg-[#00ff41]/10 hover:-translate-y-0.5 mb-8"
              style={{
                color: '#00ff41',
                borderColor: '#00ff41',
                fontFamily: 'var(--font-jetbrains-mono)',
              }}
            >
              Say Hello →
            </a>
          </motion.div>

          {/* Email text */}
          <motion.a
            variants={itemVariants}
            href="mailto:info@adrianovs.net"
            className="text-sm transition-colors duration-200 hover:text-[#00ff41]"
            style={{ color: '#71717a', fontFamily: 'var(--font-jetbrains-mono)' }}
          >
            info@adrianovs.net
          </motion.a>

          {/* Location */}
          <motion.p
            variants={itemVariants}
            className="text-xs mt-2"
            style={{ color: '#52525b' }}
          >
            {t('contact.location')} · {t('contact.timezone')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
