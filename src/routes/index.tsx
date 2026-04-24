import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/modules/home/home";

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
  component: HomePage,
});
