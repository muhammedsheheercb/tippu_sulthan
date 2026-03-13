import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-[url('/images/home/about/bg.webp')] bg-cover bg-center py-10">
      <div className="absolute -left-4 top-4 md:left-24 md:top-28">
        <Image
          src={'/images/home/about/left.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="w-20 md:w-32"
        />
      </div>
      <div className="absolute -left-4 top-80 md:left-0 md:top-56">
        <Image
          src={'/images/home/about/ls.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="w-20 md:w-32"
        />
      </div>
      <div className="absolute -right-5 bottom-80 md:bottom-80 md:right-40">
        <Image
          src={'/images/home/about/right.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="w-20 md:w-32"
        />
      </div>
      <div className="bottom-66 absolute -right-4 md:bottom-56 md:right-0">
        <Image
          src={'/images/home/about/rs.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="w-20 md:w-32"
        />
      </div>
      <div className="mt-6 flex flex-col items-center justify-start gap-4">
        <h1 className="font-aboreto text-center text-4xl font-[400] uppercase text-[#6C4D2A] md:text-7xl">
          FEAST LIKE <br />
          ROYALTY
        </h1>
        <p className="font-aboreto max-w-[500px] px-4 text-center text-sm font-[400] text-[#000000] md:text-base">
          Step into a world of regal charm, where hand-crafted interiors meet
          rich, timeless flavours. Whether it’s a romantic evening or a grand
          celebration — every meal is served with royal elegance.
        </p>
        <div>
          <Link href={'/contact'}>
            <Button className="font-montserrat flex flex-row items-center justify-center gap-1 rounded-none bg-[#8D1416] !px-6 py-6 text-xs font-[500] uppercase text-[#EEDEC0] hover:cursor-pointer hover:bg-[#8d1416e0]">
              contact us
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
