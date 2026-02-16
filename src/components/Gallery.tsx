import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import gallery images
import gallery1 from '@/assets/hero-image.jpg';
import gallery2 from '@/assets/traditional-platter.jpg';
import gallery3 from '@/assets/coffee.jpg';
import gallery4 from '@/assets/doro-wat1.jpg';
import gallery5 from '@/assets/beef-tibs-pinterest.jpg';
import gallery6 from '@/assets/ethiopian-platter-pinterest.jpg';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: gallery1,
      alt: 'Authentic Ethiopian feast spread',
      title: 'Traditional Feast',
      description: 'Experience the art of Ethiopian dining'
    },
    {
      src: gallery2,
      alt: 'Traditional Ethiopian platter with injera',
      title: 'Our Specialties',
      description: 'Authentic dishes prepared daily'
    },
    {
      src: gallery3,
      alt: 'Ethiopian coffee ceremony',
      title: 'Coffee Ceremony',
      description: 'Ancient tradition of hospitality'
    },
    {
      src: gallery4,
      alt: 'Doro Wat - Signature Ethiopian stew',
      title: 'Signature Dishes',
      description: 'Flavors that tell stories'
    },
    {
      src: gallery5,
      alt: 'Beef Tibs - Pan-fried Ethiopian specialty',
      title: 'Premium Selections',
      description: 'Finest ingredients, authentic preparation'
    },
    {
      src: gallery6,
      alt: 'Ethiopian mixed vegetarian platter',
      title: 'Vegetarian Delights',
      description: 'Plant-based Ethiopian treasures'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-accent font-semibold text-lg mb-2">Our Restaurant</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Visual Journey
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Discover the ambiance, warmth, and authenticity of H&T Ethiopian Restaurant through our curated gallery
          </p>
        </div>

        {/* Main Gallery */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Large featured image */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-xl shadow-lg">
            <div className="relative h-96 md:h-full">
              <img
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {images[activeIndex].title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {images[activeIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/40 text-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/40 text-white"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              {activeIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative overflow-hidden rounded-lg h-24 transition-all duration-300 group ${
                  activeIndex === index
                    ? 'ring-2 ring-primary shadow-lg'
                    : 'hover:shadow-md'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {activeIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Image counter and description */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm font-medium">
            Slide {activeIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
