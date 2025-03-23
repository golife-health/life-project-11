import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LogoTree from '../components/LogoTree';
import BinaryBackground from '../components/BinaryBackground';
import Navbar from '../components/Navbar';
import RotatingEarth from '../components/RotatingEarth';
import Footer from '../components/Footer';

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
      
      {/* Navbar */}
      <Navbar />
      
      {/* Top right logo - updated to use Link for redirection */}
      <div className="absolute top-4 right-6 text-xl font-bold tracking-wider">
        <Link to="/" className="hover:text-primary transition-colors">
          $LIFE
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="mx-auto md:mx-0">
              <LogoTree className="w-64 h-64" />
            </div>
            
            <div className="space-y-16 md:-ml-12">
              <div className="md:-ml-12">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                  LIFE TOKEN
                </h1>
                <p className="text-lg text-white/80">
                  A longevity coin funding research to extend your lifespan
                </p>
              </div>
              
              <div className="space-y-6 md:-ml-16">
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
        
        {/* Rotating Earth - MOVED to be right after Buy section and before About section */}
        <div className="absolute bottom-28 left-0 right-0 mb-36">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="text-center">
                <h2 className="text-sm uppercase tracking-wider text-white/60 mb-2 font-mono">Global Longevity Initiative</h2>
                <RotatingEarth />
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer navigation section REMOVED */}
      </section>
      
      {/* About Section - NEW */}
      <section 
        ref={addToRefs as React.RefCallback<HTMLElement>} 
        className="py-24 opacity-0"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Extending Human Lifespan</h2>
            <div className="h-1 w-20 bg-white/20 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="text-blue-400 mb-4 text-xl font-mono">01</div>
              <h3 className="text-xl font-bold mb-3">Regenerative Medicine</h3>
              <p className="text-white/70">
                Funding breakthrough treatments that repair and replace damaged tissues and organs,
                reversing the effects of aging at the cellular level.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="text-blue-400 mb-4 text-xl font-mono">02</div>
              <h3 className="text-xl font-bold mb-3">Cellular Senescence</h3>
              <p className="text-white/70">
                Identifying and removing senescent cells that contribute to aging and age-related
                diseases, rejuvenating tissues and improving overall health.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="text-blue-400 mb-4 text-xl font-mono">03</div>
              <h3 className="text-xl font-bold mb-3">Genomics & Epigenetics</h3>
              <p className="text-white/70">
                Leveraging advanced genetic technologies to understand and modify the epigenetic markers
                that control aging processes throughout the human lifespan.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tokenomics Section - NEW */}
      <section 
        ref={addToRefs as React.RefCallback<HTMLElement>} 
        className="py-24 bg-gradient-to-b from-black to-[#080810] opacity-0"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tokenomics</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The $LIFE token is designed to fund research while creating a sustainable economic model
              for long-term growth and impact.
            </p>
            <div className="h-1 w-20 bg-white/20 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="space-y-6">
              <div className="glass-panel p-6">
                <h3 className="text-xl font-bold mb-4">Token Distribution</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Research Funding</span>
                    <span className="text-white font-mono">45%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-white/70">Community & Ecosystem</span>
                    <span className="text-white font-mono">30%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-white/70">Liquidity & Reserves</span>
                    <span className="text-white font-mono">15%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-white/70">Team & Development</span>
                    <span className="text-white font-mono">10%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-panel p-6">
                <h3 className="text-xl font-bold mb-4">Token Utility</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-blue-400/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-white/70">Governance voting on research funding allocation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-blue-400/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-white/70">Access to exclusive longevity research data and studies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-blue-400/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-white/70">Participation in community events and expert panels</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-blue-400/20 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-white/70">Early access to longevity technologies and treatments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Roadmap Section - UPDATED for current date */}
      <section 
        ref={addToRefs as React.RefCallback<HTMLElement>} 
        className="py-24 opacity-0"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Roadmap</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our strategic timeline for advancing longevity science and developing breakthrough technologies.
            </p>
            <div className="h-1 w-20 bg-white/20 mx-auto mt-6"></div>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2"></div>
            
            <div className="space-y-24">
              {/* Phase 1 */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 h-5 w-5 bg-blue-400 rounded-full transform -translate-x-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <div className="glass-panel p-6 md:ml-auto">
                      <div className="text-blue-400 font-mono mb-2">PHASE 1 - Q1 2025</div>
                      <h3 className="text-xl font-bold mb-3">Foundation & Community</h3>
                      <ul className="text-white/70 space-y-2 list-disc list-inside md:list-outside">
                        <li>Establish research partnerships with leading institutions</li>
                        <li>Community building and ambassador program launch</li>
                        <li>Initial funding round for key research initiatives</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:hidden h-16"></div>
                </div>
              </div>
              
              {/* Phase 2 */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 h-5 w-5 bg-blue-400 rounded-full transform -translate-x-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:hidden h-16"></div>
                  <div className="md:pl-12">
                    <div className="glass-panel p-6">
                      <div className="text-blue-400 font-mono mb-2">PHASE 2 - Q2 2025</div>
                      <h3 className="text-xl font-bold mb-3">Research Expansion</h3>
                      <ul className="text-white/70 space-y-2 list-disc list-inside">
                        <li>Launch of multi-center clinical trials</li>
                        <li>Development of proprietary longevity biomarkers</li>
                        <li>Creation of decentralized research data platform</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phase 3 */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 h-5 w-5 bg-blue-400 rounded-full transform -translate-x-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <div className="glass-panel p-6 md:ml-auto">
                      <div className="text-blue-400 font-mono mb-2">PHASE 3 - Q3 2025</div>
                      <h3 className="text-xl font-bold mb-3">Technology Development</h3>
                      <ul className="text-white/70 space-y-2 list-disc list-inside md:list-outside">
                        <li>Initial therapeutics development and testing</li>
                        <li>Expansion of research to include AI-driven discovery</li>
                        <li>Launch of community access to research findings</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:hidden h-16"></div>
                </div>
              </div>
              
              {/* Phase 4 */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 h-5 w-5 bg-blue-400/50 rounded-full transform -translate-x-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:hidden h-16"></div>
                  <div className="md:pl-12">
                    <div className="glass-panel p-6 border-dashed border">
                      <div className="text-blue-400/70 font-mono mb-2">PHASE 4 - Q4 2025</div>
                      <h3 className="text-xl font-bold mb-3">Global Implementation</h3>
                      <ul className="text-white/70 space-y-2 list-disc list-inside">
                        <li>First-generation therapeutics available to token holders</li>
                        <li>Global expansion of research initiatives</li>
                        <li>Development of personalized longevity protocols</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Section - NEW */}
      <section 
        ref={addToRefs as React.RefCallback<HTMLElement>} 
        className="py-24 bg-gradient-to-b from-[#080810] to-black opacity-0"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Become part of a movement that's dedicated to extending human health and lifespan through
              scientific advancement and collective action.
            </p>
            <div className="h-1 w-20 bg-white/20 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/community" className="feature-card hover:border-blue-400/30 transition-all duration-300 group">
              <div className="h-12 w-12 rounded-full bg-blue-400/10 mb-6 flex items-center justify-center group-hover:bg-blue-400/20 transition-colors">
                <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Community Members</h3>
              <p className="text-white/70 mb-4">
                Join discussions, access exclusive content, and help shape the future of longevity research.
              </p>
              <div className="text-blue-400 text-sm font-mono group-hover:translate-x-1 transition-transform">Join now →</div>
            </Link>
            
            <Link to="/ambassador" className="feature-card hover:border-blue-400/30 transition-all duration-300 group">
              <div className="h-12 w-12 rounded-full bg-blue-400/10 mb-6 flex items-center justify-center group-hover:bg-blue-400/20 transition-colors">
                <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Ambassadors</h3>
              <p className="text-white/70 mb-4">
                Represent $LIFE in your community, spread awareness, and earn rewards for your contributions.
              </p>
              <div className="text-blue-400 text-sm font-mono group-hover:translate-x-1 transition-transform">Apply now →</div>
            </Link>
            
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="feature-card hover:border-blue-400/30 transition-all duration-300 group">
              <div className="h-12 w-12 rounded-full bg-blue-400/10 mb-6 flex items-center justify-center group-hover:bg-blue-400/20 transition-colors">
                <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Social Media</h3>
              <p className="text-white/70 mb-4">
                Follow our journey on social media for the latest updates, research findings, and community events.
              </p>
              <div className="text-blue-400 text-sm font-mono group-hover:translate-x-1 transition-transform">Follow us →</div>
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
