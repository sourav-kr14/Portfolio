import React, { Suspense, lazy } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SectionDivider from "./components/common/SectionDivider";
const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Leadership = lazy(() => import("./components/LeaderShip/Leadership"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-950 selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-400 transition-colors duration-500">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-indigo-600 z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />

        <About />
        <SectionDivider />
        <Suspense
          fallback={<div className="h-screen bg-white dark:bg-slate-950" />}
        >
          <Skills />
          <SectionDivider />

          <Projects />
          <SectionDivider />

          <Experience />
          <SectionDivider />

          <Leadership />
          <SectionDivider />

          <Contact />
        </Suspense>
      </main>
      <div className="pb-10 dark:bg-slate-950" />
    </div>
  );
}

export default App;
