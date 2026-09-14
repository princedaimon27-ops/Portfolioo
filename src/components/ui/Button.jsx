import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon: Icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF6B1A]/50 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#FF6B1A] text-white hover:bg-[#ff7a2e] shadow-[0_0_20px_rgba(255,107,26,0.35)] hover:shadow-[0_0_30px_rgba(255,107,26,0.5)] border border-[#FF6B1A]',
    secondary: 'bg-white/5 text-white hover:bg-white/10 border border-white/15 backdrop-blur-md hover:border-[#FF6B1A]/40',
    outline: 'bg-transparent text-white border border-white/20 hover:border-[#FF6B1A] hover:text-[#FF6B1A]',
    ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs tracking-wider uppercase',
    md: 'px-6 py-3 text-sm tracking-wide',
    lg: 'px-8 py-4 text-base tracking-wide',
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} group ${className}`;

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <Link to={to} className={combinedClasses} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} {...props}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
