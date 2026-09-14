import React from 'react';
import { motion } from 'framer-motion';
import {
  Share2,
  Search,
  FileText,
  Target,
  Mail,
  BarChart3,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { expertiseData } from '../../data/expertise';
import Button from '../ui/Button';

const iconMap = {
  Share2,
  Search,
  FileText,
  Target,
  Mail,
  BarChart3,
  Sparkles,
};

const Expertise = ({ showAll = false }) => {
  const displayItems = showAll ? expertiseData : expertiseData.slice(0, 6);

  return (
    <section id="expertise" className="py-28 bg-[#0A0A0A] relative overflow-hidden border-t border-white/10">
      {/* Top Glowing Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B1A]/40 to-transparent" />
      
      {/* Soft Background Radial Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF6B1A]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="02 // CORE COMPETENCIES"
          title="What I do"
          subtitle="Comprehensive digital marketing capabilities designed to drive audience engagement, authority, and measurable revenue growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Share2;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard hoverGlow hoverLift className="h-full flex flex-col justify-between group">
                  <div>
                    {/* Icon Header */}
                    <div className="w-12 h-12 rounded-xl bg-[#FF6B1A]/10 border border-[#FF6B1A]/20 flex items-center justify-center text-[#FF6B1A] mb-6 group-hover:scale-110 group-hover:bg-[#FF6B1A] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,107,26,0.2)]">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF6B1A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <Button to="/expertise" variant="secondary" size="md" icon={ArrowRight}>
              Explore All 7 Marketing Pillars
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Expertise;
