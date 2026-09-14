import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight, ArrowUpRight, Share2, Globe } from 'lucide-react';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-[#111114] relative overflow-hidden border-t border-white/10">
      {/* Top Glowing Section Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B1A]/60 to-transparent" />

      {/* Soft Orange Glow Radial Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B1A]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl bg-[#0A0A0A]/90 border border-white/15 p-8 md:p-16 backdrop-blur-xl relative overflow-hidden text-center flex flex-col items-center shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          
          {/* Subtle Glow Ring */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF6B1A]/20 blur-3xl pointer-events-none rounded-full" />

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#FF6B1A]/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(255,107,26,0.18)]"
          >
            <span className="px-2.5 py-0.5 rounded-md bg-[#FF6B1A] text-white font-black text-xs tracking-wider shadow-[0_0_12px_rgba(255,107,26,0.7)]">
              06
            </span>
            <span className="text-xs font-bold tracking-widest text-gray-200 uppercase">
              LET'S CONNECT & COLLABORATE
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mb-6"
          >
            Have a brand that needs to move <span className="text-[#FF6B1A]">forward?</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-300 max-w-xl mb-10 leading-relaxed"
          >
            Whether you are looking to scale search traffic, launch a high-impact social campaign, or overhaul your marketing strategy, let’s build something extraordinary together.
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Button
              href="mailto:princedaimon27@gmail.com"
              variant="primary"
              size="lg"
              icon={ArrowRight}
            >
              Start a Conversation
            </Button>
            <Button
              href="https://www.linkedin.com/in/prince-daimon-8920a23b2"
              variant="secondary"
              size="lg"
              icon={ArrowUpRight}
            >
              View LinkedIn
            </Button>
          </motion.div>

          {/* Contact Details Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl pt-8 border-t border-white/10"
          >
            <a
              href="mailto:princedaimon27@gmail.com"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6B1A]/40 flex items-center justify-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#FF6B1A]" />
              <span className="truncate">princedaimon27@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/prince-daimon-8920a23b2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6B1A]/40 flex items-center justify-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Share2 className="w-4 h-4 text-[#FF6B1A]" />
              <span>LinkedIn Profile</span>
            </a>

            <a
              href="https://github.com/princedaimon27-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6B1A]/40 flex items-center justify-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4 text-[#FF6B1A]" />
              <span>GitHub Projects</span>
            </a>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-[#FF6B1A]" />
              <span>Harare, Zimbabwe</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
