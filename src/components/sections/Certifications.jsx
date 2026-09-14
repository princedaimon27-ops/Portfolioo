import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { certificationsData } from '../../data/certifications';
import Badge from '../ui/Badge';

const Certifications = () => {
  return (
    <section id="certifications" className="py-28 bg-[#0A0A0A] relative overflow-hidden border-t border-white/10">
      {/* Top Glowing Section Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B1A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="05 // CREDENTIALS & KNOWLEDGE"
          title="Certifications & Industry Training"
          subtitle="Continuous learning across search engine optimization, performance marketing analytics, and user experience foundations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-[#FF6B1A]/40 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B1A]/10 text-[#FF6B1A] flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">{cert.year}</span>
                </div>

                <h4 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-[#FF6B1A] transition-colors">
                  {cert.title}
                </h4>
                <p className="text-xs text-gray-400 mb-4">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                <Badge variant="orange" className="text-[10px]">
                  {cert.badge}
                </Badge>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
