import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiBookOpen, FiBriefcase, FiZap } from "react-icons/fi";
import "../../index.css";

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section 
      id="about" 
      className="relative bg-white dark:bg-slate-950 py-16 sm:py-24 overflow-hidden transition-colors duration-500"
    >

      <div className="absolute left-[-120px] top-1/3 w-80 h-80 bg-indigo-300 dark:bg-indigo-600/20 rounded-full blur-[120px] opacity-30 dark:opacity-20" />

      <div className="relative container mx-auto px-6 md:w-[85%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="lg:col-span-7 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/30 dark:border-slate-800 flex flex-col justify-center"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              <p>
                I’m <span className="font-semibold text-indigo-600 dark:text-indigo-400">Sourav Kumar</span>, 
                an MCA student at <span className="font-semibold text-gray-900 dark:text-white">BIT Mesra</span>. I specialize 
                in building scalable applications and extracting data-driven insights.
              </p>
              <p>
                Currently, I'm bridging the gap between <span className="text-indigo-600 dark:text-indigo-400 font-medium">Full-Stack Development</span> 
                and <span className="text-indigo-600 dark:text-indigo-400 font-medium">Machine Learning</span>, turning complex 
                logic into user-friendly software.
              </p>
            </div>
          </motion.div>

          {/* 2. EDUCATION CARD */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="lg:col-span-5 bg-indigo-600 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="relative z-10 space-y-6">
              <div>
                <FiBookOpen className="text-3xl mb-4" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-4">
               
                <div className="border-l-2 border-indigo-300/30 pl-4">
                  <p className="text-lg font-bold">MCA @ BIT Mesra</p>
                  <p className="text-sm text-indigo-100 opacity-90">2024 – 2026 (Expected)</p>
                </div>

                
                <div className="border-l-2 border-indigo-300/30 pl-4">
                  <p className="text-lg font-bold">BCA @ GGSIPU Delhi</p>
                  <p className="text-sm text-indigo-100 opacity-90">Graduated 2024</p>
                </div>
              </div>
            </div>

         
            <div className="absolute -right-4 -bottom-4 text-white/5 text-9xl font-black italic group-hover:scale-110 transition-transform">
              EDU
            </div>
          </motion.div>

          {/* 3. INTERNSHIP  */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="lg:col-span-4 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/30 dark:border-slate-800 flex items-center gap-4"
          >
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-2xl">
              <FiBriefcase className="text-2xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Past Internship</p>
              <h4 className="font-bold text-gray-900 dark:text-white">SDE Intern</h4>
              <p className="text-xs text-gray-600 dark:text-gray-500">Armus Digital (June - July 2025)</p>
            </div>
          </motion.div>

          {/* 4. LOCATION CARD */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="lg:col-span-4 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/30 dark:border-slate-800 flex items-center gap-4"
          >
            <div className="p-3 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-2xl">
              <FiMapPin className="text-2xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Location</p>
              <h4 className="font-bold text-gray-900 dark:text-white">Ranchi, India</h4>
              <p className="text-xs text-gray-600 dark:text-gray-500">Open to Remote & Relocation</p>
            </div>
          </motion.div>

          {/* 5. FOCUS CARD */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="lg:col-span-4 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/30 dark:border-slate-800 flex items-center gap-4"
          >
            <div className="p-3 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 rounded-2xl">
              <FiZap className="text-2xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Current Focus</p>
              <h4 className="font-bold text-gray-900 dark:text-white">AI-Powered SaaS</h4>
              <p className="text-xs text-gray-600 dark:text-gray-500">Full-Stack & ML</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;