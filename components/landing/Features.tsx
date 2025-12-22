"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { 
  Rocket, 
  Code, 
  Settings, 
  TrendingUp, 
  Zap, 
  Sparkles,
  type LucideIcon
} from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    id: "rapid-prototyping",
    title: "Rapid Prototyping",
    description: "48-hour prototype delivery. AI-powered discovery process. Interactive, clickable demos. Custom subdomain deployment.",
    icon: Rocket,
  },
  {
    id: "mvp-development",
    title: "MVP Development",
    description: "Production-ready applications. Scalable architecture. User authentication & payments. Mobile-responsive design.",
    icon: Code,
  },
  {
    id: "ongoing-development",
    title: "Ongoing Development",
    description: "Feature additions & updates. Performance optimization. Bug fixes & maintenance. Technical consultancy.",
    icon: Settings,
  },
  {
    id: "growth-support",
    title: "Growth Support",
    description: "Analytics implementation. A/B testing setup. Integration development. Scaling architecture.",
    icon: TrendingUp,
  },
  {
    id: "ai-powered",
    title: "AI-Powered Process",
    description: "First agency to fully integrate AI into the development process. 10x faster than traditional agencies.",
    icon: Sparkles,
  },
  {
    id: "results-focused",
    title: "Results Focused",
    description: "Every prototype designed to validate your concept and provide clear path to full development.",
    icon: Zap,
  },
];

interface IconAnimation {
  animate: {
    scale?: number;
    rotate?: number;
    opacity?: number;
    y?: number;
  };
  transition: {
    duration: number;
    repeat?: number;
    ease?: string | number[];
  };
}

export const Features = () => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getIconAnimation = (featureId: string): IconAnimation => {
    if (shouldReduceMotion) {
      return {
        animate: {},
        transition: { duration: 0, repeat: 0, ease: "easeInOut" },
      };
    }

    switch (featureId) {
      case "rapid-prototyping":
        return {
          animate: {
            scale: 1.15,
            rotate: 10,
          },
          transition: {
            duration: 0.3,
            repeat: 0,
            ease: "easeOut",
          },
        };
      case "mvp-development":
        return {
          animate: {
            scale: 1.1,
            opacity: 0.9,
          },
          transition: {
            duration: 0.3,
            repeat: 0,
            ease: "easeOut",
          },
        };
      case "ongoing-development":
        return {
          animate: {
            scale: 1.12,
            y: -8,
          },
          transition: {
            duration: 0.3,
            repeat: 0,
            ease: "easeOut",
          },
        };
      case "growth-support":
        return {
          animate: {
            scale: 1.15,
            rotate: -8,
          },
          transition: {
            duration: 0.3,
            repeat: 0,
            ease: "easeOut",
          },
        };
      case "ai-powered":
        return {
          animate: {
            scale: 1.2,
            rotate: -12,
          },
          transition: {
            duration: 0.3,
            repeat: 0,
            ease: "easeOut",
          },
        };
      case "results-focused":
        return {
          animate: {
            scale: 1.1,
            rotate: 5,
          },
          transition: {
            duration: 0.3,
            repeat: 0,
            ease: "easeOut",
          },
        };
      default:
        return {
          animate: {},
          transition: { duration: 0, repeat: 0, ease: "easeInOut" },
        };
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-12 md:mb-16">
          <motion.div
            className="inline-block px-4 py-2 bg-primary-cta/10 text-primary-cta rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Our Services
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-normal text-black mb-3">
            Full-Stack Innovation Partners for Growing Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            From rapid prototyping to full MVP development and ongoing growth support
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list" aria-label="Product features">
          {features.map((feature, index) => {
            const iconAnimation = getIconAnimation(feature.id);
            return (
              <motion.article
                key={feature.id}
                className="group"
                role="listitem"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: shouldReduceMotion ? 0 : index * 0.05, 
                  duration: shouldReduceMotion ? 0 : 0.4, 
                  ease: "easeOut" 
                }}
                onHoverStart={() => setHoveredCard(feature.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="h-full p-6 bg-white border border-gray-100 rounded-lg hover:border-gray-200 transition-colors duration-200">
                  <div className="mb-4">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: shouldReduceMotion ? 0 : index * 0.05 }}
                      className="inline-flex"
                    >
                      <motion.div
                        animate={hoveredCard === feature.id && !shouldReduceMotion ? iconAnimation.animate : {
                          scale: 1,
                          rotate: 0,
                          opacity: iconAnimation.animate.opacity ?? 1,
                          y: iconAnimation.animate.y ?? 0
                        }}
                        transition={{
                          ...iconAnimation.transition,
                          type: "spring",
                          stiffness: 400,
                          damping: 25
                        }}
                        style={{ willChange: "transform" }}
                      >
                        <feature.icon 
                          className="w-8 h-8 text-primary-cta" 
                          aria-hidden="true"
                          aria-label={`${feature.title} icon`}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

