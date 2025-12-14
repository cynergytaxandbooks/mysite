import React, { useState, useRef } from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin, AlertCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const About: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);
  const [previewData, setPreviewData] = useState({ name: '', email: '' });
  const form = useRef<HTMLFormElement>(null);

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
        const formData = new FormData(form.current);
        setPreviewData({
            name: formData.get('user_name') as string || '',
            email: formData.get('user_email') as string || ''
        });
        setShowModal(true);
    }
  };

  const handleConfirmSend = () => {
    setShowModal(false);
    setFormStatus('submitting');

    if (form.current) {
      // ⚠️ IMPORTANT: You still need to replace SERVICE_ID and TEMPLATE_ID ⚠️
      // You can find these in your EmailJS Dashboard: https://dashboard.emailjs.com/
      const SERVICE_ID = 'YOUR_SERVICE_ID';   // e.g. 'service_xxxxx'
      const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // e.g. 'template_xxxxx'
      const PUBLIC_KEY = 'EOwvTXURQWcqpzgSlxiDh';

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setFormStatus('success');
          if (form.current) form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setFormStatus('error');
        },
      );
    }
  };

  return (
    <div className="w-full relative">
      {/* Founder Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="relative mb-10 md:mb-0">
               <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                 <img 
                   src="/founder.jpg" 
                   alt="Payal Shah" 
                   className="object-cover w-full h-full"
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy to-transparent p-6">
                    <p className="text-white font-bold text-xl">Payal Shah</p>
                    <p className="text-emerald text-sm font-semibold">Founder, CA, CPA</p>
                 </div>
               </div>
            </div>
            
            {/* Bio */}
            <div>
              <h1 className="text-4xl font-bold text-navy mb-2">Leadership with Precision and Care</h1>
              <div className="w-20 h-1 bg-emerald mb-8"></div>
              
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Payal Shah is a <strong>Certified Public Accountant (CPA)</strong> in the United States and a <strong>Chartered Accountant (CA)</strong> from India, bringing a rare dual-qualification perspective to modern financial challenges. With over 15 years of experience in audit, assurance, taxation, and financial consulting, she bridges the gap between complex regulatory requirements and practical business needs.
                </p>
                <p className="mb-4">
                  Before founding Cynergy, Payal honed her expertise in high-stakes environments, mastering US taxation, SOX compliance, and multi-state sales tax nexus. She saw a gap in the market for a firm that could handle the technical rigor of a large agency while providing the personalized, proactive communication of a boutique partner.
                </p>
                <p className="mb-4">
                  Her leadership style is defined by "solutions-driven empathy"—understanding that behind every tax return is a family's livelihood or a founder's dream. She actively consults on cross-border transactions, helping expats and international businesses navigate the intricate web of global taxation without double liability.
                </p>
                
                <blockquote className="border-l-4 border-emerald pl-4 italic text-navy bg-gray-50 p-4 rounded-r-lg">
                  "We don't just file forms; we architect financial peace of mind. My goal is to ensure every client feels heard, understood, and audit-proof."
                </blockquote>

                <div className="mt-6 flex flex-wrap gap-2">
                    <span className="bg-navy text-white text-xs px-3 py-1 rounded-full">CPA (USA)</span>
                    <span className="bg-navy text-white text-xs px-3 py-1 rounded-full">CA (India)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Section with Maps */}
      <div className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-navy text-center mb-12">Our Offices</h2>
           
           <div className="grid md:grid-cols-2 gap-8">
              
              {/* India Office */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
                 <div className="h-64 w-full bg-gray-200">
                   <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9298403332766!2d73.8567!3d18.4716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI4JzE3LjgiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1629876543210!5m2!1sen!2sin" 
                     width="100%" 
                     height="100%" 
                     style={{ border: 0 }} 
                     allowFullScreen 
                     loading="lazy" 
                     title="Pune Office Map"
                   ></iframe>
                 </div>
                 <div className="p-8 flex-grow">
                    <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                       <MapPin className="h-5 w-5 text-emerald mr-2" /> 
                       Pune, India Office
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Office 305, Atharva Feryez Plaza, Satara Rd,<br />
                      opp. Shankar Maharaj Math, Sambhagi Nagar,<br />
                      Dhankawadi, Pune, Maharashtra 411043
                    </p>
                    <p className="flex items-center text-navy font-semibold">
                      <Phone className="h-4 w-4 mr-2 text-burntOrange" />
                      +91-942-007-1114
                    </p>
                 </div>
              </div>

              {/* US Office */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
                 <div className="h-64 w-full bg-gray-200">
                   <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.247963289053!2d-88.1362!3d42.0673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa869f3456789%3A0xabcdef0123456789!2s1120%20Rosedale%20Ln%2C%20Hoffman%20Estates%2C%20IL%2060169!5e0!3m2!1sen!2sus!4v1629876543211!5m2!1sen!2sus" 
                     width="100%" 
                     height="100%" 
                     style={{ border: 0 }} 
                     allowFullScreen 
                     loading="lazy" 
                     title="Illinois Office Map"
                   ></iframe>
                 </div>
                 <div className="p-8 flex-grow">
                    <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                       <MapPin className="h-5 w-5 text-emerald mr-2" /> 
                       Illinois, US Office
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      1120 Rosedale Lane,<br />
                      Hoffman Estates, IL 60169
                    </p>
                    <p className="flex items-center text-navy font-semibold">
                      <Phone className="h-4 w-4 mr-2 text-burntOrange" />
                      +1-612-217-2427
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
              <p className="text-emerald-100 flex items-center justify-center">
                <Mail className="h-5 w-5 mr-2" />
                taxquerycynergy@gmail.com
              </p>
            </div>
          
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl relative">
              {formStatus === 'success' ? (
                <div className="bg-emerald/10 border border-emerald text-emerald-800 p-6 rounded-lg text-center">
                  <p className="font-bold text-lg mb-2">Message Sent!</p>
                  <p>Thank you for contacting Cynergy. We will get back to you within 24 hours.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-4 text-sm underline">Send another message</button>
                </div>
              ) : (
                <form ref={form} onSubmit={handleInitialSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="user_name"
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald focus:ring-emerald border p-3" 
                          placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="user_email"
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald focus:ring-emerald border p-3" 
                          placeholder="john@company.com"
                        />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-gray-700">Business Type</label>
                      <select 
                        id="business"
                        name="business_type"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald focus:ring-emerald border p-3 bg-white"
                      >
                        <option value="Individual">Individual</option>
                        <option value="Sole Proprietor">Sole Proprietor</option>
                        <option value="LLC">LLC</option>
                        <option value="S-Corp">S-Corp</option>
                        <option value="C-Corp">C-Corp</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Trust">Trust</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Needed</label>
                      <select 
                        id="service" 
                        name="service_needed"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald focus:ring-emerald border p-3 bg-white"
                      >
                        <option value="Tax Preparation">Tax Preparation</option>
                        <option value="Bookkeeping">Bookkeeping</option>
                        <option value="Advisory">Advisory</option>
                        <option value="Catch-Up / Forensic">Catch-Up / Forensic</option>
                        <option value="Expat / International">Expat / International</option>
                      </select>
                    </div>
                  </div>

                  {formStatus === 'error' && (
                    <div className="p-4 bg-red-100 text-red-700 rounded-md text-sm">
                        Something went wrong. Please check your internet connection or try again later.
                    </div>
                  )}

                  <div>
                     <p className="text-xs text-gray-500 mb-4 flex items-center">
                       <span className="h-2 w-2 bg-emerald rounded-full mr-2"></span>
                       Your information is encrypted and 100% confidential.
                     </p>
                     <Button 
                       type="submit" 
                       variant="accent" 
                       className="w-full"
                       disabled={formStatus === 'submitting'}
                     >
                       {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                     </Button>
                  </div>
                </form>
              )}
            </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-navy">
                  <AlertCircle className="h-6 w-6 text-emerald" />
                  <h3 className="text-lg font-bold">Confirm Submission</h3>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Please confirm that you want to send this message to Cynergy Tax and Books.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm">
                   <p className="text-gray-500 mb-1">Sender:</p>
                   <p className="font-semibold text-navy">{previewData.name}</p>
                   <p className="text-gray-600">{previewData.email}</p>
                </div>
              </div>

              <div className="mt-8 flex gap-3 justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <Button 
                  onClick={handleConfirmSend}
                  variant="primary"
                  className="px-4 py-2 text-sm"
                >
                  Yes, Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default About;