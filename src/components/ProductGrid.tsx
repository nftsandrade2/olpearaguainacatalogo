import { useEffect, useState } from "react";
import { MessageCircle, ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

export interface ProductFeatures {
  material?: string;
  tamanho?: string;
  conforto?: string;
  acabamento?: string;
}

export interface Product {
  name: string;
  image: string;
  attributes: string;
  description?: string;
  gallery?: string[];
  features?: ProductFeatures;
}

interface ProductGridProps {
  products: Product[];
}

const WHATSAPP_NUMBER = "5563991217070";

const buildWhatsAppLink = (productName: string) => {
  const message = encodeURIComponent(`Olá, gostaria de saber mais sobre o modelo ${productName}.`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

const MOBILE_INITIAL_LIMIT = 6;
const MOBILE_EXPANDED_LIMIT = 10;

const ProductGrid = ({ products }: ProductGridProps) => {
  const [selected, setSelected] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const openProduct = (product: Product) => {
    setSelected(product);
    setActiveImage((product.gallery && product.gallery[0]) || product.image);
  };

  const gallery =
    selected?.gallery && selected.gallery.length > 0 ? selected.gallery : selected ? [selected.image] : [];

  const visibleProducts = isMobile
    ? expanded
      ? products.slice(0, MOBILE_EXPANDED_LIMIT)
      : products.slice(0, MOBILE_INITIAL_LIMIT)
    : products;

  const showExpandButton = isMobile && products.length > MOBILE_INITIAL_LIMIT;

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
        {visibleProducts.map((product, index) => (
          <button
            key={index}
            type="button"
            onClick={() => openProduct(product)}
            aria-label={`Ver detalhes de ${product.name}`}
            className="group relative flex flex-col overflow-hidden rounded-xl md:rounded-2xl bg-white border border-border/60 shadow-[0_2px_10px_rgba(12,26,42,0.05)] transition-all duration-300 hover:shadow-[0_12px_28px_rgba(12,26,42,0.12)] md:hover:-translate-y-1 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="hidden md:flex absolute inset-0 items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent">
                <span className="mb-4 inline-flex items-center rounded-full bg-white/95 px-4 py-1.5 text-xs font-medium text-primary shadow-sm">
                  Ver detalhes
                </span>
              </div>
            </div>

            <div className="flex flex-col flex-1 p-3 sm:p-4 md:p-5">
              <h3 className="text-sm sm:text-base md:text-lg font-display font-semibold text-foreground leading-snug line-clamp-2 mb-1">
                {product.name}
              </h3>

              <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground line-clamp-1">
                {product.attributes}
              </p>
            </div>
          </button>
        ))}
      </div>

      {showExpandButton && (
        <div className="mt-6 flex justify-center md:hidden">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            {expanded ? "Ver menos" : "Ver mais modelos"}
          </button>
        </div>
      )}

      <Dialog
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="p-0 gap-0 max-w-[95vw] sm:max-w-2xl md:max-w-3xl max-h-[92vh] overflow-hidden flex flex-col rounded-xl [&>button.absolute]:hidden">
          {selected && (
            <>
              <div className="flex-1 overflow-y-auto">
                <div className="relative aspect-[4/3] bg-muted">
                  <img src={activeImage || selected.image} alt={selected.name} className="w-full h-full object-cover" />

                  <DialogClose
                    aria-label="Voltar"
                    className="absolute top-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/20 text-white shadow-md transition hover:bg-black/30"
                  >
                    <ArrowLeft size={20} strokeWidth={2.4} />
                  </DialogClose>
                </div>

                {gallery.length > 1 && (
                  <div className="flex gap-2 px-4 sm:px-6 pt-3 overflow-x-auto">
                    {gallery.map((img, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveImage(img)}
                        className={`shrink-0 w-16 h-16 rounded-md overflow-hidden border transition ${
                          (activeImage || selected.image) === img
                            ? "border-primary ring-2 ring-primary/30"
                            : "border-border/60 hover:border-primary/50"
                        }`}
                      >
                        <img src={img} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                <div className="p-4 sm:p-6">
                  <DialogTitle className="text-xl sm:text-2xl font-display font-bold text-foreground mb-1">
                    {selected.name}
                  </DialogTitle>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">{selected.attributes}</p>

                  {selected.description && (
                    <DialogDescription className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-5">
                      {selected.description}
                    </DialogDescription>
                  )}

                  {selected.features && (
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 border-t border-border/60 pt-4">
                      {(
                        [
                          ["Material", selected.features.material],
                          ["Tamanho", selected.features.tamanho],
                          ["Conforto", selected.features.conforto],
                          ["Acabamento", selected.features.acabamento],
                        ] as const
                      )
                        .filter(([, v]) => !!v)
                        .map(([label, value]) => (
                          <div key={label} className="flex flex-col">
                            <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</dt>
                            <dd className="text-sm text-foreground">{value}</dd>
                          </div>
                        ))}
                    </dl>
                  )}
                </div>
              </div>

              <div className="border-t border-border/60 bg-background p-3 sm:p-4">
                <a
                  href={buildWhatsAppLink(selected.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-3 text-sm sm:text-base font-medium transition-all hover:bg-primary/90 hover:shadow-md"
                >
                  <MessageCircle size={18} strokeWidth={2} />
                  Chamar no WhatsApp
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductGrid;
