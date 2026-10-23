import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({
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
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
      className={`max-w-4xl mb-6 md:mb-8 ${alignClasses[align]} ${className}`}
    >
      {title && (
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-gray-300 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
