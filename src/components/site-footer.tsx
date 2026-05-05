import { FooterLink } from "./footer-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-xl tracking-[0.2em] mb-6">AETHER</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Timeless elegance meets contemporary design. Crafted for those who
              appreciate the art of refined simplicity.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-6">
              Shop
            </h4>
            <nav className="flex flex-col gap-3">
              <FooterLink path="/shop?category=shirts">Shirts</FooterLink>
              <FooterLink path="/shop?category=trousers">Trousers</FooterLink>
              <FooterLink path="/shop?category=outerwear">Outerwear</FooterLink>
              <FooterLink path="/shop?category=accessories">
                Accessories
              </FooterLink>
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-6">
              Help
            </h4>
            <nav className="flex flex-col gap-3">
              <FooterLink path="#">Shipping & Returns</FooterLink>
              <FooterLink path="#">Size Guide</FooterLink>
              <FooterLink path="#">Contact Us</FooterLink>
              <FooterLink path="#">FAQ</FooterLink>
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-6">
              Connect
            </h4>
            <nav className="flex flex-col gap-3">
              <FooterLink path="#">Instagram</FooterLink>
              <FooterLink path="#">Pinterest</FooterLink>
              <FooterLink path="#">LinkedIn</FooterLink>
            </nav>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wide">
            © 2025 AETHER. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <FooterLink path="#" isTextSizeSM={false}>
              Privacy Policy
            </FooterLink>
            <FooterLink path="#" isTextSizeSM={false}>
              Terms of Service
            </FooterLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}
