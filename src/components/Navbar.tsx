'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = ({
  position = 'static',
}: {
  position?: 'static' | 'fixed' | 'absolute';
}) => {
  useEffect(() => {
    const d = localStorage.getItem('positiond');
    if (d !== null) {
      setPositiond(d);
    }
  }, []);

  const [positiond, setPositiond] = useState<string>('');

  useEffect(() => {
    if (positiond) {
      localStorage.setItem('positiond', positiond);
    }
  }, [positiond]);

  const pathname = usePathname();

  return (
    // <nav
    //   className={cn(
    //     `${position} top-0 z-50 h-[10vh] w-full pt-4 transition-all duration-300 md:pt-2`,
    //     pathname === '/menu' && 'top-0 h-[12vh] bg-[#ffefcf] pt-0 md:pt-0',
    //   )}
    // >
    <nav
      className={cn(
        `${position} top-0 z-50 h-[15vh] w-full bg-black/40 pt-4 backdrop-blur-sm transition-all duration-300 md:h-[11vh] md:pt-0`,
        pathname.startsWith('/menu') &&
          'top-0 h-[12vh] bg-[#ffefcf] pt-0 md:pt-0',
        pathname !== '/' && 'bg-[#ffefcf]',
        // isScrolled && "h-[15vh] bg-[#013827] backdrop-blur-sm md:h-[11vh]",
      )}
    >
      {/*big screen */}
      <div className="hidden px-4 lg:block lg:px-20">
        <div className="flex flex-row items-center justify-center gap-16 px-8 py-4">
          <div className="flex flex-row items-center justify-center gap-16">
            <Link
              href={'/'}
              className={`font-aboreto text-base font-[400] capitalize tracking-[2px] hover:underline ${
                pathname === '/' ? 'text-[#FFDBA4]' : 'text-[#8D1416]'
              }`}
            >
              Home
            </Link>

            <Link
              href={'/our-story'}
              className={`font-aboreto text-base font-[400] capitalize tracking-[2px] hover:underline ${
                pathname === '/' ? 'text-[#FFDBA4]' : 'text-[#8D1416]'
              }`}
            >
              Our Story
            </Link>
            <Link href={'/'}>
              <Image
                src={'/images/logo.webp'}
                width={171}
                height={74}
                alt="logo"
                className="w-24"
              />
            </Link>
            <Link
              href={'/gallery'}
              className={`font-aboreto text-base font-[400] capitalize tracking-[2px] hover:underline ${
                pathname === '/' ? 'text-[#FFDBA4]' : 'text-[#8D1416]'
              }`}
            >
              Gallery
            </Link>

            <Link
              href={'/contact'}
              className={`font-aboreto text-base font-[400] capitalize tracking-[2px] hover:underline ${
                pathname === '/' ? 'text-[#FFDBA4]' : 'text-[#8D1416]'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block px-4 lg:hidden lg:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={'/'}>
              <Image
                src={'/images/logo.webp'}
                width={281}
                height={74}
                alt="logo"
                className="w-16"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="text-primary hover:text-primary flex px-1 py-1 hover:bg-transparent"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{' '}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="equalizer-icon rotate">
      <div
        className={`bar ${pathname === '/' ? 'bg-[#FFDBA4]' : 'bg-[#8D1416]'}`}
      ></div>
      <div
        className={`bar ${pathname === '/' ? 'bg-[#FFDBA4]' : 'bg-[#8D1416]'}`}
      ></div>
      <div
        className={`bar ${pathname === '/' ? 'bg-[#FFDBA4]' : 'bg-[#8D1416]'}`}
      ></div>
    </div>
  );
};
