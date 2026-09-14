import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';

const MobileMenu = ({ isOpen, onClose, navLinks, currentPath }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-2xl md:hidden pt-24 px-6 pb-12 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6 mt-4">
            <span className="text-xs uppercase tracking-widest text-[#FF6B1A] font-semibold">
              Navigation
            </span>
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={onClose}
                  className={`text-2xl font-bold transition-colors flex items-center justify-between ${
                    isActive ? 'text-[#FF6B1A]' : 'text-white hover:text-gray-300'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FF6B1A]" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-6">
            <Button
              to="/contact"
              size="lg"
              variant="primary"
              icon={ArrowUpRight}
              className="w-full"
              onClick={onClose}
            >
              Let's Work Together
            </Button>
            <div className="text-center text-xs text-gray-500">
              © {new Date().getFullYear()} Prince Daimon. Digital Marketing Portfolio.
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
