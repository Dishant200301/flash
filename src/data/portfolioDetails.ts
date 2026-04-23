export interface PortfolioDetail {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  thumbnailImage: string;
  client: string;
  type: string;
  year: string;
  duration: string;
  sections: {
    category: string; // INTRO, CHALLENGES, OUTCOME
    title: string;
    text: string;
    images: string[];
  }[];
}

export const portfolioDetails: PortfolioDetail[] = [
  {
    slug: "emmas-wedding-day",
    title: "Emma’s Wedding Day",
    description: "Emma’s wedding day overflowed with heartfelt moments, timeless beauty, and joyful celebrations—captured with natural light, candid storytelling, and graceful portraits.",
    heroImage: "/images/home/portfolio/portfolio-1.webp",
    thumbnailImage: "/images/home/portfolio/portfolio-1.webp",
    client: "Emma & Daniel",
    type: "Wedding Photography",
    year: "2025",
    duration: "2 Days",
    sections: [
      {
        category: "INTRO",
        title: "Understanding the Vision",
        text: "Emma and Daniel desired a wedding album that reflected the true essence of their day—filled with joy, connection, and timeless beauty. They envisioned natural, heartfelt photographs that celebrated not only the milestones but also the intimate details that made their wedding unique. Our approach combined documentary-style storytelling with refined artistry, ensuring every emotion & moment was captured with sincerity and grace.",
        images: ["/images/home/portfolio/portfolio-1.webp"]
      },
      {
        category: "CHALLENGES",
        title: "Capturing Emotion & Atmosphere",
        text: "Weddings unfold in countless fleeting moments joyful tears, bursts of laughter, and tender exchanges between family and friends. Our challenge was to capture these spontaneous emotions while balancing candid storytelling with thoughtfully composed portraits. By working with natural light and gentle tones, we highlighted the warmth of the celebration while staying unobtrusive. Every frame was carefully considered backgrounds, colors, and composition aligned to ensure each image conveyed both emotion and elegance.",
        images: ["/images/home/portfolio/portfolio-2.webp", "/images/home/portfolio/portfolio-3.webp"]
      },
      {
        category: "OUTCOME",
        title: "Bringing the Day to Life",
        text: "The final collection highlighted the emotional journey of Emma and Daniel’s wedding. From morning preparations filled with laughter, to the exchange of vows, to the vibrant energy of the reception, every image was carefully curated to tell a seamless story. We used thoughtful editing to enhance natural tones, ensuring the photos felt true to the day itself. The result was a timeless gallery—a visual legacy of connection, joy, and celebration that Emma and Daniel can relive for a lifetime.",
        images: ["/images/home/portfolio/portfolio-1.webp"]
      }
    ]
  },
  {
    slug: "mountain-adventure",
    title: "Mountain Adventure",
    description: "A high-altitude journey capturing the raw beauty of the peaks and the spirit of exploration through epic landscapes and candid moments.",
    heroImage: "/images/home/portfolio/portfolio-2.webp",
    thumbnailImage: "/images/home/portfolio/portfolio-2.webp",
    client: "Adventure Co.",
    type: "Landscape Photography",
    year: "2024",
    duration: "5 Days",
    sections: [
      {
        category: "INTRO",
        title: "The Peak Quest",
        text: "We embarked on a journey to the heart of the Alps, seeking to document the relationship between man and the monolithic giants. The vision was to show scale—how small we are compared to nature, yet how resilient.",
        images: ["/images/home/portfolio/portfolio-2.webp"]
      },
      {
        category: "CHALLENGES",
        title: "Grit & Gear",
        text: "Extreme cold and variable lighting made every shot a battle. Transitioning from golden hour to blue hour at 4000m required quick thinking and robust equipment. We focused on the texture of snow and the sharpness of granite.",
        images: ["/images/home/portfolio/portfolio-3.webp", "/images/home/portfolio/portfolio-4.webp"]
      },
      {
        category: "OUTCOME",
        title: "The Summit View",
        text: "The final series became a testament to the power of the mountains. A cohesive set of images that tell a story of endurance, silent summits, and the pure joy of reaching the top.",
        images: ["/images/home/portfolio/portfolio-2.webp"]
      }
    ]
  },
  {
    slug: "urban-street-life",
    title: "Urban Street Life",
    description: "Capturing the pulsing energy of the city streets, where light and shadow play across architecture and the people who live within it.",
    heroImage: "/images/home/portfolio/portfolio-3.webp",
    thumbnailImage: "/images/home/portfolio/portfolio-3.webp",
    client: "Metro Magazine",
    type: "Street Photography",
    year: "2024",
    duration: "1 Week",
    sections: [
      {
        category: "INTRO",
        title: "City Pulse",
        text: "London is a city of layers. Our goal was to peel them back and find the quiet moments in the middle of the noise. High contrast, sharp angles, and candid encounters were the order of the day.",
        images: ["/images/home/portfolio/portfolio-3.webp"]
      },
      {
        category: "CHALLENGES",
        title: "Shadow Play",
        text: "Midday sun in the city creates harsh shadows that can either hide detail or create drama. We leaned into the drama, using the architecture as a frame for the human stories unfolding on the pavement.",
        images: ["/images/home/portfolio/portfolio-1.webp", "/images/home/portfolio/portfolio-2.webp"]
      },
      {
        category: "OUTCOME",
        title: "Concrete Jungle",
        text: "A gritty, honest look at metropolitan life. The project successfully captured the duality of modern cities—the isolation and the connection, all told through the lens of light.",
        images: ["/images/home/portfolio/portfolio-3.webp"]
      }
    ]
  },
  {
    slug: "fashion-editorial",
    title: "Fashion Editorial",
    description: "A high-concept fashion project exploring the intersection of modern couture and industrial aesthetics, shot in a repurposed warehouse.",
    heroImage: "/images/home/portfolio/portfolio-4.webp",
    thumbnailImage: "/images/home/portfolio/portfolio-4.webp",
    client: "Vogue Creative",
    type: "Fashion Photography",
    year: "2025",
    duration: "3 Days",
    sections: [
      {
        category: "INTRO",
        title: "Silk & Steel",
        text: "The concept was contrast. Soft fabrics against rusted metal. We wanted to challenge traditional beauty standards by placing luxury items in a raw, unfinished environment.",
        images: ["/images/home/portfolio/portfolio-4.webp"]
      },
      {
        category: "CHALLENGES",
        title: "Industrial Lighting",
        text: "Working with large-scale industrial spaces meant managing vast amounts of natural light from skylights while adding artificial highlights to ensure the textures of the clothing were perfectly rendered.",
        images: ["/images/home/portfolio/portfolio-5.webp", "/images/home/portfolio/portfolio-6.webp"]
      },
      {
        category: "OUTCOME",
        title: "The Final Look",
        text: "A striking editorial spread that balanced edge and elegance. The resulting images were used for a major digital campaign, highlighting the versatility of the brand's new collection.",
        images: ["/images/home/portfolio/portfolio-4.webp"]
      }
    ]
  },
  {
    slug: "wildlife-in-motion",
    title: "Wildlife in Motion",
    description: "A deep dive into the natural world, capturing animals in their natural habitats with a focus on movement, speed, and behavior.",
    heroImage: "/images/home/portfolio/portfolio-5.webp",
    thumbnailImage: "/images/home/portfolio/portfolio-5.webp",
    client: "Nature Trust",
    type: "Wildlife Photography",
    year: "2024",
    duration: "1 Month",
    sections: [
      {
        category: "INTRO",
        title: "The Wild Watch",
        text: "Patience is everything in wildlife photography. We spent weeks in the bush, waiting for the perfect split-second moments that define animal behavior. No staged shots, only raw nature.",
        images: ["/images/home/portfolio/portfolio-5.webp"]
      },
      {
        category: "CHALLENGES",
        title: "Unseen Perspectives",
        text: "Getting close enough without disturbing the environment was the primary challenge. Long lenses and careful positioning were key. We focused on the eyes and the tension in the muscles.",
        images: ["/images/home/portfolio/portfolio-1.webp", "/images/home/portfolio/portfolio-3.webp"]
      },
      {
        category: "OUTCOME",
        title: "Nature's Legacy",
        text: "A comprehensive gallery that celebrates the biodiversity of the region. The project helped raise awareness for local conservation efforts through its visceral, close-up imagery.",
        images: ["/images/home/portfolio/portfolio-5.webp"]
      }
    ]
  },
  {
    slug: "corporate-branding",
    title: "Corporate Branding",
    description: "Elevating brand identity through professional portraits and architectural photography that communicates trust, innovation, and success.",
    heroImage: "/images/home/portfolio/portfolio-6.webp",
    thumbnailImage: "/images/home/portfolio/portfolio-6.webp",
    client: "TechCorp Global",
    type: "Commercial Photography",
    year: "2025",
    duration: "4 Days",
    sections: [
      {
        category: "INTRO",
        title: "Brand Vision",
        text: "TechCorp needed a visual overhaul. We focused on humanizing their technology by shooting their team in action and capturing their state-of-the-art facility in a light that felt warm and accessible.",
        images: ["/images/home/portfolio/portfolio-6.webp"]
      },
      {
        category: "CHALLENGES",
        title: "Professional Polish",
        text: "Corporate shoots often feel sterile. Our challenge was to avoid the 'stock photo' look by using creative angles and shallow depth of field to make the office environment feel dynamic and alive.",
        images: ["/images/home/portfolio/portfolio-4.webp", "/images/home/portfolio/portfolio-2.webp"]
      },
      {
        category: "OUTCOME",
        title: "Building Trust",
        text: "A suite of professional assets that transformed the client's online presence. The images led to a 40% increase in recruitment inquiries and a much stronger brand perception in the market.",
        images: ["/images/home/portfolio/portfolio-6.webp"]
      }
    ]
  }
];
