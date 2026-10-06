import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import SkillsCarousel from '../skills/SkillsCarousel';

const Skills = ({ duration = 30, gap = '1.25rem', tools }) => {
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

        <div className="mt-10">
          <SkillsCarousel duration={duration} gap={gap} tools={tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;

