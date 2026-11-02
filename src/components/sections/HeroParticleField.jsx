import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * HeroParticleField
 * The first cosmic orbit animation created:
 * - Central luminous blue nebula core and bright focal spot
 * - Dual tilted concentric elliptical orbit rings (-24deg and -38deg)
 * - Orbiting planetary satellite nodes (bright blue & cyan with multi-ring halos)
 * - Background twinkling stars
 * - Interactive hover with scale, glow boost, accelerated rotation, and parallax
 */
const HeroOrbitAnimation = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Mouse move handler for smooth cursor-following parallax
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const relY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

    setParallax({
      x: Math.max(-1, Math.min(1, relX)) * 14,
      y: Math.max(-1, Math.min(1, relY)) * 14,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setParallax({ x: 0, y: 0 });
  };

  // Floating background ambient dots / stars matching the first design
  const backgroundStars = [
    { top: '18%', left: '42%', size: 3, opacity: 0.55 },
    { top: '22%', left: '72%', size: 4, opacity: 0.8 },
    { top: '35%', left: '28%', size: 2.5, opacity: 0.4 },
    { top: '38%', left: '88%', size: 3, opacity: 0.65 },
    { top: '56%', left: '84%', size: 4.5, opacity: 0.9 },
    { top: '65%', left: '60%', size: 3.5, opacity: 0.75 },
    { top: '72%', left: '38%', size: 4, opacity: 0.85 },
    { top: '74%', left: '78%', size: 2.5, opacity: 0.5 },
    { top: '82%', left: '25%', size: 3, opacity: 0.7 },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] aspect-[1/0.88] flex items-center justify-center select-none cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      {/* Interactive Motion Container with Parallax & Hover Effect */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center pointer-events-none"
        animate={{
          scale: isHovered ? 1.08 : 1,
          x: parallax.x,
          y: parallax.y,
          filter: isHovered
            ? 'brightness(130%) drop-shadow(0 0 28px rgba(27,118,255,0.55)) drop-shadow(0 0 45px rgba(96,165,250,0.35))'
            : 'brightness(100%) drop-shadow(0 0 14px rgba(27,118,255,0.25))',
        }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1], // ease-out
        }}
      >
        {/* 1. Deep Central Ambient Nebula Glow */}
        <motion.div
          className="absolute w-[240px] sm:w-[300px] md:w-[340px] aspect-square rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(27,118,255,0.45) 0%, rgba(27,118,255,0.2) 35%, rgba(27,118,255,0.05) 60%, transparent 75%)',
            filter: 'blur(32px)',
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: isHovered ? [1.08, 1.2, 1.08] : [1, 1.12, 1],
                  opacity: isHovered ? [0.95, 1, 0.95] : [0.85, 1, 0.85],
                }
          }
          transition={{
            duration: isHovered ? 3.5 : 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* 2. Intense Core Blue Glow (Center bright spot) */}
        <motion.div
          className="absolute w-[90px] sm:w-[110px] aspect-square rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(96,165,250,0.95) 0%, rgba(27,118,255,0.7) 45%, transparent 70%)',
            filter: 'blur(16px)',
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: isHovered ? [1.05, 1.22, 1.05] : [0.95, 1.08, 0.95],
                  opacity: isHovered ? [0.95, 1, 0.95] : [0.9, 1, 0.9],
                }
          }
          transition={{
            duration: isHovered ? 2.5 : 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* 3. Static / Twinkling Star Field */}
        {backgroundStars.map((star, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full bg-blue-300 pointer-events-none"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: '0 0 6px 1.5px rgba(59,139,255,0.7)',
            }}
            animate={
              shouldReduceMotion
                ? { opacity: star.opacity }
                : {
                    opacity: isHovered
                      ? [star.opacity * 0.7, 1, star.opacity * 0.7]
                      : [star.opacity * 0.4, star.opacity, star.opacity * 0.4],
                    scale: isHovered ? [1, 1.35, 1] : [0.85, 1.15, 0.85],
                  }
            }
            transition={{
              duration: isHovered ? 1.8 + (idx % 2) : 3 + (idx % 3),
              delay: (idx * 0.4) % 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* 4. Primary Orbital Ring (Tilted Oval ~ -24deg) */}
        <div
          className="absolute w-[86%] h-[56%] pointer-events-none flex items-center justify-center transition-all duration-400"
          style={{
            transform: 'rotate(-24deg)',
          }}
        >
          {/* The Elliptical Ring Outline */}
          <div
            className={`absolute inset-0 rounded-[50%] border transition-all duration-400 ${
              isHovered ? 'border-[#60A5FA]/60' : 'border-[#1B76FF]/40'
            }`}
            style={{
              boxShadow: isHovered
                ? '0 0 25px rgba(27,118,255,0.4), inset 0 0 20px rgba(27,118,255,0.3)'
                : '0 0 15px rgba(27,118,255,0.2), inset 0 0 15px rgba(27,118,255,0.15)',
            }}
          />

          {/* Orbiting Satellite Node 1 (Bright Cyan Blue Glowing Orb on Primary Ring) */}
          <motion.div
            className="absolute w-full h-full pointer-events-none"
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{
              duration: isHovered ? 10.6 : 16, // 1.5x speed acceleration on hover
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Node positioned on ring perimeter */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="rounded-full bg-[#60A5FA]"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: isHovered ? [1.2, 1.55, 1.2] : [1, 1.1, 1],
                        opacity: isHovered ? [0.95, 1, 0.95] : [0.85, 0.98, 0.85],
                      }
                }
                transition={{
                  duration: isHovered ? 0.9 : 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  width: isHovered ? '17px' : '14px',
                  height: isHovered ? '17px' : '14px',
                  boxShadow: isHovered
                    ? '0 0 22px 7px rgba(96,165,250,1), 0 0 35px 12px rgba(27,118,255,0.85)'
                    : '0 0 14px 4px rgba(59,139,255,0.9), 0 0 24px 8px rgba(27,118,255,0.6)',
                  transition: 'width 0.4s ease-out, height 0.4s ease-out, box-shadow 0.4s ease-out',
                }}
              />
            </div>
          </motion.div>

          {/* Orbiting Satellite Node 2 (Opposite subtle planet on Primary Ring) */}
          <motion.div
            className="absolute w-full h-full pointer-events-none"
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{
              duration: isHovered ? 10.6 : 16,
              repeat: Infinity,
              ease: 'linear',
              delay: isHovered ? -5.3 : -8, // 180 degrees opposite
            }}
          >
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="rounded-full bg-[#93C5FD]"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: isHovered ? [1.15, 1.45, 1.15] : [1, 1.08, 1],
                        opacity: isHovered ? [0.9, 1, 0.9] : [0.75, 0.9, 0.75],
                      }
                }
                transition={{
                  duration: isHovered ? 1.0 : 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  width: isHovered ? '13px' : '10px',
                  height: isHovered ? '13px' : '10px',
                  boxShadow: isHovered
                    ? '0 0 16px 5px rgba(147,197,253,0.95), 0 0 25px 8px rgba(27,118,255,0.7)'
                    : '0 0 10px 3px rgba(59,139,255,0.8)',
                  transition: 'width 0.4s ease-out, height 0.4s ease-out, box-shadow 0.4s ease-out',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* 5. Secondary Orbital Ring (Tilted Oval ~ -38deg, wider span) */}
        <div
          className="absolute w-[94%] h-[64%] pointer-events-none flex items-center justify-center transition-all duration-400"
          style={{
            transform: 'rotate(-38deg)',
          }}
        >
          {/* The Elliptical Ring Outline */}
          <div
            className={`absolute inset-0 rounded-[50%] border transition-all duration-400 ${
              isHovered ? 'border-[#38BDF8]/50' : 'border-[#1B76FF]/30'
            }`}
            style={{
              boxShadow: isHovered
                ? '0 0 22px rgba(27,118,255,0.35)'
                : '0 0 12px rgba(27,118,255,0.15)',
            }}
          />

          {/* Orbiting Satellite Node 3 on Secondary Ring */}
          <motion.div
            className="absolute w-full h-full pointer-events-none"
            animate={shouldReduceMotion ? {} : { rotate: -360 }}
            transition={{
              duration: isHovered ? 14.6 : 22, // 1.5x speed acceleration on hover
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <motion.div
                className="rounded-full bg-[#38BDF8]"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: isHovered ? [1.2, 1.55, 1.2] : [1, 1.1, 1],
                        opacity: isHovered ? [0.95, 1, 0.95] : [0.8, 0.95, 0.8],
                      }
                }
                transition={{
                  duration: isHovered ? 0.85 : 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  width: isHovered ? '15px' : '12px',
                  height: isHovered ? '15px' : '12px',
                  boxShadow: isHovered
                    ? '0 0 18px 6px rgba(56,189,248,1), 0 0 30px 10px rgba(27,118,255,0.75)'
                    : '0 0 12px 4px rgba(56,189,248,0.85), 0 0 20px 6px rgba(27,118,255,0.5)',
                  transition: 'width 0.4s ease-out, height 0.4s ease-out, box-shadow 0.4s ease-out',
                }}
              />
            </div>
          </motion.div>

          {/* Orbiting Satellite Node 4 on Secondary Ring */}
          <motion.div
            className="absolute w-full h-full pointer-events-none"
            animate={shouldReduceMotion ? {} : { rotate: -360 }}
            transition={{
              duration: isHovered ? 14.6 : 22,
              repeat: Infinity,
              ease: 'linear',
              delay: isHovered ? -7.3 : -11,
            }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
              <motion.div
                className="rounded-full bg-[#60A5FA]"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: isHovered ? [1.15, 1.45, 1.15] : [1, 1.08, 1],
                        opacity: isHovered ? [0.85, 1, 0.85] : [0.7, 0.85, 0.7],
                      }
                }
                transition={{
                  duration: isHovered ? 1.05 : 3.0,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  width: isHovered ? '11px' : '8px',
                  height: isHovered ? '11px' : '8px',
                  boxShadow: isHovered
                    ? '0 0 14px 4px rgba(96,165,250,0.9), 0 0 22px 7px rgba(27,118,255,0.6)'
                    : '0 0 8px 2px rgba(59,139,255,0.7)',
                  transition: 'width 0.4s ease-out, height 0.4s ease-out, box-shadow 0.4s ease-out',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* 6. Subtle inner atmospheric pulse ring */}
        <motion.div
          className="absolute w-[50%] h-[32%] rounded-[50%] border pointer-events-none"
          style={{
            transform: 'rotate(-28deg)',
            borderColor: isHovered ? 'rgba(96,165,250,0.45)' : 'rgba(96,165,250,0.2)',
            transition: 'border-color 0.4s ease-out',
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  opacity: isHovered ? [0.5, 0.9, 0.5] : [0.3, 0.6, 0.3],
                  scale: isHovered ? [0.97, 1.05, 0.97] : [0.98, 1.02, 0.98],
                }
          }
          transition={{
            duration: isHovered ? 3 : 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  );
};

export default HeroOrbitAnimation;
