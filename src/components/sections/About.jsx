import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, GraduationCap } from 'lucide-react';

const aboutPoints = [
  {
    num: '01',
    icon: Code2,
    title: 'What I Do',
    desc: 'I develop data-driven digital marketing campaigns, SEO architectures, and compelling content strategies that turn organic discovery and paid media into measurable customer acquisition and brand growth.',
  },
  {
    num: '02',
    icon: Lightbulb,
    title: 'How I Think',
    desc: 'I focus on clear audience psychology, measurable conversion loops, and solving real business problems rather than chasing vanity metrics.',
  },
  {
    num: '03',
    icon: GraduationCap,
    title: 'Always Learning',
    desc: 'Digital marketing evolves fast, so I stay curious—continuously picking up modern analytics methodologies, search algorithm updates, and AI-assisted workflows.',
  },
];

const About = ({ showFull = false, className = '' }) => {
  return (
    <section
      id="about"
      className={`scroll-mt-24 md:scroll-mt-28 relative overflow-hidden ${
        className ? className : 'pt-10 pb-10 md:pt-14 md:pb-14 bg-[#111114] border-t border-white/10'
      }`}
    >
      {/* Top Glowing Section Divider Line */}
      {!className?.includes('border-t-0') && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B1A]/50 to-transparent" />
      )}

      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B1A]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading + Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative"
          >
            {/* Title with underlined accent */}
            <div className="relative mb-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight flex items-center gap-3">
                <span className="relative pb-2 inline-block">
                  About
                  <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#FF6B1A] rounded-full shadow-[0_0_12px_rgba(255,107,26,0.8)]" />
                </span>
                <span className="text-[#FF6B1A] drop-shadow-[0_0_20px_rgba(255,107,26,0.35)]">
                  Me
                </span>
              </h2>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
              <p>
                I'm <strong className="text-white font-semibold">Prince Daimon</strong>, a Digital Marketer who enjoys turning brand visions into high-impact digital experiences. From multi-channel campaigns to search engine optimization, I build strategies with a focus on audience intent, measurable ROI, and compounding growth.
              </p>
              <p className="text-gray-400">
                Outside of executing campaigns, I'm usually exploring modern growth loops, analyzing consumer psychology, or refining the creative nuances that make a brand voice stand out.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 01, 02, 03 Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col gap-3.5 sm:gap-4"
          >
            {aboutPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative p-5 sm:p-6 rounded-2xl bg-[#0A0A0A]/90 border border-white/10 hover:border-[#FF6B1A]/40 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                >
                  {/* Subtle hover glow accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B1A]/5 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-3.5 sm:gap-4 relative z-10">
                    {/* Index Number */}
                    <span className="text-xs sm:text-sm font-mono font-bold text-gray-500 pt-0.5 group-hover:text-[#FF6B1A] transition-colors shrink-0">
                      {point.num}
                    </span>

                    {/* Icon */}
                    <div className="w-9 h-9 rounded-xl bg-[#FF6B1A]/10 border border-[#FF6B1A]/30 text-[#FF6B1A] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#FF6B1A] group-hover:text-white transition-all shadow-[0_0_12px_rgba(255,107,26,0.2)]">
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-[#FF6B1A] transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
