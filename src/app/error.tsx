'use client';
import React from 'react';
import {
  AlertTriangle,
  RefreshCw,
  Home,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
  error?: Error;
  reset?: () => void;
  title?: string;
  message?: string;
}

const Error: React.FC<ErrorProps> = ({
  error,
  reset,
  title = 'Something went wrong',
  message = "We're experiencing some technical difficulties. Our team at Tipu Sultan is working to resolve this issue.",
}) => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#ffefcf]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-[#8D1416]/5 via-transparent to-[#6C4D2A]/10"></div>
        <div className="absolute left-16 top-32 h-40 w-40 animate-pulse rounded-full border border-[#8D1416]/20"></div>
        <div className="absolute bottom-32 right-20 h-56 w-56 rounded-full border border-[#6C4D2A]/15"></div>
        <div className="absolute right-32 top-2/3 h-28 w-28 animate-pulse rounded-full border border-[#8D1416]/10"></div>
      </div>

      {/* Floating accent elements */}
      <div className="absolute -left-10 top-1/4 h-32 w-32 rounded-full bg-[#8D1416] opacity-10 blur-3xl"></div>
      <div className="absolute -right-10 bottom-1/4 h-40 w-40 rounded-full bg-[#6C4D2A] opacity-15 blur-3xl"></div>

      {/* Subtle Effect Lines */}
      <div className="absolute left-0 top-1/4 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#8D1416]/20 to-transparent"></div>
      <div className="absolute bottom-1/3 left-0 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#6C4D2A]/15 to-transparent delay-500"></div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        {/* Welcome Badge */}
        <span className="font-montserrat mb-6 inline-block text-xs uppercase tracking-[2px] text-[#8D1416] sm:tracking-[4px]">
          Tipu Sultan
        </span>

        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-[#8D1416]/30 bg-gradient-to-br from-[#EEDEC0] to-[#ffefcf] shadow-lg sm:h-32 sm:w-32">
              <AlertTriangle size={56} className="text-[#8D1416]" />
            </div>
            <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#8D1416] shadow-md">
              <span className="text-sm font-bold text-[#EEDEC0]">!</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-10">
          <h1 className="font-aboreto mb-6 text-3xl font-[400] leading-tight text-[#6C4D2A] sm:text-4xl md:text-5xl">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-[#8D1416]">{title.split(' ').slice(-1)}</span>
          </h1>

          <p className="font-aboreto mx-auto mb-6 max-w-xl text-sm font-[400] leading-relaxed text-[#6C4D2A] sm:text-base md:text-lg lg:leading-loose">
            {message}
          </p>

          {/* Error Details */}
          {error && (
            <div className="mx-auto mb-8 max-w-xl overflow-hidden rounded-lg border border-[#8D1416]/20 bg-[#EEDEC0]/60 p-4 shadow-sm backdrop-blur-sm">
              <p className="overflow-x-auto text-left font-mono text-xs text-[#6C4D2A] sm:text-sm">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          {reset && (
            <button
              onClick={reset}
              className="font-montserrat group flex w-full transform items-center justify-center gap-2 rounded-none bg-[#8D1416] px-6 py-5 text-xs font-[500] uppercase text-[#EEDEC0] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#8d1416e0] sm:w-auto sm:px-8 sm:py-6 md:text-sm"
            >
              <RefreshCw
                size={16}
                className="transition-transform duration-500 group-hover:rotate-180"
              />
              Try Again
            </button>
          )}

          <Link href="/" className="w-full sm:w-auto">
            <button className="font-montserrat flex w-full items-center justify-center gap-2 rounded-none border-2 border-[#8D1416] bg-transparent px-6 py-5 text-xs font-[500] uppercase text-[#8D1416] transition-all duration-300 hover:bg-[#8D1416] hover:text-[#EEDEC0] sm:px-8 sm:py-6 md:text-sm">
              <Home size={16} />
              Back to Home
            </button>
          </Link>

          <button className="font-montserrat flex w-full items-center justify-center gap-2 rounded-none border-2 border-[#6C4D2A] bg-transparent px-6 py-5 text-xs font-[500] uppercase text-[#6C4D2A] transition-all duration-300 hover:bg-[#6C4D2A] hover:text-[#EEDEC0] sm:w-auto sm:px-8 sm:py-6 md:text-sm">
            <Mail size={16} />
            Report Issue
          </button>
        </div>

        {/* Status Indicators */}
        <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 animate-pulse rounded-full bg-[#8D1416]"></div>
            <span className="font-montserrat text-xs uppercase tracking-wide text-[#6C4D2A]">
              Service Interrupted
            </span>
          </div>
          <div className="hidden h-4 w-px bg-[#6C4D2A]/30 sm:block"></div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 animate-pulse rounded-full bg-[#6C4D2A] delay-300"></div>
            <span className="font-montserrat text-xs uppercase tracking-wide text-[#6C4D2A]">
              Recovery in Progress
            </span>
          </div>
        </div>

        {/* Restaurant Support Card - matching Hero features section style */}
        <div className="rounded-lg bg-[#EEDEC0]/95 px-4 py-6 shadow-lg backdrop-blur-sm sm:px-8 sm:py-8">
          <h3 className="font-aboreto mb-2 text-xl font-bold text-[#8D1416] sm:text-2xl">
            Need immediate assistance?
          </h3>
          <p className="font-montserrat mb-6 text-xs uppercase text-[#6C4D2A]">
            Contact Tipu Sultan directly for reservations or inquiries
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
            <div className="flex items-center justify-center gap-2">
              <Phone size={16} className="text-[#8D1416]" />
              <span className="font-montserrat text-sm text-[#6C4D2A]">
                +44 121 xxx xxxx
              </span>
            </div>
            <div className="hidden h-6 w-px bg-[#6C4D2A]/30 sm:block"></div>
            <div className="flex items-center justify-center gap-2">
              <Mail size={16} className="text-[#8D1416]" />
              <span className="font-montserrat text-sm text-[#6C4D2A]">
                info@tipusultan.co.uk
              </span>
            </div>
            <div className="hidden h-6 w-px bg-[#6C4D2A]/30 sm:block"></div>
            <div className="flex items-center justify-center gap-2">
              <MapPin size={16} className="text-[#8D1416]" />
              <span className="font-montserrat text-sm text-[#6C4D2A]">
                43 Alcester Rd, Birmingham
              </span>
            </div>
          </div>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute left-20 top-20 h-4 w-4 animate-bounce rounded-full bg-[#8D1416]/40"></div>
        <div className="absolute bottom-40 right-16 h-2 w-2 animate-bounce rounded-full bg-[#6C4D2A]/50 delay-700"></div>
        <div className="absolute right-10 top-1/3 h-3 w-3 animate-bounce rounded-full bg-[#8D1416]/30 delay-1000"></div>
      </div>
    </div>
  );
};

export default Error;
