import ProductGrid, { type Product } from "./ProductGrid";

const BASE = "https://raw.githubusercontent.com/nftsandrade2/olpearaguainacatalogo/main/public/imagens";

// ─── SOFÁS ───────────────────────────────────────────────────────────────────
const sofas: Product[] = [
  {
    name: "Sofá Champs",
    image: `${BASE}/sofas/sofa-cama-champs-01.webp`,
    attributes: "retrátil • tecido premium",
    description:
      "Sofá retrátil com tecido premium e linhas contemporâneas, ideal para ambientes que pedem conforto e sofisticação.",
    gallery: [
      `${BASE}/sofas/sofa-cama-champs-01.webp`,
      `${BASE}/sofas/sofa-cama-champs-02.webp`,
      `${BASE}/sofas/sofa-cama-champs-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Sofá De Ville",
    image: `${BASE}/sofas/sofa-cama-de-ville-01.webp`,
    attributes: "tecido + couro • design moderno",
    description: "Combinação refinada de tecido e couro com braço diferenciado, peça-chave para salas contemporâneas.",
    gallery: [
      `${BASE}/sofas/sofa-cama-de-ville-01.webp`,
      `${BASE}/sofas/sofa-cama-de-ville-02.webp`,
      `${BASE}/sofas/sofa-cama-de-ville-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Sofá Versalhes",
    image: `${BASE}/sofas/sofa-cama-versalhes-01.webp`,
    attributes: "clássico • estofado premium",
    description:
      "Design clássico com estofamento generoso e acabamento sofisticado, perfeito para ambientes elegantes.",
    gallery: [
      `${BASE}/sofas/sofa-cama-versalhes-01.webp`,
      `${BASE}/sofas/sofa-cama-versalhes-02.webp`,
      `${BASE}/sofas/sofa-cama-versalhes-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Sofá Conect Sally",
    image: `${BASE}/sofas/sofa-conect-sally-01.webp`,
    attributes: "modular • design contemporâneo",
    description:
      "Sofá modular com peças soltas e linhas contemporâneas, ideal para compor ambientes amplos e sofisticados.",
    gallery: [
      `${BASE}/sofas/sofa-conect-sally-01.webp`,
      `${BASE}/sofas/sofa-conect-sally-02.webp`,
      `${BASE}/sofas/sofa-conect-sally-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Sofá Maison",
    image: `${BASE}/sofas/sofa-maison-01.webp`,
    attributes: "elegante • acabamento refinado",
    description: "Sofá com design refinado e linhas elegantes, perfeito para salas que valorizam sofisticação.",
    gallery: [
      `${BASE}/sofas/sofa-maison-01.webp`,
      `${BASE}/sofas/sofa-maison-02.webp`,
      `${BASE}/sofas/sofa-maison-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Sofá Milano",
    image: `${BASE}/sofas/sofa-milano-01.webp`,
    attributes: "italiano • design moderno",
    description: "Inspiração italiana com linhas modernas e conforto premium para ambientes contemporâneos.",
    gallery: [
      `${BASE}/sofas/sofa-milano-01.webp`,
      `${BASE}/sofas/sofa-milano-02.webp`,
      `${BASE}/sofas/sofa-milano-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Sofá Orfeu",
    image: `${BASE}/sofas/sofa-orfeu-01.webp`,
    attributes: "retrátil reclinável • alto conforto",
    description: "Sofá retrátil e reclinável com encostos generosos e capitonê suave, pensado para máximo relaxamento.",
    gallery: [
      `${BASE}/sofas/sofa-orfeu-01.webp`,
      `${BASE}/sofas/sofa-orfeu-02.webp`,
      `${BASE}/sofas/sofa-orfeu-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Sofá Orsay",
    image: `${BASE}/sofas/sofa-orsay-02.webp`,
    attributes: "contemporâneo • conforto",
    description: "Design contemporâneo com acabamento refinado e conforto para o dia a dia.",
    gallery: [`${BASE}/sofas/sofa-orsay-02.webp`, `${BASE}/sofas/sofa-orsay-03.webp`],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Sofá Penny",
    image: `${BASE}/sofas/sofa-penny-01.webp`,
    attributes: "moderno • versátil",
    description: "Sofá versátil com design moderno e conforto para toda a família.",
    gallery: [`${BASE}/sofas/sofa-penny-01.webp`, `${BASE}/sofas/sofa-penny-02.webp`],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Sofá Torino",
    image: `${BASE}/sofas/sofa-torino-01.webp`,
    attributes: "2 lugares • capitonê clássico",
    description: "Design clássico com acabamento sofisticado e pés em madeira, perfeito para ambientes elegantes.",
    gallery: [
      `${BASE}/sofas/sofa-torino-01.webp`,
      `${BASE}/sofas/sofa-torino-2.webp`,
      `${BASE}/sofas/sofa-torino-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Sofá Viena",
    image: `${BASE}/sofas/sofa-viena-01.webp`,
    attributes: "retrátil • assentos amplos",
    description:
      "Sofá retrátil com assentos generosos e capitonê suave, oferecendo conforto envolvente para toda a família.",
    gallery: [
      `${BASE}/sofas/sofa-viena-01.webp`,
      `${BASE}/sofas/sofa-viena-02.webp`,
      `${BASE}/sofas/sofa-viena-03.webp`,
      `${BASE}/sofas/sofa-viena-04.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
];

// ─── COLCHÕES ─────────────────────────────────────────────────────────────────
const colchoes: Product[] = [
  {
    name: "Colchão Beverly Visco Gel",
    image: `${BASE}/colchoes/beverly-visco-gel-01.webp`,
    attributes: "visco gel • conforto térmico",
    description: "Tecnologia visco gel que proporciona sensação de frescor e adaptação ao corpo durante toda a noite.",
    gallery: [
      `${BASE}/colchoes/beverly-visco-gel-01.webp`,
      `${BASE}/colchoes/beverly-visco-gel-02.webp`,
      `${BASE}/colchoes/beverly-viscogel-01.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Box Solteiro com Auxiliar",
    image: `${BASE}/colchoes/box-solteiro-com-auxiliar-01.webp`,
    attributes: "solteiro • com auxiliar",
    description: "Solução prática com cama auxiliar embutida, ideal para quartos de hóspedes e espaços funcionais.",
    gallery: [
      `${BASE}/colchoes/box-solteiro-com-auxiliar-01.webp`,
      `${BASE}/colchoes/box-solteiro-com-auxiliar-02.webp`,
      `${BASE}/colchoes/box-solteiro-com-auxiliar-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Colchão Essen Strong",
    image: `${BASE}/colchoes/essen-strong-01.webp`,
    attributes: "firme • alto suporte",
    description:
      "Estrutura robusta com suporte firme, indicada para quem precisa de máxima sustentação durante o descanso.",
    gallery: [`${BASE}/colchoes/essen-strong-01.webp`, `${BASE}/colchoes/essen-strong-02.webp`],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Colchão Germain Pocket Visco",
    image: `${BASE}/colchoes/geman-pocket-visco-01.webp`,
    attributes: "molas pocket • visco",
    description:
      "Combinação de molas ensacadas pocket com camada viscoelástica para suporte individualizado e conforto superior.",
    gallery: [`${BASE}/colchoes/geman-pocket-visco-01.webp`, `${BASE}/colchoes/german-pocket-visco-02.webp`],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Colchão Germain Multi Visco",
    image: `${BASE}/colchoes/germain-multi-visco-01.webp`,
    attributes: "multi visco • premium",
    description: "Múltiplas camadas viscoelásticas para adaptação perfeita ao corpo e descanso profundo.",
    gallery: [`${BASE}/colchoes/germain-multi-visco-01.webp`],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Colchão Louvre Multilastic",
    image: `${BASE}/colchoes/louvre-multilastic-01.webp`,
    attributes: "multilastic • conforto",
    description: "Tecnologia multilastic para distribuição uniforme do peso e máximo conforto durante o sono.",
    gallery: [`${BASE}/colchoes/louvre-multilastic-01.webp`, `${BASE}/colchoes/louvre-multilastic-02.webp`],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Colchão Louvre Pocket",
    image: `${BASE}/colchoes/louvre-pocket-01.webp`,
    attributes: "molas pocket • conforto premium",
    description:
      "Colchão com molas ensacadas pocket e acabamento sofisticado, oferecendo suporte individualizado e noites verdadeiramente confortáveis.",
    gallery: [
      `${BASE}/colchoes/louvre-pocket-01.webp`,
      `${BASE}/colchoes/louvre-pocket-02.webp`,
      `${BASE}/colchoes/louvre-pocket-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Colchão Lübeck HR",
    image: `${BASE}/colchoes/lubeck-hr-01.webp`,
    attributes: "HR • alto suporte",
    description: "Espuma de alta resiliência para suporte firme e durabilidade superior em qualquer posição de sono.",
    gallery: [
      `${BASE}/colchoes/lubeck-hr-01.webp`,
      `${BASE}/colchoes/lubeck-hr-02.webp`,
      `${BASE}/colchoes/lubeck-hr-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Colchão Lübeck Visco",
    image: `${BASE}/colchoes/lubeck-visco-01.webp`,
    attributes: "visco premium • alto suporte",
    description:
      "Colchão visco premium que combina suporte firme e conforto envolvente para noites verdadeiramente restauradoras.",
    gallery: [
      `${BASE}/colchoes/lubeck-visco-01.webp`,
      `${BASE}/colchoes/lubeck-visco-02.webp`,
      `${BASE}/colchoes/lubeck-visco-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Colchão Verano Gel",
    image: `${BASE}/colchoes/verano-gel-01.webp`,
    attributes: "tecnologia gel • frescor",
    description:
      "Tecnologia gel que proporciona sensação de frescor durante toda a noite, ideal para quem busca conforto térmico.",
    gallery: [
      `${BASE}/colchoes/verano-gel-01.webp`,
      `${BASE}/colchoes/verano-gel-02.webp`,
      `${BASE}/colchoes/verano-gel-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Colchão Vicky Visco",
    image: `${BASE}/colchoes/vicky-visco-01.webp`,
    attributes: "viscoelástico • adaptável",
    description: "Camada viscoelástica que se adapta ao corpo aliviando pontos de pressão para um descanso renovador.",
    gallery: [`${BASE}/colchoes/vicky-visco-01.webp`, `${BASE}/colchoes/vicky-visco-02.webp`],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Colchão Viena Sky",
    image: `${BASE}/colchoes/viena-sky-01.webp`,
    attributes: "pillow top • alto conforto",
    description:
      "Colchão com pillow top generoso e acabamento matelassê, pensado para máximo conforto e descanso profundo.",
    gallery: [`${BASE}/colchoes/viena-sky-01.webp`],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Colchão Vienne Sky HR",
    image: `${BASE}/colchoes/vienne-sky-hr-01.webp`,
    attributes: "HR • alto conforto",
    description: "Alta resiliência com pillow top para noites de sono profundas e confortáveis.",
    gallery: [
      `${BASE}/colchoes/vienne-sky-hr-01.webp`,
      `${BASE}/colchoes/vienne-sky-hr-02.webp`,
      `${BASE}/colchoes/vienne-sky-hr-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Colchão Vienny Sky HR",
    image: `${BASE}/colchoes/vienny-sky-hr-01.webp`,
    attributes: "HR premium • conforto",
    description: "Tecnologia HR premium para suporte e conforto ideais em todas as posições de sono.",
    gallery: [`${BASE}/colchoes/vienny-sky-hr-01.webp`],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Colchão Vienny Sky Visco",
    image: `${BASE}/colchoes/vienny-sky-visco-01.webp`,
    attributes: "viscoelástico • adaptável",
    description: "Camada viscoelástica que se adapta ao corpo aliviando pontos de pressão para um descanso renovador.",
    gallery: [
      `${BASE}/colchoes/vienny-sky-visco-01.webp`,
      `${BASE}/colchoes/vienny-sky-visco-02.webp`,
      `${BASE}/colchoes/vienny-sky-visco-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
];

// ─── CAMAS ────────────────────────────────────────────────────────────────────
const camas: Product[] = [
  {
    name: "Cama Lyon",
    image: `${BASE}/camas/cama-lyon-01.webp`,
    attributes: "estofada • design elegante",
    description: "Cama estofada com linhas elegantes e cabeceira acolchoada, ideal para quartos sofisticados.",
    gallery: [
      `${BASE}/camas/cama-lyon-01.webp`,
      `${BASE}/camas/cama-lyon-02.webp`,
      `${BASE}/camas/cama-lyon-03.webp`,
      `${BASE}/camas/cama-lyon-04.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Cama Supreme",
    image: `${BASE}/camas/cama-supreme-01.webp`,
    attributes: "premium • cabeceira imponente",
    description:
      "Cama com cabeceira imponente e estrutura robusta, perfeita para suítes que pedem presença e sofisticação.",
    gallery: [
      `${BASE}/camas/cama-supreme-01.webp`,
      `${BASE}/camas/cama-supreme-02.webp`,
      `${BASE}/camas/cama-supreme-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
];

// ─── POLTRONAS ────────────────────────────────────────────────────────────────
const poltronas: Product[] = [
  {
    name: "Poltrona do Papai",
    image: `${BASE}/poltronas/poltrona-do-papai-01.webp`,
    attributes: "clássica • alto conforto",
    description: "Clássica poltrona do papai com encosto alto e estofamento generoso, ideal para horas de relaxamento.",
    gallery: [`${BASE}/poltronas/poltrona-do-papai-01.webp`, `${BASE}/poltronas/poltrona-do-papai-02.webp`],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Poltrona Elegance",
    image: `${BASE}/poltronas/poltrona-elegance-01.webp`,
    attributes: "design elegante • premium",
    description: "Poltrona com design elegante e acabamento premium, perfeita para compor ambientes sofisticados.",
    gallery: [`${BASE}/poltronas/poltrona-elegance-01.webp`],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Poltrona Fleur",
    image: `${BASE}/poltronas/poltrona-fleur-01.webp`,
    attributes: "moderna • delicada",
    description: "Design moderno com linhas delicadas e acabamento refinado para ambientes contemporâneos.",
    gallery: [`${BASE}/poltronas/poltrona-fleur-01.webp`],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Poltrona Malibu",
    image: `${BASE}/poltronas/poltrona-malibu-01.webp`,
    attributes: "moderna • conforto premium",
    description: "Design moderno e conforto premium, perfeita para integrar estilo e relaxamento em qualquer ambiente.",
    gallery: [
      `${BASE}/poltronas/poltrona-malibu-01.webp`,
      `${BASE}/poltronas/poltrona-malibu-02.webp`,
      `${BASE}/poltronas/poltrona-malibu-03.webp`,
      `${BASE}/poltronas/poltrona-malibu-04.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Poltrona Nice",
    image: `${BASE}/poltronas/poltrona-nice-01.webp`,
    attributes: "contemporânea • sofisticada",
    description: "Linhas contemporâneas com acabamento sofisticado, peça-chave para ambientes refinados.",
    gallery: [
      `${BASE}/poltronas/poltrona-nice-01.webp`,
      `${BASE}/poltronas/poltrona-nice-02.webp`,
      `${BASE}/poltronas/poltrona-nice-03.webp`,
    ],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
  {
    name: "Poltrona Rivieira",
    image: `${BASE}/poltronas/poltrona-rivieira-01.webp`,
    attributes: "contemporânea • sofisticada",
    description: "Linhas contemporâneas com acabamento sofisticado, peça-chave para ambientes refinados.",
    gallery: [`${BASE}/poltronas/poltrona-rivieira-01.webp`],
    features: { material: "A definir", tamanho: "A definir", conforto: "A definir", acabamento: "A definir" },
  },
];

// ─── LAYOUT ───────────────────────────────────────────────────────────────────
interface CategorySectionProps {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
  bg?: "default" | "muted";
}

const CategorySection = ({ id, title, subtitle, products, bg = "default" }: CategorySectionProps) => (
  <section id={id} className={`py-14 md:py-20 ${bg === "muted" ? "bg-muted" : "bg-background"}`}>
    <div className="container mx-auto px-4">
      <div className="mb-8 text-center md:mb-12">
        <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:mb-4 md:text-5xl">{title}</h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-lg">{subtitle}</p>
      </div>
      <ProductGrid products={products} />
    </div>
  </section>
);

const Products = () => (
  <div>
    <CategorySection
      id="colchoes"
      title="Colchões"
      subtitle="Qualidade premium para o seu descanso perfeito todas as noites."
      products={colchoes}
      bg="muted"
    />
    <CategorySection
      id="sofas"
      title="Sofás"
      subtitle="Coleção exclusiva com design contemporâneo e acabamento refinado."
      products={sofas}
    />
    <CategorySection
      id="camas"
      title="Camas"
      subtitle="Estrutura perfeita para noites de sono verdadeiramente completas."
      products={camas}
      bg="muted"
    />
    <CategorySection
      id="poltronas"
      title="Poltronas"
      subtitle="Elegância e conforto para compor qualquer ambiente."
      products={poltronas}
    />
  </div>
);

export default Products;
