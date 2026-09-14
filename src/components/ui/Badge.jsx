import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-white/5 text-gray-300 border border-white/10',
    orange: 'bg-[#FF6B1A]/10 text-[#FF6B1A] border border-[#FF6B1A]/30',
    glow: 'bg-[#FF6B1A]/15 text-white border border-[#FF6B1A]/40 shadow-[0_0_15px_rgba(255,107,26,0.2)]',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
