import React, { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CornerDownRight } from "lucide-react";

interface Slide {
  number: number;
  title: string;
  desc: string;
  image: string;
}

const slides: Slide[] = [
  {
    number: 1,
    title: "Book Your Session",
    desc: "Choose your preferred date and photography package. I’ll confirm availability and lock in your booking.",
    image: "https://framerusercontent.com/images/DYRM4ZdWxeaIXORq3AFYZprv1k.png?scale-down-to=2048",
  },
  {
    number: 2,
    title: "Plan the Details",
    desc: "We’ll discuss your vision, location, outfits, and mood so everything feels personal and stress-free.",
    image: "https://framerusercontent.com/images/TWDDB6eNAZTRwfVeF38CKWsc.png",
  },
  {
    number: 3,
    title: "Capture the Moment",
    desc: "On the day, just relax and enjoy—I’ll guide you naturally while documenting authentic, timeless shots.",
    image: "https://framerusercontent.com/images/6ArqIGMfGB6SzCvo2ndu1K3gPbY.png",
  },
  {
    number: 4,
    title: "Perfect & Deliver",
    desc: "Your images are carefully edited and delivered in a beautiful online gallery, ready to download, share, and cherish.",
    image: "https://framerusercontent.com/images/kkQRQLuQjRnHoj8wt5cpdQ3Lw.png",
  },
];

