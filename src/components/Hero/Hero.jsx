import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-white pt-28 pb-20 overflow-hidden"
    >
      {/* background glow */}
      <div className="hidden sm:block absolute top-[-120px] right-[-120px] w-96 h-96 bg-indigo-300 rounded-full blur-[140px] opacity-30" />

      <div className="relative container mx-auto px-6 md:w-[85%] grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-indigo-600 font-semibold mb-3">
            Hello, I’m
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Sourav Kumar
          </h1>

          <h2 className="text-xl sm:text-2xl text-gray-700 font-medium mb-6">
            Aspiring{" "}
            <span className="text-indigo-600 font-semibold">
              Software Developer
            </span>{" "}
            &{" "}
            <span className="text-indigo-600 font-semibold">
              Data Scientist
            </span>
          </h2>

          <p className="text-gray-600 max-w-xl leading-relaxed mb-8">
            MCA student at BIT Mesra focused on building scalable software
            systems and data-driven solutions through hands-on projects
            and industry experience.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="
                px-8 py-3 rounded-xl
                bg-indigo-600 text-white font-semibold
                shadow-lg hover:bg-indigo-700
                transition hover:scale-105
              "
            >
              View Projects
            </a>

            <a
              href="/Sourav_Kumar_Resume.pdf"
              download
              className="
                px-8 py-3 rounded-xl
                bg-white/60 backdrop-blur-md
                border border-white/30
                text-indigo-600 font-semibold
                hover:bg-white/80
                transition hover:scale-105
              "
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE WITH PREMIUM ANIMATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* rotating glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute -inset-6 rounded-full
                bg-gradient-to-r from-indigo-400 via-blue-200 to-blue-100
                opacity-40 blur-2xl
              "
            />

            {/* glass photo card */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="
                relative bg-white/60 backdrop-blur-xl
                p-4 rounded-3xl
                shadow-xl border border-white/30
              "
            >
              <img
                src="/profile.jpeg"
                alt="Sourav Kumar"
                loading="lazy"
                className="rounded-2xl w-64 sm:w-72"
              />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
