import React, { useEffect } from 'react';
import Skills from '../components/sections/Skills';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';

const SkillsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 bg-[#0A0A0A] min-h-screen">
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
};

export default SkillsPage;
