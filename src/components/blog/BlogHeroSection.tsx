import { Navbar } from "../Navbar";
import { motion } from "framer-motion";

export function BlogHeroSection() {
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
    <section className="relative w-full h-dvh overflow-hidden bg-black flex justify-center">

      {/* 1. Cinematic Background Image */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        src="/images/blog/blog_hero.webp"
        alt="Blog Hero Portrait"
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
          <div className="absolute right-[5%] md:right-[3%] xl:right-[3%] top-[25dvh] xl:top-[32dvh] max-w-[85%] sm:max-w-[400px] xl:max-w-[540px] text-right">
             <p className="text-[14px] sm:text-[16px] xl:text-[18px] leading-normal xl:leading-[26px] font-normal text-white uppercase tracking-wide">
               CAPTURING EMOTIONS WITH ARTISTRY, MY PHOTOGRAPHY EMBRACES
               WEDDINGS, PORTRAITS, AND LIFESTYLE SESSIONS—PRESERVING YOUR
               STORY WITH ELEGANCE AND TIMELESS BEAUTY.
             </p>
          </div>

          {/* Bottom Row Wrapper: Ruler (65%) and Title (35%) */}
          <div className="absolute bottom-[16%] xl:bottom-[16%] left-0 w-full px-[8%] md:px-[3%] xl:px-[3%] flex flex-col xl:flex-row items-end justify-end xl:justify-between pointer-events-none gap-4">
            
            {/* Decorative Grid Ruler */}
            <motion.div className="hidden xl:flex w-full items-center opacity-70 mix-blend-screen">
              <img
                src="/images/blog/bedge.webp"
                alt="Decorative Badge Ruler"
                className="w-full h-auto object-contain object-left"
              />
            </motion.div>

            {/* Giant Text "From the Blog" */}
            <div className="w-full xl:w-[25%] flex justify-end">
               <h1
                 className="text-right font-normal select-none text-[42px] sm:text-[60px] xl:text-[96px] leading-[1.1] xl:leading-[100px] text-white whitespace-nowrap"
                 
               >
                 From the Blog
               </h1>
            </div>
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
