import React from 'react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-32 px-6 bg-[#14B8A6] relative">
      <div className="container mx-auto grid md:grid-cols-2 gap-20 items-start">
        <div className="sticky top-32">
          <div className="mb-12 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#9FFF79] rounded-lg flex items-center justify-center p-2 shadow-[0_0_20px_rgba(159,255,121,0.3)]">
               <svg viewBox="0 0 100 100" className="w-full h-full text-[#042F2E] fill-current">
                 <path d="M20 30 L40 10 L50 25 L60 10 L80 30 L85 50 L75 70 L50 85 L25 70 L15 50 Z" />
               </svg>
            </div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#042F2E]/30">The Concept / 01</h2>
          </div>
          <div className="space-y-12">
            <h3 className="font-display text-4xl md:text-7xl font-black leading-none tracking-tighter uppercase text-[#042F2E]">
              A city that <br />
              <span className="text-[#9FFF79]">breathes</span>
            </h3>
            <p className="text-[#042F2E]/60 text-lg leading-relaxed max-w-md">
              Dozens of small, self-organized spaces appear across Chiang Mai: 
              apartments, rooftops, and secret gardens.
            </p>
          </div>
        </div>

        <div className="space-y-24 pt-12 md:pt-48">
          <div className="bg-[#042F2E]/5 p-12 rounded-3xl border border-[#042F2E]/10 hover:border-[#9FFF79]/50 transition-all duration-700 group">
            <div className="w-16 h-16 mb-8 border border-[#042F2E]/10 rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-1000">
               <svg viewBox="0 0 100 100" className="w-10 h-10 text-[#9FFF79] fill-none stroke-current stroke-2">
                 <circle cx="50" cy="50" r="40" strokeDasharray="10 5" />
                 <circle cx="50" cy="50" r="25" />
               </svg>
            </div>
            <p className="text-2xl font-light leading-relaxed mb-6 text-[#042F2E]">
              Each becomes a <span className="text-[#9FFF79] font-medium">Wamo-camp (“Waca”)</span> with its own story and rituals.
            </p>
          </div>

          <div className="space-y-12">
            {[
              { id: '01', title: 'Community co-creation', body: 'Every camp designs its own vibe and programming.' },
              { id: '02', title: 'Low-barrier gatherings', body: 'From intimate circles to late-night jam sessions.' },
              { id: '03', title: 'Positive externalities', body: 'People leave more connected and inspired.' }
            ].map((item) => (
              <div key={item.id} className="flex items-start gap-8 border-b border-[#042F2E]/10 pb-12">
                <span className="font-display text-[#9FFF79] font-black text-2xl">{item.id}</span>
                <div>
                  <h4 className="font-display font-bold uppercase tracking-tight text-xl mb-2 text-[#042F2E]">{item.title}</h4>
                  <p className="text-[#042F2E]/40 leading-relaxed text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;