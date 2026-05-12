"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import { Search } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Product } from "@/lib/mock-data";

export function CommandSearch({ open, onOpenChange }: any) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);

      const res = await fetch(`/api/products/search?q=${debouncedQuery}`);
      const data = await res.json();
      setResults(data);

      setLoading(false);
    };

    fetchData();
  }, [debouncedQuery]);

  const handleSelect = (slug: string) => {
    onOpenChange(false);
    router.push(`/shop/${slug}`);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <Command>
        <CommandInput
          placeholder="Search products..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          {loading && (
            <div className="p-4 text-sm text-muted-foreground">
              Searching...
            </div>
          )}
          <CommandEmpty>No products found.</CommandEmpty>

          <CommandGroup heading={results.length > 0 && "Products"}>
            {results.map((product) => (
              <CommandItem
                key={product._id}
                value={product.name}
                onSelect={() => handleSelect(product.slug)}
                className="cursor-pointer my-2"
              >
                <Search className="mr-2 h-4 w-4 text-muted-foreground" />

                <div className="flex flex-col">
                  <span>{product.name}</span>
                  <span className="text-sm text-muted-foreground">
                    ${product.price} · {product.category}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
