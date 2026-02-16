import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import htLogo from '@/assets/logo.jpg';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Reservations', href: '/reservations' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent("Hello, I'd like to make a reservation for [X people] on [Date & Time].");
    window.open(`https://wa.me/2348170339432?text=${message}`, '_blank');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group transition-opacity hover:opacity-80">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl p-0.5 shadow-md group-hover:shadow-lg transition-shadow">
              <div className="w-full h-full bg-white dark:bg-card rounded-[10px] flex items-center justify-center">
                <img 
                  src={htLogo} 
                  alt="H&T Ethiopian Restaurant Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">H&T</h1>
              <p className="text-xs text-muted-foreground font-medium">Ethiopian Cuisine</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.href) 
                    ? 'text-primary bg-primary/8' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Contact Info & Social Media */}
            <div className="hidden lg:flex items-center space-x-6 text-sm text-muted-foreground border-l border-border/50 pl-6">
              <a href="tel:+2348170339432" className="flex items-center space-x-1.5 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+234 706 394 5538</span>
              </a>
              <a href="https://maps.google.com/maps/search/15+Admiralty+Way,+Lekki+Phase+1,+Lagos" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Lekki, Lagos</span>
              </a>
              
              {/* Social Media Icons */}
              <div className="hidden xl:flex items-center space-x-3 border-l border-border/50 pl-6">
                <a
                  href="https://facebook.com/ethiopianfeastforge"
                  className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/ethiopianfeastforge"
                  className="w-8 h-8 rounded-lg bg-muted hover:bg-accent hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297L6.6 14.27c.6.6 1.297.9 2.097.9 1.697 0 2.997-1.397 2.997-2.997 0-1.697-1.3-2.997-2.997-2.997-.8 0-1.497.3-2.097.9l-1.479-1.421c.88-.807 2.031-1.297 3.328-1.297 2.694 0 4.891 2.197 4.891 4.891s-2.197 4.891-4.891 4.891zm7.043-3.297c0 .997-.697 1.697-1.697 1.697-.997 0-1.697-.7-1.697-1.697V9.785c0-.997.7-1.697 1.697-1.697.997 0 1.697.7 1.697 1.697v3.906z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/ethiopianfeast"
                  className="w-8 h-8 rounded-lg bg-muted hover:bg-foreground hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="X (Twitter)"
                  title="X"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@ethiopianfeastforge"
                  className="w-8 h-8 rounded-lg bg-muted hover:bg-foreground hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="TikTok"
                  title="TikTok"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Reservation Button */}
            <Button
              onClick={handleWhatsAppReservation}
              className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Reserve Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? 'text-primary bg-muted rounded-md' 
                    : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="px-3 py-2 space-y-2 text-sm text-muted-foreground border-t border-border mt-3 pt-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+234 706 394 5538</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Lekki, Lagos</span>
              </div>
            </div>
            
            <div className="px-3">
              <Button
                onClick={handleWhatsAppReservation}
                className="w-full bg-tertiary hover:bg-tertiary/90 text-tertiary-foreground"
              >
                Reserve Table via WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
