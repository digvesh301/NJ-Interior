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
  // 'loading' controls the intro overlay
  // 'mounted' controls whether main content is in the DOM
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Pre-mount the main content immediately so images start loading
    setMounted(true);

    // Hide the intro after 2.8s (triggers exit slide-up animation)
    const hideTimer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(hideTimer);
  }, []);

  return (
    <>
      {/* Intro overlay — always rendered until fully exited */}
      <IntroLoader show={loading} />

      {/* Main content — pre-mounted immediately so images preload,
          but visually hidden by the loader sitting on top (z-index 10000) */}
      {mounted && (
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
