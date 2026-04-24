import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { MagnetButton } from "@/components/ui/MagnetButton";
import { useCountUp } from "@/lib/use-reveal";
import { useNavigate } from "@tanstack/react-router";

interface AboutCardData {
  readonly src: string;
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
  readonly isK?: boolean;
}

const cards: readonly AboutCardData[] = [
  {
    src: "/images/home/about-1.webp",
    value: 10,
    suffix: "+",
    label: "Years of Experience"
  },
  {
    src: "/images/home/about-2.webp",
    value: 3100,
    suffix: "K+",
    label: "Photoshoots Completed",
    isK: true
  },
  {
    src: "/images/home/about-3.webp",
    value: 3500,
    suffix: "K+",
    label: "Happy Clients Captured",
    isK: true
  },
];

export function AboutIntroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full xl:h-[1408px] bg-white overflow-hidden font-sans">
      
      {/* About Wrapper */}
      <div className="relative xl:absolute xl:top-[140px] left-0 xl:left-[48px] right-0 xl:right-[48px] xl:h-[588px] max-w-[1920px] mx-auto px-[5%] md:px-4 xl:px-0 pt-10 xl:pt-0">

        {/* Caption Button Area */}
        <div className="relative xl:absolute xl:top-0 xl:left-0 w-[310.72px] h-[26px] mb-6 xl:mb-0">
          {/* Caption Icon */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[12px] h-[18px]">
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9L0 18L0 0L12 9Z" fill="#FF462E" />
            </svg>
          </div>
          {/* Caption Text */}
          <span className="absolute top-1/2 -translate-y-1/2 left-[24px] w-[103.48px] h-[26px] flex items-center text-[16.2px] leading-[26px] font-normal text-[#05080C] whitespace-nowrap">
            Hey, Just a Quick Intro
          </span>
        </div>

        {/* About Content Wrapper (Right Side starts at 30% Left) */}
        <div className="relative xl:absolute xl:top-0 xl:left-[30%] xl:right-0 xl:h-[588px] flex flex-col">

          {/* Main Heading Text */}
          <div className="relative xl:absolute xl:top-[-3px] left-0 right-[13.28px] xl:h-[234px] flex items-center mb-6 xl:mb-0">
            <h2 className="text-[34px] sm:text-[40px] xl:text-[63.2px] leading-[1.1] xl:leading-[76px] font-medium tracking-tight xl:tracking-[-2.04px] text-[#05080C]">
              I don’t just frame images. I reveal the stories inside the joy, the sorrow, and everything that connects them.
            </h2>
          </div>

          {/* Magnet Button CTA (starts at 276px top) */}
          <div className="relative xl:absolute xl:top-[276px] left-0 mb-10 xl:mb-0">
            <MagnetButton
              text="Check out my work"
              variant="light"
              onClick={() => navigate({ to: "/portfolio" })}
            />
          </div>

          {/* Proportional Split Info Content Row (starts at 396px top) */}
          <div className="relative xl:absolute xl:top-[396px] left-0 right-0 xl:h-[192px] flex flex-col xl:flex-row">

            {/* Left: Testimonial (approx 60% of content wrapper) */}
            <div className="flex-6 w-full xl:h-full flex flex-col xl:flex-row items-start xl:items-center gap-4 xl:gap-6 xl:pr-12 pt-8 pb-8 xl:py-0 border-t xl:border-y border-[#E2E2E3]">
              <div className="w-[52px] h-[52px] rounded-full bg-gray-200 overflow-hidden shrink-0">
                <img src="/images/home/testimonial-hero.webp" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="text-[16.2px] font-semibold text-[#05080C]">4.9 / 5</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#05080C] text-[#05080C]" />
                    ))}
                  </div>
                </div>
                <p className="text-[14.6px] leading-[24px] text-[#5B5B5B] mt-2 max-w-[420px]">
                  “Every photo tells a story with stunning clarity—professional, creative, and truly unforgettable work.”
                </p>
                <p className="text-[14.9px] font-semibold text-[#05080C] mt-2">Michael Turner, Event Planner</p>
              </div>
            </div>

            {/* Right: Philosophy (approx 40% of content wrapper) */}
            <div className="flex-4 w-full xl:h-full flex flex-col justify-center xl:pl-12 py-8 xl:py-0 border-y border-[#E2E2E3]">
              <h3 className="text-[18px] xl:text-[22.1px] leading-[32px] font-medium tracking-[-1px] text-[#05080C] mb-2 xl:uppercase opacity-80 xl:text-xs xl:tracking-wider">
                Capturing Genuine Emotions
              </h3>
              <p className="text-[16.3px] leading-[26px] text-[#5B5B5B]">
                Every smile, tear, and candid moment tells a story. I focus on authentic expressions to create images that truly resonate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Items Wrap (Bottom Cards) */}
      <div className="relative xl:absolute mt-8 xl:mt-0 xl:top-[828px] left-0 xl:left-[48px] right-0 xl:right-[48px] xl:h-[440px] flex flex-col xl:flex-row gap-5 max-w-[1920px] mx-auto px-[5%] md:px-4 xl:px-0 pb-16 xl:pb-0">
        {cards.map((card, i) => (
          <AboutCard key={i} card={card} />
        ))}
      </div>

    </section>
  );
}

function AboutCard({ card }: { card: AboutCardData }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { value } = useCountUp(card.value, 1600, isInView);

  const display = card.isK
    ? `${(value / 1000).toFixed(1).replace(/\.0$/, "")}${card.suffix}`
    : `${value}${card.suffix}`;

  return (
    <div ref={ref} className="group relative w-full xl:flex-1 h-[440px] rounded-sm overflow-hidden shrink-0">
      <img
        src={card.src}
        alt={card.label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-2000"
      />
      {/* Card Content Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[154px] bg-[#05080C]/48 backdrop-blur-md flex flex-col items-center justify-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-[68px] font-bold tracking-[-3px] leading-[76px] tabular-nums"
        >
          {display}
        </motion.span>
        <span className="text-white text-[16.5px] font-medium leading-[26px]">
          {card.label}
        </span>
      </div>
    </div>
  );
}
