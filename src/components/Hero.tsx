import logoOlpe from "@/assets/logo-olpe.png";
import heroBackground from "@/assets/hero-background.webp";
import { Bed, Sofa, Armchair, Layers, MapPin, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const categories = [
    { icon: Layers, label: "COLCHÕES", sectionId: "colchoes" },
    { icon: Sofa, label: "SOFÁS", sectionId: "sofas" },
    { icon: Bed, label: "CAMAS", sectionId: "camas" },
    { icon: Armchair, label: "POLTRONAS", sectionId: "poltronas" },
  ];

  const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Av.+Marginal+Neblina,+1197+Araguaína+TO";

  return (
    <section
      id="inicio"
      className="relative flex min-h-[72vh] flex-col items-center justify-center overflow-hidden text-primary-foreground md:min-h-[76vh]"
    >
      {/* Background — preload via link rel=preload no index.html recomendado */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(180deg, rgba(10,8,6,0.64) 0%, rgba(18,13,9,0.54) 48%, rgba(8,6,4,0.68) 100%)",
        }}
      />

      {/* Vinheta */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, transparent 72%, rgba(0,0,0,0.22) 100%)",
        }}
      />

      <div className="container relative z-10 mx-auto flex min-h-[72vh] flex-col items-center justify-start px-4 pt-[102px] text-center md:min-h-[76vh] md:pt-[108px]">
        {/* Logo */}
        <div className="mb-4 animate-fade-in md:mb-5">
          <img
            src={logoOlpe}
            alt="Olpe Colchões e Sofás — Araguaína TO"
            className="h-11 w-auto md:h-20"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width="160"
            height="44"
            style={{ filter: "drop-shadow(0 6px 20px rgba(0,0,0,0.32))" }}
          />
        </div>

        {/* Proposta de valor — visível mobile e desktop */}
        <h1
          className="mx-auto mb-1 max-w-xs animate-fade-in text-center text-base font-semibold leading-snug text-white md:max-w-xl md:text-xl lg:text-[1.45rem]"
          style={{ letterSpacing: "0.01em", textShadow: "0 4px 18px rgba(0,0,0,0.58)" }}
        >
          Colchões, Sofás e Camas em Araguaína
        </h1>

        {/* Endereço clicável */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-5 flex animate-fade-in items-center gap-1 text-[11px] font-medium text-white/70 underline-offset-2 transition-colors hover:text-white/90 hover:underline md:mb-6 md:text-xs"
          aria-label="Ver endereço no Google Maps"
        >
          <MapPin size={11} className="shrink-0 text-[#C8AA77]" />
          Av. Marginal Neblina, 1197 — Lot. Alaska, Araguaína - TO
        </a>

        {/* Label categorias */}
        <p className="mb-3 animate-fade-in text-[10px] font-medium uppercase tracking-[0.13em] text-white/45 md:text-xs md:text-white/55">
          Conheça nossos modelos
        </p>

        {/* Card categorias */}
        <div
          className="mb-5 w-full max-w-[86%] animate-fade-in rounded-[1rem] px-2 py-2 md:max-w-4xl md:rounded-[1.15rem] md:px-4 md:py-2"
          style={{
            backgroundColor: "rgba(248, 247, 243, 0.95)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.14)",
            border: "1px solid rgba(255,255,255,0.45)",
          }}
        >
          <div className="grid grid-cols-4">
            {categories.map((category, index) => (
              <button
                key={category.sectionId}
                type="button"
                onClick={() => scrollToSection(category.sectionId)}
                aria-label={`Ver ${category.label}`}
                className={`group relative flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 transition-all duration-300 hover:bg-white/75 focus:outline-none focus:ring-2 focus:ring-[#C8AA77]/50 md:px-2 ${
                  index !== categories.length - 1
                    ? "after:absolute after:right-0 after:top-1/2 after:h-8 after:w-px after:-translate-y-1/2 after:bg-[#0C1A2A]/10 md:after:h-9"
                    : ""
                }`}
              >
                <category.icon
                  size={17}
                  strokeWidth={1.45}
                  className="text-[#0C1A2A] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-[#9F7D46] md:h-[21px] md:w-[21px]"
                />
                <span className="text-[8px] font-semibold uppercase tracking-[0.11em] text-[#0C1A2A] transition-colors duration-300 group-hover:text-[#9F7D46] md:text-xs md:tracking-[0.18em]">
                  {category.label}
                </span>
                <span className="mt-0.5 h-[2px] w-4 rounded-full bg-[#C8AA77] opacity-0 transition-all duration-300 group-hover:opacity-100 md:w-5" />
              </button>
            ))}
          </div>
        </div>

        {/* Botões CTA — Como Chegar em destaque */}
        <div className="flex animate-fade-in flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#C8AA77] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:bg-[#b8975f] hover:shadow-xl active:scale-95 md:px-6 md:py-3 md:text-xs"
            aria-label="Como chegar na loja"
          >
            <MapPin size={13} />
            Como Chegar
          </a>

          <button
            type="button"
            onClick={() => scrollToSection("colchoes")}
            className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 active:scale-95 md:px-6 md:py-3 md:text-xs"
          >
            Ver Catálogo
            <ChevronDown size={13} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
