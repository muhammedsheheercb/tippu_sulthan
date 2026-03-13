import type { Metadata } from 'next';
import {
  Aboreto,
  Manrope,
  Montserrat,
  Oxygen,
  Playfair_Display,
  Raleway,
} from 'next/font/google';
import '../styles/globals.css';
import '../styles/ham.css';
import { cn } from '@/lib/utils';
import Providers from './Providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://tipu-sultan.vercel.app/'),
  title:
    'Tipu Sultan – Majestic Pakistani Fine Dining Restaurant in Birmingham',
  description:
    'Experience royal Pakistani fine dining at Tipu Sultan, Birmingham. From handcrafted woodwork and regal Mughal-inspired interiors to authentic Pakistani cuisine prepared by award-winning chefs, every visit is a celebration of tradition, luxury, and unforgettable hospitality.',
  keywords: [
    'Tipu Sultan Birmingham',
    'Pakistani restaurant Birmingham',
    'Pakistani fine dining',
    'Mughal inspired restaurant',
    'royal Pakistani cuisine',
    'Pakistani wedding venue Birmingham',
    'Asian restaurant Birmingham',
    'authentic Pakistani food UK',
    'luxury dining Birmingham',
    'Pakistani banquet hall',
  ],
  openGraph: {
    title:
      'Tipu Sultan – Royal Pakistani Cuisine & Majestic Dining in Birmingham',
    description:
      'Discover Tipu Sultan, a Mughal-inspired Pakistani restaurant in Birmingham offering authentic flavours, regal interiors, and warm hospitality. Perfect for family dining, celebrations, and wedding banquets.',
    siteName: 'Tipu Sultan',
    images: [
      {
        url: '/images/logo.webp',
        width: 800,
        height: 600,
        alt: 'Tipu Sultan Restaurant – Majestic Pakistani Fine Dining',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tipu Sultan – Majestic Pakistani Fine Dining in Birmingham',
    description:
      'Step into royal Pakistani dining at Tipu Sultan. Authentic cuisine, Mughal-inspired interiors, and unforgettable hospitality in the heart of Birmingham.',
    images: ['/images/logo.webp'],
  },
  icons: [{ rel: 'icon', url: '/images/logo.webp' }],
};

const oxygen = Oxygen({
  subsets: ['latin'],
  variable: '--font-oxygen',
  weight: ['400'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700', '800'],
});

const playfair_Display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair_Display',
  weight: ['400', '500', '600', '700', '800'],
});

const aboreto = Aboreto({
  subsets: ['latin'],
  variable: '--font-aboreto',
  weight: ['400'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'theme-custom flex min-h-screen antialiased',
          oxygen.variable,
          manrope.variable,
          raleway.variable,
          playfair_Display.variable,
          aboreto.variable,
          montserrat.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
