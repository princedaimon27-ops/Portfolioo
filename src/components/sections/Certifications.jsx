import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { certificationsData } from '../../data/certifications';
import Badge from '../ui/Badge';

const Certifications = ({ className = '' }) => {
  return (
    <section
      id="certifications"
      className={`scroll-mt-24 md:scroll-mt-28 py-12 md:py-16 bg-[#0A0A0A] relative overflow-hidden border-t border-white/10 ${className}`}
    >
      {/* Top Glowing Section Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B1A]/40 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Certifications & Industry Training"
          subtitle="Continuous learning across search engine optimization, performance marketing analytics, and user experience foundations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 sm:p-6 rounded-3xl bg-[#0A0A0A]/90 border border-white/15 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-[#FF6B1A]/50 transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden"
            >
              {/* Subtle Corner Glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#FF6B1A]/10 blur-xl pointer-events-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B1A]/10 border border-[#FF6B1A]/30 text-[#FF6B1A] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#FF6B1A] group-hover:text-white transition-all shadow-[0_0_12px_rgba(255,107,26,0.2)]">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-gray-400 font-mono bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                    {cert.year}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-snug group-hover:text-[#FF6B1A] transition-colors">
                  {cert.title}
                </h4>
                <p className="text-xs text-gray-300 mb-4">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between relative z-10">
                <Badge variant="orange" className="text-[10px] py-0.5 px-2.5">
                  {cert.badge}
                </Badge>
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
