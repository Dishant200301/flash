import { motion } from "framer-motion";

const gearItems = [
  { id: "[01]", title: "Canon EOS R5", category: "Camera" },
  { id: "[02]", title: "Canon RF 24-70mm f/2.8L IS USM", category: "Zoom lens" },
  { id: "[03]", title: "Sigma 85mm f/1.4 DG HSM Art", category: "Prime lens" },
  { id: "[04]", title: "DJI Mavic Air 2", category: "Drone" },
  { id: "[05]", title: "Godox AD200 Pro", category: "Flash" },
  { id: "[06]", title: "Canon RF 24-70mm f/2.8L IS USM", category: "Zoom lens" },
  { id: "[07]", title: "Adobe Lightroom & Photoshop", category: "Editing software" },
];

export function GearSoftwareSection() {
  return (
    <section className="w-full bg-white py-16 xl:py-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1500px]">
        <div className="flex flex-col xl:flex-row items-start gap-12 xl:gap-24">
          
          {/* Left Column: Heading & Caption */}
          <div className="w-full xl:w-[467px] shrink-0">
            <div className="flex items-center gap-2 mb-4 xl:mb-6">
              <span className="text-[#FF462E]">
                <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9L0 18L0 0L12 9Z" fill="#FF462E" />
                </svg>
              </span>
              <span className="text-[15px] xl:text-[16.5px] leading-[26px] font-normal text-[#05080C]">
                Gear & Software
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[48px] xl:text-[63.9px] leading-[1.1] xl:leading-[76px] font-medium tracking-tight xl:tracking-[-2.04px] text-[#05080C]">
              Tools That Bring <br className="hidden sm:block" /> Vision to Life
            </h2>
          </div>

          {/* Right Column: Gear List */}
          <div className="w-full xl:grow xl:max-w-[850px]">
            <div className="flex flex-col">
              {gearItems.map((item, index) => {
                const isFirst = index === 0;
                const isLast = index === gearItems.length - 1;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`
                      flex sm:items-center items-stretch h-auto sm:h-[96px] bg-[#F5F5F5] border-x border-t border-[#E2E2E3]
                      ${isFirst ? "rounded-t-[8px]" : ""}
                      ${isLast ? "rounded-b-[8px] border-b" : ""}
                    `}
                  >
                    {/* Index / ID */}
                    <div className="w-[48px] sm:w-[68px] flex items-center justify-center border-r border-[#E2E2E3] shrink-0">
                      <span className="text-[14px] xl:text-[15.5px] leading-[26px] font-normal text-[#5B5B5B]">
                        {item.id}
                      </span>
                    </div>

                    {/* Content Wrap */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-between w-full px-4 sm:px-6 xl:px-10 py-4 sm:py-0">
                      <h3 className="text-[16px] sm:text-[20px] xl:text-[22.1px] leading-[1.3] xl:leading-[32px] font-medium tracking-tight xl:tracking-[-1px] text-[#05080C] sm:truncate sm:mr-4 mb-1 sm:mb-0">
                        {item.title}
                      </h3>
                      <span className="text-[13px] sm:text-[15px] xl:text-[17.4px] leading-[1.4] xl:leading-[26px] font-semibold text-[#5B5B5B] sm:whitespace-nowrap">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
