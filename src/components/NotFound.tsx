import { useNavigate } from "@tanstack/react-router";
import { MagnetButton } from "@/components/ui/MagnetButton";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{ fontFamily: "'Inter Tight', sans-serif" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Background image — mobile gets a smaller bg-size via scoped style */}
      <style>{`
        @media (max-width: 767px) {
          .nf-bg { background-size: auto 50% !important; }
        }
      `}</style>
      <div
        className="nf-bg absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/notfound/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Main content
          mobile  : pt-24 (navbar is absolute, give it breathing room)
          desktop : pt-16 (unchanged) */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 min-h-screen pt-24 lg:pt-16 px-4 lg:px-0">

        {/* Heading
            mobile  : text clamps from 2rem → 3rem
            desktop : text clamps from 3rem → 6.5rem (unchanged) */}
        <div className="text-center mb-4">
          <h1
            className={[
              "font-sans font-medium text-white leading-[1.05] tracking-[-0.03em]",
              // mobile/tablet
              "text-[clamp(2rem,10vw,3rem)]",
              // desktop override
              "lg:text-[clamp(3rem,8vw,6.5rem)]",
            ].join(" ")}
          >
            Oops!<br />Page not found
          </h1>
        </div>

        {/* Subtitle
            mobile  : text-sm, max-w-[90vw]
            desktop : unchanged (clamp + max-w-[480px]) */}
        <p
          className={[
            "font-sans font-normal text-center mb-8 lg:mb-10 leading-relaxed text-white",
            // mobile / tablet
            "text-sm max-w-[90vw]",
            // desktop override — restore original values
            "lg:text-[clamp(0.78rem,1.4vw,0.95rem)] lg:leading-[26px] lg:max-w-[480px]",
          ].join(" ")}
        >
          That page is missing,{" "}
          <span className="text-white">but your journey to stunning photography</span>{" "}
          is only just beginning.
        </p>

        {/* Camera illustration
            mobile  : width 75vw (fills screen nicely, never < 220px)
            desktop : original clamp(380px, 38vw, 560px) — unchanged */}
        <div
          className="flex items-center justify-center mb-8 lg:mb-10"
        >
          <div className="relative flex-shrink-0 w-[55vw] max-w-[200px] lg:w-auto lg:max-w-none"
            style={{
              // desktop gets the original pixel clamp; mobile overridden by Tailwind above
            }}
          >
            {/* desktop-only fixed width via inline style scoped to lg */}
            <style>{`
              @media (min-width: 1024px) {
                .notfound-camera { width: clamp(380px, 38vw, 560px); }
              }
            `}</style>
            <div className="relative notfound-camera w-full">
              {/* Badge */}
              <img
                src="/images/notfound/bedge.webp"
                alt="badge"
                className="absolute"
                style={{
                  width: "55%",
                  top: "-8%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                }}
              />
              {/* Camera */}
              <img
                src="/images/notfound/404.webp"
                alt="Sad camera illustration"
                className="relative w-full"
                style={{ zIndex: 1 }}
              />
            </div>
          </div>
        </div>

        {/* Back to Homepage button — same on all sizes */}
        <MagnetButton
          text="Back to Homepage"
          variant="dark"
          onClick={() => navigate({ to: "/" })}
        />
      </div>

      {/* Ruler bar
          mobile  : hidden (numbers overflow on small screens)
          desktop : shown (unchanged) */}
      <div className="relative z-10 flex-col hidden lg:flex">
        <div
          className="flex justify-between px-4"
          style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem", marginBottom: "2px" }}
        >
          {["03","04","05","06","07","08","09","10"].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
        <div className="ruler-line" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
