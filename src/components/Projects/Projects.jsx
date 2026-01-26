import React from "react";
import { motion } from "framer-motion";
import "../../index.css";

const projects = [
  {
    title: "AI Resume Builder",
    description:
      "Built a scalable AI-powered resume generation platform with a modular backend architecture, enabling fast and reliable PDF resume creation for users.",
    highlights: [
      "Designed modular backend to handle concurrent resume generation requests",
      "Optimized MongoDB schema for complex user profiles and resume history",
      "Automated PDF generation pipeline, reducing resume creation time by 60%",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "PDF Generation"],
    link: "https://github.com/sourav-kr14",
  },
  {
    title: "AI-Powered Disease Prediction System",
    description:
      "Developed a machine learning–based disease prediction system that delivers accurate real-time predictions through a deployed API.",
    highlights: [
      "Trained and optimized ML models: Random Forest, SVM, Naive Bayes",
      "Built Flask-based API for real-time disease prediction",
      "Implemented robust preprocessing pipelines for symptom-based inputs",
    ],
    tech: ["Python", "Scikit-learn", "Flask", "Pandas", "ML"],
    link: "https://github.com/sourav-kr14",
  },
  {
    title: "AI-PDF Intelligence System",
    description:
      "Designed a document intelligence system to extract, search, and summarize unstructured PDF data using modern NLP techniques.",
    highlights: [
      "Built a RAG pipeline using document chunking and embeddings",
      "Implemented semantic search for context-aware document retrieval",
      "Automated PDF parsing, information extraction, and summarization",
    ],
    tech: ["Python", "LangChain", "Vector Embeddings", "RAG", "NLP"],
    link: "https://github.com/sourav-kr14",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-white py-16 sm:py-24 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute left-[-120px] top-1/3 w-80 h-80 bg-indigo-300 rounded-full blur-[120px] opacity-30" />

      <div className="relative container mx-auto px-4 md:w-[85%]">
        {/* SECTION HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Projects
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
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
                bg-white/60 backdrop-blur-xl rounded-2xl p-6
                shadow-xl border border-white/30
                hover:shadow-2xl hover:-translate-y-2 transition-all
              "
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
                {project.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full
                    bg-indigo-100 text-indigo-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINK */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-indigo-600 font-semibold hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
