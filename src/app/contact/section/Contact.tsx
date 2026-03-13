'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Check, AlertCircle, Phone, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';

const FormValidation = z.object({
  first: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters.' })
    .max(50, { message: 'First name must not exceed 50 characters.' })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        'First name can only contain letters, spaces, hyphens, and apostrophes.',
    })
    .refine(name => name.trim().length > 0, {
      message: 'First name cannot be empty or just spaces.',
    }),

  last: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' })
    .max(50, { message: 'Last name must not exceed 50 characters.' })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        'Last name can only contain letters, spaces, hyphens, and apostrophes.',
    })
    .refine(name => name.trim().length > 0, {
      message: 'Last name cannot be empty or just spaces.',
    }),

  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Please enter a valid email address.' })
    .max(100, { message: 'Email must not exceed 100 characters.' })
    .refine(
      email => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      },
      {
        message: 'Please enter a valid email format (e.g., user@example.com).',
      },
    ),

  phone: z
    .string()
    .min(1, { message: 'Phone number is required.' })
    .regex(/^\+?[\d\s()-]+$/, {
      message:
        'Phone number can only contain digits, spaces, parentheses, hyphens, and plus sign.',
    })
    .refine(
      phone => {
        const digitsOnly = phone.replace(/\D/g, '');
        return digitsOnly.length >= 10 && digitsOnly.length <= 15;
      },
      {
        message: 'Phone number must contain between 10-15 digits.',
      },
    )
    .refine(
      phone => {
        if (phone.startsWith('+')) {
          const digitsOnly = phone.replace(/\D/g, '');
          return digitsOnly.length >= 11;
        }
        return true;
      },
      {
        message:
          'International phone numbers must include country code and be valid.',
      },
    ),

  message: z.string(),
});

type FormData = z.infer<typeof FormValidation>;

