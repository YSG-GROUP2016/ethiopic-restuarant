import { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import traditionalPlatter from '@/assets/traditional-platter.jpg';
import coffeeCeremony from '@/assets/coffee-ceremony.jpg';

const Menu = () => {
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
      price: "$8.95",
      category: "starters",
      image: traditionalPlatter,
      vegetarian: true,
      spicy: true,
    },
    {
      id: 2,
      name: "Kitfo",
      description: "Ethiopian steak tartare seasoned with mitmita spice and served with injera",
      price: "$16.95",
      category: "starters",
      image: traditionalPlatter,
      spicy: true,
    },
    {
      id: 3,
      name: "Timatim Fitfit",
      description: "Fresh tomato and onion salad mixed with pieces of injera and olive oil",
      price: "$7.95",
      category: "starters",
      image: traditionalPlatter,
      vegetarian: true,
    },

    // Main Courses
    {
      id: 4,
      name: "Doro Wat",
      description: "Ethiopia's national dish - tender chicken simmered in berbere sauce with hard-boiled eggs",
      price: "$18.95",
      category: "mains",
      image: traditionalPlatter,
      spicy: true,
      popular: true,
    },
    {
      id: 5,
      name: "Beef Tibs",
      description: "Sautéed beef cubes with onions, peppers, and aromatic Ethiopian spices",
      price: "$17.95",
      category: "mains",
      image: traditionalPlatter,
    },
    {
      id: 6,
      name: "Fish Kitfo",
      description: "Fresh fish prepared kitfo style with traditional Ethiopian spices",
      price: "$19.95",
      category: "mains",
      image: traditionalPlatter,
    },
    {
      id: 7,
      name: "Lamb Wat",
      description: "Tender lamb slow-cooked in rich berbere sauce with onions and garlic",
      price: "$20.95",
      category: "mains",
      image: traditionalPlatter,
      spicy: true,
    },

    // Vegetarian
    {
      id: 8,
      name: "Vegetarian Combination",
      description: "Assorted vegetarian dishes including shiro, gomen, misir, and other seasonal vegetables",
      price: "$16.95",
      category: "vegetarian",
      image: traditionalPlatter,
      vegetarian: true,
      popular: true,
    },
    {
      id: 9,
      name: "Shiro Wat",
      description: "Ground chickpea stew simmered in berbere sauce - a beloved Ethiopian comfort food",
      price: "$14.95",
      category: "vegetarian",
      image: traditionalPlatter,
      vegetarian: true,
      spicy: true,
    },
    {
      id: 10,
      name: "Gomen",
      description: "Fresh collard greens sautéed with garlic, ginger, and traditional Ethiopian spices",
      price: "$12.95",
      category: "vegetarian",
      image: traditionalPlatter,
      vegetarian: true,
    },

    // Beverages
    {
      id: 11,
      name: "Ethiopian Coffee Ceremony",
      description: "Traditional coffee ceremony with three rounds of freshly roasted and brewed coffee",
      price: "$12.95",
      category: "beverages",
      image: coffeeCeremony,
      cultural: true,
      popular: true,
    },
    {
      id: 12,
      name: "Tej (Ethiopian Honey Wine)",
      description: "Traditional fermented honey wine with a sweet, wine-like flavor - served in traditional glass",
      price: "$8.95",
      category: "beverages",
      image: coffeeCeremony,
      cultural: true,
    },
    {
      id: 13,
      name: "Fresh Mango Juice",
      description: "Freshly squeezed mango juice - perfect complement to spicy Ethiopian dishes",
      price: "$4.95",
      category: "beverages",
      image: coffeeCeremony,
    },

    // Desserts
    {
      id: 14,
      name: "Honey Wine Cake",
      description: "Traditional Ethiopian cake made with tej (honey wine) and aromatic spices",
      price: "$7.95",
      category: "desserts",
      image: coffeeCeremony,
    },
    {
      id: 15,
      name: "Baklava Ethiopian Style",
      description: "Flaky pastry layered with honey, nuts, and Ethiopian spices",
      price: "$6.95",
      category: "desserts",
      image: coffeeCeremony,
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-spice-orange font-medium text-lg">
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
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
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

                  {/* Price */}
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-background/95 text-foreground px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                      {item.price}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-spice-orange hover:from-primary/90 hover:to-spice-orange/90 text-white font-semibold transition-all duration-300"
                  >
                    Add to Order
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

      <Footer />
    </div>
  );
};

export default Menu;