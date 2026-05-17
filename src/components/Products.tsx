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
  { name: "Sofá Elegance Premium", image: sofaImage1, attributes: "3 lugares • tecido premium" },
  { name: "Sofá Modular Comfort", image: sofaImage2, attributes: "modular • design moderno" },
  { name: "Sofá Luxo Velvet", image: sofaImage3, attributes: "veludo • detalhes gold" },
  { name: "Sofá Retrátil Bliss", image: sofaImage1, attributes: "retrátil • reclinável" },
  { name: "Sofá Linen Naturale", image: sofaImage2, attributes: "2 lugares • linho natural" },
  { name: "Sofá Chesterfield Royal", image: sofaImage3, attributes: "couro • capitonê clássico" },
];

const colchoes: Product[] = [
  { name: "Colchão Premium Comfort", image: colchaoImage1, attributes: "casal • pillow top" },
  { name: "Colchão Ortopédico Plus", image: colchaoImage2, attributes: "ortopédico • memory foam" },
  { name: "Colchão Luxury Spring", image: colchaoImage3, attributes: "molas ensacadas • matelassê" },
  { name: "Colchão Cloud Soft", image: colchaoImage1, attributes: "viscoelástico • macio" },
  { name: "Colchão Firm Support", image: colchaoImage2, attributes: "firme • alto suporte" },
  { name: "Colchão King Sleep", image: colchaoImage3, attributes: "king • alto conforto" },
];

const poltronas: Product[] = [
  { name: "Poltrona Classic Comfort", image: poltronaImage1, attributes: "clássica • madeira nobre" },
  { name: "Poltrona Modern Relax", image: poltronaImage2, attributes: "veludo • ergonômica" },
  { name: "Poltrona Vintage Leather", image: poltronaImage3, attributes: "couro • capitonê" },
  { name: "Poltrona Giratória Lounge", image: poltronaImage1, attributes: "giratória • premium" },
];

const camas: Product[] = [
  { name: "Cama Royal Collection", image: camaImage1, attributes: "king • cabeceira estofada" },
  { name: "Cama Platform Modern", image: camaImage2, attributes: "minimalista • madeira maciça" },
  { name: "Cama Luxury Tufted", image: camaImage3, attributes: "veludo • capitonê" },
  { name: "Cama Box Baú Premium", image: camaImage1, attributes: "box baú • amplo" },
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
    className={`py-14 md:py-20 ${bg === "muted" ? "bg-muted" : "bg-background"}`}
  >
    <div className="container mx-auto px-4">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3 md:mb-4">
          {title}
        </h2>
        <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <ProductGrid products={products} />

      <div className="flex justify-center mt-10 md:mt-12">
        <a
          href={moreModelsLink(ctaLabel)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-3 text-sm md:text-base font-medium transition-all hover:bg-primary/90 hover:shadow-lg"
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
