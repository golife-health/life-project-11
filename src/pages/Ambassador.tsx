
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NeuronBackground from '../components/NeuronBackground';
import AmbassadorForm from '../components/AmbassadorForm';

const Ambassador = () => {
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
      <NeuronBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Become a $LIFE Ambassador
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join our visionary community of ambassadors dedicated to advancing human longevity through blockchain-powered research.
            </p>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20" ref={addToRefs}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ambassador Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Joining as an ambassador gives you exclusive access to the cutting edge of longevity research and technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card opacity-0">
              <div className="h-40 rounded-xl bg-gray-50 flex items-center justify-center mb-5">
                <span className="text-3xl font-light">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Early Access</h3>
              <p className="text-gray-600">
                Be among the first to learn about breakthroughs in longevity research and new protocol developments.
              </p>
            </div>
            
            <div className="feature-card opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="h-40 rounded-xl bg-gray-50 flex items-center justify-center mb-5">
                <span className="text-3xl font-light">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Token Rewards</h3>
              <p className="text-gray-600">
                Earn $LIFE tokens for your contributions to the ecosystem and community growth initiatives.
              </p>
            </div>
            
            <div className="feature-card opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="h-40 rounded-xl bg-gray-50 flex items-center justify-center mb-5">
                <span className="text-3xl font-light">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Network Access</h3>
              <p className="text-gray-600">
                Connect with leading researchers, scientists, and visionaries in the longevity and blockchain space.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form Section */}
      <section className="py-16 bg-gray-50" ref={addToRefs}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Apply to Become an Ambassador
            </h2>
            
            <AmbassadorForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Ambassador;
