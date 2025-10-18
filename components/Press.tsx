
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

const pressLogos = ["VOGUE", "HYPEBEAST", "GQ", "DAZED", "Architectural Digest"];

const Press: React.FC = () => {
  return (
    <section id="press" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-8">As Seen In & Acknowledged By</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {pressLogos.map((logo, index) => (
                <span key={index} className="text-2xl font-bold text-neutral-600 hover:text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Press;
