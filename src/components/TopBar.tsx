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
      <div className="container mx-auto flex h-[50px] items-center justify-between gap-3 px-4 md:h-[58px] md:px-6">
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

        <a
          href="https://www.google.com/maps/place/Olpe+-+Colch%C3%B5es+e+Sof%C3%A1s/@-7.2013099,-48.21995,17z/data=!4m15!1m8!3m7!1s0x92d90dc5761675f7:0x7b416bbe595d3d45!2sOlpe+-+Colch%C3%B5es+e+Sof%C3%A1s!8m2!3d-7.2013099!4d-48.21995!10e1!16s%2Fg%2F11wfpnvvwl!3m5!1s0x92d90dc5761675f7:0x7b416bbe595d3d45!8m2!3d-7.2013099!4d-48.21995!16s%2Fg%2F11wfpnvvwl?hl=en-BR&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold uppercase tracking-[0.08em] text-white md:hidden"
        >
          Como chegar
        </a>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="https://www.google.com/maps/place/Olpe+-+Colch%C3%B5es+e+Sof%C3%A1s/@-7.2013099,-48.21995,17z/data=!4m15!1m8!3m7!1s0x92d90dc5761675f7:0x7b416bbe595d3d45!2sOlpe+-+Colch%C3%B5es+e+Sof%C3%A1s!8m2!3d-7.2013099!4d-48.21995!10e1!16s%2Fg%2F11wfpnvvwl!3m5!1s0x92d90dc5761675f7:0x7b416bbe595d3d45!8m2!3d-7.2013099!4d-48.21995!16s%2Fg%2F11wfpnvvwl?hl=en-BR&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-300 hover:scale-[1.02] md:inline-flex"
            style={{
              backgroundColor: "transparent",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.35)",
            }}
          >
            Como chegar
          </a>

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
