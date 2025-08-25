import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent("Hello, I'd like to make a reservation for [X people] on [Date & Time].");
    window.open(`https://wa.me/2348012345678?text=${message}`, '_blank');
  };

  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/ethiopianfeastforge', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/ethiopianfeastforge', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297L6.6 14.27c.6.6 1.297.9 2.097.9 1.697 0 2.997-1.397 2.997-2.997 0-1.697-1.3-2.997-2.997-2.997-.8 0-1.497.3-2.097.9l-1.479-1.421c.88-.807 2.031-1.297 3.328-1.297 2.694 0 4.891 2.197 4.891 4.891s-2.197 4.891-4.891 4.891zm7.043-3.297c0 .997-.697 1.697-1.697 1.697-.997 0-1.697-.7-1.697-1.697V9.785c0-.997.7-1.697 1.697-1.697.997 0 1.697.7 1.697 1.697v3.906z"/>
        </svg>
      )
    },
    { 
      name: 'TikTok', 
      url: 'https://tiktok.com/@ethiopianfeastforge', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    },
    { 
      name: 'X', 
      url: 'https://x.com/ethiopianfeast', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-earth-brown to-coffee-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">H&T Ethiopian Restaurant</h3>
              <p className="text-injera-beige">
                Authentic Ethiopian cuisine @ the centre of Lagos
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-spice-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Lekki Location</p>
                  <p className="text-injera-beige text-sm">
                    15 Admiralty Way, Lekki Phase 1<br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-spice-orange" />
                <div>
                  <p className="font-medium">+234 801 234 5678</p>
                  <p className="text-injera-beige text-sm">Call for reservations</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-spice-orange" />
                <div>
                  <p className="font-medium">info@ethiopianfeastforge.com</p>
                  <p className="text-injera-beige text-sm">General inquiries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Opening Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-spice-orange" />
                <span className="text-sm">Restaurant Hours</span>
              </div>
              <div className="space-y-2 text-injera-beige text-sm">
                <div className="flex justify-between">
                  <span>Mon - Thu</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Fri - Sat</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 PM - 9:00 PM</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-secondary/20 rounded-lg border border-secondary/30">
                <p className="text-sm font-medium text-secondary">☕ Special Event</p>
                <p className="text-injera-beige text-sm">
                  Traditional Coffee Ceremony<br />
                  Every Sunday at 3:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Actions</h3>
            <div className="space-y-4">
              <Button
                onClick={handleWhatsAppReservation}
                className="w-full bg-tertiary hover:bg-tertiary/90 text-tertiary-foreground"
              >
                📱 Reserve via WhatsApp
              </Button>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Popular Services:</p>
                <ul className="text-injera-beige text-sm space-y-1">
                  <li>• Dine-in Experience</li>
                  <li>• Coffee Ceremony</li>
                  <li>• Group Reservations</li>
                  <li>• Cultural Events</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Stay Connected</h3>
            
            <div className="space-y-4">
              <p className="text-injera-beige text-sm">
                Follow us for daily specials, cultural events, and behind-the-scenes moments.
              </p>
              
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
                  >
                    <span className="text-white">{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-primary/20 rounded-lg border border-primary/30">
              <p className="text-sm font-medium text-primary mb-2">🌟 Special Offer</p>
              <p className="text-injera-beige text-sm">
                Follow us on social media for exclusive discounts and event invitations!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-injera-beige text-sm">
              <span>© 2024 H&T Ethiopian Restaurant. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-injera-beige text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>for authentic Ethiopian culture</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-injera-beige text-xs">
              🇪🇹 Proudly serving authentic Ethiopian cuisine and culture to our community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;