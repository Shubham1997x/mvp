"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const products = [
  {
    id: 1,
    title: "Cinema.bz",
    subtitle: "Movie Streaming Platform",
    image: "/images/cinema.png",
    category: "Entertainment",
  },
  {
    id: 2,
    title: "PrimeBid",
    subtitle: "Solar Installation Management",
    image: "/images/primebid.png",
    category: "Energy",
  },
  {
    id: 3,
    title: "Solar Energy",
    subtitle: "Management Platform",
    image: "/images/solar.png",
    category: "Sustainability",
  },
];

export function Showcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-cycle tabs
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % products.length);
    }, 4000); // Change tab every 3 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    // Reset interval when user manually clicks
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % products.length);
    }, 4000);
  };

  return (
    <section id="showcase" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background SVG - Left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/images/bg.svg")',
          backgroundSize: 'contain',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.05,
          height: '100%',
          width: '100%',
        }}
      />
      {/* Background SVG - Right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/images/bg.svg")',
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.05,
          transform: 'scaleX(-1)',
          height: '100%',
          width: '100%',
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative backdrop-blur-sm rounded-lg z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-primary-cta/10 text-primary-cta rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Product Tour
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-normal text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Perfect for Any Industry
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            See examples of prototypes we've delivered in 48 hours across various industries
          </motion.p>
        </motion.div>

        {/* Main Container */}
        <div 
          className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Tab Navigation */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-6 sm:p-8 border-b border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => handleTabClick(index)}
                className={`relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 cursor-pointer ${activeTab === index
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gray-900 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{product.title}</span>
              </button>
            ))}
          </motion.div>

          {/* Product Display */}
          <div className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[650px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="relative h-full flex flex-col"
              >
                {/* Product Image */}
                <div className="p-6 sm:p-8 md:p-10 flex-1 flex items-center justify-center min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
                  <motion.img
                    src={products[activeTab].image}
                    alt={products[activeTab].title}
                    className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] object-contain max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.4, 0, 0.2, 1],
                      delay: 0.05
                    }}
                  />
                </div>

                {/* Product Info */}
                <div className="px-6 sm:px-8 py-4 sm:py-5 bg-white border-t border-gray-100">
                  <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-block px-2.5 py-0.5 bg-primary-cta/10 text-primary-cta rounded-full text-xs font-medium mb-2">
                      {products[activeTab].category}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900 mb-1">
                      {products[activeTab].title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {products[activeTab].subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
