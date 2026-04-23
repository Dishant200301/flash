import { portfolioItems } from "../../data/portfolio";
import { PortfolioCard } from "./PortfolioCard";

export function PortfolioListSection() {
  return (
    <section className="py-16 sm:py-24 xl:py-32 bg-white">
      {/* Header Content */}
      <div className="flex flex-col items-center mb-16 xl:mb-24 text-center px-4">
        <h2 className="text-[36px] sm:text-[48px] xl:text-[62.8px] leading-[1.2] xl:leading-[76px] font-medium tracking-[-1px] xl:tracking-[-2.04px] text-[#05080C] mb-4 sm:mb-6">
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
        <div className="grid gap-x-6 sm:gap-x-12 gap-y-16 xl:gap-y-24 grid-cols-1 xl:grid-cols-2">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
