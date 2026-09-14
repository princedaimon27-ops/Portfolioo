import React from 'react';
import { motion } from 'framer-motion';
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
import SectionHeading from '../ui/SectionHeading';
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

const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-[#0A0A0A] relative overflow-hidden border-t border-white/10">
      {/* Top Glowing Section Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B1A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="04 // TECH STACK & MARKETING TOOLS"
          title="Tools I work with"
          subtitle="Modern platforms, analytical engines, and creative software powering scalable digital marketing workflows."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {toolsData.map((tool, idx) => {
            const IconComp = iconMap[tool.icon] || Cpu;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                whileHover={{ y: -6 }}
                className="group p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#FF6B1A]/50 hover:shadow-[0_0_20px_rgba(255,107,26,0.2)]"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#FF6B1A]/15 text-gray-300 group-hover:text-[#FF6B1A] flex items-center justify-center mb-3 transition-colors">
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#FF6B1A] transition-colors">
                  {tool.name}
                </h4>
                <span className="text-[11px] text-gray-500 mt-1">
                  {tool.category}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
