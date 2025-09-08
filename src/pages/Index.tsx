import Hero from '@/components/Hero';
import MenuPreview from '@/components/MenuPreview';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <>
      <SEO 
        title="H&T Ethiopian Restaurant @ the centre of Lagos - Authentic Ethiopian Cuisine"
        description="Experience authentic Ethiopian cuisine at H&T Ethiopian Restaurant @ the centre of Lagos. Traditional dishes, coffee ceremony, and warm hospitality. Make your reservation today!"
        keywords="ethiopian restaurant lagos, authentic ethiopian food, injera, doro wat, coffee ceremony, traditional ethiopian cuisine, lagos restaurant, african food lagos"
        type="website"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <MenuPreview />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
