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

      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center min-h-screen pt-12">
        {/* Logo */}
        <div className="mb-8 animate-fade-in mt-6">
          <img src={logoOlpe} alt="Olpe" className="h-16 md:h-20 lg:h-24" />
        </div>

        {/* Headline */}
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-light max-w-4xl mx-auto mb-10 animate-fade-in leading-tight text-white text-center"
          style={{
            letterSpacing: '0.01em',
            textShadow: '0 2px 30px rgba(0,0,0,0.4)',
          }}
        >
          Onde conforto e elegância se encontram.
        </h1>

        {/* Categories Strip with Glassmorphism */}
        <div
          className="w-full max-w-4xl py-3 px-6 rounded-2xl animate-fade-in mb-8"
          style={{
            backgroundColor: 'rgba(12, 26, 42, 0.5)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), 0 0 30px rgba(200, 170, 119, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div className="grid grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(category.sectionId)}
                className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300"
              >
                <div className="relative">
                  <category.icon 
                    size={32} 
                    strokeWidth={1.2} 
                    className="text-white transition-all duration-300 group-hover:scale-105"
                    style={{
                      filter: 'drop-shadow(0 0 4px rgba(200, 170, 119, 0)) drop-shadow(0 0 8px rgba(200, 170, 119, 0))',
                    }}
                  />
                  <style>{`
                    .group:hover svg {
                      filter: drop-shadow(0 0 6px rgba(200, 170, 119, 0.5)) drop-shadow(0 0 12px rgba(200, 170, 119, 0.25)) !important;
                    }
                  `}</style>
                </div>
                <span 
                  className="text-xs md:text-sm font-medium tracking-wider uppercase text-white/90 transition-all duration-300"
                  style={{
                    letterSpacing: '0.1em',
                    textShadow: '0 0 0px rgba(255, 255, 255, 0)',
                  }}
                >
                  <style>{`
                    .group:hover span {
                      color: white;
                      text-shadow: 0 2px 6px rgba(255, 255, 255, 0.25) !important;
                    }
                  `}</style>
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
