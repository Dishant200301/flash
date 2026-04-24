import { PortfolioHeroSection } from "./components/PortfolioHeroSection";
import { PortfolioListSection } from "./components/PortfolioListSection";
import { Footer } from "@/components/Footer";

export function PortfolioPage() {
  return (
    <main className="bg-white text-[#05080C] overflow-hidden">
      <PortfolioHeroSection />
      <PortfolioListSection />
      <Footer />
    </main>
  );
}
