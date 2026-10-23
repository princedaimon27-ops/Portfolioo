import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';
import HeroParticleField from './HeroParticleField';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-28 md:pb-16 flex items-center bg-grid-pattern overflow-hidden scroll-mt-24">
      {/* Background Soft Glow Ambient */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B1A]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* 3-Line Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 md:mb-8"
            >
              I create marketing <br className="hidden sm:inline" />
              that moves brands <br className="hidden sm:inline" />
              <span className="text-[#FF6B1A] relative inline-block drop-shadow-[0_0_25px_rgba(255,107,26,0.4)]">
                forward.
              </span>
            </motion.h1>

            {/* Positioning Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8"
            >
              Hi, I'm <strong className="text-white font-semibold">Prince Daimon</strong>. I combine creative content strategy, search engine optimization, and data-backed performance campaigns to help ambitious brands increase reach and drive measurable revenue growth.
            </motion.p>

            {/* Dual Action CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <Button to="#projects" variant="primary" size="md" icon={ArrowRight}>
                View My Work
              </Button>
              <Button to="#contact" variant="secondary" size="md" icon={ArrowUpRight}>
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Hero Visual — Particle Field (5 cols) */}
          <div className="lg:col-span-5 w-full flex justify-center items-center">
            <HeroParticleField />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