const Contact: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'error'>('success');

  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: { first: '', last: '', phone: '', email: '', message: '' },
  });

  const contactMutation = useMutation({
    mutationFn: async (values: FormData) =>
      await axios.post('/api/contact', values),
    onSuccess: () => {
      setModalType('success');
      setShowModal(true);
      form.reset();
    },
    onError: () => {
      setModalType('error');
      setShowModal(true);
    },
  });

  const onSubmit = (data: FormData) => contactMutation.mutate(data);

  return (
    <section className="relative h-full w-full bg-[#ffefcf] py-8 md:py-20">
      {/* Background decorative images */}
      <div className="absolute left-4 top-20 opacity-25 md:left-16">
        <Image
          src="/images/home/menu/l.webp"
          alt="decoration"
          width={2000}
          height={1000}
          className="w-12 md:w-16"
        />
      </div>
      <div className="absolute right-4 top-1/3 opacity-20 md:right-12">
        <Image
          src="/images/home/menu/r.webp"
          alt="decoration"
          width={2000}
          height={1000}
          className="w-8 md:w-12"
        />
      </div>

      <div className="flex h-full w-full flex-col items-center justify-center gap-12 px-4 md:px-20">
        {/* Header */}
        <div className="pb-6 text-center">
          <span className="font-montserrat text-sm uppercase tracking-[2px] text-[#8D1416] md:text-base md:tracking-[4px]">
            Get In Touch
          </span>
          <h1 className="font-aboreto text-2xl font-[400] text-[#6C4D2A] md:text-4xl">
            Contact
            <span className="text-[#8D1416]"> Tipu Sultan</span>
          </h1>
        </div>

        <div className="flex w-full max-w-7xl flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left: Contact Info - All Locations */}
          <div className="flex w-full flex-col gap-6 lg:w-1/2">
            {/* <div className="space-y-6">
              <h2 className="font-aboreto text-xl font-[400] text-[#6C4D2A] md:text-2xl">
                Visit Our Majestic Restaurants
              </h2>
              <p className="font-aboreto max-w-[500px] text-sm font-[400] leading-relaxed text-[#6C4D2A] md:text-base">
                Every corner of Tipu Sultan is crafted to echo grandeur — from
                handcrafted woodwork to plush seating and regal architecture.
                Experience the finest Pakistani cuisine in a royal dining
                atmosphere across our three locations.
              </p>
            </div> */}

            {/* Birmingham Location */}
            <div className="space-y-4 rounded-lg border-2 border-[#8D1416]/30 bg-[#EEDEC0] p-6">
              <h3 className="font-aboreto text-xl font-[400] uppercase text-[#8D1416]">
                Birmingham
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#8D1416]" />
                  <Link
                    href="https://share.google/V7ZgxRSALkaKMDuEf"
                    target="_blank"
                    className="font-aboreto text-base text-[#6C4D2A] transition-colors hover:text-[#8D1416]"
                  >
                    43 Alcester Road, Birmingham B13 8AA
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-[#8D1416]" />
                  <Link
                    href="tel:+441214498539"
                    className="font-aboreto text-base text-[#6C4D2A] transition-colors hover:text-[#8D1416]"
                  >
                    +44 121 449 8539
                  </Link>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-[#8D1416]" />
                  <p className="font-aboreto text-base text-[#6C4D2A]">
                    Monday - Sunday: 12:00 PM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Nottingham Location */}
            <div className="space-y-4 rounded-lg border-2 border-[#8D1416]/30 bg-[#EEDEC0] p-6">
              <h3 className="font-aboreto text-xl font-[400] uppercase text-[#8D1416]">
                Nottingham
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#8D1416]" />
                  <Link
                    href="https://share.google/5KvIrX0U594Y7MlLa"
                    target="_blank"
                    className="font-aboreto text-base text-[#6C4D2A] transition-colors hover:text-[#8D1416]"
                  >
                    482 Mansfield Rd, Sherwood, Nottingham NG5 2EL
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-[#8D1416]" />
                  <Link
                    href="tel:+441156483326"
                    className="font-aboreto text-base text-[#6C4D2A] transition-colors hover:text-[#8D1416]"
                  >
                    +44 115 648 3326
                  </Link>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-[#8D1416]" />
                  <div className="font-aboreto text-base text-[#6C4D2A]">
                    <p>Monday - Friday: 3:00 PM - 10:30 PM</p>
                    <p>Saturday - Sunday: 10:00 AM - 10:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leicester Location */}
            <div className="space-y-3 rounded-lg border-2 border-[#8D1416]/30 bg-[#EEDEC0] p-4">
              <h3 className="font-aboreto text-lg font-[400] uppercase text-[#8D1416]">
                Leicester
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-[#8D1416]" />
                  <Link
                    href="https://share.google/YHd7VXkiaZCGZTiJQ"
                    target="_blank"
                    className="font-aboreto text-sm text-[#6C4D2A] transition-colors hover:text-[#8D1416]"
                  >
                    18 The Parade, Oadby, Leicester LE2 5BF
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0 text-[#8D1416]" />
                  <Link
                    href="tel:+441162715553"
                    className="font-aboreto text-sm text-[#6C4D2A] transition-colors hover:text-[#8D1416]"
                  >
                    +44 116 271 5553
                  </Link>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-4 w-4 flex-shrink-0 text-[#8D1416]" />
                  <p className="font-aboreto text-sm text-[#6C4D2A]">
                    Monday - Sunday: 11:30 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            {/* <div className="mt-2">
              <Link href="/table-booking">
                <Button className="font-montserrat flex w-full flex-row items-center justify-center gap-2 rounded-none bg-[#8D1416] !px-8 py-6 text-xs font-[500] uppercase text-[#EEDEC0] hover:cursor-pointer hover:bg-[#8d1416e0]">
                  Reserve Your Table
                  <ChevronRight size={16} />
                </Button>
              </Link>
            </div> */}
          </div>

          {/* Right: Contact Form */}
          <div className="flex w-full flex-col lg:w-1/2">
            <div className="rounded-lg border border-[#6C4D2A]/20 bg-[#EEDEC0] p-6 shadow-lg md:p-8">
              <h2 className="font-aboreto mb-6 text-xl font-[400] text-[#6C4D2A] md:text-2xl">
                Send Us a Message
              </h2>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="flex flex-col gap-6 sm:flex-row">
                    <FormField
                      control={form.control}
                      name="first"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              placeholder="First Name"
                              {...field}
                              className="font-aboreto h-14 border-[#6C4D2A]/30 bg-[#ffefcf] text-base text-[#6C4D2A] placeholder:text-[#6C4D2A]/60 focus:border-[#8D1416]"
                            />
                          </FormControl>
                          <FormMessage className="text-[#8D1416]" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="last"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              placeholder="Last Name"
                              {...field}
                              className="font-aboreto h-14 border-[#6C4D2A]/30 bg-[#ffefcf] text-base text-[#6C4D2A] placeholder:text-[#6C4D2A]/60 focus:border-[#8D1416]"
                            />
                          </FormControl>
                          <FormMessage className="text-[#8D1416]" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Email Address"
                            type="email"
                            {...field}
                            className="font-aboreto h-14 border-[#6C4D2A]/30 bg-[#ffefcf] text-base text-[#6C4D2A] placeholder:text-[#6C4D2A]/60 focus:border-[#8D1416]"
                          />
                        </FormControl>
                        <FormMessage className="text-[#8D1416]" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Phone Number"
                            type="tel"
                            {...field}
                            className="font-aboreto h-14 border-[#6C4D2A]/30 bg-[#ffefcf] text-base text-[#6C4D2A] placeholder:text-[#6C4D2A]/60 focus:border-[#8D1416]"
                          />
                        </FormControl>
                        <FormMessage className="text-[#8D1416]" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Your Message"
                            rows={8}
                            {...field}
                            className="font-aboreto border-[#6C4D2A]/30 bg-[#ffefcf] text-base text-[#6C4D2A] placeholder:text-[#6C4D2A]/60 focus:border-[#8D1416]"
                          />
                        </FormControl>
                        <FormMessage className="text-[#8D1416]" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="font-montserrat h-14 w-full rounded-none bg-[#8D1416] text-sm font-[500] uppercase text-[#EEDEC0] hover:bg-[#8d1416e0] disabled:opacity-50"
                  >
                    {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full max-w-7xl">
          <h2 className="font-aboreto mb-6 text-center text-xl font-[400] text-[#6C4D2A] md:text-2xl">
            Find Our Birmingham Locations
          </h2>
          <div className="overflow-hidden rounded-lg border border-[#6C4D2A]/20 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2311.2471944643535!2d-1.891751323470082!3d52.45090857204309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc0d10636bbd%3A0x90b9a54814263a0!2sTipu%20Sultan%20Majestic%20Dining!5e1!3m2!1sen!2sin!4v1754390274753!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[400px] w-full md:h-[500px]"
            />
          </div>
        </div>
        <div className="w-full max-w-7xl">
          <h2 className="font-aboreto mb-6 text-center text-xl font-[400] text-[#6C4D2A] md:text-2xl">
            Find Our Nottingham Locations
          </h2>
          <div className="overflow-hidden rounded-lg border border-[#6C4D2A]/20 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.2958164332686!2d-1.1476779000000001!3d52.9784775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c19c91ad6d71%3A0x6164f4c3513a9472!2sTipu%20Sultan%20Nottingham%20%7C%20Indian%20%26%20Pakistani%20Cuisine!5e1!3m2!1sen!2sin!4v1762934233325!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[400px] w-full md:h-[500px]"
            />
          </div>
        </div>
        <div className="w-full max-w-7xl">
          <h2 className="font-aboreto mb-6 text-center text-xl font-[400] text-[#6C4D2A] md:text-2xl">
            Find Our Leicester Locations
          </h2>

          <div className="overflow-hidden rounded-lg border border-[#6C4D2A]/20 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.7281169553717!2d-1.0833918999999999!3d52.598371500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877641d9f503859%3A0x427d098255061e65!2sTipu%20Sultan%20Restaurant!5e1!3m2!1sen!2sin!4v1762934291201!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[400px] w-full md:h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Success/Error Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="max-w-md rounded-lg bg-[#EEDEC0] p-6 shadow-xl">
            <div className="mb-4 flex items-center gap-3">
              {modalType === 'success' ? (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                  <Check className="h-5 w-5 text-white" />
                </div>
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
                  <AlertCircle className="h-5 w-5 text-white" />
                </div>
              )}
              <h3 className="font-aboreto text-lg font-bold text-[#6C4D2A]">
                {modalType === 'success' ? 'Message Sent!' : 'Error'}
              </h3>
            </div>
            <p className="font-aboreto mb-4 text-[#6C4D2A]">
              {modalType === 'success'
                ? 'Thank you for contacting Tipu Sultan. We will get back to you soon!'
                : 'Sorry, there was an error sending your message. Please try again.'}
            </p>
            <Button
              onClick={() => setShowModal(false)}
              className="font-montserrat w-full rounded-none bg-[#8D1416] py-3 text-xs font-[500] uppercase text-[#EEDEC0] hover:bg-[#8d1416e0]"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
