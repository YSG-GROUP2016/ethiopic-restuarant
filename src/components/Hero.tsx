import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent("Hello, I'd like to make a reservation for [X people] on [Date & Time].");
    window.open(`https://wa.me/2348012345678?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Traditional Ethiopian food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            {/* Traditional Welcome */}
            <div className="space-y-2">
              <p className="text-spice-orange font-medium text-lg">
                እንኳን ደህና መጡ - Welcome!
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                H&T Ethiopian
                <span className="block text-primary">Restaurant</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-spice-orange mx-auto lg:mx-0 rounded-full" />
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience the rich flavors and ancient traditions of Ethiopia. 
                From our traditional coffee ceremony to our signature injera and stews.
              </p>
              <p className="text-lg text-muted-foreground">
                Join us for an authentic culinary journey through the heart of East Africa.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={handleWhatsAppReservation}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-warm transition-all duration-300 hover:shadow-elegant hover:-translate-y-1"
              >
                Reserve Your Table
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <Link to="/menu">View Our Menu</Link>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <h3 className="font-semibold text-lg text-foreground">Traditional</h3>
                <p className="text-sm text-muted-foreground">Authentic recipes passed down through generations</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="font-semibold text-lg text-foreground">Fresh</h3>
                <p className="text-sm text-muted-foreground">Daily prepared with the finest ingredients</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="font-semibold text-lg text-foreground">Cultural</h3>
                <p className="text-sm text-muted-foreground">Immersive dining experience with coffee ceremony</p>
              </div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-spice-orange/20 rounded-full blur-3xl animate-float" />
            <div className="relative z-10 bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-border">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Opening Hours</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span className="font-medium">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span className="font-medium">11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">12:00 PM - 9:00 PM</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-center text-muted-foreground">
                    Coffee ceremony every Sunday at 3:00 PM
                  </p>
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