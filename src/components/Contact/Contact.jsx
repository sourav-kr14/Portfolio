import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import "../../index.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-white py-16 sm:py-24 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute left-[-120px] top-1/2 w-80 h-80 bg-indigo-300 rounded-full blur-[120px] opacity-30" />

      <div className="relative container mx-auto px-4 md:w-[85%]">
        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Open to internships, full-time opportunities, and collaborations.
            Feel free to reach out — I’d love to connect.
          </p>
        </div>

        {/* CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            max-w-3xl mx-auto
            bg-white/60 backdrop-blur-xl rounded-2xl
            p-8 sm:p-12 shadow-xl border border-white/30
            text-center
          "
        >
          {/* EMAIL CTA */}
          <a
            href="mailto:souravkr93@gmail.com"
            className="
              inline-flex items-center gap-3
              px-8 py-4 rounded-xl
              bg-indigo-600/90 text-white font-semibold text-lg
              shadow-lg hover:bg-indigo-700 transition-all hover:scale-105
            "
          >
            <FiMail className="text-xl" />
            Say Hello
          </a>

          {/* SOCIAL LINKS */}
          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            <a
              href="https://github.com/sourav-kr14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/60 backdrop-blur-md
              shadow-md border border-white/30 text-gray-700
              hover:text-indigo-600 hover:scale-110 transition"
            >
              <FiGithub className="text-2xl" />
            </a>

            <a
              href="https://linkedin.com/in/thesouravv"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/60 backdrop-blur-md
              shadow-md border border-white/30 text-gray-700
              hover:text-indigo-600 hover:scale-110 transition"
            >
              <FiLinkedin className="text-2xl" />
            </a>

            {/* LEETCODE */}
            <a
              href="https://leetcode.com/u/sourav-kr14/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/60 backdrop-blur-md
              shadow-md border border-white/30 text-gray-700
              hover:text-indigo-600 hover:scale-110 transition"
            >
              <SiLeetcode className="text-2xl" />
            </a>
          </div>

          {/* FOOT NOTE */}
          <p className="mt-8 text-sm text-gray-500">
            Based in Ranchi, India · Open to remote opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
