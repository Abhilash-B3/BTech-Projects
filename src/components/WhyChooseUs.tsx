import React from 'react';
import { DollarSign, ShieldCheck, BookOpen, Clock } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-indigo-800 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-900 opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Why Students Choose Us?
          </h2>
          <p className="mt-4 text-indigo-200 text-lg max-w-2xl mx-auto">
            We don't just sell code; we provide a learning experience that helps you crack your placement interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-indigo-800/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-700/50">
            <DollarSign className="h-10 w-10 text-green-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Unbeatable Price</h3>
            <p className="text-indigo-200 text-sm">
              We offer the most affordable rates in the market, specifically tailored for student budgets.
            </p>
          </div>

          <div className="bg-indigo-800/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-700/50">
            <ShieldCheck className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Transparent Process</h3>
            <p className="text-indigo-200 text-sm">
              No hidden fees. You see the prototype first. You only pay when you are satisfied with the demo.
            </p>
          </div>

          <div className="bg-indigo-800/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-700/50">
            <BookOpen className="h-10 w-10 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Free Guidance</h3>
            <p className="text-indigo-200 text-sm">
              Every project comes with free interview preparation notes and DSA resources to help you prepare.
            </p>
          </div>

          <div className="bg-indigo-800/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-700/50">
            <Clock className="h-10 w-10 text-pink-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-indigo-200 text-sm">
              Tight deadline? No problem. We have a track record of delivering quality projects within 48-72 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;