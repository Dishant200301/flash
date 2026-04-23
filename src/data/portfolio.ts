export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  cover: string;
  gallery: string[];
  description: string;
  client: string;
  location: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "emmas-wedding-day",
    title: "Emma's Wedding Day",
    category: "Weddings",
    date: "Oct 4, 2025",
    cover: "/images/home/portfolio/portfolio-1.webp",
    gallery: ["/images/portfolio/detail-1.webp"],
    description: "A timeless celebration...",
    client: "Emma & Liam",
    location: "London, UK",
  },
  {
    slug: "liams-outdoor-adventure",
    title: "Liam's Outdoor Adventure",
    category: "Outdoor",
    date: "Oct 4, 2025",
    cover: "/images/home/portfolio/portfolio-2.webp",
    gallery: ["/images/portfolio/detail-2.webp"],
    description: "An outdoor story...",
    client: "Liam",
    location: "Highlands, UK",
  },
  {
    slug: "olivias-beach-portrait",
    title: "Olivia's Beach Portrait",
    category: "Beach",
    date: "Oct 4, 2025",
    cover: "/images/home/portfolio/portfolio-3.webp",
    gallery: ["/images/portfolio/detail-3.webp"],
    description: "A beach session...",
    client: "Olivia",
    location: "Cornwall, UK",
  },
  {
    slug: "sophias-newborn-moments",
    title: "Sophia's Newborn Moments",
    category: "Newborn",
    date: "Oct 4, 2025",
    cover: "/images/home/portfolio/portfolio-4.webp",
    gallery: ["/images/portfolio/detail-4.webp"],
    description: "First moments...",
    client: "Sophia",
    location: "London, UK",
  },
  {
    slug: "oceans-embrace",
    title: "Ocean's Embrace",
    category: "Lifestyle",
    date: "Oct 4, 2025",
    cover: "/images/home/portfolio/portfolio-5.webp",
    gallery: ["/images/portfolio/detail-1.webp"],
    description: "A lifestyle series...",
    client: "Editorial",
    location: "Portugal",
  },
  {
    slug: "spirit-of-the-fields",
    title: "Spirit of the Fields",
    category: "Portraits",
    date: "Oct 4, 2025",
    cover: "/images/home/portfolio/portfolio-6.webp",
    gallery: ["/images/portfolio/detail-2.webp"],
    description: "A portrait series...",
    client: "Editorial",
    location: "Iceland",
  },
];
