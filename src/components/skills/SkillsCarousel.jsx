import React from 'react';
import {
  Palette,
  Layout,
  PenTool,
  Globe,
  Layers,
  LineChart,
  Search,
  Mail,
  Zap,
  Video,
  Sparkles,
  Cpu,
} from 'lucide-react';
import { toolsData } from '../../data/tools';

const iconMap = {
  Palette,
  Figma: Layout,
  PenTool,
  Globe,
  Layers,
  LineChart,
  Search,
  Mail,
  Zap,
  Video,
  Sparkles,
  Cpu,
};

const ToolCard = ({ tool, isDuplicate = false }) => {
  const IconComp = iconMap[tool.icon] || Cpu;

  return (
    <div
      tabIndex={isDuplicate ? -1 : 0}
      role="listitem"
      aria-hidden={isDuplicate ? 'true' : undefined}
      className="group relative shrink-0 w-44 sm:w-52 p-5 sm:p-6 rounded-3xl bg-[#0A0A0A]/90 border border-white/15 backdrop-blur-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#FF6B1A]/50 hover:shadow-[0_0_25px_rgba(255,107,26,0.2)] hover:-translate-y-1 shadow-[0_0_20px_rgba(0,0,0,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B1A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] select-none cursor-default overflow-hidden"
    >
      {/* Subtle Corner Glow */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#FF6B1A]/10 blur-xl pointer-events-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#FF6B1A]/30 group-hover:bg-[#FF6B1A]/15 text-gray-300 group-hover:text-[#FF6B1A] flex items-center justify-center mb-3 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.4)]">
        <IconComp className="w-5 h-5" />
      </div>
      <h4 className="text-sm font-bold text-white group-hover:text-[#FF6B1A] transition-colors truncate max-w-full px-1">
        {tool.name}
      </h4>
      <span className="text-[11px] text-gray-400 group-hover:text-gray-300 mt-1 transition-colors truncate max-w-full px-1">
        {tool.category}
      </span>
    </div>
  );
};

const SkillsCarousel = ({
  tools = toolsData,
  duration = 30,
  gap = '1.25rem',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`skills-carousel-container relative w-full overflow-hidden py-4 marquee-mask ${className}`}
      style={{
        '--marquee-duration': `${duration}s`,
        '--marquee-gap': gap,
        ...style,
      }}
      aria-label="Tools and technologies carousel"
    >
      {/* Soft Edge Gradient Overlays for smooth entry/exit */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"
        aria-hidden="true"
      />

      {/* Marquee Track (Seamless pure CSS loop) */}
      <div className="skills-carousel-track flex w-max">
        {/* Primary Set (Accessible to screen readers and keyboard users) */}
        <div
          role="list"
          className="flex shrink-0 items-center"
          style={{
            gap: 'var(--marquee-gap, 1.25rem)',
            paddingRight: 'var(--marquee-gap, 1.25rem)',
          }}
        >
          {tools.map((tool) => (
            <ToolCard key={`tool-primary-${tool.name}`} tool={tool} />
          ))}
        </div>

        {/* Duplicate Set (Aria-hidden for seamless loop transition) */}
        <div
          role="presentation"
          aria-hidden="true"
          className="flex shrink-0 items-center"
          style={{
            gap: 'var(--marquee-gap, 1.25rem)',
            paddingRight: 'var(--marquee-gap, 1.25rem)',
          }}
        >
          {tools.map((tool) => (
            <ToolCard
              key={`tool-duplicate-${tool.name}`}
              tool={tool}
              isDuplicate
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;
