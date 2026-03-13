import EmblaCarousel from '@/app/section/special/MenuCarousel';
import type { EmblaOptionsType } from 'embla-carousel';
import { ModelService } from './modelService';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = async ({}) => {
  const response = await ModelService.getModelData();
  const restaurantID = process.env.NEXT_PUBLIC_RESTAURANT_ID;
  const filteredResponse = response?.rows.filter(
    item => item.meta.restaurantID === restaurantID,
  );
  return (
    <section
      className="relative z-10 flex h-full w-full justify-center overflow-hidden py-12 md:py-28"
      style={{
        backgroundImage: "url('/images/home/special/bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute left-32 top-20 hidden md:block">
        <h1 className="font-aboreto text-center text-4xl font-[400] uppercase tracking-[-7%] text-[#FFDBA4] md:text-start md:text-6xl">
          Signature <br />
          Dishes
        </h1>
      </div>
      <div className="absolute right-32 top-20 z-40 hidden md:block">
        <Link href={'/menu'}>
          <Button className="font-montserrat z-40 flex flex-row items-center justify-center gap-1 rounded-none bg-[#EEDEC0] !px-6 py-6 text-xs font-[500] uppercase text-[#8D1416] hover:cursor-pointer hover:bg-[#dfcdab]">
            View Menu <ChevronRight />
          </Button>
        </Link>
      </div>
      <div className="absolute left-0 top-0 z-10 h-full w-full opacity-10" />
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4">
        <div className="relative z-40 flex flex-col items-center justify-center gap-4 md:hidden">
          <h1 className="font-aboreto text-center text-4xl font-[400] uppercase tracking-[-7%] text-[#FFDBA4] md:text-start md:text-6xl">
            Signature <br />
            Dishes
          </h1>
          <Link href={'/menu'}>
            <Button className="font-montserrat flex flex-row items-center justify-center gap-1 rounded-none bg-[#EEDEC0] !px-6 py-6 text-xs font-[500] uppercase text-[#8D1416] hover:cursor-pointer hover:bg-[#dfcdab]">
              View Menu <ChevronRight />
            </Button>
          </Link>
        </div>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          {filteredResponse && (
            <EmblaCarousel slides={filteredResponse} options={OPTIONS} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Special;
