import Image from 'next/image';
import Link from 'next/link';
import { Icons } from './Icon';

const Footer = () => {
  // Prevent hydration mismatch

  return (
    <footer className="relative h-full w-full bg-[#ffefcf] px-4 pb-4 pt-8">
      <div className="flex flex-col gap-4 md:gap-5">
        <div className="flex items-start justify-start md:items-center md:justify-center">
          <Image
            src={'/images/logo.webp'}
            width={281}
            height={74}
            alt="logo"
            className="w-20 md:w-28"
          />
        </div>
        {/* mobile */}
        <div className="flex flex-col gap-4 md:hidden md:flex-row md:gap-28">
          <div className="flex flex-col items-start justify-start gap-2 md:items-center md:justify-center">
            <h3 className="font-aboreto text-lg font-[400] uppercase text-[#6C4D2A]">
              BIRMINGHAM
            </h3>
            <div className="flex flex-col items-start justify-start gap-1 md:items-center md:justify-center">
              <Link
                className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A]"
                href={'https://share.google/V7ZgxRSALkaKMDuEf'}
                target="_blank"
              >
                TIPU SULTAN BIRMINGHAM <br /> 43 Alcester Road, Birmingham B13
                8AA
              </Link>
              <Link
                className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A]"
                href={'tel:+441214498539'}
              >
                Phone: +44 121 449 8539
              </Link>
              <Link
                className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A]"
                href={'mailto:birmingham@tipu-sultan.com'}
              >
                Email: birmingham@tipu-sultan.com
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 md:items-center md:justify-center">
            <h3 className="font-aboreto text-lg font-[400] uppercase text-[#6C4D2A]">
              Nottingham
            </h3>
            <div className="flex flex-col items-start justify-start gap-1 md:items-center md:justify-center">
              <Link
                className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A]"
                href={'https://share.google/5KvIrX0U594Y7MlLa'}
                target="_blank"
              >
                482 Mansfield Rd, Sherwood, <br /> Nottingham NG5 2EL, United
                Kingdom
              </Link>
              <Link
                className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A]"
                href={'tel:+441156483326'}
              >
                Phone: +44 115 648 3326
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 md:items-center md:justify-center">
            <h3 className="font-aboreto text-lg font-[400] uppercase text-[#6C4D2A]">
              Leicester
            </h3>
            <div className="flex flex-col items-start justify-start gap-1 md:items-center md:justify-center">
              <Link
                className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A]"
                href={'https://share.google/YHd7VXkiaZCGZTiJQ'}
                target="_blank"
              >
                18 The Parade, Oadby, <br /> Leicester LE2 5BF, United Kingdom
              </Link>
              <Link
                className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A]"
                href={'tel:+441162715553'}
              >
                Phone: +44 116 271 5553
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 md:items-center md:justify-center">
            <Link
              className="font-aboreto text-sm font-[400] tracking-[1px] text-[#6C4D2A] md:tracking-[3px]"
              href={'/'}
            >
              Home
            </Link>

            <Link
              className="font-aboreto text-sm font-[400] tracking-[1px] text-[#6C4D2A] md:tracking-[3px]"
              href={'/our-story'}
            >
              Our Story
            </Link>

            <Link
              className="font-aboreto text-sm font-[400] tracking-[1px] text-[#6C4D2A] md:tracking-[3px]"
              href={'/contact'}
            >
              Contact
            </Link>
          </div>
          {/* <div className="flex flex-col items-end justify-end gap-2 md:items-center md:justify-center">
            <h3 className="font-aboreto text-lg font-[400] uppercase text-[#6C4D2A]">
              LEICESTER
            </h3>
            <div className="flex flex-col items-end justify-end gap-1 md:items-center md:justify-center">
              <Link
                href={'#'}
                className="font-aboreto text-end text-base font-[400] uppercase text-[#6C4D2A] md:text-center"
                target="_blank"
              >
                TIPU SULTAN LEICESTER 12–16, The Parade, Oadby, Leicester LE2
                5BF
              </Link>
              <Link
                className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A]"
                href={'tel:01162715553'}
              >
                Phone: 0116 271 5553
              </Link>
              <Link
                className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A]"
                href={'mailto:leicester@tipu-sultan.com'}
              >
                Email: leicester@tipu-sultan.com
              </Link>
            </div>
          </div> */}
        </div>
        {/* big screen */}
        <div className="hidden flex-col items-center justify-center gap-4 px-8 md:flex md:flex-row md:gap-8 2xl:gap-40 2xl:px-32">
          <div className="flex flex-col items-start justify-start gap-2 md:items-center md:justify-center">
            <h3 className="font-aboreto text-lg font-[400] uppercase text-[#6C4D2A]">
              BIRMINGHAM
            </h3>
            <div className="flex flex-col items-start justify-start gap-1 md:items-center md:justify-center">
              <Link
                className="font-aboreto text-center text-base font-[400] uppercase text-[#6C4D2A]"
                href={'https://share.google/V7ZgxRSALkaKMDuEf'}
                target="_blank"
              >
                TIPU SULTAN BIRMINGHAM <br /> 43 Alcester Road, Birmingham B13
                8AA
              </Link>
              <Link
                className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A]"
                href={'tel:+441214498539'}
              >
                Phone: +44 121 449 8539
              </Link>
              <Link
                className="font-aboreto text-center text-base font-[400] uppercase text-[#6C4D2A]"
                href={'mailto:birmingham@tipu-sultan.com'}
              >
                Email: birmingham@tipu-sultan.com
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 md:items-center md:justify-center">
            <h3 className="font-aboreto text-lg font-[400] uppercase text-[#6C4D2A]">
              Nottingham
            </h3>
            <div className="flex flex-col items-start justify-start gap-1 md:items-center md:justify-center">
              <Link
                className="font-aboreto text-center text-base font-[400] uppercase text-[#6C4D2A]"
                href={'https://share.google/5KvIrX0U594Y7MlLa'}
                target="_blank"
              >
                482 Mansfield Rd, Sherwood, <br /> Nottingham NG5 2EL, United
                Kingdom
              </Link>
              <Link
                className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A]"
                href={'tel:+441156483326'}
              >
                Phone: +44 115 648 3326
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 md:items-center md:justify-center">
            <h3 className="font-aboreto text-lg font-[400] uppercase text-[#6C4D2A]">
              Leicester
            </h3>
            <div className="flex flex-col items-start justify-start gap-1 md:items-center md:justify-center">
              <Link
                className="font-aboreto text-center text-base font-[400] uppercase text-[#6C4D2A]"
                href={'https://share.google/YHd7VXkiaZCGZTiJQ'}
                target="_blank"
              >
                18 The Parade, Oadby, <br /> Leicester LE2 5BF, United Kingdom
              </Link>
              <Link
                className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A]"
                href={'tel:+441162715553'}
              >
                Phone: +44 116 271 5553
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 md:items-center md:justify-center">
            <Link
              className="font-aboreto text-start text-sm font-[400] tracking-[1px] text-[#6C4D2A] md:text-center md:tracking-[3px]"
              href={'/'}
            >
              Home
            </Link>

            <Link
              className="font-aboreto text-start text-sm font-[400] tracking-[1px] text-[#6C4D2A] md:text-center md:tracking-[3px]"
              href={'/our-story'}
            >
              Our Story
            </Link>

            <Link
              className="font-aboreto text-start text-sm font-[400] tracking-[1px] text-[#6C4D2A] md:text-center md:tracking-[3px]"
              href={'/contact'}
            >
              Contact
            </Link>
          </div>
          {/* <div className="flex flex-col items-end justify-end gap-2 md:items-center md:justify-center">
            <h3 className="font-aboreto text-lg font-[400] uppercase text-[#6C4D2A]">
              LEICESTER
            </h3>
            <div className="flex flex-col items-end justify-end gap-1 md:items-center md:justify-center">
              <Link
                href={'#'}
                className="font-aboreto text-end text-base font-[400] uppercase text-[#6C4D2A] md:text-center"
                target="_blank"
              >
                TIPU SULTAN LEICESTER <br /> 12–16, The Parade, Oadby, Leicester
                LE2 5BF
              </Link>
              <Link
                className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A]"
                href={'tel:01162715553'}
              >
                Phone: 0116 271 5553
              </Link>
              <Link
                className="font-aboreto text-base font-[400] uppercase text-[#6C4D2A]"
                href={'mailto:leicester@tipu-sultan.com'}
              >
                Email: leicester@tipu-sultan.com
              </Link>
            </div>
          </div> */}
        </div>
        {/*end */}
        <div className="flex flex-row items-center justify-end gap-4 md:items-center md:justify-center">
          {/* <Link href={'#'} target="_blank">
            <Icons.instagram className="text-[#6C4D2A]" />
          </Link> */}
          <Link
            href={'https://www.facebook.com/TheTipuSultanGroup'}
            target="_blank"
          >
            <Icons.facebook className="text-[#6C4D2A]" />
          </Link>
          <Link href={'https://share.google/V7ZgxRSALkaKMDuEf'} target="_blank">
            <Icons.google className="text-[#6C4D2A]" />
          </Link>
          <Link href={'https://x.com/tipusultangroup'} target="_blank">
            <Icons.twitter className="text-[#6C4D2A]" />
          </Link>
        </div>
        <div>
          <h1 className="font-aboreto text-center text-5xl font-[400] uppercase text-[#6C4D2A] md:text-[10rem] 2xl:text-[13rem]">
            Tipu Sultan
          </h1>
        </div>
      </div>

      {/* mobile screen */}
      <div className="flex flex-col items-center justify-center gap-2 px-2 pt-4 md:flex-row md:justify-between md:px-12">
        <Link
          href={'https://foodo.ai'}
          target="_blank"
          className="font-aboreto text-sm font-[400] text-[#6C4D2A]"
        >
          Powered by Foodo
        </Link>
        <span className="font-aboreto text-sm font-[400] text-[#6C4D2A]">
          © 2025 TIPU SULTAN. All Rights Reserved.{' '}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
