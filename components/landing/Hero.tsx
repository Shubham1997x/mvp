"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const companies = Array.from({ length: 4 }, (_, i) => ({
  logo: `/images/l${i + 1}.svg`,
}));

const PHASES = [
  {
    step: "Phase 01",
    title: "Design & Architecture",
    description: "Wireframes, tech stack, and database design",
    gradient: "from-blue-500 to-cyan-500",
    duration: "0-8 hours",
    imagePosition: "left" as const,
    type: "wireframe" as const,
  },
  {
    step: "Phase 02",
    title: "Development Sprint",
    description: "Coding, APIs, and core features",
    gradient: "from-blue-500 to-cyan-500",
    duration: "8-40 hours",
    imagePosition: "right" as const,
    type: "code" as const,
  },
  {
    step: "Phase 03",
    title: "Testing & Launch",
    description: "Testing, deployment, and handoff",
    gradient: "from-blue-500 to-cyan-500",
    duration: "40-48 hours",
    imagePosition: "left" as const,
    type: "rocket" as const,
  },
];

const CODE_LINES = [
  { text: "<div>", color: "text-white" },
  { text: "<h1>Welcome to MVP</h1>", color: "text-white" },
  {
    text: "<p>Fast, reliable, and scalable</p>",
    color: "text-white",
  },
  { text: "</div>", color: "text-white" },
];

const CODE_LINES_RIGHT = CODE_LINES;
const TESTS = ["Test 1", "Test 2", "Test 3"];

function generateStarPositions(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 2 + Math.random(),
    delay: Math.random() * 2,
  }));
}

