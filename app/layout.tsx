import React from 'react';
import type { Metadata } from 'next';
import { Inter, Silkscreen } from 'next/font/google';

import './globals.css';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-silkscreen',
});

export const metadata: Metadata = {
  title: 'Amanda Carvalho · Frontend & Fullstack Developer',
  description:
    'Sou Amanda Carvalho, desenvolvedora frontend/fullstack. Crio interfaces modernas, acessíveis e performáticas, com foco em experiência do usuário, código limpo e resultados para negócios.',
  creator: 'Amanda Carvalho',
  applicationName: 'amanda.dev',
  keywords: [
    'Amanda Carvalho',
    'Frontend Developer',
    'Fullstack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfólio',
    'Desenvolvedora Frontend',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
  },
  openGraph: {
    type: 'website',
    url: 'https://amanda.dev',
    title: 'Amanda Carvalho · Frontend & Fullstack Developer',
    description:
      'Portfólio de Amanda Carvalho, desenvolvedora frontend/fullstack focada em interfaces modernas, performance e experiência do usuário.',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amanda Carvalho · Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amanda Carvalho · Frontend Developer',
    description:
      'Desenvolvedora frontend/fullstack criando experiências digitais modernas, acessíveis e escaláveis.',
    images: ['/opengraph-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${silkscreen.variable} relative`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <div className="main-mask pointer-events-none absolute inset-0 -z-50" />
      </body>
    </html>
  );
}
