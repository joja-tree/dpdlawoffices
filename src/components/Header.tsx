import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const headerClass = isHomePage
    ? `fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900 shadow-md py-3' : 'bg-transparent py-5'
      }`
    : 'fixed w-full z-50 bg-slate-900 shadow-md py-3';

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={handleLogoClick}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://i.ibb.co/YTw7cHvd/Chat-GPT-Image-May-21-2025-11-40-27-PM.png" 
                alt="DPD Law Offices Logo" 
                className="h-[2.25rem] sm:h-[3rem] md:h-[3.75rem] w-auto"
              />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-white">
            <a href="tel:+9989699662" className="flex items-center space-x-2 text-sm hover:text-blue-500 transition-colors">
              <Phone size={16} />
              <span>(998) 969-9662</span>
            </a>
            <a href="mailto:contactus@dpdlawoffices.com" className="flex items-center space-x-2 text-sm hover:text-blue-500 transition-colors">
              <Mail size={16} />
              <span>contactus@dpdlawoffices.com</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              ['Home', 'About', 'Practice Areas', 'Attorneys', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleNavigation(e, item.toLowerCase().replace(' ', '-'))}
                  className="text-white hover:text-blue-500 transition-colors"
                >
                  {item}
                </a>
              ))
            ) : (
              <Link to="/" className="text-white hover:text-blue-500 transition-colors">
                Home
              </Link>
            )}
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 shadow-lg">
          <div className="px-4 py-3 space-y-4">
            {isHomePage ? (
              ['Home', 'About', 'Practice Areas', 'Attorneys', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleNavigation(e, item.toLowerCase().replace(' ', '-'))}
                  className="block text-white py-2 hover:text-blue-500 transition-colors"
                >
                  {item}
                </a>
              ))
            ) : (
              <Link 
                to="/" 
                className="block text-white py-2 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            )}
            <div className="pt-2 border-t border-slate-700 space-y-3">
              <a href="tel:+9989699662" className="flex items-center space-x-2 text-white hover:text-blue-500 transition-colors">
                <Phone size={16} />
                <span>(998) 969-9662</span>
              </a>
              <a href="mailto:contactus@dpdlawoffices.com" className="flex items-center space-x-2 text-white hover:text-blue-500 transition-colors">
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