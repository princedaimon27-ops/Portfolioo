import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Share2,
  Search,
  FileText,
  Target,
  Mail,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  FolderOpen,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { expertiseData } from '../../data/expertise';
import Button from '../ui/Button';

const iconMap = {
  Share2,
  Search,
  FileText,
  Target,
  Mail,
  BarChart3,
};

const expertiseIconPng = {
  'social-media': '/Icons/social-media marketing.png',
  'seo-optimization': '/Icons/seo & search optimization.png',
  'content-marketing': '/Icons/content strategy.png',
  'paid-advertising': '/Icons/Paid Advertising.png',
  'email-marketing': '/Icons/email-marketing.png',
  'analytics-cro': '/Icons/analytics & CRO.png',
};

const cardMeta = [
  { tag: 'Organic & Viral Reach', badge: 'Multi-Channel Growth', metric: '+180% Engagement' },
  { tag: 'Search Intent & Ranking', badge: 'Technical Architecture', metric: 'Top 3 SERP Placements' },
  { tag: 'High-Converting Copy', badge: 'Editorial Strategy', metric: '4.2x Retention' },
  { tag: 'Performance Media', badge: 'Targeted Acquisition', metric: '5.8x ROAS Average' },
  { tag: 'Lifecycle Automation', badge: 'Retention Journeys', metric: '38% Open Rates' },
  { tag: 'Attribution & Analytics', badge: 'Funnel Optimization', metric: '+44% Conversion Lift' },
];

