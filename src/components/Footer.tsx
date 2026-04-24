import { Link } from "@tanstack/react-router";
import { MagnetButton } from "@/components/ui/MagnetButton";
import { CornerDownRight } from "lucide-react";
import { motion } from "framer-motion";

const colA = [
  { to: "/", label: "Home", active: true },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
] as const;

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="w-full bg-[#05080C] text-white relative">
      {/* Footer Content Wrapper */}
      <div className="px-4 sm:px-4 lg:px-4 max-w-[1450px] mx-auto pt-12 lg:pt-[48px] pb-12 lg:pb-0">

        {/* Footer Top Wrapper */}
        <div className="flex flex-col md:grid md:grid-cols-3 items-start justify-between gap-12 md:gap-4 xl:gap-0 min-h-auto md:min-h-[260px]">

          {/* Column 1: Links (Left) */}
          <div className="w-full">
            <span className="block font-normal text-[13px] sm:text-[14.5px] leading-[24px] text-[#999999] mb-6 xl:mb-[20px]">
              Links
            </span>
            <div className="flex flex-col gap-4">
              {colA.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="footer-nav-link text-[16px] sm:text-[18px] lg:text-[22.1px] font-medium leading-[32px] tracking-tight text-white no-underline whitespace-nowrap w-fit"
                  activeProps={{
                    className:
                      "footer-nav-link footer-nav-link--active text-[16px] sm:text-[18px] lg:text-[22.1px] font-medium leading-[32px] tracking-tight text-white no-underline whitespace-nowrap w-fit",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Social Media — LEFT aligned */}
          <div className="w-full">
            <span className="block font-normal text-[13px] sm:text-[14.6px] leading-[24px] text-[#999999] mb-6 xl:mb-[20px]">
              Social Media
            </span>
            <div className="flex flex-col w-full">
              {socials.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="initial"
                  whileHover="hover"
                  className="footer-social-row group flex items-center justify-between h-[56px] px-4 no-underline border-b border-white/10"
                >
                  <span className="footer-social-link text-[16px] sm:text-[18px] lg:text-[22.3px] font-medium leading-[32px] tracking-tight text-white relative inline-block">
                    {social.label}
                    <span className="absolute bottom-[-1px] left-0 w-full h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </span>
                  
                  <motion.div 
                    variants={{
                      initial: { backgroundColor: "transparent", color: "#ffffff" },
                    }}
                    className="footer-icon-box w-9 h-9 rounded-[4px] border flex items-center justify-center shrink-0 transition-colors duration-300"
                  >
                    <CornerDownRight className="w-[18px] h-[18px]" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Button (Right) */}
          <div className="w-full flex md:justify-end xl:pt-[72px] mt-8 md:mt-0 xl:mt-0">
            <div className="w-fit md:pt-[72px] xl:pt-0">
              <MagnetButton
                to="/contact"
                text="Contact Me"
                variant="dark"
              />
            </div>
          </div>
        </div>

        {/* Footer FLASH Large Text */}
        <div className="relative w-full h-[150px] sm:h-[200px] lg:h-[311px] mt-16 lg:mt-[112px] flex items-center justify-center overflow-hidden">
          <h2
            aria-label="FLASH"
            className="font-bold text-center leading-none tracking-tighter whitespace-nowrap select-none bg-[url('/images/home/cta-left.webp')] bg-cover bg-top bg-clip-text text-transparent"
            style={{ fontSize: "clamp(80px, 20vw, 340px)", WebkitTextFillColor: "transparent" }}
          >
            FLASH
          </h2>
        </div>

        {/* Copyright Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-4 py-8 lg:pb-[48px] lg:pt-0 border-t border-white/5 lg:border-t-0 mt-8 lg:mt-0">
          <p className="font-medium text-[13px] sm:text-[14px] lg:text-[16.5px] leading-normal lg:leading-[26px] text-white text-center lg:text-left">
            Designed by <a href="https://tryzeniq.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">TryzenIQ</a>
          </p>
          <p className="font-medium text-[13px] sm:text-[14px] lg:text-[16.6px] leading-normal lg:leading-[26px] text-white text-center lg:text-right">
            ©{new Date().getFullYear()} FLASH . All rights reserved.
          </p>
        </div>

      </div>

      {/* CSS for hover & active animations */}
      <style>{`
        /* ── Nav Links ── */
        .footer-nav-link { position: relative; }
        .footer-nav-link::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 1.5px;
          background: #ffffff;
          transform: scaleX(0);
          transform-origin: right center;
          transition: transform 400ms cubic-bezier(0.77, 0, 0.175, 1);
        }
        /* Hover: animate underline in from left */
        .footer-nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left center;
        }
        /* Active (current page): underline always visible, no animation */
        .footer-nav-link--active::after {
          transform: scaleX(1) !important;
          transform-origin: left center !important;
          transition: none !important;
        }
        /* Make sure native browser underline is never shown */
        .footer-nav-link,
        .footer-nav-link--active {
          text-decoration: none !important;
        }

        /* ── Social rows ── */
        .footer-social-row {
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;
          transition: border-color 200ms ease, background-color 200ms ease;
          border-radius: 6px;
          margin-bottom: 2px;
          position: relative;
        }
        .footer-social-row:hover {
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.04);
          z-index: 10;
        }
        /* Remove the default separator when hovered to avoid overlap */
        .footer-social-row:hover {
          border-bottom-color: rgba(255, 255, 255, 0.25);
        }
      `}</style>
    </footer>
  );
}


