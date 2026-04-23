import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { BlogHeroSection } from "../components/blog/BlogHeroSection";
import { Footer } from "../components/Footer";
import { BlogGrid } from "../components/blog/BlogGrid";
import { useRevealOnScroll } from "../lib/use-reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — FLASH" },
      {
        name: "description",
        content:
          "Field notes, technique, and reflections on photography from the FLASH studio.",
      },
      { property: "og:title", content: "Blog — FLASH" },
      {
        property: "og:description",
        content: "Field notes from the FLASH studio.",
      },
      { property: "og:image", content: "/images/blog/hero.webp" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const ref = useRevealOnScroll<HTMLElement>();
  return (
    <main className="bg-background text-foreground" ref={ref}>
      <BlogHeroSection />

      <BlogGrid />

      <Footer />
    </main>
  );
}
