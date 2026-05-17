const TopBar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className="fixed left-0 top-0 z-50 w-full text-xs"
      style={{
        backgroundColor: "rgba(13, 79, 122, 0.96)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
      }}
    >
      <div className="container mx-auto flex h-[54px] items-center justify-between gap-3 px-4 md:h-[60px] md:px-6">
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { label: "Contato", id: "contato" },
            { label: "Localização", id: "localizacao" },
            { label: "Quem Somos", id: "sobre" },
            { label: "Avaliações", id: "avaliacoes" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-semibold uppercase tracking-[0.08em] text-white/90 transition-colors duration-300 hover:text-[#D6B67A]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollToSection("localizacao")}
          className="text-xs font-bold uppercase tracking-[0.08em] text-white md:hidden"
        >
          Como chegar
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection("localizacao")}
            className="hidden rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-300 hover:scale-[1.02] md:inline-flex"
            style={{
              backgroundColor: "rgba(248, 247, 243, 0.96)",
              color: "#0D4F7A",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            Como chegar
          </button>

          <a
            href="https://wa.me/5563991217070"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-all duration-300 hover:scale-[1.02] md:px-5 md:text-sm"
            style={{
              backgroundColor: "rgba(248, 247, 243, 0.96)",
              color: "#0D4F7A",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
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
