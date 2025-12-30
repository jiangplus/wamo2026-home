
import React from 'react';
// Fix: Changed IconContainer import to a named import to match the named export in IconContainer.tsx.
import { IconContainer } from './IconContainer';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-10 px-8 md:px-16 flex justify-between items-center text-[#042F2E] font-display font-black uppercase text-[10px] tracking-[0.4em]">
      <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="w-6 h-6 transition-all">
          <IconContainer size="24px" color="#9FFF79" />
        </div>
        <span className="mt-1 transition-all duration-300 group-hover:tracking-[0.6em]">WAMOTOPIA</span>
      </div>
      
      <div className="flex gap-12 items-center">
        <a 
          href="https://wamochiangmai.notion.site/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="opacity-40 hover:opacity-100 transition-all duration-300 relative group"
        >
          Dashboard
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#9FFF79] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#join" className="opacity-40 hover:opacity-100 transition-all duration-300 relative group">
          Join
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#9FFF79] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
