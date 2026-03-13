import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#ffefcf] px-4 py-10 md:h-screen">
      {/* big screen */}
      <div className="absolute left-12 top-36 z-20 hidden md:block xl:left-28 xl:top-24">
        <Image
          src={'/images/home/follow/1.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="h-[160px] w-full object-cover"
        />
      </div>
      <div className="absolute bottom-20 left-10 z-20 hidden md:block xl:left-44">
        <Image
          src={'/images/home/follow/4.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="h-[250px] w-full object-cover"
        />
      </div>
      <div className="-translate-1/2 absolute left-1/2 top-[28rem] z-20 hidden md:block">
        <Image
          src={'/images/home/follow/2.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="h-[390px] w-full object-cover"
        />
      </div>
      <div className="-translate-1/2 absolute left-1/2 top-[8rem] z-20 hidden md:block">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-aboreto text-4xl font-[400] uppercase text-[#6C4D2A] md:text-7xl">
            instagram
          </h1>
          <Link
            className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A] md:text-lg"
            href={'#'}
            target="_blank"
          >
            @tipusultangroup
          </Link>
        </div>
      </div>
      <div className="absolute right-8 top-40 z-20 hidden md:block xl:right-28 xl:top-28">
        <Image
          src={'/images/home/follow/3.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="h-[190px] w-full object-cover"
        />
      </div>
      <div className="absolute bottom-20 right-10 z-20 hidden md:block xl:right-44">
        <Image
          src={'/images/home/follow/5.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="h-[190px] w-full object-cover"
        />
      </div>

      {/* big screen end */}

      {/* mobile */}
      <div className="flex flex-col gap-6 md:hidden">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-aboreto text-4xl font-[400] uppercase text-[#6C4D2A] md:text-7xl">
            instagram
          </h1>
          <Link
            className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A] md:text-lg"
            href={'#'}
            target="_blank"
          >
            @tipusultangroup
          </Link>
        </div>
        <div className="px-8">
          <Image
            src={'/images/home/follow/2.webp'}
            alt="bg image"
            width={2000}
            height={1000}
            className="h-[300px] w-full object-cover md:h-full"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Image
            src={'/images/home/follow/3.webp'}
            alt="bg image"
            width={2000}
            height={1000}
            className="h-[150px] w-full object-cover md:h-full"
          />
          <Image
            src={'/images/home/follow/4.webp'}
            alt="bg image"
            width={2000}
            height={1000}
            className="h-[150px] w-full object-cover md:h-full"
          />
          <Image
            src={'/images/home/follow/5.webp'}
            alt="bg image"
            width={2000}
            height={1000}
            className="h-[150px] w-full object-cover md:h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Follow;
