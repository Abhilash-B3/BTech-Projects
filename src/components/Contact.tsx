import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'BTech Project',
    message: ''
  });

  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setTimeout(() => {
      setStatus(null);
      setFormData({ name: '', email: '', projectType: 'BTech Project', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Ready to start your project? reach us directly by whatsapp for instant response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-indigo-600 mt-1" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-900">Email</p>
                  <a href="mailto:btechprojects.org@gmail.com" className="text-slate-600 hover:text-indigo-600">
                    btechprojects.org@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-indigo-600 mt-1" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-900">Phone</p>
                  <a href="tel:+918897241318" className="text-slate-600 hover:text-indigo-600">
                    +91 8897241318
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-green-500 mt-1" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-900">WhatsApp</p>
                  <p className="text-slate-600 mb-2">Instant response for urgent queries.</p>
                  <a 
                    href="https://wa.me/918897241318" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-semibold text-indigo-900 mb-2">Office Hours</h4>
              <p className="text-sm text-indigo-800">Monday - Saturday: 9:00 AM - 9:00 PM</p>
              <p className="text-sm text-indigo-800">Sunday: 10:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Request</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-slate-700">Project Interest</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                >
                  <option>BTech Project</option>
                  <option>Portfolio Website</option>
                  <option>Private App</option>
                  <option>Other Query</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message / Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Send Message <Send size={16} className="ml-2" />
              </button>

              {status === 'success' && (
                <div className="p-3 bg-green-50 text-green-700 text-sm rounded-lg text-center">
                  Message sent successfully! We'll contact you shortly.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
