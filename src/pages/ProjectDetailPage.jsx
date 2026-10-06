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
      <div className="min-h-[70vh] pt-40 pb-20 flex flex-col items-center justify-center text-center px-6">
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
  const hasResults = project.results && project.results.length > 0;

  return (
    <main className="pt-28 pb-24 bg-[#0A0A0A] min-h-screen relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-[#FF6B1A]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center text-sm text-gray-400 hover:text-[#FF6B1A] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </Link>

        {/* Category & Title */}
        <div className="mb-8">
          <Badge variant="orange" className="mb-4">
            {project.category}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
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
          className={`relative rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl bg-[#0D0D11] flex items-center justify-center ${
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md mb-16">
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
                      <Badge key={t} variant="default" className="text-[10px] py-0.5 px-2">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Overview & Challenge Section */}
        {hasOverviewOrChallenge && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {project.overview && (
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B1A]" />
                  Project Overview
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.overview}
                </p>
              </div>
            )}

            {project.challenge && (
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B1A]" />
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
          <div className="mb-16">
            {project.solution && (
              <>
                <h2 className="text-2xl font-extrabold text-white mb-4">Strategic Solution</h2>
                <p className="text-gray-300 text-base leading-relaxed mb-8">
                  {project.solution}
                </p>
              </>
            )}

            {project.deliverables && project.deliverables.length > 0 && (
              <>
                <h3 className="text-lg font-bold text-white mb-4">Key Deliverables & Execution:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
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
          <div className="mb-16 p-8 rounded-2xl bg-[#FF6B1A]/5 border border-[#FF6B1A]/30">
            <div className="flex items-center gap-2 text-[#FF6B1A] text-sm font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              SEO Content Cluster Architecture
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Pillar Topic: {project.contentCluster.pillarTopic}
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              Supporting cluster sub-topics engineered to dominate semantic search queries:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.contentCluster.subTopics.map((topic, idx) => (
                <li key={idx} className="text-sm text-gray-200 bg-white/5 p-3 rounded-lg border border-white/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B1A]" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Quantifiable Results / Outcomes Block */}
        {hasResults && (
          <div className="mb-16 p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#111113] to-[#0A0A0A] border border-[#FF6B1A]/40 shadow-[0_0_40px_rgba(255,107,26,0.15)]">
            <h2 className="text-2xl font-extrabold text-white mb-2">Quantifiable Business Impact</h2>
            <p className="text-sm text-gray-400 mb-8">Measured performance metrics following campaign rollout and optimization:</p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results.map((res, i) => (
                <div key={i} className="flex flex-col items-start">
                  <span className="text-3xl md:text-4xl font-extrabold text-[#FF6B1A] drop-shadow-[0_0_12px_rgba(255,107,26,0.4)] mb-1">
                    {res.metric}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-300">
                    {res.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Navigation (Back to Projects & Next Project) */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
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
