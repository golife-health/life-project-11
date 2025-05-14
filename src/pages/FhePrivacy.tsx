
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LifeScienceBackground from "../components/LifeScienceBackground";

const FhePrivacy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <LifeScienceBackground type="neurons" opacity={0.3} speed={0.2} density={0.5} direction="right-left" />
      </div>
      
      <Navbar />
      
      <main className="container mx-auto px-6 py-24 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Secure Health Data with FHE</h1>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-white/80 mb-8">
            We believe your health journey is confidential. That's why Life Project integrates Fully Homomorphic Encryption (FHE)—a breakthrough that lets you store, compute on, and share encrypted health metrics without ever decrypting them on our servers.
          </p>
          
          <div className="my-10 bg-black/30 p-8 border border-white/10 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Security Features</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Bulletproof Privacy</h3>
                <p>Insurers, researchers, or even our own team can run complex analytics—risk scoring, cohort comparisons, AI-driven predictions—directly on your encrypted data.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Zero-Trust Architecture</h3>
                <p>Raw genomic, epigenomic, and lifestyle logs never leave your device unencrypted.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Open-Source Foundations</h3>
                <p>Built on the same FHE SDK that powers the World-AI Health Hub and Mind Lake Python toolkit, you get industrial-strength security plus full transparency.</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-12 mb-6">How FHE Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div>
              <p>
                Fully Homomorphic Encryption (FHE) is a revolutionary cryptographic technique that allows computations to be performed directly on encrypted data without requiring decryption first.
              </p>
              <p className="mt-4">
                Traditional encryption methods require data to be decrypted before any analysis can be performed—creating a security vulnerability. With FHE, your sensitive health information remains encrypted at all times, even during analysis.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-3">Real-World Applications</h3>
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>Multi-party clinical research without data sharing</li>
                <li>Private health predictions and recommendations</li>
                <li>Secure telemetry from wearable health devices</li>
                <li>Privacy-preserving genetic analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FhePrivacy;
