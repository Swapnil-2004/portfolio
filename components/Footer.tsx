
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto py-6 px-6 md:px-12 lg:px-24 text-center text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Swapnil Chakraborty. All Rights Reserved.
        </p>
        <p className="text-sm mt-2">
          Designed and Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
