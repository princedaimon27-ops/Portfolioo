import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

const StatCounter = ({ value, label, suffix = '', prefix = '' }) => {
  const [hasTriggered, setHasTriggered] = useState(false);

  // Extract number from value string (e.g. "05+" -> target is 5)
  const isInfinite = String(value).includes('∞');
  const numericTarget = isInfinite ? 0 : parseInt(String(value).replace(/\D/g, ''), 10) || 0;

  const animatedCount = useCountUp(numericTarget, 1800, hasTriggered);

  // Format display value
  const displayValue = isInfinite
    ? '∞'
    : `${prefix}${hasTriggered ? String(animatedCount).padStart(2, '0') : '00'}${suffix || (String(value).includes('+') ? '+' : '')}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      onViewportEnter={() => {
        if (!hasTriggered) setHasTriggered(true);
      }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col items-start justify-center group hover:border-[#FF6B1A]/40 transition-colors"
    >
      <div className="text-4xl md:text-5xl font-extrabold text-[#FF6B1A] tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(255,107,26,0.3)]">
        {displayValue}
      </div>
      <div className="text-xs md:text-sm font-medium uppercase tracking-wider text-gray-400">
        {label}
      </div>
    </motion.div>
  );
};

export default StatCounter;
