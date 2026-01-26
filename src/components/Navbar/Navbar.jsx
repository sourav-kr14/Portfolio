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

  // scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
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

  // close mobile menu on scroll
  useEffect(() => {
    const closeOnScroll = () => setOpen(false);
    window.addEventListener("scroll", closeOnScroll);
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-white/70 backdrop-blur-xl border-b border-white/30">
        <div className="container mx-auto px-6 md:w-[85%] h-20 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#home"
            className="text-xl font-extrabold text-gray-900 tracking-wide"
          >
            Sourav
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8">
            {navMenus.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={item.link}
                  className={`py-2 font-medium transition ${
                    active === item.id
                      ? "text-indigo-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </a>

                {/* active underline */}
                {active === item.id && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-indigo-500" />
                )}
              </li>
            ))}
          </ul>

          {/* MOBILE ICON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-gray-800"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/80 backdrop-blur-xl border-b border-white/30 shadow-md"
          >
            <ul className="flex flex-col items-center gap-6 py-6">
              {navMenus.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-semibold transition ${
                      active === item.id
                        ? "text-indigo-600"
                        : "text-gray-700"
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
