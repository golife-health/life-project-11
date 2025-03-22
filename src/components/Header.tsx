
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
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-md border-b' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="font-mono text-xs tracking-tighter opacity-40">CA:8YrYNThKsA8zZH55WLrw26NzM8kfUNmBwDZMe4FjSMk</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/ambassador" 
            className={`nav-link opacity-0 animate-fade-in ${isActive('/ambassador') ? 'text-primary font-semibold' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            Become an Ambassador
          </Link>
          <Link 
            to="/docs" 
            className={`nav-link opacity-0 animate-fade-in ${isActive('/docs') ? 'text-primary font-semibold' : ''}`}
            style={{ animationDelay: '0.3s' }}
          >
            Docs
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
