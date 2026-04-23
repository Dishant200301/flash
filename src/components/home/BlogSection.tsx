import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";

import { BlogPost, blogPosts as posts } from "../../data/blog";

export function BlogSection() {
  return (
    <section 
      className="w-full bg-[#F5F5F5] py-[40px] sm:py-[60px] xl:py-[140px] px-4 sm:px-4 xl:px-5 flex flex-col items-center gap-[32px] sm:gap-[48px]"
      style={{ fontFamily: "'Inter Tight', sans-serif" }}
    >
      
      {/* Blog Top Wrapper */}
      <div className="w-full max-w-[1400px] flex flex-col items-start text-left mb-4 px-2 xl:px-0">
        <h2 className="text-[36px] sm:text-[48px] xl:text-[62.8px] font-medium leading-[1.1] tracking-tight xl:tracking-[-2px] text-[#05080C]">
          Latest from blog
        </h2>
        <div className="mt-4 max-w-[90%] sm:max-w-[70%] xl:max-w-[600px]">
          <p className="text-[14px] sm:text-[15px] xl:text-[16.5px] leading-[1.5] xl:leading-[26px] text-[#5B5B5B]">
            Explore our latest articles, tips, & insights on photography, capturing moments, and creating timeless visual stories.
          </p>
        </div>
      </div>

      {/* Exact Match Grid Layout from BlogGrid */}
      <div className="w-full max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-8 items-start px-2 xl:px-0">
          <div className="w-full xl:w-[40%]">
            <BlogCard post={posts[0]} aspect="aspect-[4/5]" />
          </div>
          <div className="w-full xl:w-[30%]">
            <BlogCard post={posts[1]} aspect="aspect-square xl:aspect-auto xl:h-[100%]" />
          </div>
          <div className="w-full xl:w-[30%]">
            <BlogCard post={posts[2]} aspect="aspect-square xl:aspect-auto xl:h-[100%]" />
          </div>
        </div>
      </div>
    </section>
  );
}

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
      className="group block w-full mb-8 xl:mb-0"
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
              {/* Primary Arrow */}
              <ArrowIcon className="absolute transition-transform duration-300 ease-out group-hover/btn:translate-x-[200%] group-hover/btn:-translate-y-[200%]" />
              {/* Secondary Arrow */}
              <ArrowIcon className="absolute -translate-x-[200%] translate-y-[200%] transition-transform duration-300 ease-out group-hover/btn:translate-x-0 group-hover/btn:translate-y-0" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content Section */}
      <div className="mt-4 xl:mt-5">
        <h4 className="text-[20px] xl:text-[22px] font-medium leading-[1.3] xl:leading-[1.2] text-[#05080c] transition-opacity pb-3 border-b border-[#e2e2e3]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          {post.title}
        </h4>
        <div className="flex gap-1 py-2 text-[13px] xl:text-[14px] leading-[1.5] text-[#5b5b5b] border-b border-[#e2e2e3]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          <span>{post.category},</span>
          <span className="text-[#05080c]">{post.date}</span>
        </div>
      </div>
    </Link>
  );
}