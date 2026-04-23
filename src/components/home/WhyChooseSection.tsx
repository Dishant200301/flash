import { motion } from "framer-motion";
import { useCountUp } from "../../lib/use-reveal";
import { useRef, useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function WhyChooseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setActive(true);
      }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const { value } = useCountUp(2500, 1800, active);
  const display = `${(value / 1000).toFixed(1).replace(/\.0$/, "")}k`;

  return (
    <section ref={ref} className="relative w-full min-h-screen xl:h-[1075px] py-10 xl:py-0 xl:px-8 text-white font-sans overflow-hidden bg-[#05080C]">

      {/* Bg Image: Sleek DSLR Camera Illustration */}
      <div className="absolute top-[-50px] xl:top-[-114px] left-[30px] xl:left-[90px] w-[300px] sm:w-[450px] xl:w-[621px] opacity-40 pointer-events-none">
        <img src="/images/home/portfolio/whyus_bg.webp" alt="Camera Illustration" className="w-full h-full object-contain" />
      </div>

      <div className="px-4 relative h-full flex items-center xl:block">
        {/* Main Content Wrapper (starts at 140px top) */}
        <div className="relative xl:absolute xl:top-[140px] inset-x-0 w-full flex flex-col xl:flex-row gap-12 xl:gap-[48px] px-0 xl:px-0">

          {/* Left Wrapper (45% Width) */}
          <div className="w-full xl:w-[45%] flex flex-col justify-end xl:pb-[24px]">
            <div className={cn("reveal-fade flex flex-col", active && "is-visible")}>
              <h2 className="text-[32px] sm:text-[48px] xl:text-[63.6px] leading-[1.1] sm:leading-[1.2] xl:leading-[76px] font-medium tracking-tight xl:tracking-[-2.04px] text-white mb-8 sm:mb-10 xl:mb-[57px]">
                The difference <br className="hidden xl:block" /> Behind my lens that <br className="hidden xl:block" /> Truly matters
              </h2>

              <div className="xl:pl-[248px] flex flex-col items-start">
                <p className="text-[15px] sm:text-[16.5px] leading-[1.5] xl:leading-[26px] text-[#999999] max-w-[340px] mb-6 xl:mb-[27px]">
                  Through my lens, I capture raw emotions, authentic connections, and fleeting details that transform your moments into lasting, unforgettable stories.
                </p>
                 <button className="w-10 h-10 sm:w-[48px] sm:h-[48px] bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
                  <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#05080C]" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Wrapper (55% Width): Staggered Row Layout */}
          <div className={cn("w-full xl:w-[55%] flex flex-col gap-6 xl:gap-[8px] reveal-fade", active && "is-visible")} style={{ transitionDelay: "200ms" }}>

            {/* ROW 1: TOP CARDS (Specified Widths) */}
            <div className="flex flex-col sm:flex-row gap-6 xl:gap-[24px] xl:h-[288px]">
              {/* Stat Card (288x288) */}
              <div className="w-full sm:w-1/2 xl:w-[288px] h-[288px] xl:h-full bg-white rounded-sm p-0 flex flex-col items-center shadow-2xl relative overflow-hidden group shrink-0">


                {/* Internal Content Wrap (204x198 specified) */}
                <div className="w-[204px] mt-[44px] relative flex flex-col items-center">
                  <div className="text-[62px] leading-[76px] font-medium tracking-[-2.04px] text-[#05080C] tabular-nums mb-[12px]">
                    {display}
                  </div>
                  <p className="w-full text-center text-[16.3px] leading-[26px] text-[#5B5B5B] font-normal mb-[24px]">
                    Happy Clients Captured
                  </p>

                  <div className="flex -space-x-[16px]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-[60px] h-[60px] rounded-full border-[2px] border-white overflow-hidden shrink-0">
                        <img src={`/images/home/portfolio/clients-${i}.webp`} alt="Client" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Viewfinder Card (372x288) */}
              <div className="w-full sm:w-1/2 xl:w-[372px] relative h-[288px] xl:h-full rounded-sm overflow-hidden group border border-white/10 shrink-0">
                <img src="/images/home/portfolio/Close-up portrait.webp" alt="Portrait" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20" />

                {/* Viewfinder Overlay Icon (88x88 concept) */}
                <div className="absolute inset-x-0 top-[56px] flex justify-center pointer-events-none">
                  <div className="w-[88px] h-[88px] relative opacity-100">
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-[2.5px] border-l-[2.5px] border-white" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-[2.5px] border-r-[2.5px] border-white" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[2.5px] border-l-[2.5px] border-white" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[2.5px] border-r-[2.5px] border-white" />
                  </div>
                </div>

                {/* Dual Line Text (Specified Widths) */}
                <div className="absolute bottom-[32px] inset-x-0 px-6 text-center">
                  <p className="text-[14px] sm:text-[16px] xl:text-[16.6px] leading-[1.4] xl:leading-[26px] text-white font-normal drop-shadow-md">
                    Capture authentic emotions with<br className="hidden sm:block" />
                    timeless photography that preserves<br className="hidden sm:block" />
                    your most beautiful memories.
                  </p>
                </div>
              </div>
            </div>

            {/* ROW 2: BOTTOM CARDS (Specified Widths) */}
            <div className="flex flex-col sm:flex-row gap-6 xl:gap-[24px] xl:h-[416px]">
              {/* Instagram Link Card (280x416) */}
              <div className="w-full sm:w-1/2 xl:w-[280px] h-[350px] sm:h-full xl:h-full relative rounded-sm overflow-hidden group border border-white/10 shrink-0">
                <img src="/images/home/portfolio/instagram.webp" alt="Instagram" className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                {/* Link Content matching Image 1 */}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-[20px] left-[24px] flex items-center gap-2 group/link cursor-pointer no-underline"
                >
                  <span className="text-[16.7px] font-medium text-white transition-all hover:underline underline-offset-4">
                    Check My Instagram
                  </span>
                  <ArrowRight className="w-[18px] h-[18px] text-white transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>

              {/* Relaxed Shot Card (644x416) */}
              <div className="w-full sm:w-1/2 xl:w-[444px] relative h-[350px] sm:h-full xl:h-full rounded-sm overflow-hidden group shrink-0">
                <img src="/images/home/portfolio/closed_eyes_face.webp" alt="Process" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,12,0.08)_0%,rgba(5,8,12,0.94)_90%)] pointer-events-none" />
                <div className="absolute bottom-[23px] left-[32px] sm:left-[40px] pr-8">
                  <p className="text-[14px] sm:text-[16.5px] leading-[1.4] xl:leading-[26px] text-white font-normal">
                    Enjoy a relaxed, stress-free photoshoot,<br className="hidden sm:block" />
                    focusing on real moments while I capture<br className="hidden sm:block" />
                    every detail beautifully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Grid Ruler */}
        <div className="absolute bottom-6 sm:bottom-12 xl:bottom-36 left-0 right-0 w-full pointer-events-none px-[4vw]">
           <div className="relative w-full h-[60px] flex items-center justify-center">
              {/* Ruler Pattern Line */}
              <div className="absolute top-[40px] left-0 right-0 h-[10px] ruler-line opacity-20" />
              
              {/* Numbers */}
              <div className="absolute top-0 left-0 right-0 flex justify-between px-[2%] text-[10px] sm:text-[12px] text-white/40 font-mono">
                {["03", "04", "05", "06", "07", "08", "09", "10", "11"].map(num => (
                  <span key={num}>{num}</span>
                ))}
              </div>

              {/* Circular Badge - Premium touch */}
              <motion.div 
                className="hidden xl:flex absolute left-[15%] top-[-100px] w-48 h-48 opacity-40 mix-blend-screen"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <img
                  src="/images/home/bedge.webp"
                  alt="Decorative Badge"
                  className="w-full h-full object-contain"
                />
              </motion.div>
           </div>
        </div>

      </div>
    </section>


  );
}
