import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Expertise', id: 'expertise' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-10 md:pt-12 pb-8 md:pb-10 relative overflow-hidden">
      {/* Background glow gradient accent at footer bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#FF6B1A]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand & Tagline */}
          <div>
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 mb-3 bg-transparent border-0 p-0 text-left cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="PD Logo"
                className="w-12 h-12 object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
              <span className="font-extrabold text-xl tracking-wider text-white">
                PRINCE DAIMON
              </span>
            </button>
            <p className="text-sm text-gray-400 max-w-md">
              Digital Marketing • Strategy • Creativity • Growth
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:princedaimon27@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#FF6B1A] hover:border-[#FF6B1A]/40 transition-colors"
              aria-label="Email Prince Daimon"
            >
              <img src="/Icons/email.png" alt="Email" className="w-6 h-6 object-contain" />
            </a>
            <a
              href="https://www.linkedin.com/in/prince-daimon-8920a23b2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#FF6B1A] hover:border-[#FF6B1A]/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <img src="/Icons/linkedin.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
            </a>
            <a
              href="https://github.com/princedaimon27-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#FF6B1A] hover:border-[#FF6B1A]/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <img src="/Icons/github.png" alt="GitHub" className="w-6 h-6 object-contain" />
            </a>
          </div>
        </div>

        {/* Links & Bottom Info */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <div className="flex flex-wrap gap-6 font-medium">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-white transition-colors bg-transparent border-0 p-0 cursor-pointer text-gray-400 text-xs"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Prince Daimon. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
