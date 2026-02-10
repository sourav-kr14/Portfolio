import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-white dark:bg-slate-950 pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center transition-colors duration-300"
    >
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-[120px] opacity-50 dark:opacity-30 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[100px] opacity-40 dark:opacity-20" />

      <div className="relative container mx-auto px-6 md:w-[85%] grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 shadow-sm">
            <p className="text-indigo-600 dark:text-indigo-400 font-bold text-sm tracking-wide uppercase flex items-center gap-2">
              Namaste, Welcome to my space
            </p>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Sourav Kumar<span className="text-indigo-600">.</span>
          </h1>

          <div className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-bold mb-8 h-[40px]">
            <span className="mr-3">Aspiring</span>
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "Data Analyst",
                2000,
                "Full Stack Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-indigo-600 dark:text-indigo-400 border-b-4 border-indigo-600/20"
            />
          </div>

          <p className="text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed text-lg mb-10">
            MCA student at{" "}
            <span className="text-gray-900 dark:text-white font-semibold">
              BIT Mesra
            </span>
            . I build high-performance software systems and turn complex data
            into actionable intelligence.
          </p>

          <div className="flex gap-6 items-center flex-wrap">
            <a
              href="#projects"
              className="px-10 py-4 rounded-2xl bg-indigo-600 text-white font-bold shadow-2xl shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 transition-all hover:-translate-y-1 active:scale-95"
            >
              View My Work
            </a>

            <a
              href="/Sourav_Kumar_Resume.pdf"
              download
              className="px-10 py-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-800 text-gray-900 dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-slate-800 transition-all hover:-translate-y-1 active:scale-95"
            >
              Get Resume
            </a>
          </div>

          {/* Social Links*/}
          <div className="mt-12 flex items-center gap-8 text-gray-400 dark:text-gray-500">
            <a
              href="https://github.com"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-2xl"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-2xl"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-2xl"
            >
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <div className="relative group">
            <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              {/* Image*/}
              <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl p-4 rounded-[40px] shadow-2xl border border-white/50 dark:border-slate-800 relative overflow-hidden group">
                <img
                  src="/profile.jpeg"
                  alt="Sourav Kumar"
                  className="rounded-[30px] w-72 sm:w-80 h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 shadow-inner"
                />

                <div className="absolute bottom-8 right-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700">
                  <p className="text-xs font-black text-indigo-600 dark:text-indigo-400 tracking-tighter">
                    MCA @ BIT Mesra
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -left-10 w-24 h-24 border-2 border-dashed border-indigo-200 dark:border-indigo-900/50 rounded-full opacity-50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
