'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Kingdom: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Location data for each image
  const locations = {
    image1: 'https://maps.app.goo.gl/9wDsagkxvtumF1wM7', // Birmingham
    image3: 'https://maps.app.goo.gl/GmyWdyFpKj16JFPv8', // Leicester
    image4: 'https://maps.app.goo.gl/9wDsagkxvtumF1wM7', // Birmingham
    image5: 'https://maps.app.goo.gl/tD87pQDSPhGWUJS39', // Nottingham
  };

  return (
    <section className="relative h-full w-full bg-[#ffefcf] px-4 py-10 md:h-screen">
      {/* big screen */}
      <div className="absolute left-[38rem] top-[26rem] z-40 hidden md:block">
        <Image
          src={'/images/home/kingdom/dot.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="w-6"
        />
      </div>
      <div className="absolute left-[36rem] top-[35rem] z-40 hidden md:block">
        <Image
          src={'/images/home/kingdom/dot.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="w-6"
        />
      </div>
      <div className="absolute right-[36rem] top-[26rem] z-40 hidden md:block">
        <Image
          src={'/images/home/kingdom/dot.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="w-6"
        />
      </div>
      <div className="absolute right-[33rem] top-[35rem] z-40 hidden md:block">
        <Image
          src={'/images/home/kingdom/dot.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="w-6"
        />
      </div>
      <motion.div
        className="absolute left-72 top-60 z-30 hidden md:block xl:left-80"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Link href={locations.image1} target="_blank" rel="noopener noreferrer">
          <Image
            src={'/images/home/kingdom/1.webp'}
            alt="bg image"
            width={2000}
            height={1000}
            className="h-[160px] w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-72 z-30 hidden md:block"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link href={locations.image4} target="_blank" rel="noopener noreferrer">
          <Image
            src={'/images/home/kingdom/4.webp'}
            alt="bg image"
            width={2000}
            height={1000}
            className="h-[160px] w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </motion.div>
      <motion.div
        className="-translate-1/2 absolute left-1/2 top-[28rem] z-20 hidden md:block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Image
          src={'/images/home/kingdom/2.webp'}
          alt="bg image"
          width={2000}
          height={1000}
          className="h-full w-full cursor-pointer object-cover"
        />
      </motion.div>
      <motion.div
        className="-translate-1/2 absolute left-1/2 top-[8rem] z-20 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-aboreto text-center text-4xl font-[400] uppercase text-[#6C4D2A] md:text-7xl">
            Kingdoms <br /> of Flavour
          </h1>
        </div>
      </motion.div>
      <motion.div
        className="top-66 absolute right-80 z-20 hidden md:block"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Link href={locations.image3} target="_blank" rel="noopener noreferrer">
          <Image
            src={'/images/home/kingdom/3.webp'}
            alt="bg image"
            width={2000}
            height={1000}
            className="h-[160px] w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-[20rem] z-20 hidden md:block xl:right-[35rem]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Link href={locations.image5} target="_blank" rel="noopener noreferrer">
          <Image
            src={'/images/home/kingdom/5.webp'}
            alt="bg image"
            width={2000}
            height={1000}
            className="h-[160px] w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </motion.div>

      {/* big screen end */}

      {/* mobile */}
      <motion.div
        className="flex flex-col gap-6 md:hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={fadeInUp}
        >
          <h1 className="font-aboreto text-center text-4xl font-[400] uppercase text-[#6C4D2A] md:text-7xl">
            Kingdoms <br /> of Flavour
          </h1>
        </motion.div>

        <motion.div className="grid grid-cols-2 gap-4" variants={fadeInUp}>
          <Link
            href={locations.image1}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={'/images/home/kingdom/1.webp'}
              alt="bg image"
              width={2000}
              height={1000}
              className="h-[150px] w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105 md:h-full"
            />
          </Link>
          <Link
            href={locations.image3}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={'/images/home/kingdom/3.webp'}
              alt="bg image"
              width={2000}
              height={1000}
              className="h-[150px] w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105 md:h-full"
            />
          </Link>
          <Link
            href={locations.image4}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={'/images/home/kingdom/4.webp'}
              alt="bg image"
              width={2000}
              height={1000}
              className="h-[150px] w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105 md:h-full"
            />
          </Link>
          <Link
            href={locations.image5}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={'/images/home/kingdom/5.webp'}
              alt="bg image"
              width={2000}
              height={1000}
              className="h-[150px] w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105 md:h-full"
            />
          </Link>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Image
            src={'/images/home/kingdom/2.webp'}
            alt="bg image"
            width={2000}
            height={1000}
            className="h-[300px] w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105 md:h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Kingdom;
