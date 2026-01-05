
import React, { useState, useEffect, useRef } from 'react';
import { IconContainer } from './IconContainer';

const milestones = [
  { id: 0, label: "Gathering Camps" },
  { id: 1, label: "Calling Wamians" },
  { id: 2, label: "Set up venue" },
  { id: 3, label: "Opening Ceremony" },
  { id: 4, label: "Co-living Exp" },
  { id: 5, label: "Closing Ceremony" }
];

const ScrollRunner: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScrollArea = windowHeight + rect.height;
      const currentScroll = windowHeight - rect.top;
      
      const rawProgress = currentScroll / totalScrollArea;
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);
      
      setProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full pt-12 pb-48 md:pt-20 md:pb-64 px-4 md:px-16 bg-[#14B8A6] overflow-hidden"
    >
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img 
          src="https://github.com/Uacer/Wamo/blob/main/Gemini_Generated_Image_rrz4hjrrz4hjrrz4.png?raw=true" 
          alt="Timeline Background"
          className="w-full h-full object-cover grayscale opacity-40 contrast-[1.1] mix-blend-overlay scale-110"
        />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#14B8A6] to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#14B8A6] to-transparent z-10" />
        <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(circle at center, transparent 20%, rgba(20, 184, 166, 0.85) 100%)' }} />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
        <div className="mb-20 md:mb-24 text-center">
          <h3 className="font-display text-[10px] md:text-xs font-black text-[#042F2E] italic tracking-[0.5em] uppercase opacity-60">
            BUILDING WAMOTOPIA
          </h3>
        </div>

        <div className="w-full relative h-40 flex items-center">
          {/* Main Track Line */}
          <div className="absolute w-full h-[1px] bg-[#042F2E]/10 top-1/2 -translate-y-1/2" />
          
          <div className="absolute w-full h-full flex justify-between items-center px-1 pointer-events-none">
            {milestones.map((m, i) => {
              const mProgress = i / (milestones.length - 1);
              const isEaten = progress > mProgress;
              
              return (
                <div key={m.id} className="relative flex flex-col items-center flex-1">
                  {/* The Dot */}
                  <div 
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 shadow-sm z-20 ${
                      isEaten 
                        ? 'scale-0 opacity-0 translate-y-4' 
                        : 'bg-[#042F2E]/40'
                    }`}
                  />
                  
                  {/* The Stage Label - Added vertical staggering for mobile */}
                  <div className={`absolute w-16 md:w-auto text-center transition-all duration-700 ${
                    isEaten ? 'opacity-100' : 'opacity-30'
                  } ${
                    // Mobile staggering: even items go up, odd go down to prevent collision
                    i % 2 === 0 
                      ? 'top-8 md:top-12 translate-y-0' 
                      : 'bottom-24 md:top-12 md:bottom-auto translate-y-0 md:translate-y-0'
                  }`}>
                    <span className="font-display text-[8px] md:text-[11px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-[#042F2E] drop-shadow-sm block leading-tight">
                      {m.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pac-Cat Runner */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 will-change-[left] z-30"
            style={{ 
              left: `${progress * 100}%`, 
              transform: `translate(-50%, -50%)` 
            }}
          >
            <div className="relative scale-125 md:scale-[2.5]">
              <div className="animate-chomp drop-shadow-[0_0_20px_rgba(159,255,121,0.8)]">
                <IconContainer size="56px" color="#9FFF79" className="rotate-[12deg]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollRunner;
