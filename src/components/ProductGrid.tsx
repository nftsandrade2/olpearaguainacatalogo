import { MessageCircle } from "lucide-react";

export interface Product {
  name: string;
  image: string;
  description: string;
  features: string[];
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {products.map((product, index) => (
        <article
          key={index}
          className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-border/60 shadow-[0_2px_12px_rgba(12,26,42,0.06)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(12,26,42,0.12)] hover:-translate-y-1"
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

          <div className="flex flex-col flex-1 p-6">
            <h3 className="text-xl font-display font-semibold text-foreground mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-1 mb-4">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {product.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>

            <a
              href={buildWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-3 text-sm font-medium transition-all hover:bg-primary/90 hover:shadow-md"
            >
              <MessageCircle size={16} strokeWidth={2} />
              Consultar no WhatsApp
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductGrid;
