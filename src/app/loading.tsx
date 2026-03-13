'use client';
import React from 'react';

interface LoaderProps {
  message?: string;
  subMessage?: string;
}

const Loader: React.FC<LoaderProps> = ({
  message = 'Preparing your experience',
  subMessage = 'Please wait while we set everything up for you',
}) => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#ffefcf]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-[#8D1416]/5 via-transparent to-[#6C4D2A]/10"></div>
        <div className="absolute left-24 top-24 h-36 w-36 animate-pulse rounded-full border border-[#8D1416]/20"></div>
        <div className="absolute bottom-48 right-32 h-48 w-48 animate-pulse rounded-full border border-[#6C4D2A]/15"></div>
        <div className="absolute right-16 top-1/2 h-24 w-24 animate-pulse rounded-full border border-[#8D1416]/10"></div>
      </div>

      {/* Floating accent blurs */}
      <div className="absolute -left-16 top-1/4 h-40 w-40 rounded-full bg-[#8D1416] opacity-10 blur-3xl"></div>
      <div className="absolute -right-16 bottom-1/4 h-48 w-48 rounded-full bg-[#6C4D2A] opacity-15 blur-3xl"></div>

      {/* Subtle horizontal lines */}
      <div className="absolute left-0 top-1/4 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#8D1416]/20 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#6C4D2A]/15 to-transparent delay-500"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        {/* Welcome Badge */}
        <span className="font-montserrat mb-8 inline-block text-xs uppercase tracking-[2px] text-[#8D1416] sm:tracking-[4px]">
          Tipu Sultan
        </span>

        {/* Main Loader Animation */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            {/* Outer rotating ring */}
            <div className="h-28 w-28 animate-spin rounded-full border-4 border-transparent border-r-[#8D1416] border-t-[#8D1416]/70 sm:h-32 sm:w-32"></div>

            {/* Middle rotating ring */}
            <div
              className="absolute left-2 top-2 h-24 w-24 animate-spin rounded-full border-4 border-transparent border-b-[#6C4D2A]/50 border-l-[#6C4D2A] sm:h-28 sm:w-28"
              style={{
                animationDirection: 'reverse',
                animationDuration: '1.5s',
              }}
            ></div>

            {/* Inner pulsing circle */}
            <div className="h-18 w-18 absolute left-5 top-5 flex animate-pulse items-center justify-center rounded-full border border-[#8D1416]/20 bg-[#EEDEC0]/80 sm:left-6 sm:top-6 sm:h-20 sm:w-20">
              <div className="h-7 w-7 animate-bounce rounded-full bg-[#8D1416]/50 sm:h-8 sm:w-8"></div>
            </div>

            {/* Floating particles around loader */}
            <div className="absolute -top-4 left-1/2 h-2 w-2 animate-bounce rounded-full bg-[#8D1416]/60 delay-300"></div>
            <div className="absolute -left-4 top-1/2 h-1.5 w-1.5 animate-bounce rounded-full bg-[#6C4D2A]/70 delay-700"></div>
            <div className="absolute -bottom-4 right-1/2 h-2 w-2 animate-bounce rounded-full bg-[#8D1416]/50 delay-1000"></div>
            <div className="absolute -right-4 top-1/2 h-1.5 w-1.5 animate-bounce rounded-full bg-[#6C4D2A]/60 delay-500"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h1 className="font-aboreto mb-4 text-2xl font-[400] leading-tight text-[#6C4D2A] sm:text-3xl md:text-4xl">
            {message.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-[#8D1416]">
              {message.split(' ').slice(-1)}
            </span>
          </h1>
          <p className="font-aboreto mx-auto max-w-md text-sm font-[400] leading-relaxed text-[#6C4D2A] sm:max-w-lg sm:text-base md:text-lg">
            {subMessage}
          </p>
        </div>

        {/* Progress Dots */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#8D1416] sm:h-3 sm:w-3"></div>
          <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#8D1416]/70 delay-150 sm:h-3 sm:w-3"></div>
          <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#6C4D2A] delay-300 sm:h-3 sm:w-3"></div>
          <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#6C4D2A]/70 delay-500 sm:h-3 sm:w-3"></div>
          <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#8D1416]/80 delay-700 sm:h-3 sm:w-3"></div>
        </div>

        {/* Progress Bar */}
        <div className="mx-auto mb-12 max-w-xs sm:max-w-sm md:max-w-md">
          <div className="relative h-1 overflow-hidden rounded-full bg-[#6C4D2A]/20">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#8D1416] via-[#6C4D2A] to-[#8D1416]"
              style={{
                animation: 'slideProgress 2s ease-in-out infinite',
                width: '40%',
              }}
            ></div>
          </div>
        </div>

        {/* Cooking Process Simulation - Regal styled */}
        <div className="flex items-center justify-center gap-4 sm:gap-8">
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 animate-pulse items-center justify-center rounded-full border border-[#8D1416]/20 bg-[#EEDEC0]/60 shadow-sm sm:h-14 sm:w-14">
              <div className="h-5 w-5 rounded-full bg-[#8D1416]/40 sm:h-6 sm:w-6"></div>
            </div>
            <span className="font-montserrat text-[10px] uppercase tracking-wide text-[#6C4D2A] sm:text-xs">
              Ingredients
            </span>
          </div>

          <div className="hidden h-px w-6 bg-gradient-to-r from-transparent via-[#8D1416]/40 to-transparent sm:block sm:w-8"></div>

          <div className="text-center">
            <div className="mx-auto mb-2 flex h-14 w-14 animate-pulse items-center justify-center rounded-full border border-[#6C4D2A]/20 bg-[#EEDEC0]/60 shadow-sm delay-500 sm:h-16 sm:w-16">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-transparent border-t-[#8D1416]/60 sm:h-7 sm:w-7"></div>
            </div>
            <span className="font-montserrat text-[10px] uppercase tracking-wide text-[#6C4D2A] sm:text-xs">
              Cooking
            </span>
          </div>

          <div className="hidden h-px w-6 bg-gradient-to-r from-transparent via-[#6C4D2A]/40 to-transparent sm:block sm:w-8"></div>

          <div className="text-center">
            <div className="sm:h-18 sm:w-18 mx-auto mb-2 flex h-16 w-16 animate-pulse items-center justify-center rounded-full border border-[#8D1416]/20 bg-[#EEDEC0]/60 shadow-sm delay-1000">
              <div className="h-7 w-7 rounded-full bg-[#6C4D2A]/40 sm:h-8 sm:w-8"></div>
            </div>
            <span className="font-montserrat text-[10px] uppercase tracking-wide text-[#6C4D2A] sm:text-xs">
              Ready
            </span>
          </div>
        </div>

        {/* Bottom Features Bar - matching Hero style */}
        <div className="mt-12 rounded-lg bg-[#EEDEC0]/95 px-4 py-4 shadow-lg backdrop-blur-sm sm:px-8 sm:py-5">
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

      {/* Ambient Floating Elements */}
      <div className="top-1/5 absolute left-12 h-3 w-3 animate-bounce rounded-full bg-[#8D1416]/40"></div>
      <div className="absolute right-20 top-2/3 h-2 w-2 animate-bounce rounded-full bg-[#6C4D2A]/50 delay-1000"></div>
      <div className="absolute left-1/3 top-1/3 h-2 w-2 animate-bounce rounded-full bg-[#8D1416]/30 delay-500"></div>
      <div className="absolute bottom-1/4 right-1/4 h-3 w-3 animate-bounce rounded-full bg-[#6C4D2A]/40 delay-700"></div>

      <style jsx>{`
        @keyframes slideProgress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(150%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .h-18 {
          height: 4.5rem;
        }
        .w-18 {
          width: 4.5rem;
        }
      `}</style>
    </div>
  );
};

export default Loader;