const Expertise = ({ showAll = false, className = '' }) => {
  // 6 Core Expertise Domains
  const displayItems = expertiseData.slice(0, 6);
  const total = displayItems.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only respond if expertise section is in or near viewport
      const section = document.getElementById('expertise');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch Swipe Handlers for mobile & tablets
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  // Card position calculator for the folder-deck layout
  // Returns styling properties based on distance from the active card
  const getCardStyle = (index) => {
    // Relative offset from active card: 0 is active, +1 is next, -1 is prev
    let offset = index - activeIndex;

    // Wrap around for circular deck logic
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const isActive = offset === 0;
    const isHovered = hoveredIndex === index;

    // Depth & Layering:
    // Active card is z-30 (or z-40 if hovered). Surrounding cards drop in z-index with distance
    const zIndex = isActive ? (isHovered ? 40 : 30) : 25 - Math.abs(offset) * 5;

    // Horizontal offset spacing in pixels
    // Active is centered (0px). Nearby cards fan out left/right with increasing distance
    let xOffset = 0;
    if (offset < 0) {
      // Left cards
      xOffset = offset * 210 - (isActive ? 0 : 40);
    } else if (offset > 0) {
      // Right cards
      xOffset = offset * 210 + (isActive ? 0 : 40);
    }

    // Subtly rotate cards outward to create a folder-tab/fan effect
    const rotation = isActive ? 0 : offset * 3.5;

    // Slight scale drop for cards farther back
    const scale = isActive ? (isHovered ? 1.02 : 1) : Math.max(0.78, 1 - Math.abs(offset) * 0.08);

    // Fade cards that are far off to keep the stage uncluttered
    const opacity = Math.abs(offset) > 2 ? 0 : Math.max(0.2, 1 - Math.abs(offset) * 0.32);

    return {
      offset,
      isActive,
      isHovered,
      zIndex,
      xOffset,
      rotation,
      scale,
      opacity,
      pointerEvents: Math.abs(offset) > 2 ? 'none' : 'auto',
    };
  };

  const activeNumber = `0${activeIndex + 1}`;
  const totalFormatted = `0${total}`;

  return (
    <section
      id="expertise"
      className={`scroll-mt-24 md:scroll-mt-28 relative overflow-hidden select-none ${
        className ? className : 'py-16 md:py-24 bg-[#0A0A0A] border-t border-white/10'
      }`}
    >
      {/* Top Glowing Divider */}
      {!className?.includes('border-t-0') && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B1A]/40 to-transparent" />
      )}

      {/* Atmospheric Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#FF6B1A]/6 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Bar with Navigation Controls & Position Counter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <SectionHeading
            title="What I do"
            subtitle="Explore my core capabilities across performance marketing, organic search architecture, and creative growth funnels."
            className="mb-0"
          />

          {/* Carousel Controls & Counter (01 / 06) */}
          <div className="flex items-center gap-4 shrink-0 self-start md:self-end">
            {/* Position Counter Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <FolderOpen className="w-4 h-4 text-[#FF6B1A]" />
              <span className="font-mono text-xs font-bold text-white tracking-widest">
                {activeNumber}
              </span>
              <span className="text-xs text-gray-500 font-mono">/</span>
              <span className="font-mono text-xs font-medium text-gray-400">
                {totalFormatted}
              </span>
            </div>

            {/* Left Arrow Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous expertise card"
              className="w-11 h-11 rounded-full bg-[#111115] border border-white/10 hover:border-[#FF6B1A]/60 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#FF6B1A]/10 transition-all duration-200 active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Right Arrow Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next expertise card"
              className="w-11 h-11 rounded-full bg-[#111115] border border-white/10 hover:border-[#FF6B1A]/60 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#FF6B1A]/10 transition-all duration-200 active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* Desktop & Tablet: Layered Folder-Deck Horizontal Stage */}
        {/* ======================================================== */}
        <div
          className="hidden md:flex relative justify-center items-center h-[440px] w-full px-4 overflow-visible"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {displayItems.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Share2;
            const itemNumber = `0${index + 1}`;
            const meta = cardMeta[index] || {};
            const cardStyle = getCardStyle(index);

            return (
              <motion.div
                key={item.id}
                layout
                animate={
                  shouldReduceMotion
                    ? { opacity: cardStyle.opacity }
                    : {
                        x: cardStyle.xOffset,
                        rotate: cardStyle.rotation,
                        scale: cardStyle.scale,
                        opacity: cardStyle.opacity,
                        y: cardStyle.isActive ? (cardStyle.isHovered ? -10 : 0) : Math.abs(cardStyle.offset) * 8,
                      }
                }
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 28,
                  mass: 0.9,
                }}
                style={{
                  zIndex: cardStyle.zIndex,
                  pointerEvents: cardStyle.pointerEvents,
                }}
                onClick={() => {
                  if (!cardStyle.isActive) {
                    setActiveIndex(index);
                  }
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                tabIndex={cardStyle.isActive ? 0 : -1}
                role="button"
                aria-label={`${item.title} card ${cardStyle.isActive ? '(Active)' : ''}`}
                className={`absolute top-6 w-[440px] lg:w-[500px] h-[360px] rounded-3xl transition-colors duration-300 cursor-pointer ${
                  cardStyle.isActive ? 'cursor-default' : 'cursor-pointer hover:brightness-110 hover:-translate-y-1'
                }`}
              >
                {/* Folder Top Tab Badge (simulates a tabbed document index) */}
                <div
                  className={`absolute -top-3.5 left-8 px-4 py-1 rounded-t-xl text-[11px] font-mono font-bold tracking-wider uppercase border-t border-x transition-all duration-300 z-20 ${
                    cardStyle.isActive
                      ? 'bg-[#FF6B1A] text-white border-[#FF6B1A] shadow-[0_-4px_12px_rgba(255,107,26,0.4)]'
                      : 'bg-[#18181D] text-gray-400 border-white/10 group-hover:text-white'
                  }`}
                >
                  <span className="mr-1.5 opacity-80">TAB</span>
                  <span>{itemNumber}</span>
                </div>

                {/* Main Card Shell */}
                <div
                  className={`w-full h-full rounded-3xl p-6 lg:p-7 backdrop-blur-2xl border flex flex-col justify-start pt-6 gap-4 overflow-hidden relative transition-all duration-400 ${
                    cardStyle.isActive
                      ? 'bg-[#16161A]/95 bg-gradient-to-br from-[#FF6B1A]/10 to-transparent border-[#FF6B1A]/80 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(255,107,26,0.3)] ring-1 ring-[#FF6B1A]/40'
                      : 'bg-[#16161A]/90 bg-gradient-to-br from-[#FF6B1A]/5 to-transparent border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:border-white/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(255,255,255,0.18)] transition-all duration-300'
                  }`}
                >
                  {/* Glowing Ambient Top Corner (Active only) */}
                  <div
                    className={`absolute -top-24 -right-24 w-56 h-56 bg-[#FF6B1A] blur-3xl pointer-events-none rounded-full transition-opacity duration-500 ${
                      cardStyle.isActive ? 'opacity-30' : 'opacity-0'
                    }`}
                  />

                  {/* Top Ambient Edge Highlight Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 ${
                      cardStyle.isActive
                        ? 'bg-gradient-to-r from-transparent via-[#FF6B1A] to-transparent opacity-100'
                        : 'bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:opacity-60'
                    }`}
                  />

                  {/* Card Content Area */}
                  <div className="relative z-10 flex flex-col">
                    {/* Header Row: Icon + Meta Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 backdrop-blur-md bg-white/5 border border-white/15 text-gray-300`}
                      >
                        {expertiseIconPng[item.id] ? <img src={expertiseIconPng[item.id]} alt={item.title} className="w-6 h-6 object-contain" /> : <IconComponent className="w-6 h-6" />}
                      </div>

                      <span
                        className={`text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border transition-all duration-300 ${
                          cardStyle.isActive
                            ? 'bg-[#FF6B1A]/10 border-[#FF6B1A]/40 text-[#FF6B1A]'
                            : 'bg-white/5 border-white/10 text-gray-400'
                        }`}
                      >
                        {meta.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-2xl lg:text-3xl font-extrabold tracking-tight mb-4 transition-colors duration-300 leading-tight ${
                        cardStyle.isActive ? 'text-white' : 'text-gray-300'
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Description - fully expanded & clear on the active card */}
                    <p
                      className={`text-sm lg:text-[15px] leading-relaxed transition-colors duration-300 ${
                        cardStyle.isActive ? 'text-gray-200' : 'text-gray-400 line-clamp-3'
                      }`}
                    >
                      {item.description}
                    </p>

</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* Mobile: Full-Width Swipeable Card Deck                    */}
        {/* ======================================================== */}
        <div
          className="block md:hidden relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            {displayItems.map((item, index) => {
              if (index !== activeIndex) return null;
              const IconComponent = iconMap[item.iconName] || Share2;
              const itemNumber = `0${index + 1}`;
              const meta = cardMeta[index] || {};

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.94, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.94, x: -20 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="w-full relative"
                >
                  {/* Mobile Folder Tab Top Accent */}
                  <div className="absolute -top-3 left-6 px-3.5 py-0.5 rounded-t-lg bg-[#FF6B1A] text-white text-[10px] font-mono font-bold tracking-wider uppercase z-20 shadow-[0_-2px_10px_rgba(255,107,26,0.4)]">
                    TAB {itemNumber} / {totalFormatted}
                  </div>

                  <div className="rounded-3xl p-5 sm:p-6 bg-[#16161A] bg-gradient-to-br from-[#FF6B1A]/5 to-transparent border border-[#FF6B1A]/70 shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_30px_rgba(255,107,26,0.25)] flex flex-col justify-start pt-4 gap-4 min-h-[320px] relative overflow-hidden">
                    {/* Top ambient orange strip */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B1A] to-transparent" />

                    <div>
                      <div className="flex items-center justify-between mb-4 mt-1">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md text-white flex items-center justify-center border border-white/15">
                          {expertiseIconPng[item.id] ? <img src={expertiseIconPng[item.id]} alt={item.title} className="w-6 h-6 object-contain" /> : <IconComponent className="w-6 h-6" />}
                        </div>
                        <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#FF6B1A]/10 border border-[#FF6B1A]/40 text-[#FF6B1A]">
                          {meta.tag}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                        <span className="text-xs text-gray-400">Execution Outcome</span>
                        <span className="text-xs font-bold text-[#FF6B1A] font-mono">
                          {meta.metric}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                      <span>{meta.badge}</span>
                      <div className="flex items-center gap-1 text-[#FF6B1A] font-semibold">
                        <span>Swipe to explore</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ======================================================== */}
        {/* Pagination Dots / Tabs Indicator Bar                    */}
        {/* ======================================================== */}
        <div className="mt-8 md:mt-10 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {displayItems.map((_, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'w-8 h-2.5 bg-[#FF6B1A] shadow-[0_0_12px_#FF6B1A]'
                      : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              );
            })}
          </div>

          <p className="text-xs text-gray-500 hidden sm:block">
            Use arrow buttons, arrow keys (<span className="text-gray-400 font-mono">← / →</span>), or click any folder tab to navigate.
          </p>
        </div>

        {/* Optional Action / Transition Button */}
        {!showAll && (
          <div className="mt-10 md:mt-12 text-center">
            <Button to="/expertise" variant="secondary" size="md" icon={ArrowRight}>
              Explore All Marketing Pillars
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Expertise;
