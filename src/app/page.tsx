import { HeroCarousel } from "@/components/hero-carousel";
import { getCollection } from "@/lib/db";

export default async function Home() {
  const collection = await getCollection("collections");
  const result = await collection?.find().toArray();

  const collections = result ? result.map((item) => ({
    _id: item._id.toString(),
    name: item.name,
    subtitle: item.subtitle,
    image: item.image,
    slug: item.slug,
  })) : [];

  return (
    <>
      <HeroCarousel collections={collections}></HeroCarousel>
    </>
  );
}
