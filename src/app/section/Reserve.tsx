'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Reserve: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#ffefcf] md:h-[160vh]">
      {/* mobile screen */}
      <div className="relative h-full w-full pb-60 md:hidden">
        <div className="absolute -top-10 left-0 right-0">
          <Image
            src="/images/reserve/ts.webp"
            alt="Top Right Decoration"
            width={400}
            height={500}
            className="h-full w-full"
          />
        </div>
        <div className="absolute right-0 top-[20rem]">
          <Image
            src="/images/reserve/9.png"
            alt="Top Right Decoration"
            width={400}
            height={500}
            className="w-14"
          />
        </div>
        <div className="absolute -right-6 bottom-0 z-50">
          <Image
            src="/images/reserve/4.png"
            alt="Top Right Decoration"
            width={400}
            height={500}
            className="w-16"
          />
        </div>
        <div className="absolute bottom-[10rem] left-6 z-50">
          <Image
            src="/images/reserve/8.png"
            alt="Top Right Decoration"
            width={400}
            height={500}
            className="w-16"
          />
        </div>
        <div className="relative z-40 flex flex-col gap-6 pt-[25rem]">
          <h1 className="font-aboreto text-ce px-2 text-[2.5rem] leading-tight text-black md:text-left">
            REGAL DINING,
            <br />
            REIMAGINED
          </h1>
          <Image
            src="/images/reserve/2.png"
            alt="Top Right Decoration"
            width={400}
            height={500}
            className="h-[230px] w-full object-cover pl-2 pr-8"
          />
          <div className="flex justify-end">
            <Image
              src="/images/reserve/7.png"
              alt="Top Right Decoration"
              width={400}
              height={500}
              className="h-[200px] w-1/2 object-cover"
            />
          </div>
          <Image
            src="/images/reserve/6.png"
            alt="Top Right Decoration"
            width={400}
            height={500}
            className="h-[200px] w-full object-cover pl-10 pr-10"
          />
        </div>
        <div className="relative z-40 flex flex-col gap-4 px-4 pt-6">
          <p className="font-aboreto items-center justify-center text-start text-sm uppercase text-[#6C4D2A]">
            Step into a world where tradition is plated with grace. Every corner
            of our space is infused with regal charm—from the intricate
            Mughal-inspired detailing to the warm golden tones of our signature
            serveware.
          </p>

          <Link href={'/gallery'}>
            <Button className="font-montserrat z-40 mt-1 flex flex-row items-center justify-center gap-1 rounded-none bg-[#8D1416] !px-6 py-6 text-xs font-[500] uppercase text-[#EEDEC0] hover:cursor-pointer hover:bg-[#8d1416e0] md:mt-1">
              Gallery
              <ChevronRight />
            </Button>
          </Link>
        </div>
        <div className="absolute -bottom-10 left-0">
          <Image
            src="/images/reserve/3s.png"
            alt="Top Right Decoration"
            width={390}
            height={440}
            className="h-[400px] w-full"
          />
        </div>
      </div>
      {/* end */}
      {/* big image */}
      <div className="relative hidden h-full w-full md:block">
        <div className="absolute -top-72 right-0">
          <Image
            src="/images/reserve/5.png"
            alt="Top Right Decoration"
            width={1347}
            height={862}
            className="h-[700px] w-full"
          />
        </div>
        <div className="absolute right-0 top-[32.5rem]">
          <Image
            src="/images/reserve/6.png"
            alt="Top Right Decoration"
            width={1347}
            height={862}
            className="h-[180px] w-full xl:h-[220px]"
          />
        </div>
        <div className="right-66 absolute bottom-6">
          <Image
            src="/images/reserve/7.png"
            alt="Top Right Decoration"
            width={1347}
            height={862}
            className="h-[400px] w-full"
          />
        </div>
        <div className="absolute left-20 top-24">
          <h1 className="font-aboreto text-ce px-2 text-7xl leading-tight text-black md:text-left">
            REGAL DINING,
            <br />
            REIMAGINED
          </h1>
        </div>
        <div className="absolute left-2 top-[21rem] xl:left-20">
          <Image
            src="/images/reserve/2.png"
            alt="Top Right Decoration"
            width={1347}
            height={862}
            className="h-[200px] w-full xl:h-[400px]"
          />
        </div>
        <div className="absolute -bottom-20 left-0">
          <Image
            src="/images/reserve/3.png"
            alt="Top Right Decoration"
            width={1347}
            height={862}
            className="h-[500px] w-full"
          />
        </div>
        <div className="absolute right-[18rem] top-[25rem]">
          <div className="flex flex-col gap-4">
            <p className="font-aboreto max-w-[400px] items-center justify-center text-start text-base uppercase text-[#6C4D2A]">
              Step into a world where tradition is plated with grace. Every
              corner of our space is infused with regal charm—from the intricate
              Mughal-inspired detailing to the warm golden tones of our
              signature serveware.
            </p>
            <Link href={'/gallery'}>
              <Button className="font-montserrat z-40 mt-4 flex flex-row items-center justify-center gap-1 rounded-none bg-[#8D1416] !px-6 py-6 text-xs font-[500] uppercase text-[#EEDEC0] hover:cursor-pointer hover:bg-[#8d1416e0] md:mt-1">
                Gallery
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute right-[10rem] top-[20rem]">
          <Image
            src="/images/reserve/9.png"
            alt="Top Right Decoration"
            width={1347}
            height={862}
            className="w-16"
          />
        </div>
        <div className="absolute bottom-[15rem] left-0">
          <Image
            src="/images/reserve/4.png"
            alt="Top Right Decoration"
            width={1347}
            height={862}
            className="w-16"
          />
        </div>
        <div className="absolute bottom-[12rem] left-[35rem]">
          <Image
            src="/images/reserve/8.png"
            alt="Top Right Decoration"
            width={1347}
            height={862}
            className="w-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Reserve;
