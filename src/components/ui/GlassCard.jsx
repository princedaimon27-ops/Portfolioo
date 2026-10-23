import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  hoverGlow = false,
  hoverLift = true,
  onClick,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverLift ? { y: -4 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className={`relative rounded-3xl bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/15 p-6 sm:p-7 md:p-8 transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.6)] ${
        hoverGlow ? 'hover:border-[#FF6B1A]/50 hover:shadow-[0_0_30px_rgba(255,107,26,0.18)]' : 'hover:border-white/25'
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
