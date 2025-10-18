import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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


const Studio: React.FC = () => {
  return (
    <section id="studio" className="py-20 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6">
        <AnimatedSection>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>The Space</h2>
                <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Our state-of-the-art studio is designed for creativity without limits.</p>
            </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <AnimatedSection>
            <div className="relative overflow-hidden">
                <img src="https://picsum.photos/seed/studio/1200/800" alt="Studio Space" className="w-full h-auto object-cover" loading="lazy"/>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div>
              <h3 className="text-3xl font-bold mb-4">A Canvas for Visionaries</h3>
              <p className="text-gray-400 mb-6">
                From a massive cyclorama wall to dedicated styling rooms and cutting-edge lighting gear, our studio is more than a space—it's an ecosystem for world-class production. Every detail is meticulously planned to facilitate a seamless creative workflow.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-amber-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  3,000 sq ft Shooting Area
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-amber-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Pro-Grade Lighting & Grip
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-amber-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Luxury Client Lounge & Styling Rooms
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Studio;