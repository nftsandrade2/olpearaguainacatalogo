import logoOlpe from "@/assets/logo-olpe.png";
import heroBackground from "@/assets/hero-background.webp";
import { Bed, Sofa, Armchair, Layers } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const categories = [
    { icon: Bed, label: "CAMAS", sectionId: "camas" },
    { icon: Sofa, label: "SOFÁS", sectionId: "sofas" },
    { icon: Armchair, label: "POLTRONAS", sectionId: "poltronas" },
    { icon: Layers, label: "COLCHÕES", sectionId: "colchoes" },
  ];

  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center text-primary-foreground relative overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark Blue Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(12, 26, 42, 0.85)'
        }}
      />
      
      {/* Dotted Texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Vignette Effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.3) 100%)'
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img src={logoOlpe} alt="Olpe Colchões e Sofás" className="h-16 md:h-20 lg:h-24" />
        </div>

        {/* Texts below logo */}
        <p className="text-2xl md:text-3xl lg:text-4xl mb-4 animate-fade-in" style={{ color: '#C8AA77' }}>
          colchões e sofás
        </p>
        <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-16 animate-fade-in">
          Produtos criados com conceito francês
        </p>

        {/* Categories Strip */}
        <div className="w-full max-w-5xl bg-primary/80 backdrop-blur-sm py-8 px-4 rounded-lg shadow-2xl animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(category.sectionId)}
                className="flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <category.icon size={48} strokeWidth={1.5} className="text-primary-foreground" />
                <span className="text-sm md:text-base font-semibold tracking-wider">
                  {category.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
