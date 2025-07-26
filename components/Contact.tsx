
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <h2 className="text-3xl font-bold text-white text-center mb-2">
        Get In Touch
      </h2>
      <div className="w-24 h-1 bg-teal-500 mx-auto mb-12"></div>
      <p className="text-center text-lg max-w-2xl mx-auto text-slate-400 mb-12">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.
      </p>
      <div className="flex justify-center items-center gap-8">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-slate-400 hover:text-teal-400 transition-transform duration-300 hover:scale-110"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
