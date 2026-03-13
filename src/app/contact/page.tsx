import Contact from '@/app/contact/section/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Tipu Sultan Birmingham',
  description:
    'Contact Tipu Sultan in Birmingham for reservations, wedding banquets, private events, or general enquiries. Experience royal Pakistani hospitality.',
  keywords: [
    'contact Tipu Sultan',
    'Pakistani restaurant Birmingham contact',
    'Tipu Sultan enquiries',
    'Pakistani wedding venue Birmingham',
  ],
  openGraph: {
    title: 'Contact Us | Tipu Sultan',
    description:
      'Get in touch with Tipu Sultan Birmingham for bookings, events, and enquiries.',
    url: 'https://tipu-sultan.vercel.app/contact',
    siteName: 'Tipu Sultan',
    images: [
      {
        url: '/images/logo.webp',
        width: 800,
        height: 600,
        alt: 'Contact Tipu Sultan Birmingham',
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
          className="h-[14vh] w-full bg-[#ffefcf] md:h-[12vh]"
          id="hero"
        ></div>
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default page;
