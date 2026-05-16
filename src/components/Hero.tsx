import logoOlpe from "@/assets/logo-olpe.png";
import heroBackground from "@/assets/hero-background.webp";
import { Bed, Sofa, Armchair, Layers } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
      className="relative flex min-h-[82vh] flex-col items-center justify-center overflow-hidden text-primary-foreground md:min-h-[78vh]"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(180deg, rgba(10,8,6,0.76) 0%, rgba(18,13,9,0.63) 48%, rgba(8,6,4,0.78) 100%)",
        }}
      />

      <div
        className="absolute inset-0 z-[2] opacity-[0.018]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.42) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div
        className="absolute inset-0 z-[3]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, transparent 68%, rgba(0,0,0,0.28) 100%)",
        }}
      />

      <div className="container relative z-10 mx-auto flex min-h-[82vh] flex-col items-center justify-start px-4 pt-[92px] text-center md:min-h-[78vh] md:pt-[96px]">
        <div className="mb-3 animate-fade-in">
          <img
            src={logoOlpe}
            alt="Olpe colchões e sofás"
            className="h-14 w-auto md:h-20 lg:h-20"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            style={{
              filter: "drop-shadow(0 6px 20px rgba(0,0,0,0.38))",
            }}
          />
        </div>

        <h1
          className="mx-auto mb-5 max-w-2xl animate-fade-in text-center text-xl font-light leading-tight text-white md:text-2xl lg:text-[2rem]"
          style={{
            letterSpacing: "0.01em",
            textShadow: "0 4px 22px rgba(0,0,0,0.68)",
          }}
        >
          Conforto e sofisticação para seu lar.
        </h1>

        <div
          className="mb-3 w-full max-w-4xl animate-fade-in rounded-[1.25rem] px-4 py-4 md:px-4 md:py-3"
          style={{
            backgroundColor: "rgba(248, 247, 243, 0.96)",
            boxShadow: "0 14px 34px rgba(0,0,0,0.20)",
            border: "1px solid rgba(200,170,119,0.22)",
          }}
        >
          <div className="grid grid-cols-2 gap-y-5 md:grid-cols-4 md:gap-y-0">
            {categories.map((category, index) => (
              <button
                key={category.sectionId}
                type="button"
                onClick={() => scrollToSection(category.sectionId)}
                aria-label={`Ir para seção ${category.label}`}
                className={`group relative flex flex-col items-center justify-center gap-1.5 rounded-xl px-3 py-2 transition-all duration-300 hover:bg-white/75 focus:outline-none focus:ring-2 focus:ring-[#C8AA77]/50 md:py-3 ${
                  index !== categories.length - 1
                    ? "md:after:absolute md:after:right-0 md:after:top-1/2 md:after:h-10 md:after:w-px md:after:-translate-y-1/2 md:after:bg-[#0C1A2A]/10"
                    : ""
                }`}
              >
                <category.icon
                  size={24}
                  strokeWidth={1.45}
                  className="text-[#0C1A2A] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-[#9F7D46]"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0C1A2A] transition-colors duration-300 group-hover:text-[#9F7D46] md:text-sm">
                  {category.label}
                </span>

                <span className="mt-0.5 h-[2px] w-5 rounded-full bg-[#C8AA77] opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
