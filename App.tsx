import React from 'react';
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Services from './src/components/Services';
import Process from './src/components/Process';
import Projects from './src/components/Projects';
import WhyChooseUs from './src/components/WhyChooseUs';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;