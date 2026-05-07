import { ProductCard } from "@/components/product-card";
import { db } from "@/lib/db";

export async function FeaturedProducts() {
  const products = await db
    .collection("products")
    .find({
      featured: true,
    })
    .toArray();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={JSON.parse(JSON.stringify(product))}
          />
        ))}
      </div>
    </>
  );
}
