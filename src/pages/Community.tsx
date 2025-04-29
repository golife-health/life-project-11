import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NeuronBackground from '../components/NeuronBackground';
import LifeScienceBackground from '../components/LifeScienceBackground';

const Community = () => {
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
              Join Our Community
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Connect with like-minded individuals passionate about advancing human longevity and revolutionizing biotechnology.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-shine inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 transition-colors"
              >
                Twitter Community
              </a>
              <a 
                href="https://discord.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button-shine inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Discord Server
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Values */}
      <section className="py-20 relative" ref={addToRefs}>
        <div className="absolute inset-0">
          <LifeScienceBackground type="neurons" opacity={0.37} speed={0.5} direction="diagonal-2" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="max-w-3xl mx-auto text-center mb-16 opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Community Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that unite us in our mission to extend human lifespans and improve quality of life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-sm opacity-0">
              <div className="h-40 rounded-xl bg-gray-50 flex items-center justify-center mb-5">
                <span className="text-3xl font-light">🔬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Scientific Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of scientific rigor, transparency, and ethical research practices in all our endeavors.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-sm opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="h-40 rounded-xl bg-gray-50 flex items-center justify-center mb-5">
                <span className="text-3xl font-light">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaborative Innovation</h3>
              <p className="text-gray-600">
                We believe in the power of diverse perspectives and interdisciplinary collaboration to solve complex challenges in longevity science.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-sm opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="h-40 rounded-xl bg-gray-50 flex items-center justify-center mb-5">
                <span className="text-3xl font-light">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Access</h3>
              <p className="text-gray-600">
                We're committed to ensuring that longevity advances are accessible to people worldwide, regardless of geographic or socioeconomic barriers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get Involved */}
      <section className="py-16 bg-gray-50 relative" ref={addToRefs}>
        <div className="absolute inset-0">
          <LifeScienceBackground type="dna" opacity={0.37} speed={0.4} direction="left-right" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="max-w-3xl mx-auto opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Ways to Get Involved
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center mb-4">
                  <span>1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Join the Conversation</h3>
                <p className="text-gray-600 mb-4">
                  Participate in our community forums, Twitter spaces, and Discord channels to discuss the latest in longevity research.
                </p>
                <a 
                  href="https://discord.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-medium text-black hover:underline"
                >
                  Join Discord →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center mb-4">
                  <span>2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Become a Token Holder</h3>
                <p className="text-gray-600 mb-4">
                  Acquire $LIFE tokens to participate in governance and support the protocol's research initiatives.
                </p>
                <button className="text-sm font-medium text-black hover:underline">
                  Buy $LIFE →
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center mb-4">
                  <span>3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Apply as an Ambassador</h3>
                <p className="text-gray-600 mb-4">
                  Represent $LIFE in your region and help grow our global community of longevity advocates.
                </p>
                <a 
                  href="/ambassador" 
                  className="text-sm font-medium text-black hover:underline"
                >
                  Learn More →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center mb-4">
                  <span>4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Contribute Research</h3>
                <p className="text-gray-600 mb-4">
                  Scientists and researchers can apply for grants and collaborate on protocol-funded studies.
                </p>
                <a 
                  href="/docs" 
                  className="text-sm font-medium text-black hover:underline"
                >
                  View Guidelines →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Metrics */}
      <section className="py-20 relative" ref={addToRefs}>
        <div className="absolute inset-0">
          <LifeScienceBackground type="molecules" opacity={0.37} speed={0.6} direction="bottom-top" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="max-w-3xl mx-auto text-center mb-16 opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Growing Community
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of longevity enthusiasts, researchers, and advocates from around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="p-6 rounded-2xl border border-gray-100 text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">15K+</p>
              <p className="text-gray-600">Community Members</p>
            </div>
            
            <div className="p-6 rounded-2xl border border-gray-100 text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">50+</p>
              <p className="text-gray-600">Countries Represented</p>
            </div>
            
            <div className="p-6 rounded-2xl border border-gray-100 text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">25+</p>
              <p className="text-gray-600">Research Partners</p>
            </div>
            
            <div className="p-6 rounded-2xl border border-gray-100 text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">$2M+</p>
              <p className="text-gray-600">Research Funded</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Events Calendar */}
      <section className="py-16 bg-gray-50 relative" ref={addToRefs}>
        <div className="absolute inset-0">
          <LifeScienceBackground type="cells" opacity={0.37} speed={0.3} direction="right-left" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="max-w-3xl mx-auto text-center mb-16 opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Join us for virtual and in-person events to learn more about the $LIFE Protocol and longevity science.
            </p>
          </div>
          
          <div className="space-y-6 opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/6 mb-4 md:mb-0">
                  <div className="text-center md:text-left">
                    <p className="text-sm text-gray-500">OCT</p>
                    <p className="text-3xl font-bold">15</p>
                  </div>
                </div>
                
                <div className="md:w-3/6 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold">Twitter Space: Longevity Research Updates</h3>
                  <p className="text-gray-600 mt-1">Virtual | 1:00 PM EST</p>
                </div>
                
                <div className="md:w-2/6 flex justify-end">
                  <button className="button-shine inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 transition-colors">
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/6 mb-4 md:mb-0">
                  <div className="text-center md:text-left">
                    <p className="text-sm text-gray-500">NOV</p>
                    <p className="text-3xl font-bold">05</p>
                  </div>
                </div>
                
                <div className="md:w-3/6 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold">$LIFE Protocol Community Call</h3>
                  <p className="text-gray-600 mt-1">Discord | 11:00 AM EST</p>
                </div>
                
                <div className="md:w-2/6 flex justify-end">
                  <button className="button-shine inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 transition-colors">
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/6 mb-4 md:mb-0">
                  <div className="text-center md:text-left">
                    <p className="text-sm text-gray-500">DEC</p>
                    <p className="text-3xl font-bold">10</p>
                  </div>
                </div>
                
                <div className="md:w-3/6 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold">Longevity Summit 2023</h3>
                  <p className="text-gray-600 mt-1">San Francisco + Virtual | 9:00 AM PST</p>
                </div>
                
                <div className="md:w-2/6 flex justify-end">
                  <button className="button-shine inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Join Our Community */}
      <section className="py-16 relative" ref={addToRefs}>
        <div className="absolute inset-0">
          <LifeScienceBackground type="mixed" opacity={0.37} speed={0.5} direction="diagonal-1" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="bg-black text-white p-10 md:p-16 rounded-3xl opacity-0">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join us in extending human lifespans
              </h2>
              <p className="text-lg opacity-80 mb-8">
                Become part of our global community working to revolutionize longevity research and create a longer, healthier future for humanity.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-shine inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Community;
