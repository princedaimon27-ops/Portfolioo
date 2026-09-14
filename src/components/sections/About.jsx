import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const coreSkills = [
  'Digital Marketing Strategy',
  'Social Media Growth',
  'SEO & Search Engine Optimization',
  'Content Marketing & Copywriting',
  'Email Marketing Automation',
  'Analytics & GA4 Tracking',
  'AI-Assisted Workflow Scaling',
  'Multi-Channel Campaign Strategy',
];

const About = ({ showFull = false }) => {
  return (
    <section id="about" className="py-28 relative bg-[#111114] border-t border-white/10 overflow-hidden">
      {/* Top Glowing Section Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B1A]/50 to-transparent" />
      
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B1A]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="01 // ABOUT PRINCE DAIMON"
          title="Turning ideas into digital impact."
          subtitle="A results-driven marketing strategist passionate about crafting narrative-led campaigns and data-backed search optimizations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Bio Text Column (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
          >
            <div className="flex flex-col gap-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in bridging the gap between creative visual storytelling and analytical marketing execution. With a background spanning social media management, technical SEO auditing, brand identity, and performance analytics, I help brands establish strong online positioning and acquire high-intent customers.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Whether building organic search content clusters from scratch or running high-converting social campaigns, my approach is rooted in clear strategy, rapid execution, and continuous data testing.
              </p>
            </div>

            {!showFull && (
              <div className="pt-8">
                <Button to="/about" variant="secondary" size="md" icon={ArrowRight}>
                  Read Full Bio & Experience
                </Button>
              </div>
            )}
          </motion.div>

          {/* Skills Grid Column (Right - Replaces Stat Cards) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-[#FF6B1A] shadow-[0_0_10px_#FF6B1A]" />
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Core Skills & Capabilities
                </h3>
              </div>

              {/* Clean 2-Column Layout with Orange Check Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {coreSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#FF6B1A]/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B1A] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-200 leading-snug">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
              <span>Data-Driven Strategy</span>
              <span className="text-[#FF6B1A] font-semibold">Continuous Optimization</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
