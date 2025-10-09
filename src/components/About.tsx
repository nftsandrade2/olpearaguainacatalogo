const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">
              NOSSA HISTÓRIA
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Uma história de paixão por fornecer conforto e qualidade para todos os lares.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Encontre os melhores produtos para o seu lar, desde colchões, sofás até
              poltronas. Nossa missão é proporcionar o máximo de conforto e beleza para o
              seu espaço com melhor preço e qualidade. Explore nossa coleção e
              encontre a combinação perfeita para o seu estilo de vida.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
