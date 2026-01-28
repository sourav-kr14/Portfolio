import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi"; // Added Sun and Moon icons

const navMenus = [
  { name: "Home", link: "#home", id: "home" },
  { name: "About", link: "#about", id: "about" },
  { name: "Skills", link: "#skills", id: "skills" },
  { name: "Projects", link: "#projects", id: "projects" },
  { name: "Experience", link: "#experience", id: "experience" },
  { name: "Contact", link: "#contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  -useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDark) {
      // console.log("Switching to DARK mode");
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      // console.log("Switching to LIGHT mode");
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // console.log("Current HTML classes:", root.className);
  }, [isDark]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-4 sm:px-0 sm:pt-0">
      <div
        className={`mx-auto transition-all duration-300 rounded-2xl sm:rounded-none ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-gray-100 dark:border-slate-800 shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6 md:w-[85%] flex items-center justify-between">
          {/* 1. LOGO */}
          <a
            href="#home"
            className="text-2xl font-black text-gray-900 dark:text-white flex items-center"
          >
            Sourav<span className="text-indigo-600">.</span>
          </a>

          {/* 2. DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-2">
            {navMenus.map((item) => (
              <li
                key={item.id}
                className="relative"
              >
                <a
                  href={item.link}
                  onClick={() => setActive(item.id)}
                  className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 relative z-10 ${
                    active === item.id
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
                {active === item.id && (
                  <motion.div
                    layoutId="activeNav" // Framer Motion uses this ID to "slide" the pill
                    className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/40 rounded-xl -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* DARK MODE BUTTON */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-yellow-400 transition-all active:scale-90"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                <FiSun className="text-xl" />
              ) : (
                <FiMoon className="text-xl" />
              )}
            </button>

            {/* 3. CONTACT BUTTON */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-95"
              >
                Let's Talk
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-2xl text-gray-800 dark:text-white"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-gray-100 dark:border-slate-800 shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-2">
              {navMenus.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-xl text-lg font-bold transition-all ${
                      active === item.id
                        ? "bg-indigo-600 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
