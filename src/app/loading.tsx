'use client';
import React from 'react';

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = 'Tipu Sultan' }) => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#ffefcf]">
      <div className="flex flex-col items-center gap-6">
        {/* Elegant ping animation — HOOF style, Tipu Sultan colors */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inline-flex h-full w-full animate-ping rounded-none bg-[#8D1416] opacity-20"></div>
          <div className="relative inline-flex h-8 w-8 rounded-none bg-[#8D1416]"></div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h2 className="font-aboreto text-2xl font-[400] uppercase tracking-[30%] text-[#6C4D2A]">
            {message}
          </h2>
          <p className="font-montserrat animate-pulse text-xs font-[400] uppercase tracking-[16%] text-[#6C4D2A]/60">
            Loading Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
