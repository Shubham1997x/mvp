"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FolderKanban, DollarSign, Calendar, Clock } from "lucide-react";

const stats = [
  {
    value: 500,
    suffix: "+",
    title: "Projects Delivered",
    description: "Successfully completed prototypes and MVPs",
    icon: FolderKanban,
    vsIndustry: "Trusted by entrepreneurs worldwide",
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    value: 10,
    suffix: "M+",
    title: "Client Revenue Generated",
    description: "From products we've built",
    icon: DollarSign,
    vsIndustry: "Proven track record of success",
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    value: 7,
    suffix: " years+",
    title: "Development Expertise",
    description: "Years of experience in startup development",
    icon: Calendar,
    vsIndustry: "Industry-leading expertise",
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    value: 48,
    suffix: " Hours",
    title: "Average Prototype Time",
    description: "From idea to working prototype",
    icon: Clock,
    vsIndustry: "10x faster than traditional agencies",
    color: "from-blue-500/10 to-blue-600/5",
  },
];

const useCountUp = (
  end: number,
  duration: number = 2000,
  startFrom: number
) => {
  const [count, setCount] = useState(startFrom);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = startFrom;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = startValue + (end - startValue) * easeOutQuart;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, startFrom, duration]);

  return { count, ref };
};

export const Stats = () => {
  return (
    <section
      id="stats"
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-black mb-3">
            Trusted by 500+ Entrepreneurs
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:gap-12 text-center md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const startValue = Math.max(0, stat.value - 10);
            const { count, ref } = useCountUp(stat.value, 2000, startValue);
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{
                  opacity: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
                  y: { 
                    duration: 0.5, 
                    delay: index * 0.1, 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  },
                  default: { type: "spring", stiffness: 400, damping: 25 }
                }}
                className="group relative p-6 sm:p-8 rounded-xl bg-white shadow-md hover:shadow-lg border border-gray-200/50 hover:border-primary-cta/30 will-change-transform"
              >
                <div className="relative z-10">
                  <div className="flex justify-center mb-5">
                    <div className="p-3 rounded-xl bg-primary-cta/10 group-hover:bg-primary-cta/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-cta" />
                    </div>
                  </div>

                  <h3 className="font-normal text-3xl sm:text-4xl lg:text-5xl mb-2 text-primary-cta whitespace-nowrap">
                    {stat.suffix === "x"
                      ? `${count.toFixed(1)}${stat.suffix}`
                      : stat.suffix === "+"
                      ? `${Math.round(count)}${stat.suffix}`
                      : stat.suffix === "M+"
                      ? `$${Math.round(count)}${stat.suffix}`
                      : stat.suffix.includes("Hours") || stat.suffix.includes("years")
                      ? `${Math.round(count)}${stat.suffix}`
                      : `${Math.round(count)}${stat.suffix}`}
                  </h3>

                  <p className="text-base sm:text-lg font-normal text-gray-900 mb-2">
                    {stat.title}
                  </p>

                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

