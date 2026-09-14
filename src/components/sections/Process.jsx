import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { processStepsData } from '../../data/processSteps';

const Process = () => {
  return (
    <section id="process" className="py-28 bg-[#111115] relative overflow-hidden border-t border-white/10">
      {/* Top Glowing Section Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B1A]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="05 // STRATEGIC METHODOLOGY"
          title="From idea to impact."
          subtitle="A battle-tested 5-stage framework that transforms brand objectives into measurable digital growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B1A]/20 via-[#FF6B1A] to-[#FF6B1A]/20 -z-0" />

          {processStepsData.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-start p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-[#FF6B1A]/30 transition-colors"
            >
              {/* Step Pill Header */}
              <div className="w-12 h-12 rounded-full bg-[#0A0A0A] border-2 border-[#FF6B1A] text-[#FF6B1A] font-extrabold text-sm flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,107,26,0.3)]">
                {step.step}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
