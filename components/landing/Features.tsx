"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Feature {
  id: string;
  title: string;
  description: string;
  gradient: string;
  infographic: "prototype" | "code" | "settings" | "chart" | "ai" | "target";
}

const features: Feature[] = [
  {
    id: "rapid-prototyping",
    title: "Rapid Prototyping",
    description: "48-hour delivery. Interactive demos. Custom deployment.",
    gradient: "from-blue-500 to-cyan-500",
    infographic: "prototype",
  },
  {
    id: "mvp-development",
    title: "MVP Development",
    description: "Production-ready. Scalable. Mobile-responsive.",
    gradient: "from-purple-500 to-pink-500",
    infographic: "code",
  },
  {
    id: "ongoing-development",
    title: "Ongoing Development",
    description: "Feature updates. Optimization. Maintenance.",
    gradient: "from-orange-500 to-red-500",
    infographic: "settings",
  },
  {
    id: "growth-support",
    title: "Growth Support",
    description: "Analytics. A/B testing. Scaling.",
    gradient: "from-green-500 to-emerald-500",
    infographic: "chart",
  },
  {
    id: "ai-powered",
    title: "AI-Powered Process",
    description: "10x faster. Fully integrated AI workflow.",
    gradient: "from-indigo-500 to-purple-500",
    infographic: "ai",
  },
  {
    id: "results-focused",
    title: "Results Focused",
    description: "Validate concepts. Clear development path.",
    gradient: "from-yellow-500 to-orange-500",
    infographic: "target",
  },
];

function PrototypeInfographic({ index }: { index: number }) {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-3">
      <div className="grid grid-cols-2 gap-2 w-full h-full">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="rounded border border-primary-cta/30 bg-primary-cta/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + i * 0.1 }}
          >
            <div className="p-2 space-y-1 h-full flex flex-col justify-center">
              <div className="h-1 bg-primary-cta rounded w-3/4"></div>
              <div className="h-0.5 bg-primary-cta/80 rounded w-full"></div>
              <div className="h-0.5 bg-primary-cta/60 rounded w-2/3"></div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="absolute top-2 right-2 w-2 h-2 bg-primary-cta rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </div>
  );
}

function CodeInfographic({ index }: { index: number }) {
  const lines = [
    { width: "70%", color: "bg-primary-cta" },
    { width: "85%", color: "bg-primary-cta/90" },
    { width: "60%", color: "bg-primary-cta/80" },
    { width: "75%", color: "bg-primary-cta/70" },
  ];
  return (
    <div className="w-full h-full relative font-mono text-xs">
      <div className="w-full h-full p-3 overflow-hidden flex flex-col bg-primary-cta/10 rounded-lg">
        <div className="flex gap-1 mb-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
        <div className="space-y-1 flex-1 flex flex-col justify-center">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              className={`h-1.5 ${line.color} rounded`}
              style={{ width: line.width }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: line.width, opacity: 1 }}
              transition={{ delay: index * 0.1 + i * 0.15 }}
            />
          ))}
        </div>
        <motion.div
          className="w-1 h-2 mt-1 bg-primary-cta"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </div>
  );
}

function SettingsInfographic({ index }: { index: number }) {
  return (
    <div className="w-full h-full relative flex items-center justify-center bg-primary-cta/10 rounded-lg">
      <div className="w-20 h-20 bg-primary-cta/10 rounded-full flex items-center justify-center">
        <motion.svg
          width="44"
          height="44"
          viewBox="0 0 48 48"
          className="text-primary-cta"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: index * 0.1 }}
        >
        <motion.circle
          cx="24"
          cy="24"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="113"
          strokeDashoffset="113"
          animate={{ strokeDashoffset: [113, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatDelay: 3,
            delay: index * 0.1 + 0.3,
            ease: "easeInOut"
          }}
        />
        <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.9" />
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            cx={24 + 18 * Math.cos((i * Math.PI) / 2)}
            cy={24 + 18 * Math.sin((i * Math.PI) / 2)}
            r="2"
            fill="currentColor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: index * 0.1 + 0.5 + i * 0.1 }}
          />
        ))}
      </motion.svg>
      </div>
    </div>
  );
}

