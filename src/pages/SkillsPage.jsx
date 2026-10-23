import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Target, PenTool, BarChart3, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import SkillsCarousel from '../components/skills/SkillsCarousel';

const skillCategories = [
  {
    icon: Search,
    title: 'Search & Organic Discovery',
    description: 'Technical SEO, semantic architecture, and search intent optimization built for compounding organic visibility.',
    skills: ['SEO Auditing', 'Keyword Research', 'Topic Clustering', 'On-Page SEO', 'Local SEO & GMB', 'Schema Markup'],
  },
  {
    icon: Target,
    title: 'Performance & Paid Media',
    description: 'Data-driven paid social and search advertising engineered with strict ROAS targets and conversion funnels.',
    skills: ['Meta Ads Manager', 'Google Search Ads', 'Audience Retargeting', 'Ad Creative Strategy', 'A/B Split Testing', 'Budget Scaling'],
  },
  {
    icon: PenTool,
    title: 'Content & Creative Production',
    description: 'Brand narratives, high-converting copy, and visual deliverables that captivate and convert target audiences.',
    skills: ['Copywriting & Messaging', 'Figma Prototyping', 'Canva Creative Suite', 'Video Scripting & Reels', 'Brand Voice Guides', 'CapCut Editing'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Automation',
    description: 'Full-funnel attribution, behavioral tracking, and lifecycle email automation to retain and monetize customers.',
    skills: ['Google Analytics 4', 'Conversion Rate (CRO)', 'Email Automations', 'HubSpot & Mailchimp', 'Funnel Tracking', 'KPI Dashboards'],
  },
];

const SkillsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 md:pt-24 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6 mb-8 md:mb-12">
        <SectionHeading
          title="Skills, Tools & Strategic Capabilities"
          subtitle="A comprehensive overview of the marketing methodologies, software platforms, and execution stacks I leverage to grow brands."
        />

        {/* 4 Organised Capability Domain Cards matching Contact Card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-12">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0A]/90 border border-white/15 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:border-[#FF6B1A]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Subtle Corner Glow matching Contact page */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#FF6B1A]/10 blur-2xl pointer-events-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF6B1A]/10 border border-[#FF6B1A]/30 text-[#FF6B1A] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#FF6B1A] group-hover:text-white transition-all shadow-[0_0_15px_rgba(255,107,26,0.2)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B1A] transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Skills Pills matching Contact Chips */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6B1A]/40 transition-colors flex items-center gap-2 text-xs font-medium text-gray-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B1A] shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Section */}
        <div className="rounded-3xl bg-[#0A0A0A]/90 border border-white/15 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)] mb-8">
          <div className="mb-4 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">Daily Execution Software</h3>
            <p className="text-xs text-gray-400 mt-1">Directly integrated into daily agency workflows and client execution sprints.</p>
          </div>
          <SkillsCarousel />
        </div>
      </div>

    </main>
  );
};

export default SkillsPage;
