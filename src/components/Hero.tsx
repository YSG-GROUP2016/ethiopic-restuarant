import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent("Hello, I'd like to make a reservation for [X people] on [Date & Time].");
    window.open(`https://wa.me/2348170339432?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with sophisticated overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Traditional Ethiopian food spread at H&T Ethiopian Restaurant showing authentic dishes and injera bread"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up max-w-2xl">
            {/* Traditional Welcome */}
            <div className="space-y-4">
              <p className="text-accent font-semibold text-lg drop-shadow-lg tracking-wide">
                እንኳን ደህና መጡ — Welcome!
              </p>
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg text-balance">
                  Experience Authentic
                  <span className="block text-gradient mt-2">Ethiopian Cuisine</span>
                </h1>
              </div>
              <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-secondary rounded-full drop-shadow-lg" />
            </div>

            {/* Description */}
            <div className="space-y-6 max-w-xl">
              <p className="text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-md">
                Discover centuries-old traditions, handcrafted recipes, and authentic flavors that transport you to the highlands of Ethiopia. Every dish tells a story.
              </p>
              <ul className="space-y-2 text-white/90 drop-shadow-md">
                <li className="flex items-center space-x-3">
                  <span className="text-accent font-bold text-xl">✦</span>
                  <span>Traditional coffee ceremony experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-accent font-bold text-xl">✦</span>
                  <span>Authentic recipes passed down through generations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-accent font-bold text-xl">✦</span>
                  <span>Fresh, premium ingredients imported from Ethiopia</span>
                </li>
              </ul>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={handleWhatsAppReservation}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Reserve Your Table
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-white text-white hover:bg-white/10 hover:border-accent px-8 py-3 text-base font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <Link to="/menu">View Menu</Link>
              </Button>
            </div>
          </div>

          {/* Premium Info Card */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl blur opacity-20 animate-float" />
              <div className="relative bg-white/95 dark:bg-card/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 dark:border-white/10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">Open Today</h3>
                    <p className="text-sm text-accent font-semibold">11:00 AM - 10:00 PM</p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between py-2 border-b border-border/30">
                      <span className="text-muted-foreground">Mon - Thu</span>
                      <span className="font-semibold text-foreground">11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border/30">
                      <span className="text-muted-foreground">Fri - Sat</span>
                      <span className="font-semibold text-foreground">11:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-semibold text-foreground">12:00 PM - 9:00 PM</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      <span className="text-primary font-semibold">☕</span> Coffee ceremony every Sunday at 3:00 PM
                    </p>
                  </div>
                  <Button
                    size="sm"
                    onClick={handleWhatsAppReservation}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold mt-2"
                  >
                    Make a Reservation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
