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
      whileHover={hoverLift ? { y: -5 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className={`relative rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 md:p-8 transition-colors duration-300 ${
        hoverGlow ? 'hover:border-[#FF6B1A]/40 hover:shadow-[0_0_30px_rgba(255,107,26,0.15)]' : 'hover:border-white/20'
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
