import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              <span className="text-blue-500">DPD</span> Law Offices
            </h3>
            <p className="text-slate-400 mb-6">
              Dedicated to providing exceptional legal services with integrity, expertise, and personalized attention.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Practice Areas', 'Attorneys', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-400 hover:text-blue-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              {['Corporate Law', 'Family Law', 'Civil Law', 'Criminal Law', 'Labor Law', 'Real Estate'].map((item) => (
                <li key={item}>
                  <a 
                    href="#practice-areas"
                    className="text-slate-400 hover:text-blue-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Information</h4>
            <address className="text-slate-400 not-italic space-y-2">
              <p>Address Pending</p>
              <p>Phone: (998) 969-9662</p>
              <p>Email: contactus@dpdlawoffices.com</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} DPD Law Offices. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-blue-500 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;