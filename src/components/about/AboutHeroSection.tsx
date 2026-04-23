import { Navbar } from "../Navbar";
import { motion } from "framer-motion";

export function AboutHeroSection() {
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
      } as any,
    }),
  };

  // 2. Smooth Reveal Variants
  const contentVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 15,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      } as any,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.8,
      } as any,
    },
  };

  return (
    <section className="relative w-full h-[100dvh] xl:h-[130dvh] overflow-hidden bg-black flex justify-center">

      {/* 1. Cinematic Background Image */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        src="/images/about/portrait.webp"
        alt="About Hero Portrait"
        className="absolute inset-0 w-full h-full object-cover object-center lg:object-center"
      />

      {/* Hero Content Wrapper - 1920px Design Space */}
      <div className="relative w-full max-w-[1920px] h-full flex flex-col items-center">

        <div className="absolute top-0 w-full z-20">
          <Navbar />
        </div>

        {/* Primary Interaction Layer */}
        <motion.div
           variants={contentVariants}
           initial="hidden"
           animate="visible"
           className="relative z-10 w-full h-full flex flex-col items-center justify-center p-[5%]"
        >
          
          {/* Decorative Grid Ruler - Intersecting the top of the word ABOUT */}
          <div className="absolute top-[28%] xl:top-[22%] left-0 right-0 w-full pointer-events-none px-[4vw]">
            <motion.div className="flex w-full items-center justify-center opacity-50 mix-blend-screen overflow-visible">
              <img
                src="/images/about/bedge.webp"
                alt="Decorative Badge Ruler"
                className="w-[150%] sm:w-[120%] max-w-none object-contain"
              />
            </motion.div>
          </div>

          {/* Giant Centered Text "ABOUT" */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 w-full">
             <h1
               className="text-center leading-[0.85] select-none text-[clamp(4rem,25vw,28rem)] font-bold tracking-tight text-white mix-blend-overlay opacity-60"
             >
               ABOUT
             </h1>
          </div>

          {/* Lower Center Details block */}
          <div className="absolute bottom-[10%] sm:bottom-[4%] xl:bottom-[6%] flex flex-col items-center text-center z-10 w-full max-w-4xl px-[5%] xl:px-4 gap-4 xl:gap-4">
            <h2 className="font-normal text-white text-[42px] sm:text-[64px] xl:text-[96px] leading-[1.1] xl:leading-[100px] tracking-tight">
              FLASH
            </h2>
            <p className="font-normal text-white text-[14px] sm:text-[16px] xl:text-[18px] leading-[1.5] xl:leading-[26px] max-w-[95%] sm:max-w-[400px] xl:max-w-[540px]">
              Capturing timeless moments with artistry, precision, 
              <br className="hidden xl:block"/> and passion—your story framed beautifully through 
              <br className="hidden xl:block"/> professional photography.
            </p>
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
