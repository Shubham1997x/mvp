"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "AI-Powered Discovery",
      subtitle: "Day 1 - Morning",
      description: "30-minute structured call with our product strategist. AI notetaker captures every detail and nuance. Strategic questionnaire reveals hidden requirements. Automatic conversion to technical specifications.",
    },
    {
      title: "Rapid Development",
      subtitle: "Day 1 - Afternoon to Day 2",
      description: "Expert team builds using advanced development tools. Real-time collaboration between designers and developers. Continuous testing and quality assurance. Client updates every 12 hours.",
    },
    {
      title: "Deployment & Handover",
      subtitle: "Day 2 - Evening",
      description: "Prototype deployed to custom subdomain. Complete with realistic data and interactions. Future roadmap and growth presentation. Next steps consultation.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
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
            Our Process
          </motion.div>
          <motion.h2
            className="text-4xl lg:text-5xl text-black mb-4 font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            How We Turn Ideas Into Reality
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The World's First AI-Powered Rapid Prototyping Lab
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          {steps.flatMap((step, index) => [
            <motion.div
              key={`step-${index}`}
              className="relative z-10 flex"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 w-full h-full flex flex-col min-h-[400px] will-change-transform"
              >
                <div className="flex-1">
                  <div className="text-5xl lg:text-6xl text-primary-cta/20 font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl lg:text-3xl text-gray-900 mb-2 font-normal leading-tight">
                    {step.title}
                  </h3>
                  {step.subtitle && (
                    <p className="text-sm text-primary-cta font-medium mb-4">
                      {step.subtitle}
                    </p>
                  )}
                  <ul className="text-base text-gray-700 leading-relaxed space-y-2">
                    {step.description.split('. ').filter(item => item.trim()).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary-cta mt-1">•</span>
                        <span>{item.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>,
            index < steps.length - 1 && (
              <motion.div
                key={`arrow-${index}`}
                className="hidden md:flex w-10 h-10 items-center justify-center z-20 bg-white rounded-full shadow-md border border-gray-200 shrink-0 self-center"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
              >
                <ArrowRight className="w-5 h-5 text-primary-cta" />
              </motion.div>
            )
          ]).filter(Boolean)}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
            <motion.button
              type="button"
              onClick={() => window.open("https://calendly.com/wantace-ai/discovery-call", "_blank")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-primary-cta hover:bg-primary-cta-hover text-white rounded-xl text-base font-light shadow-lg cursor-pointer"
              aria-label="Schedule your discovery call"
            >
              <span className="relative z-10">Schedule My Call</span>
            </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