function ChartInfographic({ index }: { index: number }) {
  const bars = [60, 80, 70, 90, 75];
  const animateDuration = 1.5;
  const holdTime = 3;
  const fadeOutDuration = 0.15;
  const maxStaggerDelay = (bars.length - 1) * 0.1;
  const totalCycle = animateDuration + maxStaggerDelay + holdTime + fadeOutDuration;
  
  return (
    <div className="w-full h-full relative flex items-end justify-center gap-2 px-4 py-4">
      <div className="absolute inset-0 bg-primary-cta/10 rounded-lg"></div>
      {bars.map((height, i) => {
        const initialDelay = index * 0.1 + i * 0.1;
        const animateEndTime = (animateDuration + initialDelay) / totalCycle;
        const fadeOutStartTime = (animateDuration + maxStaggerDelay + holdTime) / totalCycle;
        const fadeOutEndTime = (animateDuration + maxStaggerDelay + holdTime + fadeOutDuration) / totalCycle;
        
        return (
          <motion.div
            key={i}
            className="bg-primary-cta rounded-t flex-1 relative z-10"
            animate={{ 
              height: [`0%`, `${height}%`, `${height}%`, `0%`], 
              opacity: [0, 1, 1, 0] 
            }}
            transition={{ 
              duration: totalCycle,
              times: [0, animateEndTime, fadeOutStartTime, fadeOutEndTime, 1],
              repeat: Infinity,
              repeatDelay: 0,
              delay: initialDelay,
              ease: ["easeInOut", "linear", "linear", "easeInOut", "linear"]
            }}
          />
        );
      })}
    </div>
  );
}

function AIInfographic({ index }: { index: number }) {
  return (
    <div className="w-full h-full relative flex items-center justify-center bg-primary-cta/10 rounded-lg">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {[...Array(3)].map((_, i) => {
          const size = 36 + i * 18;
          const offset = size / 2;
          return (
            <motion.div
              key={i}
              className="absolute border-2 border-primary-cta/40 rounded-full"
              style={{ 
                width: `${size}px`, 
                height: `${size}px`, 
                left: `50%`,
                top: `50%`,
                transform: `translate(-50%, -50%)`
              }}
              animate={{ opacity: [0.6, 0.8, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          );
        })}
        <motion.div
          className="w-7 h-7 bg-primary-cta rounded-lg flex items-center justify-center relative z-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-xs font-bold text-white">AI</span>
        </motion.div>
      </div>
    </div>
  );
}

function TargetInfographic({ index }: { index: number }) {
  return (
    <div className="w-full h-full relative flex items-center justify-center bg-primary-cta/10 rounded-lg">
      <div className="w-20 h-20 bg-primary-cta/10 rounded-full flex items-center justify-center">
        <motion.svg
          width="44"
          height="44"
          viewBox="0 0 48 48"
          className="text-primary-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
        {[0, 1, 2].map((ring) => (
          <motion.circle
            key={ring}
            cx="24"
            cy="24"
            r={20 - ring * 6}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity={0.6 - ring * 0.2}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatDelay: 3,
              delay: index * 0.1 + ring * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
        <motion.circle
          cx="24"
          cy="24"
          r="4"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}
        />
      </motion.svg>
      </div>
    </div>
  );
}

function FeatureInfographic({ type, index }: { type: Feature["infographic"]; index: number }) {
  switch (type) {
    case "prototype":
      return <PrototypeInfographic index={index} />;
    case "code":
      return <CodeInfographic index={index} />;
    case "settings":
      return <SettingsInfographic index={index} />;
    case "chart":
      return <ChartInfographic index={index} />;
    case "ai":
      return <AIInfographic index={index} />;
    case "target":
      return <TargetInfographic index={index} />;
  }
}

export const Features = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-12 md:mb-16">
          <motion.div
            className="inline-block px-4 py-2 bg-primary-cta/10 text-primary-cta rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Our Services
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-normal text-black mb-4">
            Full-Stack Innovation Partners for Growing Businesses
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From rapid prototyping to full MVP development and ongoing growth support
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list" aria-label="Product features">
          {features.map((feature, index) => (
              <motion.article
                key={feature.id}
                className="group"
                role="listitem"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: shouldReduceMotion ? 0 : index * 0.05, 
                  duration: shouldReduceMotion ? 0 : 0.4, 
                  ease: "easeOut" 
                }}
              >
              <div className="h-full bg-white border border-gray-100 rounded-lg overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="relative h-40 flex items-center justify-center">
                  <FeatureInfographic type={feature.infographic} index={index} />
                  </div>
                  
                <div className="p-6 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

