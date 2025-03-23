import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BinaryBackground from "../components/BinaryBackground";

const Whitepaper = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <BinaryBackground />
      <Navbar />
      
      {/* Top right logo removed */}
      
      <div className="container mx-auto px-6 max-w-7xl pt-24">
        <div className="min-h-screen flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Whitepaper</h1>
          <p className="text-lg text-white/80 mb-8">
            A comprehensive overview of the $LIFE token, its purpose, and technical specifications.
          </p>
          
          <div className="space-y-8">
            <section className="glass-panel p-6">
              <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
              <p className="text-white/70">
                The complete whitepaper for the $LIFE token is currently being finalized. 
                Check back soon for in-depth information about our technology, tokenomics, and research initiatives.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Whitepaper;
