
import React from 'react';
import { IconContainer } from './IconContainer';

interface Camp {
  name: string;
  description: string;
}

const Gallery: React.FC = () => {
  const camps: Camp[] = [
    {
      name: "706 技术人文营地",
      description: "706 技术人文营地是一场于 1 月 22 日至 27 日 举行的驻留式营地，在为期五天的连续节奏中，下午围绕 技术与判断、加速主义与冲击、亲密关系与算法、劳动与自动化，以及中国作为未来人类的一种范式 展开子论坛讨论，夜晚以社区开放讨论的形式延展问题，通过共同生活与持续对话，练习如何作为人生活在已经到来的未来之中。"
    },
    {
      name: "第三届数字游民大会·清迈游牧部落",
      description: "2026年1月30日-2月1日 \n 中国最大的数字游民 brand 活动，第三届落地清迈，将创造一个只存在72小时的200人户外“部落共居实验”，围绕科技、人文、身心三大部落，自然生发共居共创、艺术装置与深度对话的Pop-Up Tribe。"
    },
    {
      name: "乡建营地",
      description: "Generative art and physical soundscapes."
    },
    {
      name: "Nomad Kitchen",
      description: "Community-led farm-to-table dinners."
    }
  ];

  return (
    <section className="bg-[#14B8A6] pt-0 pb-60 px-8 md:px-16">
      {/* Centered Highlight Header - Text size increased to 13px */}
      <div className="flex justify-center items-center mb-24">
        <p className="font-display font-black text-[13px] uppercase tracking-[0.8em] text-[#9FFF79] select-none">
          Camps of 2026
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {camps.map((camp, i) => (
          <div key={i} className="flex flex-col group">
            {/* Artifact Container - No background, no borders */}
            <div className="aspect-[3/4] overflow-hidden mb-8 relative flex items-center justify-center [perspective:1000px]">
              
              {/* Rotating Logo Wrapper - 3D Y-Axis Flip */}
              <div className="w-40 h-40 relative z-10 transition-transform duration-1000 group-hover:scale-110 flex items-center justify-center [transform-style:preserve-3d]">
                <div className="w-full h-full animate-spin-y group-hover:[animation-duration:3s] flex items-center justify-center">
                  <IconContainer 
                    size="80%" 
                    color={i % 2 === 0 ? "#9FFF79" : "#042F2E"} 
                    className={i % 2 !== 0 ? "opacity-60" : ""}
                  />
                </div>
              </div>
              
              {/* Subtle Retro scanline effect overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <h4 className="font-display font-black text-xs uppercase tracking-[0.2em] text-[#042F2E]">
                <span className="text-[#9FFF79]">WACA /</span> {camp.name}
              </h4>
              <p className="text-[11px] uppercase tracking-widest text-[#042F2E]/50 leading-relaxed font-bold whitespace-pre-line">
                {camp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
