import { BlogHeroSection } from "./components/BlogHeroSection";
import { BlogGrid } from "./components/BlogGrid";
import { Footer } from "@/components/Footer";
import { useRevealOnScroll } from "@/lib/use-reveal";

export function BlogPage() {
  const ref = useRevealOnScroll<HTMLElement>();
  return (
    <main className="bg-background text-foreground" ref={ref}>
      <BlogHeroSection />
      <BlogGrid />
      <Footer />
    </main>
  );
}
