import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BinaryBackground from '../components/BinaryBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DNAHelix from '../components/DNAHelix';
import VitruvianBackground from '../components/VitruvianBackground';
import ElementsBackground from '../components/ElementsBackground';
import VitruvianImage from '../components/VitruvianImage';

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
      <VitruvianBackground />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <ElementsBackground opacity={0.2} />
          <VitruvianImage />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="mx-auto md:mx-0">
              {/* Logo Tree component removed */}
              <div className="w-64 h-64"></div>
            </div>
            
            <div className="space-y-16 md:-ml-12">
              <div className="md:-ml-12">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                  L.I.F.E.
                </h1>
                <p className="text-lg text-white/80 mb-2">
                  Longevity. Immunity. Fitness. Energy.
                </p>
                <p className="text-lg text-white/80">
                  Advanced semantic network of longevity. Pioneering next-generation epigenetic protocols and advanced cellular rejuvenation technologies.
                </p>
              </div>
              
              <div className="space-y-6 md:-ml-16">
                <div className="poem-text">
                  <p className="poem-line">"Cells bloom anew, restoring youth with endless might</p>
                  <p className="poem-line">Genes map secrets, unveiling truths in timeless light</p>
                  <p className="poem-line">Minds stay guarded, preserving wisdom in eternal fight"</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-20">
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
        
        <div className="absolute bottom-20 right-6 text-xs font-mono z-10">
          <div className="flex items-center space-x-2 mb-2">
            <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
            <span className="text-white/70">BUY ON SOLANA</span>
          </div>
          <div className="text-white/50 break-all max-w-xs">
            CA X9BLQmZA7qdWYJKJ6VTmnMiBuzQq3dNZS8fFMU5aY
          </div>
        </div>
      </section>
      
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
      
      <section 
        ref={addToRefs as React.RefCallback<HTMLElement>} 
        className="py-24 opacity-0 roadmap-phases"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Roadmap</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our strategic timeline for advancing longevity science and developing breakthrough technologies.
            </p>
            <div className="h-1 w-20 bg-white/20 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2"></div>
              
              <div className="space-y-24">
                <div className="relative" data-phase="1">
                  <div className="absolute left-1/2 top-0 h-5 w-5 bg-blue-400 rounded-full transform -translate-x-1/2"></div>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="md:text-right md:pr-12">
                      <div className="glass-panel p-6 md:ml-auto">
                        <div className="text-blue-400 font-mono mb-2">PHASE 1 - Q1 2025</div>
                        <h3 className="text-xl font-bold mb-3">Foundation & Community</h3>
                        <div className="space-y-2">
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>Establish research partnerships with leading institutions</span>
                          </div>
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>Community building and ambassador program launch</span>
                          </div>
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>Initial funding round for key research initiatives</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative" data-phase="2">
                  <div className="absolute left-1/2 top-0 h-5 w-5 bg-blue-400 rounded-full transform -translate-x-1/2"></div>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="md:text-right md:pr-12">
                      <div className="glass-panel p-6 md:ml-auto">
                        <div className="text-blue-400 font-mono mb-2">PHASE 2 - Q2 2025</div>
                        <h3 className="text-xl font-bold mb-3">Research Expansion</h3>
                        <div className="space-y-2">
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>Launch of multi-center clinical trials</span>
                          </div>
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>Development of proprietary longevity biomarkers</span>
                          </div>
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>Creation of decentralized research data platform</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative" data-phase="3">
                  <div className="absolute left-1/2 top-0 h-5 w-5 bg-blue-400 rounded-full transform -translate-x-1/2"></div>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="md:text-right md:pr-12">
                      <div className="glass-panel p-6 md:ml-auto">
                        <div className="text-blue-400 font-mono mb-2">PHASE 3 - Q3 2025</div>
                        <h3 className="text-xl font-bold mb-3">Technology Development</h3>
                        <div className="space-y-2">
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>Initial therapeutics development and testing</span>
                          </div>
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>Expansion of research to include AI-driven discovery</span>
                          </div>
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>Launch of community access to research findings</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative" data-phase="4">
                  <div className="absolute left-1/2 top-0 h-5 w-5 bg-blue-400/50 rounded-full transform -translate-x-1/2"></div>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="md:text-right md:pr-12">
                      <div className="glass-panel p-6 border-dashed border md:ml-auto">
                        <div className="text-blue-400/70 font-mono mb-2">PHASE 4 - Q4 2025</div>
                        <h3 className="text-xl font-bold mb-3">Global Implementation</h3>
                        <div className="space-y-2">
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>First-generation therapeutics available to token holders</span>
                          </div>
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>Global expansion of research initiatives</span>
                          </div>
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>Development of personalized longevity protocols</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block h-full">
              <DNAHelix className="h-full" />
            </div>
          </div>
        </div>
      </section>
      
      <section 
        ref={addToRefs as React.RefCallback<HTMLElement>} 
        className="py-24 bg-gradient-to-b from-[#080810] to-black opacity-0"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Become part of a global community dedicated to extending human lifespans and advancing longevity research.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link 
              to="/community" 
              className="button-shine inline-flex items-center justify-center px-8 py-4 border border-white/20 text-lg font-medium rounded-md text-white bg-black hover:bg-black/80 transition-colors duration-300 shadow-md"
            >
              Explore Community
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
