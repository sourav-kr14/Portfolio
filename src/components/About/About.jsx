import React from "react";
import "../../index.css";

const About = () => {
  return (
    <section id="about" className="bg-white py-10 sm:py-16">
      <div className="container mx-auto px-4 md:w-[85%]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left column */}
          <div className="relative text-slate-200 text-6xl font-bold text-center xl:text-8xl">
            ABOUT
            <h1 className="absolute top-1/2 left-1/2 text-slate-800 text-3xl md:text-4xl -translate-x-1/2 -translate-y-1/2">
              About Me
            </h1>
          </div>

          {/* Right column */}
          <div className="text-slate-700 text-lg space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo
              excepturi ullam doloribus! Cum quasi quas sint at quam odit,
              assumenda aliquid, quae ut vitae corrupti nihil.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laborum, ea!
            </p>
            <div className="pt-4 flex gap-4">
              <a href="/resume.pdf" download className="primary-btn">
                Download Resume
              </a>
              <a href="tel:+8210471902" className="outline-btn inline-block">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;