import { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { portfolioItems } from "../../data/portfolio";
import { PortfolioCard } from "./PortfolioCard";

export function PortfolioListSection() {
  const [hoveredCover, setHoveredCover] = useState<string | null>(null);
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <section className="py-16 sm:py-24 xl:py-32 bg-white relative overflow-hidden">
      
      {/* GLOBAL GLASS REFRACTION CURSOR - Floats above all cards to prevent clipping */}
      <AnimatePresence>
        {hoveredCover && (
          <motion.div
            className="hidden xl:block fixed pointer-events-none z-[9999] rounded-full overflow-hidden"
            style={{
              left: cursorX,
              top: cursorY,
              x: "-50%",
              y: "-50%",
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.05) 100%)",
            }}
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ width: 250, height: 250, opacity: 1 }}
            exit={{ width: 0, height: 0, opacity: 0 }}
          >
            {/* Layer 1: Edge Refraction Blur */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backdropFilter: "blur(12px) saturate(140%) brightness(1.1)",
                WebkitBackdropFilter: "blur(12px) saturate(140%) brightness(1.1)",
                maskImage: "radial-gradient(ellipse at center, transparent 40%, black 100%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, transparent 40%, black 100%)",
              }}
            />

            {/* Layer 2: Inverted Image Refraction */}
            <img 
              src={hoveredCover} 
              alt="Refraction"
              className="absolute inset-0 w-full h-full object-cover scale-[1.3] rotate-180 opacity-[0.85] mix-blend-normal pointer-events-none"
              style={{
                maskImage: "radial-gradient(ellipse at center, transparent 55%, black 100%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, transparent 55%, black 100%)",
              }}
            />

            {/* Layer 3: Secondary color refraction */}
            <img 
              src={hoveredCover} 
              alt="Refraction Color"
              className="absolute inset-0 w-full h-full object-cover scale-[1.5] rotate-180 opacity-60 mix-blend-overlay pointer-events-none"
              style={{
                maskImage: "radial-gradient(ellipse at center, transparent 65%, black 100%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, transparent 65%, black 100%)",
              }}
            />

            {/* Layer 4: Top Specular Glints */}
            <div className="absolute top-[4%] left-[10%] w-[50%] h-[15%] rounded-[100%] bg-gradient-to-b from-white/90 to-transparent blur-[2px] rotate-[-15deg] pointer-events-none" />
            <div className="absolute top-[8%] right-[15%] w-[30%] h-[10%] rounded-[100%] bg-gradient-to-b from-white/60 to-transparent blur-[1px] rotate-[20deg] pointer-events-none" />
            
            {/* Layer 5: Base Shadowing & Ambient Occlusion */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_-10px_20px_rgba(0,0,0,0.1)] pointer-events-none mix-blend-multiply" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Content */}
      <div className="flex flex-col items-center mb-16 xl:mb-24 text-center px-4">
        <h2 className="text-[36px] sm:text-[48px] xl:text-[62.8px] leading-[1.2] xl:leading-[76px] font-medium tracking-[-1px] xl:tracking-[-2.04px] text-[#05080C] mb-4 sm:mb-6 uppercase">
          Capture the moments
        </h2>
        <div className="flex flex-col items-center gap-1">
          <p className="text-[14px] sm:text-[16px] xl:text-[16.3px] leading-[1.5] xl:leading-[26px] font-normal text-[#5B5B5B] max-w-[90%] xl:max-w-[700px]">
            Discover a carefully curated collection of weddings, portraits, and lifestyle sessions that
          </p>
          <p className="text-[14px] sm:text-[16px] xl:text-[16.3px] leading-[1.5] xl:leading-[26px] font-normal text-[#5B5B5B] max-w-[90%] xl:max-w-[500px]">
            capture authentic emotions & timeless memories beautifully.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-[1920px] mx-auto px-[5%] sm:px-4 xl:px-12">
        <div className="grid gap-x-6 sm:gap-x-12 gap-y-16 xl:gap-y-12 grid-cols-1 xl:grid-cols-2">
          {portfolioItems.map((item) => (
            <PortfolioCard 
              key={item.slug} 
              item={item} 
              onHover={(cover) => setHoveredCover(cover)}
              onLeave={() => setHoveredCover(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
