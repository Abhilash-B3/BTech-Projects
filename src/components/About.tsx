import React from 'react';
import { Users, Lightbulb, Wallet } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Who We Are
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We are a team of Gen-Z tech experts dedicated to bridging the gap between academic requirements and real-world skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl transition-all hover:-translate-y-2 duration-300">
            <div className="p-3 bg-indigo-100 rounded-full mb-4">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Student-Centric</h3>
            <p className="text-slate-600">
              We understand the pressure of deadlines and vivas. Our solutions are designed to be easy to understand and explain.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl transition-all hover:-translate-y-2 duration-300">
            <div className="p-3 bg-indigo-100 rounded-full mb-4">
              <Lightbulb className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Practical Experience</h3>
            <p className="text-slate-600">
              Forget copy-pasting code. We explain the logic, architecture, and tech stack so you actually learn.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl transition-all hover:-translate-y-2 duration-300">
            <div className="p-3 bg-indigo-100 rounded-full mb-4">
              <Wallet className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Affordable Pricing</h3>
            <p className="text-slate-600">
              Quality education shouldn't break the bank. We offer the most competitive rates in the market for students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;