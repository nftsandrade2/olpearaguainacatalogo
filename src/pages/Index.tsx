import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <main>
        <Hero />
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
