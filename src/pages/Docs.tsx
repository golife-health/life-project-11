
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BinaryBackground from '../components/BinaryBackground';

const Docs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen">
      <BinaryBackground />
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto mb-12 opacity-0 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-lg text-gray-600">
              Learn about the $LIFE Protocol, its mission, technology, and how you can participate in extending human lifespans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-1 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                    activeTab === 'overview' ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('tokenomics')}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                    activeTab === 'tokenomics' ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'
                  }`}
                >
                  Tokenomics
                </button>
                <button
                  onClick={() => setActiveTab('research')}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                    activeTab === 'research' ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'
                  }`}
                >
                  Research Focus
                </button>
                <button
                  onClick={() => setActiveTab('roadmap')}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                    activeTab === 'roadmap' ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'
                  }`}
                >
                  Roadmap
                </button>
                <button
                  onClick={() => setActiveTab('faq')}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                    activeTab === 'faq' ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'
                  }`}
                >
                  FAQ
                </button>
              </div>
            </div>
            
            {/* Content Area */}
            <div className="md:col-span-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <p className="text-gray-700">
                    The $LIFE Protocol is a revolutionary initiative that combines blockchain technology with advanced biomedical research to extend human lifespans. Our mission is to accelerate breakthroughs in longevity science by creating a decentralized funding mechanism for cutting-edge research.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-3">Core Principles</h3>
                  <ul className="space-y-2 list-disc pl-6 text-gray-700">
                    <li>
                      <strong>Research-First Approach:</strong> We prioritize scientific advancement over short-term gains, ensuring that all protocol activities contribute to our central mission.
                    </li>
                    <li>
                      <strong>Transparency:</strong> All research funding and progress is publicly tracked on-chain, ensuring full visibility for token holders.
                    </li>
                    <li>
                      <strong>Community Governance:</strong> The $LIFE community has direct input on research priorities and funding allocations through our governance system.
                    </li>
                    <li>
                      <strong>Ethical Innovation:</strong> We adhere to the highest ethical standards in all research activities, ensuring responsible advancement of longevity technologies.
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-3">Protocol Structure</h3>
                  <p className="text-gray-700">
                    The $LIFE Protocol operates through a multi-layered structure:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-semibold mb-2">Research Treasury</h4>
                      <p className="text-sm text-gray-600">
                        50% of all protocol revenues are directed to the Research Treasury, which funds longevity studies and clinical trials.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-semibold mb-2">Community Fund</h4>
                      <p className="text-sm text-gray-600">
                        20% of revenues support community initiatives, education, and ambassador programs to expand the $LIFE ecosystem.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-semibold mb-2">Governance</h4>
                      <p className="text-sm text-gray-600">
                        $LIFE token holders can vote on key protocol decisions through our decentralized governance system.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-semibold mb-2">Technology Development</h4>
                      <p className="text-sm text-gray-600">
                        30% of revenues fund the ongoing development of the protocol's technology infrastructure and innovations.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'tokenomics' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Tokenomics</h2>
                  <p className="text-gray-700">
                    The $LIFE token is the core economic unit of our protocol, designed to align incentives between researchers, community members, and investors while funding longevity research.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-3">Token Distribution</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Research Fund</span>
                        <span className="font-medium">40%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-black h-2.5 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-700">Community & Ecosystem</span>
                        <span className="font-medium">25%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-black h-2.5 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-700">Team & Advisors</span>
                        <span className="font-medium">15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-black h-2.5 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-700">Public Sale</span>
                        <span className="font-medium">10%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-black h-2.5 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-700">Liquidity</span>
                        <span className="font-medium">10%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-black h-2.5 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-3">Token Utility</h3>
                  <ul className="space-y-2 list-disc pl-6 text-gray-700">
                    <li>
                      <strong>Governance:</strong> Vote on research priorities, funding allocations, and protocol upgrades.
                    </li>
                    <li>
                      <strong>Research Access:</strong> Token holders gain priority access to research findings and potential therapies.
                    </li>
                    <li>
                      <strong>Protocol Fee Sharing:</strong> A percentage of protocol fees are distributed to staked token holders.
                    </li>
                    <li>
                      <strong>Ambassador Status:</strong> Holding a minimum threshold of tokens qualifies you for ambassador program consideration.
                    </li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'research' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Research Focus</h2>
                  <p className="text-gray-700">
                    The $LIFE Protocol focuses its research funding on the most promising areas of longevity science with potential for significant lifespan extension.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-3">Cellular Rejuvenation</h3>
                      <p className="text-gray-700">
                        Research focused on restoring aging cells to their youthful state through targeted interventions in cellular metabolism and epigenetic reprogramming.
                      </p>
                      <div className="mt-4 text-sm text-gray-500">
                        <p className="font-medium">Key Research Areas:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Epigenetic clock reversal</li>
                          <li>Cellular senescence clearance</li>
                          <li>Mitochondrial optimization</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-3">Genetic Engineering</h3>
                      <p className="text-gray-700">
                        Developing genetic tools to identify, modify, and optimize genes and genetic pathways associated with longevity and age-related diseases.
                      </p>
                      <div className="mt-4 text-sm text-gray-500">
                        <p className="font-medium">Key Research Areas:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>CRISPR-based gene therapies</li>
                          <li>Longevity gene variant identification</li>
                          <li>Epigenetic modification tools</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-3">Tissue Regeneration</h3>
                      <p className="text-gray-700">
                        Advancing technologies that can restore damaged or aging tissues and organs through stem cell therapies and regenerative medicine.
                      </p>
                      <div className="mt-4 text-sm text-gray-500">
                        <p className="font-medium">Key Research Areas:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Organ-specific stem cell therapies</li>
                          <li>Bioprinting of tissues and organs</li>
                          <li>Regenerative signaling enhancement</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-3">Longevity Compounds</h3>
                      <p className="text-gray-700">
                        Identifying and developing pharmaceuticals and nutraceuticals that target aging pathways to extend healthy lifespan.
                      </p>
                      <div className="mt-4 text-sm text-gray-500">
                        <p className="font-medium">Key Research Areas:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Senolytics and senomorphics</li>
                          <li>NAD+ precursors and enhancers</li>
                          <li>mTOR pathway modulators</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'roadmap' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Roadmap</h2>
                  <p className="text-gray-700">
                    Our strategic plan for developing the $LIFE Protocol and advancing longevity research.
                  </p>
                  
                  <div className="space-y-12 mt-8">
                    <div className="relative pl-10 md:pl-0">
                      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                      
                      <div className="relative md:pl-10">
                        <div className="hidden md:block absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-black bg-white"></div>
                        <h3 className="text-xl font-semibold">Phase 1: Foundation (Q2-Q3 2023)</h3>
                        <ul className="mt-4 space-y-2 list-disc pl-6 text-gray-700">
                          <li>Protocol whitepaper and documentation</li>
                          <li>Initial team assembly and advisors</li>
                          <li>Website and social channels launch</li>
                          <li>Legal entity establishment</li>
                          <li>Token contract development and audit</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="relative pl-10 md:pl-0">
                      <div className="relative md:pl-10">
                        <div className="hidden md:block absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-black bg-white"></div>
                        <h3 className="text-xl font-semibold">Phase 2: Launch (Q4 2023 - Q1 2024)</h3>
                        <ul className="mt-4 space-y-2 list-disc pl-6 text-gray-700">
                          <li>Private and public token sale</li>
                          <li>DEX listing and liquidity provision</li>
                          <li>Ambassador program initiation</li>
                          <li>Research committee formation</li>
                          <li>First research grants announcement</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="relative pl-10 md:pl-0">
                      <div className="relative md:pl-10">
                        <div className="hidden md:block absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-black bg-white"></div>
                        <h3 className="text-xl font-semibold">Phase 3: Research Acceleration (Q2-Q4 2024)</h3>
                        <ul className="mt-4 space-y-2 list-disc pl-6 text-gray-700">
                          <li>Expansion of research partnerships</li>
                          <li>Quarterly research updates and publications</li>
                          <li>Governance system implementation</li>
                          <li>Community expansion initiatives</li>
                          <li>Development of research portal for token holders</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="relative pl-10 md:pl-0">
                      <div className="relative md:pl-10">
                        <div className="hidden md:block absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-black bg-white"></div>
                        <h3 className="text-xl font-semibold">Phase 4: Protocol Expansion (2025 and beyond)</h3>
                        <ul className="mt-4 space-y-2 list-disc pl-6 text-gray-700">
                          <li>Major research breakthroughs and clinical trials</li>
                          <li>IP development and commercialization</li>
                          <li>Global research institute establishment</li>
                          <li>Additional token utility expansion</li>
                          <li>Strategic partnerships with biotech and pharmaceutical companies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'faq' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold mb-2">What is the $LIFE Protocol?</h3>
                      <p className="text-gray-700">
                        The $LIFE Protocol is a decentralized platform that combines blockchain technology with biomedical research to fund and accelerate breakthroughs in human longevity science.
                      </p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold mb-2">How does the $LIFE token work?</h3>
                      <p className="text-gray-700">
                        The $LIFE token is the native cryptocurrency of our ecosystem, providing governance rights, access to research findings, and economic alignment between all stakeholders in the protocol.
                      </p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold mb-2">What research areas does the protocol focus on?</h3>
                      <p className="text-gray-700">
                        We focus on the most promising areas of longevity science, including cellular rejuvenation, genetic engineering, tissue regeneration, and longevity compounds that target aging pathways.
                      </p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold mb-2">How can I become an ambassador?</h3>
                      <p className="text-gray-700">
                        You can apply through our Ambassador Program application process. Successful candidates will have a genuine interest in longevity science and the skills to help grow our community.
                      </p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold mb-2">How are research decisions made?</h3>
                      <p className="text-gray-700">
                        Research funding decisions are made through a combination of expert committee recommendations and community governance votes. This ensures both scientific rigor and community alignment.
                      </p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold mb-2">Where can I buy $LIFE tokens?</h3>
                      <p className="text-gray-700">
                        $LIFE tokens are available on Solana-based decentralized exchanges. The specific contract address and trading venues are listed in our documentation.
                      </p>
                    </div>
                    
                    <div className="pb-4">
                      <h3 className="text-lg font-semibold mb-2">How is the protocol sustainable long-term?</h3>
                      <p className="text-gray-700">
                        The protocol generates sustainable funding through a combination of token value appreciation, protocol fees, and commercialization of research findings, creating a virtuous cycle of research and value creation.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Docs;
