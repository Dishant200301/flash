import { Navbar } from "../Navbar";
import { motion } from "framer-motion";

export function PortfolioHeroSection() {
  const SLAT_COUNT = 10;

  // 1. Blind Loader Variants
  const slatVariants = {
    initial: { scaleX: 1 },
    animate: (i: number) => ({
      scaleX: 0,
      transition: {
        duration: 1.1,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
        delay: 0.15 + i * 0.05,
      },
    }),
  };

  // 2. Smooth Reveal Variants
  const contentVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 15 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay: 0.8
      }
    }
  };

  return (
    <section className="relative w-full h-[120dvh] overflow-hidden bg-black flex justify-center">

      {/* 1. Cinematic Background Image */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        src="/images/home/portfolio/portfolio_hero.webp"
        alt="Portfolio Hero Portrait"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Hero Content Wrapper - 1920px Design Space */}
      <div className="relative w-full max-w-[1920px] h-full">

        <Navbar />

        {/* Primary Interaction Layer */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full h-full"
        >

          {/* Top Right Info Block */}
          <div className="absolute right-[5%] xl:right-[3%] top-[15dvh] sm:top-[25dvh] xl:top-[32dvh] max-w-[90%] sm:max-w-[400px] xl:max-w-[540px] text-right">
            <p className="font-['Inter_Tight',sans-serif] text-[13px] sm:text-[16px] xl:text-[18px] leading-normal xl:leading-[26px] font-normal text-white uppercase tracking-wide mb-[24px] xl:mb-[32px]">
              CAPTURING EMOTIONS WITH ARTISTRY, MY PHOTOGRAPHY EMBRACES WEDDINGS,
              PORTRAITS, AND LIFESTYLE SESSIONS—PRESERVING YOUR STORY WITH ELEGANCE AND
              TIMELESS BEAUTY.
            </p>
            <a
              href="mailto:hello@Raku25.com"
              className="font-['Inter_Tight',sans-serif] text-[16px] xl:text-[18px] leading-[26px] font-medium text-white hover:underline transition-opacity"
            >
              hello@Raku25.com
            </a>
          </div>

          {/* Decorative Grid Ruler - Balanced and subtle */}
          <div className="absolute bottom-[20%] sm:bottom-[23%] xl:bottom-[33%] left-0 right-0 w-full pointer-events-none px-[4vw]">
            <motion.div className="flex w-full items-center justify-center opacity-90 mix-blend-screen overflow-visible">
              <img
                src="/images/home/portfolio/bedge.webp"
                alt="Decorative Badge Ruler"
                className="w-[150%] max-w-none xl:w-[120%] object-contain"
              />
            </motion.div>
          </div>

          {/* Giant Text "PORTFOLIO" */}
          <div className="absolute bottom-[3%] left-[24px] sm:left-[88px] right-[24px] sm:right-[88px] pointer-events-none flex justify-center">
            <h1
              className="text-mega text-center leading-[0.75] select-none text-[clamp(4rem,18vw,9rem)] xl:text-[clamp(9rem,17.5vw,26rem)] font-bold tracking-tight text-white mix-blend-overlay opacity-60"
            >
              PORTFOLIO
            </h1>
          </div>
        </motion.div>
      </div>

      {/* 2. PRO VERTICAL BLIND LOADER (Reveal from Left to Right) */}
      <div className="absolute inset-0 z-200 flex pointer-events-none overflow-hidden">
        {Array.from({ length: SLAT_COUNT }).map((_, i) => (
          <div key={i} className="h-full relative overflow-hidden flex-1">
            <motion.div
              custom={i}
              variants={slatVariants}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-[#0a0a0a] origin-left"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
