import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adrianovs.net'),
  title: {
    default: 'Adriano Viera dos Santos — Senior Full-stack Developer',
    template: '%s | Adriano Viera dos Santos',
  },
  description:
    'Senior Full-stack Developer specializing in Java, Spring Boot, and AI-powered workflow automation. 4+ years building government systems. Available for remote work.',
  keywords: [
    'Java Developer',
    'Senior Software Engineer',
    'Spring Boot',
    'Quarkus',
    'Microservices',
    'Event-Driven Architecture',
    'Kafka',
    'Full Stack Developer',
    'Backend Engineer',
    'Remote Developer',
    'Brazil',
    'Florianópolis',
  ],
  authors: [{ name: 'Adriano Viera dos Santos' }],
  creator: 'Adriano Viera dos Santos',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adrianovs.net',
    siteName: 'Adriano Viera dos Santos',
    title: 'Adriano Viera dos Santos — Senior Full-stack Developer',
    description:
      'Senior Full-stack Developer specializing in Java, Spring Boot, and AI-powered workflow automation. 4+ years building government systems. Available for remote work.',
    images: [{ url: '/images/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adriano Viera dos Santos — Senior Full-stack Developer',
    description:
      'Senior Full-stack Developer specializing in Java, Spring Boot, and AI-powered workflow automation. 4+ years building government systems. Available for remote work.',
    images: ['/images/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Adriano Viera dos Santos',
              url: 'https://adrianovs.net',
              jobTitle: 'Senior Full-stack Developer',
              worksFor: { '@type': 'Organization', name: 'PAIPE Software' },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Florianópolis',
                addressRegion: 'SC',
                addressCountry: 'BR',
              },
              sameAs: [
                'https://github.com/AdrianoVS87',
                'https://www.linkedin.com/in/adrianovs87/',
              ],
            }),
          }}
        />
        {/* Mouse spotlight: update CSS custom properties on mousemove */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                document.addEventListener('mousemove', function(e) {
                  document.body.style.setProperty('--mouse-x', e.clientX + 'px');
                  document.body.style.setProperty('--mouse-y', e.clientY + 'px');
                });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen relative">{children}</body>
    </html>
  );
}
