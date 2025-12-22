"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-primary-cta shadow-lg"
        style={{
          width: `${scrollProgress}%`,
        }}
        transition={{ duration: 0.1, ease: "linear" }}
      />
    </div>
  );
}

