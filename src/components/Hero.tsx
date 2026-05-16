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
          className="text-3xl md:text-5xl lg:text-6xl font-light max-w-4xl mx-auto mb-5 animate-fade-in leading-tight text-white"
          style={{
            letterSpacing: '0.01em',
            textShadow: '0 2px 30px rgba(0,0,0,0.4)',
          }}
        >
          Conforto, elegância e qualidade para transformar seu lar
        </h1>

        {/* Subheadline */}
        <p
          className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 animate-fade-in text-white/80 font-light"
        >
          Sofás, colchões, camas e poltronas com atendimento personalizado e design sofisticado.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full text-sm md:text-base font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#C8AA77',
              color: '#0C1A2A',
              letterSpacing: '0.1em',
              boxShadow: '0 4px 20px rgba(200, 170, 119, 0.3)',
            }}
          >
            Falar no WhatsApp
          </a>
          <button
            onClick={() => scrollToSection('localizacao')}
            className="px-7 py-3 rounded-full text-sm md:text-base font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105 text-white"
            style={{
              border: '1px solid rgba(200, 170, 119, 0.5)',
              backgroundColor: 'rgba(255,255,255,0.04)',
              letterSpacing: '0.1em',
            }}
          >
            Como chegar
          </button>
        </div>

        {/* Categories Strip with Glassmorphism */}
        <div
          className="w-full max-w-4xl py-4 px-6 rounded-2xl animate-fade-in mb-10"
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
