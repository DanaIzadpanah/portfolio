"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [windowSize, setWindowSize] = useState({ width: 1, height: 1 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(mouseY, [0, windowSize.height], [7, -7]);
  const rotateY = useTransform(mouseX, [0, windowSize.width], [-7, 7]);

  return (
    <motion.div
      style={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <Navbar />
      {children}
    </motion.div>
  );
}