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

const sofaGallery = [sofaImage1, sofaImage2, sofaImage3];
const colchaoGallery = [colchaoImage1, colchaoImage2, colchaoImage3];
const poltronaGallery = [poltronaImage1, poltronaImage2, poltronaImage3];
const camaGallery = [camaImage1, camaImage2, camaImage3];

const sofas: Product[] = [
  {
    name: "Sofá Elegance Premium",
    image: sofaImage1,
    attributes: "3 lugares • tecido premium",
    description:
      "Sofá de linhas contemporâneas com estofamento generoso, ideal para salas que pedem conforto e sofisticação.",
    gallery: sofaGallery,
    features: {
      material: "Tecido premium anti-manchas",
      tamanho: "2,10m • 3 lugares",
      conforto: "Assento alta densidade",
      acabamento: "Costuras reforçadas",
    },
  },
  {
    name: "Sofá Modular Comfort",
    image: sofaImage2,
    attributes: "modular • design moderno",
    description:
      "Composição modular que se adapta ao seu ambiente, perfeita para integrar conforto e estilo.",
    gallery: sofaGallery,
    features: {
      material: "Veludo italiano",
      tamanho: "2,80m modular",
      conforto: "Espuma D33 premium",
      acabamento: "Pés em madeira nobre",
    },
  },
  {
    name: "Sofá Luxo Velvet",
    image: sofaImage3,
    attributes: "veludo • detalhes gold",
    description:
      "Elegância em cada detalhe com veludo macio e acabamentos dourados sob medida.",
    gallery: sofaGallery,
    features: {
      material: "Veludo premium",
      tamanho: "2,40m • 3 lugares",
      conforto: "Encosto ergonômico",
      acabamento: "Detalhes em dourado",
    },
  },
  {
    name: "Sofá Retrátil Bliss",
    image: sofaImage1,
    attributes: "retrátil • reclinável",
    description:
      "Mecanismo retrátil e reclinável para máximo relaxamento sem abrir mão do design.",
    gallery: sofaGallery,
    features: {
      material: "Suede premium",
      tamanho: "2,20m retrátil",
      conforto: "Reclinável multi-posição",
      acabamento: "Trilhos silenciosos",
    },
  },
  {
    name: "Sofá Linen Naturale",
    image: sofaImage2,
    attributes: "2 lugares • linho natural",
    description:
      "Composição leve em linho natural, ideal para ambientes integrados e cheios de luz.",
    gallery: sofaGallery,
    features: {
      material: "Linho 100% natural",
      tamanho: "1,80m • 2 lugares",
      conforto: "Almofadas soltas",
      acabamento: "Costura francesa",
    },
  },
  {
    name: "Sofá Chesterfield Royal",
    image: sofaImage3,
    attributes: "couro • capitonê clássico",
    description:
      "Clássico atemporal em couro com capitonê artesanal, peça-chave para ambientes premium.",
    gallery: sofaGallery,
    features: {
      material: "Couro legítimo",
      tamanho: "2,30m • 3 lugares",
      conforto: "Estrutura reforçada",
      acabamento: "Capitonê manual",
    },
  },
];

const colchoes: Product[] = [
  {
    name: "Colchão Premium Comfort",
    image: colchaoImage1,
    attributes: "casal • pillow top",
    description:
      "Pillow top exclusivo para noites de sono profundas e renovadoras.",
    gallery: colchaoGallery,
    features: {
      material: "Espuma D45 + pillow top",
      tamanho: "Casal 138x188cm",
      conforto: "Médio-macio",
      acabamento: "Tecido knit premium",
    },
  },
  {
    name: "Colchão Ortopédico Plus",
    image: colchaoImage2,
    attributes: "ortopédico • memory foam",
    description:
      "Suporte ortopédico com memory foam que se adapta ao corpo e alivia pontos de pressão.",
    gallery: colchaoGallery,
    features: {
      material: "Memory foam alta densidade",
      tamanho: "Diversos tamanhos",
      conforto: "Firme ortopédico",
      acabamento: "Tecido antialérgico",
    },
  },
  {
    name: "Colchão Luxury Spring",
    image: colchaoImage3,
    attributes: "molas ensacadas • matelassê",
    description:
      "Molas ensacadas individuais para distribuição perfeita do peso e máximo conforto.",
    gallery: colchaoGallery,
    features: {
      material: "Molas ensacadas + látex",
      tamanho: "Queen 158x198cm",
      conforto: "Equilibrado",
      acabamento: "Matelassê acetinado",
    },
  },
  {
    name: "Colchão Cloud Soft",
    image: colchaoImage1,
    attributes: "viscoelástico • macio",
    description:
      "Sensação de leveza graças à camada viscoelástica de alta performance.",
    gallery: colchaoGallery,
    features: {
      material: "Viscoelástico",
      tamanho: "Casal e queen",
      conforto: "Macio premium",
      acabamento: "Tecido respirável",
    },
  },
  {
    name: "Colchão Firm Support",
    image: colchaoImage2,
    attributes: "firme • alto suporte",
    description:
      "Estrutura firme para quem precisa de suporte máximo durante o descanso.",
    gallery: colchaoGallery,
    features: {
      material: "Espuma alta densidade",
      tamanho: "Diversos tamanhos",
      conforto: "Firme",
      acabamento: "Bordas reforçadas",
    },
  },
  {
    name: "Colchão King Sleep",
    image: colchaoImage3,
    attributes: "king • alto conforto",
    description:
      "Tamanho king-size com tecnologia premium para um sono verdadeiramente luxuoso.",
    gallery: colchaoGallery,
    features: {
      material: "Molas + pillow top duplo",
      tamanho: "King 193x203cm",
      conforto: "Alto conforto",
      acabamento: "Pillow euro premium",
    },
  },
];

