import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/modules/blog/blog";

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
