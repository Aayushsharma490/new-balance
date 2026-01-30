import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { BrandStory } from "@/components/home/brand-story";
import { ScrollVideo } from "@/components/home/scroll-video";
import { CategorySections } from "@/components/home/category-sections";
import { FeaturedProducts } from "@/components/home/featured-products";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <BrandStory />
        <ScrollVideo />
        <CategorySections />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}
