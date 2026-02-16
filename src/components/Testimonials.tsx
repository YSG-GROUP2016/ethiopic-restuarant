import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Amina Hassan',
      role: 'Food Critic, Lagos Times',
      content: 'H&T Ethiopian Restaurant is a gem in Lagos. Every dish is a masterpiece of authentic flavors. The coffee ceremony is an experience I will never forget. Highly recommended!',
      rating: 5,
      image: '👩‍🍳'
    },
    {
      id: 2,
      name: 'Oluwaseun Okafor',
      role: 'Business Executive',
      content: 'The ambiance, the food, the service—everything is perfect. I brought my clients here for a business dinner and they were impressed. It\'s not just a restaurant, it\'s an experience.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      id: 3,
      name: 'Zainab Ahmed',
      role: 'Travel Blogger',
      content: 'This is the most authentic Ethiopian dining experience I\'ve had outside of Ethiopia. The staff is knowledgeable and passionate about their cuisine. A must-visit!',
      rating: 5,
      image: '✈️'
    },
    {
      id: 4,
      name: 'Chukwu Eze',
      role: 'Photography Enthusiast',
      content: 'The presentation of the food is absolutely stunning. I\'ve taken hundreds of photos here, and every single one looks like a work of art. Plus, the food tastes as good as it looks!',
      rating: 5,
      image: '📸'
    },
    {
      id: 5,
      name: 'Lisa Chen',
      role: 'Student, University of Lagos',
      content: 'I came here for a special celebration and left wanting to come back every week! The doro wat is incredible, and the prices are reasonable for such quality. Best decision ever!',
      rating: 5,
      image: '🎓'
    },
    {
      id: 6,
      name: 'Michael Johnson',
      role: 'International Consultant',
      content: 'As someone who has traveled extensively, I can confidently say this is authentic Ethiopian cuisine at its finest. The spices, the presentation, everything is top-notch.',
      rating: 5,
      image: '🌍'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-accent font-semibold text-lg mb-2">What Guests Say</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Testimonials & Reviews
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Hear from our guests about their unforgettable dining experiences at H&T Ethiopian Restaurant
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="card-premium group hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="pt-8">
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-secondary text-secondary"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-border">
          {[
            { number: '2000+', label: 'Happy Guests', icon: '👥' },
            { number: '50+', label: 'Menu Items', icon: '🍽️' },
            { number: '5⭐', label: 'Avg Rating', icon: '⭐' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-3 transition-transform group-hover:scale-110">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
