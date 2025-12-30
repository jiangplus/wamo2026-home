
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14B8A6] text-[#042F2E] pt-20 pb-20 px-8 md:px-16 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        {/* Removed the call-to-action and social links section as requested */}
        
        <div className="pt-16 border-t border-[#042F2E]/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.6em] opacity-30 font-display font-black">
          <span>WAMOTOPIA 2026</span>
          <span>PROTOTYPE ANOTHER CIVILIZATIONAL OPERATION</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
