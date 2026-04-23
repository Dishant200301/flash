import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  theme?: "light" | "dark";
}

export function Navbar({ theme = "dark" }: NavbarProps) {
  const isDark = theme === "dark";
  const textColor = isDark ? "text-white" : "text-[#05080C]";
  const hoverColor = isDark ? "hover:text-white/80" : "hover:text-black/80";
  const [isOpen, setIsOpen] = useState(false);

  // Disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      } as any,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      } as any,
    },
  };

  const navLinks = [
    { name: "ABOUT ME", href: "/about" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className={` top-0 left-0 right-0 z-[100]  py-4 px-4 ${textColor}`}>
      <nav className="flex items-center justify-between gap-8 text-[18px] leading-[26px] font-medium font-sans-tight">
        
        {/* Logo */}
        <Link to="/" className="flex flex-col gap-0.5 group relative z-[110]">
          <span className={`block text-xl font-bold tracking-tighter leading-none`}>FLASH</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center w-full">
          <div className="absolute left-[22%]">
            <Link
              to="/portfolio"
              activeProps={{ className: "underline decoration-1 underline-offset-[12px] opacity-100" }}
              className={`underline-grow whitespace-nowrap tracking-wide ${hoverColor} transition-colors`}
            >
              SELECTED WORK
            </Link>
          </div>

          <ul className="flex items-center gap-12 ml-auto mr-[15%]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.href} 
                  activeProps={{ className: "underline decoration-1 underline-offset-[12px] opacity-100" }}
                  className={`underline-grow whitespace-nowrap tracking-wide ${hoverColor} transition-colors`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

                    <a 
                      href="mailto:HELLO@FLASH.COM" 
                      className={`underline-grow whitespace-nowrap tracking-wide ${hoverColor} transition-colors font-medium`}
                    >
                      HELLO@FLASH.COM
                    </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-[110] w-12 h-12 bg-white rounded-full flex flex-col items-center justify-center gap-[6px] text-black shadow-lg transition-transform active:scale-95"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="transition-transform duration-300" />
          ) : (
            <>
              <motion.span 
                animate={{ rotate: 0, y: 0 }}
                className="w-6 h-[2px] bg-black rounded-full" 
              />
              <motion.span 
                animate={{ rotate: 0, y: 0 }}
                className="w-6 h-[2px] bg-black rounded-full" 
              />
            </>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-[#05080C] z-[100] flex flex-col lg:hidden overflow-hidden"
            >
              {/* Menu Links */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <ul className="flex flex-col items-center gap-10">
                  <li>
                    <Link 
                      to="/about" 
                      onClick={() => setIsOpen(false)}
                      activeProps={{ className: "underline decoration-1 underline-offset-[12px] opacity-100" }}
                      className="text-white text-[22px] font-bold tracking-tighter hover:text-white/80 transition-opacity opacity-100 uppercase"
                    >
                      ABOUT ME
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/blog" 
                      onClick={() => setIsOpen(false)}
                      activeProps={{ className: "underline decoration-1 underline-offset-[12px] opacity-100" }}
                      className="text-white text-[22px] font-bold tracking-tighter hover:text-white/80 transition-opacity opacity-100 uppercase"
                    >
                      BLOG
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact" 
                      onClick={() => setIsOpen(false)}
                      activeProps={{ className: "underline decoration-1 underline-offset-[12px] opacity-100" }}
                      className="text-white text-[22px] font-bold tracking-tighter hover:text-white/80 transition-opacity opacity-100 uppercase"
                    >
                      CONTACT
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/portfolio" 
                      onClick={() => setIsOpen(false)}
                      activeProps={{ className: "underline decoration-1 underline-offset-[12px] opacity-100" }}
                      className="text-white text-[22px] font-bold tracking-tighter hover:text-white/80 transition-opacity opacity-100 uppercase"
                    >
                      SELECTED WORK  [ 20 ]
                    </Link>
                  </li>
                  <li className="mt-8">
                    <a 
                      href="mailto:HELLO@FLASH.COM" 
                      className="text-white text-[22px] font-bold tracking-tighter hover:text-white/80 transition-opacity opacity-100 uppercase"
                    >
                      HELLO@FLASH.COM
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
