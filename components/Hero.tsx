"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
//import Image from "next/image"; // ✅ Use Next.js Image component new 

export default function Hero() {
  const [windowSize, setWindowSize] = useState({ width: 1, height: 1 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // ✅ Parallax Effect
  const moveX = useTransform(mouseX, [0, windowSize.width], [-30, 30]);
  const moveY = useTransform(mouseY, [0, windowSize.height], [-30, 30]);

  // ✅ Glow Effect
  const glow = useTransform(
    mouseX,
    [0, windowSize.width],
    ["0px 0px 5px rgba(0, 255, 255, 0.6)", "0px 0px 20px rgba(0, 255, 255, 1)"]
  );

  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gray-900 overflow-hidden">
      {/* Background Shift Effect */}
      <motion.div
        style={{ x: moveX, y: moveY }}
        className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-50"
      />

      {/* Hero Text */}
      <motion.h1
        style={{ x: moveX, y: moveY, textShadow: glow }}
        className="text-6xl font-bold text-white text-center"
      >
        Welcome to My Portfolio
      </motion.h1>
      
      {/* ✅ Fixed Profile Image */}
      <motion.div style={{ x: moveX, y: moveY }} className="mt-10">
      <img src="/profile.JPG" alt="Profile" width="200" height="200" 
      className="rounded-full border-4 border-white shadow-lg" />
      </motion.div>
    </section>
  );
}