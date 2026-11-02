import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';
import Button from '../ui/Button';

const MobileMenu = ({ isOpen, onClose, navLinks, activeSection, onSelectSection }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="fixed inset-0 z-40 bg-[#020617]/95 backdrop-blur-2xl md:hidden pt-24 px-6 pb-12 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6 mt-4">
            <span className="text-xs uppercase tracking-widest text-[#1B76FF] font-semibold">
              Navigation
            </span>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  onClick={() => {
                    onSelectSection(link.id);
                    onClose();
                  }}
                  className={`text-2xl font-bold transition-colors flex items-center justify-between text-left cursor-pointer bg-transparent border-0 p-0 ${
                    isActive ? 'text-[#1B76FF]' : 'text-white hover:text-gray-300'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#1B76FF]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
            <a
              href="/cv.pdf"
              download="Prince_Daimon_CV.pdf"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm font-semibold text-white hover:border-[#1B76FF]/60 hover:text-[#1B76FF] transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <Button
              to="#contact"
              size="md"
              variant="primary"
              icon={ArrowUpRight}
              className="w-full"
              onClick={() => {
                onSelectSection('contact');
                onClose();
              }}
            >
              Let's Connect
            </Button>
            <div className="text-center text-xs text-gray-500 mt-2">
              © {new Date().getFullYear()} Prince Daimon. Digital Marketing Portfolio.
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
