'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}

export default function EventBooking() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone number
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setErrorMessage('Phone number must be exactly 10 digits');
      setShowErrorModal(true);
      return;
    }

    // Validate event date
    const selectedDate = new Date(formData.eventDate);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < tomorrow) {
      setErrorMessage('Event date must be from tomorrow onwards');
      setShowErrorModal(true);
      return;
    }

    // Validate guest count
    if (parseInt(formData.guestCount) < 1) {
      setErrorMessage('Number of guests must be at least 1');
      setShowErrorModal(true);
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Sending data:', formData);

      const response = await fetch('/api/events', {
        // ✅ UPDATED HERE
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);

      const result = await response.json();
      console.log('Response data:', result);

      if (result.success) {
        setShowSuccessModal(true);
      } else {
        setErrorMessage(result.message || 'Something went wrong');
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error('Catch error:', error);
      setErrorMessage('Network error. Please try again later.');
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get tomorrow's date in YYYY-MM-DD format
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guestCount: '',
      message: '',
    });
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
    setErrorMessage('');
  };

  return (
    <>
      <section className="relative w-full bg-[#F7EFD8] px-6 py-16 md:px-12 lg:px-24">
        <div className="absolute -left-4 top-4 md:left-0 md:top-72">
          <Image
            src={'/images/home/about/left.webp'}
            alt="bg image"
            width={2000}
            height={1000}
            className="w-20 rotate-90 md:w-32"
          />
        </div>
        <div className="absolute -right-4 bottom-0 md:bottom-0 md:right-40">
          <Image
            src={'/images/home/about/right.webp'}
            alt="bg image"
            width={2000}
            height={1000}
            className="w-20 rotate-180 md:w-32"
          />
        </div>
        <div className="mx-auto max-w-4xl">
          <h2 className="font-aboreto mb-8 text-center text-4xl text-[#6C4D2A] md:text-6xl">
            Book Your Event
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="font-montserrat mb-2 block text-sm font-[500] uppercase text-[#6C4D2A]"
              >
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full rounded-none border-2 border-[#6C4D2A] bg-[#EEDEC0] px-4 py-3 text-[#000000] outline-none transition-all focus:border-[#8D1416]"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="font-montserrat mb-2 block text-sm font-[500] uppercase text-[#6C4D2A]"
              >
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full rounded-none border-2 border-[#6C4D2A] bg-[#EEDEC0] px-4 py-3 text-[#000000] outline-none transition-all focus:border-[#8D1416]"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="font-montserrat mb-2 block text-sm font-[500] uppercase text-[#6C4D2A]"
              >
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                placeholder="Enter 10 digit phone number"
                title="Phone number must be exactly 10 digits"
                className="w-full rounded-none border-2 border-[#6C4D2A] bg-[#EEDEC0] px-4 py-3 text-[#000000] outline-none transition-all focus:border-[#8D1416]"
              />
            </div>

            {/* Event Type */}
            <div>
              <label
                htmlFor="eventType"
                className="font-montserrat mb-2 block text-sm font-[500] uppercase text-[#6C4D2A]"
              >
                Event Type *
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full rounded-none border-2 border-[#6C4D2A] bg-[#EEDEC0] px-4 py-3 text-[#000000] outline-none transition-all focus:border-[#8D1416]"
              >
                <option value="">Select Event Type</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday</option>
                <option value="corporate">Corporate Event</option>
                <option value="anniversary">Anniversary</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label
                htmlFor="eventDate"
                className="font-montserrat mb-2 block text-sm font-[500] uppercase text-[#6C4D2A]"
              >
                Event Date *
              </label>
              <input
                id="eventDate"
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                min={getTomorrowDate()}
                title="Select your event date"
                className="w-full rounded-none border-2 border-[#6C4D2A] bg-[#EEDEC0] px-4 py-3 text-[#000000] outline-none transition-all focus:border-[#8D1416]"
              />
            </div>

            {/* Guest Count */}
            <div>
              <label
                htmlFor="guestCount"
                className="font-montserrat mb-2 block text-sm font-[500] uppercase text-[#6C4D2A]"
              >
                Number of Guests *
              </label>
              <input
                id="guestCount"
                type="number"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                required
                min={1}
                placeholder="Enter number of guests"
                className="w-full rounded-none border-2 border-[#6C4D2A] bg-[#EEDEC0] px-4 py-3 text-[#000000] outline-none transition-all focus:border-[#8D1416]"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="font-montserrat mb-2 block text-sm font-[500] uppercase text-[#6C4D2A]"
              >
                Special Requirements (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your special requirements, dietary restrictions, or any other details..."
                className="w-full rounded-none border-2 border-[#6C4D2A] bg-[#EEDEC0] px-4 py-3 text-[#000000] outline-none transition-all focus:border-[#8D1416]"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-4 flex justify-center md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-montserrat bg-[#8D1416] px-10 py-3 text-sm uppercase tracking-wide text-white transition-all hover:bg-[#6C4D2A] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Custom Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative w-full max-w-md border-4 border-[#6C4D2A] bg-[#EEDEC0] p-8 shadow-2xl">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8D1416]">
                  <svg
                    className="h-8 w-8 text-[#EEDEC0]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-aboreto mb-4 text-3xl uppercase text-[#6C4D2A]">
                Success!
              </h3>
              <p className="font-montserrat mb-6 text-[#000000]">
                Your event booking has been submitted successfully. We will
                contact you shortly to confirm the details.
              </p>
              <button
                onClick={closeSuccessModal}
                className="font-montserrat bg-[#8D1416] px-8 py-3 text-sm uppercase tracking-wide text-[#EEDEC0] transition-all hover:bg-[#6C4D2A]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative w-full max-w-md border-4 border-[#8D1416] bg-[#EEDEC0] p-8 shadow-2xl">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8D1416]">
                  <svg
                    className="h-8 w-8 text-[#EEDEC0]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-aboreto mb-4 text-3xl uppercase text-[#8D1416]">
                Error!
              </h3>
              <p className="font-montserrat mb-6 text-[#000000]">
                {errorMessage}
              </p>
              <button
                onClick={closeErrorModal}
                className="font-montserrat bg-[#8D1416] px-8 py-3 text-sm uppercase tracking-wide text-[#EEDEC0] transition-all hover:bg-[#6C4D2A]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
