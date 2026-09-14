import React from 'react';
import { motion } from 'framer-motion';

const renderEyebrowBadge = (eyebrowText) => {
  if (eyebrowText.includes('//')) {
    const [num, ...rest] = eyebrowText.split('//');
    const numberPart = num.trim();
    const labelPart = rest.join('//').trim();

    return (
      <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#FF6B1A]/30 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(255,107,26,0.18)] transition-all duration-300 hover:border-[#FF6B1A]/60">
        <span className="px-2.5 py-0.5 rounded-md bg-[#FF6B1A] text-white font-black text-xs tracking-wider shadow-[0_0_12px_rgba(255,107,26,0.7)]">
          {numberPart}
        </span>
        <span className="text-xs font-bold tracking-widest text-gray-200 uppercase">
          {labelPart}
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4">
      <span className="w-2 h-2 rounded-full bg-[#FF6B1A] shadow-[0_0_8px_#FF6B1A]" />
      <span className="text-xs font-bold tracking-widest text-[#FF6B1A] uppercase">
        {eyebrowText}
      </span>
    </div>
  );
};

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-12 md:mb-16 ${alignClasses[align]} ${className}`}
    >
      {eyebrow && renderEyebrowBadge(eyebrow)}

      {title && (
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