const poltronas: Product[] = [
  {
    name: "Poltrona Classic Comfort",
    image: poltronaImage1,
    attributes: "clássica • madeira nobre",
    description:
      "Design clássico em madeira nobre, perfeita para compor cantos de leitura sofisticados.",
    gallery: poltronaGallery,
    features: {
      material: "Madeira nobre + tecido",
      tamanho: "0,80x0,90m",
      conforto: "Acolchoamento médio",
      acabamento: "Verniz natural",
    },
  },
  {
    name: "Poltrona Modern Relax",
    image: poltronaImage2,
    attributes: "veludo • ergonômica",
    description:
      "Linhas modernas e veludo premium com ergonomia pensada para horas de relaxamento.",
    gallery: poltronaGallery,
    features: {
      material: "Veludo premium",
      tamanho: "0,85x0,95m",
      conforto: "Ergonômica",
      acabamento: "Pés metálicos",
    },
  },
  {
    name: "Poltrona Vintage Leather",
    image: poltronaImage3,
    attributes: "couro • capitonê",
    description:
      "Charme vintage em couro legítimo com capitonê artesanal e acabamento atemporal.",
    gallery: poltronaGallery,
    features: {
      material: "Couro legítimo",
      tamanho: "0,90x1,00m",
      conforto: "Encosto alto",
      acabamento: "Capitonê manual",
    },
  },
  {
    name: "Poltrona Giratória Lounge",
    image: poltronaImage1,
    attributes: "giratória • premium",
    description:
      "Base giratória 360º com conforto premium, ideal para ambientes contemporâneos.",
    gallery: poltronaGallery,
    features: {
      material: "Tecido bouclé",
      tamanho: "0,85x0,90m",
      conforto: "Giratória 360º",
      acabamento: "Base em aço escovado",
    },
  },
];

const camas: Product[] = [
  {
    name: "Cama Royal Collection",
    image: camaImage1,
    attributes: "king • cabeceira estofada",
    description:
      "Cabeceira estofada imponente e estrutura robusta para suítes que pedem presença.",
    gallery: camaGallery,
    features: {
      material: "Madeira maciça + estofado",
      tamanho: "King 193x203cm",
      conforto: "Cabeceira acolchoada",
      acabamento: "Tecido premium",
    },
  },
  {
    name: "Cama Platform Modern",
    image: camaImage2,
    attributes: "minimalista • madeira maciça",
    description:
      "Linhas limpas em madeira maciça, perfeita para ambientes de estética minimalista.",
    gallery: camaGallery,
    features: {
      material: "Madeira maciça",
      tamanho: "Queen e king",
      conforto: "Plataforma firme",
      acabamento: "Verniz fosco",
    },
  },
  {
    name: "Cama Luxury Tufted",
    image: camaImage3,
    attributes: "veludo • capitonê",
    description:
      "Capitonê em veludo para um quarto principal com aura de luxo e sofisticação.",
    gallery: camaGallery,
    features: {
      material: "Veludo premium",
      tamanho: "King 193x203cm",
      conforto: "Cabeceira capitonê",
      acabamento: "Botões revestidos",
    },
  },
  {
    name: "Cama Box Baú Premium",
    image: camaImage1,
    attributes: "box baú • amplo",
    description:
      "Box com baú espaçoso, unindo praticidade e design para suítes funcionais.",
    gallery: camaGallery,
    features: {
      material: "Estrutura reforçada",
      tamanho: "Casal e queen",
      conforto: "Box firme",
      acabamento: "Pistão à gás",
    },
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
    </div>
  </section>
);

const Products = () => {
  return (
    <div>
      <CategorySection
        id="colchoes"
        title="Colchões"
        subtitle="Qualidade premium para o seu descanso perfeito todas as noites."
        products={colchoes}
        ctaLabel="colchões"
      />
      <CategorySection
        id="sofas"
        title="Sofás"
        subtitle="Coleção exclusiva com design contemporâneo e acabamento refinado."
        products={sofas}
        ctaLabel="sofás"
        bg="muted"
      />
      <CategorySection
        id="camas"
        title="Camas"
        subtitle="Estrutura perfeita para noites de sono verdadeiramente completas."
        products={camas}
        ctaLabel="camas"
      />
      <CategorySection
        id="poltronas"
        title="Poltronas"
        subtitle="Elegância e conforto para compor qualquer ambiente."
        products={poltronas}
        ctaLabel="poltronas"
        bg="muted"
      />
    </div>
  );
};

export default Products;
