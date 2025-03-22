
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
    <div className="min-h-screen">
      <BinaryBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 opacity-0 animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Funding Longevity Research
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                A revolutionary approach to extend human lifespan through advanced genetic and cellular research, powered by blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/ambassador" 
                  className="btn-primary button-shine"
                >
                  Become an Ambassador
                </Link>
                <Link 
                  to="/docs" 
                  className="btn-secondary button-shine"
                >
                  Read Docs
                </Link>
              </div>
            </div>
            
            <div 
              className="opacity-0 animate-fade-up" 
              style={{ animationDelay: '0.2s' }}
            >
              <LogoTree className="max-w-sm mx-auto md:ml-auto md:mr-0" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Research Section */}
      <section className="py-20" ref={addToRefs}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A longevity coin funding research to extend your lifespan
            </h2>
            <p className="text-lg text-gray-600">
              Our protocol enables direct funding of cutting-edge research in genetic engineering, cellular rejuvenation, and lifespan extension technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card opacity-0">
              <div className="h-40 rounded-xl bg-gray-50 flex items-center justify-center mb-5">
                <span className="text-3xl font-light">🧬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Genetic Research</h3>
              <p className="text-gray-600">
                Funding pioneering studies in genetic modification to address age-related cellular degradation and enhance longevity pathways.
              </p>
            </div>
            
            <div className="feature-card opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="h-40 rounded-xl bg-gray-50 flex items-center justify-center mb-5">
                <span className="text-3xl font-light">🔬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cellular Rejuvenation</h3>
              <p className="text-gray-600">
                Developing technologies to restore aging cells to their youthful state through targeted molecular interventions.
              </p>
            </div>
            
            <div className="feature-card opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="h-40 rounded-xl bg-gray-50 flex items-center justify-center mb-5">
                <span className="text-3xl font-light">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lifespan Extension</h3>
              <p className="text-gray-600">
                Creating comprehensive protocols that combine multiple interventions to significantly extend healthy human lifespans.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-16 bg-gray-50" ref={addToRefs}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto opacity-0">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-light italic mb-6 leading-relaxed text-gray-700">
                "Cells bloom anew, restoring youth with endless might<br />
                Genes map secrets, unveiling truths in timeless light<br />
                Minds stay guarded, preserving wisdom in eternal fight"
              </p>
              <footer className="text-sm text-gray-500">
                — The $LIFE Protocol Manifesto
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      
      {/* Community Section */}
      <section className="py-20" ref={addToRefs}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join our growing community
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Connect with like-minded individuals passionate about advancing human longevity and the future of biotechnology.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/community" 
                  className="btn-primary button-shine"
                >
                  Join The Community
                </Link>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary button-shine"
                >
                  @longevitychain
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center shadow-sm">
                <span className="text-4xl">👥</span>
              </div>
              <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center shadow-sm">
                <span className="text-4xl">🧪</span>
              </div>
              <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center shadow-sm">
                <span className="text-4xl">🔗</span>
              </div>
              <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center shadow-sm">
                <span className="text-4xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-black text-white" ref={addToRefs}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to join the longevity revolution?
              </h2>
              <p className="text-lg opacity-80 mb-8">
                Become a $LIFE Ambassador and help shape the future of human lifespan extension.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/ambassador" 
                  className="button-shine inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors"
                >
                  Become an Ambassador
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="font-mono text-xs">
                <div className="mb-4 text-gray-400">BUY ON SOLANA</div>
                <div className="text-gray-400">ViaDC7YmWVYkSERPvY9oWDmXUGRXJ0UGFX</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
