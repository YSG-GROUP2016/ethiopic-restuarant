import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent("Hello, I'd like to make a reservation for [X people] on [Date & Time].");
    window.open(`https://wa.me/2348012345678?text=${message}`, '_blank');
  };

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/ethiopianfeastforge', icon: '📘' },
    { name: 'Instagram', url: 'https://instagram.com/ethiopianfeastforge', icon: '📷' },
    { name: 'TikTok', url: 'https://tiktok.com/@ethiopianfeastforge', icon: '🎵' },
    { name: 'Twitter', url: 'https://twitter.com/ethiopianfeast', icon: '🐦' },
  ];

  return (
    <footer className="bg-gradient-to-b from-earth-brown to-coffee-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ethiopian Feast Forge</h3>
              <p className="text-injera-beige">
                Authentic Ethiopian cuisine in the heart of the city
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
                    <span className="text-lg">{social.icon}</span>
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
              <span>© 2024 Ethiopian Feast Forge. All rights reserved.</span>
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