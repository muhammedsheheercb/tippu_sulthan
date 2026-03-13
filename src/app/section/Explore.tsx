'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Explore: React.FC = () => {
  return (
    <section className="h-full w-full overflow-hidden">
      <div className="relative flex min-h-screen w-full items-center justify-center bg-[#ffefcf] px-4 md:px-8">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center py-5 md:ml-20 md:flex-row md:gap-20">
          {/* left-side section */}
          <div className="mt-10">
            <div className="-mt-[40px] ml-40 md:ml-60">
              {' '}
              {/* Move up */}
              <motion.div
                animate={{ x: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/images/explore/4.png"
                  alt="Golden royal cutlery placed above menu"
                  width={325}
                  height={330}
                  className="h-auto w-[160px] md:w-[170px]"
                />
              </motion.div>
            </div>

            <div className="-mt-20 ml-10">
              <motion.div
                animate={{ x: [0, 15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/images/explore/1.png"
                  alt="explore"
                  width={698}
                  height={591}
                  className="h-auto md:w-[450px]"
                />
              </motion.div>
            </div>
            <div className="-ml-5 -mt-72">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/images/explore/2.png"
                  alt="explore"
                  width={192}
                  height={190}
                  className="mt-28 h-auto w-[120px] md:-mt-20 md:w-[160px]"
                />
              </motion.div>
            </div>
            <div className="ml-20 md:ml-72">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/images/explore/3.png"
                  alt="explore"
                  width={213}
                  height={187}
                  className="h-auto w-[200px]"
                />
              </motion.div>
            </div>
          </div>

          {/* right-side section */}
          <div className="relative z-40 -mt-5 flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:gap-5 md:text-start">
            <h1 className="font-aboreto text-center text-4xl text-[#6C4D2A] md:text-start md:text-7xl">
              Explore <br />
              Kings’ MENU
            </h1>
            <p className="font-Aboreto text-xs font-light uppercase leading-5 text-[#6C4D2A] md:text-sm">
              Every corner of Tipu Sultan is crafted to echo
              <br /> grandeur — from handcrafted woodwork <br /> to plush
              seating and regal architecture.
              <br />
              Step inside and experience
            </p>

            <Link href={'/contact'}>
              <Button className="font-montserrat z-40 mt-4 flex flex-row items-center justify-center gap-1 rounded-none bg-[#8D1416] !px-6 py-6 text-xs font-[500] uppercase text-[#EEDEC0] hover:cursor-pointer hover:bg-[#8d1416e0] md:mt-1">
                contact us
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
