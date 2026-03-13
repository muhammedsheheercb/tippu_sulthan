import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Gallery from './section/Gallery';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Tipu Sultan – Royal Interiors & Cuisine',
  description:
    'Explore the Tipu Sultan gallery showcasing regal Mughal-inspired interiors, elegant dining spaces, and beautifully presented Pakistani cuisine.',
  keywords: [
    'Tipu Sultan gallery',
    'Pakistani restaurant interiors',
    'Mughal inspired decor',
    'Pakistani food gallery',
    'luxury dining Birmingham',
  ],
  openGraph: {
    title: 'Gallery | Tipu Sultan',
    description:
      'Take a visual journey through Tipu Sultan’s majestic interiors and authentic Pakistani cuisine.',
    url: 'https://tipu-sultan.vercel.app/gallery',
    siteName: 'Tipu Sultan',
    images: [
      {
        url: '/images/logo.webp',
        width: 800,
        height: 600,
        alt: 'Tipu Sultan Gallery – Royal Dining',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <div
          className="h-[10vh] w-full bg-[#ffefcf] md:h-[12vh]"
          id="hero"
        ></div>
        <Gallery />
        <Footer />
      </div>
    </main>
  );
};

export default page;
