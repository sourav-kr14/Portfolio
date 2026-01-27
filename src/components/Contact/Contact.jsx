import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import "../../index.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-white dark:bg-slate-950 py-16 sm:py-24 overflow-hidden transition-colors duration-500"
    >
      <div className="absolute left-[-120px] top-1/2 w-80 h-80 bg-indigo-300 dark:bg-indigo-600/10 rounded-full blur-[120px] opacity-30 dark:opacity-20" />

      <div className="relative container mx-auto px-4 md:w-[85%]">
        {/* HEADING */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you have a question or just want to say hi, my inbox is
            always open. I'm currently looking for new opportunities in
            <span className="font-bold text-gray-900 dark:text-white">
              {" "}
              SDE{" "}
            </span>
            and
            <span className="font-bold text-gray-900 dark:text-white">
              {" "}
              AI/ML
            </span>
            .
          </p>
        </div>

        {/* CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            interactive-card
            max-w-3xl mx-auto
            bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem]
            p-8 sm:p-16 shadow-xl border border-white/30 dark:border-slate-800
            text-center transition-all duration-300
          "
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Let's build something amazing together.
          </h3>

          {/* EMAIL CTA */}
          <a
            href="mailto:souravkr93@gmail.com"
            className="
              inline-flex items-center gap-3
              px-10 py-5 rounded-2xl
              bg-indigo-600 text-white font-bold text-lg
              shadow-2xl shadow-indigo-200 dark:shadow-none 
              hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all
            "
          >
            <FiMail className="text-2xl" />
            Say Hello
          </a>

          {/* SOCIAL LINKS */}
          <div className="mt-12 flex justify-center gap-5 flex-wrap">
            {[
              {
                href: "https://github.com/sourav-kr14",
                icon: <FiGithub />,
                label: "GitHub",
              },
              {
                href: "https://linkedin.com/in/thesouravv",
                icon: <FiLinkedin />,
                label: "LinkedIn",
              },
              {
                href: "https://leetcode.com/u/sourav-kr14/",
                icon: <SiLeetcode />,
                label: "LeetCode",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800/50 
                shadow-sm border border-gray-100 dark:border-slate-700 text-gray-700 dark:text-gray-300
                hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 
                hover:scale-110 transition-all duration-300"
              >
                <div className="text-2xl">{social.icon}</div>
              </a>
            ))}
          </div>

          {/* FOOT NOTE */}
          <div className="mt-12 pt-8 border-t border-gray-100 dark:border-slate-800 flex flex-col items-center gap-2">
            <p className="flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
              <FiMapPin className="text-indigo-500" /> Ranchi, India
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 italic">
              Available for relocation & remote roles worldwide
            </p>
          </div>
        </motion.div>
      </div>

      {/* MINI FOOTER */}
      <div className="mt-16 text-center pb-8">
        <p className="text-sm text-gray-400 dark:text-gray-600">
          © 2026 Designed & Built by{" "}
          <span className="text-indigo-600 dark:text-indigo-500 font-bold">
            Sourav Kumar
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
