"use client";
import { motion } from "framer-motion";
import Image from "next/image";


const projects = [
  {
    id: 1,
    title: "Solitaire Card Game",
    duration: "Aug 2024 – Dec 2024",
    description: "An interactive digital Solitaire game with smooth gameplay and real-time state management.",
    image: "/solitaire.jpg",
    liveLink: "https://solitairegalaxy.com/",
    githubLink: "https://github.com/DanaIzadpanah/solitaire-galaxy",
  },
  {
    id: 2,
    title: "Tether",
    duration: "Aug 2024 – Dec 2024",
    description: "A relationship management app that helps users organize and maintain personal connections.",
    image: "/tether.png",
    githubLink: "https://github.com/haarbj/Tether",
  },
  {
    id: 3,
    title: "DineWise",
    duration: "Sept 2024 - Nov 2024",
    description: "An AI-powered restaurant guide that provides personalized dining recommendations and reviews.",
    image: "/dinewise.jpg",
    liveLink: "https://docs.google.com/document/d/1xF0qluTyWmt6p_DChLUdpxpikoemidhU_zeiGljbfnU/edit?usp=sharing",
    githubLink: "https://github.com/JonathanTilahun/DineWise",
  },
  {
    id: 4,
    title: "SprintCV",
    duration: "Jan 2024 – May 2024",
    description: "A resume-building platform that generates optimized CVs and streamlines job applications.",
    image: "/sprintcv.jpg",
    liveLink: "https://sprintcv.onrender.com/",
    githubLink: "https://github.com/SprintCV-S24/frontend-SprintCV-S24",
  },
  {
    id: 5,
    title: "Expression Tree",
    duration: "Jan 2024 – May 2024",
    description: "A C++ program for evaluating mathematical expressions with an object-oriented approach.",
    image: "/expression.jpg",
    liveLink: "https://docs.google.com/document/d/1xF0qluTyWmt6p_DChLUdpxpikoemidhU_zeiGljbfnU/edit?usp=sharing",
  },
  {
    id: 6,
    title: "NAMI",
    duration: "Jan 2024 – May 2024",
    description: "A Swift-based mental health app providing resources, guided exercises, and crisis support.",
    image: "/changeplusplus.jpg",
    githubLink: "https://github.com/ChangePlusPlusVandy/NAMI",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          🚀 My Projects
        </h2>

        {/* Grid Layout - 3 Projects Per Row, Taller & Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 6px 20px rgba(255, 255, 255, 0.15)" }}
              className="relative bg-white/20 backdrop-blur-lg dark:bg-gray-800/30 p-5 rounded-2xl shadow-lg overflow-hidden border border-gray-300 dark:border-gray-700 hover:border-blue-500 transition-all w-[90%] mx-auto h-[520px] flex flex-col justify-between"
            >
              {/* Project Image - Perfect Fit */}
              <div className="w-full h-[260px] flex justify-center items-center bg-gray-100 dark:bg-gray-800 rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                width={300} // 🔥 Set a specific width
                height={200} // 🔥 Set a specific height
                className="rounded-xl"
              />
              </div>

              {/* Project Details */}
              <div className="mt-4 text-center flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 flex-grow">
                  {project.description}
                </p>

                {/* Stacked Buttons - Slimmer Look */}
                <div className="mt-4 flex flex-col space-y-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 transition"
                    >
                      View Project
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}