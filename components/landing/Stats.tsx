"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
    description: "Successfully completed MVPs",
    trend: "+23%",
    trendLabel: "vs last year",
    chartData: [65, 72, 68, 85, 92, 88, 100],
    color: "#0ea5e9",
  },
  {
    value: 10,
    prefix: "$",
    suffix: "M+",
    label: "Revenue Generated",
    description: "For our clients",
    trend: "+156%",
    trendLabel: "growth rate",
    chartData: [45, 52, 58, 70, 78, 85, 100],
    color: "#8b5cf6",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "5-star rated projects",
    trend: "4.9/5",
    trendLabel: "average rating",
    chartData: [88, 90, 89, 92, 95, 96, 98],
    color: "#10b981",
  },
  {
    value: 48,
    suffix: "hrs",
    label: "Avg. Delivery Time",
    description: "From concept to prototype",
    trend: "10x",
    trendLabel: "faster than average",
    chartData: [100, 92, 85, 75, 68, 55, 48],
    color: "#f59e0b",
  },
];

// Mini sparkline chart component
const MiniChart = ({ data, color }: { data: number[]; color: string }) => {
  const max = Math.max(...data);
  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - (value / max) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Area fill */}
      <motion.path
        d={`M 0,100 L ${points} L 100,100 Z`}
        fill={`url(#gradient-area-${color})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      {/* Line */}
      <motion.polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      />
      <defs>
        <linearGradient id={`gradient-area-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Trend badge component
const TrendBadge = ({ trend, color }: { trend: string; color: string }) => {
  const isPositive = trend.includes("+") || trend.includes("x");

  return (
    <motion.div
      className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-primary-cta/10 text-primary-cta"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
    >
      <svg
        className="w-3 h-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isPositive ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
          />
        )}
      </svg>
      <span>{trend}</span>
    </motion.div>
  );
};

// Counter animation hook
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = end * easeOutCubic;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, ref };
};

