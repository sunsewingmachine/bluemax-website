/** Copy and structured content for the Bluemax home page. */

export const HOME_BRAND = {
  name: "Bluemax",
  tagline: "Sewing Machines",
  fullTitle: "Bluemax Sewing Machines",
} as const;

export const HOME_HERO = {
  headline: "Premium sewing machines for professionals",
  subheadline:
    "Experience the precision and durability of Bluemax — engineered for workshops, studios, and makers who demand reliability every stitch of the way.",
} as const;

export const HOME_FEATURES = [
  {
    id: "featureHighSpeedStitching",
    title: "High-speed stitching",
    description: "Adjustable settings for consistent results at any pace.",
  },
  {
    id: "featureAutomaticThreadCutter",
    title: "Automatic thread cutter",
    description: "Clean finishes without reaching for scissors.",
  },
  {
    id: "featureDurableMetalBody",
    title: "Durable metal body",
    description: "Built to withstand years of daily professional use.",
  },
  {
    id: "featureBuiltInLed",
    title: "Built-in LED lighting",
    description: "See every detail clearly, even on dark fabrics.",
  },
  {
    id: "featureEasyInterface",
    title: "Intuitive controls",
    description: "Comfortable for beginners, efficient for experts.",
  },
] as const;

export const HOME_CONTACT = {
  heading: "Get in touch",
  description:
    "Questions about models, pricing, or support? Send us a message and we will respond as soon as we can.",
} as const;
