import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import About from './components/About';
import Attorneys from './components/Attorneys';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'Lawson & Associates | Legal Excellence';
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="font-sans text-slate-800">
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
      <Attorneys />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;