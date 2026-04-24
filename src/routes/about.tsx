import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/modules/about/about";

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
