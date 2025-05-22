
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LifeScienceBackground from "../components/LifeScienceBackground";

const SemanticNetwork = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <LifeScienceBackground type="molecules" opacity={0.3} speed={0.2} density={0.5} direction="diagonal-1" />
      </div>
      
      <Navbar />
      
      <main className="container mx-auto px-6 py-24 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced Semantic Network of Longevity</h1>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-white/80 mb-8">
            The Advanced Semantic Network is the core knowledge engine powering the Life— LIFE Project's trusted AI platform for longevity insights.
          </p>
          
          <p className="text-lg text-white/80 mb-8">
            Unlike generic AI models that often generate unverified or misleading information, LIFE's Semantic Network is built on scientifically validated research, connecting peer-reviewed studies, expert-reviewed data, and real-world wellness inputs (like diet, exercise, and lifestyle factors).
          </p>
          
          <div className="my-10 bg-black/30 p-8 border border-white/10 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Key Functions of the Semantic Network:</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Translate complex longevity science into accessible knowledge</h3>
                <p className="pl-4 border-l-2 border-blue-400/30">
                  Simplifies relationships between lifestyle habits, health metrics, and aging mechanisms into understandable insights for everyday users.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Deliver expert-verified, reliable answers</h3>
                <p className="pl-4 border-l-2 border-blue-400/30">
                  Powers the Life Prototype's responses by ensuring every answer is based on verified scientific literature, reviewed for accuracy and safety.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Continuously evolve with new research & community data</h3>
                <p className="pl-4 border-l-2 border-blue-400/30">
                  The network grows dynamically as new longevity studies and user-contributed wellness data are added, keeping knowledge up-to-date and relevant.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Enable transparent, explainable AI outputs</h3>
                <p className="pl-4 border-l-2 border-blue-400/30">
                  Maintains causal reasoning and traceability, ensuring users can understand how each answer is derived from validated sources.
                </p>
              </div>
            </div>
          </div>
          
          <p className="my-6 text-lg">
            By focusing on delivering science-backed longevity knowledge to the community, the Semantic Network shifts from a lab-centric research tool to a community-facing AI engine, aligned with LIFE Project's mission of democratizing healthspan extension.
          </p>
          
          <div className="my-10 bg-black/30 p-8 border border-white/10 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Roadmap</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Phase 1: Scientific Onboarding & Public Awareness</h3>
                <ul className="pl-4 space-y-2 border-l-2 border-blue-400/30">
                  <li>Recruit 10+ expert advisors in longevity science, AI safety, cryptography, and healthcare ethics.</li>
                  <li>Publish the LIFE Protocol white paper and technical roadmap to define scope and vision.</li>
                  <li>Launch public Discord, Substack, and X (Twitter) presence with coordinated branding.</li>
                  <li>Start a weekly content series — "Longevity 101" and "Behind the Protocol" — to educate the community on our methodology.</li>
                  <li>Host onboarding events and Twitter Spaces with scientists and DeSci founders.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Phase 2: Encrypted Data Contribution & MVP Launch</h3>
                <ul className="pl-4 space-y-2 border-l-2 border-blue-400/30">
                  <li>Begin onboarding 100–200 early users into encrypted longevity cohorts.</li>
                  <li>Deploy Fully Homomorphic Encryption (FHE) or hybrid FHE schemes for private data processing.</li>
                  <li>Launch Longevity Coach v1: an AI-powered dashboard and chatbot providing verified, personalized healthspan recommendations.</li>
                  <li>Integrate wearable and survey-based lifestyle data into the backend AI graph.</li>
                  <li>Track user behavior, retention, and data quality for continuous improvement.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Phase 3: Protocol NFT Marketplace & DAO Governance</h3>
                <ul className="pl-4 space-y-2 border-l-2 border-blue-400/30">
                  <li>Launch Research Protocol NFTs — on-chain representations of experiments that can be forked, rated, and reproduced.</li>
                  <li>Activate DAO proposal flow — contributors can suggest focus areas, budget allocations, and research validation bounties.</li>
                  <li>Introduce staking and contributor reputation to reward reproducibility and peer review.</li>
                  <li>Run a "Proof-of-Discovery" bounty series to incentivize original and replicable research.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Phase 4: Fully Encrypted Inference & Cross-Chain Collaboration</h3>
                <ul className="pl-4 space-y-2 border-l-2 border-blue-400/30">
                  <li>Run AI inference directly on encrypted data using FHE — no raw data ever exposed.</li>
                  <li>Launch $LIFE token reward system for data validators, reviewers, and protocol replicators.</li>
                  <li>Begin formal collaborations with Gitcoin, VitaDAO, LabDAO, and others for grant support and publication channels.</li>
                  <li>Explore rollup chains or computation layers for decentralized inference scaling.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SemanticNetwork;
