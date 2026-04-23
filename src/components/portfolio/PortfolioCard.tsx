import { Link } from "@tanstack/react-router";
import { PortfolioItem } from "../../data/portfolio";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const handleMouseLeave = () => setPos(null);

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <Link to="/portfolioDetails/$slug" params={{ slug: item.slug }} className="group block">
      {/* Card Image Wrap */}
      <div 
        ref={containerRef}
        className="relative w-full h-[760.22px] rounded-[8px] overflow-hidden bg-gray-100 mb-8 cursor-none"
      >
        <img
          src={item.cover}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out"
        />

        {/* Glass Effect Lens */}
        <AnimatePresence>
          {pos && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="pointer-events-none absolute rounded-full z-20 mix-blend-overlay"
              style={{
                left: pos.x - 90,
                top: pos.y - 90,
                width: 360,
                height: 360,
                background: "radial-gradient(circle  60%, transparent 80%)",
                border: "1px solid rgba(255,255,255,0.2)"
              }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Card Content Wrapper with Double Borders */}
      <div className="flex flex-col">
        {/* Title Row */}
        <div className="h-[44px] flex items-center border-b border-[#E2E2E3]">
          <h3 className="text-[28px] md:text-[30.1px] leading-[40px] font-medium tracking-[-1px] text-[#05080C]">
            {item.title}
          </h3>
        </div>
        
        {/* Meta Row */}
        <div className="h-[42px] flex items-center border-b border-[#E2E2E3]">
          <div className="flex items-center gap-2">
             <span className="text-[16.5px] leading-[26px] font-normal text-[#5B5B5B]">
               {item.category},
             </span>
             <span className="text-[16.3px] leading-[26px] font-normal text-[#5B5B5B]">
               {item.date}
             </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
