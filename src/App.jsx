import React, { useState, useEffect } from 'react';
import IntroLoader from './components/IntroLoader';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Categories from './components/Categories';
import About from './components/About';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show intro for 2.8s then hide
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <IntroLoader show={loading} />
      {!loading && (
        <>
          <Header />
          <main>
            <HeroSlider />
            <Categories />
            <About />
            <Process />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
