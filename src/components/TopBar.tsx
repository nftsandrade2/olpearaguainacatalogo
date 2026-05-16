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

        <button
          onClick={() => scrollToSection("avaliacoes")}
          className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-[#C8AA77] transition-colors whitespace-nowrap"
          aria-label="77 avaliações no Google"
        >
          <Star size={12} fill="#C8AA77" stroke="#C8AA77" />
          <span style={{ letterSpacing: "0.05em" }}>
            77 avaliações no Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
