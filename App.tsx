
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Manifesto from './components/Manifesto';
import Selection from './components/Selection';
import Gallery from './components/Gallery';
import ScrollRunner from './components/ScrollRunner';

const phrases = [
  "A decentralized pop-up city",
  "Built under the concept of WAMO",
  "A temporary autonomous zone",
  "Prototyping another reality",
  "A living protocol for community",
  "An experiment in collective life"
];

const App: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#14B8A6] text-[#042F2E] selection:bg-[#9FFF79] selection:text-[#042F2E]">
      <Navigation />
      
      <main className="relative">
        <Hero />
        
        {/* Vision Statement Section (Section 01) */}
        <section id="vision" className="relative py-40 px-8 md:px-16 bg-[#14B8A6] overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center gap-6 mb-20 opacity-30">
              <p className="font-display font-black text-[9px] uppercase tracking-[0.8em]">The Vision / 01</p>
            </div>
            
            <div className="flex items-start relative min-h-[300px] md:min-h-[400px]">
              {phrases.map((phrase, index) => (
                <h2 
                  key={index}
                  className={`font-serif italic text-4xl md:text-8xl lg:text-9xl leading-[1.05] tracking-tight text-[#042F2E] absolute top-0 left-0 transition-all duration-1000 ${
                    index === currentPhrase 
                      ? 'opacity-100 translate-y-0 blur-0' 
                      : 'opacity-0 translate-y-8 blur-sm pointer-events-none'
                  }`}
                >
                  “{phrase}.”
                </h2>
              ))}
            </div>
          </div>
        </section>

        {/* Transition: Pac-Cat Runner inserted exactly between Vision and Manifesto */}
        <ScrollRunner />

        {/* Manifesto Section (Section 02: The Question) */}
        <Manifesto />

        {/* Massive JOIN Artifact Header */}
        <section className="pt-60 pb-0 bg-[#14B8A6]">
          <div className="text-center group cursor-default">
             <h2 className="artifact-title text-[28vw] leading-[0.7] select-none text-[#9FFF79] transition-all duration-1000 group-hover:tracking-tighter inline-block relative">
               JOIN
             </h2>
          </div>
        </section>

        <Gallery />
        <Selection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
