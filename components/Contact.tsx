import React, { useState } from 'react';
import { Phone, Mail, Calendar, Clock, Send, CheckCircle } from 'lucide-react';
import Section from "./Section";
import Heading from "./Heading";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: '',
    schedule: 'asap'
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thanks for reaching out! We&apos;ll contact you within 24 hours.'
    });
    
    // In a real implementation, you would handle the API call here
    // Reset form after successful submission
    // Or show error if submission failed
  };

  return (
    <Section id="contact" className="py-24 bg-gray-950 relative overflow-hidden">
      <Heading
                className=""
                tag="Contact us"
                title="Get in Touch"
                text="Have a project in mind? Let&apos;s discuss how I can help bring your vision to life."
              />
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-xl">
            {formStatus.submitted ? (
              <div className="text-center py-12">
                <div className="flex justify-center mb-6">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-gray-300 mb-8">{formStatus.message}</p>
                <button 
                  onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg px-6 py-3 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Washington Mwangi"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="washington@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="+254 700-000-000"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-300 mb-2 font-medium">Service Interested In</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="responsive-website">Responsive Website</option>
                      <option value="web-application">Web Application</option>
                      <option value="ecommerce">E-commerce Development</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="custom-software">Custom Software</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Project inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project and requirements..."
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Preferred Schedule</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="relative">
                      <input 
                        type="radio" 
                        id="schedule-asap" 
                        name="schedule" 
                        value="asap"
                        checked={formData.schedule === 'asap'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <label 
                        htmlFor="schedule-asap"
                        className={`flex flex-col items-center justify-center border ${formData.schedule === 'asap' ? 'border-purple-500 bg-purple-900/30' : 'border-gray-700 bg-gray-800'} rounded-lg px-4 py-3 cursor-pointer hover:border-purple-500/70 transition-all`}
                      >
                        <Clock className="h-5 w-5 mb-1 text-gray-300" />
                        <span className="text-gray-300 text-sm">ASAP</span>
                      </label>
                    </div>
                    <div className="relative">
                      <input 
                        type="radio" 
                        id="schedule-week" 
                        name="schedule" 
                        value="within-week"
                        checked={formData.schedule === 'within-week'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <label 
                        htmlFor="schedule-week"
                        className={`flex flex-col items-center justify-center border ${formData.schedule === 'within-week' ? 'border-purple-500 bg-purple-900/30' : 'border-gray-700 bg-gray-800'} rounded-lg px-4 py-3 cursor-pointer hover:border-purple-500/70 transition-all`}
                      >
                        <Calendar className="h-5 w-5 mb-1 text-gray-300" />
                        <span className="text-gray-300 text-sm">This Week</span>
                      </label>
                    </div>
                    <div className="relative">
                      <input 
                        type="radio" 
                        id="schedule-month" 
                        name="schedule" 
                        value="within-month"
                        checked={formData.schedule === 'within-month'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <label 
                        htmlFor="schedule-month"
                        className={`flex flex-col items-center justify-center border ${formData.schedule === 'within-month' ? 'border-purple-500 bg-purple-900/30' : 'border-gray-700 bg-gray-800'} rounded-lg px-4 py-3 cursor-pointer hover:border-purple-500/70 transition-all`}
                      >
                        <Calendar className="h-5 w-5 mb-1 text-gray-300" />
                        <span className="text-gray-300 text-sm">This Month</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg px-8 py-4 transition-all flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col h-full justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Let&apos;s discuss your project</h3>
              <p className="text-gray-400 mb-8">
                Looking for a professional developer to bring your ideas to life? Whether you need a custom application, website, or design services, I&apos;m here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-800 rounded-lg p-3 mr-4">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-1">Call Me</h4>
                    <a href="tel:+254713440774" className="text-lg text-white hover:text-purple-400 transition-colors">+254 713-440-774</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-800 rounded-lg p-3 mr-4">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-1">Email Me</h4>
                    <a href="mailto:contact@bitwiselabz.com" className="text-lg text-white hover:text-purple-400 transition-colors">contact@bitwiselabz.com</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div className="mt-auto">
              <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
                <h4 className="text-xl font-semibold text-white mb-4">Schedule a Quick Call</h4>
                <p className="text-gray-400 mb-6">
                  Prefer to talk directly? Book a free 30-minute consultation to discuss your project needs.
                </p>
                <a 
                  href="#schedule-call" 
                  className="bg-white text-purple-900 hover:bg-purple-100 font-semibold rounded-lg px-8 py-4 transition-all flex items-center justify-center whitespace-nowrap text-base w-full"
                >
                  Schedule a Call
                  <Phone className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;