import CartContainer from "@/components/cart/cart-container";
import PageHeader from "@/components/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart | Aether",
  description: "Review your selected luxury essentials. Secure checkout for your curated Aether collection.",
  openGraph: {
    title: "Your Shopping Cart | Aether",
    description: "Ready to elevate your lifestyle? Review your selected pieces before checkout.",
    images: [
      {
        url: "/cart-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Aether Shopping Cart",
      },
    ],
    siteName: "Aether",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopping Cart | Aether",
    description: "Review your curated selection of minimalist essentials.",
    images: ["/cart-og-image.webp"],
  },
  robots: {
    index: false,
    follow: true,
  },
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