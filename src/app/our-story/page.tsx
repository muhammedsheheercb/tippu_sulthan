import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from './section/Hero';
import Story from './section/Story';
import JoinUs from './section/JoinUs';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story | Tipu Sultan – A Royal Legacy',
  description:
    'Discover the story behind Tipu Sultan — a celebration of Mughal heritage, royal hospitality, and authentic Pakistani fine dining in Birmingham.',
  keywords: [
    'Tipu Sultan story',
    'about Tipu Sultan',
    'Pakistani restaurant heritage',
    'Mughal inspired dining',
  ],
  openGraph: {
    title: 'Our Story | Tipu Sultan',
    description:
      'Learn about the heritage, passion, and royal vision behind Tipu Sultan’s majestic dining experience.',
    url: 'https://tipu-sultan.vercel.app/our-story',
    siteName: 'Tipu Sultan',
    images: [
      {
        url: '/images/logo.webp',
        width: 800,
        height: 600,
        alt: 'Our Story – Tipu Sultan Restaurant',
      },
    ],
    locale: 'en_GB',
    type: 'article',
  },
};

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#ffefcf]">
        <Navbar position="absolute" />
        <Hero />
        <Story />
        <JoinUs />
        <Footer />
      </div>
    </main>
  );
};

export default page;
