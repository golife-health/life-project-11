import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BinaryBackground from '../components/BinaryBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DNAHelix from '../components/DNAHelix';
import VitruvianBackground from '../components/VitruvianBackground';
import ElementsBackground from '../components/ElementsBackground';
import VitruvianImage from '../components/VitruvianImage';
import LifeScienceBackground from '../components/LifeScienceBackground';
import CoreConceptsCarousel from '../components/CoreConceptsCarousel';
const Index = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, {
      threshold: 0.1
    });
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // Calculate parallax style for hero content
  const getHeroParallaxStyle = () => {
    const translateY = scrollY * 0.3; // Adjust this value to control parallax speed
    const opacity = Math.max(0, 1 - scrollY * 0.002); // Fade out as user scrolls

    return {
      transform: `translateY(-${translateY}px)`,
      opacity
    };
  };
  return <div className="min-h-screen bg-black text-white">
      <VitruvianBackground />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section - NO ELEMENTS AS REQUESTED */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <ElementsBackground opacity={0.2} />
          <VitruvianImage opacity={0.3} />
          {/* No LifeScienceBackground or FlowingLifeScienceElements as requested */}
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-300" style={getHeroParallaxStyle()} ref={heroContentRef}>
            
            <div className="mx-auto md:mx-0 order-first md:order-first">
              {/* Logo Tree component removed */}
              <div className="w-64 h-64"></div>
            </div>
            
            <div className="space-y-16 md:ml-12 order-last md:order-last">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                  L.I.F.E.
                </h1>
                <p className="text-lg text-white/80 mb-2">
                  Longevity. Immunity. Fitness. Energy.
                </p>
                <p className="text-lg text-white/80">
                  By blending ancient wellness wisdom with cutting-edge AI and decentralized collaboration, LIFE democratizes access to longevity insights — moving beyond the lab and into the hands of the community.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="poem-text">
                  <p className="poem-line">AI-Powered Knowledge Synthesis</p>
                  <p className="poem-line">&quot;Genes map secrets, unveiling truths in timeless light</p>
                  <p className="poem-line">Minds stay guarded, preserving wisdom in eternal fight"</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-20">
                <div className="research-pillar">
                  <span>Lifestyle-Driven Longevity Research</span>
                  <span className="research-pillar-number">v.0.1 →</span>
                </div>
                <div className="research-pillar">
                  <span>AI-Powered Knowledge Synthesis</span>
                  <span className="research-pillar-number">v.0.2 →</span>
                </div>
                <div className="research-pillar">
                  <span>Decentralized Collaboration &amp; Governance</span>
                  <span className="research-pillar-number">v.0.3 →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-20 right-6 text-xs font-mono z-10">
          
          <div className="text-white/50 break-all max-w-xs">
            CA X9BLQmZA7qdWYJKJ6VTmnMiBuzQq3dNZS8fFMU5aY
          </div>
        </div>
      </section>
      
      <section ref={addToRefs as React.RefCallback<HTMLElement>} className="py-24 opacity-0 relative">
        {/* Section 1: DNA elements moving bidirectionally */}
        <div className="absolute inset-0">
          <LifeScienceBackground type="dna" opacity={0.37} speed={0.5} density={0.8} direction="left-right" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Extending Human Lifespan</h2>
            <div className="h-1 w-20 bg-white/20 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="text-blue-400 mb-4 text-xl font-mono">01</div>
              <h3 className="text-xl font-bold mb-3">Lifestyle-Driven Longevity Research</h3>
              <p className="text-white/70">Harnessing the power of collective wellness data (nutrition, exercise, sleep, stress management) to identify patterns and interventions that promote healthy aging. By analyzing real-world data, we empower individuals with actionable strategies to improve their healthspan.</p>
            </div>
            
            <div className="feature-card">
              <div className="text-blue-400 mb-4 text-xl font-mono">02</div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Knowledge Synthesis</h3>
              <p className="text-white/70">
                Leveraging advanced AI models and semantic networks to process scientific research and community-contributed data. This enables the discovery of practical, validated longevity insights—transforming complex science into accessible, personalized recommendations.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="text-blue-400 mb-4 text-xl font-mono">03</div>
              <h3 className="text-xl font-bold mb-3">Decentralized Collaboration & Governance</h3>
              <p className="text-white/70">
                Leveraging advanced genetic technologies to understand and modify the epigenetic markers
                that control aging processes throughout the human lifespan.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CoreConceptsCarousel />
      
      {/* New Tokenomics Section */}
      
      
      <section ref={addToRefs as React.RefCallback<HTMLElement>} className="py-24 opacity-0 roadmap-phases relative">
        {/* Roadmap section - NO ELEMENTS AS REQUESTED */}
        <div className="absolute inset-0">
          {/* No LifeScienceBackground or FlowingLifeScienceElements as requested */}
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative">
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
                        <h3 className="text-xl font-bold mb-3">Outreach to Scientists
                      </h3>
                        <div className="space-y-2">
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>Development of AI-powered Knowledge Platform</span>
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
                        <h3 className="text-xl font-bold mb-3">Governance Structure</h3>
                        <div className="space-y-2">
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>Design a Transparent Voting Framework</span>
                          </div>
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>Enable Community-Driven Decision Making</span>
                          </div>
                          <div className="flex items-start md:justify-end text-white/70">
                            <span className="inline-block w-5 text-center mr-2 md:order-last md:ml-2 md:mr-0">•</span>
                            <span>Research Grants Allocation & Oversight</span>
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
      
      <section ref={addToRefs as React.RefCallback<HTMLElement>} className="py-24 bg-gradient-to-b from-[#080810] to-black opacity-0 relative">
        {/* Section 3: Neurons moving bidirectionally (changed from cells) */}
        <div className="absolute inset-0">
          <LifeScienceBackground type="neurons" opacity={0.37} speed={0.4} density={0.7} direction="diagonal-1" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Become part of a global community dedicated to extending human lifespans and advancing longevity research.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link to="/community" className="button-shine inline-flex items-center justify-center px-8 py-4 border border-white/20 text-lg font-medium rounded-md text-white bg-black hover:bg-black/80 transition-colors duration-300 shadow-md">
              Explore Community
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;