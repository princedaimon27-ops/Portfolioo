import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const HeroParticleField = () => {
  const shouldReduceMotion = useReducedMotion();

  // Programmatically generate 24 particle data objects
  const particles = useMemo(() => {
    const items = [];
    const count = 24;
    for (let i = 0; i < count; i++) {
      // Seeded-style pseudo-random positioning for consistent layout across renders
      const size = 4 + ((i * 7) % 9); // 4px to 12px
      const top = 10 + ((i * 19 + 7) % 80); // 10% to 90%
      const left = 10 + ((i * 23 + 13) % 80); // 10% to 90%
      const duration = 4 + ((i * 13) % 4); // 4s to 7s
      const delay = (i * 0.2) % 2.1; // 0s to 2s delay
      const driftX = (i % 2 === 0 ? 1 : -1) * (4 + (i % 4)); // 4 to 7px x drift

      items.push({
        id: i,
        size,
        top: `${top}%`,
        left: `${left}%`,
        duration,
        delay,
        driftX,
      });
    }
    return items;
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[520px] flex items-center justify-center pointer-events-none select-none">
      {/* Central Soft Radial Glow (~260px) */}
      <motion.div
        className="absolute w-[260px] h-[260px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,26,0.28) 0%, rgba(255,107,26,0.08) 45%, transparent 70%)',
          filter: 'blur(10px)',
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.06, 1],
                opacity: [0.8, 1, 0.8],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary subtle ambient ring */}
      <div 
        className="absolute w-[320px] h-[320px] rounded-full border border-[#FF6B1A]/10 pointer-events-none"
        style={{ filter: 'blur(1px)' }}
      />

      {/* 24 Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#ff8a3d]"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: particle.top,
            left: particle.left,
            boxShadow: '0 0 8px 2px rgba(255,138,61,0.5)',
          }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.8 }
              : {
                  y: [0, -14, 0],
                  x: [0, particle.driftX, 0],
                  opacity: [0.4, 1, 0.4],
                }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default HeroParticleField;
