
import React from 'react';

const Selection: React.FC = () => {
  return (
    <section id="join" className="relative py-60 px-6 bg-[#14B8A6] border-t border-[#042F2E]/5 overflow-hidden">
      {/* BACKGROUND IMAGE LAYER WITH SOFT EDGES */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img 
          src="https://github.com/Uacer/Wamo/blob/main/Gemini_Generated_Image_y3oedsy3oedsy3oe.png?raw=true" 
          alt="Admissions Background"
          className="w-full h-full object-cover grayscale opacity-40 brightness-110 contrast-[1.1] mix-blend-overlay scale-110"
        />
        
        {/* Soft Boundary Blurs (Feathering the edges) */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#14B8A6] to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#14B8A6] to-transparent z-10" />

        {/* Artifact-style Radial Vignette */}
        <div 
          className="absolute inset-0 z-10" 
          style={{ 
            background: 'radial-gradient(circle at center, transparent 20%, rgba(20, 184, 166, 0.8) 100%)' 
          }}
        />
      </div>

      <div className="container mx-auto flex flex-col items-center text-center relative z-10">
        <div className="max-w-4xl mb-32">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#042F2E]/40 mb-12">Admissions / 04</h2>
          <h3 className="font-display text-5xl md:text-8xl mb-8 leading-[0.9] font-black uppercase tracking-tighter text-[#042F2E] select-none">
            Host a space, <br />
            <span className="text-[#9FFF79] italic font-serif">not just a seat.</span>
          </h3>
        </div>

        <div className="mt-12">
            <a 
              href="https://wamochiangmai.notion.site/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-block px-16 py-8 bg-[#042F2E] text-[#9FFF79] rounded-full font-display font-black uppercase text-[11px] tracking-[0.5em] transition-all duration-500 hover:scale-105 hover:bg-[#9FFF79] hover:text-[#042F2E] overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                Apply for 2026
              </span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Selection;
