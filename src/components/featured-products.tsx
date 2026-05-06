import { ProductCard } from "@/components/product-card";
import { use } from "react";
import { getProducts } from "@/lib/data";

export function FeaturedProducts() {
  const products = use(getProducts());

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}
