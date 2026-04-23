export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  cover: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "business-needs",
    title: "Business needs professional photography",
    category: "Business",
    date: "Oct 4, 2025",
    cover: "https://framerusercontent.com/images/WJZYMWepUnJrzwZSgFhBHaHQjp0.png",
    excerpt: "Professional photography is the difference between a brand that looks considered and one that looks improvised.",
    body: [
      "When a customer lands on your site, the first 1.5 seconds are visual. Stock imagery rarely survives that test. Custom photography does.",
      "Beyond aesthetics, professional images are an asset. They live across your website, social channels, decks, and editorial features. One shoot. Years of value."
    ],
  },
  {
    slug: "camera-confidence",
    title: "Camera Confidence Tips",
    category: "Portrait",
    date: "Nov 13, 2025",
    cover: "https://framerusercontent.com/images/S8QV0MqsHHNhjoLd4zHG5bjGEag.png",
    excerpt: "It's not about looking good. It's about feeling unobserved.",
    body: [
      "Confidence on camera is an outcome, not an instruction. The fastest way there is movement and conversation.",
      "Start with motion — walk, turn, shift weight. Static poses tense the body. Movement loosens it."
    ],
  },
  {
    slug: "wedding-timeline",
    title: "Wedding Photo Timeline",
    category: "Weddings",
    date: "Dec 29, 2025",
    cover: "https://framerusercontent.com/images/pMnffj6R5faZJvR6BXv0y9Xs1A4.png",
    excerpt: "A calm timeline is the secret to honest wedding photographs.",
    body: [
      "The single biggest factor in great wedding photos is not the photographer — it is the timeline.",
      "Build in 'nothing' time. Twenty minutes of nothing before the ceremony. Twenty after. That is where the real photos live."
    ],
  },
  {
    slug: "best-angles",
    title: "Master Your Best Angles",
    category: "Portrait",
    date: "Jun 27, 2025",
    cover: "https://framerusercontent.com/images/XoCu8EOk3rCIVV2t3lCC5nzK4.png",
    excerpt: "Three quiet rules that change how you read a face — and a frame.",
    body: [
      "Most people have a 'better side' — but the truth is more interesting. It's not about a side, it's about a relationship between light, jaw, and lens height.",
      "Lower the camera by an inch. Try it. Watch the chin lift, the eyes open, the posture follow."
    ],
  },
  {
    slug: "boost-brand",
    title: "Boost Your Brand with Photos",
    category: "Business",
    date: "May 13, 2025",
    cover: "https://framerusercontent.com/images/wIe9ujx6e6b70FOmUcuGU5XpQc4.png",
    excerpt: "Your face is your brand. Treat it with the same care as your logo.",
    body: [
      "A personal brand built on imagery scales — your image becomes a recognisable asset, the way a logotype is for a company.",
      "Plan three looks per shoot: editorial, working, and lifestyle. That is a year of content."
    ],
  },
  {
    slug: "look-natural",
    title: "Look Natural on Camera",
    category: "Portrait",
    date: "Feb 23, 2025",
    cover: "https://framerusercontent.com/images/R5pQ34lk9anyMHb7h5ZaIYUF4.png",
    excerpt: "Window light is the most underrated studio in the world.",
    body: [
      "Window light gives you direction, fall-off, and colour all in one source. You just have to learn to read it.",
      "The closer the subject to the window, the softer the shadow. The further away, the harder."
    ],
  },
];
