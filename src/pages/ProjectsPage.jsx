import React, { useEffect } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Projects from '../components/sections/Projects';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 md:pt-24 pb-12 md:pb-16 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
        <SectionHeading
          title="Case Studies & Marketing Deliverables"
          subtitle="Explore detailed strategic frameworks, search engine optimization audits, visual brand launches, and e-commerce growth campaigns."
        />
      </div>

      <Projects limit={null} showHeader={false} className="border-t-0 pt-0 pb-12 md:pb-16 bg-[#0A0A0A]" />
    </main>
  );
};

export default ProjectsPage;
