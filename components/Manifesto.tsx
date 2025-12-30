
import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-40 bg-[#14B8A6] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(159,255,121,0.05)_0%,rgba(0,0,0,0)_60%)]"></div>
      
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.5em] text-[#042F2E]/30 mb-20">The Question / 02</p>
        
        <blockquote className="max-w-5xl mx-auto mb-20">
          <h2 className="font-serif italic text-4xl md:text-7xl leading-[1.1] text-[#042F2E]">
            “What happens if we rebuild reality from the bottom up, <span className="text-[#9FFF79]">camp by camp</span>, person by person?”
          </h2>
        </blockquote>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto mt-32 text-left opacity-80">
          <div className="space-y-4">
             <div className="w-10 h-[1px] bg-[#9FFF79]"></div>
             <p className="text-sm text-[#042F2E]/60 leading-relaxed">Algorithms mediate our attention, leaving us fragmented.</p>
          </div>
          <div className="space-y-4">
             <div className="w-10 h-[1px] bg-[#9FFF79]"></div>
             <p className="text-sm text-[#042F2E]/60 leading-relaxed">Institutions feel slow and distant from our daily lives.</p>
          </div>
          <div className="space-y-4">
             <div className="w-10 h-[1px] bg-[#9FFF79]"></div>
             <p className="text-sm text-[#042F2E]/60 leading-relaxed">Isolation is the default. We choose to prototype another mode.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
