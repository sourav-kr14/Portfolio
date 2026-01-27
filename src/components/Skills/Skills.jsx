import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql,
  SiPython, SiPandas, SiNumpy, SiScikitlearn, SiGit,
  SiGithub, SiPostman, SiFirebase, SiDocker, SiOpenjdk
} from "react-icons/si";
import { FiCode, FiActivity } from "react-icons/fi";
import "../../index.css";


const iconMap = {
  "React": <SiReact />, "JavaScript": <SiJavascript />, "HTML": <SiHtml5 />,
  "CSS": <SiCss3 />, "Tailwind CSS": <SiTailwindcss />, "Node.js": <SiNodedotjs />,
  "Express": <SiExpress />, "REST APIs": <FiCode />, "JWT Auth": <FiActivity />,
  "MongoDB": <SiMongodb />, "PostgreSQL": <SiPostgresql />, "MySQL": <SiMysql />,
  "Python": <SiPython />, "Pandas": <SiPandas />, "NumPy": <SiNumpy />,
  "Scikit-learn": <SiScikitlearn />, "EDA": <FiActivity />, "Git": <SiGit />,
  "GitHub": <SiGithub />, "Postman": <SiPostman />, "Firebase": <SiFirebase />,
  "Docker": <SiDocker />, "Java": <SiOpenjdk />
};

const skillGroups = [
  {
    title: "Core & Algorithms",
    skills: ["Java", "Python", "Git", "GitHub"],
  },
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
    skills: ["Pandas", "NumPy", "Scikit-learn", "EDA"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Postman", "Firebase", "Docker"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-white dark:bg-slate-950 py-16 sm:py-24 overflow-hidden transition-colors duration-500"
    >
 
      <div className="absolute right-[-120px] top-1/3 w-80 h-80 bg-indigo-300 dark:bg-indigo-600/10 rounded-full blur-[120px] opacity-30 dark:opacity-20" />

      <div className="relative container mx-auto px-4 md:w-[85%]">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white"
          >
            Technical Arsenal
          </motion.h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for full-stack engineering, machine learning, and scalable systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="
                bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8
                shadow-xl border border-white/30 dark:border-slate-800
                hover:border-indigo-500/50 transition-all group
              "
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="
                      flex items-center gap-2 text-sm px-4 py-2 rounded-2xl
                      bg-indigo-50 dark:bg-indigo-900/30 
                      text-indigo-700 dark:text-indigo-300 
                      font-semibold border border-indigo-100/50 dark:border-indigo-800/30
                      transition-all
                    "
                  >
                    <span className="text-lg">{iconMap[skill]}</span>
                    {skill}
                  </motion.span>
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