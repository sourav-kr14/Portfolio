import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiAward, FiCode, FiCheck } from "react-icons/fi";
import "../../index.css";

const leadership = [
  {
    title: "Club Administrator",
    org: "ALFA Coding Club",
    icon: <FiUsers />,
    points: [
      "Organized and led a Web Development workshop for 50+ students",
      "Coordinated TECH SAMAAROH tech fest with 500+ participants",
      "Managed event planning, execution, and cross-team coordination",
    ],
  },
  {
    title: "Head Boy",
    org: "Mount Assisi School",
    icon: <FiAward />,
    points: [
      "Served as liaison between 800+ students and school administration",
      "Led student committees for annual cultural and technical events",
      "Organized charity drives and school-wide initiatives",
    ],
  },
  {
    title: "Problem Solving",
    org: "Personal Milestone",
    icon: <FiCode />,
    points: [
      "Solved 150+ problems across LeetCode and GeeksforGeeks",
      "Strengthened algorithmic thinking and DSA fundamentals",
      "Maintained consistency alongside academics and internships",
    ],
  },
];

const Leadership = () => {
  return (
    <section
      id="leadership"
      className="relative bg-white dark:bg-slate-950 py-16 sm:py-24 overflow-hidden transition-colors duration-500"
    >

      <div className="absolute left-[-120px] top-1/2 w-80 h-80 bg-indigo-300 dark:bg-indigo-600/10 rounded-full blur-[120px] opacity-30 dark:opacity-20" />

      <div className="relative container mx-auto px-6 md:w-[85%]">
        {/* SECTION HEADING */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white"
          >
            Leadership & Impact
          </motion.h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Experiences that reflect ownership, collaboration, and influence
            beyond individual technical contributions.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                interactive-card group
                bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8
                shadow-xl border border-white/30 dark:border-slate-800
                hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300
              "
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-bold mb-6 text-sm">
                {item.org}
              </p>

              <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <FiCheck className="mt-1 text-indigo-500 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
