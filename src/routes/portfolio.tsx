import { createFileRoute } from "@tanstack/react-router";
import { PortfolioHeroSection } from "../components/portfolio/PortfolioHeroSection";
import { PortfolioListSection } from "../components/portfolio/PortfolioListSection";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — FLASH" },
      {
        name: "description",
        content: "Selected photographic work — weddings, portraits, lifestyle and editorial.",
      },
      { property: "og:title", content: "Portfolio — FLASH" },
      {
        property: "og:description",
        content: "Selected works by FLASH.",
      },
      { property: "og:image", content: "/images/portfolio/hero.webp" },
    ],
  }),
  component: PortfolioPage,
});

function AboutPage() {
  return (
    <main className="bg-white text-[#05080C] overflow-hidden">
      <PortfolioHeroSection />
      <PortfolioListSection />
      <Footer />
    </main>
  );
}

const PortfolioPage = AboutPage;
