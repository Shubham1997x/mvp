export const siteConfig = {
  // Site Branding
  siteName: "MVP",
  logoText: "MVP",
  tagline: "Turn Your Idea Into a Working Prototype in 48 Hours",

  // Primary Color (HSL format for Tailwind)
  primaryColor: {
    hsl: "220 100% 57%", // #2468FF
    hex: "#2468FF",
  },

  // Navigation Links
  navigationLinks: [

    { label: "Process", href: "#how-it-works" },
    { label: "Showcase", href: "#showcase" },
    { label: "Features", href: "#features" },
    { label: "Why Us", href: "#why-us" },
    { label: "Stats", href: "#stats" },
    { label: "Reviews", href: "#reviews" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],

  // Contact CTA
  contactCTA: {
    label: "Contact",
    href: "#contact",
  },

  // Social Links
  socialLinks: {
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    github: "https://github.com",
  },

  // Footer
  footer: {
    description: "AI-powered rapid prototyping lab. Turn your idea into a working prototype in 48 hours. Skip months of uncertainty with our proven process.",
    copyright: "© Copyright 2025, All Rights Reserved",
  },

  // Meta
  meta: {
    title: "MVP - Turn Your Idea Into a Working Prototype in 48 Hours",
    description: "Skip months of uncertainty with AI-Powered rapid prototyping. Get a working prototype delivered in 48 hours or full refund. Trusted by 500+ entrepreneurs.",
    url: "https://yourwebsite.com",
  },
} as const;

