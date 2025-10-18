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


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6 space-y-20 md:space-y-32">
        <AnimatedSection>
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Behind the Lens</h2>
                <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Meet the creative masterminds dedicated to transforming concepts into cinematic reality.</p>
            </div>
        </AnimatedSection>
        
        <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative overflow-hidden">
                    <img src="https://picsum.photos/seed/studio-story/1200/800" alt="Creative process at the studio" className="w-full h-auto object-cover" loading="lazy" />
                </div>
                <div>
                    <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Philosophy: Sculpting Icons</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                        Founded on a passion for the sublime, Wow Graphic was born from a desire to transcend traditional photography. We believe that every image has the power to tell a profound story—to evoke emotion, to challenge perception, and to create an icon.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Our journey is one of relentless pursuit of perfection, blending technical mastery with an innate artistic intuition. We don't just capture moments; we sculpt them, turning raw vision into enduring works of art that define brands and captivate the world.
                    </p>
                </div>
            </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>The Core Team</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center group">
                    <div className="relative overflow-hidden">
                        <img src="https://files.catbox.moe/mgock6.jpeg" alt="Creative Director" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-black opacity-20"></div>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold">Abdulai Jalloh</h3>
                    <p className="text-amber-400">Founder & CEO</p>
                </div>
                <div className="text-center group">
                    <div className="relative overflow-hidden">
                        <img src="https://files.catbox.moe/3do2vv.JPG" alt="Lead Photographer" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                         <div className="absolute inset-0 bg-black opacity-20"></div>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold">Karim Marah</h3>
                    <p className="text-amber-400">Manager</p>
                </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;