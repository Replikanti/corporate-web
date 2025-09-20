import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Viewport } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Replikanti - Automatizace procesů přes WhatsApp',
  description: 'Automatizujeme vaše obchodní procesy pomocí WhatsApp. Ušetřete čas a zvyšte efektivitu s našimi inteligentními řešeními.',
  keywords: 'automatizace, WhatsApp, procesy, chatbot, AI, efektivita, podnikání',
  authors: [{ name: 'Replikanti' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}