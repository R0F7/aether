"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { CartItemRow } from "@/components/cart/cart-item-row";
import { CartSummary } from "@/components/cart/cart-summary";
import { CheckoutSuccessDialog } from "@/components/checkout-success-dialog";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import Loading from "../loading";

export default function CartContainer() {
  const router = useRouter();
  const {
    items,
    subtotal,
    updateQuantity,
    removeItem,
    clearCart,
    isInitialized,
  } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsCheckingOut(false);
    setShowSuccess(true);
    clearCart();
  };

  if (!isInitialized) {
    return <Loading />;
  }

  return (
    <>
      {items.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="font-serif text-2xl mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Discover our curated collection of luxury essentials and find pieces
            that speak to your style.
          </p>
          <Link href="/shop">
            <Button className="rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 tracking-widest text-xs px-8 py-4">
              START SHOPPING
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-medium tracking-widest uppercase">
                {items.length} Item{items.length !== 1 ? "s" : ""}
              </h2>
              <Link
                href="/shop"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Continue Shopping
              </Link>
            </div>

            <div>
              {items.map((item) => (
                <CartItemRow
                  key={`${item.product._id}-${item.size}`}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="lg:sticky lg:top-24">
              <CartSummary
                subtotal={subtotal}
                onCheckout={handleCheckout}
                isCheckingOut={isCheckingOut}
              />
            </div>
          </div>
        </div>
      )}

      <CheckoutSuccessDialog
        open={showSuccess}
        onOpenChange={setShowSuccess}
        onContinueShopping={() => router.push("/shop")}
      />
    </>
  );
}
