import { createFileRoute } from "@tanstack/react-router";
import { AboutHeroSection } from "../components/about/AboutHeroSection";
import { AboutMeSection } from "../components/about/AboutMeSection";
import { MyStorySection } from "../components/about/MyStorySection";
import { MyApproachSection } from "../components/about/MyApproachSection";
import { GearSoftwareSection } from "../components/about/GearSoftwareSection";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FLASH" },
      {
        name: "description",
        content:
          "Behind FLASH — a cinematic photographer crafting wedding, portrait, and lifestyle stories.",
      },
      { property: "og:title", content: "About — FLASH" },
      {
        property: "og:description",
        content: "Behind the lens of FLASH — light, story, and quiet observation.",
      },
      { property: "og:image", content: "/images/about/portrait.webp" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
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
