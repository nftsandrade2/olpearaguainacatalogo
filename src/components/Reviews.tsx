import { Star } from "lucide-react";

const Reviews = () => {
  return (
    <section id="avaliacoes" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
          O QUE DIZEM SOBRE NÓS
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
          77 avaliações no Google
        </h2>
        <div className="flex items-center justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={22} fill="#C8AA77" stroke="#C8AA77" />
          ))}
        </div>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Nossos clientes reconhecem a qualidade, o conforto e o atendimento
          personalizado. Em breve, você poderá ler todas as avaliações por aqui.
        </p>
      </div>
    </section>
  );
};

export default Reviews;
