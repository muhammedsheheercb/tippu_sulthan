import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const buildPaymentUrl = ({
  locale,
  franchiseSlug,
  page,
}: {
  locale?: string;
  franchiseSlug?: string;
  page?: 'status' | 'checkout' | 'menu' | 'payment';
}) => {
  const localePrefix = locale ? `/${locale}` : '';
  const franchisePath = franchiseSlug ? `${franchiseSlug}` : '';
  const baseUrl = `${localePrefix}/${page}/${franchisePath}/`;

  return baseUrl;
};
