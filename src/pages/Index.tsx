import Hero from '@/components/Hero';
import MenuPreview from '@/components/MenuPreview';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <MenuPreview />
      <Footer />
    </div>
  );
};

export default Index;
