import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Badge from '../ui/Badge';

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden backdrop-blur-md hover:border-[#FF6B1A]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,107,26,0.2)] flex flex-col justify-between"
    >
      <div>
        {/* Project Thumbnail Image Container */}
        <Link
          to={`/projects/${project.slug}`}
          className="block relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#0D0D11] border-b border-white/5"
        >
          <img
            src={project.featuredImage}
            alt={project.title}
            className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
              project.imageFit === 'contain'
                ? `object-contain ${project.imagePadding || ''}`
                : 'object-cover'
            }`}
            loading="lazy"
          />
          {project.imageFit !== 'contain' && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 pointer-events-none" />
          )}
        </Link>

        {/* Card Body */}
        <div className="p-6 md:p-8">
          <div className="mb-3">
            <Badge variant="orange" className="backdrop-blur-md bg-[#FF6B1A]/10 border-[#FF6B1A]/30 text-[#FF6B1A]">
              {project.category}
            </Badge>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FF6B1A] transition-colors leading-snug">
            <Link to={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          
          <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tools Used Tags */}
          {project.tools && project.tools.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.map((tool) => (
                <Badge key={tool} variant="default" className="text-[11px] bg-white/5">
                  {tool}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-white group-hover:text-[#FF6B1A] transition-colors"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        ) : (
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center text-sm font-semibold text-white group-hover:text-[#FF6B1A] transition-colors"
          >
            <span>View Detailed Case Study</span>
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
