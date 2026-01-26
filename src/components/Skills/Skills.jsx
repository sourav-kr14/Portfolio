import React from "react";
import { motion } from "framer-motion";
import "../../index.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "JWT Auth"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Data & ML",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "EDA"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Firebase", "Docker"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-white py-16 sm:py-24 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute right-[-120px] top-1/3 w-80 h-80 bg-indigo-300 rounded-full blur-[120px] opacity-30" />

      <div className="relative container mx-auto px-4 md:w-[85%]">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Skills
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable applications and
            data-driven systems.
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="
                bg-white/60 backdrop-blur-xl rounded-2xl p-6
                shadow-xl border border-white/30
                hover:-translate-y-1 hover:shadow-2xl transition-all
              "
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      text-sm px-3 py-1 rounded-full
                      bg-indigo-100 text-indigo-700 font-medium
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
