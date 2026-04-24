import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { MagnetButton } from "@/components/ui/MagnetButton";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "How do I book a session?",
    a: "You can book easily through our website, by email, or phone. We'll confirm your preferred date and photography package quickly and securely.",
  },
  {
    q: "What is your turnaround time?",
    a: "My turnaround time depends on the scope of the project, but I usually deliver within 24–48 hours for most tasks. Larger or more detailed projects may take a bit longer.",
  },
  {
    q: "Do you provide location guidance?",
    a: "Yes, I provide location guidance based on your needs—whether it’s selecting the best spot for a photoshoot, business setup, or event planning.",
  },
  {
    q: "Can I request specific shots?",
    a: "Absolutely! You’re welcome to request specific shots or styles you have in mind. I’ll make sure to incorporate your ideas while suggested creative options.",
  },
  {
    q: "What should I wear for a photoshoot?",
    a: "Generally, wear something that makes you feel confident and comfortable. Solid colors, minimal patterns, and well-fitted outfits photograph best.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-white flex flex-col items-center px-4 sm:px-4 xl:px-8 py-16 xl:py-[140px] overflow-hidden">
      {/* Background Image: Camera Outline */}
      <img 
        src="/images/home/faq_bg.webp" 
        alt="Camera sketch background" 
        className="absolute top-0 left-0 md:-left-[5%] w-[450px] max-w-[50vw] opacity-100 pointer-events-none invert"
        style={{ zIndex: 0 }}
      />

      {/* Header Container - Asymmetric Right Alignment */}
      <div className="w-full max-w-[1400px] grid grid-cols-1 xl:grid-cols-[4fr_7fr] gap-6 xl:gap-[64px] items-start mb-6 xl:mb-12 relative z-10">
        <div className="hidden xl:block"></div> {/* Offsets header to right column */}
        
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 mb-2 xl:mb-0">
            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[6px] border-l-[#FF462E] border-b-[5px] border-b-transparent" />
            <span className="text-[13px] sm:text-[14px] font-medium text-[#05080C] tracking-wide">FAQs</span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] xl:text-[62px] font-medium leading-[1.1] tracking-tight xl:tracking-[-2.04px] text-[#05080C]">
            Got questions?
          </h2>
        </div>
      </div>

      {/* Main Divider Line */}
      <div className="w-full max-w-[1400px] border-t border-[#e2e2e3] relative z-10" />

      {/* FAQs Content Wrapper */}
      <div className="w-full max-w-[1400px] flex flex-col xl:grid xl:grid-cols-[4fr_7fr] gap-12 xl:gap-[64px] items-start pt-6 sm:pt-8 xl:pt-12 relative z-10">
        
        {/* Left Content Wrap */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 sm:gap-6 xl:sticky xl:top-32 order-last xl:order-first pt-6 xl:pt-0"
        >
          <h5 className="text-[16px] sm:text-[18px] xl:text-[20px] font-medium leading-[1.4] text-[#05080C]">
            Still have question? Book a intro call
          </h5>
          
          <div className="text-decoration-none w-fit group">
            <Link to="/contact">
              <MagnetButton text="Contact Us" variant="light" />
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Accordion List */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
             hidden: {},
             visible: {
               transition: {
                 staggerChildren: 0.1
               }
             }
          }}
          className="flex flex-col w-full"
        >
          {faqs.map((faq, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              key={index}
            >
              <AccordionItem
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AccordionItem({ faq, isOpen, onClick }: { faq: FAQItem, isOpen: boolean, onClick: () => void }) {
  return (
    <div 
      className="border-b border-[#e2e2e3] w-full cursor-pointer group"
      onClick={onClick}
    >
      <div className="py-6 sm:py-7 flex justify-between items-start gap-4 sm:gap-8">
        <div className="flex flex-col gap-2 sm:gap-3">
          <h5 className={`text-[16px] sm:text-[20px] xl:text-[22px] font-medium transition-colors duration-300 ${isOpen ? 'text-[#05080C]' : 'text-[#05080C]/80 group-hover:text-[#05080C]'}`}>
            {faq.q}
          </h5>
          
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <p className="text-[14px] sm:text-[16px] leading-normal xl:leading-[26px] text-[#7a7a7a] max-w-[600px] pt-1 pb-1">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="shrink-0 mt-1 flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-5 h-5 text-[#05080C]" strokeWidth={1.5} />
          ) : (
            <Plus className="w-5 h-5 text-[#000000] opacity-50 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
          )}
        </div>
      </div>
    </div>
  );
}