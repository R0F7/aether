import { HeroCarousel } from "@/components/hero-carousel";
import { collections } from "@/lib/mock-data";
import {getCollection} from "@/lib/db";


export default async function Home() {
  const collection = await getCollection("collections");


  return (
    <>
      <HeroCarousel collections={collections}></HeroCarousel>
    </>
  );
}
