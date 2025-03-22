
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LogoTree from '../components/LogoTree';
import BinaryBackground from '../components/BinaryBackground';

const Index = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <BinaryBackground />
      
      {/* Top right logo */}
      <div className="absolute top-4 right-6 text-xl font-bold tracking-wider">
        $LIFE
      </div>
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="mx-auto md:mx-0">
              <LogoTree className="w-64 h-64" />
            </div>
            
            <div className="space-y-16">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                  LIFE TOKEN
                </h1>
                <p className="text-lg text-white/80">
                  A longevity coin funding research to extend your lifespan
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="poem-text">
                  <p className="poem-line">"Cells bloom anew, restoring youth with endless might</p>
                  <p className="poem-line">Genes map secrets, unveiling truths in timeless light</p>
                  <p className="poem-line">Minds stay guarded, preserving wisdom in eternal fight"</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="research-pillar">
                  <span>Regenerative Medicine</span>
                  <span className="research-pillar-number">v.0.1 →</span>
                </div>
                <div className="research-pillar">
                  <span>Cellular Senescence</span>
                  <span className="research-pillar-number">v.0.2 →</span>
                </div>
                <div className="research-pillar">
                  <span>Genomics and Epigenetics</span>
                  <span className="research-pillar-number">v.0.3 →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Buy section */}
        <div className="absolute bottom-20 right-6 text-xs font-mono">
          <div className="flex items-center space-x-2 mb-2">
            <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
            <span className="text-white/70">BUY ON SOLANA</span>
          </div>
          <div className="text-white/50 break-all max-w-xs">
            CA X9BLQmZA7qdWYJKJ6VTmnMiBuzQq3dNZS8fFMU5aY
          </div>
        </div>
        
        {/* Footer navigation */}
        <div className="absolute bottom-6 w-full text-center">
          <div className="flex justify-center space-x-2">
            <Link to="/community" className="footer-link">[ Join The Community ]</Link>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="footer-link">[ X @longevitylifetoken ]</a>
            <Link to="/ambassador" className="footer-link">[ Join as $LIFE Ambassador ]</Link>
            <Link to="/docs" className="footer-link">[ Docs ]</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
