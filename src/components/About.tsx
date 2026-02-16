import { CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: 'Authenticity',
      description: 'Every recipe honors Ethiopian traditions passed down through generations, using authentic spices and time-honored cooking methods.'
    },
    {
      title: 'Quality',
      description: 'We source premium ingredients, many imported directly from Ethiopia, ensuring the highest standards in every dish.'
    },
    {
      title: 'Hospitality',
      description: 'Ethiopian culture centers on genuine hospitality and community. We treat every guest like family and create memorable experiences.'
    },
    {
      title: 'Culture',
      description: 'We celebrate Ethiopian heritage through food, coffee ceremonies, and creating spaces where people connect and share stories.'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <p className="text-accent font-semibold text-lg mb-3">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bringing Ethiopia to Lagos
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            H&T Ethiopian Restaurant is more than a dining destination. We are custodians of Ethiopian culinary heritage, dedicated to sharing the authentic flavors, rich traditions, and warm hospitality of Ethiopia with the vibrant community of Lagos.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Mission */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To preserve and celebrate authentic Ethiopian culinary traditions while creating a welcoming space where people from all walks of life can gather, share meals, and connect through the universal language of food.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be Lagos's premier destination for authentic Ethiopian dining, known not just for exceptional food, but for creating moments of genuine human connection and cultural appreciation.
              </p>
            </div>
          </div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed ml-12">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-12 border border-primary/20">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose H&T?</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🇪🇹</div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Authentic Heritage</h4>
              <p className="text-muted-foreground">
                Recipes and techniques passed down through generations, combined with imported Ethiopian spices and ingredients.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">👥</div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Warm Community</h4>
              <p className="text-muted-foreground">
                Experience Ethiopian hospitality firsthand. Every guest is treated like family in our welcoming space.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Exceptional Experience</h4>
              <p className="text-muted-foreground">
                From traditional coffee ceremonies to family-style dining on injera, every visit is memorable.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience authentic Ethiopian cuisine?
          </p>
          <div className="space-y-3">
            <p className="text-2xl font-bold text-foreground">
              Visit H&T Ethiopian Restaurant
            </p>
            <p className="text-muted-foreground">
              📍 15 Admiralty Way, Lekki Phase 1, Lagos | 📞 +234 706 394 5538
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
