import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Menu = () => {
  return (
    <section className="relative h-full w-full bg-[#ffefcf] md:h-screen">
      <div className="absolute left-0 top-4 md:hidden">
        <Image
          src={'/images/home/menu/ls.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="w-16"
        />
      </div>
      <div className="absolute -left-3 bottom-40 md:bottom-20 md:left-20">
        <Image
          src={'/images/home/menu/l.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="w-16"
        />
      </div>
      <div className="absolute bottom-36 right-1 md:bottom-60 md:right-60 2xl:right-96">
        <Image
          src={'/images/home/menu/c.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="w-16"
        />
      </div>
      {/* mobile screen */}
      <div className="flex flex-col items-center justify-center md:hidden">
        <Image
          src={'/images/home/menu/1.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="h-[300px] w-full object-contain"
        />
        <Image
          src={'/images/home/menu/menu.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="h-[400px] w-full object-cover"
        />
        <Image
          src={'/images/home/menu/2.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="h-auto w-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 pb-4 md:hidden">
        <p className="font-aboreto max-w-[400px] text-center text-sm font-[400] text-[#6C4D2A] md:text-base">
          Every corner of Tipu Sultan is crafted to echo grandeur — from
          handcrafted woodwork to plush seating and regal architecture. Step
          inside and experience a culinary journey worthy of emperors.
        </p>
        <Link href={'/contact'}>
          <Button className="font-montserrat flex flex-row items-center justify-center gap-1 rounded-none bg-[#8D1416] !px-6 py-6 text-xs font-[500] uppercase text-[#EEDEC0] hover:cursor-pointer hover:bg-[#8d1416e0]">
            contact us
            <ChevronRight />
          </Button>
        </Link>
      </div>
      {/* end */}

      {/* big screen */}
      <div className="absolute inset-0 hidden items-center justify-center px-40 py-10 md:flex">
        <Image
          src={'/images/home/menu/menu.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="absolute -left-28 top-0 hidden md:block">
        <Image
          src={'/images/home/menu/1.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="h-[300px] w-full object-contain"
        />
      </div>
      <div className="absolute -right-40 top-60 hidden md:block">
        <Image
          src={'/images/home/menu/2.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="h-[300px] w-full object-contain"
        />
      </div>
      <div className="absolute right-0 top-32 hidden md:block">
        <Image
          src={'/images/home/menu/r.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="w-20"
        />
      </div>
      <div className="absolute bottom-60 left-24 hidden md:block">
        <div className="flex flex-col items-start justify-start gap-4">
          <p className="font-aboreto max-w-[200px] text-start text-sm font-[400] text-[#6C4D2A] md:text-base xl:max-w-[400px]">
            Every corner of Tipu Sultan is crafted to echo grandeur — from
            handcrafted woodwork to plush seating and regal architecture. Step
            inside and experience a culinary journey worthy of emperors.
          </p>
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

export default Menu;
