import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center font-mono tracking-tighter cursor-pointer group">
      <span className="text-blue-500 text-2xl md:text-3xl font-bold opacity-80 group-hover:opacity-100 transition-opacity">
        {"<"}
      </span>
    
      <span className="text-3xl md:text-4xl font-extrabold px-1 bg-linear-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">
        K
      </span>
      <span className="text-cyan-400 text-2xl md:text-3xl font-bold opacity-80 group-hover:opacity-100 transition-opacity">
        {" />"}
      </span>
    </div>
  );
};

export default Logo;
