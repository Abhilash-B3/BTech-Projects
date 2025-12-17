import React from 'react';
import { ProcessStep } from '../types';
import { Send, FileCheck, Database, Server, CreditCard } from 'lucide-react';

const steps: ProcessStep[] = [
  {
    title: 'Share Requirements',
    description: 'Send us your project abstract, preferred tech stack, and deadline.',
    stepNumber: 1
  },
  {
    title: 'Prototype Verification',
    description: 'We create a UI prototype/structure for your approval before coding.',
    stepNumber: 2
  },
  {
    title: 'Backend & DB Integration',
    description: 'We build the core logic and connect the database securely.',
    stepNumber: 3
  },
  {
    title: 'Final Review',
    description: 'You verify the working project via a live demo or video call.',
    stepNumber: 4
  },
  {
    title: 'Payment & Delivery',
    description: 'Complete payment to receive source code, docs, and setup help.',
    stepNumber: 5
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Simple, transparent, and hassle-free workflow designed for students.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-100"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="w-full md:w-5/12 mb-4 md:mb-0">
                  <div className={`p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      <span className="text-indigo-600 mr-2">0{step.stepNumber}.</span>
                      {step.title}
                    </h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white shadow-lg border-4 border-white">
                  {index === 0 && <Send size={20} />}
                  {index === 1 && <FileCheck size={20} />}
                  {index === 2 && <Database size={20} />}
                  {index === 3 && <Server size={20} />}
                  {index === 4 && <CreditCard size={20} />}
                </div>

                {/* Empty Side for balance */}
                <div className="w-full md:w-5/12 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;