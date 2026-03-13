import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover md:hidden"
        poster="/images/home/hero/hero.webp"
      >
        <source
          src="https://d8q1b3smcycac.cloudfront.net/TipuSultan/tipusultan_mob.mp4
"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        poster="/images/home/hero/hero.webp"
      >
        <source
          src="https://d8q1b3smcycac.cloudfront.net/TipuSultan/tipusultan_web.mp4
"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Animated Content Container */}
      <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 text-white">
        <h1 className="font-aboreto text-center text-5xl font-[400] uppercase tracking-[-7%] text-[#FFDBA4] md:text-8xl">
          Welcome to
          <br />
          Tipu Sultan
        </h1>
        <h6 className="font-aboreto text-center text-lg font-[400] uppercase tracking-[-7%] text-[#FFDBA4] md:text-xl">
          Majestic Dining Awaits
        </h6>
        <div className="mt-4 grid grid-cols-2 items-center justify-center gap-4 md:mt-6">
          <Link href={'/contact'}>
            <Button
              aria-label="Contact"
              className="font-montserrat flex h-3 w-40 flex-row items-center justify-center gap-1 rounded-none bg-[#AE772D] !px-6 py-6 text-xs font-[500] uppercase text-[#ffff] hover:cursor-pointer hover:bg-[#ae762dd6]"
            >
              Contact <ChevronRight />
            </Button>
          </Link>
          <Link href={'/events'}>
            <Button
              aria-label="Events"
              className="font-montserrat flex h-3 w-40 flex-row items-center justify-center gap-1 rounded-none bg-[#AE772D] !px-6 py-6 text-xs font-[500] uppercase text-[#ffff] hover:cursor-pointer hover:bg-[#ae762dd6]"
            >
              Events
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
