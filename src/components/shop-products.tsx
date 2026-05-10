import { getProducts } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import EmptyProductFilterPage from "@/components/empty-product-filter-page";

export default async function ShopProducts({
  category,
  size,
  sort,
  min,
  max,
}: {
  category: string;
  size: string;
  sort: string;
  min: number;
  max: number;
}) {
  const products = await getProducts({
    category,
    size,
    sort,
    min,
    max,
  });

  if (products.length === 0) {
    return <EmptyProductFilterPage />;
  }

  return (
    <>
      <span className="text-sm text-muted-foreground relative -top-2 md:-top-14">
        {products.length} product
        {products.length !== 1 ? "s" : ""}
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}
