import React, { useEffect } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { portfolioDetails } from '../data/portfolioDetails';
import { Play } from 'lucide-react';

const SLAT_COUNT = 10;

const slatVariants = {
  initial: { scaleX: 1 },
  animate: (i: number) => ({
    scaleX: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * i,
    },
  }),
};

export const Route = createFileRoute('/portfolioDetails/$slug')({
  component: PortfolioDetailPage,
});

function PortfolioDetailPage() {
  const { slug } = Route.useParams();
  const project = portfolioDetails.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white ">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-red-500 hover:underline">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-black text-white overflow-x-hidden ">

      {/* 1. PORTFOLIO DETAILS HERO SECTION (943.98px) */}
      <section className="relative w-full h-auto lg:h-[943.98px] flex flex-col items-center bg-black overflow-hidden lg:overflow-visible">

        {/* Background Base Image Layer - Camera details highlighted on dark */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-80 scale-105"
          style={{ backgroundImage: `url('/images/home/portfolio/bg.webp')` }}
        />

        <div className="relative z-[100] w-full">
          <Navbar theme="dark" />
        </div>

        {/* Portflio Details Hero Wrapper */}
        <div className="relative z-[20] w-full max-w-[1920px] mx-auto px-4 md:px-4 lg:px-[clamp(1rem,4vw,3.5rem)] xl:px-[68px] h-full pt-32 pb-16 lg:pt-0 lg:pb-0 lg:h-[724px] lg:mt-[136px] flex flex-col lg:block">

          {/* Featured Image Wrap */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="block lg:absolute lg:right-0 lg:px-0 xl:px-8 top-auto lg:top-1/2 lg:-translate-y-1/2 lg:-mt-[282px] w-full lg:w-[710px] h-[300px] md:h-[450px] lg:h-[360px] rounded-[8px] overflow-hidden z-30 lg:flex lg:items-end lg:justify-center order-1 lg:order-none"
          >
            <img src={project.heroImage} className="w-full h-full object-cover rounded-sm" alt="Featured" />
          </motion.div>

          {/* Portflio Details Hero Content Wrapper */}
          <div className="relative lg:absolute lg:left-0 lg:right-0 xl:left-8 xl:right-8 lg:bottom-4 lg:top-1/2 lg:-translate-y-1/2 lg:mt-[100px] lg:h-[296px] flex flex-col lg:flex-row mt-8 lg:mt-0 order-2 lg:order-none">

            {/* Left Wrapper: Title & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative w-full lg:w-[713px] h-auto lg:h-[272px] flex flex-col"
            >
              <h1 className="relative lg:absolute lg:left-0 lg:-top-[8px] lg:w-[697.79px] lg:h-[216px] text-[42px] leading-[1.1] md:text-[64px] lg:text-[92.6px] lg:leading-[100px] font-medium tracking-[-2px] lg:tracking-[-4px] text-white flex items-center">
                {project.title}
              </h1>
              <p className="relative lg:absolute lg:left-0 lg:top-[222px] lg:w-[658.86px] lg:h-[47px] text-[16px] lg:text-[16.5px] leading-[24px] lg:leading-[26px] font-normal text-[#999999] flex items-center mt-6 lg:mt-0">
                {project.description}
              </p>
            </motion.div>

            {/* Right Wrapper: Info Items */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="relative lg:absolute lg:left-[713px] lg:right-0 lg:h-[296px] flex flex-col lg:items-end lg:justify-between mt-12 lg:mt-0"
            >
              <div className="flex flex-col gap-4 lg:gap-0 w-full lg:w-auto lg:h-full">
                <InfoItem label="CLIENT" value={project.client} labelSize="14.6px" valueSize="22.3px" />
                <InfoItem label="TYPE" value={project.type} labelSize="15px" valueSize="22.1px" />
                <InfoItem label="YEAR" value={project.year} labelSize="14.9px" valueSize="21.9px" />
                <InfoItem label="DURATION" value={project.duration} labelSize="14.8px" valueSize="22.3px" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Grid Ruler (At 900px mark) */}
        {/* Decorative Grid Ruler (bedge.webp) */}
        <div className="hidden lg:block absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[1920px] pointer-events-none px-[48px]">
          <motion.div className="flex w-full items-center justify-center opacity-90 mix-blend-screen overflow-visible">
            <img
              src="/images/home/portfolio/bedge.webp"
              className="w-full h-auto object-contain scale-x-105"
              alt="Decorative Ruler"
            />
          </motion.div>
        </div>

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

      {/* 2. CONTENT SECTIONS (White Background) */}
      <section className="bg-white lg:h-[3258px] text-[#05080C] relative py-12 lg:py-0">
        <div className="w-full max-w-[1450px] lg:max-w-full xl:max-w-[1450px] mx-auto px-4 md:px-4 lg:px-[clamp(1rem,4vw,3.5rem)] xl:px-24 h-full relative flex flex-col lg:block gap-24 lg:gap-0">

          {/* Intro Section */}
          <div className="relative lg:absolute lg:top-[80px] lg:left-0 lg:right-0 lg:h-[952px] flex flex-col">
            <ContentHeader category="INTRO" title="Understanding the Vision" text={project.sections[0].text} />
            <div className="relative lg:absolute lg:top-[192px] w-full h-[300px] md:h-[500px] lg:h-[760px] rounded-[8px] overflow-hidden bg-gray-100 mt-8 lg:mt-0">
              <img src={project.sections[0].images[0]} className="w-full h-full object-cover" alt="Vision" />
            </div>
          </div>

          {/* Challenges Section */}
          <div className="relative lg:absolute lg:top-[1092px] lg:left-0 lg:right-0 lg:h-[818px] flex flex-col">
            <ContentHeader category="CHALLENGES" title="Capturing Emotion & Atmosphere" text={project.sections[1].text} />
            <div className="relative lg:absolute lg:top-[192px] w-full h-[300px] md:h-[500px] lg:h-[760px] rounded-[8px] overflow-hidden bg-gray-100 mt-8 lg:mt-0">
              <img src={project.sections[1].images[0]} className="w-full h-full object-cover" alt="Detail 1" />
            </div>
          </div>

          {/* Outcome Section */}
          <div className="relative lg:absolute lg:top-[2150px] lg:left-0 lg:right-0 lg:h-[978px] flex flex-col">
            <ContentHeader category="OUTCOME" title="Bringing the Day to Life" text={project.sections[2].text} isSplit />
            <div className="relative lg:absolute lg:top-[192px] w-full h-[300px] md:h-[500px] lg:h-[760px] rounded-[8px] overflow-hidden bg-gray-100 mt-8 lg:mt-0">
              <img src={project.sections[2].images[0]} className="w-full h-full object-cover" alt="Outcome" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function InfoItem({ label, value, labelSize, valueSize }: { label: string; value: string; labelSize: string; valueSize: string }) {
  return (
    <div className="lg:h-[56px] flex flex-row lg:flex-col justify-between items-center lg:items-end lg:justify-center w-full border-b border-white/10 lg:border-none pb-4 lg:pb-0">
      <span style={{ fontSize: labelSize }} className="text-[#999999] opacity-50 font-normal leading-[24px] uppercase">{label}</span>
      <span style={{ fontSize: valueSize }} className="text-white font-medium leading-[32px] tracking-[-1px] text-right">{value}</span>
    </div>
  );
}

function ContentHeader({ category, title, text, isSplit = false }: { category: string; title: string; text: string; isSplit?: boolean }) {
  return (
    <div className="relative w-full h-auto lg:h-[170px] flex flex-col lg:flex-row">
      <div className="w-full lg:w-[510.72px] h-[26px] flex items-center mb-6 lg:mb-0 gap-3">
        <div className="w-[12px] h-[18px] flex items-center justify-center">
          <div className="w-[12px] h-[12px] bg-[#FF462E] transform rotate-45" />
        </div>
        <span className="text-[16.6px] font-normal uppercase leading-[26px]">{category}</span>
      </div>
      <div className={`${isSplit ? 'lg:ml-auto lg:w-[804px]' : 'flex-1'} relative`}>
        <h4 className="text-[24px] lg:text-[29.3px] font-medium leading-[40px] tracking-[-1px] text-[#05080C] lg:mt-[-4px]">
          {title}
        </h4>
        <p className="text-[16px] lg:text-[16.3px] leading-[26px] text-[#5B5B5B] mt-[28px]">
          {text}
        </p>
      </div>
    </div>
  );
}