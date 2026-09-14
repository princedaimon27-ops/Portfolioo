import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <main className="min-h-screen pt-40 pb-24 bg-[#0A0A0A] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="w-96 h-96 bg-[#FF6B1A]/10 blur-[140px] pointer-events-none rounded-full absolute" />

      <h1 className="text-8xl font-black text-[#FF6B1A] mb-4 drop-shadow-[0_0_30px_rgba(255,107,26,0.5)]">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-400 max-w-md mb-8">
        The route you requested could not be found. Let's get you back on track.
      </p>

      <Button to="/" variant="primary" icon={ArrowLeft} iconPosition="left">
        Return to Home
      </Button>
    </main>
  );
};

export default NotFoundPage;
