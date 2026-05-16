import logoOlpe from "@/assets/logo-olpe.png";
import heroBackground from "@/assets/hero-background.webp";
import { Bed, Sofa, Armchair, Layers } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
      className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden text-primary-foreground"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />

      {/* Neutral Premium Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(18,18,18,0.42) 0%, rgba(18,18,18,0.32) 45%, rgba(18,18,18,0.50) 100%)",
        }}
      />

      {/* Subtle Dotted Texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Soft Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, transparent 68%, rgba(0,0,0,0.22) 100%)",
        }}
      />

      <div className="container relative z-10 mx-auto flex min-h-[88vh] flex-col items-center justify-center px-4 pt-14 text-center">
        {/* Logo */}
        <div className="mb-6 mt-4 animate-fade-in">
          <img
            src={logoOlpe}
            alt="Olpe colchões e sofás"
            className="h-16 w-auto md:h-20 lg:h-24"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        {/* Headline */}
        <h1
          className="mx-auto mb-8 max-w-3xl animate-fade-in text-center text-2xl font-light leading-tight text-white md:text-3xl lg:text-4xl"
          style={{
            letterSpacing: "0.01em",
            textShadow: "0 2px 18px rgba(0,0,0,0.32)",
          }}
        >
          Conforto e sofisticação para seu lar.
        </h1>

        {/* Categories Strip */}
        <div
          className="mb-6 w-full max-w-4xl animate-fade-in rounded-2xl px-4 py-4 md:px-6"
          style={{
            backgroundColor: "rgba(248, 247, 243, 0.95)",
            boxShadow: "0 14px 38px rgba(0, 0, 0, 0.18)",
            border: "1px solid rgba(200, 170, 119, 0.24)",
          }}
        >
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.sectionId}
                type="button"
                onClick={() => scrollToSection(category.sectionId)}
                aria-label={`Ir para seção ${category.label}`}
                className="group flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-3 transition-all duration-300 hover:bg-white/70 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C8AA77]/50"
              >
                <category.icon
                  size={30}
                  strokeWidth={1.35}
                  className="text-[#0C1A2A] transition-all duration-300 group-hover:scale-105 group-hover:text-[#9F7D46]"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0C1A2A]/90 transition-colors duration-300 group-hover:text-[#9F7D46] md:text-sm">
                  {category.label}
                </span>

                <span className="h-[2px] w-6 rounded-full bg-[#C8AA77]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
