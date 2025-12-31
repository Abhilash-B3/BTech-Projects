import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Helping Students Ace Their Projects
        </div>

        <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl mb-3">
          <span className="block">Build Better. Learn Faster.</span>
        </h1>

        <h3 className="text-2xl tracking-tight font-bold text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            We empower tech students to build high-quality projects
            and excel in interviews
          </span>
        </h3>

        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10">
          Build academic projects, professional portfolios, and private apps with expert guidance. 
          Don't overpay—get real-world tech experience.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200"
          >
            Get Your Project Now
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
          <a 
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
          >
            <BookOpen className="mr-2 -ml-1 h-5 w-5 text-indigo-500" />
            Free Interview Guide
          </a>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-3xl opacity-30 pointer-events-none">
          <div className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
