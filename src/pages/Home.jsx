import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Expertise from '../components/sections/Expertise';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <About showFull={false} />
      <Expertise showAll={false} />
      <Projects limit={4} showHeader={true} />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
};

export default Home;
