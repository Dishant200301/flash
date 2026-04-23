export interface BlogDetail {
  slug: string;
  title: string;
  description: string;
  date: string;
  comments: string;
  views: string;
  heroImage: string;
  galleryImages: string[];
  content: {
    sectionTitle: string;
    text: string;
    sectionImage?: string;
    list?: string[];
  }[];
}

export const blogDetails: BlogDetail[] = [
  {
    slug: "business-needs",
    title: "Business needs professional photography",
    description: "Professional photography elevates business presence, builds trust, shapes perceptions, and enhances marketing, solidifying a brand’s identity and resonates with its diverse audience platforms. ",
    date: "Oct 4, 2025",
    comments: "12 Comments",
    views: "1.4k Views",
    heroImage: "https://framerusercontent.com/images/WJZYMWepUnJrzwZSgFhBHaHQjp0.png",
    galleryImages: [
      "https://framerusercontent.com/images/WJZYMWepUnJrzwZSgFhBHaHQjp0.png",
      "https://framerusercontent.com/images/S8QV0MqsHHNhjoLd4zHG5bjGEag.png"
    ],
    content: [
      {
        sectionTitle: "Why businesses can't rely on DIY photos",
        text: "But visual impressions are paramount. High-quality imagery helps companies, clients and everything in between experience your brand with clarity. Professional photographers capture the essence of a company through well-composed images that reflect its true excellence, leaving a lasting impression. From high-quality headshots of your team to shots of your business and products, professional photography will help you to capture the attention of potential clients."
      },
      {
        sectionTitle: "Build credibility and trust",
        text: "Professional photography showcases your business in the best light. High-lighting services, products, and team will build credibility. They communicate professionalism and discipline that DIY photos can't easily. Creating a sense of trust in a brand and helping your brand resonate with the client to build and preserve trustworthiness across platforms can only result in business success."
      },
      {
        sectionTitle: "Boost marketing and sales",
        text: "High-quality visual content translates to social media and digital channels. They get attention, improve engagement, and enhance marketing materials, which eventually results in increased visibility and sales performance compared to other brands."
      },
      {
        sectionTitle: "Build credibility and trust",
        text: "Professional photography showcases your business in the best light. They tell a story—highlight your choices, products, and services in a pleasant dynamic that connects with potential customers. Professional photography is an investment that creates unique visual stories that transform branding, helping you to stand out from competition, build and reinforce trust in client-facing environments. It gives sense of quality and professionalism that potential clients expect before they click on your photography.",
        sectionImage: "https://framerusercontent.com/images/pMnffj6R5faZJvR6BXv0y9Xs1A4.png"
      },
      {
        sectionTitle: "Professional photography pays off",
        text: "Professional photography pays off because customers are looking for quality and professionalism. That kind of professional investment can expand beyond a single photoshoot. It can feed your website, brochures, social media, and more for years to give visitors and also consistently keep delivering impressions."
      },
      {
        sectionTitle: "Simple ways to maximize your photoshoot",
        text: "Here’s how you can make sure you’re getting the most out of professional brand photography. A few quick steps will elevate the quality of your images for any use:",
        list: [
          "Plan out key shots in advance",
          "Ensure your brand identity is reflecting",
          "Involve your team in shots to show authenticity",
          "Communicate clearly on your expectations"
        ],
        sectionImage: "https://framerusercontent.com/images/XoCu8EOk3rCIVV2t3lCC5nzK4.png"
      },
      {
        sectionTitle: "Enjoy the benefits",
        text: "With professional photography, you’re not only selling imagery—you’re selling a story, a perception, and eventually, a brand's success. This is an investment that pays manifold for your business, so if you want your business to be unique and professional, then professional photography is a positive investment."
      }
    ]
  },
  {
    slug: "camera-confidence",
    title: "Camera Confidence Tips",
    description: "Discover how cinematic light and framing can transform ordinary moments into powerful narratives.",
    date: "Nov 13, 2025",
    comments: "8 Comments",
    views: "1.1k Views",
    heroImage: "https://framerusercontent.com/images/S8QV0MqsHHNhjoLd4zHG5bjGEag.png",
    galleryImages: [
      "https://framerusercontent.com/images/S8QV0MqsHHNhjoLd4zHG5bjGEag.png",
      "https://framerusercontent.com/images/pMnffj6R5faZJvR6BXv0y9Xs1A4.png"
    ],
    content: [
      {
        sectionTitle: "Understanding Light",
        text: "Light is the most important element in photography. It defines shape, texture, and mood."
      }
    ]
  },
  {
    slug: "wedding-timeline",
    title: "Wedding Photo Timeline",
    description: "Discover how cinematic light and framing can transform ordinary moments into powerful narratives.",
    date: "Dec 29, 2025",
    comments: "15 Comments",
    views: "2.1k Views",
    heroImage: "https://framerusercontent.com/images/pMnffj6R5faZJvR6BXv0y9Xs1A4.png",
    galleryImages: [
       "https://framerusercontent.com/images/pMnffj6R5faZJvR6BXv0y9Xs1A4.png",
       "https://framerusercontent.com/images/XoCu8EOk3rCIVV2t3lCC5nzK4.png"
    ],
    content: [
      {
        sectionTitle: "Understanding Light",
        text: "Light is the most important element in photography. It defines shape, texture, and mood."
      }
    ]
  },
  {
    slug: "best-angles",
    title: "Master Your Best Angles",
    description: "Discover how cinematic light and framing can transform ordinary moments into powerful narratives.",
    date: "Jun 27, 2025",
    comments: "5 Comments",
    views: "900 Views",
    heroImage: "https://framerusercontent.com/images/XoCu8EOk3rCIVV2t3lCC5nzK4.png",
    galleryImages: [
       "https://framerusercontent.com/images/XoCu8EOk3rCIVV2t3lCC5nzK4.png",
       "https://framerusercontent.com/images/wIe9ujx6e6b70FOmUcuGU5XpQc4.png"
    ],
    content: [
      {
        sectionTitle: "Understanding Light",
        text: "Light is the most important element in photography. It defines shape, texture, and mood."
      }
    ]
  },
  {
    slug: "boost-brand",
    title: "Boost Your Brand with Photos",
    description: "Discover how cinematic light and framing can transform ordinary moments into powerful narratives.",
    date: "May 13, 2025",
    comments: "22 Comments",
    views: "3.4k Views",
    heroImage: "https://framerusercontent.com/images/wIe9ujx6e6b70FOmUcuGU5XpQc4.png",
    galleryImages: [
       "https://framerusercontent.com/images/wIe9ujx6e6b70FOmUcuGU5XpQc4.png",
       "https://framerusercontent.com/images/R5pQ34lk9anyMHb7h5ZaIYUF4.png"
    ],
    content: [
      {
        sectionTitle: "Understanding Light",
        text: "Light is the most important element in photography. It defines shape, texture, and mood."
      }
    ]
  },
  {
    slug: "look-natural",
    title: "Look Natural on Camera",
    description: "Discover how cinematic light and framing can transform ordinary moments into powerful narratives.",
    date: "Feb 23, 2025",
    comments: "10 Comments",
    views: "1.8k Views",
    heroImage: "https://framerusercontent.com/images/R5pQ34lk9anyMHb7h5ZaIYUF4.png",
    galleryImages: [
       "https://framerusercontent.com/images/R5pQ34lk9anyMHb7h5ZaIYUF4.png",
       "https://framerusercontent.com/images/WJZYMWepUnJrzwZSgFhBHaHQjp0.png"
    ],
    content: [
      {
        sectionTitle: "Understanding Light",
        text: "Light is the most important element in photography. It defines shape, texture, and mood."
      }
    ]
  }
];
