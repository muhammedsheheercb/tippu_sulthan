import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const JoinUs = () => {
  return (
    <section
      className="relative flex w-full items-center justify-center bg-cover bg-fixed bg-center px-4 py-24 md:py-36"
      style={{
        backgroundImage: "url('/images/about-us/3.webp')",
      }}
    >
      {/* Cream Overlay to match Menu theme */}
      {/* <div className="absolute inset-0 z-0 bg-[#000]/80" /> */}

      {/* Decorative elements matching Menu component */}
      <div className="z-5 absolute left-8 top-16 opacity-30 md:left-16">
        <Image
          src="/images/home/menu/l.webp"
          alt="decoration"
          width={2000}
          height={1000}
          className="w-14 md:w-20"
        />
      </div>
      <div className="z-5 absolute bottom-20 right-10 opacity-30 md:right-20">
        <Image
          src="/images/home/menu/c.webp"
          alt="decoration"
          width={2000}
          height={1000}
          className="w-12 md:w-16"
        />
      </div>
      <div className="z-5 absolute right-8 top-24 opacity-25 md:right-16">
        <Image
          src="/images/home/menu/r.webp"
          alt="decoration"
          width={2000}
          height={1000}
          className="w-10 md:w-14"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 bg-[#EEDEC0]/90 px-4 py-8 text-center backdrop:blur-2xl md:px-10 md:py-16">
        {/* Welcome text */}
        <span className="font-montserrat text-sm uppercase tracking-[2px] text-[#8D1416] md:text-base md:tracking-[4px]">
          Experience Royal Dining
        </span>

        <h2 className="font-aboreto text-4xl leading-tight text-[#6C4D2A] drop-shadow-sm md:text-6xl">
          Savor the Grandeur
          <br />
          at <span className="text-[#8D1416]">Tipu Sultan</span>
        </h2>

        {/* Decorative line */}
        {/* <Image
          src="/images/home/about/line.webp"
          width={197}
          height={192}
          alt="Decorative line"
          className="h-auto w-[250px] opacity-70 md:w-[350px]"
        /> */}

        <p className="font-aboreto max-w-2xl text-base leading-relaxed text-[#6C4D2A] drop-shadow-sm md:text-lg">
          Every corner of Tipu Sultan is crafted to echo grandeur — from
          handcrafted woodwork to plush seating and regal architecture. Discover
          the perfect harmony of authentic Pakistani flavors and majestic
          atmosphere, served with the warmth and hospitality that make every
          visit truly unforgettable.
        </p>

        {/* Stats section */}
        <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-[#EEDEC0]/85 px-8 py-6 shadow-lg backdrop-blur-sm md:flex-row md:gap-12">
          <div className="text-center">
            <div className="font-aboreto text-2xl font-bold text-[#8D1416] md:text-3xl">
              Est. 2015
            </div>
            <div className="font-montserrat text-sm uppercase tracking-wide text-[#6C4D2A]">
              British Curry Awards Finalist
            </div>
          </div>
          <div className="hidden h-12 w-px bg-[#6C4D2A]/30 md:block"></div>
          <div className="text-center">
            <div className="font-aboreto text-2xl font-bold text-[#8D1416] md:text-3xl">
              Majestic
            </div>
            <div className="font-montserrat text-sm uppercase tracking-wide text-[#6C4D2A]">
              Pakistani Cuisine
            </div>
          </div>
          <div className="hidden h-12 w-px bg-[#6C4D2A]/30 md:block"></div>
          <div className="text-center">
            <div className="font-aboreto text-2xl font-bold text-[#8D1416] md:text-3xl">
              Birmingham
            </div>
            <div className="font-montserrat text-sm uppercase tracking-wide text-[#6C4D2A]">
              43 Alcester Road
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <Link href="/contact">
            <Button className="font-montserrat group flex w-fit items-center justify-center gap-2 rounded-none bg-[#8D1416] !px-10 py-7 text-sm font-[500] uppercase text-[#EEDEC0] hover:cursor-pointer hover:bg-[#8d1416e0]">
              Contact Us
              <ChevronRight
                size={18}
                className="duration-300 ease-in-out group-hover:translate-x-1"
              />
            </Button>
          </Link>
        </div>

        {/* Contact info card */}
        <div className="mt-4 flex flex-col items-center gap-4 rounded-lg border border-[#6C4D2A]/20 bg-[#EEDEC0]/80 px-6 py-4 shadow-md backdrop-blur-sm md:flex-row md:gap-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8D1416]">
              <svg
                className="h-5 w-5 text-[#EEDEC0]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className="font-montserrat text-sm font-medium text-[#6C4D2A]">
                Open Daily
              </div>
              <div className="font-aboreto text-xs text-[#6C4D2A]/80">
                12:00 PM – 11:00 PM
              </div>
            </div>
          </div>

          <div className="hidden h-8 w-px bg-[#6C4D2A]/30 md:block"></div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8D1416]">
              <svg
                className="h-5 w-5 text-[#EEDEC0]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <div className="font-montserrat text-sm font-medium text-[#6C4D2A]">
                Reservations
              </div>
              <div className="font-aboreto text-xs text-[#6C4D2A]/80">
                +44 121 449 8538
              </div>
            </div>
          </div>

          <div className="hidden h-8 w-px bg-[#6C4D2A]/30 md:block"></div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8D1416]">
              <svg
                className="h-5 w-5 text-[#EEDEC0]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className="font-montserrat text-sm font-medium text-[#6C4D2A]">
                Award Winner
              </div>
              <div className="font-aboreto text-xs text-[#6C4D2A]/80">
                British Curry Awards
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
