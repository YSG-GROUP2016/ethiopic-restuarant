import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Footer = () => {
  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent("Hello, I'd like to make a reservation for [X people] on [Date & Time].");
    window.open(`https://wa.me/2348170339432?text=${message}`, '_blank');
  };
  const socialLinks = [{
    name: 'Facebook',
    url: 'https://facebook.com/ethiopianfeastforge',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
  }, {
    name: 'Instagram',
    url: 'https://instagram.com/ethiopianfeastforge',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297L6.6 14.27c.6.6 1.297.9 2.097.9 1.697 0 2.997-1.397 2.997-2.997 0-1.697-1.3-2.997-2.997-2.997-.8 0-1.497.3-2.097.9l-1.479-1.421c.88-.807 2.031-1.297 3.328-1.297 2.694 0 4.891 2.197 4.891 4.891s-2.197 4.891-4.891 4.891zm7.043-3.297c0 .997-.697 1.697-1.697 1.697-.997 0-1.697-.7-1.697-1.697V9.785c0-.997.7-1.697 1.697-1.697.997 0 1.697.7 1.697 1.697v3.906z" />
        </svg>
  }, {
    name: 'TikTok',
    url: 'https://tiktok.com/@ethiopianfeastforge',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
  }, {
    name: 'X',
    url: 'https://x.com/ethiopianfeast',
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
  }];
  return <footer className="bg-gradient-to-b from-coffee-dark to-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-foreground">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Restaurant Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">H&T Ethiopian</h3>
              <p className="text-white/70 text-sm font-medium">
                Authentic Ethiopian cuisine at the centre of Lagos
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group cursor-pointer">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:text-secondary transition-colors" />
                <div>
                  <p className="font-semibold text-white text-sm">Location</p>
                  <p className="text-white/60 text-xs mt-1">
                    15 Admiralty Way, Lekki Phase 1, Lagos
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-accent group-hover:text-secondary transition-colors" />
                <div>
                  <p className="font-semibold text-white text-sm">+234 706 394 5538</p>
                  <p className="text-white/60 text-xs mt-0.5">Available for reservations</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Mail className="w-5 h-5 text-accent group-hover:text-secondary transition-colors" />
                <div>
                  <p className="font-semibold text-white text-sm">Info@Habesha.com</p>
                  <p className="text-white/60 text-xs mt-0.5">General inquiries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Hours</h3>
            <div className="space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/70">Mon - Thu</span>
                  <span className="font-semibold text-white">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/70">Fri - Sat</span>
                  <span className="font-semibold text-white">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/70">Sunday</span>
                  <span className="font-semibold text-white">12:00 PM - 9:00 PM</span>
                </div>
              </div>
              
              <div className="pt-3 border-t border-white/10">
                <p className="text-xs text-white/60">
                  <span className="text-accent">☕</span> Coffee ceremony every Sunday at 3:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Services</h3>
            <div className="space-y-3 text-sm">
              <Button 
                onClick={handleWhatsAppReservation} 
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-md hover:shadow-lg transition-all"
              >
                📱 WhatsApp Booking
              </Button>
              
              <div className="space-y-2 border-t border-white/10 pt-3">
                <p className="text-white font-semibold text-xs uppercase tracking-wide">Offerings</p>
                <ul className="text-white/60 text-xs space-y-1.5">
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">✓</span>
                    <span>Dine-in Experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">✓</span>
                    <span>Coffee Ceremony</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">✓</span>
                    <span>Group Reservations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">✓</span>
                    <span>Private Events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Follow Us</h3>
            
            <div className="space-y-4">
              <p className="text-white/70 text-sm leading-relaxed">
                Join our community for exclusive offers, cultural events, and authentic Ethiopian storytelling.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(social => <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center p-3 bg-white/10 hover:bg-primary hover:text-white rounded-lg transition-all duration-200 text-sm font-medium group"
                  title={social.name}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{social.icon}</span>
                </a>)}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-white/60 text-xs">
              <span>© 2024 H&T Ethiopian Restaurant. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-white/60 text-xs">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-accent fill-current" />
              <span>for Ethiopian culture</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-white/40 text-xs">Designed with authenticity in mind</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
