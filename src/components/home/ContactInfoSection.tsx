import { motion } from "framer-motion";

export function ContactInfoSection() {
  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-[120px] px-4 md:px-4 xl:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* TOP WRAPPER - Heading & Caption */}
        <div className="grid grid-cols-1 xl:grid-cols-[30%_70%] gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-24">
          {/* Left: Red Play Icon + Caption */}
          <div className="pt-2">
            <div className="flex items-center gap-2">
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#FF462E]"
              >
                <path d="M10 6L3 10V2L10 6Z" fill="currentColor" />
              </svg>
              <span className="text-[14px] md:text-[16px] text-[#05080c] font-medium tracking-tight">
                Let’s Frame Life’s Details
              </span>
            </div>
          </div>

          {/* Right: Large Heading */}
          <div>
            <h2 className="font-medium text-[28px] sm:text-[32px] md:text-[46px] xl:text-[68px] leading-[1.1] md:leading-[1.1] xl:leading-[76px] text-[#05080c] tracking-tight max-w-[1000px]">
              Skip the planning—share your full vision. From quick portraits to big projects, I’ll guide you every step.
            </h2>
          </div>
        </div>

        {/* BOTTOM WRAPPER - Content & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[30%_70%] gap-12 md:gap-16 lg:gap-8">
          
          {/* Right Column: Google Maps (Mobile: Order first as per ref) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[250px] sm:h-[300px] md:h-[480px] rounded-sm order-1 lg:order-2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540423055108!2d-0.1414446!3d51.5112911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d49f4b7941%3A0x280e2f5b4f0b0b0!2sRegent%20St%2C%20London!5e0!3m2!1sen!2suk!4v1640000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location"
              className="rounded-[8px]"
            />
          </motion.div>

          {/* Left Column: Description + Contact Info (Mobile: Order second as per ref) */}
          <div className="flex flex-col justify-between h-full space-y-12 md:space-y-16 lg:space-y-0 order-2 lg:order-1">
            {/* Intro Text */}
            <p className="font-normal text-[#5b5b5b] text-[16px] md:text-[18px] leading-normal lg:leading-[26px] xl:max-w-[340px]">
             I capture genuine, authentic moments that truly reflect who you are. My goal is to help you feel at ease and be yourself in front of the camera—whether it’s your wedding day, a family session, or a creative project we bring to life together.
            </p>

            {/* Contact Stack */}
            <div className="space-y-8">
              <div>
                <h4 className="font-medium text-[#05080c] text-[28px] md:text-[32px] leading-[40px] mb-1">Connect now</h4>
                <p className="font-normal text-[#5b5b5b] text-[16px] md:text-[18px] leading-normal lg:leading-[26px] tracking-widest uppercase">
                  ( SAY HELLO )
                </p>
              </div>

              <div className="flex flex-col space-y-2 text-[16px] md:text-[18px] text-[#05080c]">
                <a href="mailto:hello@flash.com" className="font-normal leading-normal lg:leading-[26px] hover:underline transition-colors w-fit">
                  hello@flash.com
                </a>
                <a href="tel:+88245685321" className="font-normal leading-normal lg:leading-[26px] hover:underline transition-colors w-fit">
                  +88 245 68 53 21
                </a>
                <p className="font-normal leading-normal lg:leading-[26px] max-w-[240px] pt-2">
                  45 Regent Street, Level 2, London W1B 5RA, UK
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}