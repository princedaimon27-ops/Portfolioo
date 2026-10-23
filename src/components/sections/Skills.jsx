import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import SkillsCarousel from '../skills/SkillsCarousel';

const Skills = ({ duration = 30, gap = '1.25rem', tools, className = '' }) => {
  return (
    <section
      id="skills"
      className={`scroll-mt-24 md:scroll-mt-28 relative overflow-hidden ${
        className ? className : 'py-12 md:py-16 bg-[#0A0A0A] border-t border-white/10'
      }`}
    >
      {/* Top Glowing Section Divider Line */}
      {!className?.includes('border-t-0') && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B1A]/40 to-transparent" />
      )}

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Tools I work with"
          subtitle="Modern platforms, analytical engines, and creative software powering scalable digital marketing workflows."
        />

        <div className="mt-6 md:mt-8">
          <SkillsCarousel duration={duration} gap={gap} tools={tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
