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
  const htmlSnippets = [
    { lines: ["<header>", "  <nav>Home</nav>", "  </header>"] },
    { lines: ["<main>", "  <h2>Features</h2>", "  </main>"] },
    { lines: ["<div>", "  <p>Prototype</p>", "  </div>"] },
    { lines: ["<footer>", "  <span>MVP</span>", "  </footer>"] },
  ];

  return (
    <div className="w-full h-full relative flex items-center justify-center p-3">
      <div className="grid grid-cols-2 gap-2 w-full h-full">
        {htmlSnippets.map((snippet, i) => (
          <motion.div
            key={i}
            className="rounded border border-primary-cta/30 bg-primary-cta/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + i * 0.1 }}
          >
            <div className="p-2 space-y-0.5 h-full flex flex-col justify-center font-mono">
              {snippet.lines.map((line, lineIndex) => (
                <motion.div
                  key={lineIndex}
                  className="text-[8px] sm:text-[9px] text-black leading-tight"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 0.9, x: 0 }}
                  transition={{ delay: index * 0.1 + i * 0.1 + lineIndex * 0.05 }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="absolute top-2 right-2 w-2 h-2 bg-primary-cta rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 + 0.4, duration: 0.3 }}
      />
    </div>
  );
}

function CodeInfographic({ index }: { index: number }) {
  const codeLines = [
    { text: "<div>", color: "text-black" },
    { text: "  <h1>Welcome</h1>", color: "text-black" },
    { text: "  <p>Content</p>", color: "text-black" },
    { text: "</div>", color: "text-black" },
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
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              className={`text-[9px] sm:text-[10px] ${line.color} font-mono leading-tight`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.9, x: 0 }}
              transition={{ delay: index * 0.1 + i * 0.15 }}
            >
              {line.text}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="w-1 h-2 mt-1 bg-primary-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.6, duration: 0.3 }}
        />
      </div>
    </div>
  );
}

function SettingsInfographic({ index }: { index: number }) {
  return (
    <div className="w-full h-full relative flex items-center justify-center bg-primary-cta/10 rounded-lg p-3 sm:p-4">
      <div className="w-full max-w-[160px] sm:max-w-[180px] space-y-2.5 sm:space-y-3">
        {/* Settings Panel */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 shadow-sm border border-primary-cta/20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <div className="space-y-2">
            {/* Toggle Switch */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-[8px] sm:text-[9px] text-gray-700 font-medium whitespace-nowrap">Updates</span>
              <motion.div
                className="w-7 h-3.5 bg-primary-cta rounded-full relative shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
              >
                <motion.div
                  className="w-2.5 h-2.5 bg-white rounded-full absolute top-0.5"
                  initial={{ left: "0.125rem" }}
                  animate={{ left: "calc(100% - 0.625rem)" }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.2 }}
                />
              </motion.div>
            </div>
            {/* Progress Bar */}
            <div className="space-y-1">
              <span className="text-[7px] sm:text-[8px] text-gray-600">Optimization</span>
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary-cta rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.8 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Status Badge */}
        <motion.div
          className="flex items-center gap-1.5 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.6, duration: 0.3 }}
        >
          <div className="w-1.5 h-1.5 bg-primary-cta rounded-full"></div>
          <span className="text-[8px] sm:text-[9px] text-gray-700 font-medium">Active</span>
        </motion.div>
      </div>
    </div>
  );
}

function ChartInfographic({ index }: { index: number }) {
  const bars = [60, 80, 70, 90, 75];
  
  return (
    <div className="w-full h-full relative flex items-end justify-center gap-1.5 sm:gap-2 px-4 py-4">
      <div className="absolute inset-0 bg-primary-cta/10 rounded-lg"></div>
      {bars.map((height, i) => {
        return (
          <motion.div
            key={i}
            className="bg-primary-cta rounded-t w-8 sm:w-10 relative z-10"
            initial={{ height: "0%", opacity: 0 }}
            whileInView={{ height: `${height}%`, opacity: 1 }}
            viewport={{ once: true, margin: "50px", amount: 0.3 }}
            transition={{ 
              duration: 1.5,
              delay: index * 0.1 + i * 0.1,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
}

function AIInfographic({ index }: { index: number }) {
  return (
    <div className="w-full h-full relative flex items-center justify-center bg-primary-cta/10 rounded-lg p-4">
      <motion.svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        className="text-primary-cta"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        {/* Neural Network Nodes */}
        {[
          { x: 20, y: 20, delay: 0.2 },
          { x: 40, y: 15, delay: 0.3 },
          { x: 60, y: 20, delay: 0.4 },
          { x: 25, y: 40, delay: 0.5 },
          { x: 40, y: 40, delay: 0.6 },
          { x: 55, y: 40, delay: 0.7 },
          { x: 20, y: 60, delay: 0.8 },
          { x: 40, y: 65, delay: 0.9 },
          { x: 60, y: 60, delay: 1.0 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="4"
            fill="currentColor"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + node.delay, duration: 0.3 }}
          />
        ))}
        
        {/* Connection Lines */}
        {[
          { x1: 20, y1: 20, x2: 40, y2: 40 },
          { x1: 40, y1: 15, x2: 40, y2: 40 },
          { x1: 60, y1: 20, x2: 40, y2: 40 },
          { x1: 25, y1: 40, x2: 40, y2: 40 },
          { x1: 55, y1: 40, x2: 40, y2: 40 },
          { x1: 20, y1: 60, x2: 40, y2: 40 },
          { x1: 40, y1: 65, x2: 40, y2: 40 },
          { x1: 60, y1: 60, x2: 40, y2: 40 },
        ].map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: index * 0.1 + 1.1 + i * 0.05, duration: 0.4 }}
          />
        ))}
        
        {/* Center Node */}
        <motion.circle
          cx="40"
          cy="40"
          r="6"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 1.5, duration: 0.3, type: "spring" }}
        />
      </motion.svg>
    </div>
  );
}

function TargetInfographic({ index }: { index: number }) {
  return (
    <div className="w-full h-full relative flex items-center justify-center bg-primary-cta/10 rounded-lg">
      <motion.svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        {/* Outer CTA circle */}
        <motion.circle
          cx="40"
          cy="40"
          r="35"
          className="fill-primary-cta opacity-30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.1, duration: 0.3 }}
        />
        {/* White ring */}
        <motion.circle
          cx="40"
          cy="40"
          r="28"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
        />
        {/* CTA ring */}
        <motion.circle
          cx="40"
          cy="40"
          r="21"
          className="fill-primary-cta opacity-30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
        />
        {/* White ring */}
        <motion.circle
          cx="40"
          cy="40"
          r="14"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.4, duration: 0.3 }}
        />
        {/* Red center */}
        <motion.circle
          cx="40"
          cy="40"
          r="7"
          fill="#ef4444"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.3, type: "spring" }}
        />
      </motion.svg>
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

