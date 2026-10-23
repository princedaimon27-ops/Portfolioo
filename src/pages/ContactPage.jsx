import React, { useEffect } from 'react';
import Contact from '../components/sections/Contact';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 md:pt-24 bg-[#0A0A0A] min-h-screen">
      <Contact className="border-t-0 pt-4 md:pt-6 pb-12 md:pb-16 bg-[#111114]" />
    </main>
  );
};

export default ContactPage;
