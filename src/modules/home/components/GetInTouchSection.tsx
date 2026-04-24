import { useState } from "react";
import { motion } from "framer-motion";

const SESSION_TYPES = ["Wedding", "Family Session", "Events", "Lifestyle", "Portrait"];

export function GetInTouchSection() {
  const [form, setForm] = useState({ name: "", email: "", sessionType: "Session-type", message: "" });
  const [selectOpen, setSelectOpen] = useState(false);

  return (
    <section 
      className="relative w-full min-h-[912px] bg-[#05080c] overflow-hidden flex flex-col items-center justify-center py-20 lg:py-0"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      
      {/* ── Background Image Layer ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://framerusercontent.com/images/z6svX2Zab7gKS9kNpt9ZLqoUs.png"
          alt="Contact Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* ── Main Content Wrapper ── */}
      <div className="relative z-10 w-full max-w-[1824px] px-5 lg:px-[50px] flex flex-col lg:flex-row items-start gap-[48px] lg:gap-0 lg:justify-between">
        
        {/* LEFT WRAPPER (45%) */}
        <div className="flex flex-col items-start w-full lg:w-[45%] text-left pt-2 lg:pt-0">
          
          <div className="flex items-center gap-[8px] mb-[20px]">
            {/* Red Play Button Triangle SVG */}
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
              <path d="M2 2L10 9L2 16V2Z" fill="#FF462E" stroke="#FF462E" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <span className="text-white text-[16.2px] tracking-normal font-normal">Get in touch</span>
          </div>
          
          <h2 className="text-white text-[48px] lg:text-[68px] font-normal leading-[1.1] tracking-[-2.04px] max-w-[620px]">
            Let’s connect and Capture your moments Together
          </h2>
        </div>

        {/* RIGHT WRAPPER - White Form Card (55%) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full lg:w-[55%] max-w-[800px] bg-white rounded-[12px] p-[40px] lg:p-[48px] flex flex-col"
        >
          {/* Email Section */}
          <div className="mb-[16px] w-full">
            <p className="text-[#5B5B5B] text-[16.5px] mb-1">E-mail me at</p>
            <a 
              href="mailto:hello@flash.com" 
              className="text-[#05080c] text-[32px] lg:text-[44.4px] font-medium tracking-[-2px] inline-block border-b border-[#05080c] pb-1 leading-none hover:opacity-70 transition-opacity"
            >
              hello@flash.com
            </a>
          </div>

          <p className="text-[#5B5B5B] text-[14.4px] mb-[24px]">
            Leave your contact info, and I’ll be in touch shortly.
          </p>

          {/* Form Fields */}
          <form className="flex flex-col gap-[12px] w-full">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full h-[48px] bg-[#f5f5f5] rounded-[4px] px-4 outline-none text-[#05080c] placeholder-[#555662] text-[14.6px]"
            />

            {/* Row: Email + Session Type */}
            <div className="flex flex-col sm:flex-row gap-[12px] w-full">
              <input
                type="email"
                placeholder="E-mail"
                required
                className="flex-1 w-full h-[48px] bg-[#f5f5f5] rounded-[4px] px-4 outline-none text-[#05080c] placeholder-[#555662] text-[14.6px]"
              />
              
              <div className="relative flex-1 w-full">
                <button
                  type="button"
                  onClick={() => setSelectOpen(!selectOpen)}
                  className="w-full h-[48px] bg-[#f5f5f5] rounded-[4px] px-4 flex items-center justify-between text-[#5B5B5B] text-[14.6px]"
                >
                  {form.sessionType}
                  <svg width="10" height="6" viewBox="0 0 10 6" className={selectOpen ? "rotate-180 transition-transform" : "transition-transform"} fill="none">
                    <path d="M1 1L5 5L9 1" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                
                {selectOpen && (
                  <div className="absolute top-[52px] left-0 w-full bg-white border border-[#e2e2e3] rounded-[4px] shadow-lg z-20 overflow-hidden">
                    {SESSION_TYPES.map((type) => (
                      <div 
                        key={type}
                        onClick={() => { setForm({...form, sessionType: type}); setSelectOpen(false); }}
                        className="px-4 py-2 hover:bg-[#f5f5f5] cursor-pointer text-[#05080c] text-[14.6px]"
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Message Area */}
            <textarea
              placeholder="Leave your message"
              required
              className="w-full h-[124px] bg-[#f5f5f5] rounded-[4px] p-4 pt-4 outline-none text-[#05080c] placeholder-[#555662] resize-y text-[14.6px]"
            />

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full h-[50px] bg-[#05080c] hover:bg-[#87898b] cursor-pointer text-white rounded-[4px] font-medium text-[16.7px] transition-transform mt-2"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* ── Bottom Decorative Line ── */}
      <div className="absolute bottom-0 left-0 w-full h-[44px] overflow-hidden opacity-60">
        <img 
          src="https://framerusercontent.com/images/spqHrHChjNs7plZkZUeueVCJVk.svg" 
          className="w-[1970px] max-w-none absolute left-1/2 -translate-x-1/2" 
          alt="decor"
        />
      </div>
    </section>
  );
}