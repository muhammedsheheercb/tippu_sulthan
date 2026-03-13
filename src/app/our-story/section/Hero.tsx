import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative mt-8 min-h-screen w-full overflow-hidden bg-[#ffefcf]"
    >
      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 sm:py-20 md:px-20 md:py-24">
        <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center gap-8 sm:gap-10 md:flex-row md:gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-5 md:w-1/2 md:items-start md:justify-start md:gap-6">
            <span className="font-montserrat text-xs uppercase tracking-[1.5px] text-[#8D1416] sm:text-sm sm:tracking-[2px] md:text-base md:tracking-[4px]">
              Welcome to Tipu Sultan
            </span>

            <h1 className="font-aboreto text-center text-2xl font-[400] leading-tight text-[#6C4D2A] sm:text-3xl md:text-start md:text-4xl lg:text-5xl xl:text-6xl">
              Majestic Fine Dining
              <br />
              <span className="text-[#8D1416]">Pakistani Cuisine</span>
            </h1>

            {/* Decorative line - responsive */}

            <p className="font-aboreto max-w-[400px] text-center text-sm font-[400] leading-relaxed text-[#6C4D2A] sm:max-w-[450px] sm:text-base md:max-w-[500px] md:text-start md:text-lg lg:leading-loose">
              Every corner of Tipu Sultan is crafted to echo grandeur — from
              handcrafted woodwork to plush seating and regal architecture.
              Located at 43 Alcester Rd, Birmingham, we celebrate
              Pakistan&apos;s culinary artistry in a majestic setting that
              blends tradition with luxury.
            </p>

            <div className="mt-4 flex w-full flex-col gap-3 pb-2 sm:mt-6 sm:flex-row sm:gap-4 md:w-auto md:pb-8">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="font-montserrat w-full rounded-none border-2 border-[#8D1416] bg-transparent !px-6 py-5 text-xs font-[500] uppercase text-[#8D1416] transition-all duration-300 hover:bg-[#8D1416] hover:text-[#EEDEC0] sm:w-auto sm:!px-8 sm:py-6 md:text-sm">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative mx-auto max-w-md md:max-w-none">
              <div className="relative overflow-hidden rounded-lg shadow-2xl md:rounded-none">
                <Image
                  src="/images/about-us/1.webp"
                  alt="Tipu Sultan Restaurant interior"
                  width={600}
                  height={700}
                  className="h-[280px] w-full object-cover sm:h-[320px] md:h-[500px] lg:h-[600px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6C4D2A]/30 via-transparent to-transparent" />
              </div>

              {/* Floating accent elements - responsive */}
              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-[#8D1416] opacity-20 blur-xl sm:-bottom-6 sm:-left-6 sm:h-20 sm:w-20 md:h-24 md:w-24"></div>
              <div className="absolute -right-3 -top-3 h-12 w-12 rounded-full bg-[#6C4D2A] opacity-30 blur-lg sm:-right-4 sm:-top-4 sm:h-14 sm:w-14 md:h-16 md:w-16"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - mobile responsive */}
      <div className="absolute bottom-4 left-1/2 z-20 w-full max-w-xs -translate-x-1/2 transform px-4 sm:bottom-6 sm:max-w-sm md:bottom-8 md:w-auto md:max-w-none md:px-0">
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-[#EEDEC0]/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:flex-row sm:gap-6 sm:px-6 sm:py-4 md:gap-8 md:px-8">
          <div className="text-center">
            <div className="font-aboreto text-base font-bold text-[#8D1416] sm:text-lg md:text-xl">
              Award-Winning
            </div>
            <div className="font-montserrat text-xs uppercase text-[#6C4D2A]">
              British Curry Awards Finalist
            </div>
          </div>
          <div className="hidden h-8 w-px bg-[#6C4D2A]/30 sm:block"></div>
          <div className="text-center">
            <div className="font-aboreto text-base font-bold text-[#8D1416] sm:text-lg md:text-xl">
              Fine Dining
            </div>
            <div className="font-montserrat text-xs uppercase text-[#6C4D2A]">
              Pakistani Cuisine
            </div>
          </div>
          <div className="hidden h-8 w-px bg-[#6C4D2A]/30 sm:block"></div>
          <div className="text-center">
            <div className="font-aboreto text-base font-bold text-[#8D1416] sm:text-lg md:text-xl">
              Majestic Ambience
            </div>
            <div className="font-montserrat text-xs uppercase text-[#6C4D2A]">
              Like a Royal Palace
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
