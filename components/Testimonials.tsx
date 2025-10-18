
import React, { useState, useEffect, useCallback } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonialsData = [
    {
        quote: "Wow Graphic doesn't just take pictures; they create legends. Their vision is unparalleled.",
        author: "Donatella Versace",
        company: "Artistic Director, Versace"
    },
    {
        quote: "The team operates at a level of professionalism and creativity that is simply world-class. A true partner in creation.",
        author: "Jean-Claude Biver",
        company: "Former CEO, TAG Heuer"
    },
    {
        quote: "For our latest campaign, we needed iconic. Wow Graphic delivered beyond our wildest expectations.",
        author: "Creative Director",
        company: "Gucci"
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    const nextTestimonial = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, []);

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(nextTestimonial, 5000);
            return () => clearInterval(interval);
        }
    }, [isVisible, nextTestimonial]);

    const currentTestimonial = testimonialsData[currentIndex];

    return (
        <section id="testimonials" className="py-20 md:py-32 bg-black">
            <div className="container mx-auto px-6 text-center" ref={ref}>
                 <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <svg className="w-16 h-16 mx-auto mb-6 text-neutral-700" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.33 6.984h5.336l-2.668 8h-5.336l2.668-8zM22.668 6.984h5.336l-2.668 8h-5.336l2.668-8zM0 25.016h10.668l-4-12h-6.668v12zM13.332 25.016h10.668l-4-12h-6.668v12z"></path>
                    </svg>
                    <div className="relative h-48 md:h-32">
                      {testimonialsData.map((testimonial, index) => (
                         <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="text-2xl md:text-3xl italic text-white max-w-4xl mx-auto" style={{ fontFamily: "'Playfair Display', serif" }}>
                                "{testimonial.quote}"
                            </p>
                            <div className="mt-6">
                                <p className="font-bold tracking-widest text-sm uppercase">{testimonial.author}</p>
                                <p className="text-amber-400">{testimonial.company}</p>
                            </div>
                         </div>
                      ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
