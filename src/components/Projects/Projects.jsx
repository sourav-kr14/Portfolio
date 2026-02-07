import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "../../index.css";

const projects = [
  {
    title: "AI Resume Builder",
    description:
      "Built a scalable AI-powered resume generation platform with a modular backend architecture, enabling fast and reliable PDF resume creation for users.",
    highlights: [
      "Designed modular backend to handle concurrent resume generation requests",
      "Optimized MongoDB schema for complex user profiles and history",
      "Automated PDF generation pipeline, reducing creation time by 60%",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "AI"],
    link: "https://github.com/sourav-kr14/ai-resume-builder",
    liveLink: null, 
  },
  {
    title: "AI Disease Prediction",
    description:
      "Developed a machine learning–based disease prediction system that delivers accurate real-time predictions through a deployed API.",
    highlights: [
      "Optimized ML models: Random Forest, SVM, Naive Bayes",
      "Built Flask-based API for real-time disease prediction",
      "Implemented robust pipelines for symptom-based inputs",
    ],
    tech: ["Python", "Scikit-learn", "Flask", "Pandas", "ML"],
    link: "https://github.com/sourav-kr14/AI-Powered-Disease-Prediction-System",
    liveLink: "https://ai-powered-disease-prediction-syste.vercel.app/", 
  },
  {
    title: "AI-PDF Intelligence",
    description:
      "Designed a document intelligence system to extract, search, and summarize unstructured PDF data using modern NLP techniques.",
    highlights: [
      "Built a RAG pipeline using document chunking and embeddings",
      "Implemented semantic search for context-aware retrieval",
      "Automated PDF parsing and summarization logic",
    ],
    tech: ["Python", "LangChain", "Vector DB", "RAG", "NLP"],
    link: "https://github.com/sourav-kr14/Chat-To-PDF",
    liveLink: null,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-white dark:bg-slate-950 py-16 sm:py-24 overflow-hidden transition-colors duration-500"
    >
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-1/3 w-80 h-80 bg-indigo-300 dark:bg-indigo-600/20 rounded-full blur-[120px] opacity-30 dark:opacity-20" />

      <div className="relative container mx-auto px-4 md:w-[85%]">
        {/* SECTION HEADING */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Real-world projects showcasing my experience in full-stack
            development, machine learning, and AI-driven systems.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                interactive-card group flex flex-col
                bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8
                shadow-xl border border-white/30 dark:border-slate-800
                hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300
              "
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <FiGithub className="text-xl text-gray-400 dark:text-gray-500" />
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                {project.description}
              </p>

              <ul className="text-gray-500 dark:text-gray-400 text-sm space-y-2 mb-6 flex-grow">
                {project.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

          
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-lg
                    bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-100/50 dark:border-indigo-800/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            
              <div className="flex items-center gap-5 mt-auto">
      
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <FiGithub /> Source
                </a>

             
                {project.liveLink && (
                  <motion.a
                    whileHover={{ x: 3 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all"
                  >
                    Live Demo <FiExternalLink />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;