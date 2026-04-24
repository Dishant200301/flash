import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const mainTestimonial: Testimonial = {
  name: "Liam Carter",
  role: "Project Manager",
  company: "Stellar Designs",
  content: "They approached our project with remarkable insight and precision. Every suggestion was thoughtfully considered, and their execution was impeccable. The final outcome not only met our objectives but elevated the entire concept, leaving our team thoroughly impressed and grateful.",
  image: "https://framerusercontent.com/images/dTETRjWBsByoBcOqnDwQYsElyU4.png",
};

const subTestimonials: Testimonial[] = [
  {
    name: "Olivia Bennett",
    role: "Brand Manager",
    company: "Radiant Studios",
    content: "Their creativity and attention to detail were outstanding. They understood our vision instantly, incorporated feedback seamlessly, and delivered results that truly captured the essence of our project. Every step was handled professionally, exceeding all our expectations.",
    image: "https://framerusercontent.com/images/lBRCntk9wuSOp1ly8PbsW4XKE.jpg",
  },
  {
    name: "Isabella Clark",
    role: "Art Director",
    company: "Lumina Creative",
    content: "Their talent and dedication truly elevated our project. Every detail was thoughtfully executed, feedback was welcomed and applied seamlessly, and the final outcome reflected both creativity and precision. We couldn’t be happier with the results and the process overall.",
    image: "https://framerusercontent.com/images/OaYmpnmJAQHA3d2TqtLPYJYjiLU.png",
  },
  {
    name: "Sophia Martinez",
    role: "Marketing Manager",
    company: "Horizon",
    content: "Working with them was truly inspiring. They quickly understood our goals, implemented feedback seamlessly, and delivered results that perfectly balanced creativity and functionality. Every stage showed professionalism and dedication.",
    image: "https://framerusercontent.com/images/WQ3DjYBGkp2k588yA5WTsnzNbhQ.png",
  },
];

export function TestimonialsSection() {
  return (
    <section 
      className="bg-[#05080c] py-[40px] sm:py-[80px] xl:py-[100px] px-4 sm:px-4 flex flex-col items-center gap-8 xl:gap-[48px]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Top Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-8 border-l-[#FF462E] border-b-[6px] border-b-transparent" />
          <span className="text-white text-[13px] xl:text-[14px]">Testimonials</span>
        </div>
        <h2 className="text-white text-[36px] sm:text-[48px] xl:text-[62.8px] font-medium tracking-tight xl:tracking-[-2.04px]">
          What clients say
        </h2>
      </div>

      {/* Grid Content */}
      <div className="max-w-[1824px] w-full flex flex-col gap-4">
        
        {/* Row 1: Large Featured Testimonial */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 xl:gap-8">
          {/* Main Card */}
          <div className="xl:col-span-2 bg-white rounded-sm p-8 xl:p-12 flex flex-col justify-between min-h-auto xl:min-h-[440px]">
            <div>
              <div className="flex gap-1 mb-4 xl:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#05080c" stroke="none" />
                ))}
              </div>
              <h5 className="text-[#05080c] text-[18px] xl:text-[20px] font-medium leading-normal xl:leading-[1.4]">
                "{mainTestimonial.content}"
              </h5>
            </div>
            <div className="mt-8">
              <p className="text-[#05080c] font-semibold text-[16px]">{mainTestimonial.name}</p>
              <p className="text-[#5B5B5B] text-[14px]">{mainTestimonial.role}, {mainTestimonial.company}</p>
            </div>
          </div>

          {/* Artistic Image */}
          <div className="xl:col-span-3 h-[300px] sm:h-[400px] xl:h-[440px] rounded-sm overflow-hidden">
            <img 
              src={mainTestimonial.image} 
              className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700" 
              alt="Artistic Portrait" 
            />
          </div>
        </div>

        {/* Row 2: Smaller Dark Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-8">
          {subTestimonials.map((t, idx) => (
            <div key={idx} className="bg-[#05080c] border border-white/10 rounded-sm p-6 xl:p-8 flex flex-col justify-between hover:border-white/20 transition-colors mt-6 xl:mt-0">
              <div>
                <div className="flex gap-1 mb-4 xl:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="white" stroke="none" />
                  ))}
                </div>
                <p className="text-white text-[16px] leading-[1.6] opacity-90">
                  "{t.content}"
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-sm object-cover" />
                <div>
                  <p className="text-white font-medium text-[15px]">{t.name}</p>
                  <p className="text-[#999999] text-[13px]">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}