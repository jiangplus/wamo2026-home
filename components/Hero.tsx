
import React, { useState, useEffect } from 'react';
import { IconContainer } from './IconContainer';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#14B8A6]">
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] transition-transform duration-1000 ease-out flex items-center justify-center bg-[#0D9488]"
          style={{ 
            transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`,
          }}
        >
          {/* 替换为 GitHub 上的高清图片 */}
          <img 
            src="https://github.com/Uacer/Wamo/blob/main/12451767028508_.pic_hd.jpg?raw=true" 
            alt="WamoTopia Background"
            className="w-full h-full object-cover grayscale opacity-50 brightness-110 contrast-[1.2] mix-blend-overlay select-none pointer-events-none scale-110 transition-opacity duration-1000"
            onDragStart={(e) => e.preventDefault()}
            onError={(e) => {
              console.warn("Background image failed to load. Please check connection or URL.");
              (e.target as HTMLImageElement).style.opacity = '0';
            }}
          />
          
          {/* Artifact-like Radial Gradient Overlay */}
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'radial-gradient(circle at center, transparent 10%, rgba(20, 184, 166, 0.7) 100%)' 
            }}
          />
        </div>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full px-4 text-center group">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] opacity-0 group-hover:opacity-5 transition-all duration-1000 pointer-events-none rotate-45 group-hover:rotate-0 scale-150 group-hover:scale-100">
           <IconContainer size="100%" color="#9FFF79" />
        </div>
        
        <h1 className="artifact-title select-none animate-reveal-up flex flex-col leading-[0.75] text-[#042F2E] drop-shadow-sm">
          <span className="relative">WAMO</span>
          <span className="text-[#9FFF79]">TOPIA</span>
        </h1>
      </div>

      {/* Bottom Info Blocks */}
      <div className="absolute bottom-16 left-8 md:left-16 flex flex-col gap-2 font-display text-[10px] uppercase font-black tracking-[0.5em] text-[#042F2E] z-20">
        <div className="flex items-center gap-3">
           <IconContainer size="12px" color="#042F2E" className="opacity-40" />
           <span className="opacity-50">Chiang Mai, Thailand</span>
        </div>
        <div className="flex items-center gap-3">
           <span className="w-10 h-[1px] bg-[#9FFF79]"></span>
           <span>2026.01.21 — 02.04</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 right-8 md:right-16 flex items-center gap-6 z-20 group cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span className="font-display text-[9px] uppercase font-black tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity hidden md:block">Initiate Scroll</span>
        <div className="animate-bounce">
          <IconContainer size="48px" color="#9FFF79" className="group-hover:scale-110 transition-transform">
             <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
               <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </IconContainer>
        </div>
      </div>
    </section>
  );
};

export default Hero;
