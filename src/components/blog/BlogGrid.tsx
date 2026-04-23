import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";

import { BlogPost, blogPosts } from "../../data/blog";

// --- Sub-Components ---
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.453 27.452L31.547 14.118M31.547 14.118L27.887 27.779M31.547 14.118L17.887 10.458" 
        stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BlogCard({ post, aspect = "aspect-square" }: { post: BlogPost; aspect?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to="/blogDetails/$slug"
      params={{ slug: post.slug }}
      className="group block w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${aspect} bg-[#f5f5f5]`}>
        <img
          src={post.cover}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Animated Arrow Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
              className="absolute top-1/2 left-1/2 z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#05080c] shadow-xl overflow-hidden group/btn cursor-pointer"
            >
              {/* Primary Arrow: Starts center, moves out top-right */}
              <ArrowIcon className="absolute transition-transform duration-300 ease-out group-hover/btn:translate-x-[200%] group-hover/btn:-translate-y-[200%]" />
              {/* Secondary Arrow: Starts bottom-left, moves into center */}
              <ArrowIcon className="absolute -translate-x-[200%] translate-y-[200%] transition-transform duration-300 ease-out group-hover/btn:translate-x-0 group-hover/btn:translate-y-0" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content Section */}
      <div className="mt-5">
        <h4 className="text-[20px] lg:text-[22px] font-medium leading-[1.2] text-[#05080c]  transition-opacity pb-3 border-b border-[#e2e2e3]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          {post.title}
        </h4>
        <div className="flex gap-1 py-2 text-[13px] lg:text-[14px] text-[#5b5b5b] border-b border-[#e2e2e3]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          <span>{post.category},</span>
          <span className="text-[#05080c]">{post.date}</span>
        </div>
      </div>
    </Link>
  );
}

// --- Main Component ---
export function BlogGrid() {
  return (
    <section className="w-full bg-white py-10 lg:py-16 px-4 md:px-4" >
      <div className="max-w-[1400px] mx-auto space-y-16">
        
        {/* Row 1: Large (40%) | Small (30%) | Small (30%) */}
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-8 items-start">
          <div className="w-full xl:w-[40%]">
            <BlogCard post={blogPosts[0]} aspect="aspect-[4/5]" />
          </div>
          <div className="w-full xl:w-[30%]">
            <BlogCard post={blogPosts[1]} aspect="aspect-[4/5] xl:aspect-square" />
          </div>
          <div className="w-full xl:w-[30%]">
            <BlogCard post={blogPosts[2]} aspect="aspect-[4/5] xl:aspect-square" />
          </div>
        </div>

        {/* Row 2: Small (30%) | Large (40%) | Small (30%) */}
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-8 items-start">
          <div className="w-full xl:w-[30%]">
            <BlogCard post={blogPosts[3]} aspect="aspect-[4/5] xl:aspect-square" />
          </div>
          <div className="w-full xl:w-[40%]">
            <BlogCard post={blogPosts[4]} aspect="aspect-[4/5]" />
          </div>
          <div className="w-full xl:w-[30%]">
            <BlogCard post={blogPosts[5]} aspect="aspect-[4/5] xl:aspect-square" />
          </div>
        </div>

      </div>
    </section>
  );
}
