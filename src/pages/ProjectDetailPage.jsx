import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Calendar, User, Wrench, Layers, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const ProjectDetailPage = () => {
  const { slug } = useParams();

  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-[60vh] pt-28 pb-16 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-extrabold text-white mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-8">The case study you are looking for does not exist or has been relocated.</p>
        <Button to="/projects" variant="primary" icon={ArrowLeft} iconPosition="left">
          Back to All Projects
        </Button>
      </div>
    );
  }

  const nextProject = projectsData.find((p) => p.slug === project.nextSlug);

  const hasMetadata = project.role || project.timeline || (project.tools && project.tools.length > 0);
  const hasOverviewOrChallenge = project.overview || project.challenge;
  const hasSolutionOrDeliverables = project.solution || (project.deliverables && project.deliverables.length > 0);

  return (
    <main className="pt-20 md:pt-24 pb-12 md:pb-16 bg-[#0A0A0A] min-h-screen relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-[#FF6B1A]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center text-sm text-gray-400 hover:text-[#FF6B1A] transition-colors mb-4 md:mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </Link>

        {/* Category & Title */}
        <div className="mb-6 md:mb-8">
          <Badge variant="orange" className="mb-3">
            {project.category}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF6B1A] text-white font-semibold text-sm hover:bg-[#FF6B1A]/90 transition-colors"
            >
              <span>View Live Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Hero Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`relative rounded-3xl overflow-hidden mb-8 md:mb-10 border border-white/10 shadow-2xl bg-[#0D0D11] flex items-center justify-center ${
            project.imageFit === 'contain'
              ? 'aspect-[16/10] md:aspect-[2/1] p-2 sm:p-4'
              : 'h-[300px] md:h-[450px]'
          }`}
        >
          <img
            src={project.featuredImage}
            alt={project.title}
            className={`w-full h-full ${
              project.imageFit === 'contain'
                ? `object-contain ${project.imagePadding || ''}`
                : 'object-cover'
            }`}
          />
          {project.imageFit !== 'contain' && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 pointer-events-none" />
          )}
        </motion.div>

        {/* Metadata Grid (Role, Timeline, Tools) */}
        {hasMetadata && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-7 rounded-3xl bg-[#0A0A0A]/90 border border-white/15 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)] mb-8 md:mb-10">
            {project.role && (
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-[#FF6B1A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 block font-medium">Role</span>
                  <span className="text-sm font-bold text-white">{project.role}</span>
                </div>
              </div>
            )}

            {project.timeline && (
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#FF6B1A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 block font-medium">Timeline</span>
                  <span className="text-sm font-bold text-white">{project.timeline}</span>
                </div>
              </div>
            )}

            {project.tools && project.tools.length > 0 && (
              <div className="flex items-start gap-3">
                <Wrench className="w-5 h-5 text-[#FF6B1A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 block font-medium">Tools & Stack</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tools.map((t) => (
                      <span key={t} className="text-[11px] py-1 px-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Overview & Challenge Section */}
        {hasOverviewOrChallenge && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
            {project.overview && (
              <div className="p-6 md:p-8 rounded-3xl bg-[#0A0A0A]/90 border border-white/15 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B1A] shadow-[0_0_10px_#FF6B1A]" />
                  Project Overview
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.overview}
                </p>
              </div>
            )}

            {project.challenge && (
              <div className="p-6 md:p-8 rounded-3xl bg-[#0A0A0A]/90 border border-white/15 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B1A] shadow-[0_0_10px_#FF6B1A]" />
                  The Challenge
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Strategy & Solution */}
        {hasSolutionOrDeliverables && (
          <div className="mb-8 md:mb-10">
            {project.solution && (
              <>
                <h2 className="text-2xl font-extrabold text-white mb-3">Strategic Solution</h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {project.solution}
                </p>
              </>
            )}

            {project.deliverables && project.deliverables.length > 0 && (
              <>
                <h3 className="text-lg font-bold text-white mb-3">Key Deliverables & Execution:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {project.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6B1A]/40 transition-colors">
                      <CheckCircle className="w-5 h-5 text-[#FF6B1A] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Special SEO Content Cluster Section (If applicable) */}
        {project.contentCluster && (
          <div className="mb-8 md:mb-10 p-6 md:p-8 rounded-3xl bg-[#0A0A0A]/90 border border-white/15 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <div className="flex items-center gap-2 text-[#FF6B1A] text-xs font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              SEO Content Cluster Architecture
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Pillar Topic: {project.contentCluster.pillarTopic}
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              Supporting cluster sub-topics engineered to dominate semantic search queries:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.contentCluster.subTopics.map((topic, idx) => (
                <li key={idx} className="text-sm text-gray-200 bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B1A]" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer Navigation (Back to Projects & Next Project) */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Button to="/projects" variant="secondary" icon={ArrowLeft} iconPosition="left">
            All Case Studies
          </Button>

          {nextProject && (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="flex items-center gap-3 text-right group text-white hover:text-[#FF6B1A] transition-colors"
            >
              <div>
                <span className="text-xs text-gray-400 block uppercase">Next Case Study</span>
                <span className="text-base font-bold">{nextProject.title}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FF6B1A] group-hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          )}
        </div>

      </div>
    </main>
  );
};

export default ProjectDetailPage;
