import { MessageCircle } from "lucide-react";

export interface Product {
  name: string;
  image: string;
  /** Linha curta de atributos. Ex: "3 lugares • suede premium" */
  attributes: string;
}

interface ProductGridProps {
  products: Product[];
}

const WHATSAPP_NUMBER = "5563991217070";

const buildWhatsAppLink = (productName: string) => {
  const message = encodeURIComponent(
    `Olá, gostaria de saber mais sobre o modelo ${productName}.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
      {products.map((product, index) => (
        <article
          key={index}
          className="group flex flex-col overflow-hidden rounded-xl md:rounded-2xl bg-white border border-border/60 shadow-[0_2px_10px_rgba(12,26,42,0.05)] transition-all duration-300 hover:shadow-[0_12px_28px_rgba(12,26,42,0.12)] md:hover:-translate-y-1"
        >
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col flex-1 p-3 sm:p-4 md:p-5">
            <h3 className="text-sm sm:text-base md:text-lg font-display font-semibold text-foreground leading-snug line-clamp-2 mb-1">
              {product.name}
            </h3>
            <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground line-clamp-1 mb-3 md:mb-4">
              {product.attributes}
            </p>

            <a
              href={buildWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex w-full items-center justify-center gap-1.5 rounded-md md:rounded-lg bg-primary text-primary-foreground px-3 py-2 md:py-2.5 text-xs sm:text-sm font-medium transition-all hover:bg-primary/90 hover:shadow-md"
            >
              <MessageCircle size={14} strokeWidth={2} />
              Consultar
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductGrid;
