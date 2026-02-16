import { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ShoppingCart from '@/components/ShoppingCart';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';
import traditionalPlatter from '@/assets/traditional-platter.jpg';
import coffeeCeremony from '@/assets/coffee.jpg';
import fish from '@/assets/fish.jpg'
import shiro from '@/assets/shiro-wat.jpg';
import Tej from '@/assets/Tej.jpg';
import lamb from '@/assets/lamb.jpeg';
import bak from '@/assets/bak.jpg';
import kitfo from '@/assets/kitfo.jpg';
import vegetarianCombo from '@/assets/vegetarian-combo.jpg';
import beefTibs from '@/assets/beef-tibs-pinterest.jpg';
import doroWat from '@/assets/doro-wat1.jpg';
import gomen from '@/assets/gomen.jpg';
import sambusa from '@/assets/sambusa.jpg';
import fresh from '@/assets/Fresh-mango.jpg';
import honeyCake from '@/assets/honey-cake.jpg';
import ethiopianPlatter from '@/assets/ethiopian-platter-pinterest.jpg';

const Menu = () => {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'starters', name: 'Starters', icon: '🥗' },
    { id: 'mains', name: 'Main Courses', icon: '🍛' },
    { id: 'vegetarian', name: 'Vegetarian', icon: '🌱' },
    { id: 'beverages', name: 'Beverages', icon: '☕' },
    { id: 'desserts', name: 'Desserts', icon: '🍯' },
  ];

  const menuItems = [
    // Starters
    {
      id: 1,
      name: "Sambusa",
      description: "Crispy pastry filled with lentils, onions, and jalapeños, served with spicy dipping sauce",
      price: "₦3,500",
      category: "starters",
      image: sambusa,
      vegetarian: true,
      spicy: true,
    },
    {
      id: 2,
      name: "Kitfo",
      description: "Ethiopian steak tartare seasoned with mitmita spice and served with injera",
      price: "₦6,800",
      category: "starters",
      image: kitfo,
      spicy: true,
    },
    {
      id: 3,
      name: "Timatim Fitfit",
      description: "Fresh tomato and onion salad mixed with pieces of injera and olive oil",
      price: "₦3,200",
      category: "starters",
      image: traditionalPlatter,
      vegetarian: true,
    },

    // Main Courses
    {
      id: 4,
      name: "Doro Wat",
      description: "Ethiopia's national dish - tender chicken simmered in berbere sauce with hard-boiled eggs",
      price: "₦7,500",
      category: "mains",
      image: doroWat,
      spicy: true,
      popular: true,
    },
    {
      id: 5,
      name: "Beef Tibs",
      description: "Sautéed beef cubes with onions, peppers, and aromatic Ethiopian spices",
      price: "₦7,200",
      category: "mains",
      image: beefTibs,
    },
    {
      id: 6,
      name: "Fish Kitfo",
      description: "Fresh fish prepared kitfo style with traditional Ethiopian spices",
      price: "₦8,000",
      category: "mains",
      image: fish,
    },
    {
      id: 7,
      name: "Lamb Wat",
      description: "Tender lamb slow-cooked in rich berbere sauce with onions and garlic",
      price: "₦8,500",
      category: "mains",
      image: lamb,
      spicy: true,
    },

    // Vegetarian
    {
      id: 8,
      name: "Vegetarian Combination",
      description: "Assorted vegetarian dishes including shiro, gomen, misir, and other seasonal vegetables",
      price: "₦6,800",
      category: "vegetarian",
      image: ethiopianPlatter,
      vegetarian: true,
      popular: true,
    },
    {
      id: 9,
      name: "Shiro Wat",
      description: "Ground chickpea stew simmered in berbere sauce - a beloved Ethiopian comfort food",
      price: "₦6,000",
      category: "vegetarian",
      image: shiro,
      vegetarian: true,
      spicy: true,
    },
    {
      id: 10,
      name: "Gomen",
      description: "Fresh collard greens sautéed with garlic, ginger, and traditional Ethiopian spices",
      price: "₦5,200",
      category: "vegetarian",
      image: gomen,
      vegetarian: true,
    },

    // Beverages
    {
      id: 11,
      name: "Ethiopian Coffee Ceremony",
      description: "Traditional coffee ceremony with three rounds of freshly roasted and brewed coffee",
      price: "₦5,200",
      category: "beverages",
      image: coffeeCeremony,
      cultural: true,
      popular: true,
    },
    {
      id: 12,
      name: "Tej (Ethiopian Honey Wine)",
      description: "Traditional fermented honey wine with a sweet, wine-like flavor - served in traditional glass",
      price: "₦3,600",
      category: "beverages",
      image: Tej,
      cultural: true,
    },
    {
      id: 13,
      name: "Fresh Mango Juice",
      description: "Freshly squeezed mango juice - perfect complement to spicy Ethiopian dishes",
      price: "₦2,000",
      category: "beverages",
      image: fresh,
    },

    // Desserts
    {
      id: 14,
      name: "Honey Wine Cake",
      description: "Traditional Ethiopian cake made with tej (honey wine) and aromatic spices",
      price: "₦3,200",
      category: "desserts",
      image: honeyCake,
    },
    {
      id: 15,
      name: "Baklava Ethiopian Style",
      description: "Flaky pastry layered with honey, nuts, and Ethiopian spices",
      price: "₦2,800",
      category: "desserts",
      image: bak,
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <SEO 
        title="Menu - H&T Ethiopian Restaurant | Authentic Ethiopian Food in Lagos - Order Online"
        description="Discover H&T's authentic Ethiopian menu featuring Doro Wat, Kitfo, Injera, Coffee Ceremony, and more traditional dishes. Order online or dine-in at our Lekki restaurant in Lagos."
        keywords="ethiopian restaurant menu, authentic ethiopian food, doro wat, injera, kitfo, shiro, ethiopian vegetarian, coffee ceremony, lagos restaurant, authentic ethiopian cuisine, traditional ethiopian dishes"
        type="website"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start mb-8">
            <div className="flex-1" />
            <ShoppingCart />
          </div>
          
          <div className="text-center space-y-6 animate-fade-in-up">
            <p className="text-accent font-semibold text-lg">
              መገብ - Our Menu
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              Authentic Ethiopian
              <span className="block text-primary">Cuisine</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-spice-orange mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the rich, complex flavors of Ethiopia through our carefully curated menu 
              of traditional dishes, each prepared with authentic spices and time-honored techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm'
                      : 'border-border hover:border-primary hover:text-primary'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id}
                className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.name} - Traditional Ethiopian ${item.category.toLowerCase()}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {item.popular && (
                      <Badge className="bg-secondary text-secondary-foreground">
                        ⭐ Popular
                      </Badge>
                    )}
                    {item.spicy && (
                      <Badge className="bg-primary text-primary-foreground">
                        🌶️ Spicy
                      </Badge>
                    )}
                    {item.vegetarian && (
                      <Badge className="bg-tertiary text-tertiary-foreground">
                        🌱 Vegetarian
                      </Badge>
                    )}
                    {item.cultural && (
                      <Badge className="bg-spice-orange text-white">
                        🇪🇹 Cultural
                      </Badge>
                    )}
                  </div>

                </div>

                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-primary ml-2">{item.price}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                  
                  <Button
                    onClick={() => addItem({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.image
                    })}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-200 gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Menu Note */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-tertiary/10 to-secondary/10 rounded-2xl p-8 border border-tertiary/20 max-w-4xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                🍽️ Traditional Ethiopian Dining
              </h3>
              <p className="text-muted-foreground mb-4">
                All dishes are served family-style on injera (traditional Ethiopian flatbread) made from teff flour. 
                Injera serves as both plate and utensil - tear off pieces to scoop up the delicious stews and vegetables.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Dietary Information:</strong> We happily accommodate dietary restrictions. 
                Please inform your server of any allergies or dietary preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-spice-orange/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            About Our Ethiopian Cuisine
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Traditional Preparation</h3>
              <p className="text-muted-foreground">
                All our dishes are prepared using authentic Ethiopian recipes and techniques, 
                with spices imported directly from Ethiopia to ensure the most genuine flavors.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Dietary Options</h3>
              <p className="text-muted-foreground">
                We offer extensive vegetarian and vegan options, following the Ethiopian Orthodox 
                tradition of fasting foods that are naturally plant-based and full of flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Menu;
