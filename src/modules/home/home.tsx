import { Hero } from "./components/Hero";
import { AboutIntroSection } from "./components/AboutIntroSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { PortfolioPreviewSection } from "./components/PortfolioPreviewSection";
import { ProcessSection } from "./components/ProcessSection";
import { CtaSection } from "./components/CtaSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { BlogSection } from "./components/BlogSection";
import { GetInTouchSection } from "./components/GetInTouchSection";
import { Footer } from "@/components/Footer";
import { useRevealOnScroll } from "@/lib/use-reveal";

export function HomePage() {
  const ref = useRevealOnScroll<HTMLDivElement>();
  return (
    <main ref={ref} className="bg-background text-foreground">
      <Hero />
      <AboutIntroSection />
      <ServicesSection />
      <WhyChooseSection />
      <PortfolioPreviewSection />
      <ProcessSection />
      <CtaSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogSection />
      <GetInTouchSection />
      <Footer />
    </main>
  );
}
