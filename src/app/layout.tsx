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
    default: 'Adriano Viera dos Santos — Senior Java Engineer',
    template: '%s | Adriano Viera dos Santos',
  },
  description:
    'Senior Java Backend Engineer building mission-critical systems for government and healthcare. Specializing in Spring Boot, Quarkus, and agentic full stack development.',
  keywords: [
    'Java Developer',
    'Spring Boot',
    'Quarkus',
    'Full Stack Developer',
    'Backend Engineer',
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
    title: 'Adriano Viera dos Santos — Senior Java Engineer',
    description:
      'Senior Java Backend Engineer building mission-critical systems for government and healthcare.',
    images: [{ url: '/images/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adriano Viera dos Santos — Senior Java Engineer',
    description:
      'Senior Java Backend Engineer building mission-critical systems for government and healthcare.',
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
              jobTitle: 'Senior Java Engineer',
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
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
