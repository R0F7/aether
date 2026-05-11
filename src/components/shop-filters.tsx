"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { categories, sizes } from "@/lib/mock-data";
import { useDebounce } from "@/hooks/useDebounce";

interface ShopFiltersProps {
  selectedCategory: string;
  selectedSize: string;
  minPrice: number;
  maxPrice: number;
}

export function ShopFilters({
  selectedCategory,
  selectedSize,
  minPrice,
  maxPrice,
}: ShopFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [price, setPrice] = useState<[number, number]>([minPrice, maxPrice]);
  const debouncedPrice = useDebounce(price, 600);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const params = new URLSearchParams(searchParams.toString());

    if (debouncedPrice[0] !== minPrice || debouncedPrice[1] !== maxPrice) {
      params.set("min", debouncedPrice[0].toString());
      params.set("max", debouncedPrice[1].toString());
      router.push(`/shop?${params.toString()}`, { scroll: false });
    }
  }, [debouncedPrice]);

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    // pagination reset
    // params.delete("page");

    router.push(`/shop?${params.toString()}`, { scroll: false });
  };

  const handleReset = () => {
    setPrice([0, 2000]);
    router.push("/shop");
  };

  return (
    <div className="space-y-8">
      {/* category */}
      <div>
        <h3 className="text-sm font-medium tracking-widest uppercase mb-4">
          Category
        </h3>

        <div className="space-y-3">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() =>
                updateFilter(
                  "category",
                  selectedCategory === category.value ? "all" : category.value,
                )
              }
              className={`block w-full text-left text-sm transition-colors ${
                selectedCategory === category.value
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* size */}
      <div>
        <h3 className="text-sm font-medium tracking-widest uppercase mb-4">
          Size
        </h3>

        <div className="space-y-3">
          {sizes.map((size) => (
            <div key={size} className="flex items-center space-x-3">
              <Checkbox
                id={`size-${size}`}
                checked={selectedSize === size}
                onCheckedChange={() =>
                  updateFilter("size", selectedSize === size ? "all" : size)
                }
                className="rounded-sm"
              />

              <Label
                htmlFor={`size-${size}`}
                className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
              >
                {size}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* price */}
      <div>
        <h3 className="text-sm font-medium tracking-widest uppercase mb-4">
          Price Range
        </h3>
        <div className="px-1">
          <Slider
            value={price}
            onValueChange={(value) => setPrice(value as [number, number])}
            min={0}
            max={2000}
            step={50}
            className="mb-4"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>${price[0].toLocaleString()}</span>
            <span>${price[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* reset */}
      <Button
        variant="outline"
        size="sm"
        onClick={handleReset}
        className="w-full rounded-lg tracking-wider text-xs bg-transparent"
      >
        RESET FILTERS
      </Button>
    </div>
  );
}
