import { motion } from "framer-motion";

const approachItems = [
  {
    number: "01/",
    icon: "/images/about/icon-1.webp",
    text: "I meet clients, scout locations, & create mood boards and shot lists."
  },
  {
    number: "02/",
    icon: "/images/about/icon-2.png",
    text: "I set up equipment, adjust lighting, & plan each shot carefully."
  },
  {
    number: "03/",
    icon: "/images/about/icon-3.png",
    text: "I capture moments, direct poses, & focus on genuine emotions."
  },
  {
    number: "04/",
    icon: "/images/about/icon-4.png",
    text: "I edit photos, enhance details, & deliver high-quality final images."
  }
];

export function MyApproachSection() {
  return (
    <section className="relative w-full bg-[#05080C] py-16 md:py-24 xl:py-32 overflow-hidden px-4 md:px-6 xl:px-6">

      {/* Background Wireframe Artwork - Anchored Bottom Left */}
      <div className="absolute bottom-[-5%] xl:bottom-[-10%] left-[-15%] xl:left-[-12%] w-[400px] md:w-[600px] xl:w-[800px] h-auto -rotate-[140deg] pointer-events-none opacity-100 z-0">
        <img
          src="/images/about/my_approach.webp"
          alt="Camera Wireframe"
          className="w-full h-full object-contain mix-blend-screen"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1820px] mx-auto flex flex-col xl:flex-row gap-12 md:gap-16 xl:gap-0 items-start">

        {/* Left Side Content - 45% Width, Top Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full xl:w-[45%] pr-0 xl:pr-8"
        >
          <div className="flex items-center gap-3 mb-6 md:mb-10">
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9L0 18L0 0L12 9Z" fill="#FF462E" />
            </svg>
            <span className="text-white text-[16px] md:text-[18px] leading-[26px] font-normal tracking-wide">
              My Approach
            </span>
          </div>

          <h2 className="text-white text-[36px] md:text-[48px] lg:text-[58px] lg:leading-[62px] xl:text-[68px] leading-[1.1] md:leading-[1.12] xl:leading-[76px] font-medium tracking-tight">
            Turning Real-life <br className="hidden sm:block" />
            Moments into Lasting <br className="hidden sm:block" />
            Works of Art
          </h2>
        </motion.div>

        {/* Right Side Content - 55% Width, Contain Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full xl:w-[55%] flex justify-end"
        >
          <div className="relative w-full max-w-[1000px]">
            {/* Viewfinder Corners - Hidden on very small mobile for cleaner look if needed, but keeping for now */}
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-8 md:w-12 h-8 md:h-12 border-t-[2px] border-l-[2px] border-white/60 rounded-[4px]" />
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 md:w-12 h-8 md:h-12 border-t-[2px] border-r-[2px] border-white/60 rounded-[4px]" />
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-8 md:w-12 h-8 md:h-12 border-b-[2px] border-l-[2px] border-white/60 rounded-[4px]" />
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-8 md:w-12 h-8 md:h-12 border-b-[2px] border-r-[2px] border-white/60 rounded-[4px]" />

            {/* White Grid Container */}
            <div className="bg-white rounded-sm overflow-hidden grid grid-cols-1 sm:grid-cols-2">
              {approachItems.map((item, index) => (
                <div
                  key={index}
                  className={`p-8 md:p-12 xl:p-8 flex flex-col justify-between h-[240px] md:h-[320px] xl:h-[290px] border-[#05080C]/5
                    ${index % 2 === 0 ? "sm:border-r" : ""}
                    ${index < approachItems.length - (index % 2 === 0 && index === approachItems.length - 1 ? 0 : 2) ? "border-b" : "max-sm:border-b last:border-b-0"}
                  `}
                >
                  <div className="flex justify-between items-start">
                    <div className="w-10 md:w-12 h-10 md:h-12">
                      <img src={item.icon} alt={`Step ${index + 1}`} className="w-full h-full object-contain" />
                    </div>
                    <span className="font-medium text-[#05080C] text-[20px] md:text-[24px] leading-[32px]">
                      {item.number}
                    </span>
                  </div>

                  <p className="font-normal text-[#5b5b5b] text-[16px] md:text-[18px] leading-normal max-w-[280px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

