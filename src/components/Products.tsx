import { MessageCircle } from "lucide-react";
import ProductGrid, { type Product } from "./ProductGrid";
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

const WHATSAPP_NUMBER = "5563991217070";
const moreModelsLink = (category: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá, gostaria de ver mais modelos de ${category}.`
  )}`;

const sofas: Product[] = [
  {
    name: "Sofá Elegance Premium",
    image: sofaImage1,
    description: "Design contemporâneo com tecido de alta qualidade e pés em madeira nobre.",
    features: ["3 lugares", "Tecido premium", "Madeira nobre"],
  },
  {
    name: "Sofá Modular Comfort",
    image: sofaImage2,
    description: "Sofá em L modular com configuração flexível para qualquer ambiente.",
    features: ["Modular", "Design moderno", "Alto conforto"],
  },
  {
    name: "Sofá Luxo Velvet",
    image: sofaImage3,
    description: "Veludo com detalhes em metal dourado para ambientes sofisticados.",
    features: ["Veludo", "Detalhes gold", "Luxuoso"],
  },
  {
    name: "Sofá Retrátil Bliss",
    image: sofaImage1,
    description: "Assentos retráteis e encosto reclinável para máximo relaxamento.",
    features: ["Retrátil", "Reclinável", "Ergonômico"],
  },
  {
    name: "Sofá Linen Naturale",
    image: sofaImage2,
    description: "Linho natural com acabamento artesanal e estrutura reforçada.",
    features: ["Linho", "Artesanal", "2 lugares"],
  },
  {
    name: "Sofá Chesterfield Royal",
    image: sofaImage3,
    description: "Capitonê clássico em couro com inspiração inglesa atemporal.",
    features: ["Capitonê", "Couro", "Clássico"],
  },
];

const colchoes: Product[] = [
  {
    name: "Colchão Premium Comfort",
    image: colchaoImage1,
    description: "Molas ensacadas e pillow top para um descanso superior.",
    features: ["Molas ensacadas", "Pillow top", "Anti-alérgico"],
  },
  {
    name: "Colchão Ortopédico Plus",
    image: colchaoImage2,
    description: "Suporte ortopédico com espuma de alta densidade e memory foam.",
    features: ["Ortopédico", "Memory foam", "Durável"],
  },
  {
    name: "Colchão Luxury Spring",
    image: colchaoImage3,
    description: "Molas de alta qualidade com acabamento em matelassê refinado.",
    features: ["Molas premium", "Matelassê", "Ventilação"],
  },
  {
    name: "Colchão Cloud Soft",
    image: colchaoImage1,
    description: "Sensação de nuvem com camadas de espuma viscoelástica avançada.",
    features: ["Viscoelástico", "Macio", "Conforto plus"],
  },
  {
    name: "Colchão Firm Support",
    image: colchaoImage2,
    description: "Firmeza ideal para suporte da coluna e postura correta.",
    features: ["Firme", "Suporte total", "Ergonômico"],
  },
];

const poltronas: Product[] = [
  {
    name: "Poltrona Classic Comfort",
    image: poltronaImage1,
    description: "Poltrona clássica em tecido bege com pés de madeira natural.",
    features: ["Atemporal", "Confortável", "Madeira"],
  },
  {
    name: "Poltrona Modern Relax",
    image: poltronaImage2,
    description: "Design ergonômico em veludo cinza para ambientes modernos.",
    features: ["Ergonômica", "Veludo", "Moderna"],
  },
  {
    name: "Poltrona Vintage Leather",
    image: poltronaImage3,
    description: "Couro legítimo com capitonê e charme vintage marcante.",
    features: ["Couro", "Capitonê", "Vintage"],
  },
  {
    name: "Poltrona Giratória Lounge",
    image: poltronaImage1,
    description: "Base giratória 360° para leitura e momentos de descanso.",
    features: ["Giratória", "Lounge", "Premium"],
  },
];

const camas: Product[] = [
  {
    name: "Cama Royal Collection",
    image: camaImage1,
    description: "King size com cabeceira estofada e gavetas para armazenamento.",
    features: ["King size", "Com gavetas", "Estofada"],
  },
  {
    name: "Cama Platform Modern",
    image: camaImage2,
    description: "Plataforma com design minimalista e estrutura em madeira maciça.",
    features: ["Minimalista", "Madeira maciça", "Clean"],
  },
  {
    name: "Cama Luxury Tufted",
    image: camaImage3,
    description: "Cabeceira capitonê em veludo com detalhes sofisticados.",
    features: ["Capitonê", "Veludo", "Luxo"],
  },
  {
    name: "Cama Box Baú Premium",
    image: camaImage1,
    description: "Box baú com amplo espaço interno e acabamento refinado.",
    features: ["Box baú", "Amplo", "Refinado"],
  },
];

interface CategorySectionProps {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
  ctaLabel: string;
  bg?: "default" | "muted";
}

const CategorySection = ({
  id,
  title,
  subtitle,
  products,
  ctaLabel,
  bg = "default",
}: CategorySectionProps) => (
  <section
    id={id}
    className={`py-20 ${bg === "muted" ? "bg-muted" : "bg-background"}`}
  >
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <ProductGrid products={products} />

      <div className="flex justify-center mt-12">
        <a
          href={moreModelsLink(ctaLabel)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm md:text-base font-medium transition-all hover:bg-primary/90 hover:shadow-lg"
        >
          <MessageCircle size={18} strokeWidth={2} />
          Ver mais modelos no WhatsApp
        </a>
      </div>
    </div>
  </section>
);

const Products = () => {
  return (
    <div>
      <CategorySection
        id="sofas"
        title="Sofás"
        subtitle="Coleção exclusiva com design contemporâneo e acabamento refinado."
        products={sofas}
        ctaLabel="sofás"
      />
      <CategorySection
        id="colchoes"
        title="Colchões"
        subtitle="Qualidade premium para o seu descanso perfeito todas as noites."
        products={colchoes}
        ctaLabel="colchões"
        bg="muted"
      />
      <CategorySection
        id="poltronas"
        title="Poltronas"
        subtitle="Elegância e conforto para compor qualquer ambiente."
        products={poltronas}
        ctaLabel="poltronas"
      />
      <CategorySection
        id="camas"
        title="Camas"
        subtitle="Estrutura perfeita para noites de sono verdadeiramente completas."
        products={camas}
        ctaLabel="camas"
        bg="muted"
      />
    </div>
  );
};

export default Products;
