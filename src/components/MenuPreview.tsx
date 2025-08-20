import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import traditionalPlatter from '@/assets/traditional-platter.jpg';
import coffeeCeremony from '@/assets/coffee-ceremony.jpg';
import doroWat from '@/assets/doro-wat.jpg';
import vegetarianCombo from '@/assets/vegetarian-combo.jpg';

const MenuPreview = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Doro Wat",
      description: "Ethiopia's national dish - tender chicken simmered in berbere sauce with hard-boiled eggs",
      price: "₦7,500",
      category: "Main Course",
      image: doroWat,
      spicy: true
    },
    {
      id: 2,
      name: "Ethiopian Coffee Ceremony",
      description: "Traditional coffee ceremony with three rounds of freshly roasted and brewed coffee",
      price: "₦5,200",
      category: "Beverages",
      image: coffeeCeremony,
      cultural: true
    },
    {
      id: 3,
      name: "Vegetarian Combination",
      description: "Assorted vegetarian dishes including shiro, gomen, and misir served on injera",
      price: "₦6,800",
      category: "Vegetarian",
      image: vegetarianCombo,
      vegetarian: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-spice-orange font-medium text-lg">Taste of Ethiopia</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Our Featured Dishes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-spice-orange mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the authentic flavors of Ethiopia with our carefully crafted traditional dishes, 
            prepared using time-honored recipes and the finest ingredients.
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.spicy && (
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      🌶️ Spicy
                    </span>
                  )}
                  {item.vegetarian && (
                    <span className="px-2 py-1 bg-tertiary text-tertiary-foreground text-xs font-medium rounded-full">
                      🌱 Vegetarian
                    </span>
                  )}
                  {item.cultural && (
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                      ☕ Cultural Experience
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-background/90 text-foreground px-3 py-1 rounded-full font-bold text-lg">
                    {item.price}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-spice-orange font-medium">
                      {item.category}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Add to Order
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <p className="text-lg text-muted-foreground">
            Explore our complete menu featuring traditional appetizers, hearty main courses, 
            refreshing beverages, and delightful desserts.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold"
          >
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>

        {/* Special Note */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-spice-orange/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🇪🇹 Ethiopian Dining Tradition
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              In Ethiopian culture, sharing food from the same plate strengthens bonds between family and friends. 
              All our dishes are served family-style on traditional injera bread, encouraging connection and community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;