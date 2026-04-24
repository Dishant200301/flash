import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/modules/contact/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — FLASH" },
      {
        name: "description",
        content: "Let's connect and capture your moments together. Get in touch with FLASH.",
      },
      { property: "og:title", content: "Contact — FLASH" },
      {
        property: "og:description",
        content: "Get in touch with FLASH photography studio.",
      },
      { property: "og:image", content: "/images/contact/hero.webp" },
    ],
  }),
  component: ContactPage,
});
