
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold text-white text-center mb-2">
        About Me
      </h2>
      <div className="w-24 h-1 bg-teal-500 mx-auto mb-12"></div>
      <div className="max-w-4xl mx-auto text-center text-lg text-slate-400 leading-relaxed">
        <p>
          I'm Swapnil Chakraborty, a dedicated and curious B.Tech student at the Institute of Engineering & Management, Kolkata. My journey in technology is driven by a passion for problem-solving and a desire to build things that make a difference.
        </p>
        <p className="mt-4">
          With a strong foundation in languages like <span className="text-teal-400 font-medium">Java, Python, and C</span>, I enjoy diving into complex challenges and turning ideas into reality. Beyond coding, I have a keen interest in <span className="text-teal-400 font-medium">management</span>, which helps me approach projects with a strategic mindset, focusing on both the technical details and the bigger picture. I'm always eager to learn, connect, and collaborate on exciting new ventures.
        </p>
      </div>
    </section>
  );
};

export default About;