export const Stats = () => {
  return (
    <section
      id="stats"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-linear-to-b from-white via-gray-50/50 to-white overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#6b7280 1px, transparent 1px), linear-gradient(90deg, #6b7280 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-cta/10 text-primary-cta rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-cta/50"></span>
              </span>
              Real-time metrics
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-normal text-black mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Data-driven results that speak for themselves
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value, 2000);

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group flex flex-col"
              >
                <div className="relative h-full p-6 sm:p-8 rounded-xl bg-linear-to-br from-white to-gray-50/50 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 group">
                  {/* Subtle accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary-cta/0 via-primary-cta/30 to-primary-cta/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Trend badge */}
                    <div className="flex items-center justify-between mb-4">
                      <TrendBadge trend={stat.trend} color="var(--primary-cta)" />
                    </div>

                    {/* Main metric */}
                    <motion.div
                      className="mb-3"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + index * 0.1,
                        type: "spring",
                        stiffness: 150,
                        damping: 12,
                      }}
                    >
                      <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-1">
                        {stat.prefix && (
                          <span className="text-gray-600">{stat.prefix}</span>
                        )}
                        {Math.round(count)}
                        <span className="text-primary-cta">{stat.suffix}</span>
                      </h3>
                    </motion.div>

                    {/* Infographic Animation */}
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="relative h-28 flex items-center justify-center rounded-lg overflow-hidden bg-linear-to-br from-gray-50 to-gray-100/50 border border-gray-100">
                        {index === 0 && (
                          // Projects Delivered - Bar Chart
                          <svg width="100%" height="100" viewBox="0 0 200 100" style={{ maxWidth: "100%", height: "auto" }} preserveAspectRatio="xMidYMid meet">
                            <defs>
                              <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="hsl(var(--primary-cta))" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="hsl(var(--primary-cta))" stopOpacity="0.3" />
                              </linearGradient>
                            </defs>
                            {/* Grid lines */}
                            {[0, 1, 2, 3].map((i) => (
                              <line
                                key={i}
                                x1="20"
                                y1={20 + i * 20}
                                x2="180"
                                y2={20 + i * 20}
                                stroke="currentColor"
                                strokeWidth="0.5"
                                opacity="0.1"
                              />
                            ))}
                            {/* Animated bars */}
                            {[0, 1, 2, 3, 4, 5].map((i) => {
                              const barHeight = 30 + (i % 3) * 15;
                              const barWidth = 20;
                              const barX = 30 + i * 25;
                              const barY = 80 - barHeight;
                              return (
                                <g key={i}>
                                  <motion.rect
                                    x={barX}
                                    y={barY}
                                    width={barWidth}
                                    height={barHeight}
                                    rx="2"
                                    fill={`url(#gradient-${index})`}
                                    initial={{ height: 0, y: 80 }}
                                    whileInView={{ height: barHeight, y: barY }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                                  />
                                  <motion.rect
                                    x={barX}
                                    y={barY}
                                    width={barWidth}
                                    height={barHeight}
                                    rx="2"
                                    fill="none"
                                    stroke="hsl(var(--primary-cta))"
                                    strokeWidth="1.5"
                                    opacity="0.6"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                  />
                                </g>
                              );
                            })}
                          </svg>
                        )}
                        {index === 1 && (
                          // Revenue Generated - Growth Line Chart
                          <svg width="100%" height="100" viewBox="0 0 200 100" style={{ maxWidth: "100%", height: "auto" }} preserveAspectRatio="xMidYMid meet">
                            <defs>
                              <linearGradient id={`gradient-line-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="hsl(var(--primary-cta))" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="hsl(var(--primary-cta))" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            {/* Grid */}
                            {[0, 1, 2, 3].map((i) => (
                              <line
                                key={i}
                                x1="20"
                                y1={20 + i * 20}
                                x2="180"
                                y2={20 + i * 20}
                                stroke="currentColor"
                                strokeWidth="0.5"
                                opacity="0.1"
                              />
                            ))}
                            {/* Data points */}
                            {[
                              { x: 30, y: 70 },
                              { x: 55, y: 60 },
                              { x: 80, y: 50 },
                              { x: 105, y: 40 },
                              { x: 130, y: 35 },
                              { x: 155, y: 30 },
                              { x: 180, y: 25 },
                            ].map((point, i) => (
                              <motion.circle
                                key={i}
                                cx={point.x}
                                cy={point.y}
                                r="3"
                                fill="hsl(var(--primary-cta))"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                              />
                            ))}
                            {/* Line path */}
                            <motion.path
                              d="M 30,70 L 55,60 L 80,50 L 105,40 L 130,35 L 155,30 L 180,25"
                              fill="none"
                              stroke="hsl(var(--primary-cta))"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{ pathLength: 0, opacity: 0 }}
                              whileInView={{ pathLength: 1, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
                            />
                            {/* Area fill */}
                            <motion.path
                              d="M 30,70 L 55,60 L 80,50 L 105,40 L 130,35 L 155,30 L 180,25 L 180,80 L 30,80 Z"
                              fill={`url(#gradient-line-${index})`}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5, duration: 0.6 }}
                            />
                          </svg>
                        )}
                        {index === 2 && (
                          // Client Satisfaction - Circular Progress
                          <svg width="100%" height="100" viewBox="0 0 200 100" style={{ maxWidth: "100%", height: "auto" }} preserveAspectRatio="xMidYMid meet">
                            <defs>
                              <linearGradient id={`gradient-circle-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="hsl(var(--primary-cta))" stopOpacity="1" />
                                <stop offset="100%" stopColor="hsl(var(--primary-cta))" stopOpacity="0.6" />
                              </linearGradient>
                            </defs>
                            {/* Background circle */}
                            <circle
                              cx="100"
                              cy="50"
                              r="35"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="6"
                              opacity="0.1"
                            />
                            {/* Progress arc */}
                            <motion.circle
                              cx="100"
                              cy="50"
                              r="35"
                              fill="none"
                              stroke={`url(#gradient-circle-${index})`}
                              strokeWidth="6"
                              strokeLinecap="round"
                              strokeDasharray={`${2 * Math.PI * 35}`}
                              initial={{ strokeDashoffset: 2 * Math.PI * 35, opacity: 0 }}
                              whileInView={{ strokeDashoffset: 2 * Math.PI * 35 * 0.02, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
                              transform="rotate(-90 100 50)"
                            />
                            {/* Percentage text - Show trend value to avoid duplicate with main metric */}
                            <motion.text
                              x="100"
                              y="55"
                              textAnchor="middle"
                              fill="hsl(var(--primary-cta))"
                              fontSize="18"
                              fontWeight="600"
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.8, duration: 0.4 }}
                            >
                              {stat.trend || `${stat.value}%`}
                            </motion.text>
                          </svg>
                        )}
                        {index === 3 && (
                          // Avg. Delivery Time - Speedometer
                          <svg width="100%" height="100" viewBox="0 0 200 100" style={{ maxWidth: "100%", height: "auto" }} preserveAspectRatio="xMidYMid meet">
                            <defs>
                              <linearGradient id={`gradient-speed-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="hsl(var(--primary-cta))" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="hsl(var(--primary-cta))" stopOpacity="1" />
                              </linearGradient>
                            </defs>
                            {/* Speedometer arc */}
                            <motion.path
                              d="M 30 80 A 70 70 0 0 1 170 80"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="8"
                              strokeLinecap="round"
                              opacity="0.2"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2, duration: 0.8 }}
                            />
                            {/* Speed indicator arc */}
                            <motion.path
                              d="M 30 80 A 70 70 0 0 1 170 80"
                              fill="none"
                              stroke={`url(#gradient-speed-${index})`}
                              strokeWidth="8"
                              strokeLinecap="round"
                              strokeDasharray={`${Math.PI * 70}`}
                              initial={{ strokeDashoffset: Math.PI * 70 * 0.7, opacity: 0 }}
                              whileInView={{ strokeDashoffset: Math.PI * 70 * 0.3, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
                            />
                            {/* Needle */}
                            <motion.g
                              transform="translate(100, 80)"
                              initial={{ rotate: -140 }}
                              whileInView={{ rotate: -40 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                            >
                              <motion.line
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="-60"
                                stroke="hsl(var(--primary-cta))"
                                strokeWidth="3"
                                strokeLinecap="round"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 0.3 }}
                              />
                              <motion.circle
                                cx="0"
                                cy="0"
                                r="4"
                                fill="hsl(var(--primary-cta))"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.9, duration: 0.3, type: "spring" }}
                              />
                            </motion.g>
                            {/* Speed text - Show trend value to avoid duplicate with main metric */}
                            <motion.text
                              x="100"
                              y="75"
                              textAnchor="middle"
                              fill="hsl(var(--primary-cta))"
                              fontSize="16"
                              fontWeight="600"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 1, duration: 0.4 }}
                            >
                              {stat.trend || `${stat.value}${stat.suffix}`}
                            </motion.text>
                          </svg>
                        )}
                      </div>
                    </motion.div>

                    {/* Label and description */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <h4 className="text-base font-semibold text-gray-800 mb-1.5">
                        {stat.label}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 pt-12 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">48-Hour Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Expert Team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

