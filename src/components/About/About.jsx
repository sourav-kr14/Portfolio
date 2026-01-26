import React from "react";
import { motion } from "framer-motion";
import "../../index.css";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-white py-16 sm:py-24 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute left-[-120px] top-1/3 w-80 h-80 bg-indigo-300 rounded-full blur-[120px] opacity-30" />

      <div className="relative container mx-auto px-6 md:w-[85%]">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              About Me
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              I’m <span className="font-semibold text-indigo-600">Sourav Kumar</span>,
              an MCA student at <span className="font-semibold">BIT Mesra</span>,
              with a strong interest in software development and data science.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              I enjoy building scalable applications, solving algorithmic
              problems, and working with data to extract meaningful insights.
              My learning is driven by hands-on projects and real-world
              problem solving.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Currently, I’m focused on strengthening my full-stack,
              and machine learning skills while preparing for full-time
              software roles.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              bg-white/60 backdrop-blur-xl rounded-2xl p-8
              shadow-xl border border-white/30
            "
          >
            <ul className="space-y-4 text-gray-700">
              <li>🎓 MCA @ BIT Mesra (2024–2026)</li>
              <li>💼 SDE Intern @ Armus Digital</li>
              <li>🧠 Interests: Frontend, Backend, AI & ML</li>
              <li>📍 Location: Ranchi, India</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
