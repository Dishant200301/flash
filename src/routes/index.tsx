import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { AboutIntroSection } from "../components/home/AboutIntroSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { WhyChooseSection } from "../components/home/WhyChooseSection";
import { PortfolioPreviewSection } from "../components/home/PortfolioPreviewSection";
import { ProcessSection } from "../components/home/ProcessSection";
import { CtaSection } from "../components/home/CtaSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { FaqSection } from "../components/home/FaqSection";
import { BlogSection } from "../components/home/BlogSection";
import { GetInTouchSection } from "../components/home/GetInTouchSection";
import { Footer } from "../components/Footer";
import { useRevealOnScroll } from "../lib/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FLASH — Cinematic Photography Portfolio" },
      {
        name: "description",
        content:
          "Wedding, portrait & lifestyle photography by FLASH. Stories captured with emotion and timeless cinematic light.",
      },
      { property: "og:title", content: "FLASH — Cinematic Photography" },
      {
        property: "og:description",
        content: "Stories captured with emotion. Weddings, portraits, lifestyle.",
      },
      { property: "og:image", content: "/images/home/hero.webp" },
    ],
  }),
  component: Index,
});

function Index() {
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
