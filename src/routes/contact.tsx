import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Toaster } from "../components/ui/sonner";
import { ContactHeroSection } from "../components/contact/ContactHeroSection";
import { ContactSection } from "../components/contact/ContactSection";
import { ContactInfoSection } from "../components/home/ContactInfoSection";

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

function ContactPage() {
  return (
    <main className="relative bg-[#05080c] min-h-screen overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Toaster />
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
