
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100 py-8 mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-sm font-mono tracking-tight opacity-60">$LIFE Research Initiative</span>
            </Link>
            <p className="text-sm text-gray-500 max-w-md">
              A longevity token funding research to extend your lifespan through advanced genetic and cellular technologies.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold mb-3">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/community" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Join The Community
                </Link>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  @longevitychain
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ambassador" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Join as $LIFE Ambassador
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Docs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">© 2025 $LIFE. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-xs font-mono text-gray-400 hover:text-gray-600 transition-colors">
              BUY ON SOLANA
            </button>
            <button className="text-xs font-mono text-gray-400 hover:text-gray-600 transition-colors">
              ViaDC7YmWVYkSERPvY9oWDmXUGRXJ0UGFX
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
