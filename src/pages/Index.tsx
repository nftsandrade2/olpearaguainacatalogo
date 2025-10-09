import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Products />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
