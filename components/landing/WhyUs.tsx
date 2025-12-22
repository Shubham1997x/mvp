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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {Object.entries(comparison).map(([key, data], index) => {
            const isOurSolution = key === "ourSolution";
            const TitleIcon = data.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                transition={{
                  opacity: { duration: 0.6, delay: index * 0.1, ease: "easeOut" },
                  y: { duration: 0.6, delay: index * 0.1, ease: "easeOut" },
                  default: { type: "spring", stiffness: 400, damping: 25 }
                }}
                className={`relative rounded-2xl p-8 border-2 h-full flex flex-col will-change-transform ${
                  isOurSolution
                    ? "border-primary-cta bg-gradient-to-br from-primary-cta/10 to-primary-cta/5 shadow-xl md:scale-105 md:-mt-4"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg transition-shadow duration-300"
                }`}
              >
                {/* Icon Badge */}
                <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl ${
                  isOurSolution 
                    ? "bg-primary-cta/20" 
                    : "bg-gray-100"
                }`}>
                  <TitleIcon className={`w-7 h-7 ${
                    isOurSolution ? "text-primary-cta" : "text-gray-600"
                  }`} />
                </div>

                <h3
                  className={`text-2xl font-semibold mb-6 ${
                    isOurSolution ? "text-primary-cta" : "text-gray-900"
                  }`}
                >
                  {data.title}
                </h3>
                
                <ul className="space-y-4 flex-1">
                  {data.items.map((item, idx) => {
                    const ItemIcon = item.icon;
                    const isPositive = item.icon === Check || item.icon === Rocket || item.icon === Award || item.icon === TrendingUp;
                    return (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                          isPositive
                            ? "bg-primary-cta/10 text-primary-cta group-hover:bg-primary-cta/20"
                            : "bg-red-50 text-red-500 group-hover:bg-red-100"
                        }`}>
                          {isPositive ? (
                            <Check className="w-5 h-5" />
                          ) : (
                            <X className="w-5 h-5" />
                          )}
                        </div>
                        <span
                          className={`text-base leading-relaxed pt-1 ${
                            isOurSolution ? "text-gray-900 font-medium" : "text-gray-700"
                          }`}
                        >
                          {item.text}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Decorative Element */}
                {isOurSolution && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-primary-cta rounded-full animate-pulse" />
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

