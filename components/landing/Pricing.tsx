"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    id: "rapid-prototype",
    name: "Rapid Prototype",
    price: "$150",
    originalPrice: "$300",
    discount: "50% OFF",
    description: "Working prototype in 48 hours or full refund",
    cta: "Get My Prototype Now",
    popular: true,
    features: [
      "30-minute discovery call",
      "AI-powered requirements analysis",
      "Working interactive prototype",
      "Custom subdomain hosting",
      "Future roadmap presentation",
      "1 round of revisions",
    ],
    timeline: "48 hours",
    idealFor: "Validating & Pitching Ideas",
  },
  {
    id: "full-mvp",
    name: "Full MVP Development",
    price: "Starting at",
    priceAmount: "$2,500",
    description: "Launch-ready MVP or money back",
    cta: "Start My MVP",
    popular: false,
    features: [
      "Everything in Rapid Prototype, plus:",
      "Production-ready application",
      "User authentication & database",
      "Payment processing integration",
      "Mobile-responsive design",
      "Analytics & monitoring",
      "30 days of support",
    ],
    timeline: "2-3 Weeks",
    idealFor: "Go-to-Market Success",
  },
  {
    id: "growth-partnership",
    name: "Growth Partnership",
    price: "$1,500",
    period: "/month",
    description: "Cancel anytime, no questions asked",
    cta: "Partner With Us",
    popular: false,
    features: [
      "Dedicated development team",
      "Weekly feature releases",
      "Performance optimization",
      "Bug fixes & maintenance",
      "Strategic consultancy",
      "Priority support",
    ],
    timeline: "Ongoing",
    idealFor: "Scaling with Speed",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
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
            Pricing
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-normal text-black mb-4">
            Choose Your Innovation Speed
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From rapid prototyping to full MVP development and ongoing growth support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: tier.popular ? 1.08 : 1.05,
                y: -8
              }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { duration: 0.6, delay: index * 0.1 },
                y: { 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                },
                scale: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25
                }
              }}
              className={`relative rounded-2xl p-8 border-2 ${
                tier.popular
                  ? "border-primary-cta bg-primary-cta/5 shadow-xl"
                  : "border-gray-200 bg-white hover:border-primary-cta/50"
              } group will-change-transform`}
            >
              <div className="absolute inset-0 rounded-2xl bg-primary-cta/0 group-hover:bg-primary-cta/5 transition-colors duration-300 pointer-events-none shadow-[0_0_0_rgba(36,104,255,0)] group-hover:shadow-[0_20px_25px_-5px_rgba(36,104,255,0.3),0_10px_10px_-5px_rgba(36,104,255,0.2)] transition-shadow duration-300" />
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-primary-cta text-white px-4 py-1 rounded-full text-sm font-medium">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  {tier.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {tier.originalPrice}
                    </span>
                  )}
                  {tier.priceAmount ? (
                    <>
                      <span className="text-sm text-gray-600">{tier.price}</span>
                      <span className="text-4xl font-bold text-primary-cta">
                        {tier.priceAmount}
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-primary-cta">
                      {tier.price}
                    </span>
                  )}
                  {tier.period && (
                    <span className="text-gray-600">{tier.period}</span>
                  )}
                </div>
                {tier.discount && (
                  <span className="inline-block text-sm text-primary-cta font-medium mb-2">
                    ({tier.discount})
                  </span>
                )}
                <p className="text-sm text-gray-600 italic">{tier.description}</p>
              </div>

              <Button
                className={`w-full mb-6 ${
                  tier.popular
                    ? "bg-primary-cta hover:bg-primary-cta-hover text-white"
                    : "bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => window.open("https://calendly.com/wantace-ai/discovery-call", "_blank")}
              >
                {tier.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-semibold text-gray-900">
                  What's Included:
                </h4>
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-cta shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Timeline:</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {tier.timeline}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Ideal for:</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {tier.idealFor}
                  </span>
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-gray-600 mb-4">
            All major credit cards accepted • Tiered pricing for MVP & Growth • Secure, encrypted transactions
          </p>
        </motion.div>
      </div>
    </section>
  );
}

