"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Search, ShoppingBag } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { CommandSearch } from "./command-search";

export function HeaderActions() {
  const [searchOpen, setSearchOpen] = useState(false);
  const totalItems = 0;

  return (
    <>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-[#A08D65]! transition-colors"
          onClick={() => setSearchOpen(true)}
          aria-label="Search products (Ctrl+K)"
        >
          <Search className="h-5 w-5" />
        </Button>

        <ModeToggle />

        <Link href="/cart">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full relative hover:bg-[#A08D65]! transition-colors"
            aria-label={`Shopping cart with ${totalItems} items`}
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </Button>
        </Link>
      </div>

      <CommandSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
