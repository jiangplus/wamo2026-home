
import React from 'react';

const TextContent: React.FC = () => {
  return (
    <section className="bg-[#F2B000] text-[#1A1A1A] py-12 md:py-24 px-6 overflow-hidden">
      <div className="max-w-xl mx-auto space-y-16 text-center">
        
        {/* Intro */}
        <div className="space-y-8">
          <p className="text-lg md:text-2xl font-medium leading-relaxed tracking-tight">
            WamoTopia is <span className="italic font-serif">not</span> a conference or a single event.
          </p>
          <p className="text-lg md:text-2xl font-medium leading-relaxed tracking-tight">
            It is a temporary city of camps — a living protocol for how we might relate differently.
          </p>
        </div>

        {/* The Why */}
        <div className="space-y-8 opacity-80">
          <p className="text-sm md:text-base leading-relaxed">
            For two weeks in Chiang Mai, dozens of small, self-organized spaces appear across the city: 
            apartments, cafés, rooftops, studios, villas.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Each becomes a Wamo-camp (“Waca”) with its own story, rituals, and gatherings. 
            Together they form one connected map and timeline.
          </p>
        </div>

        {/* The Core Question - Massive Type */}
        <div className="py-24 space-y-12">
          <h2 className="font-serif italic text-3xl md:text-6xl leading-[1.1] tracking-tight">
            “What happens if we rebuild reality from the bottom up, camp by camp, person by person?”
          </h2>
        </div>

        {/* Philosophy Blocks */}
        <div className="space-y-12 text-left pt-12">
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase font-black tracking-[0.4em] opacity-40">The Vision</h4>
            <ul className="space-y-4 text-sm md:text-base font-medium">
              <li>Community co-creation – every camp designs its own vibe.</li>
              <li>Open, low-barrier gatherings – from circles to jam sessions.</li>
              <li>Experiments in how we live – beyond tickets and stages.</li>
              <li>Positive externalities – people leave inspired.</li>
            </ul>
          </div>

          <div className="space-y-6 pt-12 border-t border-[#1A1A1A]/10">
            <h4 className="text-[10px] uppercase font-black tracking-[0.4em] opacity-40">Why Chiang Mai?</h4>
            <p className="text-sm md:text-base font-medium leading-relaxed">
              A global hub for digital nomads, builders, and artists. Walkable neighborhoods, cozy cafés, and soft January weather. A city where local and international cultures already mix.
            </p>
          </div>

          <div className="space-y-6 pt-12 border-t border-[#1A1A1A]/10">
            <h4 className="text-[10px] uppercase font-black tracking-[0.4em] opacity-40">Admissions</h4>
            <div className="grid md:grid-cols-2 gap-8 text-xs font-medium uppercase tracking-wider">
               <div className="space-y-2">
                 <p className="font-black">Great Fits</p>
                 <p className="opacity-60 leading-relaxed">Web3 / AI / crypto / makers / hackers / artists / university groups.</p>
               </div>
               <div className="space-y-2">
                 <p className="font-black opacity-40">Not a Fit</p>
                 <p className="opacity-40 leading-relaxed">Extractive lead-gen / Billboard brands / Ignoring local context.</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TextContent;
