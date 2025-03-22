
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if current route matches the link
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/90 backdrop-blur-md border-b shadow-sm' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          <span className="font-mono text-xs tracking-tighter opacity-40 hover:opacity-70 transition-opacity">
            CA:8YrYNThKsA8zZH55WLrw26NzM8kfUNmBwDZMe4FjSMk
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-10">
          {[
            { path: '/ambassador', label: 'Become an Ambassador', delay: '0.2s' },
            { path: '/docs', label: 'Docs', delay: '0.3s' },
            { path: '/community', label: 'Community', delay: '0.4s' }
          ].map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`nav-link opacity-0 animate-fade-in ${isActive(item.path) ? 'text-primary font-medium' : ''}`}
              style={{ 
                animationDelay: item.delay, 
                animationFillMode: 'forwards'
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
