import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useSpring } from "framer-motion";

const portfolioItems = [
  {
    slug: "emmas-wedding-day",
    title: "Emma's Wedding Day",
    category: "Weddings",
    date: "Oct 4, 2025",
    cover: "https://framerusercontent.com/images/f6zoflmi9QYyij7mkrwuXNW4.png",
  },
  {
    slug: "liams-outdoor-adventure",
    title: "Liam's Outdoor Adventure",
    category: "Outdoor",
    date: "Oct 4, 2025",
    cover: "https://framerusercontent.com/images/309ntP7xBCOPR7ouYY65hat1Ha4.png",
  },
  {
    slug: "olivias-beach-portrait",
    title: "Olivia's Beach Portrait",
    category: "Beach",
    date: "Oct 4, 2025",
    cover: "https://framerusercontent.com/images/pe8a9rsFjHIpNlWymyibDmjUbsQ.png",
  },
  {
    slug: "sophias-newborn-moments",
    title: "Sophia's Newborn Moments",
    category: "Newborn",
    date: "Oct 4, 2025",
    cover: "https://framerusercontent.com/images/g24cgxCEH5IvGnynJS0Aofx5Ri8.png",
  },
];

export function PortfolioPreviewSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Use springs for smooth cursor following
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const activeItem = portfolioItems.find((item) => item.slug === hoveredCard);
  const activeCover = activeItem?.cover;

  return (
    <section className="w-full bg-white py-[40px] sm:py-[60px] xl:py-[140px] px-4 sm:px-4 xl:px-[48px] relative overflow-hidden flex flex-col items-center">

      {/* GLASS REFRACTION CURSOR - Hidden on smaller breakpoints to avoid touch screen sticky-cursor issues */}
      <motion.div
        className="hidden xl:block fixed pointer-events-none z-[9999] rounded-full overflow-hidden"
        style={{
          left: cursorX,
          top: cursorY,
          x: "-50%",
          y: "-50%",
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.05) 100%)",
          boxShadow: "inset 0 10px 20px rgba(255,255,255,0.8), inset 0 -15px 30px rgba(0,0,0,0.4), 0 25px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.6)",
        }}
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={{
          width: hoveredCard ? 200 : 0,
          height: hoveredCard ? 200 : 0,
          opacity: hoveredCard ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        {/* Layer 1: Edge Refraction Blur (keeps center crystal clear) */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backdropFilter: "blur(12px) saturate(140%) brightness(1.1)",
            WebkitBackdropFilter: "blur(12px) saturate(140%) brightness(1.1)",
            maskImage: "radial-gradient(ellipse at center, transparent 40%, black 100%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, transparent 40%, black 100%)",
          }}
        />

        {/* Layer 2: Inverted Image Refraction (Versace Glass Effect) */}
        {activeCover && (
          <img 
            src={activeCover} 
            alt="Refraction"
            className="absolute inset-0 w-full h-full object-cover scale-[1.3] rotate-180 opacity-[0.85] mix-blend-normal pointer-events-none"
            style={{
              maskImage: "radial-gradient(ellipse at center, transparent 55%, black 100%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, transparent 55%, black 100%)",
            }}
          />
        )}

        {/* Layer 3: Secondary subtle color refraction */}
        {activeCover && (
          <img 
            src={activeCover} 
            alt="Refraction Color"
            className="absolute inset-0 w-full h-full object-cover scale-[1.5] rotate-180 opacity-60 mix-blend-overlay pointer-events-none"
            style={{
              maskImage: "radial-gradient(ellipse at center, transparent 65%, black 100%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, transparent 65%, black 100%)",
            }}
          />
        )}

        {/* Layer 4: Top Specular Glints */}
        <div className="absolute top-[4%] left-[10%] w-[50%] h-[15%] rounded-[100%] bg-gradient-to-b from-white/90 to-transparent blur-[2px] rotate-[-15deg] pointer-events-none" />
        <div className="absolute top-[8%] right-[15%] w-[30%] h-[10%] rounded-[100%] bg-gradient-to-b from-white/60 to-transparent blur-[1px] rotate-[20deg] pointer-events-none" />
        
        {/* Layer 5: Base Shadowing & Ambient Occlusion */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_-10px_20px_rgba(0,0,0,0.5)] pointer-events-none mix-blend-multiply" />
      </motion.div>

      {/* TOP CONTENT */}
      <div className="flex flex-col items-center text-center mb-10 xl:mb-[48px]">
        <h2 className="font-['Inter'] font-medium text-[36px] sm:text-[48px] xl:text-[62.8px] leading-[1.1] xl:leading-[76px] tracking-tight xl:tracking-[-2.04px] text-[#05080C]">
          Capture the moments
        </h2>
        <div className="mt-4 xl:mt-6 max-w-[90%] sm:max-w-[80%] md:max-w-[678px] text-[#5B5B5B] text-[14px] sm:text-[15px] xl:text-[16.3px] leading-[1.5] xl:leading-[26px]">
          <p className="inline sm:block">Discover a carefully curated collection of weddings, portraits, and lifestyle sessions that </p>
          <p className="inline sm:block">capture authentic emotions & timeless memories beautifully.</p>
        </div>
      </div>

      {/* CMS GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[24px] xl:gap-x-[48px] gap-y-[40px] xl:gap-y-[64px] w-full max-w-[1824px]">
        {portfolioItems.map((item) => (
          <Link
            key={item.slug}
            to="/portfolioDetails/$slug"
            params={{ slug: item.slug }}
            onMouseEnter={() => setHoveredCard(item.slug)}
            onMouseLeave={() => setHoveredCard(null)}
            className="flex flex-col group cursor-pointer xl:cursor-none" // custom cursor on desktop only
          >
            {/* Image Wrap */}
            <div className="relative aspect-[2304/1904] overflow-hidden rounded-lg">
              <motion.img
                src={item.cover}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content Wrap */}
            <div className="mt-6 xl:mt-[32px] border-b border-[#E2E2E3] pb-4 transition-colors duration-300 group-hover:border-[#05080C]">
              <h4 className="font-['Inter'] font-medium text-[24px] sm:text-[28px] xl:text-[30.1px] leading-[1.3] xl:leading-[40px] tracking-tight xl:tracking-[-1px] text-[#05080C]">
                {item.title}
              </h4>
            </div>
            <div className="mt-4 flex gap-1 font-['Inter'] text-[14px] xl:text-[16.5px] text-[#5B5B5B]">
              <span>{item.category},</span>
              <span>{item.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}