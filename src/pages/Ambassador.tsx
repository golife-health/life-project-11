
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BinaryBackground from '../components/BinaryBackground';

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
      <BinaryBackground />
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
            <button className="button-shine inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 transition-colors">
              Apply Now
            </button>
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
            <div className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-sm opacity-0">
              <div className="h-40 rounded-xl bg-gray-50 flex items-center justify-center mb-5">
                <span className="text-3xl font-light">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Early Access</h3>
              <p className="text-gray-600">
                Be among the first to learn about breakthroughs in longevity research and new protocol developments.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-sm opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="h-40 rounded-xl bg-gray-50 flex items-center justify-center mb-5">
                <span className="text-3xl font-light">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Token Rewards</h3>
              <p className="text-gray-600">
                Earn $LIFE tokens for your contributions to the ecosystem and community growth initiatives.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-sm opacity-0" style={{ animationDelay: '0.2s' }}>
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
      
      {/* Application Process */}
      <section className="py-16 bg-gray-50" ref={addToRefs}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Application Process
            </h2>
            
            <div className="space-y-10">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center">
                    1
                  </div>
                  <div className="h-full w-px bg-gray-200 ml-6 -mb-16 hidden md:block"></div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">Complete the Application</h3>
                  <p className="text-gray-600">
                    Fill out our comprehensive application form detailing your background, skills, and interest in longevity research.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center">
                    2
                  </div>
                  <div className="h-full w-px bg-gray-200 ml-6 -mb-16 hidden md:block"></div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">Interview Process</h3>
                  <p className="text-gray-600">
                    Selected applicants will be invited for a virtual interview with our community leaders to discuss mutual goals.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center">
                    3
                  </div>
                  <div className="h-full w-px bg-gray-200 ml-6 -mb-16 hidden md:block"></div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">Onboarding</h3>
                  <p className="text-gray-600">
                    Successful candidates will receive comprehensive training on the protocol, technologies, and ambassador responsibilities.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center">
                    4
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">Begin Your Journey</h3>
                  <p className="text-gray-600">
                    Start representing $LIFE in your region, contributing to our mission of extending human lifespans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16" ref={addToRefs}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to make a difference?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Apply today to become a $LIFE Ambassador and join us in revolutionizing human longevity research.
            </p>
            <button className="button-shine inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 transition-colors">
              Start Your Application
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Ambassador;
