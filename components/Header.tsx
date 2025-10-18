import React, { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { NAV_LINKS } from '../Constant';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);
  
  const navLinkIds = NAV_LINKS.map(link => link.path.substring(1));
  const activeId = useScrollSpy(navLinkIds, 100);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault();
    const targetId = path.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };


  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all ease-in-out duration-500 ${scrolled || isMobileMenuOpen ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-wider transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wow Graphic
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
               <a key={link.name} href={link.path} onClick={(e) => handleNavClick(e, link.path)} className={`transition-colors duration-300 tracking-widest text-sm uppercase ${
                 activeId === link.path.substring(1) ? 'text-amber-400' : 'text-gray-300 hover:text-white'
               }`}>
                 {link.name}
               </a>
            ))}
          </nav>
          <a href="https://wa.me/+23277931814" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-amber-400 text-black px-6 py-2 font-bold hover:bg-amber-300 transition-all duration-300">
            Book Now
          </a>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} aria-label="Open menu" className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden animate-fadeIn">
              <nav className="flex flex-col items-center justify-center h-full text-center">
                  <div className="absolute top-0 right-0 px-6 py-5">
                      <button onClick={toggleMobileMenu} aria-label="Close menu" className="text-white focus:outline-none">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </button>
                  </div>
                  {NAV_LINKS.map((link) => (
                      <a key={link.name} href={link.path} onClick={(e) => handleNavClick(e, link.path)} className={`text-3xl transition-colors duration-300 py-4 ${
                        activeId === link.path.substring(1) ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
                      }`}>
                          {link.name}
                      </a>
                  ))}
                  <a href="https://wa.me/+23277931814" target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu} className="mt-8 bg-amber-400 text-black px-10 py-3 font-bold text-lg hover:bg-amber-300 transition-all duration-300">
                      Book Now
                  </a>
              </nav>
          </div>
      )}
    </>
  );
};

export default Header;