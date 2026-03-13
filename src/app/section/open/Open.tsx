import Image from 'next/image';
import React from 'react';

const Open: React.FC = () => {
  return (
    <section className="relative h-full w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4 bg-[url('/images/home/open/bg.webp')] bg-cover bg-center px-12 py-10 md:px-28 md:py-20">
          <h1 className="font-aboreto text-center text-4xl font-[400] uppercase text-[#FFEFCF] md:text-6xl">
            OPENING <br /> TIMINGS
          </h1>
          <div className="flex flex-col items-center justify-center gap-2">
            <h6 className="font-aboreto text-center text-base font-[400] uppercase text-[#FFEFCF] md:text-xl">
              BIRMINGHAM{' '}
            </h6>
            <span className="font-aboreto text-center text-lg font-[400] uppercase text-[#FFEFCF] md:text-2xl">
              Monday - Sunday <br /> 12:00 PM - 11:00 PM
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h6 className="font-aboreto text-center text-base font-[400] uppercase text-[#FFEFCF] md:text-xl">
              LEICESTER OPENING <br /> TIMINGS
            </h6>
            <span className="font-aboreto text-center text-lg font-[400] uppercase text-[#FFEFCF] md:text-2xl">
              Monday - Sunday <br /> 11:30 AM - 11:00 PM
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h6 className="font-aboreto text-center text-base font-[400] uppercase text-[#FFEFCF] md:text-xl">
              Nottingham OPENING <br /> TIMINGS
            </h6>
            <span className="font-aboreto text-center text-lg font-[400] uppercase text-[#FFEFCF] md:text-2xl">
              Monday – Friday <br /> 03:00 PM – 10:30 PM
              <br />
              Saturday - Sunday <br /> 10:00 AM - 10:30 PM
            </span>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            src={'/images/home/open/1.webp'}
            alt="bg image"
            width={3300}
            height={1900}
            className="h-[350px] w-full object-cover md:h-[800px]"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={'/images/home/open/2.webp'}
            alt="bg image"
            width={3300}
            height={1900}
            className="h-[350px] w-full object-cover md:h-[800px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Open;
