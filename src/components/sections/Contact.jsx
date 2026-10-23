import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight, ArrowUpRight, Share2, Globe } from 'lucide-react';
import Button from '../ui/Button';

const Contact = ({ className = '' }) => {
  return (
    <section
      id="contact"
      className={`relative overflow-hidden ${
        className ? className : 'py-12 md:py-16 bg-[#111114] border-t border-white/10'
      }`}
    >
      {/* Top Glowing Section Divider Line */}
      {!className?.includes('border-t-0') && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B1A]/60 to-transparent" />
      )}

      {/* Soft Orange Glow Radial Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B1A]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#0A0A0A]/90 border border-white/15 p-6 sm:p-10 md:p-12 backdrop-blur-xl relative overflow-hidden text-center flex flex-col items-center shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          
          {/* Subtle Glow Ring */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF6B1A]/20 blur-3xl pointer-events-none rounded-full" />

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mb-4"
          >
            Have a brand that needs to move <span className="text-[#FF6B1A]">forward?</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-300 max-w-2xl mb-6 md:mb-8 leading-relaxed"
          >
            Whether you are looking to scale search traffic, launch a high-impact social campaign, or overhaul your marketing strategy, let's build something extraordinary together.
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8 md:mb-10"
          >
            <Button
              href="mailto:princedaimon27@gmail.com"
              variant="primary"
              size="md"
              icon={ArrowRight}
            >
              Start a Conversation
            </Button>
            <Button
              href="https://www.linkedin.com/in/prince-daimon-8920a23b2"
              variant="secondary"
              size="md"
              icon={ArrowUpRight}
            >
              View LinkedIn
            </Button>
          </motion.div>

          {/* Contact Details Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full max-w-5xl pt-6 border-t border-white/10"
          >
            <a
              href="mailto:princedaimon27@gmail.com"
              className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6B1A]/40 flex items-center justify-center gap-2.5 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors min-w-0"
            >
              <Mail className="w-4 h-4 text-[#FF6B1A] shrink-0" />
              <span className="truncate">princedaimon27@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/prince-daimon-8920a23b2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6B1A]/40 flex items-center justify-center gap-2.5 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors min-w-0"
            >
              <Share2 className="w-4 h-4 text-[#FF6B1A] shrink-0" />
              <span>LinkedIn Profile</span>
            </a>

            <a
              href="https://github.com/princedaimon27-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6B1A]/40 flex items-center justify-center gap-2.5 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors min-w-0"
            >
              <Globe className="w-4 h-4 text-[#FF6B1A] shrink-0" />
              <span>GitHub Projects</span>
            </a>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2.5 text-xs sm:text-sm text-gray-300 min-w-0">
              <MapPin className="w-4 h-4 text-[#FF6B1A] shrink-0" />
              <span>Harare, Zimbabwe</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
