# Aether | Premium Minimalist E-commerce

Aether is a high-end, minimalist e-commerce platform designed for modern connoisseurs. Built with the **Next.js**, it prioritizes a clean UI, seamless user experience, and robust performance.

**Live Demo:** [https://aether-n1vc.vercel.app](https://aether-n1vc.vercel.app)

---

## Design Philosophy
Aether follows a "Less is More" approach. 
* **Aesthetics:** Pastel color palettes, clean vector art, and modern typography.
* **UI/UX:** Minimalist dashboards, fluid transitions, and a mobile-first responsive design.

## Features
* **Curated Collections:** Dynamic product grids with advanced filtering (Category, Size, Price).
* **Shopping Cart:** Fully functional cart management with real-time updates.
* **Responsive Design:** Optimized for all screen sizes from mobile to ultra-wide desktops.
* **SEO Optimized:** Dynamic metadata, OpenGraph, and Twitter card integration for every page.
* **Admin Controls:** Dedicated interface for creating and managing product listings.
* **Performance:** Static and dynamic rendering using Next.js with optimized image loading.

## Tech Stack
* **Frontend:** [Next.js 16+ (App Router)](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/),
* **UI Components:** [Shadcn/UI](https://ui.shadcn.com/), [Lucide React](https://lucide.dev/)
* **State Management:** React Context API
* **Backend:** Next.js Server Actions + API Routes
* **Database:** MongoDB (with optimized indexing)
* **Storage:** Cloudflare R2
* **Deployment:** [Vercel](https://vercel.com/)

## Future Improvements
* Stripe payment integration
* User authentication (NextAuth)
* Order management system
* Admin dashboard
* Wishlist feature

## Project Structure
```
project/
│
├─ public/
│
├─ src/
│  │
│  ├─ app/
|  |  ├─ api/
│  │  ├─ cart/
|  |  ├─create-product/
|  |  ├─ shop/
|  |  ├─ global.css
|  |  ├─ layout.tsx
|  |  ├─ not-found.tsx
|  |  └─ page.tsx
|  |  
│  ├─ components/
│  │  ├─ cart/
│  │  ├─ footer/
│  │  ├─ header/
│  │  ├─ hero/
│  │  ├─ newsletter/
│  │  ├─ product/
│  │  ├─ shop/
│  │  ├─ ui/
│  │  ├─ back-button.tsx
│  │  ├─ brand-statement.tsx
│  │  ├─ checkout-success-dialog.tsx
│  │  ├─ form-loading-overlay.tsx
│  │  ├─ loading.tsx
│  │  ├─ page-header.tsx
│  │  └─ section-header.tsx
│  │
│  ├─ hooks/
│  │  ├─ useCart.tsx
│  │  └─ useDebounce.tsx
│  │
│  ├─ lib/
│  │  ├─ actions/
│  │  ├─ context/
│  │  ├─ validationSchema/
│  │  ├─ data.ts
│  │  ├─ db.ts
│  │  ├─ mock-data.ts
│  │  ├─ r2.ts
│  │  └─ utils.ts
|  |
│  ├─ providers/
│  │  └─ theme-provider.tsx
|  |
|  └─ scripts
      └─ create-indexes.ts

```

## Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/R0F7/aether.git
   cd aether
2. **Install dependencies:**
   ```bash
   pnpm install
3. **Set up environment variables:**
   ```bash
   DB_URI
   R2_ACCESS_KEY_ID
   R2_SECRET_ACCESS_KEY
   R2_ENDPOINT
   R2_BUCKET_NAME
   R2_PUBLIC_CUSTOM_DOMAIN
4. Run the development server:
   ```bash
   pnpm dev

