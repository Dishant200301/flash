import React, { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CornerDownRight } from "lucide-react";
import { MagnetButton } from "../ui/MagnetButton";

// Magnet Button Wrapper
function MagnetWrapper({ children, className, style, to }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      style={style}
    >
      <Link to={to} className="w-full h-full block group">
        {children}
      </Link>
    </motion.div>
  );
}

export function AboutMeSection() {
  return (
    <section className="w-full bg-white text-[#05080C] py-12 xl:py-[100px] overflow-hidden relative min-h-auto xl:min-h-[900px]">
      <div className="w-full max-w-[1440px] mx-auto px-[5%] sm:px-4 xl:px-12 relative h-auto xl:h-[584px] flex flex-col xl:block">
        
        {/* Mobile/Tablet: Heading first */}
        <div className="xl:hidden mb-6 sm:mb-8">
           <h2 className="text-[42px] sm:text-[56px] leading-[1.1] font-medium tracking-tight sm:tracking-[-2px] font-['Inter',sans-serif]">
            About me
          </h2>
        </div>

        {/* About Left Content Wrapper - Desktop: Absolute, Mobile: Relative/Flex */}
        <div className="relative xl:absolute top-0 left-0 xl:left-[48px] w-full xl:w-[832px] h-auto xl:h-[584px] flex flex-col gap-8 sm:gap-12 xl:gap-0">
          
          {/* Heading: About me (Desktop only) */}
          <h2 className="hidden xl:block absolute top-0 -left-16 h-[100px] text-[87.9px] leading-[100px] font-medium tracking-[-4px] font-['Inter',sans-serif]">
            About me
          </h2>

          {/* Middle Content Wrap (Text + Button) */}
          <div className="relative xl:absolute xl:bottom-[240px] left-0 w-full h-auto xl:h-[96px] flex flex-col sm:flex-row xl:items-end justify-between gap-6 sm:gap-4 xl:gap-0">
            <p className="w-full xl:w-[515px] sm:flex-1 xl:flex-none text-[18px] sm:text-[20px] xl:text-[22.1px] leading-[1.4] sm:leading-normal xl:leading-[32px] font-medium tracking-tight xl:tracking-[-1px] font-['Inter',sans-serif] text-[#05080C]">
              Hey, I'm FLASH, a passionate photographer based in London. I focus on portraits and Wedding photography, and I genuinely enjoy capturing all kinds of unique stories.
            </p>
            
            <div className="relative xl:mb-[2px] flex sm:items-end xl:items-center">
              <MagnetButton text="Contact Me" to="/contact" />
            </div>
          </div>

          {/* Bottom Content Wrap (Goal Section) */}
          <div className="relative xl:absolute bottom-0 left-0 w-full h-auto xl:h-[172px] border-t border-[#E2E2E3] pt-6 sm:pt-8 xl:pt-0">
            <div className="relative xl:pt-[68px] flex flex-col xl:flex-row items-start gap-4 sm:gap-6 xl:gap-[100px]">
              <h3 className="w-full xl:w-[232px] text-[22px] sm:text-[26px] xl:text-[29.3px] leading-[1.2] xl:leading-[40px] font-medium tracking-tight xl:tracking-[-1px] font-['Inter',sans-serif] text-[#05080C]">
                My Goal is Simple
              </h3>
              <p className="w-full xl:flex-1 text-[16px] sm:text-[18px] xl:text-[16.3px] leading-[1.6] xl:leading-[26px] font-normal font-['Inter',sans-serif] text-[#5B5B5B]">
                I capture real moments that feel like you. I want you to feel comfortable and just be yourself in front of the camera, whether it's on your wedding day, during a family session, or while working on a creative project together.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column - Image Wrap - Desktop: Absolute, Mobile: Relative/Flex (Order controlled via flex) */}
        <div className="hidden xl:block relative xl:absolute top-0 right-0 xl:right-[48px] w-full xl:w-[460px] h-auto sm:h-[450px] aspect-4/5 sm:aspect-auto xl:h-[584px] mt-10 sm:mt-12 xl:mt-0 order-first xl:order-0">
          <div className="relative w-full h-full rounded-[8px] overflow-hidden bg-gray-100">
            <img 
              src="/images/about/about_me.webp" 
              alt="Raku Spesnur portrait" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
