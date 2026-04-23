import { createFileRoute } from "@tanstack/react-router";
import { blogDetails } from "../data/blogDetails";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { Mail, Facebook, Instagram, Twitter, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/blogDetails/$slug")({
  component: BlogDetailPage,
});

function BlogDetailPage() {
  const { slug } = Route.useParams();
  const blog = blogDetails.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="p-24 text-center text-white bg-black h-screen">Blog Not Found</div>;
  }

  const SLAT_COUNT = 10;
  const slatVariants = {
    initial: { scaleX: 1 },
    animate: (i: number) => ({
      scaleX: 0,
      transition: {
        duration: 1.1,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.15 + i * 0.05,
      },
    }),
  };

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* 1. HERO SECTION (1208px) */}
      <section className="relative w-full h-auto xl:h-[1208px] pb-16 xl:pb-0 flex flex-col items-center bg-black overflow-hidden">
        {/* Background Base Image Layer */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.2] scale-105"
          style={{ backgroundImage: `url(${blog.heroImage})` }}
        />
 <div className="relative z-[50] w-full">
          <Navbar theme="dark" />
        </div>
        {/* White Bottom Overlay (Half-Half Effect) */}
        <div className="absolute bottom-0 left-0 right-0 h-[240px] rotate-sm bg-white z-[2]" />

       

        {/* Blog Details Hero Content Wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 w-full flex flex-col items-center mt-[120px] sm:mt-[160px] xl:mt-[252px]"
        >
          {/* Blog Details Hero Top Wrapper */}
          <div className="flex flex-col items-center text-center w-full max-w-[90%] xl:max-w-[1200px] mb-8 sm:mb-12 xl:mb-[64px]">
            {/* Title Line 1 */}
            <h1 className="text-[40px] sm:text-[60px] xl:text-[91.3px] leading-[1.1] xl:leading-[100px] font-normal tracking-[-2px] xl:tracking-[-4px] text-white flex items-center justify-center">
              Business needs
            </h1>
            {/* Title Line 2 */}
            <h1 className="text-[40px] sm:text-[60px] xl:text-[89.6px] leading-[1.1] xl:leading-[100px] font-normal tracking-[-2px] xl:tracking-[-4px] text-white flex items-center justify-center -mt-1 sm:-mt-2">
              professional photography
            </h1>

            {/* Description Lines */}
            <div className="mt-[16px] xl:mt-[24px] w-full max-w-[90%] xl:max-w-[960px]">
              <p className="text-[14px] sm:text-[16px] xl:text-[16.3px] leading-[1.5] xl:leading-[26px] font-normal text-[#999999] xl:flex xl:flex-col xl:items-center text-center">
                <span className="block xl:inline">Professional photography elevates business presence, builds trust, strengthens branding, enhances marketing, and attracts</span>
                <span className="block xl:inline">customers by delivering consistent, high-quality visuals across all platforms.</span>
              </p>
            </div>
          </div>

          {/* Stats Item Wrap */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-[60px] xl:gap-[120px] mb-8 sm:mb-12 xl:mb-[60px]">
            <StatItem label="DATE" value={blog.date} labelSize="14.8px" valueSize="22.1px" />
            <StatItem label="COMMENTS" value={blog.comments} labelSize="15px" valueSize="22.1px" />
            <StatItem label="VIEWS" value={blog.views} labelSize="14.8px" valueSize="21.9px" />
          </div>

          {/* Hero Image Wrap (Gallery) */}
          <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 xl:gap-[20px] justify-center w-full px-4 sm:px-4 xl:max-w-[1700px] xl:px-[120px]">
            {blog.galleryImages.slice(0, 2).map((img, i) => (
              <div
                key={i}
                className="w-full xl:w-[830px] aspect-[4/3] sm:aspect-video xl:aspect-auto xl:h-[480px] rounded-[8px] overflow-hidden bg-gray-900 relative"
              >
                <img src={img} className="w-full h-full object-cover" alt="Gallery" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Global Vertical Blind Loader Reveal */}
        <div className="absolute inset-0 z-[200] flex pointer-events-none overflow-hidden">
          {Array.from({ length: SLAT_COUNT }).map((_, i) => (
            <div key={i} className="h-full relative overflow-hidden flex-1">
              <motion.div
                custom={i}
                variants={slatVariants}
                initial="initial"
                animate="animate"
                className="absolute inset-0 bg-[#0a0a0a] origin-left"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 2. CONTENT SECTION (White Background) */}
      <section className="bg-white pt-4 sm:pt-8 xl:pt-[60px] pb-16 xl:pb-32 text-[#05080C]">
        <div className="max-w-[1920px] mx-auto px-[5%] md:px-4 xl:px-4">
          <div className="flex flex-col xl:flex-row gap-16 xl:gap-[80px] items-start">

            {/* LEFT SIDE: Blog Content (Approx 64%) */}
            <div className="flex-1 w-full xl:max-w-[1075px] flex flex-col gap-10 xl:gap-[40px]">
              {blog.content.map((section, idx) => (
                <div key={idx} className="relative flex flex-col">
                  {/* Section Title */}
                  <h4 className="text-[24px] sm:text-[28px] xl:text-[32px] leading-[1.2] xl:leading-[40px] font-normal tracking-[-1px] text-[#05080C] mb-4 xl:mb-[28px]">
                    {section.sectionTitle}
                  </h4>

                  {/* Section Text */}
                  <p className="text-[16px] sm:text-[18px] leading-[1.5] xl:leading-[26px] font-normal text-[#5B5B5B] mb-6 xl:mb-[44px] max-w-full xl:max-w-[95%]">
                    {section.text}
                  </p>

                  {/* Conditional Image */}
                  {section.sectionImage && (
                    <div className={`w-full rounded-[8px] overflow-hidden mb-6 xl:mb-[44px] shadow-sm aspect-video ${idx === 1 ? 'xl:aspect-auto xl:h-[520px]' : 'xl:aspect-auto xl:h-[422px]'}`}>
                      <img src={section.sectionImage} className="w-full h-full object-cover" alt="Article Content" />
                    </div>
                  )}

                  {/* Conditional List Section (if it's the specific tips section) */}
                  {section.sectionTitle.includes("Simple ways") && (
                    <div className="mb-8">
                      <h5 className=" text-[24px] leading-[32px] font-normal tracking-[-1px] mb-[26px]">
                        Simple ways to maximize your photoshoot
                      </h5>
                      <ul className="flex flex-col gap-[10px]">
                        {[
                          "Plan your key shots in advance.",
                          "Use your brand’s colors, style, and setting.",
                          "Involve your team or real customers for authenticity.",
                          "Update your visuals regularly to stay fresh."
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-[22px] text-[18px] leading-[26px] text-[#5B5B5B]">
                            <span className="text-[18px] leading-[26px] text-[#5B5B5B] font-normal">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Horizontal Border between sections except last */}
                  {idx < blog.content.length - 1 && (
                    <div className="w-full h-px bg-[#E2E2E3] mt-[40px] absolute -bottom-[0px]" />
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT SIDE: Dedicated "Share Article" Box (368px) */}
            <aside className="w-full xl:w-[368px] xl:sticky xl:top-[120px] h-fit">
              <div className="w-full xl:w-[368px] h-auto xl:h-[164px] bg-[#F5F5F5] rounded-[8px] p-6 sm:p-8 xl:p-[32px] border border-[#E2E2E3] flex flex-col sm:flex-row xl:flex-col justify-between sm:items-center xl:items-start gap-4 xl:gap-0">
                <h3 className=" text-[20px] xl:text-[22.1px] leading-[32px] font-normal tracking-[-1px] text-[#05080C] shrink-0">
                  Share Article
                </h3>
                <div className="flex flex-wrap gap-[12px] sm:gap-[16px] items-center">
                  {[
                    { icon: <Twitter size={20} />, url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog?.title)}&url=${encodeURIComponent(window.location.href)}` },
                    { icon: <Facebook size={20} />, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}` },
                    { icon: <Instagram size={20} />, url: "https://instagram.com" },
                    { icon: <Mail size={20} />, url: `mailto:?subject=${encodeURIComponent(blog?.title)}&body=${encodeURIComponent(window.location.href)}` },
                    { icon: <ExternalLink size={20} />, url: `https://api.whatsapp.com/send?text=${encodeURIComponent(blog?.title + " " + window.location.href)}` },
                  ].map((btn, i) => (
                    <a
                      key={i}
                      href={btn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[40px] xl:w-[48px] h-[40px] xl:h-[48px] min-w-[40px] xl:min-w-[48px] flex items-center justify-center border border-[#E2E2E3] rounded-[4px] bg-white text-[#05080C] hover:bg-gray-100 transition-all duration-300"
                    >
                      {btn.icon}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function StatItem({
  label,
  value,
  labelSize,
  valueSize
}: {
  label: string;
  value: string;
  labelSize: string;
  valueSize: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <span
        className=" leading-[24px] font-normal text-[#999999] mb-[4px] uppercase"
        style={{ fontSize: labelSize }}
      >
        {label}
      </span>
      <span
        className=" leading-[32px] font-normal text-white tracking-[-1px]"
        style={{ fontSize: valueSize }}
      >
        {value}
      </span>
    </div>
  );
}
