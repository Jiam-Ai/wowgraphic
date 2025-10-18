
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

const portfolioItems = [
    { id: 1, title: 'Vogue Editorial', category: 'Fashion', img: 'https://picsum.photos/seed/vogue/800/1000' },
    { id: 2, title: 'Automotive Launch', category: 'Campaign', img: 'https://picsum.photos/seed/car/1000/800' },
    { id: 3, title: 'Architectural Digest', category: 'Real Estate', img: 'https://picsum.photos/seed/arch/800/1000' },
    { id: 4, title: 'Celebrity Portrait', category: 'Editorial', img: 'https://picsum.photos/seed/celeb/800/1000' },
    { id: 5, title: 'Luxury Watch Ad', category: 'eCommerce', img: 'https://picsum.photos/seed/watch/1000/800' },
    { id: 6, title: 'Cosmetics Campaign', category: 'Campaign', img: 'https://picsum.photos/seed/cosmetics/1000/800' },
];

const PortfolioItem: React.FC<{ item: typeof portfolioItems[0] }> = ({ item }) => (
    <div className="group relative overflow-hidden aspect-w-4 aspect-h-5">
        <img src={item.img} alt={item.title} className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-amber-400 text-sm">{item.category}</p>
        </div>
    </div>
);


const Portfolio: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];

    const filteredItems = activeFilter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    return (
        <section id="portfolio" className="py-20 md:py-32 bg-black">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Iconic Work</h2>
                        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">A curated selection of projects that showcase our commitment to excellence and creativity.</p>
                    </div>
                </AnimatedSection>
                
                <AnimatedSection>
                    <div className="flex justify-center flex-wrap gap-4 mb-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2 font-semibold rounded-sm transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${
                                    activeFilter === category
                                        ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                                        : 'bg-neutral-900 text-gray-300 hover:bg-neutral-800'
                                }`}
                                aria-pressed={activeFilter === category}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredItems.map((item) => (
                            <PortfolioItem key={item.id} item={item} />
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Portfolio;
