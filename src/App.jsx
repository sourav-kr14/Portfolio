import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Leadership from "./components/LeaderShip/Leadership";
import SectionDivider from "./components/common/SectionDivider";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Leadership />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Footer />
    </>
  );
}

export default App;
