"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-cta/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-primary-cta/20 bg-white/80"
            >
              <div className="w-2 h-2 bg-primary-cta rounded-full animate-pulse" />
              <span className="text-sm text-gray-700 font-medium">
                Avaiable for January 2026
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl lg:text-6xl text-gray-900 leading-tight font-normal"
              >
                Turn Your Idea Into a{" "}
                <span className="bg-clip-text text-primary-cta">
                  Working Prototype
                </span>
                <br />
                in 48 Hours
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed max-w-xl"
              >
                Skip months of uncertainty with AI-Powered rapid prototyping. Get a working prototype delivered in 48 hours or full refund.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                type="button"
                onClick={() => window.open("https://calendly.com/wantace-ai/discovery-call", "_blank")}
                aria-label="Get my prototype for $150"
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group relative w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-primary-cta hover:bg-primary-cta-hover text-white rounded-xl text-base font-light hover:shadow-sm hover:shadow-primary-cta/50 transition-colors duration-300 overflow-hidden cursor-pointer flex will-change-transform"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get My Prototype for $150
                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </span>
                <span
                  className="absolute inset-0 bg-primary-cta/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  aria-hidden="true"
                ></span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="pt-8 border-t border-gray-200"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format",
                      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format",
                    ].map((imageUrl, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                      >
                        <img
                          src={imageUrl}
                          alt={`User ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">500+</span>
                </div>
                <p className="text-base sm:text-lg text-gray-600 text-center sm:text-left">
                  Entrepreneurs and startups trust us to bring their ideas to life
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <div className="w-full aspect-video max-w-2xl mx-auto rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&auto=format"
                alt="Hero image showing technology and innovation"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [0, 8, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        onClick={() => {
          const nextSection = document.querySelector("#showcase");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
}

