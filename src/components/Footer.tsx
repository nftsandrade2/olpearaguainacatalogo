import logoOlpe from "@/assets/logo-olpe.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logoOlpe} alt="Olpe" className="h-8 mb-4" />
            <p className="text-sm text-primary-foreground/80">
              Produtos criados com conceito francês para o seu conforto e bem-estar.
            </p>
          </div>
          <div>
            <h3 className="font-display font-bold mb-4">Produtos</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Sofás</li>
              <li>Colchões</li>
              <li>Camas</li>
              <li>Poltronas</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold mb-4">Contato</h3>
            <p className="text-sm text-primary-foreground/80">
              Entre em contato para conhecer nossa coleção completa.
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Olpe Colchões e Sofás. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
