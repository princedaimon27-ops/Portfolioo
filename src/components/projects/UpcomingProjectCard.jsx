import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock } from 'lucide-react';
import Badge from '../ui/Badge';

const UpcomingProjectCard = ({
  index = 0,
  title = 'Performance Marketing & SEO Case Study',
  category = 'Case Study in Progress',
  tools = ['Analytics', 'Strategy', 'Creative', 'Growth'],
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative rounded-3xl bg-[#0A0A0A]/90 border border-dashed border-white/20 overflow-hidden backdrop-blur-xl hover:border-[#FF6B1A]/40 transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.6)] flex flex-col justify-between h-full"
    >
      <div className="flex flex-col flex-1">
        {/* Placeholder Thumbnail Container matching ProjectCard height */}
        <div className="relative w-full h-48 sm:h-52 md:h-56 bg-[#060608] border-b border-white/10 flex flex-col items-center justify-center p-4 text-center select-none">
          <div className="w-12 h-12 rounded-2xl bg-[#FF6B1A]/10 border border-[#FF6B1A]/30 flex items-center justify-center mb-2.5 text-[#FF6B1A] group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
            Project Slot #{index + 5}
          </p>
          <span className="text-[11px] text-gray-500 mt-0.5">Deliverables & metrics in review</span>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <div className="mb-2">
            <Badge
              variant="default"
              className="text-[11px] sm:text-xs font-semibold py-1 px-3 bg-white/5 border border-white/10 text-gray-400 tracking-wide"
            >
              {category}
            </Badge>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white/80 mb-2 leading-snug line-clamp-1">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3 line-clamp-2 sm:line-clamp-3">
            Compiling campaign performance trajectories, conversion rate data, and creative assets. Full breakdown dropping soon.
          </p>

          {/* Planned Tools Tags */}
          <div className="mt-auto pt-2 flex flex-wrap gap-1.5 mb-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-[11px] py-1 px-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-gray-500 font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-5 sm:p-6 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 mt-auto">
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <Clock className="w-3.5 h-3.5 text-[#FF6B1A]" />
          <span>Case Study in Production</span>
        </div>
        <span className="inline-flex items-center justify-center text-[11px] font-semibold tracking-wider uppercase text-[#FF6B1A] bg-[#FF6B1A]/10 px-3 py-1.5 rounded-full border border-[#FF6B1A]/20">
          Coming Soon
        </span>
      </div>
    </motion.div>
  );
};

export default UpcomingProjectCard;
