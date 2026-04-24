import { Link } from "@tanstack/react-router";
import { PortfolioItem } from "../../data/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
  onHover?: (cover: string | null) => void;
  onLeave?: () => void;
}

export function PortfolioCard({ item, onHover, onLeave }: PortfolioCardProps) {
  return (
    <Link 
      to="/portfolioDetails/$slug" 
      params={{ slug: item.slug }} 
      className="group block"
      onMouseEnter={() => onHover?.(item.cover)}
      onMouseLeave={() => onLeave?.()}
    >
      {/* Card Image Wrap */}
      <div 
        className="relative w-full h-[450px] sm:h-[600px] xl:h-[760.22px] rounded-[8px] overflow-hidden bg-gray-100 mb-6 sm:mb-8"
      >
        <img
          src={item.cover}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
      </div>

      {/* Card Content Wrapper with Double Borders */}
      <div className="flex flex-col">
        {/* Title Row */}
        <div className="mt-4 xl:mt-[2px] border-b border-[#E2E2E3] pb-2 transition-colors duration-300 ">
              <h4 className=" font-medium text-[24px] sm:text-[28px] xl:text-[30.1px] leading-[1.3] xl:leading-[40px] tracking-tight xl:tracking-[-1px] text-[#05080C]">
                {item.title}
              </h4>
            </div>
            <div className="mt-2 flex gap-1  text-[14px] xl:text-[16.5px] text-[#5B5B5B] border-b border-[#E2E2E3] pb-2 transition-colors duration-300 ">
              <span>{item.category},</span>
              <span>{item.date}</span>
            </div>
      </div>
    </Link>
  );
}
