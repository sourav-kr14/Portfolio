import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    navMenus.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-4 sm:px-0 sm:pt-0">
      <div 
        className={`mx-auto transition-all duration-300 rounded-2xl sm:rounded-none ${
          isScrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-md py-2" 
          : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6 md:w-[85%] flex items-center justify-between">

          {/* 1. LOGO (FAR LEFT) */}
          <a
            href="#home"
            className="text-2xl font-black text-gray-900  flex items-center"
          >
            Sourav<span className="text-indigo-600">.</span>
          </a>

          {/* 2. DESKTOP MENU (CENTER) */}
          <ul className="hidden md:flex items-center gap-2">
            {navMenus.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={item.link}
                  className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 relative z-10 ${
                    active === item.id ? "text-indigo-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </a>
                {active === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-indigo-50 rounded-xl -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* 3. CONTACT BUTTON (FAR RIGHT) */}
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
            className="md:hidden p-2 rounded-lg bg-gray-100 text-2xl text-gray-800"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 bg-white/95 backdrop-blur-2xl rounded-2xl border border-gray-100 shadow-2xl overflow-hidden"
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
                        : "text-gray-700 hover:bg-gray-100"
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