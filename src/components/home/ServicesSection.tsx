import { motion } from "framer-motion";
import { Camera, Users, Image as LucideImage, Focus, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    n: "01",
    title: "Events",
    desc: "Capturing every moment of your special occasions, from corporate events to celebrations, with creativity and care.",
    icon: <img src="/images/home/service/icon-1.webp" alt="Events" className="w-11 h-11 object-contain" />,
  },
  {
    n: "02",
    title: "Family Session",
    desc: "Creating natural, heartfelt portraits that celebrate the bond, joy, and togetherness of your family moments.",
    icon: <img src="/images/home/service/icon-2.png" alt="Family" className="w-11 h-11 object-contain" />,
  },
  {
    n: "03",
    title: "Weddings",
    desc: "Preserving the moments, laughter, and stories of your wedding day through timeless and emotive photography.",
    icon: <img src="/images/home/service/icon-3.png" alt="Weddings" className="w-11 h-11 object-contain" />,
  },
  {
    n: "04",
    title: "Lifestyle",
    desc: "Documenting everyday life and personal milestones with an artistic eye, turning ordinary moments into lasting memories.",
    icon: <img src="/images/home/service/icon-4.png" alt="Lifestyle" className="w-11 h-11 object-contain" />,
  },
];

export function ServicesSection() {
  return (
    <section className="relative w-full h-auto min-h-[1084px] bg-white pt-[40px] pb-[80px] overflow-hidden font-sans">
      
      {/* Top Header */}
      <div className="max-w-[1920px] mx-auto flex flex-col items-center justify-center text-center mb-10 sm:mb-[48px] px-4 xl:px-0">
        <h2 className="text-[36px] sm:text-[48px] xl:text-[62.4px] leading-[1.1] xl:leading-[76px] font-medium tracking-tight xl:tracking-[-2.04px] text-[#05080C]">
          How i can help you
        </h2>
        <div className="mt-4 text-[15px] sm:text-[16px] xl:text-[16.3px] leading-normal xl:leading-[26px] text-[#5B5B5B] max-w-[90%] sm:max-w-[620px]">
          <p className="inline sm:block">I capture authentic moments & emotions, turning your special occasions into </p>
          <p className="inline sm:block">timeless memories you'll cherish forever.</p>
        </div>
      </div>

      {/* Services Content Wrapper */}
      <div className="max-w-[1920px] mx-auto flex flex-col xl:grid xl:grid-cols-[1fr_608px_1fr] h-auto xl:h-[720px] px-4 xl:px-8">
        
        {/* Left Column (01 & 02) */}
        <div className="flex flex-col border border-[#E2E2E3] border-b-0 rounded-t-lg xl:rounded-none xl:border-b xl:border-y xl:border-l xl:border-r-0 xl:rounded-l-lg hover:bg-gray-50/30 transition-colors">
           {/* Card 01 */}
           <div className="flex-1 p-[32px] sm:p-[48px] flex flex-col border-b border-[#E2E2E3] relative">
              <div className="mb-6 xl:mb-8">{services[0].icon}</div>
              <div className="mt-auto">
                <div className="flex justify-between items-baseline mb-2 xl:mb-4">
                   <h4 className="text-[24px] xl:text-[29.1px] leading-[1.3] xl:leading-[40px] font-medium tracking-tight xl:tracking-[-1px] text-[#05080C]">
                     {services[0].title}
                   </h4>
                   <span className="text-[14px] xl:text-[15.6px] font-normal text-[#05080C]">{services[0].n}</span>
                </div>
                <p className="text-[14px] xl:text-[14.6px] leading-[1.6] xl:leading-[24px] text-[#5B5B5B] max-w-[90%] xl:max-w-sm">
                   {services[0].desc}
                </p>
              </div>
           </div>
           {/* Card 02 */}
           <div className="flex-1 p-[32px] sm:p-[48px] flex flex-col relative">
              <div className="mb-6 xl:mb-8">{services[1].icon}</div>
              <div className="mt-auto">
                <div className="flex justify-between items-baseline mb-2 xl:mb-4">
                   <h4 className="text-[24px] xl:text-[29.1px] leading-[1.3] xl:leading-[40px] font-medium tracking-tight xl:tracking-[-1px] text-[#05080C]">
                     {services[1].title}
                   </h4>
                   <span className="text-[14px] xl:text-[16.7px] font-normal text-[#05080C]">{services[1].n}</span>
                </div>
                <p className="text-[14px] xl:text-[14.6px] leading-[1.6] xl:leading-[24px] text-[#5B5B5B] max-w-[90%] xl:max-w-sm">
                   {services[1].desc}
                </p>
              </div>
           </div>
        </div>

        {/* Center: Main Image */}
        <div className="relative h-[400px] sm:h-[500px] xl:h-full w-full xl:w-auto overflow-hidden rounded-none xl:rounded-none xl:border-y border-[#E2E2E3]">
           <img 
              src="/images/home/service/service-image.webp" 
              alt="Photography Service Collection" 
              className="w-full h-full object-cover scale-100"
           />
        </div>

        {/* Right Column (03 & 04) */}
        <div className="flex flex-col border border-[#E2E2E3] border-t-0 rounded-b-lg xl:rounded-none xl:border-t xl:border-y xl:border-r xl:border-l-0 xl:rounded-r-lg hover:bg-gray-50/30 transition-colors">
           {/* Card 03 */}
           <div className="flex-1 p-[32px] sm:p-[48px] flex flex-col border-b border-[#E2E2E3] relative">
              <div className="mb-6 xl:mb-8">{services[2].icon}</div>
              <div className="mt-auto">
                <div className="flex justify-between items-baseline mb-2 xl:mb-4">
                   <h4 className="text-[24px] xl:text-[29.4px] leading-[1.3] xl:leading-[40px] font-medium tracking-tight xl:tracking-[-1px] text-[#05080C]">
                     {services[2].title}
                   </h4>
                   <span className="text-[14px] xl:text-[16.7px] font-normal text-[#05080C]">{services[2].n}</span>
                </div>
                <p className="text-[14px] xl:text-[14.6px] leading-[1.6] xl:leading-[24px] text-[#5B5B5B] max-w-[90%] xl:max-w-sm">
                   {services[2].desc}
                </p>
              </div>
           </div>
           {/* Card 04 */}
           <div className="flex-1 p-[32px] sm:p-[48px] flex flex-col relative">
              <div className="mb-6 xl:mb-8">{services[3].icon}</div>
              <div className="mt-auto">
                <div className="flex justify-between items-baseline mb-2 xl:mb-4">
                   <h4 className="text-[24px] xl:text-[28.6px] leading-[1.3] xl:leading-[40px] font-medium tracking-tight xl:tracking-[-1px] text-[#05080C]">
                     {services[3].title}
                   </h4>
                   <span className="text-[14px] xl:text-[16.7px] font-normal text-[#05080C]">{services[3].n}</span>
                </div>
                <p className="text-[14px] xl:text-[14.6px] leading-[1.6] xl:leading-[24px] text-[#5B5B5B] max-w-[90%] xl:max-w-sm">
                   {services[3].desc}
                </p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}


