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
    // If arriving with a hash, smooth scroll to it
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, []);

  return (
    <main>
      <Hero />
      <About showFull={true} />
      <Expertise showAll={true} />
      <Projects limit={null} showHeader={true} />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
};

export default Home;
