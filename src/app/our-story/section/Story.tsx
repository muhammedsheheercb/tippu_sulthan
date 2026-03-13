import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#ffefcf] py-8 md:py-20">
      <div className="absolute right-10 top-1/3 md:right-20">
        <Image
          src="/images/home/menu/c.webp"
          alt="decoration"
          width={2000}
          height={1000}
          className="w-10 opacity-50 md:w-14"
        />
      </div>

      <div className="flex h-full w-full flex-col items-center justify-center gap-6 px-4 md:flex-row md:gap-8 md:px-20">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <Image
              src="/images/about-us/2.webp"
              width={600}
              height={700}
              alt="Tipu Sultan interior showcasing luxury and tradition"
              className="h-[300px] w-full rounded-lg object-cover shadow-2xl md:h-[600px]"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#6C4D2A]/20 to-transparent" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/2 md:items-start md:justify-start md:gap-6">
          <span className="font-montserrat text-sm uppercase tracking-[2px] text-[#8D1416] md:text-base md:tracking-[4px]">
            Our Legacy
          </span>

          <h2 className="font-aboreto text-center text-2xl font-[400] text-[#6C4D2A] md:text-start md:text-4xl">
            The Story of
            <br />
            <span className="text-[#8D1416]">Tipu Sultan</span>
          </h2>

          <div className="space-y-4">
            <p className="font-aboreto max-w-[500px] text-center text-sm font-[400] text-[#6C4D2A] md:text-start md:text-base">
              Every corner of Tipu Sultan is crafted to echo grandeur — from
              handcrafted woodwork to plush seating and regal architecture.
              Created with the vision of bringing royal Pakistani dining to the
              heart of Birmingham, we reflect the opulence, tradition, and
              warmth of a true Mughal-inspired experience.
            </p>

            <p className="font-aboreto max-w-[500px] text-center text-sm font-[400] text-[#6C4D2A] md:text-start md:text-base">
              Our award-winning chefs celebrate authentic recipes from across
              Pakistan, presenting beloved classics in a grand, majestic
              environment. Whether you&apos;re joining us for a family meal or a
              wedding banquet, Tipu Sultan ensures an unforgettable experience.
            </p>
          </div>

          {/* Heritage Stats - redesigned to match theme */}
          <div className="flex w-full max-w-[500px] flex-col gap-4 rounded-lg border border-[#6C4D2A]/20 bg-[#EEDEC0] p-6 shadow-lg md:flex-row">
            <div className="flex-1 text-center md:text-left">
              <div className="font-aboreto text-2xl font-bold text-[#8D1416]">
                Est. 2015
              </div>
              <div className="font-montserrat text-xs uppercase tracking-wide text-[#6C4D2A]">
                British Curry Awards Finalist
              </div>
            </div>
            <div className="hidden w-px bg-[#6C4D2A]/30 md:block"></div>
            <div className="flex-1 text-center md:text-left">
              <div className="font-aboreto text-2xl font-bold text-[#8D1416]">
                100%
              </div>
              <div className="font-montserrat text-xs uppercase tracking-wide text-[#6C4D2A]">
                Authentic Ingredients
              </div>
            </div>
            <div className="hidden w-px bg-[#6C4D2A]/30 md:block"></div>
            <div className="flex-1 text-center md:text-left">
              <div className="font-aboreto text-2xl font-bold text-[#8D1416]">
                Countless
              </div>
              <div className="font-montserrat text-xs uppercase tracking-wide text-[#6C4D2A]">
                Celebrations Hosted
              </div>
            </div>
          </div>

          {/* Action Buttons - matching Menu component style */}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href="/our-story">
              <Button className="font-montserrat flex flex-row items-center justify-center gap-2 rounded-none bg-[#8D1416] !px-6 py-6 text-xs font-[500] uppercase text-[#EEDEC0] hover:cursor-pointer hover:bg-[#8d1416e0]">
                Discover Our Story
                <ChevronRight size={16} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="font-montserrat rounded-none border-2 border-[#8D1416] bg-transparent !px-6 py-6 text-xs font-[500] uppercase text-[#8D1416] transition-all duration-300 hover:bg-[#8D1416] hover:text-[#EEDEC0]">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Cultural Elements - redesigned with matching colors */}
          <div className="mt-6 flex items-center gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#8D1416]">
                <svg
                  className="h-6 w-6 text-[#EEDEC0]"
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
              <span className="font-montserrat text-xs uppercase tracking-wide text-[#6C4D2A]">
                Crafted with Love
              </span>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#8D1416]">
                <svg
                  className="h-6 w-6 text-[#EEDEC0]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-montserrat text-xs uppercase tracking-wide text-[#6C4D2A]">
                Royal Recipes
              </span>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#8D1416]">
                <svg
                  className="h-6 w-6 text-[#EEDEC0]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-montserrat text-xs uppercase tracking-wide text-[#6C4D2A]">
                Majestic Ambience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
