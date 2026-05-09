import PageHeader from "@/components/page-header";
import CartContainer from "@/components/cart-container";

export const metadata = {
  title: "Shopping Cart | Aether",
  description: "Review your selected luxury essentials before checkout.",
};

export default function CartPage() {
  return (
    <div className="min-h-screen">
      <PageHeader subtitle="Your Selection" title="Shopping Cart" />

      <section className="py-10 lg:py-16 px-6 lg:px-10">
        <div className="container mx-auto">
          <CartContainer />
        </div>
      </section>
    </div>
  );
}