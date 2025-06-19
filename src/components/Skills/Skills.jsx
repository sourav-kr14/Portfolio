import React from "react";
import "../../index.css";
import SkillLevel from "./SkillLevel";

const Skills = () => {
  const skills = [
    { skillName: "HTML", percentage: "90" },
    { skillName: "CSS", percentage: "80" },
    { skillName: "JavaScript", percentage: "85" },
    { skillName: "React", percentage: "75" },
    { skillName: "Node.js", percentage: "70" },
     { skillName: "Python", percentage: "70" },
  ];

  return (
    <section id="about" className="bg-white py-10 sm:py-16">
      <div className="container mx-auto px-4 md:w-[85%]">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Skill list */}
          <div className="text-black text-lg space-y-4">
            {skills.map((skill, index) => (
              <SkillLevel
                key={index}
                skillName={skill.skillName}
                percentage={skill.percentage}
              />
              
            ))}
          </div>

          {/* Heading */}
          <div className="relative text-slate-200 text-6xl font-bold text-center xl:text-8xl tracking-wide">
            Skills
            <h1 className="absolute top-1/2 left-1/2 text-slate-800 text-3xl md:text-4xl -translate-x-1/2 -translate-y-1/2">
              Skills
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;