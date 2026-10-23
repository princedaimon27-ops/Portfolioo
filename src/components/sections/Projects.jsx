import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../projects/ProjectCard';
import UpcomingProjectCard from '../projects/UpcomingProjectCard';
import { projectsData } from '../../data/projects';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Projects = ({ showHeader = true, className = '', initialLimit = 4, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const initialCount = limit !== undefined && limit !== null ? limit : initialLimit;
  const initialProjects = projectsData.slice(0, initialCount);
  const remainingRealProjects = projectsData.slice(initialCount);

  // If there are fewer than 2 extra projects, calculate placeholders needed to reveal 2 slots
  const placeholdersNeeded = Math.max(0, 2 - remainingRealProjects.length);

  const placeholderData = [
    {
      title: 'B2B Lead Generation & Content Marketing Strategy',
      category: 'In Development',
      tools: ['HubSpot', 'LinkedIn Ads', 'Copywriting', 'SEO'],
    },
    {
      title: 'DTC Brand Retention & Conversion Funnel',
      category: 'In Development',
      tools: ['Klaviyo', 'Shopify Plus', 'CRO Audit', 'Meta Ads'],
    },
  ];

  const handleToggle = () => {
    if (isExpanded) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        if (rect.top < -80) {
          projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
    setIsExpanded((prev) => !prev);
  };

  return (
    <section
      id="projects"
      className={`scroll-mt-24 md:scroll-mt-28 relative overflow-hidden ${
        className ? className : 'py-12 md:py-16 bg-[#111114] border-t border-white/10'
      }`}
    >
      {/* Top Glowing Section Divider Line */}
      {showHeader && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B1A]/50 to-transparent" />
      )}
      
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-96 bg-[#FF6B1A]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showHeader && (
          <SectionHeading
            title="Selected work"
            subtitle="Strategic marketing campaigns, SEO architectures, and brand growth case studies delivering real business outcomes."
          />
        )}

        {/* 2-Column Responsive Grid for the First 4 Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {initialProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Expandable Section for Additional Cards */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              key="expanded-projects"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 pt-5 sm:pt-6 lg:pt-8">
                {/* Any real projects beyond the initial 4 */}
                {remainingRealProjects.map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={index + initialProjects.length}
                  />
                ))}

                {/* Future project placeholder cards */}
                {placeholderData.slice(0, placeholdersNeeded).map((item, index) => (
                  <UpcomingProjectCard
                    key={`upcoming-${index}`}
                    index={index + remainingRealProjects.length}
                    title={item.title}
                    category={item.category}
                    tools={item.tools}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Orange-Accented Toggle Button */}
        <div className="mt-8 md:mt-10 text-center flex justify-center">
          <button
            type="button"
            onClick={handleToggle}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF6B1A] text-white font-semibold text-sm sm:text-base hover:bg-[#e85f0f] transition-all duration-300 shadow-[0_0_20px_rgba(255,107,26,0.3)] hover:shadow-[0_0_30px_rgba(255,107,26,0.5)] active:scale-95 cursor-pointer"
          >
            <span>{isExpanded ? 'Show Less' : 'View More Projects'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
