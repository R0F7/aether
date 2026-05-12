import { use } from "react";
import { HeroCarousel } from "./hero/hero-carousel";

export function HeroCarouselWrapper({ promise }: { promise: Promise<any> }) {
  const collections = use(promise); 

  return <HeroCarousel collections={collections} />;
}