import { motion } from "framer-motion";

export function MyStorySection() {
  return (
    <section className="py-16 xl:py-24 bg-[#f5f5f5] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1500px]">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 xl:mb-16 text-center">
          <div className="flex items-center gap-2 mb-4 xl:mb-6">
            <span className="text-[#FF462E]">
              <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9L0 18L0 0L12 9Z" fill="#FF462E" />
              </svg>
            </span>
            <span className="text-[16px] xl:text-[18px] leading-[26px] font-normal text-[#05080C]">
              My Story
            </span>
          </div>
          <h2 className="text-[36px] md:text-[48px] xl:text-[68px] leading-[1.1] md:leading-[1.12] xl:leading-[76px] font-medium tracking-tight text-[#05080C]">
            Framing Life Through <br className="hidden sm:block" /> My Lens
          </h2>
        </div>

        {/* Proportional Grid Layout for 3-column laptop view */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_1fr_1.2fr] gap-6 xl:gap-6">
          
          {/* Card 1: Me Card (Proportional ~460px) */}
          <div className="bg-[#FFFFFF] rounded-[8px] relative w-full h-[400px] xl:h-[450px] overflow-hidden order-1">
            
            {/* Story Gallery Image Wrap */}
            <div className="absolute top-0 left-0 w-full h-[200px] xl:h-[233px]">
              
              {/* Gallery Image 1 (Left) */}
              <div 
                className="absolute w-[100px] sm:w-[120px] xl:w-[140px] h-[140px] sm:h-[160px] xl:h-[192px] left-[5%] sm:left-[15%] xl:left-[52.44px] top-[20px] xl:top-[22.91px] rounded-[7px] overflow-hidden border-[3px] border-[#E2E2E3] rotate-[15deg]"
              >
                <img
                  src="/images/about/story_card-1(1).webp"
                  alt="Story Image 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gallery Image 2 (Right) */}
              <div 
                className="absolute w-[100px] sm:w-[120px] xl:w-[140px] h-[140px] sm:h-[160px] xl:h-[192px] right-[5%] sm:right-[15%] xl:right-auto xl:left-[275px] top-[20px] xl:top-[22px] rounded-[7px] overflow-hidden border-[3px] border-[#E2E2E3] rotate-[15deg]"
              >
                <img
                  src="/images/about/story_card-1(3).webp"
                  alt="Story Image 3"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gallery Image 3 (Middle - Layered Top) */}
              <div 
                className="absolute w-[100px] sm:w-[120px] xl:w-[140px] h-[140px] sm:h-[160px] xl:h-[192px] left-1/2 -translate-x-1/2 xl:left-[172.16px] xl:translate-x-0 top-[20px] xl:top-[22px] rounded-[7px] overflow-hidden border-[3px] border-[#E2E2E3] rotate-[-15deg] z-20"
              >
                <img
                  src="/images/about/story_card-1(2).webp"
                  alt="Story Image 2"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Description Text */}
            <p className="absolute top-[220px] sm:top-[240px] xl:top-[259px] left-[20px] sm:left-[10%] xl:left-[32px] right-[20px] sm:right-[10%] xl:right-[46.88px] font-medium text-[14px] sm:text-[15px] xl:text-[16.6px] leading-normal xl:leading-[26px] text-[#5B5B5B] flex items-center text-center xl:text-left">
              Hi, I'm FLASH, a London-based photographer with years of experience in portraits and weddings. I create meaningful, artistic stories that capture emotion, beauty, and individuality inspired by real moments and fine art.
            </p>

          </div>

          {/* Card 2: Image Card (Proportional ~400px) */}
          <div className="rounded-[8px] overflow-hidden w-full h-[400px] sm:h-[450px] xl:h-[450px] order-2">
            <img
              src="/images/about/story_card-2.webp"
              alt="Couples Photography"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 3: Stats and Avatars (Proportional ~480px) */}
          <div className="bg-[#05080C] rounded-[8px] flex flex-col items-center justify-center p-8 sm:p-12 xl:p-12 w-full h-[400px] sm:h-[450px] xl:h-[450px] relative overflow-hidden order-3">
            
            {/* User Info Content Wrap / Image Wrap */}
            <div className="relative w-[304px] max-w-[90%] md:max-w-[304px] aspect-[3.0] mr-4 sm:aspect-auto sm:h-[90px] xl:h-[101px] mb-6 xl:mb-8">
              {[
                { left: "0px", img: "/images/about/story_card-3(1).webp" },
                { left: "20%", img: "/images/about/story_card-3(2).webp" },
                { left: "40%", img: "/images/about/story_card-3(3).webp" },
                { left: "60%", img: "/images/about/story_card-3(4).webp" },
                { left: "80%", img: "/images/about/story_card-3(5).webp" }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="absolute w-[33%] sm:w-[90px] xl:w-[101px] aspect-square border-[2px] border-white rounded-full overflow-hidden bg-gray-800"
                  style={{ left: item.left }}
                >
                  <img
                    src={item.img}
                    alt={`Client ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Heading 4k+ */}
            <h2 className="font-medium text-[48px] sm:text-[56px] xl:text-[62.3px] leading-tight xl:leading-[76px] tracking-[-1px] xl:tracking-[-2.04px] text-white mb-4 xl:mb-6 mt-4 sm:mt-0">
              4k+
            </h2>

            {/* Stars Content Wrap */}
            <div className="flex gap-[4px] justify-center items-center h-[16px] mb-4 xl:mb-6">
              {[...Array(5)].map((_, i) => (
                 <svg key={i} width="16" height="16" viewBox="0 0 20 20" className="text-white fill-current">
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
              ))}
            </div>

            {/* Description Text - Positioned at bottom as per reference image */}
            <div className="max-w-[280px]">
              <p className="font-medium text-[14px] xl:text-[16.3px] leading-[1.5] xl:leading-[26px] text-[#999999] text-center">
                Over 4k+ Clients Served <br /> with satisfaction
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

