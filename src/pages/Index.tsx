import Hero from '@/components/Hero';
import MenuPreview from '@/components/MenuPreview';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <>
      <SEO 
        title="H&T Ethiopian Restaurant in Lagos - Authentic Ethiopian Cuisine | Lekki"
        description="Discover authentic Ethiopian cuisine at H&T Ethiopian Restaurant @ the centre of Lagos. Experience Doro Wat, traditional coffee ceremony, injera, and warm hospitality. Reserve your table today!"
        keywords="ethiopian restaurant lagos, authentic ethiopian food, injera, doro wat, coffee ceremony, traditional ethiopian cuisine, lekki restaurant, african food, ethiopian dining"
        type="website"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <MenuPreview />
          <Gallery />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
