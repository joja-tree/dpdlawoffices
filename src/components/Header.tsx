import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';
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
        isScrolled ? 'bg-dark shadow-md py-3' : 'bg-transparent py-5'
      }`
    : 'fixed w-full z-50 bg-dark shadow-md py-3';

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-3 text-2xl font-serif font-bold text-white hover:text-primary transition-colors"
          >
            <Scale className="w-8 h-8" />
            <span>DPD Law</span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              ['Home', 'About', 'Practice Areas', 'Attorneys', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleNavigation(e, item.toLowerCase().replace(' ', '-'))}
                  className="text-white hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))
            ) : (
              <Link to="/" className="text-white hover:text-primary transition-colors">
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
        <div className="md:hidden bg-dark shadow-lg">
          <div className="px-4 py-3 space-y-4">
            {isHomePage ? (
              ['Home', 'About', 'Practice Areas', 'Attorneys', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleNavigation(e, item.toLowerCase().replace(' ', '-'))}
                  className="block text-white py-2 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))
            ) : (
              <Link 
                to="/" 
                className="block text-white py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;