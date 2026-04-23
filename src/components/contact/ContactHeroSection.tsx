import { Navbar } from "../Navbar";
import { motion } from "framer-motion";

export function ContactHeroSection() {
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

  // 2. Smooth Reveal Variants
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
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black flex justify-center">

      {/* 1. Cinematic Background Image */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        src="/images/contact/conatct_hero.webp"
        alt="Contact Hero Portrait"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Hero Content Wrapper - 1920px Design Space */}
      <div className="relative w-full max-w-[1920px] h-full">

        <div className="absolute top-0 w-full z-20">
          <Navbar />
        </div>

        {/* Primary Interaction Layer */}
        <motion.div
           variants={contentVariants}
           initial="hidden"
           animate="visible"
           className="relative z-10 w-full h-full flex flex-col"
        >
          
          {/* Top Right Info Block - Responsive adjustment */}
          <div className="absolute right-4 md:right-[5%] lg:right-[3%] top-[150px] md:top-[180px] lg:top-[32dvh] max-w-[90%] md:max-w-[540px] text-right px-0 md:px-0 z-20">
             <p className="font-['Inter_Tight',_sans-serif] text-[15px] md:text-[16px] lg:text-[18px] leading-[1.5] md:leading-[24px] lg:leading-[26px] font-normal text-white mb-[16px] md:mb-[24px] lg:mb-[32px] max-w-[280px] sm:max-w-[320px] md:max-w-none ml-auto">
               Capturing professional with artistry, my photography embraces weddings,
               portraits, and lifestyle sessions—preserving your story with elegance and
               timeless beauty.
             </p>
             <a
               href="mailto:hello@flash.com"
               className="font-['Inter_Tight',_sans-serif] text-[15px] md:text-[16px] lg:text-[18px] leading-[24px] md:leading-[26px] font-medium text-white hover:underline transition-opacity"
             >
               hello@flash.com
             </a>
          </div>

          {/* Decorative Grid Ruler - Balanced and subtle */}
          <div className="absolute bottom-[20%] sm:bottom-[28%] md:bottom-[23%] lg:bottom-[35%] left-0 right-0 w-full pointer-events-none px-[4vw]">
            <motion.div className="flex w-full items-center justify-center opacity-90 mix-blend-screen overflow-visible">
              <img
                src="/images/contact/bedge.webp"
                alt="Decorative Badge Ruler"
                className="w-[200%] md:w-[150%] max-w-none lg:w-[120%] object-contain scale-[1.2] sm:scale-100"
              />
            </motion.div>
          </div>

          {/* Giant Text "CONTACT" - Positioned at bottom as per ref */}
          <div className="absolute bottom-[-1%] md:bottom-[-3%] lg:bottom-[-5%] left-0 right-0 pointer-events-none flex justify-center overflow-hidden">
             <h1
               className="text-mega text-center leading-[0.75] select-none text-[clamp(4rem,20vw,26rem)] font-bold tracking-tight text-[#b0c8d6] mix-blend-overlay opacity-60"
               style={{ color: '#b0c8d6' }}
             >
               CONTACT
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
