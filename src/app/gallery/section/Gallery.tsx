import Image from 'next/image';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      src: '/images/gallery/1.webp',
      alt: 'Tipu Sultan Restaurant interior view 1',
    },
    {
      src: '/images/gallery/2.webp',
      alt: 'Tipu Sultan Restaurant interior view 2',
    },
    {
      src: '/images/gallery/3.webp',
      alt: 'Tipu Sultan Restaurant interior view 3',
    },
    {
      src: '/images/gallery/4.webp',
      alt: 'Tipu Sultan Restaurant interior view 4',
    },
    {
      src: '/images/gallery/5.webp',
      alt: 'Tipu Sultan Restaurant interior view 5',
    },
    {
      src: '/images/gallery/6.webp',
      alt: 'Tipu Sultan Restaurant interior view 6',
    },
    {
      src: '/images/gallery/7.webp',
      alt: 'Tipu Sultan Restaurant interior view 7',
    },
    {
      src: '/images/gallery/8.webp',
      alt: 'Tipu Sultan Restaurant interior view 8',
    },
    {
      src: '/images/gallery/9.webp',
      alt: 'Tipu Sultan Restaurant interior view 9',
    },
    {
      src: '/images/gallery/10.webp',
      alt: 'Tipu Sultan Restaurant interior view 10',
    },
    {
      src: '/images/gallery/11.webp',
      alt: 'Tipu Sultan Restaurant interior view 11',
    },
    {
      src: '/images/gallery/12.webp',
      alt: 'Tipu Sultan Restaurant interior view 12',
    },
  ];

  return (
    <section
      id="gallery"
      className="relative w-full bg-[#ffefcf] py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="font-montserrat text-xs uppercase tracking-[1.5px] text-[#8D1416] sm:text-sm sm:tracking-[2px] md:text-base md:tracking-[4px]">
            Our Gallery
          </span>
          <h2 className="font-aboreto mt-4 text-2xl font-[400] text-[#6C4D2A] sm:text-3xl md:text-4xl lg:text-5xl">
            A Glimpse of
            <br />
            <span className="text-[#8D1416]">Royal Elegance</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#8D1416] to-transparent"></div>
          <p className="font-aboreto mx-auto mt-6 max-w-2xl text-sm font-[400] leading-relaxed text-[#6C4D2A] sm:text-base md:text-lg lg:leading-loose">
            Step into our majestic world where every corner tells a story of
            grandeur, tradition, and culinary excellence.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#6C4D2A]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="mb-4 text-center">
                    <div className="font-montserrat text-xs font-[500] uppercase tracking-wider text-[#EEDEC0] sm:text-sm">
                      Gallery
                    </div>
                    <div className="font-aboreto text-sm font-[400] text-[#EEDEC0] sm:text-base">
                      View {index + 1}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-[#8D1416] opacity-0 blur-sm transition-all duration-500 group-hover:opacity-30 sm:h-5 sm:w-5"></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative elements */}
        <div className="relative mt-16 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-[#8D1416] sm:w-12"></div>
            <div className="h-2 w-2 rotate-45 bg-[#8D1416]"></div>
            <div className="h-px w-8 bg-[#8D1416] sm:w-12"></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute right-4 top-1/4 h-32 w-32 rounded-full bg-[#8D1416] opacity-5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-4 h-24 w-24 rounded-full bg-[#6C4D2A] opacity-10 blur-2xl"></div>
    </section>
  );
};

export default Gallery;
