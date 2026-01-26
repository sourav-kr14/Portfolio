import React from "react";
import { motion } from "framer-motion";
import "../../index.css";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-white py-16 sm:py-24 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute right-[-120px] top-1/3 w-80 h-80 bg-indigo-300 rounded-full blur-[120px] opacity-30" />

      <div className="relative container mx-auto px-4 md:w-[85%]">
        {/* SECTION HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Experience
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hands-on industry experience building scalable, reliable, and
            performance-oriented software systems.
          </p>
        </div>

        {/* EXPERIENCE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            bg-white/60 backdrop-blur-xl rounded-2xl p-8 sm:p-10
            shadow-xl border border-white/30
          "
        >
          {/* ROLE + COMPANY */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Software Development Engineer (Intern)
              </h3>
              <p className="text-indigo-600 font-semibold">
                Armus Digital · Remote
              </p>
            </div>
            <span className="mt-2 sm:mt-0 text-sm font-medium text-gray-600">
              June 2025 – July 2025
            </span>
          </div>

          {/* CONTRIBUTIONS */}
          <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed">
            <li>
              Engineered robust backend business logic and secure authentication
              modules, contributing across the full development lifecycle from
              design to testing.
            </li>
            <li>
              Refactored frontend modules to improve reusability and optimized
              rendering cycles, reducing application load latency by{" "}
              <span className="font-semibold">25%</span>.
            </li>
            <li>
              Diagnosed and resolved complex full-stack defects, improving system
              stability and achieving a{" "}
              <span className="font-semibold">15%</span> overall performance
              improvement.
            </li>
          </ul>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "REST APIs",
              "Git",
              "Postman",
            ].map((tech, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full
                bg-indigo-100 text-indigo-700 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
