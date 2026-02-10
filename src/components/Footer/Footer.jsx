import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative bg-white overflow-hidden">
      <div className="border-t border-white/30 backdrop-blur-xl bg-white/60">
        <div className="container mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* LEFT */}
          <p className="text-sm text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-800">
              Sourav Kumar
            </span>
            . All rights reserved.
          </p>

          {/* CENTER */}
          <p className="text-sm text-gray-500 text-center">
            Built with React • Tailwind CSS • Framer Motion
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:souravkr93@gmail.com"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              <FiMail className="text-lg" />
            </a>
            <a
              href="https://github.com/sourav-kr14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              <FiGithub className="text-lg" />
            </a>
            <a
              href="https://linkedin.com/in/thesouravv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              <FiLinkedin className="text-lg" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
