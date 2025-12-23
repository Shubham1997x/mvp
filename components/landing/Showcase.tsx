"use client";

import { motion } from "framer-motion";

export function Showcase() {
  return (
    <section id="showcase" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-cta/10 text-primary-cta rounded-full mb-3 sm:mb-4 text-sm sm:text-base"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Product Tour
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 sm:mb-6 font-normal px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Perfect for Any Industry - Here's What We've Built
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-gray-600 leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From finance apps to health trackers, see examples of prototypes we've delivered in 48 hours.
          </motion.p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {[
            {
              step: "01",
              title: "Cinema.bz - Movie Streaming App",
              description: "A comprehensive movie discovery and streaming platform. Browse thousands of movies, watch trailers, read reviews, and manage your watchlist. Built with modern technologies for seamless user experience.",
              features: [
                "Movie discovery & search",
                "Watchlist management",
                "Trailer playback",
                "User reviews & ratings",
              ],
            },
            {
              step: "02",
              title: "PrimeBid - Solar Panel Installation",
              description: "A comprehensive platform for solar panel installation services. Quote management, project tracking, customer onboarding, and installation scheduling. Streamline your solar installation business with custom-built solutions.",
              features: [
                "Quote & estimate management",
                "Project tracking & scheduling",
                "Customer onboarding system",
                "Installation workflow tools",
              ],
            },
            {
              step: "03",
              title: "Health & Wellness",
              description: "Fitness trackers, meal planners, symptom logs, meditation timers, wellness dashboards, habit tracking. Build health-focused apps that improve user well-being.",
              features: [
                "Fitness & activity tracking",
                "Meal planning & nutrition",
                "Habit tracking & reminders",
                "Wellness dashboards",
              ],
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 bg-primary-cta/10 text-primary-cta px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base">
                  <span>{feature.step}</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-900 font-normal">
                  {feature.title}
                </h3>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-2.5 sm:space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-cta/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-cta rounded-full" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={
                      index === 0
                        ? "/images/cinema.png"
                        : index === 1
                          ? "/images/primebid.png"
                          : "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format"
                    }
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

