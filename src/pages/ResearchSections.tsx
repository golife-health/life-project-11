
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LifeScienceBackground from '../components/LifeScienceBackground';

const ResearchSections = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Main content with research sections */}
      <div className="container mx-auto px-6 max-w-6xl pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">Advanced Research Initiatives</h1>
        
        {/* Section 1: Epigenetic Clock & Engineering */}
        <section className="mb-24 relative">
          <div className="absolute inset-0 -z-10">
            <LifeScienceBackground type="dna" opacity={0.25} speed={0.5} density={0.6} direction="left-right" />
          </div>
          <div className="glass-panel p-8 relative z-10 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Epigenetic Clock & Engineering</h2>
            <div className="h-1 w-20 bg-blue-400/50 mb-6"></div>
            <p className="text-lg leading-relaxed">
              DNA methylation marks serve as precise molecular timestamps, forming the basis of <strong>epigenetic age assessment</strong> that often diverges from chronological age. Our research pioneers targeted intervention methods that selectively modify these epigenetic markers, effectively "rewinding" biological processes to restore youthful cell function. Through precise <strong>methylation reprogramming</strong>, we can alter cellular behavior without changing DNA sequence, potentially reversing age-associated decline and disease susceptibility. This approach allows us to address the root causes of aging rather than merely treating symptoms, marking a fundamental shift in longevity science and therapeutic development.
            </p>
          </div>
        </section>
        
        {/* Section 2: Advanced Semantic Network of Longevity */}
        <section className="mb-24 relative">
          <div className="absolute inset-0 -z-10">
            <LifeScienceBackground type="neurons" opacity={0.25} speed={0.4} density={0.7} direction="diagonal-1" />
          </div>
          <div className="glass-panel p-8 relative z-10 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Advanced Semantic Network of Longevity</h2>
            <div className="h-1 w-20 bg-blue-400/50 mb-6"></div>
            <p className="text-lg leading-relaxed">
              Our dynamic <strong>AI-powered knowledge graph</strong> represents a revolutionary approach to longevity research, creating meaningful connections between genes, proteins, interventions, and clinical outcomes. This intelligent network continuously evolves as it integrates new research findings, clinical data, and multi-omics insights, revealing previously hidden patterns in the complex mechanisms of aging. By applying advanced <strong>network medicine principles</strong>, we can identify novel intervention targets and develop personalized longevity protocols tailored to individual genetic and epigenetic profiles. This platform accelerates discovery by orders of magnitude compared to traditional research methods, democratizing access to cutting-edge aging science and facilitating unprecedented collaboration among researchers globally.
            </p>
          </div>
        </section>
        
        {/* Section 3: Privacy-Preserving Health Data with FHE */}
        <section className="mb-24 relative">
          <div className="absolute inset-0 -z-10">
            <LifeScienceBackground type="molecules" opacity={0.25} speed={0.6} density={0.5} direction="bottom-top" />
          </div>
          <div className="glass-panel p-8 relative z-10 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Privacy-Preserving Health Data with FHE</h2>
            <div className="h-1 w-20 bg-blue-400/50 mb-6"></div>
            <p className="text-lg leading-relaxed">
              <strong>Fully Homomorphic Encryption (FHE)</strong> transforms how we handle sensitive health information by enabling computation directly on encrypted data without ever revealing the underlying information. This breakthrough technology allows our systems to analyze genetic, epigenetic, and biomarker data while maintaining absolute privacy, eliminating the traditional tradeoff between data utility and confidentiality. Leveraging Mind Network's open-source SDK, we've implemented <strong>privacy-preserving analytics</strong> that enable individuals to contribute their health data to research without compromising personal security. Our approach empowers users with complete ownership of their health information while simultaneously accelerating research through secure, ethical data sharing that was previously impossible with conventional encryption methods.
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default ResearchSections;
