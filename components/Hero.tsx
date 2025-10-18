import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        poster="https://picsum.photos/1920/1080"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-woman-in-a-white-dress-and-a-hat-on-a-terrace-40544-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20 px-4 animate-fadeIn">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          Wow Graphic
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-amber-400 tracking-widest">
          Where Vision Becomes Iconic.
        </p>
      </div>
    </section>
  );
};

export default Hero;