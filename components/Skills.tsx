
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl font-bold text-white text-center mb-2">
        My Tech Stack & Skills
      </h2>
      <div className="w-24 h-1 bg-teal-500 mx-auto mb-12"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="bg-slate-800 p-6 rounded-lg flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-slate-700/50 hover:scale-105 border border-slate-700 hover:border-teal-500"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
