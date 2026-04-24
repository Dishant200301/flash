import { useState } from "react";
import { toast } from "sonner";

const SESSION_TYPES = ["Wedding", "Family Session", "Events", "Lifestyle", "Portrait"];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", sessionType: "Session Type", message: "" });
  const [selectOpen, setSelectOpen] = useState(false);

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    toast.success("Message sent — I'll be in touch within 24 hours.");
    setForm({ name: "", email: "", sessionType: "Session Type", message: "" });
  };

  return (
      <section className="relative w-full min-h-auto lg:min-h-[1100px] flex flex-col items-center pt-24 md:pt-32 lg:pt-[100px] pb-24 md:pb-32 overflow-hidden">
        
        {/* Backgound layer like the blurry red berries in ref image */}
        <div className="absolute inset-0 z-0">
          {/* Fallback pattern / gradient or an image. We use hero.webp blurred. */}
          <img
            src="/images/contact/bg_contact.webp"
            alt="Contact Background"
            className="w-full h-full object-cover blur-2xl opacity-70 scale-125"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1400px] px-4 md:px-5 lg:px-[50px] flex flex-col items-center">
          
          {/* Headings */}
          <div className="flex flex-col items-center text-center mb-12 md:mb-[60px]">
            <div className="flex items-center gap-[8px] mb-4 md:mb-[24px]">
              <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
                <path d="M2 2L10 9L2 16V2Z" fill="#FF462E" stroke="#FF462E" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              <span className="text-white text-[14px] md:text-[16.2px] tracking-normal font-normal">Get in touch</span>
            </div>
            
            <h2 className="text-white text-[32px] md:text-[56px] lg:text-[76px] font-normal leading-[1.1] lg:leading-[1.05] tracking-tight lg:tracking-[-2.5px] max-w-[1000px]">
              Let’s connect and Capture<br className="hidden sm:block"/> your moments Together
            </h2>
          </div>

          {/* Two column grid: Left Photo, Right Form */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8">
            
            {/* Form Card (Mobile/Tablet: Order first as per ref) */}
            <form onSubmit={onSubmit} className="w-full bg-white rounded-sm p-4 md:p-[20px] lg:p-[40px] flex flex-col justify-center shadow-2xl order-1 lg:order-2">
              <p className="text-[#5B5B5B] text-[14px] md:text-[15px] mb-6 md:mb-[32px]">
                Leave your contact info, and I'll be in touch shortly.
              </p>
              
              <div className="flex flex-col gap-[16px] w-full">
                {/* Name Input */}
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-[48px] md:h-[52px] bg-[#f5f5f5] rounded-[4px] px-5 outline-none text-[#05080c] placeholder-[#87898b] text-[14px] md:text-[15px]"
                />

                {/* Email Input */}
                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full h-[48px] md:h-[52px] bg-[#f5f5f5] rounded-[4px] px-5 outline-none text-[#05080c] placeholder-[#87898b] text-[14px] md:text-[15px]"
                />

                {/* Session Type Select */}
                <div className="relative w-full">
                  <button
                    type="button"
                    onClick={() => setSelectOpen(!selectOpen)}
                    className="w-full h-[48px] md:h-[52px] bg-[#f5f5f5] rounded-[4px] px-5 flex items-center justify-between text-[#5B5B5B] text-[14px] md:text-[15px]"
                  >
                    {form.sessionType}
                    <svg width="10" height="6" viewBox="0 0 10 6" className={selectOpen ? "rotate-180 transition-transform" : "transition-transform"} fill="none">
                      <path d="M1 1L5 5L9 1" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  
                  {selectOpen && (
                    <div className="absolute top-[52px] md:top-[56px] left-0 w-full bg-white border border-[#e2e2e3] rounded-[4px] shadow-lg z-20 overflow-hidden">
                      {SESSION_TYPES.map((type) => (
                        <div 
                          key={type}
                          onClick={() => { setForm({...form, sessionType: type}); setSelectOpen(false); }}
                          className="px-5 py-3 hover:bg-[#f5f5f5] cursor-pointer text-[#05080c] text-[14px] md:text-[15px]"
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Message Area */}
                <textarea
                  placeholder="Leave your message"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full h-[120px] md:h-[140px] bg-[#f5f5f5] rounded-[4px] p-5 pt-5 outline-none text-[#05080c] placeholder-[#87898b] resize-none text-[14px] md:text-[15px]"
                />

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full h-[50px] md:h-[54px] bg-[#05080c] hover:bg-[#87898b] cursor-pointer text-white rounded-[6px] font-medium text-[15px] md:text-[16px] transition-transform active:scale-[0.98] mt-4"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Photo Card (Mobile/Tablet: Order second as per ref) */}
            <div className="relative w-full aspect-4/5 lg:aspect-auto lg:h-[600px] rounded-[12px] overflow-hidden group order-2 lg:order-1">
              <img 
                src="/images/contact/contact.webp" 
                alt="Portrait"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-[32px] md:bottom-[40px] left-[32px] md:left-[40px] z-10 flex flex-col">
                <p className="text-white mb-1.5 text-[14px] md:text-[16.5px] font-normal">E-mail me at</p>
                <a 
                  href="mailto:hello@flash.com" 
                  className="text-white text-[24px] md:text-[32px] font-medium tracking-tight lg:tracking-[-1px] hover:opacity-70 transition-opacity"
                >
                  hello@flash.com
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom Decorative Line / Ruler ── */}
        <div className="absolute bottom-0 left-0 w-full h-[32px] md:h-[44px] overflow-hidden opacity-60">
          <img 
            src="https://framerusercontent.com/images/spqHrHChjNs7plZkZUeueVCJVk.svg" 
            className="w-[1500px] lg:w-[1970px] max-w-none absolute left-1/2 -translate-x-1/2" 
            alt="decor"
          />
        </div>

      </section>
  );
}
