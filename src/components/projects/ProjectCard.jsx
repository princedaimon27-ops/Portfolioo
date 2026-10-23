import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Badge from '../ui/Badge';

const ProjectCard = ({ project, index = 0 }) => {
  const imagePaddingClass = project.imagePadding || 'p-3 sm:p-4';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative rounded-3xl bg-[#0A0A0A]/90 border border-white/15 overflow-hidden backdrop-blur-xl hover:border-[#FF6B1A]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,26,0.18)] shadow-[0_0_40px_rgba(0,0,0,0.6)] flex flex-col justify-between h-full"
    >
      {/* Subtle Corner Glow matching Contact card */}
      <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#FF6B1A]/10 blur-2xl pointer-events-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex flex-col flex-1 relative z-10">
        {/* Thumbnail Container with uncropped object-contain */}
        <Link
          to={`/projects/${project.slug}`}
          className={`block relative w-full h-48 sm:h-52 md:h-56 bg-[#060608] border-b border-white/10 flex items-center justify-center ${imagePaddingClass} overflow-hidden`}
        >
          <img
            src={project.featuredImage}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Card Body */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <div className="mb-2">
            <Badge
              variant="orange"
              className="text-[11px] sm:text-xs font-semibold py-1 px-3 backdrop-blur-md bg-[#FF6B1A]/10 border-[#FF6B1A]/30 text-[#FF6B1A] tracking-wide"
            >
              {project.category}
            </Badge>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#FF6B1A] transition-colors leading-snug line-clamp-1">
            <Link to={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 line-clamp-2 sm:line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tools Used Tags */}
          {project.tools && project.tools.length > 0 && (
            <div className="mt-auto pt-2 flex flex-wrap gap-1.5 mb-3">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] py-1 px-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Footer Anchored to Bottom */}
      <div className="p-5 sm:p-6 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 mt-auto relative z-10">
        <Link
          to={`/projects/${project.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FF6B1A] text-white text-xs sm:text-sm font-semibold hover:bg-[#e85f0f] transition-all shadow-[0_0_15px_rgba(255,107,26,0.25)] hover:shadow-[0_0_20px_rgba(255,107,26,0.45)] text-center cursor-pointer"
        >
          <span>Case Study</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 border border-white/15 text-white text-xs sm:text-sm font-medium hover:border-[#FF6B1A]/60 hover:text-[#FF6B1A] hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
          >
            <span>Live Project</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
