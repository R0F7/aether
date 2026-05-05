import Link from "next/link";
import { HeaderLink } from "./header-link";
import { HeaderActions } from "./header-actions";
import MobileMenu from "./mobile-menu";

export function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-10">
          {/* Mobile Menu */}
          <MobileMenu></MobileMenu>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <HeaderLink path="/">Home</HeaderLink>
            <HeaderLink path="/shop">Shop</HeaderLink>
            <HeaderLink path="/create-product">Create Product</HeaderLink>
          </nav>

          {/* Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl tracking-[0.3em] font-light"
          >
            AETHER
          </Link>

          {/* Actions */}
          <HeaderActions></HeaderActions>
        </div>
      </header>
    </>
  );
}
