import { ProductCard } from "@/components/product-card";
import EmptyProductFilterPage from "@/components/empty-product-filter-page";

export default async function ShopProducts({
  products,
  totalProducts,
}: {
  products: any;
  totalProducts: any;
}) {
  if (products.length === 0) {
    return <EmptyProductFilterPage />;
  }

  return (
    <>
      <span className="text-sm text-muted-foreground relative -top-2 md:hidden">
        {products.length} / {totalProducts} products
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}
