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
        backgroundColor: "rgba(245, 242, 236, 0.96)",
        borderBottom: "1px solid rgba(12, 26, 42, 0.08)",
        boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
      }}
    >
      <div className="container mx-auto flex h-[64px] items-center justify-between gap-4 px-4 md:px-6">
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
              className="text-sm font-semibold uppercase tracking-[0.08em] text-[#10263B] transition-colors duration-300 hover:text-[#9F7D46]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollToSection("contato")}
          className="text-xs font-semibold uppercase tracking-[0.08em] text-[#10263B] md:hidden"
        >
          Contato
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection("localizacao")}
            className="hidden rounded-full border border-[#C7A66A]/50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#10263B] transition-all duration-300 hover:bg-[#C7A66A]/10 md:inline-flex"
          >
            Como chegar
          </button>

          <a
            href="https://wa.me/5563991217070"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#10263B] px-5 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#183A59] md:text-sm"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
