"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Step {
  id: string;
  title: string;
  number: number;
}

const steps: Step[] = [
  {
    id: "discovery",
    title: "30-minute discovery call",
    number: 1,
  },
  {
    id: "development",
    title: "AI-powered development",
    number: 2,
  },
  {
    id: "delivery",
    title: "Live prototype in 48 hours",
    number: 3,
  },
];

export const FinalCTA = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] md:w-[1000px] md:h-[1000px] rounded-full blur-[120px] sm:blur-[150px] md:blur-[180px] opacity-40 sm:opacity-50 bg-primary-cta/30" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] rounded-full blur-[100px] sm:blur-[120px] md:blur-[140px] opacity-30 sm:opacity-40 bg-primary-cta/20" />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl text-white font-normal mb-4 sm:mb-6"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.1,
            }}
          >
            Join 500+ Entrepreneurs and Startups
          </motion.h2>
          <motion.p
            className="text-lg text-white leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
          >
            who brought their MVPs to life with us. Let's build your MVP faster together.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.3,
            }}
            role="list"
            aria-label="Integration steps"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex items-center gap-2 sm:gap-4 w-full md:w-auto justify-start md:justify-start"
                role="listitem"
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : 0.4 + index * 0.1,
                }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary-cta flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold text-sm sm:text-base">
                      {step.number}
                    </span>
                  </div>
                  <span className="text-white font-normal text-xs sm:text-sm">
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:flex items-center"
                    aria-hidden="true"
                  >
                    <ArrowRight className="text-white text-[20px] sm:text-[24px]" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.7,
            }}
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex will-change-transform"
            >
              <Button
                type="button"
                onClick={() => window.open("https://calendly.com/wantace-ai/discovery-call", "_blank")}
                className="bg-primary-cta text-white text-base font-light px-8 sm:px-10 hover:bg-primary-cta-hover w-full sm:w-auto py-4 sm:py-6 group relative overflow-hidden shadow-lg"
                aria-label="Get your prototype"
              >
                <span className="relative z-10">Get My Prototype for $150</span>
              </Button>
            </motion.div>
            <div
              className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-300"
              role="list"
              aria-label="Key benefits"
            >
              <span
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/10"
                role="listitem"
              >
                <span
                  className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                  aria-hidden="true"
                />
                Working prototype in 48 hours
              </span>
              <span
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/10"
                role="listitem"
              >
                <span
                  className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"
                  aria-hidden="true"
                />
                Full refund guarantee
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

