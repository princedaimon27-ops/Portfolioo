import React, { useEffect } from 'react';
import About from '../components/sections/About';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 bg-[#0A0A0A] min-h-screen">
      <About showFull={true} />
      <Certifications />
      <Contact />
    </main>
  );
};

export default AboutPage;
