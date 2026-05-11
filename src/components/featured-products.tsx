import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/lib/data";

export async function FeaturedProducts() {
  const { products } = await getProducts({ page: 1, limit: 6 });

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
