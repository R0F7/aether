"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { SizeSelector, QuantitySelector } from "@/components/product-options";
import { useCart } from "@/hooks/useCart";

export default function ProductActions({ product }: any) {
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast("Please select a size", {
        description: "Choose a size before adding to cart.",
      });
      return;
    }

    addItem(product, quantity, selectedSize)

    toast("product added successfully", {
      description: `${product.name} (${selectedSize}) has been added to your cart.`,
    });
  };

  return (
    <>
      <div className="space-y-6 mb-8">
        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          onSizeChange={setSelectedSize}
        />

        <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
      </div>

      {/* Add to Cart */}
      <Button
        size="lg"
        className="w-full h-14 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 tracking-widest text-sm"
        onClick={handleAddToCart}
      >
        ADD TO CART
      </Button>
    </>
  );
}
