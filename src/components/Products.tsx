import ProductGrid, { type Product } from "./ProductGrid";

const BASE = "https://raw.githubusercontent.com/nftsandrade2/olpearaguainacatalogo/main/public/imagens";

// ─── SOFÁS ───────────────────────────────────────────────────────────────────
// Ordem estratégica: premium/modular → retráteis top → clássicos → simples
const sofas: Product[] = [
  {
    name: "Sofá Ilha Conect Sally",
    image: `${BASE}/sofas/sofa-conect-sally-01.webp`,
    attributes: "modular • design contemporâneo",
    description:
      "O sofá ilha Connect Sally permite composições que vão do formal ao relaxado — pode virar chaise-longue para leitura, sofá para conversas cara a cara ou até uma grande cama livre. Design elegante com fluxo suave e linhas rigorosas. Estrutura em madeira maciça de reflorestamento com espumas de alta e média densidade envoltas por manta ecosoft.",
    gallery: [
      `${BASE}/sofas/sofa-conect-sally-01.webp`,
      `${BASE}/sofas/sofa-conect-sally-02.webp`,
      `${BASE}/sofas/sofa-conect-sally-03.webp`,
    ],
    features: {
      material: "Madeira maciça + MDF",
      tamanho: "Módulos de 90cm a 2,05m",
      conforto: "Espuma alta/média densidade + ecosoft",
      acabamento: "Ampla cartela de revestimentos",
    },
  },
  {
    name: "Sofá Orfeu",
    image: `${BASE}/sofas/sofa-orfeu-01.webp`,
    attributes: "retrátil reclinável • alto conforto",
    description:
      "Sofá retrátil e reclinável com encosto de 7 estágios via catraca blindada. Assento com pillow 20 cm, espuma D-33 selada e molas espiral. Estrutura em madeira eucalipto reflorestado. Chaise reversível — pode mudar para o lado direito ou esquerdo conforme o ambiente.",
    gallery: [
      `${BASE}/sofas/sofa-orfeu-01.webp`,
      `${BASE}/sofas/sofa-orfeu-02.webp`,
      `${BASE}/sofas/sofa-orfeu-03.webp`,
    ],
    features: {
      material: "Madeira eucalipto",
      tamanho: "3,20 x 2,05 m",
      conforto: "Espuma D-33 + molas espiral",
      acabamento: "Consulte opções na loja",
    },
  },
  {
    name: "Sofá Viena",
    image: `${BASE}/sofas/sofa-viena-01.webp`,
    attributes: "retrátil • assentos amplos",
    description:
      "Sofá retrátil com pillow 25 cm, espuma D-28 Pré Soft e molas ensacadas e espiral. Encosto reclinável com catraca blindada de 7 estágios. Braços com espuma D-23 e porta USB-A e USB-C. Percinta elástica no encosto e assento. Estrutura em madeira eucalipto reflorestado.",
    gallery: [
      `${BASE}/sofas/sofa-viena-01.webp`,
      `${BASE}/sofas/sofa-viena-02.webp`,
      `${BASE}/sofas/sofa-viena-03.webp`,
      `${BASE}/sofas/sofa-viena-04.webp`,
    ],
    features: {
      material: "Madeira eucalipto",
      tamanho: "2,30 / 2,50 / 2,90 m",
      conforto: "Espuma D-28 + molas ensacadas",
      acabamento: "Consulte opções na loja",
    },
  },
  {
    name: "Sofá Cama Champs",
    image: `${BASE}/sofas/sofa-cama-champs-01.webp`,
    attributes: "sofá cama • retrátil • tecido premium",
    description:
      "Sofá cama retrátil com assento em espuma D-33 selada e encosto reclinável. Estrutura em madeira eucalipto reflorestado com percinta elástica para maior conforto e durabilidade. Design contemporâneo com acabamento sofisticado.",
    gallery: [
      `${BASE}/sofas/sofa-cama-champs-01.webp`,
      `${BASE}/sofas/sofa-cama-champs-02.webp`,
      `${BASE}/sofas/sofa-cama-champs-03.webp`,
    ],
    features: {
      material: "Madeira eucalipto",
      tamanho: "Consulte na loja",
      conforto: "Espuma D-33 selada",
      acabamento: "Consulte opções na loja",
    },
  },
  {
    name: "Sofá Cama De Ville",
    image: `${BASE}/sofas/sofa-cama-de-ville-01.webp`,
    attributes: "sofá cama • retrátil • design moderno",
    description:
      "Sofá cama retrátil com assento em espuma D-28 Pré Soft e molas ensacadas. Encosto reclinável com catraca blindada de 2 estágios e almofadas soltas. Pés em madeira com rodízio para facilitar abertura. Estrutura em madeira eucalipto reflorestado.",
    gallery: [
      `${BASE}/sofas/sofa-cama-de-ville-01.webp`,
      `${BASE}/sofas/sofa-cama-de-ville-02.webp`,
      `${BASE}/sofas/sofa-cama-de-ville-03.webp`,
    ],
    features: {
      material: "Madeira eucalipto",
      tamanho: "2,20 / 2,40 / 2,60 m",
      conforto: "Espuma D-28 + molas ensacadas",
      acabamento: "Consulte opções na loja",
    },
  },
  {
    name: "Sofá Cama Versalhes",
    image: `${BASE}/sofas/sofa-cama-versalhes-01.webp`,
    attributes: "sofá cama • clássico • estofado premium",
    description:
      "Sofá cama com design clássico, estofamento generoso e acabamento sofisticado. Perfeito para ambientes elegantes que precisam de funcionalidade sem abrir mão do estilo.",
    gallery: [
      `${BASE}/sofas/sofa-cama-versalhes-01.webp`,
      `${BASE}/sofas/sofa-cama-versalhes-02.webp`,
      `${BASE}/sofas/sofa-cama-versalhes-03.webp`,
    ],
    features: {
      material: "Consulte na loja",
      tamanho: "Consulte na loja",
      conforto: "Estofamento premium",
      acabamento: "Consulte opções na loja",
    },
  },
  {
    name: "Sofá Torino",
    image: `${BASE}/sofas/sofa-torino-01.webp`,
    attributes: "living • espumas de alta qualidade",
    description:
      "O Sofá Torino reúne o design de um sofá living com o conforto de um sofá home. Espumas de alta qualidade com ecosoft sobreposta, estrutura de madeira maciça fixada com grampos metálicos e cola PVA. Pés de madeira maciça e almofadas removíveis no encosto.",
    gallery: [
      `${BASE}/sofas/sofa-torino-01.webp`,
      `${BASE}/sofas/sofa-torino-2.webp`,
      `${BASE}/sofas/sofa-torino-03.webp`,
    ],
    features: {
      material: "Madeira maciça",
      tamanho: "2,43 m / 2,47 m c/ chaise",
      conforto: "Espuma média densidade + ecosoft",
      acabamento: "Ampla cartela de revestimentos",
    },
  },
  {
    name: "Sofá Milano",
    image: `${BASE}/sofas/sofa-milano-01.webp`,
    attributes: "orgânico • traços contemporâneos",
    description:
      "Volumetria importante, traços orgânicos, leves e contemporâneos. Estrutura de madeira maciça com assento em espuma de média densidade e ecosoft. Encostos em espuma de alta e média densidade. Grande variedade de acabamentos e revestimentos para compor peças únicas.",
    gallery: [
      `${BASE}/sofas/sofa-milano-01.webp`,
      `${BASE}/sofas/sofa-milano-02.webp`,
      `${BASE}/sofas/sofa-milano-03.webp`,
    ],
    features: {
      material: "Madeira maciça",
      tamanho: "2,50 m / 2,80 m",
      conforto: "Espuma alta/média densidade + ecosoft",
      acabamento: "Ampla cartela de revestimentos",
    },
  },
  {
    name: "Sofá Maison",
    image: `${BASE}/sofas/sofa-maison-01.webp`,
    attributes: "elegante • acabamento refinado",
    description:
      "Sofá com design refinado e linhas elegantes, perfeito para salas que valorizam sofisticação e conforto no dia a dia.",
    gallery: [
      `${BASE}/sofas/sofa-maison-01.webp`,
      `${BASE}/sofas/sofa-maison-02.webp`,
      `${BASE}/sofas/sofa-maison-03.webp`,
    ],
    features: {
      material: "Consulte na loja",
      tamanho: "Consulte na loja",
      conforto: "Consulte na loja",
      acabamento: "Consulte opções na loja",
    },
  },
  {
    name: "Sofá Orsay",
    image: `${BASE}/sofas/sofa-orsay-02.webp`,
    attributes: "contemporâneo • conforto",
    description: "Design contemporâneo com acabamento refinado e conforto para o dia a dia.",
    gallery: [`${BASE}/sofas/sofa-orsay-02.webp`, `${BASE}/sofas/sofa-orsay-03.webp`],
    features: {
      material: "Consulte na loja",
      tamanho: "Consulte na loja",
      conforto: "Consulte na loja",
      acabamento: "Consulte opções na loja",
    },
  },
  {
    name: "Sofá Penny",
    image: `${BASE}/sofas/sofa-penny-01.webp`,
    attributes: "moderno • versátil",
    description: "Sofá versátil com design moderno e conforto para toda a família.",
    gallery: [`${BASE}/sofas/sofa-penny-01.webp`, `${BASE}/sofas/sofa-penny-02.webp`],
    features: {
      material: "Consulte na loja",
      tamanho: "Consulte na loja",
      conforto: "Consulte na loja",
      acabamento: "Consulte opções na loja",
    },
  },
];

