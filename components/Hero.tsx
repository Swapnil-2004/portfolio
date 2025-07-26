
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hi, I'm Swapnil Chakraborty
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-400">
              A B.Tech student at IEM Kolkata, passionate about development, technology, and management.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="bg-teal-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-teal-500/20"
              >
                Connect With Me
              </a>
              <a
                href="#experience"
                className="bg-slate-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-slate-600 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
             <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-teal-500 rounded-full blur-2xl opacity-30"></div>
                <img 
                    src="https://media.licdn.com/dms/image/v2/D4D35AQHEts9FmNUIMg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1737317292455?e=1754139600&v=beta&t=-HNm-kFCKQmCvSAk3D3TysxhGrs8_smwFOE2BVBxtSE" 
                    alt="Swapnil Chakraborty" 
                    className="relative w-full h-full object-cover rounded-full border-4 border-slate-700 shadow-2xl"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
