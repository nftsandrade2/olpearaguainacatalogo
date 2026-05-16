import { Star } from "lucide-react";

const TopBar = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Contato", id: "contato" },
    { label: "Localização", id: "localizacao" },
    { label: "Quem Somos", id: "sobre" },
    { label: "Avaliações", id: "avaliacoes" },
  ];

  return (
    <div
      className="w-full fixed top-0 left-0 z-50 text-xs"
      style={{
        backgroundColor: "rgba(12, 26, 42, 0.92)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(200, 170, 119, 0.18)",
      }}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <nav className="flex items-center gap-4 md:gap-6 overflow-x-auto">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToSection(l.id)}
              className="text-white/80 hover:text-[#C8AA77] transition-colors tracking-wider uppercase whitespace-nowrap"
              style={{ letterSpacing: "0.08em" }}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => scrollToSection("avaliacoes")}
            className="hidden md:flex items-center gap-1.5 text-white/90 hover:text-[#C8AA77] transition-colors whitespace-nowrap"
            aria-label="77 avaliações no Google"
          >
            <Star size={12} fill="#C8AA77" stroke="#C8AA77" />
            <span style={{ letterSpacing: "0.05em" }}>77 avaliações no Google</span>
          </button>

          <button
            onClick={() => scrollToSection("localizacao")}
            className="hidden sm:inline-flex items-center px-3 py-1 rounded-full uppercase tracking-wider transition-all hover:scale-105 whitespace-nowrap"
            style={{
              border: "1px solid rgba(200, 170, 119, 0.5)",
              color: "#C8AA77",
              letterSpacing: "0.1em",
            }}
          >
            Como chegar
          </button>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 rounded-full uppercase tracking-wider transition-all hover:scale-105 whitespace-nowrap font-medium"
            style={{
              backgroundColor: "#C8AA77",
              color: "#0C1A2A",
              letterSpacing: "0.1em",
              boxShadow: "0 2px 12px rgba(200, 170, 119, 0.3)",
            }}
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
