'use client';

import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center text-text-muted text-sm">
        <p>&copy; {new Date().getFullYear()} Adriano Viera dos Santos</p>
        <p className="mt-1">{t('footer.built')}</p>
      </div>
    </footer>
  );
}
