
import React from 'react';
import { EXPERIENCE } from '../constants';
import { ExperienceItem } from '../types';

const ExperienceCard: React.FC<{ item: ExperienceItem; isLeft: boolean }> = ({ item, isLeft }) => (
  <div className={`mb-8 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
    <div className="order-1 w-5/12"></div>
    <div className="z-20 flex items-center order-1 bg-teal-500 shadow-xl w-8 h-8 rounded-full">
      <h1 className="mx-auto font-semibold text-lg text-white"></h1>
    </div>
    <div className="order-1 bg-slate-800 border border-slate-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
      <p className="mb-2 text-sm text-teal-400 font-roboto-mono">{item.date}</p>
      <h3 className="mb-3 font-bold text-white text-xl">{item.title}</h3>
      <p className="text-sm leading-snug tracking-wide text-slate-400 text-opacity-100">
        {item.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="text-xs font-semibold inline-block py-1 px-2.5 rounded-full text-slate-300 bg-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-3xl font-bold text-white text-center mb-2">
        Hackathons & Events
      </h2>
      <div className="w-24 h-1 bg-teal-500 mx-auto mb-16"></div>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-slate-700 h-full border" style={{left: '50%'}}></div>
        {EXPERIENCE.map((item, index) => (
          <ExperienceCard key={index} item={item} isLeft={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
