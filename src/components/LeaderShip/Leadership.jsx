import React from "react";
import { motion } from "framer-motion";

const leadership = [
  {
    title: "Club Administrator",
    org: "ALFA Coding Club",
    points: [
      "Organized and led a Web Development workshop for 50+ students",
      "Coordinated the annual tech fest TECH SAMAAROH with 500+ participants",
      "Managed event planning, execution, and cross-team coordination",
    ],
  },
  {
    title: "Head Boy",
    org: "Mount Assisi School",
    points: [
      "Served as liaison between 800+ students and school administration",
      "Led student committees for annual cultural and technical events",
      "Organized charity drives and school-wide initiatives",
    ],
  },
  {
    title: "Problem Solving",
    org: "Personal",
    points: [
      "Solved 150+ problems across LeetCode and GeeksforGeeks",
      "Strengthened algorithmic thinking and data structure fundamentals",
      "Maintained consistency alongside academics and internships",
    ],
  },
];

const Leadership = () => {
  return (
    <section
      id="leadership"
      className="relative bg-white py-16 sm:py-24 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute right-[-120px] top-1/3 w-80 h-80 bg-indigo-300 rounded-full blur-[120px] opacity-30" />

      <div className="relative container mx-auto px-6 md:w-[85%]">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Leadership & Impact
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experiences that reflect ownership, collaboration, and influence
            beyond individual contributions.
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
                bg-white/60 backdrop-blur-xl rounded-2xl p-6
                shadow-xl border border-white/30
                hover:-translate-y-1 hover:shadow-2xl transition-all
              "
            >
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-indigo-600 font-semibold mb-4">
                {item.org}
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
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
