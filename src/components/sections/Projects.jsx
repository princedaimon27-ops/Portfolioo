import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../projects/ProjectCard';
import { projectsData } from '../../data/projects';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Projects = ({ limit, showHeader = true }) => {
  const displayProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <section id="projects" className="py-28 bg-[#111114] relative overflow-hidden border-t border-white/10">
      {/* Top Glowing Section Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B1A]/50 to-transparent" />
      
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#FF6B1A]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {showHeader && (
          <SectionHeading
            eyebrow="03 // FEATURED CASE STUDIES"
            title="Selected work"
            subtitle="Strategic marketing campaigns, SEO architectures, and brand growth case studies delivering real business outcomes."
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {limit && (
          <div className="mt-16 text-center">
            <Button to="/projects" variant="primary" size="lg" icon={ArrowRight}>
              Explore All Case Studies
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
