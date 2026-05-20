import logoOlpe from "@/assets/logo-olpe.png";
import heroBackground from "@/assets/hero-background.webp";
import { Bed, Sofa, Armchair, Layers, MapPin } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/place/Olpe+-+Colch%C3%B5es+e+Sof%C3%A1s/@-7.2013099,-48.21995,17z/data=!4m15!1m8!3m7!1s0x92d90dc5761675f7:0x7b416bbe595d3d45!2sOlpe+-+Colch%C3%B5es+e+Sof%C3%A1s!8m2!3d-7.2013099!4d-48.21995!10e1!16s%2Fg%2F11wfpnvvwl!3m5!1s0x92d90dc5761675f7:0x7b416bbe595d3d45!8m2!3d-7.2013099!4d-48.21995!16s%2Fg%2F11wfpnvvwl?hl=en-BR&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const categories = [
    { icon: Layers, label: "COLCHÕES", sectionId: "colchoes" },
    { icon: Sofa, label: "SOFÁS", sectionId: "sofas" },
    { icon: Bed, label: "CAMAS", sectionId: "camas" },
    { icon: Armchair, label: "POLTRONAS", sectionId: "poltronas" },
  ];

  return (
    <section
      id="inicio"
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden text-primary-foreground md:min-h-[82vh]"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(180deg, rgba(10,8,6,0.64) 0%, rgba(18,13,9,0.54) 48%, rgba(8,6,4,0.72) 100%)",
        }}
      />

      {/* Vinheta */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, transparent 72%, rgba(0,0,0,0.22) 100%)",
        }}
      />

      {/* Conteúdo — flex column com justify-between para empurrar endereço ao fundo */}
      <div className="container relative z-10 mx-auto flex min-h-[80vh] flex-col items-center justify-between px-4 pb-8 pt-[110px] text-center md:min-h-[82vh] md:pb-10 md:pt-[118px]">
        {/* Bloco central */}
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-5 animate-fade-in md:mb-6">
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

          {/* H1 — uma linha */}
          <h1
            className="mb-8 max-w-[20ch] animate-fade-in font-display text-[18px] font-normal leading-[1.35] text-white md:max-w-none md:text-[2rem] lg:text-[2.25rem]"
            style={{ letterSpacing: "0.005em", textShadow: "0 4px 18px rgba(0,0,0,0.55)" }}
          >
            Transforme sua casa com <em className="not-italic font-medium text-[#E6CB95]">conforto</em> e <em className="not-italic font-medium text-[#E6CB95]">elegância</em>.
          </h1>

          {/* Label */}
          <p className="mb-4 mt-12 animate-fade-in text-[11.5px] font-medium uppercase tracking-[0.2em] md:mt-6 md:text-[13px]" style={{ color: "rgba(255,255,255,0.96)" }}>
            Conheça nossos modelos
          </p>

          {/* Card categorias */}
          <div
            className="w-full max-w-[86%] animate-fade-in rounded-[1rem] px-2 py-2 md:max-w-4xl md:rounded-[1.15rem] md:px-4 md:py-2"
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
        </div>

        {/* Endereço — fixado no rodapé do hero */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in flex items-center gap-1.5 text-[10px] font-medium text-white/45 transition-colors hover:text-white/75 md:text-xs"
          aria-label="Ver endereço no Google Maps"
        >
          <MapPin size={10} className="shrink-0 text-[#C8AA77]" />
          Av. Marginal Neblina, 1197 — Lot. Alaska, Araguaína - TO
        </a>
      </div>
    </section>
  );
};

export default Hero;
