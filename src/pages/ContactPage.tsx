import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import SocialLinks from '../components/common/SocialLinks';
import { personalInfo } from '../data/profile';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Get the form element
    const form = e.target as HTMLFormElement;
    
    // Submit the form
    form.submit();
    
    // Show success message after a short delay
    setTimeout(() => {
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="pt-16">
      <Section
        title="Get In Touch"
        subtitle="Have a question or want to work together? Feel free to contact me!"
        className="bg-gradient-to-br from-white to-primary-50 dark:from-dark-900 dark:to-dark-800"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-1">
                      Email
                    </h4>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-1">
                      Phone
                    </h4>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-1">
                      Location
                    </h4>
                    <p className="text-dark-600 dark:text-dark-300">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-4">
                  Connect With Me
                </h4>
                <SocialLinks className="flex gap-4" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-white">
                Send Me a Message
              </h3>
              
              {submitSuccess ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-green-700 dark:text-green-300 mb-6">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="btn bg-green-500 hover:bg-green-600 text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form 
                  action="https://formsubmit.co/nairahassan550@gmail.com" 
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 rounded-lg border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                    
                    {/* Honeypot to prevent spam */}
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    
                    {/* Disable Captcha */}
                    <input type="hidden" name="_captcha" value="false" />
                    
                    {/* Specify redirect after submission */}
                    <input type="hidden" name="_next" value={window.location.href} />
                    
                    {submitError && (
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg text-sm">
                        {submitError}
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full btn btn-primary flex items-center justify-center ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Section>
      
      <Section
        title="Let's Collaborate"
        className="bg-white dark:bg-dark-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-dark-600 dark:text-dark-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: 'Freelance Projects',
                description: 'Available for freelance projects and consulting work.',
              },
              {
                title: 'Full-time Opportunities',
                description: 'Open to full-time positions in innovative companies.',
              },
              {
                title: 'Collaboration',
                description: 'Interested in collaborating on open source and side projects.',
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3 text-dark-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;