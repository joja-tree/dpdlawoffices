import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900 shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-white tracking-wide">
              <span className="text-amber-600">DPD</span> Law Offices
            </h1>
          </div>

          {/* Top Contact Info (Desktop) */}
          <div className="hidden md:flex items-center space-x-6 text-white">
            <a href="tel:+9989699662" className="flex items-center space-x-2 text-sm hover:text-amber-500 transition-colors">
              <Phone size={16} />
              <span>(998) 969-9662</span>
            </a>
            <a href="mailto:contactus@dpdlawoffices.com" className="flex items-center space-x-2 text-sm hover:text-amber-500 transition-colors">
              <Mail size={16} />
              <span>contactus@dpdlawoffices.com</span>
            </a>
          </div>

          {/* Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Practice Areas', 'Attorneys', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-amber-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 shadow-lg">
          <div className="px-4 py-3 space-y-4">
            {['Home', 'About', 'Practice Areas', 'Attorneys', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-white py-2 hover:text-amber-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-700 space-y-3">
              <a href="tel:+9989699662" className="flex items-center space-x-2 text-white hover:text-amber-500 transition-colors">
                <Phone size={16} />
                <span>(998) 969-9662</span>
              </a>
              <a href="mailto:contactus@dpdlawoffices.com" className="flex items-center space-x-2 text-white hover:text-amber-500 transition-colors">
                <Mail size={16} />
                <span>contactus@dpdlawoffices.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;