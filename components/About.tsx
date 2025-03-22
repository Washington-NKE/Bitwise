import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from './Section';
import Heading from './Heading';

const AboutSection = () => {
  return (
    <Section id="about" className="py-20 bg-gray-950 text-gray-300">
         <Heading
                className=""
                tag="About Us"
                title="About Us"
                text=""
              />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="/api/placeholder/500/500" 
              alt="About Us" 
              className="rounded-xl shadow-xl border border-gray-800"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-400 mb-6 leading-relaxed">
              We are a passionate team dedicated to elevating digital experiences through innovative web and software solutions. 
              Founded with a mission to transform how businesses connect with their audience online.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Today, we&apos;ve grown into a diverse community of thinkers, creators, and problem-solvers who share a common 
              vision for excellence and a commitment to making a positive impact in everything we do.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-900/60 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
                <p className="text-gray-400">To empower businesses through innovative digital solutions that drive growth and success.</p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
                <p className="text-gray-400">A world where technology enhances human potential and connects communities.</p>
              </div>
            </div>
            <a 
              href="#services" 
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg px-6 py-3 transition-colors"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;