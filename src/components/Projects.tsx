import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

const projects: Project[] = [
  {
    title: 'EduTech',
    description: 'A comprehensive learning management system for schools.',
    link: 'https://academix-zeta-ten.vercel.app/',
    image: 'https://picsum.photos/seed/edutech/600/400',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'CareerFluence',
    description: 'Job readiness and career tracking platform for graduates.',
    link: 'https://careerfluence.vercel.app/',
    image: 'https://picsum.photos/seed/career/600/400',
    tags: ['Next.js', 'Tailwind', 'Firebase']
  },
  {
    title: 'GarageNow',
    description: 'On-demand mechanic and vehicle service booking app.',
    link: 'https://garage-now.vercel.app/',
    image: 'https://picsum.photos/seed/garage/600/400',
    tags: ['MERN Stack', 'Redux', 'Stripe']
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Project Showcase
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Check out some of our recently delivered projects. We ensure clean code, responsive design, and functional excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white rounded-full text-slate-900 font-medium text-sm hover:bg-slate-100"
                  >
                    View Live <ExternalLink size={14} className="ml-2" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs text-slate-500">Delivered on time</span>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center"
                  >
                    Visit Site <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center justify-center gap-1">
            Want to see more? Contact Us <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;