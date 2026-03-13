'use client';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Welcome: React.FC = () => {
  return (
    <section className="h-full w-full overflow-hidden">
      <div
        className="relative flex h-auto w-full items-center justify-center bg-cover bg-center px-8 py-20 md:h-[950px] md:py-0 xl:h-[850px] xl:px-20"
        style={{ backgroundImage: "url('/images/welcome/bg.png')" }}
      >
        {/* Desktop View */}
        <div className="hidden w-full max-w-[1440px] flex-row items-center justify-center gap-10 md:flex xl:justify-between">
          {/* Left Side */}
          <div className="mt-32 flex flex-col gap-6 text-center md:mt-1">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="font-aboreto -ml-2 text-6xl leading-[100px] text-white xl:text-8xl"
            >
              <h1 className="-mt-[270px] ml-14">DINE LIKE</h1>
              <h1 className="ml-96">ROYALTY</h1>
            </motion.div>

            <p className="font-aboreto text-xl font-light uppercase text-white xl:text-left">
              Where Flavour <br />
              Meets Grandeur
            </p>
          </div>

          {/* Right Side */}
          <div className="mt-52 max-w-md text-[#ffff]">
            <p className="font-aboreto max-w-[500px] text-sm uppercase leading-6">
              Tipu Sultan is a unique destination. A refined restaurant on the
              ground floor, complemented by an elegant entertainment and
              banqueting suite on the first floor with private spaces. Tipu
              Sultan is the perfect setting for couples, families, and friends.
              Whether for business gatherings or relaxed moments together, our
              beautiful restaurant is an oasis to unwind, indulge, and live like
              a Sultan.
            </p>

            {/* <Link href={'/our-story'}>
              <Button className="mt-6 rounded-none bg-[#8D1416] px-6 py-6 text-xs uppercase tracking-widest text-white">
                our story
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link> */}
            <Link href={'/our-story'}>
              <Button className="font-montserrat mt-4 flex flex-row items-center justify-center gap-1 rounded-none bg-[#8D1416] !px-6 py-6 text-xs font-[500] uppercase text-[#EEDEC0] hover:cursor-pointer hover:bg-[#8d1416e0]">
                our story
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex w-full flex-col items-center text-center md:hidden">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="font-aboreto text-4xl text-white"
          >
            <h1 className="-mt-5 mr-5">DINE LIKE</h1>
            <h1 className="ml-10">ROYALTY</h1>
          </motion.div>

          <p className="font-aboreto text-[14px] uppercase text-white">
            Where Flavour Meets Grandeur
          </p>

          <div className="text-white">
            <p className="font-aboreto mt-52 max-w-[90%] text-start text-[12px]">
              Tipu Sultan is a unique destination. A refined restaurant on the
              ground floor, complemented by an elegant entertainment and
              banqueting suite on the first floor with private spaces. Tipu
              Sultan is the perfect setting for couples, families, and friends.
              Whether for business gatherings or relaxed moments together, our
              beautiful restaurant is an oasis to unwind, indulge, and live like
              a Sultan.
            </p>
            {/* <Button className="mt-6 w-full rounded-none bg-[#8D1416] px-6 py-6 text-xs uppercase tracking-widest text-white">
              our story
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button> */}
            <Link href={'/our-story'}>
              <Button className="font-montserrat mt-4 flex flex-row items-center justify-center gap-1 rounded-none bg-[#8D1416] !px-6 py-6 text-xs font-[500] uppercase text-[#EEDEC0] hover:cursor-pointer hover:bg-[#8d1416e0]">
                our story
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
