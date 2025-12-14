import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Lock } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tax Services', path: '/tax-services' },
    { name: 'Bookkeeping', path: '/bookkeeping' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-800">
      {/* Navigation */}
      <nav className="bg-navy sticky top-0 z-50 shadow-lg print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                <Logo className="h-10 w-10" />
                <span className="text-white text-2xl font-bold tracking-tight">Cynergy</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 flex items-center ${
                    isActive(link.path) ? 'text-emerald' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-navy border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center ${
                    isActive(link.path)
                      ? 'bg-gray-900 text-emerald'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow print:w-full print:m-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white print:hidden">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
             <div className="flex items-start gap-3">
               <Logo className="h-8 w-8" />
               <span className="text-2xl font-bold tracking-tight">Cynergy</span>
             </div>
             <div>
               <h4 className="font-bold text-emerald mb-4">Contact</h4>
               <p className="text-sm text-gray-400">taxteam@cynergytaxandbooks.com</p>
               <p className="text-sm text-gray-400 mt-2">See About page for office locations.</p>
             </div>
             <div>
                <h4 className="font-bold text-emerald mb-4">Quick Links</h4>
                 <ul className="space-y-1 text-sm text-gray-400">
                   <li><Link to="/checklist" className="hover:text-white text-emerald">Tax Readiness Checklist</Link></li>
                   <li><Link to="/legal" className="hover:text-white">Privacy Policy</Link></li>
                   <li><Link to="/legal" className="hover:text-white">Disclaimer</Link></li>
                 </ul>
             </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>Cynergy Tax and Books | &copy; 2025 All Rights Reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
               <div className="flex items-center space-x-1">
                 <Lock className="w-4 h-4" />
                 <span>256-Bit SSL Secured</span>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;