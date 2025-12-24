"use client";

import { motion } from "framer-motion";

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
          viewport={{ once: true, margin: "100px", amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-primary-cta/10 text-primary-cta rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "100px", amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Our Process
          </motion.div>
          <motion.h2
            className="text-4xl lg:text-5xl text-black mb-4 font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px", amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            How We Turn Ideas Into Reality
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px", amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The World's First AI-Powered Rapid Prototyping Lab
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {steps.map((step, index) => (
            <motion.div
              key={`step-${index}`}
              className="relative z-10 flex h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px", amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col h-full w-full"
              >
                {/* Infographic Section - 70% (Top) */}
                <div className="relative bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 h-[350px] w-full">
                  {index === 0 && (
                    <div className="w-full h-full relative flex items-center justify-center">
                      {/* AI Discovery Infographic */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* AI Brain/Network */}
                        <motion.div
                          className="flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "50px", amount: 0.3 }}
                          transition={{ duration: 0.6 }}
                        >
                          <svg width="180" height="180" viewBox="0 0 200 200" className="text-primary-cta" style={{ maxWidth: "100%", height: "auto" }}>
                            {/* Neural Network Nodes */}
                            {[...Array(9)].map((_, i) => {
                              const angle = (i * 40) * (Math.PI / 180);
                              const radius = 60;
                              const x = 100 + radius * Math.cos(angle);
                              const y = 100 + radius * Math.sin(angle);
                              return (
                                <motion.circle
                                  key={i}
                                  cx={x}
                                  cy={y}
                                  r="8"
                                  fill="currentColor"
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true, margin: "50px", amount: 0.3 }}
                                  transition={{ delay: i * 0.1, duration: 0.3 }}
                                />
                              );
                            })}
                            {/* Center Node */}
                            <motion.circle
                              cx="100"
                              cy="100"
                              r="12"
                              fill="currentColor"
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, margin: "50px", amount: 0.3 }}
                              transition={{ delay: 0.5, duration: 0.3 }}
                            />
                            {/* Connection Lines */}
                            {[...Array(9)].map((_, i) => {
                              const angle = (i * 40) * (Math.PI / 180);
                              const radius = 60;
                              const x = 100 + radius * Math.cos(angle);
                              const y = 100 + radius * Math.sin(angle);
                              return (
                                <motion.line
                                  key={`line-${i}`}
                                  x1="100"
                                  y1="100"
                                  x2={x}
                                  y2={y}
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  opacity="0.3"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: [0, 1] }}
                                  transition={{ 
                                    duration: 1.5, 
                                    repeat: Infinity, 
                                    repeatDelay: 3,
                                    delay: 0.6 + i * 0.05,
                                    ease: "easeInOut"
                                  }}
                                />
                              );
                            })}
                          </svg>
                        </motion.div>
                        {/* Call Interface */}
                        <motion.div
                          className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "50px", amount: 0.3 }}
                          transition={{ delay: 0.8, duration: 0.5 }}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-gray-600">Call Active</span>
                          </div>
                        </motion.div>
                        {/* Notes Animation */}
                        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2 w-[100px]">
                          <div className="space-y-1">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="h-1 bg-gray-300 rounded"
                                animate={{ width: [`0px`, `${60 + i * 10}px`] }}
                                transition={{ 
                                  duration: 1.5, 
                                  repeat: Infinity, 
                                  repeatDelay: 3,
                                  delay: 1.2 + i * 0.2,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="w-full h-full relative flex items-center justify-center">
                      {/* Development Infographic */}
                      <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
                        {/* Code Editor */}
                        <motion.div
                          className="w-full max-w-xs bg-white rounded-lg p-4 font-mono text-xs"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "50px", amount: 0.3 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="flex gap-1 mb-2">
                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          </div>
                          <div className="space-y-1">
                            {[
                              { width: "60%", color: "bg-purple-400" },
                              { width: "80%", color: "bg-pink-400" },
                              { width: "45%", color: "bg-blue-400" },
                              { width: "70%", color: "bg-purple-300" },
                            ].map((line, i) => (
                              <motion.div
                                key={i}
                                className={`h-2 ${line.color} rounded`}
                                animate={{ width: ["0%", line.width] }}
                                transition={{ 
                                  duration: 1.5, 
                                  repeat: Infinity, 
                                  repeatDelay: 2,
                                  delay: 0.5 + i * 0.2,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </div>
                        </motion.div>
                        {/* Progress Bars */}
                        <motion.div
                          className="w-full max-w-xs space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "50px", amount: 0.3 }}
                          transition={{ delay: 1, duration: 0.5 }}
                        >
                          {["Design", "Development", "Testing"].map((label, i) => (
                            <div key={label} className="bg-white rounded p-2 shadow-sm">
                              <div className="text-xs text-gray-600 mb-1">{label}</div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-primary-cta rounded-full"
                                  animate={{ width: [`0%`, `${30 + i * 30}%`] }}
                                  transition={{ 
                                    duration: 1.5, 
                                    repeat: Infinity, 
                                    repeatDelay: 3,
                                    delay: 1.2 + i * 0.2,
                                    ease: "easeInOut"
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="w-full h-full relative flex items-center justify-center">
                      {/* Deployment Infographic */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Deployment Process */}
                        <motion.div
                          className="flex items-center justify-center relative"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, margin: "50px", amount: 0.3 }}
                          transition={{ duration: 0.6 }}
                        >
                          <svg width="180" height="180" viewBox="0 0 200 200" className="text-primary-cta" style={{ maxWidth: "100%", height: "auto" }}>
                            {/* Server/Cloud */}
                            <motion.rect
                              x="50"
                              y="80"
                              width="100"
                              height="60"
                              rx="8"
                              fill="currentColor"
                              opacity="0.2"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 0.2 }}
                              viewport={{ once: true, margin: "50px", amount: 0.3 }}
                              transition={{ delay: 0.3, duration: 0.4 }}
                            />
                            <motion.rect
                              x="60"
                              y="90"
                              width="20"
                              height="15"
                              rx="2"
                              fill="currentColor"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true, margin: "50px", amount: 0.3 }}
                              transition={{ delay: 0.5, duration: 0.3 }}
                            />
                            <motion.rect
                              x="90"
                              y="90"
                              width="20"
                              height="15"
                              rx="2"
                              fill="currentColor"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true, margin: "50px", amount: 0.3 }}
                              transition={{ delay: 0.7, duration: 0.3 }}
                            />
                            <motion.rect
                              x="120"
                              y="90"
                              width="20"
                              height="15"
                              rx="2"
                              fill="currentColor"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true, margin: "50px", amount: 0.3 }}
                              transition={{ delay: 0.9, duration: 0.3 }}
                            />
                            {/* Upload Arrow */}
                            <motion.path
                              d="M100 40 L100 70 M90 60 L100 70 L110 60"
                              stroke="currentColor"
                              strokeWidth="3"
                              fill="none"
                              strokeLinecap="round"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: [0, 1], opacity: [0, 1] }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: Infinity, 
                                repeatDelay: 2,
                                delay: 1.1,
                                ease: "easeInOut"
                              }}
                            />
                            {/* Checkmark */}
                            <motion.circle
                              cx="100"
                              cy="160"
                              r="15"
                              fill="currentColor"
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              viewport={{ once: true, margin: "50px", amount: 0.3 }}
                              transition={{ delay: 1.5, duration: 0.3, type: "spring" }}
                            />
                            <motion.path
                              d="M95 160 L98 163 L105 156"
                              stroke="white"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: [0, 1] }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: Infinity, 
                                repeatDelay: 2,
                                delay: 1.7,
                                ease: "easeInOut"
                              }}
                            />
                          </svg>
                        </motion.div>
                        {/* Success Badge */}
                        <motion.div
                          className="absolute top-2 right-2 bg-green-500 text-white rounded-full px-3 py-1 text-xs font-semibold"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "50px", amount: 0.3 }}
                          transition={{ delay: 1.8, duration: 0.3, type: "spring" }}
                        >
                          Live
                        </motion.div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text Section - 30% (Bottom) */}
                <div className="p-6 flex flex-col justify-center w-full min-h-[150px]">
                  <div className="text-4xl lg:text-5xl text-primary-cta/20 font-bold mb-2">
                    {index + 1}
                  </div>
                  <h3 className="text-xl lg:text-2xl text-gray-900 mb-1 font-normal leading-tight">
                    {step.title}
                  </h3>
                  {step.subtitle && (
                    <p className="text-sm text-primary-cta font-medium mb-2">
                      {step.subtitle}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description.split('. ')[0]}.
                  </p>
                </div>
              </motion.div>
              </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px", amount: 0.3 }}
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

