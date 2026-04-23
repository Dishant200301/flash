import { Link } from "@tanstack/react-router";
import { MagnetButton } from "@/components/ui/MagnetButton";

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

function ArrowUpRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
        stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#05080C] text-white relative">
      {/* Footer Content Wrapper */}
      <div className="px-4 sm:px-6 lg:px-12 pt-12 lg:pt-[48px] pb-12 lg:pb-0">

        {/* Footer Top Wrapper */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-0 min-h-auto lg:min-h-[260px]">

          {/* Footer Left Menu Wrapper */}
          <div className="w-full lg:w-[362px] flex-shrink-0">
            {/* "Links" label */}
            <span className="block font-normal text-[13px] sm:text-[14.5px] leading-[24px] text-[#999999] mb-6 lg:mb-[48px]">
              Links
            </span>

            {/* Footer Links Wrapper — two columns */}
            <div className="flex justify-between sm:justify-start gap-12 sm:gap-[140px] lg:gap-0">
              {/* Col A */}
              <div className="flex flex-col gap-4 w-[100px] lg:w-[80px]">
                {colA.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="footer-nav-link text-[16px] sm:text-[18px] lg:text-[22.1px] font-medium leading-[32px] tracking-tight text-white no-underline whitespace-nowrap"
                    activeProps={{ className: "underline" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>


            </div>
          </div>

          {/* Footer Right Menu Wrapper */}
          <div className="w-full lg:flex-1 lg:max-w-[900px] flex flex-col lg:flex-row items-start gap-12 lg:gap-0">

            {/* Social Links */}
            <div className="w-full lg:flex-1 mt-4 julg:mt-0">
              {/* "Social Media" label */}
              <span className="block font-normal text-[13px] sm:text-[14.6px] leading-[24px] text-[#999999] mb-6 lg:mb-[48px]">
                Social Media
              </span>

              {/* Social rows */}
              <div className="flex flex-col w-full">
                {socials.map((social, idx) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`footer-social-row flex items-center justify-between h-[44px] no-underline border-b border-white/10 ${idx === 0 ? "border-t" : ""}`}
                  >
                    <span className="footer-social-link text-[16px] sm:text-[18px] lg:text-[22.3px] font-medium leading-[32px] tracking-tight text-white relative inline-block">
                      {social.label}
                    </span>

                    {/* Icon box */}
                    <div className="footer-icon-box w-8 h-8 rounded-[4px] bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-colors">
                      <ArrowUpRight />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Me Button */}
            <div className="mt-8 lg:mt-0 lg:ml-4 lg:pt-[72px]">
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
          <p className="font-medium text-[13px] sm:text-[14px] lg:text-[16.5px] leading-[1.5] lg:leading-[26px] text-white text-center lg:text-left">
            Designed by Designkuthir . Powered by Framer
          </p>
          <p className="font-medium text-[13px] sm:text-[14px] lg:text-[16.6px] leading-[1.5] lg:leading-[26px] text-white text-center lg:text-right">
            ©2025 FLASH . All rights reserved.
          </p>
        </div>

      </div>

      {/* CSS for hover animations */}
      <style>{`
        .footer-nav-link { position: relative; }
        .footer-nav-link::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 1px;
          background: #ffffff;
          transform: scaleX(0);
          transform-origin: right center;
          transition: transform 400ms cubic-bezier(0.77, 0, 0.175, 1);
        }
        .footer-nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left center;
        }

        .footer-social-link { position: relative; }
        .footer-social-link::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 1px;
          background: #ffffff;
          transform: scaleX(0);
          transform-origin: right center;
          transition: transform 400ms cubic-bezier(0.77, 0, 0.175, 1);
        }
        .footer-social-row:hover .footer-social-link::after {
          transform: scaleX(1);
          transform-origin: left center;
        }

        .footer-social-row:hover .footer-icon-box {
          background: rgba(255,255,255,0.15);
        }
      `}</style>
    </footer>
  );
}
