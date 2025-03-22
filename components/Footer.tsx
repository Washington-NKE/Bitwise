import React from 'react';
import { ChevronRight, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github, ArrowRight } from 'lucide-react';
import { navItems } from '@/constants';

const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 border-t border-gray-800">
      {/* Pre-Footer CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-purple-900/90 to-indigo-900/90 rounded-2xl py-12 px-6 sm:px-12 shadow-xl backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-white mb-3">Ready to transform your digital presence?</h2>
              <p className="text-purple-100 text-lg">Get a free consultation and project quote. No obligations, just pure value.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-white text-purple-900 hover:bg-purple-100 font-semibold rounded-lg px-8 py-4 transition-all flex items-center justify-center whitespace-nowrap text-base"
              >
                Schedule a Call
                <Phone className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#portfolio" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg px-8 py-4 transition-all flex items-center justify-center whitespace-nowrap text-base"
              >
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-gray-800">
          {/* Company Information */}
          <div>
            <div className="mb-6">
              <img src="/assets/bitwise.png" alt="Bitwise" className="h-10" />
            </div>
            <p className="text-gray-400 mb-6">Elevating digital experiences through innovative web and software solutions tailored to your business needs.</p>
            
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
            
            <div className="text-sm text-gray-500">
              <p>&copy; {currentYear} Bitwise. All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.url} className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-purple-500" />
                    {item.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2 text-purple-500" />
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-purple-500 mt-0.5" />
                <span className="text-gray-400">Nyeri, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-purple-500" />
                <a href="tel:+254713440774" className="text-gray-400 hover:text-purple-400 transition-colors">+254 713 440 774</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-purple-500" />
                <a href="mailto:contact@bitwiselabz.com" className="text-gray-400 hover:text-purple-400 transition-colors">contact@bitwiselabz.com</a>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                Get Directions
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Subscribe to Newsletter</h4>
            <p className="text-gray-400 mb-4">Get exclusive tips, resources, and special offers delivered weekly to your inbox.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg px-4 py-3 transition-colors flex items-center justify-center"
              >
                Subscribe Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
            
            <p className="text-gray-500 text-sm mt-4">
              By subscribing, you agree to our <a href="#privacy" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>
            </p>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            <span>Privacy Policy</span>
            <span className="mx-3">|</span>
            <span>Terms of Service</span>
            <span className="mx-3">|</span>
            <span>Cookie Policy</span>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-500 text-sm mr-2">Need help?</span>
            <a 
              href="#support" 
              className="text-purple-400 hover:text-purple-300 font-medium text-sm"
            >
              Visit Support Center
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;