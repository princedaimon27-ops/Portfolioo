import React, { useEffect } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Projects from '../components/sections/Projects';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionHeading
          eyebrow="DIGITAL MARKETING PORTFOLIO"
          title="Case Studies & Marketing Deliverables"
          subtitle="Explore detailed strategic frameworks, search engine optimization audits, visual brand launches, and e-commerce growth campaigns."
        />
      </div>

      <Projects limit={null} showHeader={false} />
    </main>
  );
};

export default ProjectsPage;
