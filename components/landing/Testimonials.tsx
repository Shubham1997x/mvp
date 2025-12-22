"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Neil Kapoor",
    handle: "@neilkapoor",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    content:
      "Wantace transformed my idea into a usable MVP quickly, saving me weeks of effort.",
    hashtag: "#mvp",
    rating: 5,
    company: "Product Lead, Nexly",
  },
  {
    name: "Vik Ranbir",
    handle: "@vikranbir",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content:
      "Their team built a solid MVP fast, allowing me to test features confidently and early.",
    hashtag: "#fast-delivery",
    rating: 5,
    company: "Growth Manager, Zentro",
  },
  {
    name: "Jennifer Park",
    handle: "@jenniferp",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content:
      "My MVP was built in days by Wantace, giving my startup momentum from day one.",
    hashtag: "#startup",
    rating: 5,
    company: "Founder, HealthTrack",
  },
  {
    name: "Aroon Mehta",
    handle: "@aroonm",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content:
      "Their fast MVP delivery helped me validate features quickly and uncover real user needs.",
    hashtag: "#validation",
    rating: 5,
    company: "CEO, Brivo",
  },
];

export const Testimonials = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [imageLoading, setImageLoading] = useState<Record<number, boolean>>(
    testimonials.reduce((acc, _, index) => ({ ...acc, [index]: true }), {})
  );

  useEffect(() => {
    testimonials.forEach((testimonial, index) => {
      const img = new Image();
      img.src = testimonial.avatar;
      img.onload = () => {
        setImageLoading((prev) => ({ ...prev, [index]: false }));
      };
      img.onerror = () => {
        setImageErrors((prev) => ({ ...prev, [index]: true }));
        setImageLoading((prev) => ({ ...prev, [index]: false }));
      };
      if (img.complete) {
        setImageLoading((prev) => ({ ...prev, [index]: false }));
      }
    });
  }, []);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
    setImageLoading((prev) => ({ ...prev, [index]: false }));
  };

  const handleImageLoad = (index: number) => {
    setImageLoading((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <section
      id="reviews"
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-cta/10 text-primary-cta rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-normal text-black mb-4">
            Why brands work with us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Hear from founders and teams who turned their ideas into reality with us. Real stories, Real results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
                y: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
                default: { type: "spring", stiffness: 400, damping: 25 }
              }}
            >
              <Card className="p-6 h-full bg-white border-gray-200 hover:shadow-2xl relative overflow-hidden group will-change-transform">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-primary-cta" />
                </div>

                <div className="absolute inset-0 bg-linear-to-br from-primary-cta/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative w-12 h-12 shrink-0">
                      {imageLoading[index] && (
                        <Skeleton className="absolute inset-0 w-12 h-12 rounded-full" />
                      )}
                      {imageErrors[index] ? (
                        <div className="w-12 h-12 rounded-full bg-primary-cta/20 flex items-center justify-center ring-2 ring-primary-cta/30">
                          <span className="text-primary-cta font-semibold text-sm">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      ) : (
                        <div className="relative">
                          <img
                            src={testimonial.avatar}
                            alt={`${testimonial.name}'s profile picture`}
                            className={`w-12 h-12 rounded-full object-cover transition-opacity duration-300 ring-2 ring-primary-cta/20 group-hover:ring-primary-cta/40 ${
                              imageLoading[index] ? "opacity-0" : "opacity-100"
                            }`}
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                            onError={() => handleImageError(index)}
                            onLoad={() => handleImageLoad(index)}
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">
                          {testimonial.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-900 text-sm leading-relaxed font-normal">
                    {testimonial.content}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

