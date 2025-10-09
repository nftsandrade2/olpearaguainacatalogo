import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  name: string;
  image: string;
  description: string;
  features: string[];
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem key={index}>
            <div className="space-y-6">
              <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center space-y-4 px-4">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  {product.description}
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-accent/30 rounded-full text-sm font-medium text-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductCarousel;
