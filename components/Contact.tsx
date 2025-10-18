
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { sendInquiry, InquiryData } from '../lib/contact';

const AnimatedSection: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};


const Contact: React.FC = () => {
    const [formData, setFormData] = useState<InquiryData>({
        name: '',
        email: '',
        company: '',
        service: '',
        details: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');
        try {
            const response = await sendInquiry(formData);
            setStatus('success');
            setMessage(response.message);
        } catch (error: any) {
            setStatus('error');
            setMessage(error.message || 'An unexpected error occurred.');
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-black">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Start Your Project</h2>
                        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Begin the conversation. Let's create something iconic together.</p>
                    </div>
                </AnimatedSection>
                
                <AnimatedSection>
                    <div className="max-w-3xl mx-auto">
                        {status === 'success' ? (
                            <div className="text-center bg-neutral-900/50 p-10">
                                <svg className="w-16 h-16 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Thank You!</h3>
                                <p className="text-gray-300">{message}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" name="name" placeholder="Full Name" required className="bg-neutral-900 border border-neutral-800 p-4 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all disabled:opacity-50" value={formData.name} onChange={handleChange} disabled={status === 'loading'} />
                                    <input type="email" name="email" placeholder="Email Address" required className="bg-neutral-900 border border-neutral-800 p-4 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all disabled:opacity-50" value={formData.email} onChange={handleChange} disabled={status === 'loading'} />
                                    <input type="text" name="company" placeholder="Company (Optional)" className="bg-neutral-900 border border-neutral-800 p-4 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all disabled:opacity-50" value={formData.company} onChange={handleChange} disabled={status === 'loading'} />
                                    <select name="service" required className="bg-neutral-900 border border-neutral-800 p-4 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all disabled:opacity-50" value={formData.service} onChange={handleChange} disabled={status === 'loading'}>
                                        <option value="" disabled>Service of Interest</option>
                                        <option>Fashion & Editorial</option>
                                        <option>Campaign & Advertising</option>
                                        <option>Video Production</option>
                                        <option>Creative Direction</option>
                                    </select>
                                    <textarea name="details" placeholder="Project Details" rows={5} required className="md:col-span-2 bg-neutral-900 border border-neutral-800 p-4 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all disabled:opacity-50" value={formData.details} onChange={handleChange} disabled={status === 'loading'}></textarea>
                                </div>
                                <div className="text-center mt-8">
                                     <button type="submit" className="bg-amber-400 text-black px-12 py-4 font-bold text-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 disabled:bg-amber-600 disabled:cursor-not-allowed flex items-center justify-center mx-auto" disabled={status === 'loading'}>
                                        {status === 'loading' ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </>
                                        ) : 'Submit Inquiry'}
                                    </button>
                                </div>
                                {status === 'error' && (
                                    <p className="text-center text-red-500 mt-4">{message}</p>
                                )}
                            </form>
                        )}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Contact;
