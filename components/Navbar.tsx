"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importing menu icons

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adds background when scrolled

      const sections = ["home", "projects", "about", "contact"];
      let currentSection = "home";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Dana Izadpanah's Portfolio</h1>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {["Home", "Projects", "About", "Contact"].map((item) => {
            const sectionId = item.toLowerCase();
            return (
              <Link key={item} href={`#${sectionId}`} scroll={false}>
                <span
                  className={`text-lg font-medium transition cursor-pointer px-4 py-2 rounded-md ${
                    activeSection === sectionId
                      ? "text-blue-400 font-bold bg-white/20"
                      : "text-gray-200 hover:text-blue-400"
                  }`}
                >
                  {item}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation Menu (Slide Down) */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center space-y-4 py-6 shadow-md">
          {["Home", "Projects", "About", "Contact"].map((item) => {
            const sectionId = item.toLowerCase();
            return (
              <Link
                key={item}
                href={`#${sectionId}`}
                scroll={false}
                onClick={() => setMenuOpen(false)}
              >
                <span
                  className={`text-lg font-medium transition cursor-pointer px-4 py-2 rounded-md ${
                    activeSection === sectionId
                      ? "text-blue-400 font-bold"
                      : "text-gray-200 hover:text-blue-400"
                  }`}
                >
                  {item}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}