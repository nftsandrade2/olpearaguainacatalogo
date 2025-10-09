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
        {/* Categories Strip with Glassmorphism - Moved to top */}
        <div 
          className="w-full max-w-5xl py-10 px-6 rounded-3xl animate-fade-in mb-12"
          style={{
            backgroundColor: 'rgba(20, 44, 70, 0.6)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 60px rgba(200, 170, 119, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(category.sectionId)}
                className="flex flex-col items-center gap-4 group cursor-pointer transition-all duration-300"
              >
                <div className="relative">
                  <category.icon 
                    size={52} 
                    strokeWidth={1.5} 
                    className="text-white transition-all duration-300 group-hover:scale-105"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(200, 170, 119, 0)) drop-shadow(0 0 16px rgba(200, 170, 119, 0))',
                    }}
                  />
                  <style>{`
                    .group:hover svg {
                      filter: drop-shadow(0 0 8px rgba(200, 170, 119, 0.6)) drop-shadow(0 0 16px rgba(200, 170, 119, 0.3)) !important;
                    }
                  `}</style>
                </div>
                <span 
                  className="text-sm md:text-base font-semibold tracking-widest uppercase text-white transition-all duration-300"
                  style={{
                    letterSpacing: '0.15em',
                    textShadow: '0 0 0px rgba(255, 255, 255, 0)',
                  }}
                >
                  <style>{`
                    .group:hover span {
                      text-shadow: 0 2px 8px rgba(255, 255, 255, 0.3) !important;
                    }
                  `}</style>
                  {category.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img src={logoOlpe} alt="Olpe" className="h-16 md:h-20 lg:h-24" />
        </div>

        {/* Banner Space for Promotions */}
        <div 
          className="w-full max-w-3xl py-8 px-6 rounded-2xl mb-8 animate-fade-in"
          style={{
            backgroundColor: 'rgba(200, 170, 119, 0.15)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(200, 170, 119, 0.3)',
            boxShadow: '0 4px 20px rgba(200, 170, 119, 0.1)'
          }}
        >
          <p 
            className="text-lg md:text-xl lg:text-2xl font-semibold"
            style={{ 
              color: '#C8AA77',
              textShadow: '0 2px 10px rgba(200, 170, 119, 0.3)'
            }}
          >
            Espaço para promoções vigentes
          </p>
        </div>

        {/* Main Text with Golden Shadow */}
        <div className="mb-4 animate-fade-in">
          <p 
            className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-white"
            style={{ 
              textShadow: '0 0 30px rgba(200, 170, 119, 0.4), 0 0 60px rgba(200, 170, 119, 0.2)'
            }}
          >
            Produtos criados com conceito francês
          </p>
        </div>

        {/* Golden Line */}
        <div 
          className="w-24 h-px animate-fade-in"
          style={{ backgroundColor: '#C8AA77' }}
        />
      </div>
    </section>
  );
};

export default Hero;
