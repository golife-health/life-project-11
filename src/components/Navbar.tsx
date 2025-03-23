
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Check if current route matches the link
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 py-5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-center space-x-8">
          <a 
            href="https://docsend.com/view/j32pziykw4cnmyvr" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`nav-link ${isActive('/whitepaper') ? 'text-primary font-medium' : 'footer-link'}`}
          >
            [ Whitepaper ]
          </a>
          <Link 
            to="/manifesto" 
            className={`nav-link ${isActive('/manifesto') ? 'text-primary font-medium' : 'footer-link'}`}
          >
            [ Manifesto ]
          </Link>
          <Link 
            to="/research" 
            className={`nav-link ${isActive('/research') ? 'text-primary font-medium' : 'footer-link'}`}
          >
            [ Research Focus ]
          </Link>
          <Link 
            to="/docs" 
            className={`nav-link ${isActive('/docs') ? 'text-primary font-medium' : 'footer-link'}`}
          >
            [ Docs ]
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
