import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import About from './components/About';
import Attorneys from './components/Attorneys';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Disclaimer from './components/Disclaimer';

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle navigation state for scrolling to sections
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Clear the state to prevent repeated scrolling
        navigate(location.pathname, { replace: true });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.state, navigate, location.pathname]);

  return (
    <>
      <Hero />
      <About />
      <PracticeAreas />
      <Attorneys />
      <Contact />
    </>
  );
}

function App() {
  useEffect(() => {
    document.title = 'DPD Law Offices | Legal Excellence';
  }, []);

  return (
    <Router>
      <div className="font-sans text-slate-800">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;