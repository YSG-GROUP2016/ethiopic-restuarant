import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent("Hello, I'd like to make a reservation for [X people] on [Date & Time].");
    window.open(`https://wa.me/2348170339432?text=${message}`, '_blank');
  };

  const handleWhatsAppGeneral = () => {
    const message = encodeURIComponent("Hello, I have a question about H&T Ethiopian Restaurant @ the centre of Lagos...");
    window.open(`https://wa.me/2348012345678?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: [
        "15 Admiralty Way, Lekki Phase 1",
        "Lagos, Nigeria",
        "West Africa"
      ],
      action: "Get Directions",
      actionUrl: "https://maps.google.com/?q=15+Admiralty+Way+Lekki+Lagos+Nigeria"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: [
        "+234 706 394 5538",
        "Available during business hours",
        "For reservations & inquiries"
      ],
      action: "Call Now",
      actionUrl: "tel:+2347063945538"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: [
        "Info@Habesha.com",
        "General inquiries & feedback",
        "We respond within 24 hours"
      ],
      action: "Send Email",
      actionUrl: "mailto:Info@Habesha.com"
    }
  ];

  const operatingHours = [
    { day: "Monday - Thursday", hours: "11:00 AM - 10:00 PM" },
    { day: "Friday - Saturday", hours: "11:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "12:00 PM - 9:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-spice-orange font-medium text-lg">
                Contact Us
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              Visit H&T Ethiopian Restaurant
              <span className="block text-primary"> @ the centre of Lagos</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-spice-orange mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're located in the vibrant Lekki area of Lagos, ready to welcome you with authentic Ethiopian 
              hospitality and cuisine. Come experience our warm atmosphere and traditional flavors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Actions */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Quick Actions</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Button
                size="lg"
                onClick={handleWhatsAppReservation}
                className="bg-tertiary hover:bg-tertiary/90 text-tertiary-foreground px-8 py-4 text-lg font-semibold flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Reserve via WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsAppGeneral}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Ask a Question
              </Button>
            </div>
          </div>

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-spice-orange rounded-full flex items-center justify-center mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{info.title}</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {info.content.map((line, i) => (
                    <p key={i} className={`${i === 0 ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                      {line}
                    </p>
                  ))}
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                  >
                    <a href={info.actionUrl} target="_blank" rel="noopener noreferrer">
                      {info.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Operating Hours & Map Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Operating Hours */}
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-spice-orange rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Operating Hours</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground font-mono">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-secondary/10 to-spice-orange/10 rounded-lg p-6 border border-secondary/20">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    ☕ Special Event
                  </h4>
                  <p className="text-muted-foreground">
                    <strong>Traditional Coffee Ceremony</strong><br />
                    Every Sunday at 3:00 PM<br />
                    <span className="text-sm">Experience authentic Ethiopian coffee culture</span>
                  </p>
                </div>
                
                <div className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Note:</strong> We may extend hours during special events or holidays.</p>
                  <p><strong>Reservations:</strong> Recommended for groups of 6 or more, especially on weekends.</p>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Placeholder */}
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground">Find Us</h3>
                <p className="text-muted-foreground">Located in the vibrant Lekki area of Lagos</p>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-muted to-accent/20 rounded-lg flex items-center justify-center border border-border">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-primary mx-auto" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Interactive Map</h4>
                    <p className="text-muted-foreground mb-4">Click below to view our location in Google Maps</p>
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a 
                        href="https://maps.google.com/?q=15+Admiralty+Way+Lekki+Lagos+Nigeria" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
                </div>
                
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">15 Admiralty Way, Lekki Phase 1, Lagos, Nigeria</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border">
                    <div>
                      <p className="font-medium text-foreground text-xs">PARKING</p>
                      <p className="text-muted-foreground text-xs">Street parking available</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-xs">TRANSIT</p>
                      <p className="text-muted-foreground text-xs">Uber/Bolt accessible</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-primary/10 to-spice-orange/10 rounded-2xl p-8 border border-primary/20 max-w-4xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                🇪🇹 Ethiopian Hospitality Awaits
              </h3>
              <p className="text-muted-foreground mb-4">
                At H&T Ethiopian Restaurant @ the centre of Lagos, we believe in the traditional Ethiopian value of hospitality - 
                treating every guest like family. Whether you're new to Ethiopian cuisine or a longtime fan, 
                our team is here to guide you through an authentic culinary journey in the heart of Lagos.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Group Events:</strong> We welcome large parties and special celebrations. 
                Contact us to discuss private dining options and catering services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;