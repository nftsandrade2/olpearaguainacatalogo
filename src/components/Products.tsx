import ProductCarousel from "./ProductCarousel";
import sofaImage1 from "@/assets/sofa-1.jpg";
import sofaImage2 from "@/assets/sofa-2.jpg";
import sofaImage3 from "@/assets/sofa-3.jpg";
import colchaoImage1 from "@/assets/colchao-1.jpg";
import colchaoImage2 from "@/assets/colchao-2.jpg";
import colchaoImage3 from "@/assets/colchao-3.jpg";
import poltronaImage1 from "@/assets/poltrona-1.jpg";
import poltronaImage2 from "@/assets/poltrona-2.jpg";
import poltronaImage3 from "@/assets/poltrona-3.jpg";
import camaImage1 from "@/assets/cama-1.jpg";
import camaImage2 from "@/assets/cama-2.jpg";
import camaImage3 from "@/assets/cama-3.jpg";

const Products = () => {
  const sofas = [
    {
      name: "Sofá Elegance Premium",
      image: sofaImage1,
      description: "Design contemporâneo com tecido de alta qualidade e pés em madeira nobre",
      features: ["3 lugares", "Tecido premium", "Pés em madeira"],
    },
    {
      name: "Sofá Modular Comfort",
      image: sofaImage2,
      description: "Sofá em L modular com configuração flexível para qualquer ambiente",
      features: ["Modular", "Design moderno", "Conforto superior"],
    },
    {
      name: "Sofá Luxo Velvet",
      image: sofaImage3,
      description: "Sofá em veludo com detalhes em metal dourado para ambientes sofisticados",
      features: ["Veludo premium", "Detalhes gold", "Estilo luxuoso"],
    },
  ];

  const colchoes = [
    {
      name: "Colchão Premium Comfort",
      image: colchaoImage1,
      description: "Colchão premium com tecnologia de molas ensacadas e pillow top",
      features: ["Molas ensacadas", "Pillow top", "Anti-alérgico"],
    },
    {
      name: "Colchão Ortopédico Plus",
      image: colchaoImage2,
      description: "Suporte ortopédico com espuma de alta densidade e memory foam",
      features: ["Ortopédico", "Memory foam", "Alta durabilidade"],
    },
    {
      name: "Colchão Luxury Spring",
      image: colchaoImage3,
      description: "Colchão de molas de alta qualidade com acabamento em matelassê",
      features: ["Molas premium", "Matelassê", "Ventilação superior"],
    },
  ];

  const poltronas = [
    {
      name: "Poltrona Classic Comfort",
      image: poltronaImage1,
      description: "Poltrona clássica em tecido bege com pés de madeira natural",
      features: ["Design atemporal", "Confortável", "Madeira nobre"],
    },
    {
      name: "Poltrona Modern Relax",
      image: poltronaImage2,
      description: "Poltrona moderna em veludo cinza com design ergonômico",
      features: ["Ergonômica", "Veludo", "Estilo moderno"],
    },
    {
      name: "Poltrona Vintage Leather",
      image: poltronaImage3,
      description: "Poltrona em couro legítimo com capitonê e estilo vintage",
      features: ["Couro legítimo", "Capitonê", "Vintage"],
    },
  ];

  const camas = [
    {
      name: "Cama Royal Collection",
      image: camaImage1,
      description: "Cama king size com cabeceira estofada e gavetas para armazenamento",
      features: ["King size", "Com gavetas", "Cabeceira estofada"],
    },
    {
      name: "Cama Platform Modern",
      image: camaImage2,
      description: "Cama plataforma com design minimalista e estrutura em madeira",
      features: ["Design clean", "Madeira maciça", "Estilo minimalista"],
    },
    {
      name: "Cama Luxury Tufted",
      image: camaImage3,
      description: "Cama de luxo com cabeceira capitonê em veludo e detalhes sofisticados",
      features: ["Cabeceira capitonê", "Veludo luxo", "Design elegante"],
    },
  ];

  return (
    <div className="bg-background">
      {/* Sofás Section */}
      <section id="sofas" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Sofás
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra nossa coleção exclusiva de sofás com design francês
            </p>
          </div>
          <ProductCarousel products={sofas} />
        </div>
      </section>

      {/* Colchões Section */}
      <section id="colchoes" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Colchões
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Qualidade premium para o seu descanso perfeito
            </p>
          </div>
          <ProductCarousel products={colchoes} />
        </div>
      </section>

      {/* Poltronas Section */}
      <section id="poltronas" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Poltronas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elegância e conforto para qualquer ambiente
            </p>
          </div>
          <ProductCarousel products={poltronas} />
        </div>
      </section>

      {/* Camas Section */}
      <section id="camas" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Camas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Base perfeita para noites de descanso completo
            </p>
          </div>
          <ProductCarousel products={camas} />
        </div>
      </section>
    </div>
  );
};

export default Products;
