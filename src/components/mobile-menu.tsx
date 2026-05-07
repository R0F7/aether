"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { HeaderLink } from "./header-link";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-75 sm:w-100">
        <nav className="flex flex-col gap-6 mt-10 pl-6">
          <HeaderLink path="/">Home</HeaderLink>
          <HeaderLink path="/shop">Shop</HeaderLink>
          <HeaderLink path="/shop?category=shirts" isSubRoute={true}>
            Shirts
          </HeaderLink>
          <HeaderLink path="/shop?category=trousers" isSubRoute={true}>
            Trousers
          </HeaderLink>
          <HeaderLink path="/shop?category=outerwear" isSubRoute={true}>
            Outerwear
          </HeaderLink>
          <HeaderLink path="/shop?category=accessories" isSubRoute={true}>
            Accessories
          </HeaderLink>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
