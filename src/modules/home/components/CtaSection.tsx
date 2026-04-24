import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MagnetButton } from "@/components/ui/MagnetButton";

export function CtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Smooth springs for a premium "Framer" feel
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 25 });

  // Animation Logic:
  // Images start perfectly touching in the center. 
  // Container is 100vw, image is 32vw. 
  // To touch the center, left image shifts right by 18vw (50vw - 32vw).
  const leftX = useTransform(smoothProgress, [0.1, 0.6], ["18vw", "0vw"]);
  const rightX = useTransform(smoothProgress, [0.1, 0.6], ["-18vw", "0vw"]);
  
  // Content fades in and floats up smoothly as the images part
  const contentOpacity = useTransform(smoothProgress, [0.4, 0.8], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.4, 0.8], [40, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white py-12 xl:py-[140px] px-4  flex flex-col xl:flex-row items-center justify-between gap-12 sm:gap-16 xl:gap-0"
    >
      {/* Left Image */}
      <motion.div 
        style={{ x: leftX }}
        className="relative w-full xl:w-[32%] aspect-4/3 sm:aspect-video xl:aspect-2400/2640 max-w-none xl:max-w-[600px] shrink-0 overflow-hidden rounded-sm xl:rounded-sm"
      >
        <img 
          src="https://framerusercontent.com/images/8oQLL3ZLStdkVC04APCQ1xlEdd8.png" 
          alt="Woman on beach"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Center Content Wrapper */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }}
        className="flex flex-col items-center justify-center text-center z-10 w-full xl:w-[36%] max-w-[95%] sm:max-w-[550px] px-4"
      >
        <div className="mb-6 w-full">
          {/* Two-line heading mimicking the reference tracking and line-height */}
          <h2 
            className="text-[#05080c] font-medium text-[32px] sm:text-[42px] xl:text-[56px] leading-[1.1] xl:leading-[1.1] tracking-tight xl:tracking-[-2.04px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Your story <br className="hidden sm:block" />
            Captured with emotion
          </h2>
        </div>

        <p 
          className="text-[#5b5b5b] text-[14px] sm:text-[16.5px] leading-normal xl:leading-[26px] mb-8 xl:mb-[32px] max-w-full sm:max-w-[460px] mx-auto px-4 xl:px-0"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Choose your preferred date and photography package. I'll confirm availability and lock in your booking.
        </p>

        {/* Animated Magnet Button */}
        <div className="mt-2 text-decoration-none">
          <Link to="/contact">
            <MagnetButton text="Book your session" variant="light" />
          </Link>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        style={{ x: rightX }}
        className="relative w-full xl:w-[32%] aspect-4/3 sm:aspect-video xl:aspect-2400/2640 max-w-none xl:max-w-[600px] shrink-0 overflow-hidden rounded-sm xl:rounded-sm"
      >
        <img 
          src="https://framerusercontent.com/images/30ZPuPTzpmvgNmLnx6cXgGN38KE.png" 
          alt="Person with orange hat"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}