import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import MobileMenu from './MobileMenu';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Expertise', path: '/expertise' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LEFT — Logo + "aimon" blended with the D in the logo */}
          <Link to="/" className="relative flex items-center shrink-0 group">
            <img
              src="/logo.png"
              alt="PD Logo"
              className="w-16 h-16 object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
            <span
              className="text-white group-hover:text-[#FF6B1A] transition-colors"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: '2.05rem',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginLeft: '-1rem',
                position: 'relative',
                top: '0.15rem',
              }}
            >
              aimon
            </span>
          </Link>

          {/* CENTER — Nav links in their own pill */}
          <nav
            className={`hidden md:flex items-center gap-1 px-3 py-2 rounded-full border border-white/10 transition-all duration-300 ${
              scrolled
                ? 'bg-[#0A0A0A]/85 backdrop-blur-xl shadow-lg shadow-black/40'
                : 'bg-[#0A0A0A]/50 backdrop-blur-md'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#FF6B1A] text-white shadow-[0_0_12px_rgba(255,107,26,0.35)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT — Buttons standalone, separate from pill */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm font-medium text-white hover:border-[#FF6B1A]/60 hover:text-[#FF6B1A] transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B1A] text-white text-sm font-semibold hover:bg-[#e85f0f] transition-colors shadow-[0_0_15px_rgba(255,107,26,0.3)]"
            >
              Hire Me
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF6B1A]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        currentPath={location.pathname}
      />
    </>
  );
};

export default Navbar;
