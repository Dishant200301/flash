import { motion } from "framer-motion";
import { CornerDownRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

interface MagnetButtonProps {
  text?: string;
  className?: string;
  variant?: "light" | "dark";
  onClick?: () => void;
  to?: string;
}

export function MagnetButton({
  text = "Check out my work",
  className,
  variant = "light",
  onClick,
  to
}: MagnetButtonProps) {

  // Transition settings for that smooth "merge" feel
  const transition = {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 1
  };

  const isLight = variant === "light";
  
  // Style Tokens
  const colors = {
    bg: isLight ? "#f5f5f5" : "#262626",
    bgHover: isLight ? "#05080C" : "#f5f5f5",
    text: isLight ? "#05080C" : "#ffffff",
    textHover: isLight ? "#ffffff" : "#000000",
    border: isLight ? "#E2E2E3" : "rgba(255,255,255,0.1)",
  };

  const content = (
    <motion.div 
      className="flex items-center h-[48px]"
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      {/* Icon Box */}
      <motion.div
        variants={{
          initial: {
            backgroundColor: colors.bg,
            color: colors.text,
            borderRadius: "4px",
            borderColor: colors.border,
            width: "48px",
          },
          hover: {
            backgroundColor: colors.bgHover,
            color: colors.textHover,
            borderRadius: "4px 0px 0px 4px",
            borderColor: colors.bgHover,
            width: "48px",
          }
        }}
        transition={transition}
        className="flex items-center justify-center h-12 border z-10"
      >
        <CornerDownRight className="w-[18px] h-[18px]" />
      </motion.div>

      {/* Text Box */}
      <motion.div
        variants={{
          initial: {
            backgroundColor: colors.bg,
            color: colors.text,
            borderRadius: "4px",
            borderColor: colors.border,
            x: 4
          },
          hover: {
            backgroundColor: colors.bgHover,
            color: colors.textHover,
            borderRadius: "0px 4px 4px 0px",
            borderColor: colors.bgHover,
            x: 0
          }
        }}
        transition={transition}
        className="flex items-center justify-center px-5 border h-12 -ml-px z-0"
      >
        <span className="text-[16.7px] leading-[26px] font-medium font-['Inter',_sans-serif] whitespace-nowrap">
          {text}
        </span>
      </motion.div>
    </motion.div>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={cn(
          "group relative inline-block h-12 outline-none cursor-pointer",
          className
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative inline-block h-12 outline-none cursor-pointer",
        className
      )}
    >
      {content}
    </motion.button>
  );
}
