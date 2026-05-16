import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      <section id="localizacao" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
              ONDE ESTAMOS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Visite nossa loja
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Endereço da loja — Cidade, Estado
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-primary shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Horário</h3>
                <p className="text-muted-foreground">
                  Seg – Sex: 9h às 19h<br />Sáb: 9h às 14h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
            FALE CONOSCO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8">
            Entre em contato
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Phone className="text-primary" size={20} />
              <span className="text-muted-foreground">(00) 0000-0000</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="text-primary" size={20} />
              <span className="text-muted-foreground">contato@olpe.com.br</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
