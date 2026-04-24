import { AboutHeroSection } from "./components/AboutHeroSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { MyApproachSection } from "./components/MyApproachSection";
import { MyStorySection } from "./components/MyStorySection";
import { GearSoftwareSection } from "./components/GearSoftwareSection";
import { Footer } from "@/components/Footer";

export function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <AboutHeroSection />
      <AboutMeSection />
      <MyApproachSection />
      <MyStorySection />
      <GearSoftwareSection />
      <Footer />
    </main>
  );
}
