import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/modules/portfolio/portfolio";

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