function TestingIndicators({ index }: { index: number }) {
  return (
    <motion.div
      className="absolute left-2 top-4 z-10"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex flex-col gap-2">
        {TESTS.map((test, i) => (
          <motion.div
            key={test}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.3 }}
          >
            <motion.div
              className="w-4 h-4 rounded-full border-2 border-green-400 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 1 + i * 0.3, repeat: 1 }}
            >
              <motion.svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + i * 0.3 }}
              >
                <motion.path
                  d="M1 4 L3 6 L7 2"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.div>
            <span className="text-[8px] text-green-400 font-semibold">
              {test}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function RocketAnimation({
  index,
  stars,
}: {
  index: number;
  stars: Array<{ left: number; top: number; duration: number; delay: number }>;
}) {
  const testStatuses = [
    { name: "Unit Tests", status: "passed", progress: 100 },
    { name: "Integration", status: "passed", progress: 100 },
  ];

  return (
    <div className="w-full h-full relative flex items-center justify-center bg-linear-to-br from-blue-500 to-cyan-500 p-4">
      <div className="w-full max-w-[200px] space-y-3">
        {testStatuses.map((test, i) => (
          <motion.div
            key={test.name}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.3 + i * 0.15 }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-medium text-white/90">
                {test.name}
              </span>
              <motion.div
                className="w-4 h-4 rounded-full bg-white/90 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.15 + 0.5 + i * 0.15,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <motion.svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: index * 0.15 + 0.6 + i * 0.15,
                    duration: 0.3,
                  }}
                >
                  <motion.path
                    d="M2 5 L4.5 7.5 L8 3"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.div>
            </div>
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white/80 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${test.progress}%` }}
                transition={{
                  delay: index * 0.15 + 0.4 + i * 0.15,
                  duration: 0.5,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WireframeAnimation({ index }: { index: number }) {
  const wireframeItems = [
    { label: "Header", lines: ["Nav", "Logo"] },
    { label: "Sidebar", lines: ["Menu", "Links"] },
    { label: "Content", lines: ["Main", "Area"] },
    { label: "Card", lines: ["Title", "Text"] },
    { label: "Form", lines: ["Input", "Button"] },
    { label: "Footer", lines: ["Links", "Info"] },
  ];

  return (
    <div className="w-full h-full relative">
      <div className="grid grid-cols-3 gap-2 h-full p-2">
        {wireframeItems.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/20 backdrop-blur-sm rounded border border-white/40"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 + 0.5 + i * 0.1 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255,255,255,0.3)",
            }}
          >
            <div className="p-1.5 space-y-0.5 h-full flex flex-col justify-center">
              <div className="text-[7px] sm:text-[8px] text-white/90 font-semibold mb-0.5">
                {item.label}
              </div>
              {item.lines.map((line, lineIndex) => (
                <div
                  key={lineIndex}
                  className="text-[6px] sm:text-[7px] text-white/60"
                >
                  {line}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CodeEditorAnimation({
  index,
  isRight = false,
}: {
  index: number;
  isRight?: boolean;
}) {
  const lines = isRight ? CODE_LINES_RIGHT : CODE_LINES;
  return (
    <div
      className={`w-full h-full relative font-mono ${isRight ? "text-xs" : "text-xs"
        }`}
    >
      <div
        className={`bg-white/10 backdrop-blur-sm rounded-lg h-full ${isRight ? "p-3" : "p-2"
          } overflow-hidden`}
      >
        <div className={`flex ${isRight ? "gap-1.5 mb-3" : "gap-1 mb-2"}`}>
          <div
            className={`${isRight ? "w-2.5 h-2.5" : "w-2 h-2"
              } rounded-full bg-white`}
          ></div>
          <div
            className={`${isRight ? "w-2.5 h-2.5" : "w-2 h-2"
              } rounded-full bg-white`}
          ></div>
          <div
            className={`${isRight ? "w-2.5 h-2.5" : "w-2 h-2"
              } rounded-full bg-white`}
          ></div>
        </div>
        <div className={isRight ? "space-y-1.5" : "space-y-1"}>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              className={`${isRight ? "text-[10px]" : "text-[9px]"} ${line.color
                } font-mono leading-tight`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.9, x: 0 }}
              transition={{ delay: index * 0.15 + 0.5 + i * 0.1 }}
            >
              {line.text}
            </motion.div>
          ))}
        </div>
        <motion.div
          className={`${isRight ? "w-1.5 h-3 mt-1" : "w-1 h-2 mt-0.5"
            } bg-white`}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </div>
  );
}

function PhaseContent({
  item,
  index,
  isLeft,
}: {
  item: (typeof PHASES)[0];
  index: number;
  isLeft: boolean;
}) {
  return (
    <div
      className={`flex flex-col justify-center px-4 py-3 ${isLeft ? "rounded-r-lg" : "rounded-l-lg"
        } relative z-10`}
    >
      <motion.div
        className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15 + 0.4 }}
      >
        {item.step}
      </motion.div>
      <motion.h3
        className="text-base font-bold text-gray-900 mb-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15 + 0.5 }}
      >
        {item.title}
      </motion.h3>
      <motion.p
        className="text-xs text-gray-600 leading-snug mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15 + 0.6 }}
      >
        {item.description}
      </motion.p>
      <motion.div
        className={`inline-flex items-center gap-1 text-[10px] font-semibold bg-linear-to-r ${item.gradient} bg-clip-text text-transparent`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.15 + 0.7 }}
      >
        ⏱ {item.duration}
      </motion.div>
    </div>
  );
}

function InfographicSection({
  item,
  index,
  stars,
}: {
  item: (typeof PHASES)[0];
  index: number;
  stars: Array<{ left: number; top: number; duration: number; delay: number }>;
}) {
  const isLeft = item.imagePosition === "left";
  const bgClass =
    item.type === "rocket"
      ? "bg-linear-to-br from-blue-500 to-cyan-500"
      : `bg-linear-to-br ${item.gradient}`;
  const roundedClass = isLeft ? "rounded-l-lg" : "rounded-r-lg";

  return (
    <motion.div
      className={`relative h-32 ${roundedClass} overflow-hidden flex items-center justify-center ${bgClass}`}
    >
      {item.type === "wireframe" && <WireframeAnimation index={index} />}
      {item.type === "code" && (
        <CodeEditorAnimation index={index} isRight={!isLeft} />
      )}
      {item.type === "rocket" && (
        <RocketAnimation index={index} stars={stars} />
      )}
    </motion.div>
  );
}

export function Hero() {
  const [starPositions, setStarPositions] = useState<
    Array<{ left: number; top: number; duration: number; delay: number }>
  >([]);

  useEffect(() => {
    setStarPositions(generateStarPositions(15));
  }, []);

  return (
    <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden bg-white pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-28 md:pb-16 lg:py-0">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/images/bg.svg")',
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          opacity: 0.05,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/images/bg.svg")',
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          opacity: 0.05,
          transform: "scaleX(-1)",
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-6 relative z-10 backdrop-blur-sm rounded-lg w-full lg:h-full lg:flex lg:items-center">
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center mb-6 sm:mb-8 md:mb-12 lg:mb-0">
            <div className="text-left relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-normal text-gray-900 mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px]"
              >
                Turn Your Idea Into a{" "}
                <span className="text-primary-cta">Working</span>
                <br />
                <span className="text-primary-cta">Prototype</span> in 48 Hours
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 lg:mb-12 leading-relaxed"
              >
                Skip months of uncertainty with AI-Powered rapid prototyping.
                Get a working prototype delivered in 48 hours or full refund.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/wantace-ai/discovery-call",
                      "_blank"
                    )
                  }
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-primary-cta hover:bg-primary-cta-hover text-white rounded-xl text-sm sm:text-base font-semibold hover:shadow-xl transition-all duration-300 cursor-pointer inline-flex items-center gap-2 will-change-transform"
                  aria-label="Book a Discovery Call"
                >
                  Book a Discovery Call
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>

            <div className="space-y-2 sm:space-y-3 md:space-y-4 mt-4 sm:mt-0">
              {PHASES.map((item, index) => {
                const isLeft = item.imagePosition === "left";
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -3,
                      transition: { duration: 0.2 },
                    }}
                    className={`group relative grid grid-cols-1 gap-0 items-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden bg-white border border-gray-100 max-w-lg md:grid-cols-[1fr_1fr] ${index === 1 ? "md:translate-x-[10%]" : ""
                      }`}
                  >
                    <motion.div
                      className="absolute top-0 left-0 h-1"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
                    />
                    <div className={`order-1 ${isLeft ? "md:order-1" : "md:order-2"}`}>
                      <InfographicSection
                        item={item}
                        index={index}
                        stars={starPositions}
                      />
                    </div>
                    <div className={`order-2 ${isLeft ? "md:order-2" : "md:order-1"}`}>
                      <PhaseContent item={item} index={index} isLeft={isLeft} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="border border-gray-200 rounded-lg overflow-hidden mt-4 sm:mt-6 md:mt-8"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-[20%] border-b sm:border-b-0 sm:border-r border-gray-200 px-6 py-4">
                <p className="text-sm text-gray-500 leading-tight">
                  Trusted by growth-focused
                  <br />
                  B2B companies worldwide
                </p>
              </div>
              <div className="relative overflow-hidden py-4 flex-1 flex items-center">
                <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-white z-10 pointer-events-none" />
                <div className="flex animate-marquee space-x-8">
                  {[...companies, ...companies].map((company, index) => (
                    <div
                      key={index}
                      className="shrink-0 flex items-center justify-center h-8 px-4"
                    >
                      <img
                        src={company.logo}
                        alt=""
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0, 1, 1, 0], y: [0, 8, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        onClick={() => {
          const nextSection = document.querySelector("#how-it-works");
          if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
}
