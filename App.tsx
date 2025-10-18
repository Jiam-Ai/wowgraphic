
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Studio from './components/Studio';
import Testimonials from './components/Testimonials';
import Press from './components/Press';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white" style={{ fontFamily: "'Lato', sans-serif" }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Studio />
        <Testimonials />
        <Press />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