// Magnet Button Wrapper
function MagnetWrapper({ children, className, style, to }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
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

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Lowered stiffness and adjusted damping for an ultra-smooth, buttery scroll feel
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 1 });

  return (
    <section ref={containerRef} className="relative bg-[#05080C]" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {slides.map((slide, index) => {
          // Slide in from bottom math (3 transitions for 4 slides)
          const start = Math.max(0, (index - 1) / 3);
          const end = index / 3;
          
          // The container smoothly slides from below while rotating from a -14deg cross direction angle.
          const y = useTransform(smoothProgress, [start, end], ["120vh", "0vh"]);
          const rotate = useTransform(smoothProgress, [start, end], [-14, 0]);
          
          const finalY = index === 0 ? "0vh" : y;
          const finalRotate = index === 0 ? 0 : rotate;

          return (
            <motion.div
              key={slide.number}
              style={{ zIndex: index, y: finalY, rotate: finalRotate }}
              className="absolute inset-0 w-full h-full bg-[#05080C]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Section Info Line (Top ruler bedge image) */}
              <div 
                className="absolute overflow-hidden pointer-events-none" 
                style={{ height: "60.48px", left: "0px", right: "0px", top: "0px" }}
              >
                 <img 
                   src="/images/home/bedge.webp" 
                   alt="Ruler pattern line"
                   className="absolute opacity-60"
                   style={{ 
                     width: "2707.85px", 
                     height: "60.48px", 
                     left: "calc(50% - 2707.85px/2)", 
                     top: "0", 
                     maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 2%, #000 25.4%, #000 50%, #000 75%, rgba(0, 0, 0, 0) 98%)",
                     WebkitMaskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 2%, #000 25.4%, #000 50%, #000 75%, rgba(0, 0, 0, 0) 98%)"
                   }}
                 />
              </div>

              {/* Overlay Content */}
              <div 
                className="absolute flex flex-col xl:flex-row h-auto xl:h-[188px] bottom-[24px] sm:bottom-[48px] left-[5%] right-[0%] xl:left-[1.04%] xl:right-[1.96%]"
              >
                {/* Left Side: Heading */}
                <div className="relative flex items-center overflow-hidden w-full xl:w-[67%] mb-4 sm:mb-6 xl:mb-0">
                  <h2 
                    className="text-white font-['Inter'] font-medium flex items-center text-[42px] sm:text-[56px] xl:text-[87.6px] leading-[1.05] xl:leading-[100px] tracking-tight xl:tracking-[-4px] max-w-full sm:max-w-none"
                  >
                    {slide.title}
                  </h2>
                </div>

                {/* Right Side: Info Card Wrapper */}
                <div 
                  className="relative xl:absolute xl:right-0 bg-[rgba(255,255,255,0.1)] rounded-[8px] backdrop-blur-md w-[95%] sm:w-[60%] xl:w-[32.22%] h-auto xl:h-[188px] p-6 sm:p-8 xl:p-0"
                >
                   {/* Description */}
                   <p 
                     className="relative xl:absolute text-[#E2E2E3] font-['Inter'] font-normal flex items-center text-[13.5px] sm:text-[15px] xl:text-[16.5px] leading-[1.5] xl:leading-[26px] mb-6 xl:mb-0 xl:left-[32px] xl:right-[53px] xl:top-[34px]" 
                   >
                     {slide.desc}
                   </p>

                   {/* Contact Button (Magnetic) */}
                   <MagnetWrapper to="/contact" className="relative xl:absolute z-50 cursor-pointer w-[185.42px] h-[48px] xl:left-[32px] xl:top-[108px]">
                      {/* Icon Container */}
                      <div className="absolute left-0 w-[48px] h-[48px] bg-[#F5F5F5]/[0.08] border border-[#F5F5F5]/[0.08] rounded-[4px] flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-white group-hover:rounded-r-none group-hover:border-white z-10 pointer-events-none">
                         <CornerDownRight className="text-white group-hover:text-[#05080C] transition-colors duration-300" size={20} />
                      </div>
                      
                      {/* Text Container */}
                      <div className="absolute left-[52px] w-[133.42px] h-[48px] bg-[#F5F5F5]/[0.08] border border-[#F5F5F5]/[0.12] rounded-[4px] flex items-center px-5 transition-all duration-300 ease-out group-hover:px-[16px] group-hover:-translate-x-[4px] group-hover:bg-white group-hover:border-white group-hover:rounded-l-none group-hover:w-[137.42px] z-0 pointer-events-none">
                         <span className="text-white group-hover:text-[#05080C] text-[16.7px] leading-[26px] font-medium font-['Inter'] transition-colors duration-300">
                           Contact Me
                         </span>
                      </div>
                   </MagnetWrapper>
                </div>
              </div>

            </motion.div>
          );
        })}

        {/* Global Process Indicators - Fixed directly to left absolute positions */}
        <div 
          className="hidden xl:block absolute z-50 pointer-events-none" 
          style={{ left: "48px", bottom: "300px", width: "207px", height: "94px" }}
        >
           {/* Caption */}
           <div className="absolute left-0 top-0 w-[114.66px] h-[26px]">
              <svg width="12" height="18" viewBox="0 0 12 18" fill="none" className="absolute left-0 top-[4px]">
                 <path d="M2 2L10 9L2 16V2Z" fill="#FF462E" stroke="#FF462E" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              <span className="absolute text-white font-['Inter'] font-normal text-[16.5px] leading-[26px]" style={{ left: "24px", top: "0px" }}>
                 My Process
              </span>
           </div>

           {/* Bubbles */}
           <div className="absolute left-0 top-[46px] w-[207px] h-[48px]">
              {slides.map((s, i) => {
                 // Active dynamically bound to precise thirds corresponding to the 4 sections
                 const isActive = useTransform(smoothProgress, (val) => Math.floor(Math.min(val * 4, 3)) === i);
                 const bg = useTransform(isActive, (active) => active ? "#FFFFFF" : "#05080C");
                 const color = useTransform(isActive, (active) => active ? "#05080C" : "#FFFFFF");

                 return (
                    <motion.div
                       key={s.number}
                       className="absolute flex items-center justify-center rounded-[100px] font-['Inter'] text-[18px] leading-[26px] transition-colors duration-300 border border-white/20"
                       style={{ 
                         width: "48px", 
                         height: "48px", 
                         left: `${i * 53}px`, 
                         top: 0, 
                         backgroundColor: bg, 
                         color: color 
                       }}
                    >
                       {s.number}
                    </motion.div>
                 );
              })}
           </div>
        </div>

      </div>
    </section>
  );
}