"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";


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

      {/* ✅ Profile Image Instead of Glowing Circle */}
      
      <motion.div style={{ x: moveX, y: moveY }}>
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={192} // ✅ Add explicit width
          height={192} // ✅ Add explicit height
          className="mt-10 rounded-full border-4 border-white shadow-lg"
        />
      </motion.div>
    </section>
  );
}

