import React, { useState } from 'react';
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

// FIX: Moved SVG Icon components to the top of the file to fix declaration errors.
const CameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
);

const VideoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />
    </svg>
);

const LightbulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 013.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 013.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.554L16.5 21.75l-.398-1.196a3.375 3.375 0 00-2.455-2.456L12.75 18l1.196-.398a3.375 3.375 0 002.455-2.456L16.5 14.25l.398 1.196a3.375 3.375 0 002.456 2.456L20.25 18l-1.196.398a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
);

const servicesData = [
    { 
        title: "Fashion & Editorial", 
        shortDescription: "Crafting visual narratives that define brands and captivate audiences in high fashion.",
        longDescription: "Our team specializes in producing powerful, story-driven imagery for top fashion houses and publications. We blend classic aesthetics with a modern, futuristic edge to create timeless photographs that resonate with a luxury audience.",
        deliverables: ["Full Photoshoot Production", "High-End Retouching", "Cover-Ready Imagery", "Lookbook Creation"],
        icon: <CameraIcon/>,
        image: "https://picsum.photos/seed/fashion/1200/800"
    },
    { 
        title: "Campaign & Advertising", 
        shortDescription: "Developing iconic imagery for global campaigns that demands attention and drives results.",
        longDescription: "We conceptualize and execute high-impact advertising campaigns for luxury automotive, real estate, and global brands. Our focus is on creating visuals that are not only beautiful but also strategically aligned with brand goals to ensure maximum market impact.",
        deliverables: ["Concept Development", "Multi-Platform Visuals", "Storyboarding & Art Direction", "Global Licensing"],
        icon: <CameraIcon/>,
        image: "https://picsum.photos/seed/campaign/1200/800"
    },
    { 
        title: "Video Production", 
        shortDescription: "Full-service cinematic video production, from concept to final cut, for brands and artists.",
        longDescription: "From fashion films to brand documentaries, our video production services cover the entire pipeline. We use cinema-grade equipment and a world-class crew to produce compelling visual stories that engage and inspire.",
        deliverables: ["Cinematic 4K/8K Video", "Professional Editing & Color Grading", "Sound Design & Scoring", "Motion Graphics"],
        icon: <VideoIcon/>,
        image: "https://picsum.photos/seed/video/1200/800"
    },
    { 
        title: "Creative Direction", 
        shortDescription: "Providing a singular, powerful vision to guide every aspect of the creative process.",
        longDescription: "Our creative direction service provides a cohesive vision for your project. We work closely with your team to develop mood boards, define aesthetics, and oversee every creative detail to ensure a powerful and consistent final product.",
        deliverables: ["Brand Strategy & Positioning", "Mood Board & Concepting", "On-Set Art Direction", "Talent Sourcing"],
        icon: <LightbulbIcon/>,
        image: "https://picsum.photos/seed/creative/1200/800"
    },
];

const ServiceItem: React.FC<{ service: typeof servicesData[0], index: number, activeIndex: number | null, onToggle: (index: number) => void }> = ({ service, index, activeIndex, onToggle }) => {
    const isActive = index === activeIndex;
    return (
        <div className="border-b border-neutral-800">
            <button
                onClick={() => onToggle(index)}
                className="w-full flex justify-between items-center text-left py-6 px-4 hover:bg-neutral-900 transition-colors duration-300"
            >
                <div className="flex items-center">
                    <div className="text-amber-400 w-8 h-8 mr-4">{service.icon}</div>
                    <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
                </div>
                <div className={`transform transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${isActive ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 bg-neutral-900/50">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-2">
                             <img src={service.image} alt={service.title} className="object-cover w-full h-full" loading="lazy"/>
                        </div>
                        <div className="lg:col-span-3">
                            <p className="text-gray-300 mb-6">{service.longDescription}</p>
                            <h4 className="font-bold text-amber-400 mb-3 tracking-widest text-sm uppercase">Key Deliverables</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-gray-400">
                                {service.deliverables.map(item => (
                                    <li key={item} className="flex items-center">
                                         <svg className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Services: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="services" className="py-20 md:py-32 bg-neutral-950">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Our Expertise</h2>
                        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">A suite of world-class services tailored for luxury brands and visionary clients.</p>
                    </div>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="max-w-4xl mx-auto border-t border-neutral-800">
                       {servicesData.map((service, index) => (
                           <ServiceItem 
                                key={index} 
                                service={service} 
                                index={index} 
                                activeIndex={activeIndex} 
                                onToggle={handleToggle} 
                            />
                       ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Services;