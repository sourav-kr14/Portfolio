import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";
import "../../index.css";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-white dark:bg-slate-950 py-16 sm:py-24 overflow-hidden transition-colors duration-500"
    >
    
      <div className="absolute right-[-120px] top-1/3 w-80 h-80 bg-indigo-300 dark:bg-indigo-600/20 rounded-full blur-[120px] opacity-30 dark:opacity-20" />

      <div className="relative container mx-auto px-4 md:w-[85%]">
        {/* SECTION HEADING */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white"
          >
            Experience
          </motion.h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
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
            interactive-card group
            bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-[2rem] p-8 sm:p-12
            shadow-xl border border-white/30 dark:border-slate-800
            hover:shadow-indigo-500/10 transition-all duration-300
          "
        >
          {/* ROLE + COMPANY */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Software Development Engineer (Intern)
              </h3>
              <div className="flex items-center gap-4 mt-2">
                <p className="text-indigo-600 dark:text-indigo-400 font-bold text-lg flex items-center gap-2">
                  Armus Digital
                </p>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                <p className="text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1">
                  <FiMapPin className="inline" /> Remote
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700 text-gray-600 dark:text-gray-400 text-sm font-bold h-fit">
              <FiCalendar /> June 2025 – July 2025
            </div>
          </div>

          {/* CONTRIBUTIONS */}
          <ul className="space-y-6 mb-10">
            {[
              "Engineered robust backend business logic and secure authentication modules, contributing across the full development lifecycle from design to testing.",
              "Refactored frontend modules to improve reusability and optimized rendering cycles, reducing application load latency by <span class='text-indigo-600 dark:text-indigo-400 font-bold underline decoration-indigo-500/30 underline-offset-4'>25%</span>.",
              "Diagnosed and resolved complex full-stack defects, improving system stability and achieving a <span class='text-indigo-600 dark:text-indigo-400 font-bold underline decoration-indigo-500/30 underline-offset-4'>15%</span> overall performance improvement."
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                <FiCheckCircle className="mt-1.5 text-indigo-500 flex-shrink-0 text-xl" />
                <span dangerouslySetInnerHTML={{ __html: text }} />
              </li>
            ))}
          </ul>

          {/* TECH STACK */}
          <div className="pt-8 border-t border-gray-100 dark:border-slate-800">
            <p className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
              Technologies Utilized
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript", "React", "Node.js", "Express", 
                "REST APIs", "Git", "Postman"
              ].map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-4 py-2 rounded-xl
                  bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 
                  font-bold border border-indigo-100/50 dark:border-indigo-800/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;