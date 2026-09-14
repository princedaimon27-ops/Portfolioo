import React, { useEffect } from 'react';
import Expertise from '../components/sections/Expertise';
import Contact from '../components/sections/Contact';

const ExpertisePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 bg-[#0A0A0A] min-h-screen">
      <Expertise showAll={true} />
      <Contact />
    </main>
  );
};

export default ExpertisePage;
