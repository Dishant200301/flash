import { ContactHeroSection } from "./components/ContactHeroSection";
import { ContactSection } from "./components/ContactSection";
import { ContactInfoSection } from "@/modules/home/components/ContactInfoSection";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export function ContactPage() {
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