// ─── COLCHÕES ─────────────────────────────────────────────────────────────────
// Ordem estratégica: top de linha → molas pocket → visco → HR → espuma
const colchoes: Product[] = [
  {
    name: "Colchão Lübeck Visco",
    image: `${BASE}/colchoes/lubeck-visco-01.webp`,
    attributes: "visco premium • molas pocket • super luxo",
    description:
      "Colchão super luxo com espuma viscoelástica, D-33 de alta resiliência e D-45 selada. Molas pocket ensacadas individualmente, lateral em tecido Bouclê e pillow top extremamente confortável. Tecido com tratamento evocare. Suporte de 200 kg por lado. Garantia de 5 anos.",
    gallery: [
      `${BASE}/colchoes/lubeck-visco-01.webp`,
      `${BASE}/colchoes/lubeck-visco-02.webp`,
      `${BASE}/colchoes/lubeck-visco-03.webp`,
    ],
    features: {
      material: "Visco + D-33 + D-45 + molas pocket",
      tamanho: "138x188 / 158x198 / 193x203 (45cm alt.)",
      conforto: "Pillow top • suporte 200kg/lado",
      acabamento: "Bordado matelassê • tratamento evocare",
    },
  },
  {
    name: "Colchão Germain Pocket Visco",
    image: `${BASE}/colchoes/geman-pocket-visco-01.webp`,
    attributes: "molas pocket • visco • premium",
    description:
      "Tecido em malhas 280g com espuma viscogel e faixa lateral em linho. Estrutura com espuma hiper soft D-33 selada, viscogel e molas pocket ensacadas individualmente. Suporte de 150 kg por lado. Garantia de 3 anos.",
    gallery: [`${BASE}/colchoes/geman-pocket-visco-01.webp`, `${BASE}/colchoes/german-pocket-visco-02.webp`],
    features: {
      material: "Visco gel + D-33 + molas pocket",
      tamanho: "88x188 / 108x188 / 138x188 / 158x188 / 193x203 (30cm alt.)",
      conforto: "Suporte 150kg/lado",
      acabamento: "Malha 280g • faixa linho",
    },
  },
  {
    name: "Colchão Vienny Sky Visco",
    image: `${BASE}/colchoes/vienny-sky-visco-01.webp`,
    attributes: "viscoelástico • molas pocket • adaptável",
    description:
      "Tecido especial em malhas 280g com tratamento evocare e pillow top. Estrutura com espuma viscogel e D-33 selada, molas pocket ensacadas individualmente e tela lateral preta. Suporte de 150 kg por lado. Garantia de 5 anos.",
    gallery: [
      `${BASE}/colchoes/vienny-sky-visco-01.webp`,
      `${BASE}/colchoes/vienny-sky-visco-02.webp`,
      `${BASE}/colchoes/vienny-sky-visco-03.webp`,
    ],
    features: {
      material: "Visco gel + D-33 + molas pocket",
      tamanho: "88x188 / 108x198 / 138x188 / 158x198 / 193x203 (40cm alt.)",
      conforto: "Pillow top • suporte 150kg/lado",
      acabamento: "Malha 280g • tratamento evocare",
    },
  },
  {
    name: "Colchão Vienny Sky HR",
    image: `${BASE}/colchoes/vienny-sky-hr-01.webp`,
    attributes: "HR premium • pillow top • molas pocket",
    description:
      "Alta resiliência premium com pillow top e molas pocket ensacadas individualmente para noites de sono profundas e confortáveis. Tecido com tratamento evocare.",
    gallery: [
      `${BASE}/colchoes/vienny-sky-hr-01.webp`,
      `${BASE}/colchoes/vienne-sky-hr-01.webp`,
      `${BASE}/colchoes/vienne-sky-hr-02.webp`,
      `${BASE}/colchoes/vienne-sky-hr-03.webp`,
    ],
    features: {
      material: "HR + molas pocket",
      tamanho: "Consulte na loja",
      conforto: "Pillow top • suporte premium",
      acabamento: "Tratamento evocare",
    },
  },
  {
    name: "Colchão Lübeck HR",
    image: `${BASE}/colchoes/lubeck-hr-01.webp`,
    attributes: "HR • alto suporte • durabilidade",
    description:
      "Espuma de alta resiliência para suporte firme e durabilidade superior em qualquer posição de sono. Ideal para quem busca sustentação e longevidade.",
    gallery: [
      `${BASE}/colchoes/lubeck-hr-01.webp`,
      `${BASE}/colchoes/lubeck-hr-02.webp`,
      `${BASE}/colchoes/lubeck-hr-03.webp`,
    ],
    features: {
      material: "Espuma HR alta resiliência",
      tamanho: "Consulte na loja",
      conforto: "Suporte firme",
      acabamento: "Consulte na loja",
    },
  },
  {
    name: "Colchão Essen Strong",
    image: `${BASE}/colchoes/essen-strong-01.webp`,
    attributes: "firme • alto suporte • 100% espuma",
    description:
      "Colchão 100% espuma com densidade D-45 HR. Tecido em malha 280g/m² com tratamento evocare. Camada de conforto em espuma firme D-28 selada e faixa lateral em veludo. Suporte de 180 kg por lado. Garantia de 5 anos.",
    gallery: [`${BASE}/colchoes/essen-strong-01.webp`, `${BASE}/colchoes/essen-strong-02.webp`],
    features: {
      material: "Espuma D-45 HR + D-28 selada",
      tamanho: "88x188 / 108x188 / 138x188 / 158x188 / 193x203 (30cm alt.)",
      conforto: "Firme • suporte 180kg/lado",
      acabamento: "Malha 280g • faixa veludo • tratamento evocare",
    },
  },
  {
    name: "Colchão Beverly Visco Gel",
    image: `${BASE}/colchoes/beverly-visco-gel-01.webp`,
    attributes: "visco gel • conforto térmico",
    description:
      "Tecnologia visco gel que proporciona sensação de frescor e adaptação perfeita ao corpo durante toda a noite. Ideal para quem busca conforto térmico e alívio de pressão.",
    gallery: [
      `${BASE}/colchoes/beverly-visco-gel-01.webp`,
      `${BASE}/colchoes/beverly-visco-gel-02.webp`,
      `${BASE}/colchoes/beverly-viscogel-01.webp`,
    ],
    features: {
      material: "Visco gel",
      tamanho: "Consulte na loja",
      conforto: "Conforto térmico",
      acabamento: "Consulte na loja",
    },
  },
  {
    name: "Colchão Verano Gel",
    image: `${BASE}/colchoes/verano-gel-01.webp`,
    attributes: "tecnologia gel • frescor",
    description:
      "Tecnologia gel que proporciona sensação de frescor durante toda a noite, ideal para quem busca conforto térmico e noites mais tranquilas.",
    gallery: [
      `${BASE}/colchoes/verano-gel-01.webp`,
      `${BASE}/colchoes/verano-gel-02.webp`,
      `${BASE}/colchoes/verano-gel-03.webp`,
    ],
    features: {
      material: "Gel + espuma",
      tamanho: "Consulte na loja",
      conforto: "Conforto térmico",
      acabamento: "Consulte na loja",
    },
  },
  {
    name: "Colchão Louvre Multilastic",
    image: `${BASE}/colchoes/louvre-multilastic-01.webp`,
    attributes: "multilastic • distribuição de peso",
    description:
      "Tecnologia multilastic para distribuição uniforme do peso e máximo conforto durante o sono. Boa opção custo-benefício.",
    gallery: [`${BASE}/colchoes/louvre-multilastic-01.webp`, `${BASE}/colchoes/louvre-multilastic-02.webp`],
    features: {
      material: "Multilastic",
      tamanho: "Consulte na loja",
      conforto: "Distribuição uniforme",
      acabamento: "Consulte na loja",
    },
  },
  {
    name: "Colchão Vicky Visco",
    image: `${BASE}/colchoes/vicky-visco-01.webp`,
    attributes: "viscoelástico • adaptável",
    description: "Camada viscoelástica que se adapta ao corpo aliviando pontos de pressão para um descanso renovador.",
    gallery: [`${BASE}/colchoes/vicky-visco-01.webp`, `${BASE}/colchoes/vicky-visco-02.webp`],
    features: {
      material: "Viscoelástico",
      tamanho: "Consulte na loja",
      conforto: "Adaptável ao corpo",
      acabamento: "Consulte na loja",
    },
  },
  {
    name: "Colchão Louvre Pocket",
    image: `${BASE}/colchoes/louvre-pocket-01.webp`,
    attributes: "molas pocket • conforto premium",
    description:
      "Tecido em malha especial com faixa lateral em veludo e bordado de 2 cm. Estrutura com espuma D-28 selada, molas pocket ensacadas individualmente e lâmina de espuma aglomerado D80 kg/m³. Suporte de 110 kg por lado. Garantia de 1 ano.",
    gallery: [
      `${BASE}/colchoes/louvre-pocket-01.webp`,
      `${BASE}/colchoes/louvre-pocket-02.webp`,
      `${BASE}/colchoes/louvre-pocket-03.webp`,
    ],
    features: {
      material: "Espuma D-28 + molas pocket",
      tamanho: "88x188 / 108x198 / 138x188 / 158x198 (26cm alt.)",
      conforto: "Suporte 110kg/lado",
      acabamento: "Malha especial • faixa veludo • bordado",
    },
  },
  {
    name: "Colchão Germain Multi Visco",
    image: `${BASE}/colchoes/germain-multi-visco-01.webp`,
    attributes: "multi visco • premium",
    description:
      "Múltiplas camadas viscoelásticas para adaptação perfeita ao corpo, alívio de pontos de pressão e descanso profundo.",
    gallery: [`${BASE}/colchoes/germain-multi-visco-01.webp`],
    features: {
      material: "Múltiplas camadas visco",
      tamanho: "Consulte na loja",
      conforto: "Consulte na loja",
      acabamento: "Consulte na loja",
    },
  },
  {
    name: "Box Solteiro com Auxiliar",
    image: `${BASE}/colchoes/box-solteiro-com-auxiliar-01.webp`,
    attributes: "solteiro • com auxiliar",
    description:
      "Solução prática com cama auxiliar embutida, ideal para quartos de hóspedes e espaços que precisam de funcionalidade.",
    gallery: [
      `${BASE}/colchoes/box-solteiro-com-auxiliar-01.webp`,
      `${BASE}/colchoes/box-solteiro-com-auxiliar-02.webp`,
      `${BASE}/colchoes/box-solteiro-com-auxiliar-03.webp`,
    ],
    features: {
      material: "Consulte na loja",
      tamanho: "Solteiro",
      conforto: "Consulte na loja",
      acabamento: "Consulte na loja",
    },
  },
];

