
import React from 'react';

const Context: React.FC = () => {
  const reasons = [
    { title: "Global Hub", desc: "Digital nomads, builders, and artists already call it home." },
    { title: "Hackable Places", desc: "Walkable neighborhoods with countless third places and cozy cafés." },
    { title: "Soft January", desc: "Cool nights and gentle days — the perfect climate for gatherings." },
    { title: "Cross-Pollination", desc: "Where local and international cultures mix naturally." },
  ];

  return (
    <section id="context" className="py-40 px-6 bg-[#14B8A6]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-baseline gap-8 mb-24">
          <h2 className="font-display text-5xl md:text-7xl tracking-tighter text-[#042F2E]">WHY <span className="font-serif italic text-[#9FFF79]">Chiang Mai?</span></h2>
          <div className="h-[1px] flex-grow bg-[#042F2E]/10 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="group p-8 border border-[#042F2E]/10 bg-[#042F2E]/5 hover:bg-[#9FFF79]/10 transition-all duration-500 rounded-xl">
              <h4 className="font-display text-sm uppercase tracking-widest text-[#9FFF79] mb-4">{r.title}</h4>
              <p className="text-[#042F2E]/50 text-sm leading-relaxed group-hover:text-[#042F2E]/80 transition-colors">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-40 grid md:grid-cols-2 gap-20 items-center">
          <div className="aspect-[4/3] bg-[#042F2E]/5 rounded-2xl overflow-hidden relative group">
             <img src="https://picsum.photos/seed/chiangmai/1200/900" alt="Chiang Mai" className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#14B8A6] to-transparent"></div>
             <div className="absolute bottom-8 left-8">
               <span className="text-[10px] uppercase tracking-widest text-[#042F2E]/60">Location / Chiang Mai</span>
             </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="font-display text-3xl leading-snug text-[#042F2E]">
              WamoTopia is our yearly attempt to prototype another mode of <span className="text-[#9FFF79]">civilizational operation</span> —
            </h3>
            <p className="text-[#042F2E]/50 text-lg">
              Not on slides, but on actual streets, for just long enough to feel like a new kind of home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Context;
