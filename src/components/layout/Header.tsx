import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  // Handle orientation changes
  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'News & Media', href: '/news-media' },
    { label: 'Team', href: '/team' },
    { label: 'Training', href: '/training' },
    { label: 'Juniors & Recruitment', href: '/juniors-recruitment' },
    { label: 'Fixtures & Results', href: '/fixtures-results' },
    { label: 'Fun', href: '/fun' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold lg:text-2xl">
              Rugby Club
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-slate-300 transition-colors duration-200 text-sm xl:text-base whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-2">
            <div className={`flex flex-col space-y-1 pb-3 ${
              isLandscape ? 'max-h-[calc(100vh-4rem)] overflow-y-auto' : ''
            }`}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md hover:bg-slate-800 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;