import React, { useEffect } from 'react';
import Contact from '../components/sections/Contact';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 bg-[#0A0A0A] min-h-screen">
      <Contact />
    </main>
  );
};

export default ContactPage;
