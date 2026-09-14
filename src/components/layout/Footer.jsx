import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUp, Share2, Globe } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow gradient accent at footer bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#FF6B1A]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Brand & Tagline */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#FF6B1A] flex items-center justify-center font-extrabold text-white text-sm">
                PD
              </div>
              <span className="font-extrabold text-xl tracking-wider text-white">
                PRINCE DAIMON
              </span>
            </Link>
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
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/prince-daimon-8920a23b2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#FF6B1A] hover:border-[#FF6B1A]/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Share2 className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/princedaimon27-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#FF6B1A] hover:border-[#FF6B1A]/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links & Bottom Info */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <div className="flex flex-wrap gap-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/expertise" className="hover:text-white transition-colors">Expertise</Link>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link to="/skills" className="hover:text-white transition-colors">Skills</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
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
