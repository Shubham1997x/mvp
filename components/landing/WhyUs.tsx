"use client";

import { motion } from "framer-motion";

const comparison = {
  traditional: {
    title: "Traditional Development",
    keyPoints: [
      "$10k-50k upfront",
      "3-6 months wait",
      "Uncertain outcome",
    ],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
  },
  diy: {
    title: "DIY Approach",
    keyPoints: [
      "Months of learning",
      "Complex challenges",
      "Unprofessional result",
    ],
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f61?w=600&h=400&fit=crop",
  },
  ourSolution: {
    title: "Our Solution",
    keyPoints: [
      "48 hours delivery",
      "Professional quality",
      "Investment ready",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
};

export function WhyUs() {
  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
    

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-primary-cta/10 text-primary-cta rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Why Choose Us
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-normal text-black mb-4">
            Stop Wasting Time and Money
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            See why entrepreneurs choose us over traditional development or DIY approaches
          </p>
        </motion.div>

        {/* Radically different layout - Split design with center focus */}
        <div className="space-y-6">
          {/* Traditional & DIY - Side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(comparison)
              .filter(([key]) => key !== "ourSolution")
              .map(([key, data], index) => {
                const isTraditional = key === "traditional";
                
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: isTraditional ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                      {/* Content */}
                      <div className="relative p-6 h-full flex flex-col">
                        {/* Badge */}
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-cta/10 text-primary-cta border border-primary-cta/20">
                            {isTraditional ? "EXPENSIVE" : "COMPLEX"}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          {data.title}
                        </h3>

                        {/* Key Points */}
                        <ul className="space-y-2 flex-1">
                          {data.keyPoints.map((point, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + idx * 0.1 }}
                              className="flex items-center gap-3 text-gray-700"
                            >
                              <div className="shrink-0 w-2 h-2 rounded-full bg-primary-cta" />
                              <span className="text-sm">{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>

          {/* Our Solution - Center featured card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100">
              {/* Content */}
              <div className="relative p-8 md:p-10">
                <div className="max-w-4xl mx-auto">
                  {/* Badge */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="inline-block px-4 py-2 bg-primary-cta/10 text-primary-cta rounded-full text-xs font-semibold border border-primary-cta/20">
                      RECOMMENDED
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    {comparison.ourSolution.title}
                  </h3>

                  {/* Key Points - Grid layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {comparison.ourSolution.keyPoints.map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="bg-gradient-to-br from-primary-cta via-primary-cta/95 to-primary-cta/90 rounded-xl p-5 border border-primary-cta/30"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div
                            className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center"
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <motion.path
                                d="M20 6L9 17l-5-5"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
                              />
                            </svg>
                          </motion.div>
                        </div>
                        <p className="text-white text-sm leading-relaxed font-medium">{point}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom CTA */}
                  <motion.div
                    className="flex items-center gap-3 pt-4 border-t border-gray-200"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-primary-cta"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-gray-600 text-sm font-medium">Fastest Path to Market</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            type="button"
            onClick={() => window.open("https://calendly.com/wantace-ai/discovery-call", "_blank")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary-cta hover:bg-primary-cta-hover text-white rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
            aria-label="Get your prototype"
          >
            Get My Prototype for $150
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
