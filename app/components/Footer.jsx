import React from 'react';
import Logo from './Logo';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border-t border-[#33353F] border-l-transparent border-r-transparent bg-[#121212] text-white">
      <div className="container p-12 flex flex-col md:flex-row justify-between items-center gap-8">

        <Logo />

        <div className="flex gap-10 items-center">
          <a 
            href="https://linkedin.com/in/katia-berbery-03b9b1219/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-400 transition-all duration-300 text-4xl hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/katiabrb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-all duration-300 text-4xl hover:-translate-y-1"
          >
            <FaGithub />
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <p className="text-white/80 text-sm font-light">
            &copy; {currentYear} All rights reserved.
          </p>
          <p className="text-blue-400 text-[10px] uppercase tracking-[0.3em] mt-1 font-bold">
            Full Stack Developer
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
