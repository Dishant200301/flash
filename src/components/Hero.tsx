import { Navbar } from "./Navbar";
import { motion } from "framer-motion";

/**
 * FLASH Cinematic Hero - PIXEL PERFECT ARCHITECTURE
 * Fully updated with provided CSS coordinates and Tailwind-first approach.
 * Design Parity: Reference Image 1
 */
export function Hero() {
  const SLAT_COUNT = 10;

  // 1. Blind Loader Variants
  const slatVariants = {
    initial: { scaleX: 1 },
    animate: (i: number) => ({
      scaleX: 0,
      transition: {
        duration: 1.1,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.15 + i * 0.05,
      },
    }),
  };

  // 2. Smooth Reveal Variants (Blur + Opacity)
  const contentVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 15 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.8
      }
    }
  };

  return (
    <section className="relative w-full h-[100dvh] xl:h-[120dvh] overflow-hidden bg-black flex justify-center">

      {/* 1. Cinematic Background Image - Stylish Portrait */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        src="/images/home/hero_bg.webp"
        alt="Stylish portrait wearing round red sunglasses"
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
          className="relative z-10 w-full h-full flex flex-col xl:block"
        >
          {/* Hero Top Wrap (Left Block) - Precise positioning at 25.13% Left */}
          <div
            className="relative xl:absolute mt-[15dvh] sm:mt-[20dvh] xl:mt-0 px-[5%] sm:px-[8%] lg:px-[12%] xl:px-0 w-full sm:w-[85%] xl:w-[486px] h-auto xl:h-[302px] xl:left-[332.56px] xl:top-[35dvh] z-20 shrink-0"
          >
            <p className="text-[14px] sm:text-[15px] xl:text-[16px] leading-[1.6] xl:leading-[24px] font-normal text-white uppercase tracking-tight mb-4 sm:mb-6 xl:mb-[24px] max-w-full sm:max-w-[80%] xl:max-w-none">
              CAPITURING AUTHENTIC MOMENTS WITH CREATIVE , <br className="hidden xl:block" />
              MY PHOTOGRAPHY SHOWCASES WEDDINGS <br className="hidden xl:block" />
              PORTRAITS , AND LIFESTYLE SESSIONS—TELLING <br className="hidden xl:block" />
              YOUR STORY BEAUTIFULL & TIMELESSLY
            </p>
            <a
              href="mailto:HELLO@FLASH.COM"
              className="hover:underline text-[16px] sm:text-[17px] xl:text-[18px] leading-[26px] font-normal text-white tracking-[0.15em] sm:tracking-[0.2em] xl:tracking-[0.25em] transition-opacity"
            >
              HELLO@FLASH.COM
            </a>
          </div>

          {/* Hero Info Content Wrapper (Right Card) - Positioned at 80.2% Left */}
          <div
            className="relative xl:absolute mt-[4dvh] sm:mt-[6dvh] lg:mt-[-5dvh] xl:mt-0 w-[260px] sm:w-[312px] h-[152px] sm:h-[182px] xl:left-[1140px] xl:top-[50dvh] self-center sm:self-end xl:self-auto sm:mr-[5%] lg:mr-[12%] xl:mr-0 z-20 shrink-0"
          >
            <div className="group relative w-full h-full rounded-[4px] overflow-hidden border border-white/5 bg-white/5 backdrop-blur-md shadow-2xl">
              <img
                src="/images/home/recent_work.webp"
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-[2000ms]"
                alt="Wedding"
              />
              <div className="relative h-full flex flex-col items-center justify-center text-center text-white">
                <span className="text-[14px] sm:text-[18px] leading-[26px] font-normal tracking-[0.1em] sm:tracking-[0.2em] uppercase mb-1 opacity-70">RECENT WORK</span>
                <span className="text-[36px] sm:text-[48px] leading-[1.1] sm:leading-[52px] font-normal tracking-[-1.5px] sm:tracking-[-2px]">Wedding</span>
              </div>
            </div>
          </div>

          {/* Decorative Grid Ruler - Balanced and subtle */}
          <div className="absolute bottom-[20%] sm:bottom-[30%] xl:bottom-[35%] left-0 right-0 w-full pointer-events-none px-[2vw] xl:px-[4vw] overflow-hidden xl:overflow-visible flex justify-center">
            {/* Circular Badge - Premium touch */}
            <motion.div
              className="flex w-[150%] max-w-none sm:w-[120%] xl:w-full items-center justify-center opacity-100 mix-blend-screen"
            >
              <img
                src="/images/home/bedge.webp"
                alt="Decorative Badge"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

          {/* Hero Title Image (Giant Label) - Precisely anchored at the viewport bottom */}
          <div className="absolute bottom-[3%] sm:bottom-[2%] xl:bottom-[-2%] left-[4vw] right-[4vw] xl:left-[68px] xl:right-[68px] pointer-events-none flex justify-center">
            <h1
              className="text-mega text-center leading-[0.85] xl:leading-[0.75] select-none text-[clamp(6rem,24vw,29rem)] xl:text-[clamp(10rem,22.5vw,29rem)] [WebkitTextStroke:1px_rgba(255,255,255,0.06)] bg-gradient-to-b from-white/[0.04] to-white/[0.12] bg-clip-text text-transparent"
            >
              FLASH
            </h1>
          </div>
        </motion.div>
      </div>

      {/* 2. PRO VERTICAL BLIND LOADER (Reveal from Left to Right) */}
      <div className="absolute inset-0 z-[200] flex pointer-events-none overflow-hidden">
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