'use client';
import React from 'react';
import { Search, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#ffefcf]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-[#8D1416]/5 via-transparent to-[#6C4D2A]/10"></div>
        <div className="absolute left-20 top-20 h-32 w-32 animate-pulse rounded-full border border-[#8D1416]/20"></div>
        <div className="absolute bottom-40 right-32 h-48 w-48 rounded-full border border-[#6C4D2A]/15"></div>
        <div className="absolute right-20 top-1/2 h-24 w-24 animate-pulse rounded-full border border-[#8D1416]/10"></div>
      </div>

      {/* Floating accent blurs */}
      <div className="absolute -left-16 top-1/3 h-40 w-40 rounded-full bg-[#8D1416] opacity-10 blur-3xl"></div>
      <div className="absolute -right-16 bottom-1/3 h-48 w-48 rounded-full bg-[#6C4D2A] opacity-15 blur-3xl"></div>

      {/* Subtle horizontal lines */}
      <div className="absolute left-0 top-1/4 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#8D1416]/20 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#6C4D2A]/15 to-transparent delay-500"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        {/* Welcome Badge */}
        <span className="font-montserrat mb-6 inline-block text-xs uppercase tracking-[2px] text-[#8D1416] sm:tracking-[4px]">
          Tipu Sultan
        </span>

        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="font-aboreto text-[8rem] font-[400] leading-none text-[#6C4D2A]/20 sm:text-[10rem] md:text-[12rem]">
            4
            <span className="relative inline-block text-[#8D1416]/30">
              0{/* Decorative plate circle behind the 0 */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#8D1416]/20 sm:h-32 sm:w-32 md:h-40 md:w-40"></div>
            </span>
            4
          </h1>
        </div>

        {/* Main Content */}
        <div className="mb-10">
          <h2 className="font-aboreto mb-6 text-2xl font-[400] leading-tight text-[#6C4D2A] sm:text-3xl md:text-4xl lg:text-5xl">
            Oops! This page seems to be
            <br />
            <span className="text-[#8D1416]">off the menu</span>
          </h2>

          <p className="font-aboreto mx-auto max-w-xl text-sm font-[400] leading-relaxed text-[#6C4D2A] sm:text-base md:text-lg lg:leading-loose">
            We couldn&apos;t find the page you&apos;re looking for. It might
            have been moved, deleted, or you may have mistyped the URL.
            Let&apos;s get you back to our majestic offerings.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link href="/" className="w-full sm:w-auto">
            <button className="font-montserrat group flex w-full transform items-center justify-center gap-2 rounded-none bg-[#8D1416] px-6 py-5 text-xs font-[500] uppercase text-[#EEDEC0] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#8d1416e0] sm:w-auto sm:px-8 sm:py-6 md:text-sm">
              <Home size={16} />
              Back to Home
              <ChevronRight size={14} className="sm:size-4" />
            </button>
          </Link>

          <Link href="/contact" className="w-full sm:w-auto">
            <button className="font-montserrat flex w-full items-center justify-center gap-2 rounded-none border-2 border-[#8D1416] bg-transparent px-6 py-5 text-xs font-[500] uppercase text-[#8D1416] transition-all duration-300 hover:bg-[#8D1416] hover:text-[#EEDEC0] sm:w-auto sm:px-8 sm:py-6 md:text-sm">
              <Search size={16} />
              Contact Us
            </button>
          </Link>
        </div>

        {/* Decorative Elements - Regal styled */}
        <div className="flex items-center justify-center gap-6 sm:gap-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#8D1416]/20 bg-[#EEDEC0]/60 shadow-sm sm:h-16 sm:w-16">
            <div className="h-7 w-7 rounded-full bg-[#8D1416]/30 sm:h-8 sm:w-8"></div>
          </div>
          <div className="hidden h-8 w-px bg-[#6C4D2A]/30 sm:block"></div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#8D1416]"></div>
          <div className="hidden h-8 w-px bg-[#6C4D2A]/30 sm:block"></div>
          <div className="h-10 w-10 rounded-full border border-[#6C4D2A]/20 bg-[#EEDEC0]/60 shadow-sm sm:h-12 sm:w-12"></div>
          <div className="hidden h-8 w-px bg-[#6C4D2A]/30 sm:block"></div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#6C4D2A] delay-300"></div>
          <div className="hidden h-8 w-px bg-[#6C4D2A]/30 sm:block"></div>
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#8D1416]/20 bg-[#EEDEC0]/60 shadow-sm sm:h-20 sm:w-20">
            <div className="h-8 w-8 rounded-full bg-[#6C4D2A]/25 sm:h-10 sm:w-10"></div>
          </div>
        </div>

        {/* Bottom Features Bar - matching Hero style */}
        <div className="mt-12 rounded-lg bg-[#EEDEC0]/95 px-4 py-4 shadow-lg backdrop-blur-sm sm:px-8 sm:py-6">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <div className="text-center">
              <div className="font-aboreto text-base font-bold text-[#8D1416] sm:text-lg">
                Award-Winning
              </div>
              <div className="font-montserrat text-xs uppercase text-[#6C4D2A]">
                British Curry Awards Finalist
              </div>
            </div>
            <div className="hidden h-8 w-px bg-[#6C4D2A]/30 sm:block"></div>
            <div className="text-center">
              <div className="font-aboreto text-base font-bold text-[#8D1416] sm:text-lg">
                Fine Dining
              </div>
              <div className="font-montserrat text-xs uppercase text-[#6C4D2A]">
                Pakistani Cuisine
              </div>
            </div>
            <div className="hidden h-8 w-px bg-[#6C4D2A]/30 sm:block"></div>
            <div className="text-center">
              <div className="font-aboreto text-base font-bold text-[#8D1416] sm:text-lg">
                Majestic Ambience
              </div>
              <div className="font-montserrat text-xs uppercase text-[#6C4D2A]">
                Like a Royal Palace
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute left-10 top-1/4 h-3 w-3 animate-bounce rounded-full bg-[#8D1416]/40 delay-1000"></div>
      <div className="absolute right-20 top-3/4 h-2 w-2 animate-bounce rounded-full bg-[#6C4D2A]/50 delay-500"></div>
      <div className="absolute left-1/4 top-1/2 h-2 w-2 animate-bounce rounded-full bg-[#8D1416]/30 delay-700"></div>
      <div className="absolute bottom-32 right-1/4 h-3 w-3 animate-bounce rounded-full bg-[#6C4D2A]/40 delay-300"></div>
    </div>
  );
};

export default NotFound;
