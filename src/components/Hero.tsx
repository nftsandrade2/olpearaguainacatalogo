const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5563991217070", "_blank");
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(16, 38, 59, 0.94)",
        borderBottom: "1px solid rgba(199, 166, 106, 0.10)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-[74px] items-center justify-between">
          {/* Navigation */}
          <nav className="flex items-center gap-5 md:gap-8 lg:gap-10">
            {[
              { label: "CONTATO", id: "contato" },
              { label: "LOCALIZAÇÃO", id: "localizacao" },
              { label: "QUEM SOMOS", id: "quem-somos" },
              { label: "AVALIAÇÕES", id: "avaliacoes" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs md:text-sm font-medium uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[#C7A66A]"
                style={{
                  color: "rgba(255,255,255,0.88)",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("localizacao")}
              className="rounded-full px-5 py-2.5 text-xs md:text-sm font-medium uppercase tracking-[0.08em] transition-all duration-300 hover:scale-[1.02]"
              style={{
                color: "#C7A66A",
                border: "1px solid rgba(199,166,106,0.40)",
                backgroundColor: "transparent",
              }}
            >
              COMO CHEGAR
            </button>

            <button
              onClick={openWhatsApp}
              className="rounded-full px-5 py-2.5 text-xs md:text-sm font-medium uppercase tracking-[0.08em] transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: "#C7A66A",
                color: "#10263B",
                boxShadow: "0 8px 18px rgba(199,166,106,0.16)",
              }}
            >
              FALAR NO WHATSAPP
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