// ─── CAMAS ────────────────────────────────────────────────────────────────────
const camas: Product[] = [
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
    features: {
      material: "Consulte na loja",
      tamanho: "Consulte na loja",
      conforto: "Consulte na loja",
      acabamento: "Consulte na loja",
    },
  },
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
    features: {
      material: "Consulte na loja",
      tamanho: "Consulte na loja",
      conforto: "Consulte na loja",
      acabamento: "Consulte na loja",
    },
  },
];

// ─── POLTRONAS ────────────────────────────────────────────────────────────────
// Ordem estratégica: premium/icônicas → modernas → clássicas
const poltronas: Product[] = [
  {
    name: "Poltrona Rivieira",
    image: `${BASE}/poltronas/poltrona-rivieira-01.webp`,
    attributes: "reclinável • conforto premium",
    description:
      "Poltrona reclinável com detalhes únicos e contemporaneidade em sua forma. Camada de conforto em espumas de média densidade. Estrutura de madeira maciça fixada com grampos metálicos e cola PVA. Percinta elástica e manta ecosoft no assento. Opções com ou sem atuador motorizado.",
    gallery: [`${BASE}/poltronas/poltrona-rivieira-01.webp`],
    features: {
      material: "Madeira maciça",
      tamanho: "Consulte na loja",
      conforto: "Espuma média densidade + ecosoft",
      acabamento: "Ampla cartela Olpe • composê base/vivo",
    },
  },
  {
    name: "Poltrona Malibu",
    image: `${BASE}/poltronas/poltrona-malibu-01.webp`,
    attributes: "moderna • conforto premium",
    description:
      "Estrutura em madeira eucalipto de reflorestamento montada com grampos de aço e cola PVA. Assento com espumas Soft D-30 envoltas em manta ecosoft. Encosto com espuma D-33 e almofada solta preenchida com fibra siliconada. Opção de base giratória ou pés de madeira.",
    gallery: [
      `${BASE}/poltronas/poltrona-malibu-01.webp`,
      `${BASE}/poltronas/poltrona-malibu-02.webp`,
      `${BASE}/poltronas/poltrona-malibu-03.webp`,
      `${BASE}/poltronas/poltrona-malibu-04.webp`,
    ],
    features: {
      material: "Madeira eucalipto",
      tamanho: "780 x 920 x 880 mm",
      conforto: "Espuma D-30 Soft + ecosoft",
      acabamento: "Cartela Olpe grupo B • couro disponível",
    },
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
    features: {
      material: "Consulte na loja",
      tamanho: "Consulte na loja",
      conforto: "Consulte na loja",
      acabamento: "Consulte opções na loja",
    },
  },
  {
    name: "Poltrona Elegance",
    image: `${BASE}/poltronas/poltrona-elegance-01.webp`,
    attributes: "design elegante • premium",
    description: "Poltrona com design elegante e acabamento premium, perfeita para compor ambientes sofisticados.",
    gallery: [`${BASE}/poltronas/poltrona-elegance-01.webp`],
    features: {
      material: "Consulte na loja",
      tamanho: "Consulte na loja",
      conforto: "Consulte na loja",
      acabamento: "Consulte opções na loja",
    },
  },
  {
    name: "Poltrona do Papai",
    image: `${BASE}/poltronas/poltrona-do-papai-01.webp`,
    attributes: "clássica • reclinável • alto conforto",
    description:
      "Clássica poltrona reclinável com encosto alto e estofamento generoso. Estrutura de madeira maciça com percinta elástica e manta ecosoft no assento. Ideal para longas horas de relaxamento.",
    gallery: [`${BASE}/poltronas/poltrona-do-papai-01.webp`, `${BASE}/poltronas/poltrona-do-papai-02.webp`],
    features: {
      material: "Madeira maciça",
      tamanho: "Consulte na loja",
      conforto: "Espuma média densidade + ecosoft",
      acabamento: "Consulte opções na loja",
    },
  },
  {
    name: "Poltrona Fleur",
    image: `${BASE}/poltronas/poltrona-fleur-01.webp`,
    attributes: "moderna • design delicado",
    description: "Design moderno com linhas delicadas e acabamento refinado para ambientes contemporâneos.",
    gallery: [`${BASE}/poltronas/poltrona-fleur-01.webp`],
    features: {
      material: "Consulte na loja",
      tamanho: "Consulte na loja",
      conforto: "Consulte na loja",
      acabamento: "Consulte opções na loja",
    },
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
