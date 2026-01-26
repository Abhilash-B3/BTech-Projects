import React from 'react';
import { Code, Layout, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: 'BTech Projects',
    price: 'Custom Projects',
    description:'We build all types of projects: Web Development, Full-Stack, Deep Learning, and Machine Learning',
    features: [
      'Source Code',
      'Project Explanation',
      'Database Schema',
      'User Interactive Design',
      'Setup Guide'
    ],
    icon: GraduationCap,
    recommended: true,
  },
  {
    title: 'Professional Portfolio',
    price: '₹199',
    description: 'A refined portfolio website that strengthens your personal brand and effectively showcases your resume and projects to recruiters.',
    features: [
      'Responsive Design',
      'Hosted on Vercel/Netlify',
      'Contact Form Integration',
      'Resume Download Link',
      'Dark/Light Mode'
    ],
    icon: Layout,
  },
  {
    title: 'Private Projects',
    price: 'Custom',
    description: 'End-to-end custom application development aligned with your goals, technology needs, and scalability plans.',
    features: [
      'Custom Tech Stack',
      'Scalable Architecture',
      'API Integration',
      'Admin Dashboard',
      'Deployment Support'
    ],
    icon: Code,
  },
  {
    title: 'Interview Prep',
    price: 'Free',
    description: 'Exclusive bonus resources for our customers, featuring skill-specific notes and curated DSA practice links for practical learning experience.',
    features: [
      'DSA Practice Links',
      'Top 50 Interview Q&A',
      'Practical Notes',
      'Resume Review',
      '1-on-1 Tips'
    ],
    icon: Briefcase,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to succeed in your academic and professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-6 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border ${service.recommended ? 'border-indigo-500 ring-2 ring-indigo-500 ring-opacity-20' : 'border-slate-100'}`}
            >
              {service.recommended && (
                <div className="absolute top-0 right-0 -mt-3 mr-4 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold uppercase rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                  <service.icon size={24} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <div className="mt-2 mb-4">
                <span className="text-2xl font-extrabold text-indigo-600">{service.price}</span>
              </div>
              <p className="text-slate-600 text-sm mb-6 flex-grow">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`w-full py-2 px-4 rounded-lg font-medium text-center transition-colors ${
                  service.recommended 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
