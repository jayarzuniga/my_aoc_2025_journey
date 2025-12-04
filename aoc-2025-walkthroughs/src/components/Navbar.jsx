import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'All Days', path: '/all-days' },
    { name: 'About', path: '/about' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-3 glass shadow-lg' : 'py-4 bg-background-darker/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-3xl group-hover:rotate-12 transition-transform duration-300">
              🎄
            </span>
            <span className="text-xl md:text-2xl font-black text-primary tracking-wide hover:text-primary-light transition-colors">
              Advent of Cyber 2025
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  to={page.path}
                  className={`relative text-base font-medium transition-colors ${
                    location.pathname === page.path 
                      ? 'text-primary' 
                      : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  {page.name}
                  {location.pathname === page.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary animate-underline"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* External Link */}
            <a
              href="https://tryhackme.com/christmas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 text-primary rounded-lg font-medium hover:bg-primary hover:text-background-darker transition-all duration-300"
            >
              <span>TryHackMe</span>
              <span className="text-sm">🚀</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-background-card transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen 
                    ? "M6 18L18 6M6 6l12 12" 
                    : "M4 6h16M4 12h16M4 18h16"
                  } 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-background-card/95 backdrop-blur-lg border-t border-ui-border">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                location.pathname === page.path 
                  ? 'bg-primary/20 text-primary border border-primary/30' 
                  : 'text-text-secondary hover:bg-background-overlay hover:text-primary'
              }`}
            >
              {page.name}
            </Link>
          ))}
          
          {/* Mobile External Link */}
          <a
            href="https://tryhackme.com/christmas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium bg-primary/20 border border-primary/30 text-primary hover:bg-primary hover:text-background-darker transition-all duration-300"
          >
            <span>TryHackMe</span>
            <span>🚀</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;