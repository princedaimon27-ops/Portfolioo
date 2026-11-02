import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-white/5 text-gray-300 border border-white/10',
    orange: 'bg-[#1B76FF]/10 text-[#1B76FF] border border-[#1B76FF]/30',
    glow: 'bg-[#1B76FF]/15 text-white border border-[#1B76FF]/40 shadow-[0_0_15px_rgba(27, 118, 255,0.2)]',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
