import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroLoader from './components/IntroLoader';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [loading, setLoading] = React.useState(true);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <BrowserRouter>
      <IntroLoader show={loading} />
      {mounted && (
        <>
          <Header />
          <main>
            <Routes>
              <Route path="/"          element={<HomePage />} />
              <Route path="/about"     element={<AboutPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact"   element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
