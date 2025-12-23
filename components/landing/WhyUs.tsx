"use client";

import { motion } from "framer-motion";
import { X, Check, Clock, DollarSign, Users, FileText, Code, Rocket, Award, TrendingUp } from "lucide-react";

const comparison = {
  traditional: {
    title: "Traditional Development",
    icon: Clock,
    items: [
      { text: "Costs $10k-50k upfront", icon: DollarSign },
      { text: "Takes 3-6 months to see anything", icon: Clock },
      { text: "No idea if users will actually want it", icon: Users },
      { text: "Endless meetings and documentation", icon: FileText },
    ],
  },
  diy: {
    title: "DIY Approach",
    icon: Code,
    items: [
      { text: "Overwhelmed by the complexity", icon: Code },
      { text: "Months of learning before building", icon: Clock },
      { text: "Bugs and issues you can't solve", icon: X },
      { text: "Looks unprofessional", icon: Award },
    ],
  },
  ourSolution: {
    title: "Our Solution",
    icon: Rocket,
    items: [
      { text: "Working prototype in 48 hours", icon: Rocket },
      { text: "Professional-grade result", icon: Award },
      { text: "Investment-ready concept", icon: TrendingUp },
      { text: "Clear path to full development", icon: Check },
    ],
  },
};

export function WhyUs() {
  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-primary-cta/10 border border-primary-cta/20 text-primary-cta rounded-full mb-4 text-sm font-semibold"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {Object.entries(comparison).map(([key, data], index) => {
            const isOurSolution = key === "ourSolution";
            const isTraditional = key === "traditional";
            const isDiy = key === "diy";
            const TitleIcon = data.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.01
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className={`relative rounded-3xl h-full flex flex-col overflow-hidden will-change-transform ${
                  isOurSolution
                    ? "bg-gradient-to-br from-primary-cta via-primary-cta/95 to-primary-cta/90 text-white shadow-2xl border-2 border-primary-cta/50"
                    : isTraditional
                    ? "bg-white border border-gray-200/60 hover:border-gray-300 hover:shadow-xl"
                    : "bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 hover:border-gray-300 hover:shadow-xl"
                }`}
              >
                {/* Background Pattern for Our Solution */}
                {isOurSolution && (
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_50%)]" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
                  </div>
                )}

                {/* Combined Section */}
                <div className={`relative z-10 p-8 pb-8 flex-1 ${
                  isOurSolution ? "bg-gradient-to-r from-white/10 to-transparent" : ""
                }`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${
                      isOurSolution 
                        ? "bg-white/20 backdrop-blur-sm shadow-lg" 
                        : isTraditional
                        ? "bg-gradient-to-br from-red-50 to-red-100/50"
                        : "bg-gradient-to-br from-orange-50 to-orange-100/50"
                    }`}>
                      <TitleIcon className={`w-8 h-8 ${
                        isOurSolution 
                          ? "text-white" 
                          : isTraditional
                          ? "text-red-600"
                          : "text-orange-600"
                      }`} />
                    </div>
                    
                    {isOurSolution && (
                      <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                        <span className="text-xs font-semibold text-white">RECOMMENDED</span>
                      </div>
                    )}
                    
                    {(isTraditional || isDiy) && (
                      <div className={`px-3 py-1.5 rounded-full ${
                        isTraditional
                          ? "bg-red-50 border border-red-200"
                          : "bg-orange-50 border border-orange-200"
                      }`}>
                        <span className={`text-xs font-semibold ${
                          isTraditional ? "text-red-600" : "text-orange-600"
                        }`}>
                          {isTraditional ? "EXPENSIVE" : "COMPLEX"}
                        </span>
                      </div>
                    )}
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-8 ${
                      isOurSolution 
                        ? "text-white" 
                        : isTraditional
                        ? "text-gray-900"
                        : "text-gray-900"
                    }`}
                  >
                    {data.title}
                  </h3>

                  <ul className="space-y-5">
                    {data.items.map((item, idx) => {
                      const ItemIcon = item.icon;
                      const isPositive = item.icon === Check || item.icon === Rocket || item.icon === Award || item.icon === TrendingUp;
                      return (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: 0.2 + idx * 0.1,
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                          }}
                          className="flex items-start gap-4 group"
                        >
                          <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isOurSolution
                              ? "bg-white/20 backdrop-blur-sm text-white group-hover:bg-white/30 group-hover:scale-110"
                              : isPositive
                              ? "bg-primary-cta/10 text-primary-cta group-hover:bg-primary-cta/20 group-hover:scale-110"
                              : isTraditional
                              ? "bg-red-50 text-red-600 group-hover:bg-red-100 group-hover:scale-110"
                              : "bg-orange-50 text-orange-600 group-hover:bg-orange-100 group-hover:scale-110"
                          }`}>
                            {isPositive ? (
                              <Check className="w-5 h-5" />
                            ) : (
                              <X className="w-5 h-5" />
                            )}
                          </div>
                          <span
                            className={`text-base leading-relaxed pt-2 ${
                              isOurSolution 
                                ? "text-white/95 font-medium" 
                                : isTraditional
                                ? "text-gray-700"
                                : "text-gray-700"
                            }`}
                          >
                            {item.text}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>

                {/* Bottom Accent for Our Solution */}
                {isOurSolution && (
                  <div className="relative z-10 px-8 pb-8 bg-gradient-to-r from-white/10 to-transparent">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6" />
                    <div className="flex items-center gap-2 text-white/90">
                      <Rocket className="w-5 h-5" />
                      <span className="text-sm font-semibold">Fastest Path to Market</span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
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
            <Rocket className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

